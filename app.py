from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world_main():  # put application's code here
    return 'Hello World from Nicholas McGonigle!'

@app.route('/hello')
def hello_world():  # put application's code here
    return render_template("hello.html")

@app.route('/about')
def about_me():  # put application's code here
    return render_template("about.html")

@app.route('/about-css')
def about_me_css():  # put application's code here
    return render_template("about-css.html")


if __name__ == '__main__':
    app.run()
