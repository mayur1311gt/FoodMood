
## for rest api we use API Test case
from django.http import response
from rest_framework.test import APITestCase
from api.urls import *
from rest_framework.reverse import reverse
from api.models import Question, User, Post
import json

# Create your tests here.
class QuestionAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create(email = "test@gmail.com",username="TestUser",)
        Question.objects.create(
            questionDesc = "On fasting days, what all food items are allowed? Is Potato Chips okay to eat on fasting? If yes, then which Potato Chips?",
            status = False,
            questionTitle = "Potato Chips as fasting Food?",
            questionTag = "potato chips fasting",
            questionOwnerId = self.user,
        )
        #sample question
        self.input_data = {
            "questionDesc" : "Misal pav is loved and had by everyone in Maharashtra and Nashik is known for its unique preparations of the dish. And few of my friends said Pune serves Best Misal. So what is the truth?",
            "status" : False,
            "questionTitle" : "Is Misal still famous in Pune?",
            "questionTag" : "misal fast-food pune",
            "questionOwnerId" : self.user.user_id
        }

    def test_get_questions(self):
        url = reverse("questions")
        resp = self.client.get(url)
        self.assertEqual(resp.status_code, 200)
        # search question by tags
        qs = Question.objects.filter(questionTag__icontains = "chips")
        print("Test to filter Question with tag: chips")
        self.assertEqual(qs.count(),1)

    def test_post_question(self):
        url = reverse("questions")
        
        response = self.client.post(url, self.input_data, format="json")
        self.assertEqual(response.status_code, 201)
        print("Test method to post a question")

        get_url = reverse("question", kwargs={"id":1})
        ques1 = self.client.get(get_url)
        assert ques1 != None
        assert ques1.json()['questionTitle'] != "Is Misal still famous in Pune?"
        assert ques1.json()['questionTitle'] == "Potato Chips as fasting Food?"





class CreateUserTest(APITestCase):
    def setUp(self):
        self.superuser = User.objects.create_superuser('prathmesh', 'prathmesh@snow.com', 'prathmeshpassword')
        self.client.login(username='prathmesh', password='prathmeshpassword')
        # self.data = {'email': 'mayur@gmail.com', 'full_name': 'Mayur Telrandhe', 'password': 'mayur'}
        self.data = {
                        "email": "psw@gmail.com",
                        "full_name": "PSW",
                        "password": "prathm",
                        "UserPhotoName": "default.png",
                        "is_staff": True
                    }

    def test_can_create_user(self):
        response = self.client.post(reverse('users'), self.data, format='json')
        print("Test to register a user")
        self.assertEqual(response.status_code, 201)


class PostByUserTest(APITestCase):
    def setUp(self):
        self.superuser = User.objects.create_superuser('prathmesh', 'prathmesh@snow.com', 'prathmeshpassword')
        self.client.login(username='prathmesh', password='prathmeshpassword')
        self.user = User.objects.create(username="mayur")


    def test_can_read_user_detail(self):
        response = self.client.get(reverse('user', args=[self.user.user_id]))
        print("Test to get particular user")
        self.assertEqual(response.status_code, 200)

    def test_create_post(self):
        new_post = Post.objects.create(
            postId= 6,
            postTitle=" Pani Puri",
            postDescription= "Pani Puri is one of the famous street foods",
            postLikes= 550,
            postLocation= "Pune",
            foodType= "Sweet, spicy",
            postDate= None,
            postOwnerId= self.user
        )
        # print("Post creating test")
        assert (Post.objects.all()).count() == 1

        new_post_2data = {
            "postId": 1,
            "postTitle": "Pav Bhaji",
            "postDescription": "Pav Bhaji is one of the famous street foods",
            "postLikes": 4,
            "postLocation": "Pune",
            "foodType": "Spicy",
            "postDate": "2021-12-02T12:10:14Z",
            "postOwnerId": 1
        }
        url = reverse("allposts")
        # print(url)
        response = self.client.post(url, data=new_post_2data, format="json")
        # print(response)
        print("Test to create a new post")
        assert response.status_code == 201
        assert (Post.objects.all()).count() == 2
