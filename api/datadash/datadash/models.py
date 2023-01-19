from django.db import models


class EuroToDollar(models.Model):
    date = models.DateField()
    priceDollar = models.IntegerField()

    def _str_(self):
        return self.priceDollar


# whenever modifying db-models run:
# python manage.py makemigrations
