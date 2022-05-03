from flask import Flask, jsonify, request, render_template
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbhomework

app = Flask(__name__)


@app.route('/')
def homework():
    return render_template('index.html')


# orders
# doc = {"buyer", "number", "address", "phone"}

# all_orders = list(db.orders.find({}))


@app.route('/reply', methods=['POST'])
def save_reply():
    id_received = "IDIDID"
    reply_received = request.form['reply_give']
    reply_num_received = request.form['reply_num']

    doc = {
        "reply_num": reply_num_received,
        "ID": id_received,
        "reply": reply_received,
    }

    db.replies.insert_one(doc)

    return jsonify({"result": "success", "msg": "댓글 등록 완료"})


@app.route('/reply', methods=['GET'])
def view_reply():
    replies = list(db.replies.find({}, {"_id": False}))

    return jsonify({"result": "success", "all_replies": replys})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
