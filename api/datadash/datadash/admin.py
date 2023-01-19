from django.contrib import admin
from .models import EuroToDollar


class EuroToDollarAdmin(admin.ModelAdmin):
    list_display = ("date", "priceDollar")


# Register models
admin.site.register(EuroToDollar, EuroToDollarAdmin)

# make sure to create a superuser
# python manage.py createsuperuser
