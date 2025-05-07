"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path

from blog.views import home,PostViewSet  # 根据实际路径调整
from rest_framework.routers import DefaultRouter
from blog import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView    # 导入 JWT 视图

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', home),  # 添加这行，处理根路径
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/login/', views.login, name='login'),
    re_path(r'^api/login$', views.login, name='login_no_slash'),  # 兼容无斜杠的情况
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),    # JWT 认证获取 token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   # 刷新 token
]
