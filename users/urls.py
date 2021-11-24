from django.urls import path
from . import views

urlpatterns = [
    path("registerrr", views.register, name='register'),
]