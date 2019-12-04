from rest_framework import serializers
from .models import User, Tweet

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'mail')#fieldsに与えるのはAPIとして出力したいフィールド名のタプル

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ('body', 'created_at', 'author')