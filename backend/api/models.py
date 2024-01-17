from django.db import models
from django.contrib.gis.db import models


class Rectangle(models.Model):
    name = models.CharField(max_length=255)
    location = models.PolygonField()

    def __str__(self):
        return self.name
    

class Point(models.Model):
    name = models.CharField(max_length=255)
    location = models.PointField()

    def __str__(self):
        return self.name
    