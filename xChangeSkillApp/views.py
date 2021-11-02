from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .models import Address
from .models import User

def index(request):
    return render(request, "index.html")

def about(request):
    return render(request,"about.html")

def news(request):
    return render(request,"news.html")

def loginSystem(request):
    if request.method=='POST':
        user = authenticate(email=request.POST['email'], password=request.POST['password'])

        if user is not None:
            print("user success")
            print(user.is_authenticated, request.user.is_authenticated)
            login(request, user)
            print(user.is_authenticated, request.user.is_authenticated)
            return redirect("index")  

            # return render(request, "userprofile.html")
        else:
            print("user fail")
            messages.add_message(request, messages.INFO, 'Wrong credentials please try again')
            return render(request,"index.html")              

def logout(request):
    logout(request, user)
    return redirect("index.html")

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
        gender = request.POST['gender']
        if(password1==password2):
            user = User.objects.create_user(username=user_name, password=password1, email=email, first_name=first_name, mid_name=mid_name, last_name=last_name, dob = dob, phone=phone, gender=gender)
            user.save()
            address = Address.objects.create(street_address=street_address, country=country, state=state, city=city, zip_code=zip_code, user=user)
            address.save()
            messages.success(request, f'Your account has been created! You are now able to log in!')
        else:
            print('password not matching..')

        return redirect('index')