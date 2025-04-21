from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

# Root route
@app.route('/')
def home():
    return "Hello, welcome to the Data Science Tools and Quizzes!"

# /quiz route: Display a quiz interface or a list of questions
@app.route('/quiz', methods=['GET'])
def quiz():
    # Sample quiz questions
    questions = [
        {"question": "What is the output of 2 + 2?", "options": ["3", "4", "5"], "answer": "4"},
        {"question": "What does 'ML' stand for?", "options": ["Machine Learning", "Music Library", "Meta Learning"], "answer": "Machine Learning"}
    ]
    return jsonify({"status": "success", "questions": questions})

# /challenge route: Provide coding challenges
@app.route('/challenge', methods=['GET'])
def challenge():
    # Sample coding challenge
    challenges = [
        {"id": 1, "title": "Palindrome Checker", "description": "Write a function to check if a word is a palindrome."},
        {"id": 2, "title": "FizzBuzz", "description": "Write a program to print numbers 1-100. For multiples of 3, print 'Fizz', and for multiples of 5, print 'Buzz'."}
    ]
    return jsonify({"status": "success", "challenges": challenges})

# /leaderboard route: Display a leaderboard
@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    # Sample leaderboard
    leaderboard_data = [
        {"name": "Alice", "score": 90},
        {"name": "Bob", "score": 85},
        {"name": "Charlie", "score": 80}
    ]
    return jsonify({"status": "success", "leaderboard": leaderboard_data})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)

