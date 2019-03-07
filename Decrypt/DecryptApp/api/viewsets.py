from .serializers import UploadFileSerializer, LogSerializer, UserSerializer, ProductSerializer, FileMessagesSerializer
from DecryptApp.models import UploadFile, Product, Log, FileMessages
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.decorators import action, api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters
import django_filters.rest_framework

class UploadFileFilter(filters.FilterSet):
    class Meta:
        model = UploadFile
        fields = ('id', 'file_date', 'file_user')

class UserFilter(filters.FilterSet):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'is_superuser')

class ProductFilter(filters.FilterSet):
    class Meta:
        model = Product
        fields = ('__all__')

class FileMessagesFilter(filters.FilterSet):
    class Meta:
        model = FileMessages
        fields = ('__all__')

class LogFilter(filters.FilterSet):
    class Meta:
        model = Log
        fields = ('__all__')

class UploadFileViewSet(viewsets.ModelViewSet):

    queryset = UploadFile.objects.all()
    serializer_class = UploadFileSerializer
    filterset_class = UploadFileFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    
    @action(methods=['get'], detail=False)
    def newest(self, request):
        newest = self.get_queryset().order_by('id').last()
        serializer = self.get_serializer_class()(newest)
        return Response(serializer.data)
   
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filterset_class = UserFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer
    filterset_class = LogFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

class FileMessagesViewSet(viewsets.ModelViewSet):
    queryset = FileMessages.objects.all()
    serializer_class = FileMessagesSerializer
    filterset_class = FileMessagesFilter
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)