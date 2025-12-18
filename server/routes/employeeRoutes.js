const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all employees
router.get("/", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// ADD employee
router.post("/", (req, res) => {
    const { name, role, salary } = req.body;
    const sql = "INSERT INTO employees (name, role, salary) VALUES (?, ?, ?)";
    db.query(sql, [name, role, salary], err => {
        if (err) throw err;
        res.send("Employee Added");
    });
});

// DELETE employee
router.delete("/:id", (req, res) => {
    const sql = "DELETE FROM employees WHERE id=?";
    db.query(sql, [req.params.id], err => {
        if (err) throw err;
        res.send("Employee Deleted");
    });
});

module.exports = router;


