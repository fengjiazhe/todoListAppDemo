# test_db_connection.py
import sys
import os
import django
from django.db import connection

# 将 mysite 添加进模块查找路径
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# 设置 DJANGO_SETTINGS_MODULE 环境变量
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")

# 启动 Django
django.setup()

# 测试数据库连接
try:
    with connection.cursor() as cursor:
        cursor.execute("SELECT 1")
        result = cursor.fetchone()
        print("✅ 数据库连接成功！", result)
except Exception as e:
    print("❌ 数据库连接失败：", e)