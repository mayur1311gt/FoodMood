
# ## for rest api we use API Test case
# from rest_framework.test import APITestCase
# from .models import Question, User
# import json

# # Create your tests here.
# class QuestionAPITestCase(APITestCase):
#     def setUp(self):
#         self.user = User.objects.create(
#             email = "test@gmail.com",
#             username="TestUser",
#         )
#         Question.objects.create(
#             # questionId
#             questionDesc = "test description",
#             status = False,
#             questionTitle = "test question title",
#             questionTag = "tag1 tag2 tag3",
#             questionOwnerId = self.user,
#         )

#     def test_get_questions(self):
#         url = 'http://127.0.0.1:8000/api/question/'
#         resp = self.client.get(url)
#         self.assertEqual(resp.status_code, 200)
#         print("\n\nGet request success")
#         # search question by tags
#         qs = Question.objects.filter(questionTag__icontains = "tag2")
#         print("Filter Question with tag: tag2")
#         self.assertEqual(qs.count(),1)

#     def test_post_question(self):
#         url = 'http://127.0.0.1:8000/api/question/'
#         data = {
#             'questionDesc' : "test description",
#             'status' : json.dumps(False),
#             'questionTitle' : "test question title",
#             'questionTag' : "tag1 tag2 tag3",
#             'questionOwnerId' : self.user.user_id
#         }
#         # print("post a question")
#         response = self.client.post(url, data, format='json')
#         print(self.client.get('http://127.0.0.1:8000/api/question/1'))
#         self.assertEqual(response.status_code, 201)