from django.urls import path
from django.conf.urls import include, url
from api import views

urlpatterns = [
    path('question/', views.QuesFunc),
    path('question/<int:id>/', views.QuesFunc),
    path('answer/<int:id>/', views.AnsFunc),
    path('answer/', views.AnsFunc),
]