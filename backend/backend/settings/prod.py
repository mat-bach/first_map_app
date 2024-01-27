from .base import *
import os

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*']

CORS_ALLOWED_ORIGINS = [
    'https://matbach.pl',
    'http://localhost',
    'http://127.0.0.1',
    'http://0.0.0.0',
]

CORS_ALLOW_CREDENTIALS = True