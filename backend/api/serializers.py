from rest_framework_gis import serializers
from .models import Rectangle, Point


class RectangleSerializer(serializers.GeoFeatureModelSerializer):

    class Meta:
        fields = ['id', 'name']
        geo_field = 'location'
        model = Rectangle
        

class PointSerializer(serializers.GeoFeatureModelSerializer):

    class Meta:
        fields = ['id', 'name']
        geo_field = 'location'
        model = Point
        