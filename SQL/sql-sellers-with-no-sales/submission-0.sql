SELECT
    s.seller_name
FROM seller s
LEFT JOIN orders o ON s.seller_id = o.seller_id
    AND DATE_PART('year', sale_date) = 2020
WHERE o.seller_id IS NULL
ORDER BY seller_name ASC