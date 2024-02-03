from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Author(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    

    class Meta:
        verbose_name = _("")
        verbose_name_plural = _("s")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})

class Article(models.Model):
    article_name = models.CharField(max_length=100, blank=false, null=false)
    
    def  __str__(self):
        return self.article_name
    
    