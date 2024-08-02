from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Define user details
user_id = "john_doe_17091999"
email = "john@xyz.com"
roll_number = "ABCD123"


@app.route('/bfhl', methods=['POST'])
def process_data():
    try:
        data = request.json.get('data', [])

        if not isinstance(data, list):
            return jsonify({
                "is_success": False,
                "user_id": user_id,
                "email": email,
                "roll_number": roll_number,
                "numbers": [],
                "alphabets": [],
                "highest_alphabet": []
            }), 400

        numbers = []
        alphabets = []

        for item in data:
            if item.isdigit():
                numbers.append(item)
            elif item.isalpha() and len(item) == 1:
                alphabets.append(item)

        highest_alphabet = []
        if alphabets:
            highest_alphabet = [max(alphabets, key=lambda x: x.upper())]

        return jsonify({
            "is_success": True,
            "user_id": user_id,
            "email": email,
            "roll_number": roll_number,
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": highest_alphabet
        })
    except Exception as e:
        return jsonify({
            "is_success": False,
            "user_id": user_id,
            "email": email,
            "roll_number": roll_number,
            "numbers": [],
            "alphabets": [],
            "highest_alphabet": [],
            "error": str(e)
        }), 500


@app.route('/bfhl', methods=['GET'])
def get_operation_code():
    return jsonify({"operation_code": 1}), 200


if __name__ == '__main__':
    app.run(debug=True)