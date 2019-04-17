from django.urls import path
from DecryptApp import views
urlpatterns = [
    path('', views.HomePageView.as_view()),
    path('main/', views.HomePageView.as_view()),
]