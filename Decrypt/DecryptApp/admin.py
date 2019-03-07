from django.contrib import admin
from .models import UploadFile

class UploadFileAdmin (admin.AdminSite):
    pass

admin.site.register(UploadFile)
