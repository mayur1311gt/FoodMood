from django.shortcuts import render
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
import io


# Create your views here.
@csrf_exempt
# @api_view(['GET', 'POST', "PUT", "PATCH", "DELETE"])
# @permission_classes([IsAuthenticated])
def UserFunc(request, id = -1):
    if request.method == "GET":
        if id!=-1:
            try:
                stu = User.objects.get(id=id)
                user_serializer = UserSerializer(stu)
                return JsonResponse(user_serializer.data, safe=False)
            except:
                return JsonResponse("does_not_exist", safe=False)
        else:
            return JsonResponse("No id provided", safe=False)
    
    elif request.method=="POST":
        json_data=request.body
        stream=io.BytesIO(json_data)
        user_data=JSONParser().parse(stream)
        user_serializer=UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Data Posted", safe=False)
        return JsonResponse(user_serializer.errors, safe=False)     
        
    elif request.method=="PUT":
        print("came here")
        # json_data=request.body
        # stream=io.BytesIO(json_data)
        user_data=JSONParser().parse(request)
        # id=user_data.get('id')
        stu=User.objects.get(id=id)
        print(id, stu)
        user_serializer=UserSerializer(stu,data=user_data,partial=True)
        print(user_serializer)

        if user_serializer.is_valid():
            print("valid")
            user_serializer.save()
            stu = User.objects.get(id=id)
            user_serializer = UserSerializer(stu)
            return JsonResponse(user_serializer.data, safe=False)
        return JsonResponse("problem bro", safe=False)   



@csrf_exempt
def QuesFunc(request, id=-1):

    if request.method=='GET':
        #show all
        if(int(id) < 0):
            questions = Question.objects.all()
            question_serializer = QuestionSerializer(questions, many=True)
            return JsonResponse(question_serializer.data, safe=False)
        #show for specific id
        else:
            try:
                question = Question.objects.get(questionId = id)
                question_serializer = QuestionSerializer(question)
                return JsonResponse(question_serializer.data, safe=False)
            except:
                return JsonResponse("404", safe=False)

    elif request.method == 'POST':
        json_data=request.body
        stream=io.BytesIO(json_data)
        question_data = JSONParser().parse(stream)
        print(question_data)
        questions_serializer = QuestionSerializer(data=question_data)
        if questions_serializer.is_valid():
            questions_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        s = "Add fail"+str(questions_serializer.data)
        return JsonResponse(s, safe=False)

    elif request.method == 'PUT':
        question_data = JSONParser().parse(request)
        question = Question.objects.get(questionId = question_data['questionId'])
        question_serializer = QuestionSerializer(question, question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Update fail", safe=False)

    elif request.method == 'DELETE':
        question = Question.objects.get(questionId=id)
        question.delete()
        return JsonResponse("delete success", safe=False)


@csrf_exempt
def AnsFunc(request, id=-1):

    if request.method=='GET':
        #show all
        if(int(id) < 0):
            answers = Answer.objects.all()
            answer_serializer = AnswerSerializer(answers, many=True)
            return JsonResponse(answer_serializer.data, safe=False)
        #show for specific id
        else:
            try:
                answer = Answer.objects.get(answerId = id)
                answer_serializer = AnswerSerializer(answer)
                return JsonResponse(answer_serializer.data, safe=False)
            except:
                return JsonResponse("404", safe=False)

    elif request.method == 'POST':
        json_data=request.body
        stream=io.BytesIO(json_data)
        answer_data = JSONParser().parse(stream)
        print(answer_data)
        answers_serializer = AnswerSerializer(data=answer_data)
        if answers_serializer.is_valid():
            answers_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        s = "Add fail"+str(answers_serializer.data)
        return JsonResponse(s, safe=False)

    elif request.method == 'PUT':
        answer_data = JSONParser().parse(request)
        answer = Answer.objects.get(answerId = answer_data['answerId'])
        answer_serializer = AnswerSerializer(answer, answer_data)
        if answer_serializer.is_valid():
            answer_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Update fail", safe=False)

    elif request.method == 'DELETE':
        answer = Answer.objects.get(answerId=id)
        answer.delete()
        return JsonResponse("delete success", safe=False)


@csrf_exempt
def PostFunc(request, user_id=-1, post_id=-1):

    if request.method=='GET':
        #show all post of that user
        if(int(post_id) < 0):
            posts = Post.objects.get(postOwnerId = user_id)
            post_serializer = PostSerializer(posts, many=True)
            return JsonResponse(post_serializer.data, safe=False)
        #show for specific id
        else:
            try:
                post = Answer.objects.get(postOwnerId = user_id, postId=post_id)
                post_serializer = AnswerSerializer(post)
                return JsonResponse(post_serializer.data, safe=False)
            except:
                return JsonResponse("404", safe=False)

    elif request.method == 'POST':
        json_data=request.body
        stream=io.BytesIO(json_data)
        post_data = JSONParser().parse(stream)
        print(post_data)
        posts_serializer = AnswerSerializer(data=post_data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        s = "Add fail"+str(posts_serializer.data)
        return JsonResponse(s, safe=False)

    elif request.method == 'PUT':
        answer_data = JSONParser().parse(request)
        answer = Answer.objects.get(answerId = answer_data['answerId'])
        answer_serializer = AnswerSerializer(answer, answer_data)
        if answer_serializer.is_valid():
            answer_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Update fail", safe=False)

    elif request.method == 'DELETE':
        answer = Answer.objects.get(answerId=id)
        answer.delete()
        return JsonResponse("delete success", safe=False)