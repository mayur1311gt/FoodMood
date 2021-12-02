from django.urls import path
from django.conf.urls import include, url
from api import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('question/', views.QuesFunc),
    path('question/<int:id>/', views.QuesFunc),
    path('answer/<int:id>/', views.AnsFunc),
    path('answer/', views.AnsFunc),
    url(r'^post$', views.PostFunc),
    url(r'^post/([0-9]+)$', views.PostFunc),
    url(r'^post/SaveFile$', views.SaveFile),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)