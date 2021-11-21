from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('user-list/', views.userList, name="user-list"),
    path('user-detail/<str:pk>', views.userDetail, name="user-detail"),

    path('skill-list/', views.skillListApi, name="skill-list"),
    path('skill-list/<str:pk>', views.SkillListUser, name="skill-list-user"),

    path('search-skill/', views.searchSkill, name="search-skill"),

]
