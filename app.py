from flask import Flask, render_template, request

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

@app.route('/greeting')
def greeting():  # put application's code here
    return render_template("greeting.html")

@app.route('/favorite-course', methods=['GET'])
def favCourse():
    return render_template("favorite-course.html")

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        return render_template("contact.html", formSubmitted=True)
    return render_template("contact.html", formSubmitted=False)

if __name__ == '__main__':
    app.run()
