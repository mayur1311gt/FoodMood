from django.db import models
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    use_in_migrations = True
    def create_superuser(self, email, full_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, full_name, password, **other_fields)

    def create_user(self, email, full_name, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, full_name = full_name, **extra_fields)

        user.set_password(password)
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    user_id=models.AutoField(primary_key=True)
    email = models.EmailField(max_length=255, unique=True)
    full_name=models.CharField(max_length=50, null = True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    UserPhotoName = models.CharField(max_length=200, null = True)
    objects = UserAccountManager()
    # userHistory

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    
    def __str__(self):
        return self.email


class Question(models.Model):
    questionId=models.AutoField(primary_key=True)
    questionDesc=models.CharField(max_length=500)
    status=models.BooleanField(default=False)
    questionOwnerId=models.ForeignKey(User, on_delete=models.CASCADE)

class Answer(models.Model):
    answerId=models.AutoField(primary_key=True)
    answerDesc=models.CharField(max_length=1000)
    answersQuesId=models.ForeignKey(Question, on_delete=models.CASCADE)
    answerOwnerId=models.ForeignKey(User, on_delete=models.CASCADE)

class Post(models.Model):
    postId=models.AutoField(primary_key=True)
    postTitle=models.CharField(max_length=200)
    postDescription=models.CharField(max_length=1000)
    postLikes=models.IntegerField(default=0)
    postLocation=models.CharField(max_length=200)
    foodType=models.CharField(max_length=200)
    postDate=models.DateTimeField()
    postOwnerId=models.ForeignKey(User, on_delete=models.CASCADE)

class Photo(models.Model):
    photoId=models.AutoField(primary_key=True)
    photoName=models.CharField(max_length=100)
    photoType=models.CharField(max_length=100)
    postPhotoId=models.ForeignKey(Post, on_delete=models.CASCADE)

class Video(models.Model):
    videoId=models.AutoField(primary_key=True)
    videoName=models.CharField(max_length=100)
    videoType=models.CharField(max_length=100)
    postVideoId=models.ForeignKey(Post, on_delete=models.CASCADE)

class Comment(models.Model):
    commentId=models.AutoField(primary_key=True)
    comment=models.CharField(max_length=1000)
    postCommentId=models.ForeignKey(Post, on_delete=models.CASCADE)
    commentOwnerId=models.ForeignKey(User, on_delete=models.CASCADE)

class SavedPost(models.Model):
    SavedPostId=models.AutoField(primary_key=True)
    inheritedPostId=models.ForeignKey(Post, on_delete=models.CASCADE)
    userSavedPostId=models.ForeignKey(User, on_delete=models.CASCADE)
