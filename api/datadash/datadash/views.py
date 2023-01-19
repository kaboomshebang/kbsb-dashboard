from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EuroToDollarSerializer
from .models import EuroToDollar


class EuroToDollarView(viewsets.ModelViewSet):
    serializer_class = EuroToDollarSerializer
    queryset = EuroToDollar.objects.all()


# create the view(s) for the REST endpoint(s)
