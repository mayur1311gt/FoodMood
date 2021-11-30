from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(User)
class UserModelAdmin(admin.ModelAdmin):
    list_display=['user_id','full_name','email','password']

@admin.register(Question)
class QuestionModelAdmin(admin.ModelAdmin):
    list_display=['questionId','questionDesc','status','questionTitle','questionTag','questionOwnerId']

@admin.register(Answer)
class AnswerModelAdmin(admin.ModelAdmin):
    list_display=['answerId','answerDesc','answersQuesId','answerOwnerId']
