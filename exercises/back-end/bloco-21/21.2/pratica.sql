SELECT
      a.first_name,
      a.actor_id,
      f.film_id
FROM
      actor a
      INNER JOIN film_actor f ON a.actor_id = f.actor_id;

SELECT
      s.first_name,
      s.last_name,
      a.address
FROM
      staff s
      INNER JOIN `address` a ON s.address_id = a.address_id;

SELECT
      c.customer_id,
      c.first_name,
      c.email,
      a.address_id,
      a.address
FROM
      customer c
      INNER JOIN `address` a ON c.address_id = a.address_id
LIMIT
      100;

SELECT
      c.first_name,
      c.email,
      c.address_id,
      a.address,
      a.district
FROM
      customer c
      INNER JOIN `address` a ON c.address_id = a.address_id
WHERE
      a.district = 'California'
      AND c.last_name LIKE '%rene%'
      OR c.first_name LIKE '%rene%';

SELECT
      c.first_name,
      COUNT(a.address)
FROM
      customer c
      INNER JOIN `address` a ON c.address_id = a.address_id
WHERE
      c.active = 1
GROUP BY
      c.first_name
ORDER BY
      c.first_name DESC;

SELECT
      s.first_name,
      s.last_name,
      AVG(p.amount)
FROM
      staff s
      INNER JOIN payment p ON s.staff_id = p.staff_id
WHERE
      YEAR(p.payment_date) = '2006'
GROUP BY
      s.first_name,
      s.last_name;

SELECT
      a.actor_id,
      a.first_name,
      f.film_id,
      f.title
FROM
      actor a
      INNER JOIN film_actor fa ON a.actor_id = fa.actor_id
      INNER JOIN film f ON f.film_id = fa.film_id;

SELECT
      t1.film_id,
      t1.replacement_cost,
      t2.film_id,
      t2.replacement_cost
FROM
      film t1,
      film t2
WHERE
      t1.replacement_cost = t2.replacement_cost;

SELECT
      a.title,
      a.rental_duration,
      b.title,
      b.rental_duration
FROM
      film a,
      film b
WHERE
      a.rental_duration = b.rental_duration
HAVING
      a.rental_duration BETWEEN 2
      AND 4;

SELECT
      CONCAT(first_name, ' ', last_name)
FROM
      actor
UNION
ALL
SELECT
      CONCAT(first_name, ' ', last_name)
FROM
      staff;

SELECT
      first_name
FROM
      customer
WHERE
      first_name LIKE '%tracy%'
UNION
SELECT
      first_name
FROM
      actor
WHERE
      first_name LIKE '%je%';

(
      SELECT
            first_name
      FROM
            actor
      ORDER BY
            actor_id DESC
      LIMIT
            5
)
UNION
(
      SELECT
            first_name
      FROM
            staff
      LIMIT
            1
)
UNION
(
      SELECT
            first_name
      FROM
            customer
      LIMIT
            5 OFFSET 15
)
ORDER BY
      first_name;

(
      SELECT
            first_name,
            last_name
      FROM
            customer
      ORDER BY
            first_name,
            last_name
      LIMIT
            60
)
UNION
(
      SELECT
            first_name,
            last_name
      FROM
            actor
      ORDER BY
            first_name,
            last_name
      LIMIT
            60
)
ORDER BY
      first_name,
      last_name
LIMIT
      15 OFFSET 45;