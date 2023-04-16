from flask import Flask, jsonify, request
from flask_cors import CORS

from service import calculate_bmi

app = Flask(__name__)
# , static_folder='public'

CORS(app)

# @app.route("/")
# def index():
#     return app.send_static_file('index.html')
    

@app.route('/api/bmi', methods = ['POST'])
def show_bmi():
    data = request.get_json()
    print(data, " hello")
    result = calculate_bmi(data)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
