from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.db.models.signals import post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from io import StringIO
from urllib.request import urlopen
import uuid
import os
from PIL import Image
import pytesseract

# function scramble the uploading file name
def scramble_uploaded_filename(instance, filename):
    extension = filename.split(".")[-1]
    return "{}.{}".format(uuid.uuid4(), extension)

# function creating the authentication token for each account created
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

# uploading images model with date and user id(fk)
class UploadFile(models.Model):
    file_upload = models.ImageField(upload_to=scramble_uploaded_filename, blank=False, null=False)
    file_date = models.DateTimeField(auto_now_add=True)
    file_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

@receiver(post_delete, sender=UploadFile)
def submission_delete(sender, instance, **kwargs):
    instance.file_upload.delete(False) 

# message has been interpreted by tesseract
class FileMessages(models.Model):
    uploaded_file = models.ForeignKey(UploadFile, on_delete=models.CASCADE)
    message = models.TextField(null=True)

# activity log with date and user id
class Log(models.Model):
    log_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    log_activity = models.TextField(null=False)
    log_date = models.DateTimeField(auto_now_add=True)

# the final product model
class Product(models.Model):
    prod_file = models.ForeignKey(UploadFile, on_delete=models.CASCADE)
    original_message = models.TextField(null=False)
    product = models.TextField(null=True, default='The message has not been decrypted yet!')
    prod_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


