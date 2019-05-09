from django.db import models

# Create your models here.


class ChildY(models.Model):
    title = models.CharField(max_length=20)
    info = models.TextField()
    like_num = models.IntegerField(default=0)

    class Meta:
        db_table = 'y'


class ChildUser(models.Model):
    username = models.CharField(max_length=15)
    password = models.CharField(max_length=18)

    class Meta:
        db_table = 'y_user'


class ChildInfo(models.Model):
    image = models.ImageField(upload_to='img')
    nickname = models.CharField(max_length=15)
    sex = models.CharField(max_length=2)
    # 一句话介绍
    sig = models.CharField(max_length=20)
    # 居住地
    add = models.CharField(max_length=20)
    # 个人说明
    pst = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=25)

    pid = models.OneToOneField(ChildUser, on_delete=models.CASCADE)

    class Meta:
        db_table = 'y_info'


class ChildLikeNum(models.Model):
    like_user = models.CharField(max_length=15)
    # like_article = models.CharField(max_length=10)

    pub = models.ManyToManyField(ChildY)
    # pub_user = models.ManyToManyField(ChildUser)

    class Meta:
        db_table = 'y_like'
