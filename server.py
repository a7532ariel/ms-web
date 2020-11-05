from flask import Flask, request, send_from_directory

from escpos.printer import Usb
from PIL import Image, ImageDraw, ImageFont
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-n", "--noprint", help="test without printing result",
                    action="store_true")
args = parser.parse_args()

def printer_output(result, name):
    MAX_WIDTH = 600 # The size of the printer
    img = Image.open(os.path.join('images', f'{result}.jpg'))
    w, h = img.size
    # Resize width to MAX_WIDTH
    scale = MAX_WIDTH / w
    new_w, new_h = int(scale*w), int(scale*h)
    new_img = img.resize((new_w, new_h))
    # Add text (user name)
    font = ImageFont.truetype('./Microsoft-JhengHei.ttf', 35)
    d = ImageDraw.Draw(new_img)
    text_w, text_h = d.textsize(name, font=font)
    d.text((335-text_w/2,480), name, font=font, fill=(0, 0, 0))

    try:
        p = Usb(0x1fc9, 0x2016)
        p.image(new_img)
        p.cut()
    except Exception as e:
        raise e

app = Flask(__name__, static_folder='build')
app.config["DEBUG"] = True

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/print', methods=['GET', 'POST'])
def print_result():
    content = request.get_json()
    result = content.get('result')
    name = content.get('name')
    try:
        if args.noprint:
            print(content)
        else:
            printer_output(result, name)
        return 'success'
    except Exception as e:
        print(e)
        return 'failure'


if __name__ == "__main__":
    app.debug = False
    app.run(host="0.0.0.0", port=5000)