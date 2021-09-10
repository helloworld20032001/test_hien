from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Feature
from django.contrib.auth.models import User,auth
from django.contrib import messages
# Create your views here.
def index(request):

    features = Feature.objects.all()
    return render(request,'index.html',{'features':features})
def counter(request):
    text = request.POST['text']
    return render(request,'counter.html',{'amount': len(text.split())})
def register(request):
    if request.method == 'POST':
        name = request.POST['username']
        email = request.POST['email']
        Pass = request.POST['pass']
        repass = request.POST['repass']
        if Pass == repass:
            if User.objects.filter(email = email).exists():
                messages.info(request,'Email Already used')
                return redirect('register')
            elif User.objects.filter(username = name).exists():
                messages.info(request,'userName already used')
                return redirect('register')
            else:
                user = User.objects.create_user(username = name,email = email,password = Pass )
                user.save()
                return redirect('login')
        else:
            messages.info(request,'password not the same')
            return redirect('register')
    else:
        return render(request,'register.html')
def login(request):
    if request.method == 'POST':
        username = request.POST['uname']
        password = request.POST['psw']
        user = auth.authenticate(username = username,password = password)
        if user is not None:
            auth.login(request,user)
            return redirect('menu',username)
        else:
            messages.info(request,'credentials invalid')
            return redirect('login')
    else:
        return render(request,'login.html')
def logout(request):
    auth.logout(request)
    return redirect('/')

def home(request):
    return render(request,'home.html')

def menu(request):
    return render(request,'Menu.html')