from flask import Flask, jsonify
import jwt
import datetime
import json

app = Flask(__name__)

app.config['SECRET_KEY'] = '123456'

@app.route('/convertir', methods=['GET'])
def convertir_a_jwt():
    try:
        with open('payload.json', 'r') as file:
            payload = json.load(file)

        token = jwt.encode(
            {
                **payload,
                'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=1)
            },
            app.config['SECRET_KEY'],
            algorithm='HS256'
        )

        return jsonify({'token': token})

    except FileNotFoundError:
        return jsonify({'error': 'El archivo payload.json no se encuentra'}), 404
    except json.JSONDecodeError:
        return jsonify({'error': 'Error al decodificar el archivo JSON'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
