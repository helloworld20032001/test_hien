from django.urls import path
from . import views
urlpatterns = [
    path('',views.home,name ='home'),
    path('counter',views.counter,name ='counter'),
    path('register',views.register,name ='register'),
    path('login',views.login,name = 'login'),
    path('logout',views.logout,name = 'logout'),
    path('Menu.html',views.menu,name = 'Menu'),
]