SELECT
    employee_id
    , CASE
        WHEN 0 <> employee_id % 2 AND name NOT LIKE 'M%'
        THEN salary
        ELSE 0
        END
        AS bonus
FROM employees
ORDER BY employee_id