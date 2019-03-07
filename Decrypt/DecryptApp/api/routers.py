from rest_framework import routers

from .viewsets import UploadFileViewSet, LogViewSet, ProductViewSet, UserViewSet, FileMessagesViewSet

router = routers.DefaultRouter()
router.register('file', UploadFileViewSet)
router.register('log', LogViewSet)
router.register('product', ProductViewSet)
router.register('users', UserViewSet)
router.register('messages', FileMessagesViewSet)
