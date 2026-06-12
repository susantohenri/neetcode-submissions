SELECT
    a.student_id
    , c.exam_id
    , b.score
FROM exam_results a
JOIN (
    SELECT
        student_id
        , MAX(score) score
    FROM exam_results
    GROUP BY student_id
) b ON a.student_id = b.student_id
    AND a.score = b.score
JOIN (
    SELECT
        student_id
        , MIN(exam_id) exam_id
    FROM exam_results
    GROUP BY student_id, score
) c ON c.student_id = a.student_id
    AND a.exam_id = c.exam_id
ORDER BY a.student_id