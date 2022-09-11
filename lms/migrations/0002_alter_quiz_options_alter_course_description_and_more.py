# Generated by Django 4.1 on 2022-08-29 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lms', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='quiz',
            options={'verbose_name_plural': 'quizes'},
        ),
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.FileField(blank=True, upload_to=None),
        ),
        migrations.AlterField(
            model_name='course',
            name='image',
            field=models.ImageField(blank=True, upload_to=None),
        ),
        migrations.AlterField(
            model_name='module',
            name='course_material',
            field=models.FileField(blank=True, upload_to=None),
        ),
        migrations.AlterField(
            model_name='module',
            name='description',
            field=models.FileField(blank=True, upload_to=None),
        ),
        migrations.AlterField(
            model_name='module',
            name='image',
            field=models.ImageField(blank=True, upload_to=None),
        ),
        migrations.AlterField(
            model_name='module',
            name='practical_exercise',
            field=models.FileField(blank=True, upload_to=None),
        ),
    ]