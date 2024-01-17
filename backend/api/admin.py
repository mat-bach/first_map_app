from django.contrib.gis import admin
from .models import Rectangle, Point

@admin.register(Rectangle)
class RectangleAdmin(admin.OSMGeoAdmin):
    list_display = ['name', 'location']


@admin.register(Point)
class PointAdmin(admin.OSMGeoAdmin):
    list_display = ['name', 'location']
