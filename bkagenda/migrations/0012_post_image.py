# Generated by Django 5.1.1 on 2024-10-29 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bkagenda', '0011_visitor'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
