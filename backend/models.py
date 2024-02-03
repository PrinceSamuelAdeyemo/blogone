from django.db import models
from django.contrib.auth.models import User
import uuid


# Create your models here.
class Author(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    author_id = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True)

    class Meta:
        verbose_name = ("Author")
        verbose_name_plural = ("Authors")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("author_detail", kwargs={"pk": self.pk})

class Article(models.Model):
    article_name = models.CharField(max_length=100, blank=False, null=False)
    article_name = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True)
    #models.SlugField((""))
    
    def  __str__(self):
        return self.article_name
    
    def get_absolute_url(self):
        return reverse("article_detail", kwargs={"pk": self.pk})
    
    
    