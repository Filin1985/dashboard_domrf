from django.db import models
from django.core.validators import MinValueValidator


class Flat(models.Model):
    """Модель квартир."""
    date = models.CharField(
        max_length=30,
        unique=True,
        verbose_name='Дата'
    )
    all_meters = models.IntegerField(
        verbose_name='Всего строящегося жилья в метрах, млн кв м',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    open_meters = models.IntegerField(
        verbose_name='Жилье с открытыми продажами, млн кв м',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    close_meters = models.IntegerField(
        verbose_name='Жилье с закрытыми продажами, млн кв м',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    pending_meters = models.IntegerField(
        verbose_name='Жилье с неоткрытими продажами, млн кв м',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    all_percent = models.IntegerField(
        verbose_name='Всего строящегося жилья в метрах, %',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    open_percent = models.IntegerField(
        verbose_name='Жилье с открытыми продажами, %',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    close_percent = models.IntegerField(
        verbose_name='Жилье с закрытыми продажами, %',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    pending_percent = models.IntegerField(
        verbose_name='Жилье с неоткрытими продажами, %',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))

    class Meta:
        ordering = ['date']
        verbose_name = 'Дата'
        verbose_name_plural = 'Дата'

    def __str__(self) -> str:
        return self.date


class Region(models.Model):
    """Модель регионов."""
    region = models.CharField(
        max_length=150,
        unique=True,
        verbose_name='Регион'
    )
    year_2020 = models.IntegerField(
        verbose_name='Количесвто многоквартирных домов в 2020 году, шт',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    year_2021 = models.IntegerField(
        verbose_name='Количесвто многоквартирных домов в 2021 году, шт',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    year_2022 = models.IntegerField(
        verbose_name='Количесвто многоквартирных домов в 2022 году, шт',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    year_2023 = models.IntegerField(
        verbose_name='Количесвто многоквартирных домов в 2023 году, шт',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))
    all = models.IntegerField(
        verbose_name='Количесвто многоквартирных домов pf 2020-2023u, шт',
        validators=(MinValueValidator(
            0, message='Минимальное значение 0'),
        ))

    class Meta:
        ordering = ['region']
        verbose_name = 'Регион'
        verbose_name_plural = 'Регион'

    def __str__(self) -> str:
        return self.region
