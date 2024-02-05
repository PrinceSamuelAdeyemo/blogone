from django.urls import path
from .views import stuff, Categories, Posts

urlpatterns = [
    path("", stuff, name = "stuff"),
    path("categories", Categories.as_view(), name="categories"),
    path("posts", Posts.as_view(), name="post"),
]

