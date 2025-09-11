from flask import Flask

app = Flask(__name__)


@app.route('/hello')
def hello_world():  # put application's code here
    return 'Hello World from Nicholas McGonigle!'


if __name__ == '__main__':
    app.run()
