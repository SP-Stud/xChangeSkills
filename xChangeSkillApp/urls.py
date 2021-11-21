from django.urls import path
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("base2", views.index2, name='base2'),
    path("about", views.about, name='about'),
    path("news", views.news, name='news'),
    path("register", views.register, name='register'),
    path('login', views.loginSystem, name='login'),
    path('logout', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
    path("profile", views.profile, name='profile'),
    path("userSkillPage", views.userSkillPage, name='userSkillPage'),
    path('skillList', views.skillList, name='skillList'),

    path('userSkillPage/postSkill', views.postSkill, name='post-skill'),
    path('userSkillPage/postWishSkill', views.postWishSkill, name='post-wish-skill'),
    path('userSkillPage/deleteSkill', views.deleteSkill, name='delete-skill'),
    path('userSkillPage/deleteWishSkill', views.deleteWishSkill, name='delete-wish-skill'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)