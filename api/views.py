from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, SkillSerializer

from xChangeSkillApp.models import User, SkillList

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'Skill List' : '/skill-list/',
        'Skill List of User' : '/skill-list/<str:pk>/',
        'User List' : '/user-list/',
        'User Detail' : '/user-detail/<str:pk>/'
    }
    return Response(api_urls)

@api_view(['GET'])
def userList(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def userDetail(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def skillListApi(request):
    skills = SkillList.objects.all()
    serializer = SkillSerializer(skills, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def SkillListUser(request, pk):
    skills = SkillList.objects.filter(user_id=pk)
    serializer = SkillSerializer(skills, many=True)
    return Response(serializer.data)