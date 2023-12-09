const studentStatistics = [
    {
        "name": "Aimee Zank",
        "scores": [
            {
                "score": 1.463179736705023,
                "type": "exam"
            },
            {
                "score": 11.78273309957772,
                "type": "quiz"
            },
            {
                "score": 35.8740349954354,
                "type": "homework"
            }
        ]
    },
    {
        "name": "Ivan Li",
        "scores": [
            {
                "score": 11.463179736705023,
                "type": "exam"
            },
            {
                "score": 31.78273309957772,
                "type": "quiz"
            },
            {
                "score": 23.8740349954354,
                "type": "homework"
            }
        ]
    },
    {
        "name": "Alice Smith",
        "scores": [
            {
                "score": 21.463179736705023,
                "type": "exam"
            },
            {
                "score": 33.78273309957772,
                "type": "quiz"
            },
            {
                "score": 34.8740349954354,
                "type": "homework"
            }
        ]
    },

]

function getStudentsStatistics(req, res) {
    res.json(studentStatistics)
}

function getStudentWithWorstHomeworkScore(req, res) {
    let worstScore = Infinity
    let worstStudent;

    for (let student of studentStatistics) {
        let homeworkScore = student.scores.find(s => s.type === 'homework').score;
        if (homeworkScore < worstScore) {
            worstStudent = student
            worstScore = homeworkScore;
        }
    }
    if(!worstStudent) {
        return res.status(404).json({message: `Not a single student was found who has some scores with type "homework"`})
    }
    return res.json(worstStudent);
}

module.exports = {
    getStudentsStatistics,
    getStudentWithWorstHomeworkScore
}