SELECT
    L.name AS left_operand
    , E.operator
    , R.name AS right_operand
    , CASE
        WHEN operator = '>' THEN L.value > R.value
        WHEN operator = '<' THEN L.value < R.value
        WHEN operator = '=' THEN L.value = R.value
        END AS value
FROM expressions E
JOIN variables L ON E.left_operand = L.name
JOIN variables R ON E.right_operand = R.name