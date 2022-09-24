from flask import Flask
from flask import request as r  
from flask import json 
from flask_cors import CORS 

import numpy as np 
import tensorflow as tf 

app = Flask(__name__)
cors = CORS(app)


new_model = tf.keras.models.load_model('predict.h5')

def predicti(values):
    a=np.array([float(x) for x in values])
    a=np.expand_dims(a,axis=0)
    a=np.expand_dims(a,axis=2)
    res = new_model.predict(a)
    return [float(v[0]) for v in res[0]]


@app.post("/")
def home():
    data = r.get_json()
    prediction = predicti(data)
    print(prediction)
    return json.dumps({"prediction": prediction})




