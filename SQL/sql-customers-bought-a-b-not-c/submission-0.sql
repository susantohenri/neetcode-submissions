SELECT
    C.customer_id
    , C.customer_name
FROM customers C
JOIN orders O ON C.customer_id = O.customer_id
GROUP BY C.customer_id
HAVING COUNT(CASE WHEN product_name = 'A' THEN 1 END) > 0
    AND COUNT(CASE WHEN product_name = 'B' THEN 1 END) > 0
    AND COUNT(CASE WHEN product_name = 'C' THEN 1 END) = 0
ORDER BY customer_name