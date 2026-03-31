const express = require("express");
const app = express();

app.use(express.json());

let members = [];

// Add Member
app.post("/add-member", (req, res) => {
    const { name, plan } = req.body;

    const member = {
        id: members.length + 1,
        name,
        plan,
        status: "Active"
    };

    members.push(member);
    res.json(member);
});

// Get Members
app.get("/members", (req, res) => {
    res.json(members);
});

// Home route
app.get("/", (req, res) => {
    res.send("Gym Member Tracker API 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});