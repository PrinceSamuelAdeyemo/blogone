from django.shortcuts import render
from .models import Author, Article, Category, CategoryGroup
from django.http import HttpResponse

from .models import Author, Article, Category, CategoryGroup
from django.contrib.auth.models import User

# Restframework imports
from rest_framework.views import APIView
from rest_framework.response import Response

#Default python libraries
import json

# Create your views here.
def stuff(request):
    
    if request.method == "GET":
        user = User.objects.get(username="Prince")
        author = Author.objects.get(name = user)
        article = Article.objects.create(article_name="Hate is Hate", author=author)
        defi = Category.objects.create(category_name="Defi")
        if article and defi:
            ee = defi.articles.add(article)
            return HttpResponse("Yes")
        """
        user = User.objects.create(username="Prince", password="nn")
        if user:
            author = Author.objects.create(name = user)
            art = Article.objects.create(article_name="Love is love", author=author)
            blockchain = Category.objects.create(category_name="Blockchain")
            if art and blockchain:
                #mem = blockchain.articles.add(art)
                mem = CategoryGroup.objects.create(article=art, category=blockchain)
                if mem:
                    return HttpResponse("saved")
                else:
                    print(author,"\n", blockchain, "\n", art)
                    return HttpResponse("Not mem")
            else:
                return HttpResponse('not author or blockchain or article')
                
        else:
            return HttpResponse("Hello, not user")
            """
    
    if request.method == "post":
        return HttpResponse("Hello")
    
class Categories(APIView):
    def get(self, request):
        message = {"message":"Get Categories"}
        return Response(message)
    
    def post(self, request):
        print(request.data)
        return Response("POst Categories")
    
class Posts(APIView):
    def get(self, request):
        return Response("Get Posts")
    
    def post(self, request):
        return Response("Post Posts")