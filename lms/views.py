from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout

# Create your views here.


def index(request):
    return render(request, "lms/index.html")


@login_required(login_url='/login')
def student_dashboard(request):
    return render(request, "lms/student_dashboard.html")


def student_courses(request):
    return render(request, "lms/student_courses.html")


def student_modules(request):
    return render(request, "lms/student_modules.html")


def module_page(request):
    return render(request, "lms/module_page.html")


def quiz_page(request):
    return render(request, "lms/quiz.html")


def login_page(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        print(user)
        if user is not None:
            login(request, user)
            return redirect("student_dashboard")
        else:
            # Return an 'invalid login' error message.
            return render(request, 'lms/login.html', {'error_message': "Invalid login"})
    else:
        return render(request, 'lms/login.html')


def logout_page(request):
    logout(request)
    return redirect("index")
