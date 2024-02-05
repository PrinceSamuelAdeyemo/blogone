from django.db import models
from django.contrib.auth.models import User
import uuid


# Create your models here.
class Author(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    author_id = models.UUIDField(default = uuid.uuid4)
    class Meta:
        verbose_name = ("Author")
        verbose_name_plural = ("Authors")

    def __str__(self):
        return self.name.username

    def get_absolute_url(self):
        return reverse("author_detail", kwargs={"pk": self.pk})



class Article(models.Model):
    article_name = models.CharField(max_length=100, blank=False, null=False)
    article_id = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    time_written = models.TimeField(auto_now_add=True)
    date_written = models.DateField(auto_now_add=True)
    time_updated = models.TimeField(auto_now=True)
    date_updated = models.DateField(auto_now=True)
    #models.SlugField((""))
    
    def  __str__(self):
        return self.article_name
    
    def get_absolute_url(self):
        return reverse("article_detail", kwargs={"pk": self.pk})
    
     
class Category(models.Model):
    category_name = models.CharField(max_length=30)
    articles = models.ManyToManyField(Article, through='CategoryGroup')
    date_written = models.DateField(auto_now_add=True)
    time_written = models.TimeField(auto_now_add=True)
    date_updated = models.DateField(auto_now=True)
    time_updated = models.TimeField(auto_now=True)
    
    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"    
        
    def __str__(self):
        return self.category_name
        

class CategoryGroup(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date_added = models.DateField(auto_now_add=True)
    time_added = models.TimeField(auto_now_add=True)
    date_updated = models.DateField(auto_now=True)
    time_updated = models.TimeField(auto_now=True)
    
    