from django.db import models
from django.utils.text import slugify

# Create your models here.


class Info(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to=None, height_field=None,
                              width_field=None, max_length=None)
    description = models.FileField(upload_to=None, max_length=100)
    slug = models.SlugField(max_length=100, editable=False)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Info, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.title}"


class Course(Info):
    pass


class Module(Info):
    course_material = models.FileField(upload_to=None, max_length=100)
    practical_exercise = models.FileField(upload_to=None, max_length=100)
    course = models.ForeignKey("Course", on_delete=models.CASCADE,
                               related_name="courses",
                               related_query_name="course")


class Student(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254, unique=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    courses = models.ManyToManyField(
        "Course", related_name="students", related_query_name="student")
    slug = models.SlugField(max_length=100, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.username)
        super(Student, self).save(*args, **kwargs)
 
    def __str__(self):
        return f"{self.name}"


class Quiz(models.Model):
    module = models.ForeignKey("Module", on_delete=models.CASCADE,
                               related_name="quizes", related_query_name="quiz")
    question = models.CharField(max_length=250)
    options = models.CharField(max_length=250)
    answer = models.CharField(max_length=100)


class Score(models.Model):
    student = models.ForeignKey("Student",  on_delete=models.CASCADE,
                                related_name="scores",
                                related_query_name="score")
    module = models.ForeignKey("module", on_delete=models.CASCADE,
                               related_name="scores",
                               related_query_name="score")
    score = models.DecimalField(max_digits=6, decimal_places=2, blank=True)

    def __str__(self):
        return f"{self.student.object__name}"
