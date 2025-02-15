# Generated by Django 5.1.1 on 2024-10-10 11:29

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bkagenda', '0010_post_is_freq'),
    ]

    operations = [
        migrations.CreateModel(
            name='Visitor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.GenericIPAddressField()),
                ('page', models.CharField(max_length=50)),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('user_agent', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
