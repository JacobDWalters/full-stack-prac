import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// const dbConfig = {
//     connectionString: process.env.DATABASE_URL,
//     ...PORT(process.env.NODE_ENV === 'production' ? 
//     {
//         ssl: {
//             rejectUnauthorized: false,
//         }
//     }
//     : {}),
// }

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  
module.exports = pool; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// CREATE
app.post("/jobsite", (req, res) => {
    const { total_workers, total_tools, starting } = req.body; 
    pool.query(
        `INSERT INTO jobsite 
        (total_workers, total_tools, starting)
        VALUES ($1, $2, $3) RETURNING *`, 
        [total_workers, total_tools, starting]
    ).then((str) => {
        res.send(str.rows[0]);
    });
});

app.post("/tools", (req, res) => {
    const { tool_name, cost, classification, quantity, type, jobsite_id } = req.body; 
    pool.query(
        `INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, 
        [ tool_name, cost, classification, quantity, type, jobsite_id ]
    ).then((str) => {
        res.send(str.rows[0]);
    });
});

app.post("/workers", (req, res) => {
    const { worker_name, age, specialty, pay, jobsite_id } = req.body; 
    pool.query(
        `INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
        [worker_name, age, specialty, pay, jobsite_id]
    ).then((str) => {
        res.send(str.rows[0]);
    });
});


// READ 
app.get("/jobsite", (req, res) => {
    pool.query("SELECT * FROM jobsite;").then((str) => {
        res.send(str.rows);
    });
});

app.get("/tools", (req, res) => {
    pool.query("SELECT * FROM tools;").then((str) => {
        res.send(str.rows);
    });
});

app.get("/workers", (req, res) => {
    pool.query("SELECT * FROM workers;").then((str) => {
        res.send(str.rows);
    });
});


//UPDATE
app.patch("jobsite/:id", (req, res) => {
    const id = req.params.id;
    const { total_workers, total_tools, starting } = req.body;
    pool.query(
        `UPDATE jobsite SET
        total_workers = COALESCE($1, total_workers),
        total_tools = COALESCE($2, total_tools),
        starting = COALESCE($3, starting)
        WHERE id = $4
        RETURNING *;`,
        [ total_workers, total_tools, starting, id]
    ).then((str) => {
        res.send(str.rows[0]);
    });
});

app.patch("tools/:id", (req, res) => {
    const id = req.params.id;
    const { tool_name, cost, classification, quantity, type, jobsite_id } = req.body;
    pool.query(
        `UPDATE jobsite SET
        tool_name = COALESCE($1, tool_name),
        cost = COALESCE($2, cost),
        classification = COALESCE($3, classification),
        quantity = COALESCE($4, quantity),
        type = COALESCE($5, type),
        jobsite_id = COALESCE($6, jobsite_id)
        WHERE id = $7
        RETURNING *;`,
        [ tool_name, cost, classification, quantity, type, jobsite_id, id]
    ).then((str) => {
        res.send(str.rows[0]);
    });
});

app.patch("workers/:id", (req, res) => {
    const id = req.params.id;
    const { worker_name, age, specialty, pay, jobsite_id } = req.body;
    pool.query(
        `UPDATE jobsite SET
        worker_name = COALESCE($1, worker_name),
        age = COALESCE($2, age),
        specialty = COALESCE($3, specialty),
        pay = COALESCE($4, pay),
        jobsite_id = COALESCE($5, jobsite_id)
        WHERE id = $6
        RETURNING *;`,
        [ worker_name, age, specialty, pay, jobsite_id, id]
    ).then((str) => {
        res.send(str.rows[0]);
    });
});


//DELETE
app.delete("/jobsite/:id", (req, res) => {
    const id = req.params.id;
    pool.query("DELETE FROM jobsite WHERE id = $1 RETURNING *", [id]).then((str) => {
        res.send(str.rows[0]);
    });
});

//DELETE
app.delete("/tools/:id", (req, res) => {
    const id = req.params.id;
    pool.query("DELETE FROM tools WHERE id = $1 RETURNING *", [id]).then((str) => {
        res.send(str.rows[0]);
    });
});

//DELETE
app.delete("/workers/:id", (req, res) => {
    const id = req.params.id;
    pool.query("DELETE FROM workers WHERE id = $1 RETURNING *", [id]).then((str) => {
        res.send(str.rows[0]);
    });
});


app.use((req, res, err, next) => {
    res.sendStatus(500);
});

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
});