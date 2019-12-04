from django.shortcuts import render
from rest_framework import viewsets, filters

from .models import User, Tweet
from .serializer import UserSerializer, TweetSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()#クエリとserializerを渡す
    serializer_class = UserSerializer

class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
