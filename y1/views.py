from django.shortcuts import render, HttpResponse, HttpResponseRedirect, redirect
from .models import *
from django.http import JsonResponse
from django.contrib import messages

# Create your views here.


def index(request):
        request.session.clear_expired()
        is_login = request.session.get('IS_LOGIN', False)
        if is_login:
            data = ChildY.objects.order_by('?')[:10]
            name = request.session.get('NAME', False)
            pid = ChildUser.objects.get(username=name)
            c1 = ChildLikeNum.objects.get(like_user=name)
            c = c1.pub.all()
            global article_id
            article_id = []
            for i in c:
                article_id.append(i.id)
            return render(request, 'The One Child.html', {'data': data, 'name': name, 'pid': article_id, 'item': pid.childinfo})
        else:
            return redirect('/sign_in')


def like_up(request):
    request.session.clear_expired()
    is_login = request.session.get('IS_LOGIN', False)
    if is_login:
        name = request.session.get('NAME', False)
        if request.is_ajax():
            is_num = request.GET.get('isNum')
            pid = request.GET.get('pid')
            c1 = ChildLikeNum.objects.get(like_user=name)
            if is_num == '0':
                num = request.GET.get('num')
                if num == ' ':
                    num = 0
                    num += 1
                    y = ChildY.objects.get(id=pid)
                    y.like_num = num
                    y.save()
                    c1.pub.add(y)
                    return HttpResponse(num)
                elif not num:
                    num = 0
                    num += 1
                    y = ChildY.objects.get(id=pid)
                    y.like_num = num
                    y.save()
                    c1.pub.add(y)
                    return HttpResponse(num)
                else:
                    num = int(num) + 1
                    y = ChildY.objects.get(id=pid)
                    y.like_num = num
                    y.save()
                    c1.pub.add(y)
                    return HttpResponse(num)
            else:
                num = int(request.GET.get('num'))
                num -= 1
                y = ChildY.objects.get(id=pid)
                y.like_num = num
                y.save()
                a = c1.pub.get(id=pid)
                c1.pub.remove(a)
                if num == 0:
                    return HttpResponse('')
                return HttpResponse(num)
    else:
        return redirect('/sign_in')


def get_data(request):
    request.session.clear_expired()
    is_login = request.session.get('IS_LOGIN', False)
    if is_login:
        if request.is_ajax():
            a = []
            con = []
            data = ChildY.objects.order_by('?')[:10].values_list()
            for x in data:
                a.append(x)
                if len(x[2]) > 98:
                    get_info = '%s....' % x[2][0:98]
                    con.append(get_info)
                else:
                    con.append(x[2])
            b = JsonResponse({'data': a, 'con': con, 'pid': article_id})
            return b


def info(request):
    request.session.clear_expired()
    is_login = request.session.get('IS_LOGIN', False)
    if is_login:
        name = request.session.get('NAME', False)
        pid = ChildUser.objects.get(username=name)
        if request.method == 'GET':
            return render(request, 'Info.html', {'item': pid.childinfo})
        else:
            pid.childinfo.image = request.FILES.get('file')
            pid.childinfo.nickname = request.POST.get('name')
            pid.childinfo.sex = request.POST.get('sex')
            pid.childinfo.sig = request.POST.get('sig')
            pid.childinfo.add = request.POST.get('add')
            pid.childinfo.pst = request.POST.get('pst')
            pid.childinfo.phone = request.POST.get('phone')
            pid.childinfo.email = request.POST.get('email')

            pid.childinfo.save()
            return render(request, 'Info.html', {'item': pid.childinfo})
    else:
        return redirect('/sign_in')


def sign_out(request):
    request.session.flush()
    return redirect('/sign_in')


def sign_in(request):
    if request.method == 'GET':
        return render(request, 'sign_in.html')
    else:
        if request.POST.get('pwd'):
            username = request.POST.get('username')
            user = ChildUser.objects.filter(username=username)
            if user:
                messages.add_message(request, messages.WARNING, '账号已存在')
                return redirect('/sign_up')
            else:
                if request.POST.get('password') == request.POST.get('pwd'):
                    messages.success(request, '注册成功')
                    username = request.POST.get('username')
                    password = request.POST.get('password')
                    c_user = ChildUser(username=username, password=password)
                    c_user.save()
                    c_info = ChildInfo(pid=c_user)
                    c_info.save()
                    c1 = ChildLikeNum(like_user=c_user.username)
                    c1.save()
                    return redirect('/sign_in')
                else:
                    messages.warning(request, '两次密码不一致')
                    return redirect('/sign_up')
        else:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = ChildUser.objects.filter(username=username)
            word = ChildUser.objects.filter(password=password)
            if user:
                if word:
                    request.session['IS_LOGIN'] = True
                    request.session['NAME'] = username

                    return redirect('/index')
                else:
                    messages.warning(request, '密码错误')
                    return redirect('/sign_in')
            else:
                messages.warning(request, '该用户没有注册')
                return redirect('/sign_up')


def sign_up(request):

    if request.method == 'GET':
        return render(request, 'sign_up.html')
    else:
        if request.POST.get('pwd'):
            if request.POST.get('password') == request.POST.get('pwd'):

                username = request.POST.get('username')
                user = ChildUser.objects.filter(username=username)
                if user:
                    messages.add_message(request, messages.WARNING, '账号已存在')
                    return redirect('/sign_up')
                else:
                    password = request.POST.get('password')
                    c_user = ChildUser(username=username, password=password)
                    c_user.save()
                    c_info = ChildInfo(pid=c_user)
                    c_info.save()
                    c1 = ChildLikeNum(like_user=c_user.username)
                    c1.save()
                    messages.add_message(request, messages.SUCCESS, '注册成功')
                    return redirect('/sign_in')
            else:
                messages.warning(request, '两次密码不一致')
                return redirect('/sign_up')
        else:
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = ChildUser.objects.filter(username=username)
            word = ChildUser.objects.filter(password=password)
            if user:
                if word:
                    request.session['IS_LOGIN'] = True
                    request.session['NAME'] = username

                    return redirect('/index')
                else:
                    messages.warning(request, '密码错误')
                    return redirect('/sign_in')
            else:
                messages.warning(request, '该用户没有注册')
                return redirect('/sign_up')
