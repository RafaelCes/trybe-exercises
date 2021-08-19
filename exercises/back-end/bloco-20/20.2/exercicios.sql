USE Scientists;

SELECT  'This is SQL Exercise,Practice AND Solution';

SELECT  '3'
       ,'6'
       ,'9';

SELECT  10 + 15;

SELECT  25 * 5 + 2;

SELECT  *
FROM Scientists;

SELECT  Name  AS 'Nome do Projeto'
       ,Hours AS 'Tempo de Trabalho'
FROM Projects;

SELECT  Name
FROM Scientists
ORDER BY Name;

SELECT  Name
FROM Projects
ORDER BY Name DESC;

SELECT  'O projeto '
       ,Name
       ,' precisou de '
       ,Hours
       ,' horas para ser concluído.'
FROM Projects;

SELECT  Name
       ,Hours
FROM Projects
ORDER BY Hours DESC
LIMIT 3;

SELECT  DISTINCT Project
FROM AssignedTo;

SELECT  Name
FROM Projects
ORDER BY Hours DESC
LIMIT 1;

SELECT  Name
FROM Projects
ORDER BY Hours
LIMIT 1 OFFSET 1;

SELECT  *
FROM Projects
ORDER BY Hours
LIMIT 5;

SELECT  'Existem '
       ,COUNT(*)
       ,' cientistas na tabela Scientists.'
FROM Scientists;