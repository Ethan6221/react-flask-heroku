from flask import Flask, jsonify
from flask.helpers import send_from_directory

# comment out on deployment
# from flask_cors import CORS

# uses 'frontend' because that is where our react app is stored
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out on deployment
# CORS(app)


# this method returns the opposite of the current state of the button
# this would look different for your own personal app
@app.route("/toggle_button/<button_state>", methods=["GET"])
def toggle_button(button_state: str):
    if button_state == "Off":
        output = "On"
    else:
        output = "Off"
    return jsonify(button=output)


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")