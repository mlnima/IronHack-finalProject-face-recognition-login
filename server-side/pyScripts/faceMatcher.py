import face_recognition
import sys
import os

try:
    known_image_stdin_path = ''

    for line in sys.stdin:
        if 'known:' in line:
            known_image_stdin_path = line.replace('known:', '')

    known_image_path = os.path.abspath(f"../server-side/{known_image_stdin_path}").strip()
    unknown_image_path = os.path.abspath("pyScripts/temp/unknown.jpg").strip()

    known_image = face_recognition.load_image_file(known_image_path)
    unknown_image = face_recognition.load_image_file(unknown_image_path)

    known_encoding = face_recognition.face_encodings(known_image)
    unknown_encoding = face_recognition.face_encodings(unknown_image)

    if(len(known_encoding) > 0 and len(unknown_encoding) > 0):
        known_encoding = face_recognition.face_encodings(known_image)[0]
        unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

    print(bool(face_recognition.compare_faces([known_encoding], unknown_encoding)))

except ValueError:

    print(False)

