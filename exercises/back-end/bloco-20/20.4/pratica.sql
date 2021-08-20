use sakila;

INSERT INTO staff (first_name, last_name, address_id, store_id, username) VALUES('Rafael', 'Cavalcante', 2, 2, 'faelces');

INSERT INTO staff (first_name, last_name, address_id, store_id, username) VALUES('Thaigo', 'Cavalcante', 2, 2, 'thiagofox'), ('Igor', 'Beltrao', 1, 1, 'igorbes');

INSERT INTO actor (first_name, last_name)
SELECT  first_name
       ,last_name
FROM customer
ORDER BY first_name
LIMIT 5;

INSERT INTO category (`name`) VALUES ('ação'), ('aventura'), ('terror');

INSERT INTO store (manager_staff_id, address_id) VALUES (5, 10); 

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA'; 

UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi'; 

UPDATE film
SET rental_rate = 25.00
WHERE length > 100
AND rating IN ("G" , "PG", "PG-13")
AND replacement_cost > 20.00;