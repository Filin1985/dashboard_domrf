import csv
import os

from django.conf import settings
from django.core.management.base import BaseCommand

from flats.models import Region

FILES_DIR = os.path.join(settings.BASE_DIR, 'data')


class Command(BaseCommand):
    """
    Загрузка данных в базу
    """
    help = 'Load regions from csv or json file to your database'

    def add_arguments(self, parser):
        parser.add_argument(
            'filename',
            default='regions.csv',
            nargs='?',
            type=str
        )

    def handle(self, *args, **options):
        with open(os.path.join(FILES_DIR, options['filename']), 'r',
                  encoding='utf-8') as file:
            data = csv.reader(file)
            for row in data:
                item = row[0].split(';')
                region = item[0]
                slice_2020 = item[1:13]
                slice_2021 = item[13:25]
                slice_2022 = item[25:37]
                slice_2023 = item[37:]
                data_2020 = sum([int(x) for x in slice_2020])
                data_2021 = sum([int(x) for x in slice_2021])
                data_2022 = sum([int(x) for x in slice_2022])
                data_2023 = sum([int(x) for x in slice_2023])
                all = data_2020 + data_2021 + data_2022 + data_2023
                Region.objects.get_or_create(
                    region=region,
                    year_2020=data_2020,
                    year_2021=data_2021,
                    year_2022=data_2022,
                    year_2023=data_2023,
                    all=all
                )
