from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RectangleSerializer, PointSerializer
from .models import Rectangle, Point
from gisserver.features import FeatureType, ServiceDescription
from gisserver.geometries import CRS, WGS84
from gisserver.views import WFSView

# Create your views here.

class RectangleView(viewsets.ModelViewSet):
    serializer_class = RectangleSerializer
    queryset = Rectangle.objects.all()


class PointView(viewsets.ModelViewSet):
    serializer_class = PointSerializer
    queryset = Point.objects.all()
    

RD_NEW = CRS.from_srid(28992)


class PlacesWFSView(WFSView):
    """An simple view that uses the WFSView against our test model."""

    xml_namespace = "http://example.org/gisserver"

    # The service metadata
    service_description = ServiceDescription(
        title="Places",
        abstract="Unittesting",
        keywords=["django-gisserver"],
        provider_name="Django",
        provider_site="https://www.example.com/",
        contact_person="django-gisserver",
    )

    # Each Django model is listed here as a feature.
    feature_types = [
        FeatureType(
            Rectangle.objects.all(),
            fields="__all__",
            other_crs=[RD_NEW]
        ),
    ]
