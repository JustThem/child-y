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
            return render(request, 'The One Child.html', {'data': data, 'name': name})
        else:
            return redirect('/sign_in')


def get_data(request):
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
        b = JsonResponse({'data': a, 'con': con})
        return b


def info(request):
    return render(request, 'Info.html')


def sign_out(request):
    request.session.flush()
    return redirect('/sign_in')


def sign_in(request):
    if request.method == 'GET':
        return render(request, 'sign_in.html')
    else:
        if request.POST.get('pwd'):
            if request.POST.get('password') == request.POST.get('pwd'):
                messages.success(request, '注册成功')
                username = request.POST.get('username')
                password = request.POST.get('password')
                c_user = ChildUser(username=username, password=password)
                c_user.save()
                return redirect('/sign_in')
            else:
                messages.warning(request, '两次密码不一致')
                return render(request, 'sign_up.html')
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
                    return render(request, 'sign_in.html')
            else:
                messages.warning(request, '该用户没有注册')
                return render(request, 'sign_up.html')


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
                    return render(request, 'sign_up.html')
                else:
                    password = request.POST.get('password')
                    c_user = ChildUser(username=username, password=password)
                    c_user.save()
                    messages.add_message(request, messages.SUCCESS, '注册成功')
                    return render(request, 'sign_in.html')
            else:
                messages.warning(request, '两次密码不一致')
                return render(request, 'sign_up.html')
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
                    return render(request, 'sign_in.html')
            else:
                messages.warning(request, '该用户没有注册')
                return render(request, 'sign_up.html')
