from rest_framework import serializers

from flats.models import Flat, Region


class FlatSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Flat."""

    class Meta:
        model = Flat
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Region."""

    class Meta:
        model = Region
        fields = '__all__'
