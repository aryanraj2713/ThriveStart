from flask import Flask, request, jsonify
from flask_cors import CORS
import shutil
import os
import sys
from qr_uid_matching_export import decode_qr_opencv, check_uid_last_4_digits

app = Flask(__name__)
CORS(app)

ADHAAR_IMAGE = "scripts/aadhar_image"

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/aadhar-upload', methods=['POST'])
def aadhar_upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename != '':  # Check if filename is not empty
        file_path = os.path.join(ADHAAR_IMAGE, file.filename)
        file.save(file_path)

        qr_data = decode_qr_opencv(file_path)
  # Replace with your actual UID

        if qr_data:
            return jsonify({
                'message': 'Aadhar uploaded and stored successfully and data extracted successfully',
                'qr_data': qr_data,

            })
        else:
            return jsonify({
                'message': 'Aadhar uploaded and stored. No QR code detected.'
            })
    else:
        return jsonify({'error': 'File not stored'})
    

if __name__ == '__main__':
    app.run(debug=True)
