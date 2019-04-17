from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import ObtainAuthToken
from DecryptApp.views import HomePageView, index
from DecryptApp.api.routers import router

urlpatterns = [
    path('', include('DecryptApp.urls')),
    path('admin/', admin.site.urls),
    path('api/auth/', ObtainAuthToken.as_view()),
    path('api/', include(router.urls)),
    re_path(r'^(?P<path>.*)/$', index),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    try:
        import debug_toolbar
    except ImportError:
        pass
    else:
        urlpatterns += [
            path('__debug__', include(debug_toolbar.urls))
        ]
