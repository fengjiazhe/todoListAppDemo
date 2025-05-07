from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

from django.contrib.auth import authenticate    # 用于用户认证
from rest_framework_simplejwt.tokens import RefreshToken    # 用于 JWT 认证

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def home(request):
    return HttpResponse("欢迎访问博客 API 首页！")

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return JsonResponse({
                'success': True,
                'token': str(refresh.access_token),
                'refresh': str(refresh),
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                }
            })
        else:
            return JsonResponse({'success': False, 'message': '账号或密码错误'}, status=400)
    return JsonResponse({'success': False, 'message': '无效请求'}, status=405)