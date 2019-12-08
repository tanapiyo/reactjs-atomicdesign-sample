from rest_framework import routers
from .views import UserViewSet, TweetViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('tweets', TweetViewSet)
