from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','email','full_name', 'password', 'UserPhotoName','is_staff'] 
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['answerId', 'answerDesc', 'answersQuesId', 'answerOwnerId']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['photoId', 'photoName', 'photoType', 'postPhotoId']

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['videoId', 'videoName', 'videoType', 'postVideoId']
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['commentId', 'comment', 'postCommentId', 'commentOwnerId']

class SavedPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedPost
        fields = ['SavedPostId', 'inheritedPostId', 'userSavedPostId']