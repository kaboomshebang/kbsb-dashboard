from rest_framework import serializers
from .models import EuroToDollar


class EuroToDollarSerializer(serializers.ModelSerializer):
    class Meta:
        model = EuroToDollar
        fields = ("date", "priceDollar")


# convert Django model to JSON
