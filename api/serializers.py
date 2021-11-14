from rest_framework import serializers
from xChangeSkillApp.models import User, SkillList

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'date_joined', 'dob', 'phone')

class SkillSerializer(serializers.ModelSerializer):
    # Helps in eager fetch of user
    user = UserSerializer(many=False)
    select_related_fields = ('user',)
    prefetch_related_fields = ()  # Only necessary if you have fields to prefetch

    class Meta:
        model = SkillList
        fields = '__all__'
