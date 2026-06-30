const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "/login.html";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "/login.html";
});

async function loadInteractions() {

    const response = await fetch("/interactions");

    const interactions = await response.json();

    const table = document.getElementById("interactionTable");

    table.innerHTML = "";

    interactions.forEach((interaction) => {

        table.innerHTML += `
            <tr>
                <td>${interaction.username}</td>
                <td>${interaction.command}</td>
                <td>${interaction.message}</td>
                <td class="success">${interaction.response}</td>
                <td>${new Date(interaction.created_at).toLocaleString()}</td>
            </tr>
        `;

    });

}

async function loadSettings() {

    const response = await fetch("/settings");

    const settings = await response.json();

    document.getElementById("autoReply").checked =
        settings.auto_reply;

    document.getElementById("mirrorNotification").checked =
        settings.mirror_notification;

}

document.getElementById("saveSettings")
.addEventListener("click", async () => {

    await fetch("/settings", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            auto_reply:
                document.getElementById("autoReply").checked,

            mirror_notification:
                document.getElementById("mirrorNotification").checked

        })

    });

    alert("Settings Updated!");

});

loadSettings();

loadInteractions();