# Generated by Django 2.0 on 2019-04-12 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('y1', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='childy',
            name='like_num',
            field=models.IntegerField(null=True),
        ),
    ]
