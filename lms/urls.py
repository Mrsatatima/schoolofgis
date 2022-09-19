from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name="index"),
    path('student', views.student_dashboard, name="student_dasbaord"),

]
