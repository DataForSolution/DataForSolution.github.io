import requests

API_TOKEN = '7233771780:AAHEES35E_mFsw4x7ctFcXu2wVkffi6UZXs'  # Replace with your actual bot token
WEBHOOK_URL = 'https://rs1k4gg7i6.execute-api.us-east-1.amazonaws.com/prod'  # Replace with your actual webhook URL

response = requests.post(
    f'https://api.telegram.org/bot{API_TOKEN}/setWebhook',
    data={'url': WEBHOOK_URL}
)

print(response.json())
