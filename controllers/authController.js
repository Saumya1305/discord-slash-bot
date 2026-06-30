const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

    try {

        const { username, password } = req.body;

        const result = await pool.query(
            "SELECT * FROM admins WHERE username = $1",
            [username]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const admin = result.rows[0];

        const validPassword = await bcrypt.compare(
            password,
            admin.password
        );

        if (!validPassword) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const token = jwt.sign(
            {
                id: admin.id,
                username: admin.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            token
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    login
};