DROP TABLE IF EXISTS jobsite, tools, workers;

CREATE TABLE jobsite (
    jobsite_id SERIAL PRIMARY KEY,
    total_workers INT,
    total_tools INT,
    tools_cost MONEY, 
    starting DATE,
    ending DATE
);

CREATE TABLE tools (
    tool_id SERIAL PRIMARY KEY,
    tool_name TEXT,
    cost MONEY,
    classification VARCHAR(1),
    quantity INT, 
    type TEXT,
    jobsite_id INT, 
    CONSTRAINT job 
        FOREIGN KEY(jobsite_id) 
            REFERENCES jobsite(jobsite_id)
);

CREATE TABLE workers (
    worker_id SERIAL PRIMARY KEY,
    worker_name TEXT,
    age INT,
    specialty TEXT,
    pay MONEY,
    jobsite_id INT, 
    CONSTRAINT job 
        FOREIGN KEY(jobsite_id) 
            REFERENCES jobsite(jobsite_id)
);