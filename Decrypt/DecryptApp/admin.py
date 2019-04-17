from django.contrib import admin
from .models import UploadFile, FileMessages

class UploadFileAdmin (admin.AdminSite):
    pass

admin.site.register(UploadFile)

class FileMessagesAdmin (admin.AdminSite):
    pass

admin.site.register(FileMessages)