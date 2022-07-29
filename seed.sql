
-- jobsite inserts
INSERT INTO jobsite (total_workers, total_tools, starting) VALUES (7, 14, '2022-07-28');


-- tools inserts
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Circular Saw', '$80.00', 'D', 3, 'Power Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Circular Saw Blades', '$6.00', 'C', 24, 'Accessories', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Nail Gun Framing', '$220.00', 'D', 5, 'Air Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Nail Gun Roofing', '$200.00', 'D', 2, 'Air Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Level', '$60.00', 'X', 6, 'Hand Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Reciprocating Saw', '$110.00', 'D', 2, 'Power Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Drill Corded', '$75.80', 'D', 4, 'Power Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Drill Cordless', '$85.80', 'D', 1, 'Power Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Battery, Dewalt', '$45.80', 'X', 4, 'Accessories', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Square, 4ft', '$20.80', 'X', 2, 'Hand Tools', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Nails, Framing', '$100.55', 'C', 20, 'Fasteners', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Nails, Finish', '$30.85', 'C', 6, 'Fasteners', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Nails, Siding', '$90.00', 'C', 30, 'Fasteners', 1);
INSERT INTO tools (tool_name, cost, classification, quantity, type, jobsite_id) VALUES ('Nails, Roofing', '$123.60', 'C', 8, 'Fasteners', 1);

-- workers inserts
INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id) VALUES ('Marco', 23, 'Framing', '$15.00', 1);
INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id) VALUES ('John', 47, 'Framing', '$35.80', 1);
INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id) VALUES ('Jane', 30, 'Painting', '$25.06', 1);
INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id) VALUES ('Jimmy', 19, 'Cleaning', '$12.40', 1);
INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id) VALUES ('Mark', 46, 'Exterior', '$50.00', 1);
INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id) VALUES ('Clark', 18, 'Exterior', '$20.00', 1);
INSERT INTO workers (worker_name, age, specialty, pay, jobsite_id) VALUES ('James', 26, 'Framing', '$38.75', 1);