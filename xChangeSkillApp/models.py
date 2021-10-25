from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User

class User(AbstractUser):
    mid_name = models.CharField(max_length=20)
    dob = models.DateField()
    phone = models.IntegerField()
    gender = models.CharField(max_length=1)
    
class Address(models.Model):
    street_address = models.CharField(max_length=50)
    country = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    zip_code = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def create(self, street_address, country, state, city, zip_code, user):
        self.street_address = street_address
        self.country = country
        self.state = state
        self.city = city
        self.zip_code = zip_code
        self.user = user
        return self

