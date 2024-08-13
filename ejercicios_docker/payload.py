from flask import Flask, request, jsonify
import jwt
import datetime

app = Flask(__name__)

app.config['SECRET_KEY'] = 'tu_clave_secreta'

@app.route('/convertir', methods=['POST'])
def convertir_a_jwt():
    payload = request.json

    token = jwt.encode(
        {
            **payload,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        },
        app.config['SECRET_KEY'],
        algorithm='HS256'
    )

    return jsonify({'token': token})

if __name__ == '__main__':
    app.run(debug=True)