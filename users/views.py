from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth

# Create your views here.

def register(request):
    print("register here")
    if request.method == 'POST':
        first_name = request.POST['fName']
        mid_name = request.POST['mName']
        last_name = request.POST['lName']
        street_address = request.POST['streetAddress']
        country = request.POST['country']
        state = request.POST['state']
        city = request.POST['city']
        zip_code = request.POST['zipCode']
        dob = request.POST['dateOfBirth']
        user_name = request.POST['userName']
        email = request.POST['emailAddress']
        phone = request.POST['phoneNumber']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        genderMale = request.POST['genderMale']
        genderFemale = request.POST['genderFemale']
        
        if(password1==password2):
            user = User.objects.create_user(user_name=user_name, password=password1, email=email, first_name=first_name, last_name=last_name)
            user.save()
        else:
            print('password not matching..')

        return redirect('index')


        