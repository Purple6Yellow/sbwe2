# Generated by Django 5.1.1 on 2024-11-18 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bkagenda', '0017_rename_end_time_prog_end_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='prog',
            name='website',
            field=models.URLField(default=False),
        ),
    ]
