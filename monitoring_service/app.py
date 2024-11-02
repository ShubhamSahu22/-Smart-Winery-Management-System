from flask import Flask, jsonify
import os
import random

app = Flask(__name__)

@app.route('/soil-moisture', methods=['GET'])
def get_soil_moisture():
    # Simulate getting soil moisture data from IoT devices
    moisture = random.uniform(0, 100)
    return jsonify({'moisture': moisture})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv("PORT", 8000)))
