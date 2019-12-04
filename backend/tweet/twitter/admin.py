from django.contrib import admin
from .models import User, Tweet

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Tweet)
class Tweet(admin.ModelAdmin):
    pass
