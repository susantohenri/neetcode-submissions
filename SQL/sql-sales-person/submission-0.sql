SELECT a.name
FROM sales_person a
LEFT JOIN (
    SELECT
        o.order_id
        , o.sales_id
        , c.name
    FROM orders o
    LEFT JOIN company c ON o.com_id = c.com_id
    WHERE c.name = 'CRIMSON'
) b ON a.sales_id = b.sales_id
WHERE b.sales_id IS NULL