from flask import Flask, jsonify
import sys

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = {'key': 'value'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
