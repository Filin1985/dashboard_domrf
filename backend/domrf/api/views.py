from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny

from flats.models import Flat, Region

from .serializers import FlatSerializer, RegionSerializer


class FlatViewSet(ModelViewSet):
    """
    Endpoint для получения данных по квартирам.
    """
    queryset = Flat.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = FlatSerializer


class RegionViewSet(ModelViewSet):
    """
    Endpoint для получения данных по регионам.
    """
    queryset = Region.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegionSerializer
