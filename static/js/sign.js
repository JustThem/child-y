function rBlur(e) {
    e.target.setAttribute('class', 'change');
    if (!e.target.value) {
        if (e.target.name == 'username') {
            if (e.target.placeholder == '注册') {
                e.target.placeholder = '请输入注册账号'
            } else {
                e.target.placeholder = '请输入账号'
            }
        } else {
            e.target.placeholder = '请输入密码'
        }
    }
}
function rFocus(e) {
    e.target.setAttribute('class', '');
    if (e.target.name == 'username') {
        if (e.target.placeholder == '注册' | e.target.placeholder == '请输入注册账号') {
            e.target.placeholder = '注册'
        } else {
            e.target.placeholder = '账号';
        }

    } else {
        e.target.placeholder = '密码';
    }
}
function rClick(e) {
    let a = document.getElementsByClassName('title-two')[0];
    let b = document.getElementsByTagName('input');
    let c = document.getElementsByTagName('button');
    let form = document.getElementsByTagName('form')[0];
    let div = document.createElement('div');
    let input = document.createElement('input');
    let span = document.createElement('span');
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    let con = document.getElementsByClassName('con-reg')[0];
    if (e.target.innerHTML == '注册') {
        a.innerHTML = '注册Child，发现更多可信赖的解答';
        b[0].placeholder = '注册';
        c[0].innerHTML = '注册';
        b[0].setAttribute('class', '');
        b[1].setAttribute('class', '');
        input.type = 'password';
        input.placeholder = '密码';
        input.name = 'pwd';
        input.onblur = function () {
            this.setAttribute('class', 'change');
            this.placeholder = '请输入密码'
        };
        input.onfocus = function () {
            this.setAttribute('class', '');
            this.placeholder = '密码';
        };
        input.setAttribute('required', 'true');
        input.setAttribute('pattern', '^[0-9a-zA-Z@_.]{6,18}$');
        div.appendChild(input);
        form.insertBefore(div, c[0]);
        e.target.innerHTML = '登录';
        span.className = 'con-text';
        span.innerHTML = '注册即代表同意';
        a1.href = '#';
        a1.innerText = '《Child协议》';
        a2.href = '#';
        a2.innerText = '《隐私保护指引》';
        span.appendChild(a1);
        span.appendChild(a2);
        form.appendChild(span);
        c[0].style.marginBottom = '0px';
        con.children[0].innerText = '已有账号？';
        history.pushState('', '', '/sign_up/');


    } else {
        b[0].setAttribute('class', '');
        b[1].setAttribute('class', '');
        a.innerHTML = '登录Child，发现更多可信赖的解答';
        b[0].placeholder = '账号';
        c[0].innerHTML = '登录';
        e.target.innerHTML = '注册';
        form.removeChild(form.children[2]);
        form.removeChild(form.children[5]);
        c[0].style.marginBottom = '40px';
        con.children[0].innerText = '没有账号？';
        history.pushState('', '', '/sign_in/');
    }
}

