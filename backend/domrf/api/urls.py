from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import FlatViewSet, RegionViewSet

router = DefaultRouter()
router.register('flats', FlatViewSet, basename='flats')
router.register('regions', RegionViewSet, basename='regions')

urlpatterns = [
    path('', include(router.urls)),
]
