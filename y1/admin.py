from django.contrib import admin
from .models import *
# Register your models here.


class ChildYAdmin(admin.ModelAdmin):
    list_display = ['title', 'info']

    fieldsets = [
        ('标题', {'fields': ['title']}),
        ('内容', {'fields': ['info']})
    ]

admin.site.register(ChildY, ChildYAdmin)
