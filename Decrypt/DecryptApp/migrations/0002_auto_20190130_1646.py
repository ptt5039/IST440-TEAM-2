# Generated by Django 2.1.4 on 2019-01-30 09:46

import DecryptApp.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DecryptApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadfile',
            name='file_upload',
            field=models.ImageField(upload_to=DecryptApp.models.scramble_uploaded_filename),
        ),
    ]
