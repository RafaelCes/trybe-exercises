SELECT  UCASE('tyrbe');

SELECT  REPLACE('Você já ouviu falar do DuckDuckGo?','DuckDuckGo','Google');

SELECT  LENGTH('Uma frase qualquer');

SELECT  SUBSTRING('A linguagem JavaScript está entre AS mais usadas',13,10);

SELECT  LCASE('RUA NORTE 1500,SÃO PAULO,BRASIL');

SELECT  film_id, 
        title, 
        IF(title = 'ACE GOLDFINGER','Já assisti esse filme','Não conheço esse filme') AS 'conheço o filme'
FROM film;

SELECT title,
       rating,
       CASE
            WHEN rating = 'G' THEN 'Livre para todos'
            WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
            WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
            WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
            ELSE 'Proibido para menores de idade'
        END AS 'público-alvo'
FROM film;

SELECT AVG(`length`), 
MIN(`length`), 
MAX(`length`),
SUM(`length`),
COUNT(`length`) FROM sakila.film; 

