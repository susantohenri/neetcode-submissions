SELECT
    name
    , COALESCE(SUM(distance), 0) AS travelled_distance
FROM users u
LEFT JOIN rides r ON r.user_id = u.id
GROUP BY u.id
ORDER BY travelled_distance DESC, name ASC