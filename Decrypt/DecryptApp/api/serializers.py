from rest_framework import serializers
from DecryptApp.models import UploadFile, Product, Log, FileMessages
from django.contrib.auth.models import User

class UploadFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadFile
        fields = ('__all__')

class FileMessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileMessages
        fields = ('__all__')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','first_name','last_name', 'email', 'is_superuser', 'password')
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}
    
    # hashing password without requirement
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('__all__')

class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = ('__all__')