const pool = require("../config/db");

const getInteractions = async (req, res) => {
    try {

        const result = await pool.query(
            `
            SELECT
                username,
                command,
                message,
                response,
                created_at
            FROM interactions
            ORDER BY created_at DESC
            `
        );

        res.json(result.rows);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

const getSettings = async (req, res) => {
    try {

        const result = await pool.query(
            "SELECT * FROM settings LIMIT 1"
        );

        res.json(result.rows[0]);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

const updateSettings = async (req, res) => {

    try {

        const { auto_reply, mirror_notification } = req.body;

        await pool.query(
            `
            UPDATE settings
            SET auto_reply=$1,
                mirror_notification=$2
            WHERE id=1
            `,
            [auto_reply, mirror_notification]
        );

        res.json({
            message: "Settings updated"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    getInteractions,
    getSettings,
    updateSettings
};