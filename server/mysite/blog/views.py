from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def home(request):
    return HttpResponse("欢迎访问博客 API 首页！")