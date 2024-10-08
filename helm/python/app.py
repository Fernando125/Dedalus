from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def handle_request():
    print("Headers:")
    for header, value in request.headers.items():
        print(f"{header}: {value}")
    
    print("\nBody:")
    print(request.data.decode('utf-8'))

    return "Request received", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)