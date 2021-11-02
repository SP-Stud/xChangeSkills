from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("about", views.about, name='about'),
    path("news", views.news, name='news'),
    path("register", views.register, name='register'),
    path('login', views.loginSystem, name='login'),
    path('logout', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout')
]