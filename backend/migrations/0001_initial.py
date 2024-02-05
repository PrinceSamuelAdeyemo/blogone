# Generated by Django 4.1.1 on 2024-02-03 20:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('article_name', models.CharField(max_length=100)),
                ('article_id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('time_written', models.TimeField(auto_now_add=True)),
                ('date_written', models.DateField(auto_now_add=True)),
                ('time_updated', models.TimeField(auto_now=True)),
                ('date_updated', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=30)),
                ('date_written', models.DateField(auto_now_add=True)),
                ('time_written', models.TimeField(auto_now_add=True)),
                ('date_updated', models.DateField(auto_now=True)),
                ('time_updated', models.TimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'category',
                'verbose_name_plural': 'categories',
            },
        ),
        migrations.CreateModel(
            name='CategoryGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_added', models.DateField(auto_now_add=True)),
                ('time_added', models.TimeField(auto_now_add=True)),
                ('date_updated', models.DateField(auto_now=True)),
                ('time_updated', models.TimeField(auto_now=True)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.article')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.category')),
            ],
        ),
        migrations.AddField(
            model_name='category',
            name='articles',
            field=models.ManyToManyField(through='backend.CategoryGroup', to='backend.article'),
        ),
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_id', models.UUIDField(default=uuid.uuid4)),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Author',
                'verbose_name_plural': 'Authors',
            },
        ),
        migrations.AddField(
            model_name='article',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.author'),
        ),
    ]
