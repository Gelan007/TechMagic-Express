const studentStatistics = [{
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
}]

function getStudentsStatistics(req, res) {
    res.json(studentStatistics)
}

module.exports = {
    getStudentsStatistics
}