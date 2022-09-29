from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name="index"),
    path('student', views.student_dashboard, name="student_dashboard"),
    path('student/courses', views.student_courses, name="student_courses"),
    path('student/modules', views.student_modules, name="student_modules"),



]
