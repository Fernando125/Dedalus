from flask import Flask, request, jsonify
import jwt
import datetime

app = Flask(__name__)

app.config['SECRET_KEY'] = '123456'

@app.route('/convertir', methods=['POST'])
def convertir_a_jwt():

    payload = request.json

    token = jwt.encode(
        {
            **payload,
            'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=1)
        },
        app.config['SECRET_KEY'],
        algorithm='HS256'
    )

    return jsonify({'token': token})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)