SELECT
  m.title,
  b.domestic_sales,
  b.international_sales
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id;

SELECT
  m.title,
  b.domestic_sales,
  b.international_sales
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id
WHERE
  b.domestic_sales < b.international_sales;

SELECT
  m.title,
  b.rating
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id
ORDER BY
  b.rating DESC;

SELECT
  t.*,
  m.*
FROM
  Theater t
  LEFT JOIN Movies m ON t.id = m.theater_id
ORDER BY
  t.name;

SELECT
  t.*,
  m.*
FROM
  Theater t
  RIGHT JOIN Movies m ON t.id = m.theater_id
ORDER BY
  t.name;

SELECT
  title
FROM
  Movies
WHERE
  id IN(
    SELECT
      movie_id
    FROM
      BoxOffice
    WHERE
      rating > 7.5
  );

SELECT
  m.title
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id
WHERE
  b.rating > 7.5;

SELECT
  rating
FROM
  BoxOffice
WHERE
  movie_id IN(
    SELECT
      id
    FROM
      Movies
    WHERE
      year > 2009
  );

SELECT
  b.rating
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id
WHERE
  m.year > 2009;

SELECT
  t.name,
  t.location
FROM
  Theater t
WHERE
  EXISTS (
    SELECT
      *
    FROM
      Movies m
    WHERE
      m.theater_id = t.id
  );

SELECT
  t.name,
  t.location
FROM
  Theater t
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      Movies m
    WHERE
      m.theater_id = t.id
  );

--BONUS
SELECT
  *
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id
  INNER JOIN Theater t ON m.theater_id = t.id
WHERE
  b.rating > 8;

SELECT
  t1.title,
  t1.length_minutes,
  t2.title,
  t2.length_minutes
FROM
  Movies t1,
  Movies t2
WHERE
  t1.director = t2.director
  AND t1.title != t2.title;

SELECT
  m.title
FROM
  Movies m
WHERE
  m.id IN (
    SELECT
      b.movie_id
    FROM
      BoxOffice b
    WHERE
      b.domestic_sales + b.international_sales > 500000000
  )
  AND m.length_minutes > 110;

SELECT
  m.title
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id
WHERE
  b.domestic_sales + b.international_sales > 500000000
  AND m.length_minutes > 110;

SELECT
  m.title,
  (b.domestic_sales + b.international_sales),
  m.length_minutes
FROM
  Movies m
  INNER JOIN BoxOffice b ON m.id = b.movie_id;
