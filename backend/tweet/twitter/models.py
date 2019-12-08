from django.db import models

class User(models.Model):
    name = models.CharField(max_length=32)
    mail = models.EmailField()

class Tweet(models.Model):
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User,related_name='tweets', on_delete=models.CASCADE)


