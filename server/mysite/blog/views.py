from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

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

        try:
            user = User.objects.get(username=username)
            if user.password == password:  # 注意：实际应使用加密验证
                return JsonResponse({'success': True, 'message': '登录成功'})
            else:
                return JsonResponse({'success': False, 'message': '密码错误'}, status=400)
        except User.DoesNotExist:
            return JsonResponse({'success': False, 'message': '用户不存在'}, status=400)