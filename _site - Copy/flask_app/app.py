from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Root route
@app.route('/')
def home():
    return "Hello, welcome to the Data Science Tools and Quizzes!"

# Sample quiz database
quizzes = {
    "python": {
        "title": "Python Basics Quiz",
        "questions": [
            {"question": "What is the output of 2 + 2?", "options": ["3", "4", "5"], "answer": "4"},
            {"question": "Which keyword is used to define a function in Python?", "options": ["func", "define", "def"], "answer": "def"}
        ]
    },
    "ml": {
        "title": "Machine Learning Concepts Quiz",
        "questions": [
            {"question": "What does 'ML' stand for?", "options": ["Machine Learning", "Music Library", "Meta Learning"], "answer": "Machine Learning"},
            {"question": "Which algorithm is used for classification?", "options": ["Linear Regression", "Decision Tree", "K-Means"], "answer": "Decision Tree"}
        ]
    },
    "stats": {
        "title": "Statistics for Data Science Quiz",
        "questions": [
            {"question": "What is the mean of [2, 4, 6]?", "options": ["3", "4", "5"], "answer": "4"},
            {"question": "What does variance measure?", "options": ["Spread of data", "Mean of data", "Sum of data"], "answer": "Spread of data"}
        ]
    }
}

# /quiz route: Fetch quiz data
@app.route('/quiz', methods=['GET'])
def quiz():
    quiz_id = request.args.get('quiz_id')
    if not quiz_id or quiz_id not in quizzes:
        return jsonify({"status": "error", "message": "Quiz not found"}), 404
    return jsonify({
        "status": "success",
        "title": quizzes[quiz_id]["title"],
        "questions": quizzes[quiz_id]["questions"]
    })

# /submit-quiz route: Receive quiz answers and return score
@app.route('/submit-quiz', methods=['POST'])
def submit_quiz():
    data = request.json
    quiz_id = data.get("quiz_id")
    answers = data.get("answers", {})

    if not quiz_id or quiz_id not in quizzes:
        return jsonify({"status": "error", "message": "Invalid quiz"}), 404

    correct_answers = {q["question"]: q["answer"] for q in quizzes[quiz_id]["questions"]}
    score = sum(1 for question, answer in answers.items() if correct_answers.get(question) == answer)

    return jsonify({"status": "success", "score": score, "total": len(correct_answers)})

# Sample coding challenges
challenges = [
    {"id": 1, "title": "Palindrome Checker", "description": "Write a function to check if a word is a palindrome."},
    {"id": 2, "title": "FizzBuzz", "description": "Write a program to print numbers 1-100. For multiples of 3, print 'Fizz', and for multiples of 5, print 'Buzz'."}
]

# /challenge route: Fetch coding challenges
@app.route('/challenge', methods=['GET'])
def challenge():
    return jsonify({"status": "success", "challenges": challenges})

# /submit-challenge route: Submit code solution (Mock Functionality)
@app.route('/submit-challenge', methods=['POST'])
def submit_challenge():
    data = request.json
    challenge_id = data.get("challenge_id")
    code = data.get("code")

    if not challenge_id or not code:
        return jsonify({"status": "error", "message": "Invalid submission"}), 400

    return jsonify({"status": "success", "message": "Code submitted successfully for review!"})

# Sample leaderboard
leaderboard_data = [
    {"name": "Alice", "score": 90},
    {"name": "Bob", "score": 85},
    {"name": "Charlie", "score": 80}
]

# /leaderboard route: Fetch leaderboard
@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    return jsonify({"status": "success", "leaderboard": leaderboard_data})

# /submit-score route: Submit new leaderboard entry
@app.route('/submit-score', methods=['POST'])
def submit_score():
    data = request.json
    name = data.get("name")
    score = data.get("score")

    if not name or not isinstance(score, int):
        return jsonify({"status": "error", "message": "Invalid submission"}), 400

    leaderboard_data.append({"name": name, "score": score})
    leaderboard_data.sort(key=lambda x: x["score"], reverse=True)

    return jsonify({"status": "success", "message": "Score submitted successfully!"})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
