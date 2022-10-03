from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "lms/index.html")


def student_dashboard(request):
    return render(request, "lms/student_dashboard.html")


def student_courses(request):
    return render(request, "lms/student_courses.html")

def student_modules(request):
    return render(request, "lms/student_modules.html")


def module_page(request):
    return render(request, "lms/module_page.html")