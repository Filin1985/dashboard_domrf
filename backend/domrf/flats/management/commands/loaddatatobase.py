import csv
import os

from django.conf import settings
from django.core.management.base import BaseCommand

from flats.models import Flat

FILES_DIR = os.path.join(settings.BASE_DIR, 'data')


class Command(BaseCommand):
    """
    Загрузка данных в базу
    """
    help = 'Load flats from csv or json file to your database'

    def add_arguments(self, parser):
        parser.add_argument(
            'filename',
            default='data.csv',
            nargs='?',
            type=str
        )

    def handle(self, *args, **options):
        with open(os.path.join(FILES_DIR, options['filename']), 'r',
                  encoding='utf-8') as file:
            data = csv.reader(file)
            for row in data:
                splited_row = row[0].split(';')
                date, all_meters, close_meters, open_meters, pending_meters, all_percent, open_percent, close_percent, pending_percent = splited_row
                Flat.objects.get_or_create(
                    date=date,
                    all_meters=int(all_meters),
                    close_meters=int(close_meters),
                    open_meters=int(open_meters),
                    pending_meters=int(pending_meters),
                    all_percent=int(all_percent),
                    open_percent=int(open_percent),
                    close_percent=int(close_percent),
                    pending_percent=int(pending_percent)
                )