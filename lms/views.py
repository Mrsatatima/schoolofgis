from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "lms/index.html")


def student_dashboard(request):
    return render(request, "lms/student_dashboard.html")
