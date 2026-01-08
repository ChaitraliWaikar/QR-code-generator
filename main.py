import qrcode
from flask import Flask, request, send_file
from flask_cors import CORS
import io

app = Flask(__name__)
CORS(app)

@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    data = request.json
    url = data['url']
    fmt = data.get('format', 'PNG').upper()
    qr = qrcode.QRCode()
    qr.add_data(url)
    img = qr.make_image()
    img_io = io.BytesIO()
    if fmt == 'JPEG':
        img.save(img_io, 'JPEG')
        mimetype = 'image/jpeg'
    else:
        img.save(img_io, 'PNG')
        mimetype = 'image/png'
    img_io.seek(0)
    return send_file(img_io, mimetype=mimetype)

if __name__ == '__main__':
    app.run(debug=True)