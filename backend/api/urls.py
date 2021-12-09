from django.urls import path
from django.conf.urls import include, url
from api import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.getRoutes),
    path('question/', views.QuesFunc, name="questions"),
    path('question/<int:id>/', views.QuesFunc, name="question"),
    path('answer/<int:id>/', views.AnsFunc),
    path('answer/', views.AnsFunc),
    path('post/', views.PostFunc, name="allposts"),
    path('post/<int:post_id>/', views.PostFunc, name="onepost"),
    path('user/', views.UserFunc, name="users"),
    path('user/<int:id>/', views.UserFunc, name="user"),
    # url(r'^post$', views.PostFunc),
    # url(r'^post/([0-9]+)$', views.PostFunc),
    path('post/SaveFile', views.SaveFile),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)