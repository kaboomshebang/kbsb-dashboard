from django.db import models


class EuroToDollar(models.Model):
    date = models.DateField()
    priceDollar = models.DecimalField(max_digits=3, decimal_places=2)

    def _str_(self):
        return self.priceDollar


# whenever modifying db-models run:
# python manage.py makemigrations
# python manage.py migrate

# once the app is published and live
# check in the migration files to Git
# in production: use those migrations to migrate the db
# no need to make migrations on production machines
# https://stackoverflow.com/questions/28035119/should-i-be-adding-the-django-migration-files-in-the-gitignore-file
