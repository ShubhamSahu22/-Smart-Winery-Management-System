from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/irrigate', methods=['POST'])
def irrigate():
    # Logic for controlling the irrigation system
    data = request.json
    # Here you would trigger the irrigation system
    return jsonify({'status': 'Irrigation triggered', 'data': data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv("PORT", 8001)))
