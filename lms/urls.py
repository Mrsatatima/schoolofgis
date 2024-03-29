from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name="index"),
    path('student', views.student_dashboard, name="student_dashboard"),
    path('student/courses', views.student_courses, name="student_courses"),
    path('student/modules', views.student_modules, name="student_modules"),
    path('student/module', views.module_page, name="module_page"),
    path('student/quiz', views.quiz_page, name="quiz_page"),
    path('login', views.login_page, name="login_page"),
    path('logout', views.logout_page, name="logout_page"),


]
