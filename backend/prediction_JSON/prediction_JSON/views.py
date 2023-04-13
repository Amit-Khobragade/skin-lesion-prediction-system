from django.http  import JsonResponse, HttpResponseBadRequest, HttpResponse
import tensorflow as tf
from tensorflow.keras.models import load_model
from . import settings
from django.middleware.csrf import get_token
import json
import base64
import io

model = load_model(settings.BASE_DIR.as_uri() + "/models/classification_model.h5")
binary_model = load_model(settings.BASE_DIR.as_uri() + "/models/b_model.h5")

def load_image(img_data, img_size=224, BATCH_SIZE=32):
  """
    loading an image into memory as a `img_size`x`img_size`x3 and normalises it
  """
  image = base64.b64decode(img_data)
  image = tf.io.decode_jpeg(image, channels=3)
  image = tf.image.convert_image_dtype(image, tf.float32)
  image = tf.image.resize(image, size=[img_size, img_size])
  data = tf.data.Dataset.from_tensor_slices([image])
  data = data.batch(BATCH_SIZE)
  return data


def predict(request):
    if(request.method == 'POST'):
        try:
            body = request.body.decode('utf-8')
            body = json.loads(body)
            img = load_image(body['image'])
            img35 = load_image(body['image'], img_size=35)
            print('predicting')
            binary_results = binary_model.predict(img35)[0,0]
            results = model.predict(img)[0]
            return JsonResponse({
                "detection": str(binary_results), 
                "classification": list(results.astype('str'))
              })
        except Exception as e:
            print(e)
            return HttpResponseBadRequest(json.dumps({'error': 'Invalid request'}), content_type='application/json')
        
def get_csrf(request):
    token = get_token(request)
    return HttpResponse(token)