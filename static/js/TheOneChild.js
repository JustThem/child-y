// this.onload = function(){
//     var a = document.getElementsByClassName("head")[0].getElementsByTagName("a");
//     for(i=0;i<a.length;i++){
//         a[i].onclick = function(){
//             this.style.borderBottom = '3px solid #0080ff';
//             this.style.fontWeight = 'bold';
//             this.onblur = function(){
//                 this.style.borderBottom = 'none';
//                 this.style.fontWeight = 'normal';
//             }
//         }
//     }
// }
function clickA(obj) {
    console.log(obj);
    var a = document.getElementsByClassName("head")[0].getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        a[i].style.borderBottom = 'none';
        a[i].style.fontWeight = 'normal';
    }
    obj.style.borderBottom = '3px solid #0080ff';
    obj.style.fontWeight = 'bold';
}

// 第一种隐藏 纯js代码 缺点刷新页面时可以看出来
// this.onload = function () {
//     var info = document.getElementsByClassName('info');
//     var all = document.getElementsByClassName('all');
//     // var p = document.getElementsByClassName('p')[0];
//     w = [];
//     for (var i = 0; i < info.length; i++) {
//         let con = info[i].innerHTML;
//         w.push(con);
//         // var x = con.slice(66, -1)
//         // p.innerHTML = x
//         // console.log(x)
//          if (con.length > 66) {
//             con = con.substr (0, 66) + '.....';
//             info[i].innerHTML = con;
//         }
//         for (let d = 0; d < all.length; d++) {
//             all[d].onclick = function () {
//                 info[d].innerHTML = w[d]
//         }
//     }
//     }
// }

// 第二种css样式 + js实现 （隐藏在css中写，显示在js中写） 缺点只能行显示，阅读全文在最后一行与文本偏离太多，不美观

function dataInfo(obj) {
    var a = obj.parentNode.parentNode.children[2].children[6];
    var b = obj.parentNode.children[0];
    b.setAttribute('hidden', 'True');
    obj.parentNode.children[1].removeAttribute('hidden');
    a.style.display = 'block';
    obj.style.display = 'none';
}
function dataInto(obj) {
    var a = obj.parentNode.parentNode.children[1].children[0];
    var b = obj.parentNode.parentNode.children[1].children[1];
    obj.style.display = 'none';
    a.removeAttribute('hidden');
    b.setAttribute('hidden', 'True');
    obj.parentNode.parentNode.children[1].children[2].style.display = 'inline-block';

}

// this.onload = function () {
//     $.get('info/', null, function (res) {
//         console.log(res)
//     })
// };

function backColor1(e) {
    console.log(e.target.childNodes);
    let isLike = e.target.value;
    if (isLike === 'true'){
        e.target.value = 'false';
        e.target.onmouseover= function () {
            this.style.backgroundColor='#c4e1ff'
        };
        e.target.onmouseout= function () {
            this.style.backgroundColor='#d2e9ff'
        };
        e.target.style.backgroundColor = '#d2e9ff';
        e.target.style.color = '#0084ff';
        e.target.innerHTML = '<span id="one" onclick="backColor11(event)"></span>&nbsp;&nbsp;&nbsp;赞同 1k';
        e.target.childNodes[0].style.backgroundImage = "url(../static/css/img/r.png)"
    }else {
        e.target.value = 'true';
        e.target.onmouseover = function () {
            return null
        };
        e.target.onmouseout = function () {
            return null
        };
        e.target.style.backgroundColor = '#0084ff';
        e.target.style.color = 'white';
        e.target.innerHTML = '<span id="one" onclick="backColor11(event)"></span>&nbsp;&nbsp;已赞同 1k';

        e.target.childNodes[0].style.backgroundImage = "url(../static/css/img/r1.png)"
    }
}

function backColor11(e) {
    let r = e.target.parentNode;
    e.stopPropagation();
    let isLike = e.target.parentNode.value;
    if (isLike === 'true'){

        e.target.parentNode.value = 'false';
        e.target.parentNode.onmouseover= function () {
            this.style.backgroundColor='#c4e1ff'
        };
        e.target.parentNode.onmouseout= function () {
            this.style.backgroundColor='#d2e9ff'
        };
        e.target.parentNode.style.backgroundColor = '#d2e9ff';
        e.target.parentNode.style.color = '#0084ff';

        e.target.parentNode.innerHTML = '<span id="one" onclick="backColor11(event)"></span>&nbsp;&nbsp;&nbsp;赞同 1k';
        e.target.style.backgroundImage = "url(../static/css/img/r.png)"
    }else {
        e.target.parentNode.value = 'true';
        e.target.parentNode.onmouseover = function () {
            return null
        };
        e.target.parentNode.onmouseout = function () {
            return null
        };
        e.target.parentNode.style.backgroundColor = '#0084ff';
        e.target.parentNode.style.color = 'white';

        r.innerHTML = '<span id="one" onclick="backColor11(event)"></span>&nbsp;&nbsp;已赞同 1k';
        r.childNodes[0].style.backgroundImage = "url(../static/css/img/r1.png)";

        // $(e.target.parentNode).find('#one').css('background-image', "url(../static/css/img/r1.png)")

    }
}

function backColor2(e){
    let isLike = e.target.value;
    if (isLike === 'true'){
        e.target.value = 'false';
        e.target.onmouseover= function () {
            this.style.backgroundColor='#c4e1ff'
        };
        e.target.onmouseout= function () {
            this.style.backgroundColor='#d2e9ff'
        };
        e.target.style.backgroundColor = '#d2e9ff';
        // jquery
        e.target.childNodes[0].style.backgroundImage = "url(../static/css/img/s.png)";

    }else {
        e.target.value = 'true';
        e.target.onmouseover = function () {
            return null
        };
        e.target.onmouseout = function () {
            return null
        };
        e.target.style.backgroundColor = '#0084ff';
        //原生 js
        e.target.childNodes[0].style.backgroundImage = "url(../static/css/img/s1.png)";
    }
}

function backColor22(e) {
    e.stopPropagation();
    console.log(e.target.parentNode.value);

    let isLike = e.target.parentNode.value;
        if (isLike === 'true'){
            e.target.parentNode.value = 'false';
            e.target.parentNode.onmouseover= function () {
                this.style.backgroundColor='#c4e1ff'
            };
            e.target.parentNode.onmouseout= function () {
                this.style.backgroundColor='#d2e9ff'
            };
            e.target.parentNode.style.backgroundColor = '#d2e9ff';
            // jquery
            e.target.style.backgroundImage = "url(../static/css/img/s.png)"
        }else {
            e.stopPropagation();
            e.target.parentNode.value = 'true';
            e.target.parentNode.onmouseover = function () {
                return null
            };
            e.target.parentNode.onmouseout = function () {
                return null
            };
            e.target.parentNode.style.backgroundColor = '#0084ff';
            //原生 js
            e.target.style.backgroundImage = "url(../static/css/img/s1.png)"
        }
}

function moreClick() {
    $.ajax({
        url:'/get_data/',
        // dataType:'json',
        success: function (data) {
            for (let i = 0; i < data['data'].length; i++ ){
                let div1 = document.createElement('div');
                let a = document.createElement('a');
                let div2 = document.createElement('div');
                let div3 = document.createElement('div');
                let span1 = document.createElement('span');
                let span_info = document.createElement('span');
                let button1 = document.createElement('button');
                let span2 = document.createElement('span');
                let span3 = document.createElement('span');
                let divSpan1 = document.createElement('span');
                let divButton1 = document.createElement('button');
                let divButton2 = document.createElement('button');
                let buttonSpan1 = document.createElement('span');
                let divButton3 = document.createElement('button');
                let buttonSpan2 = document.createElement('span');
                let buttonSpan3 = document.createElement('span');
                let divDiv = document.createElement('div');
                let divButton4 = document.createElement('button');
                let buttonSpan4 = document.createElement('span');
                let buttonSpan5 = document.createElement('span');
                let divButton5 = document.createElement('button');
                let buttonSpan6 = document.createElement('span');
                let buttonSpan7 = document.createElement('span');
                let divButton6 = document.createElement('button');
                let buttonSpan8 = document.createElement('span');
                let buttonSpan9 = document.createElement('span');
                let divButton7 = document.createElement('button');
                let buttonSpan10 = document.createElement('span');
                let buttonSpan11 = document.createElement('span');


                div1.className = 'con-info';
                $(".b-content").append(div1);
                a.innerText = data['data'][i][1];
                div2.className = 'data';
                div3.className = 'but';
                span1.className = 'info';
                button1.className = 'all';
                span1.innerText = data['con'][i];
                span_info.innerText = data['data'][i][2];
                span_info.setAttribute('hidden', 'True');
                span2.innerText = '阅读全文';
                divButton1.className ='aria-label="赞同"';
                divButton1.onmouseover = function () {
                    this.style.backgroundColor='#c4e1ff'
                };
                divButton1.onmouseout = function () {
                    this.style.backgroundColor='#d2e9ff'
                };
                divButton1.value = 'false';
                divButton1.onclick = function(){
                    let e = this;
                    let isLike = e.value;
                    if (isLike === 'true'){
                        e.value = 'false';
                        e.onmouseover = function () {
                            this.style.backgroundColor='#c4e1ff'
                        };
                        e.onmouseout = function () {
                            this.style.backgroundColor='#d2e9ff'
                        };
                        e.style.backgroundColor = '#d2e9ff';
                        e.style.color = '#0084ff';
                        e.innerHTML = '<span id="one" onclick="backColor11(event)"></span>&nbsp;&nbsp;&nbsp;赞同 1k';
                        e.childNodes[0].style.backgroundImage = 'url(../static/css/img/r.png)';
                    }else {
                        e.value = 'true';
                        e.onmouseover = function () {
                            return null
                        };
                        e.onmouseout = function () {
                            return null
                        };
                        e.style.backgroundColor = '#0084ff';
                        e.style.color = 'white';
                        e.innerHTML = '<span id="one" onclick="backColor11(event)"></span>&nbsp;&nbsp;已赞同 1k';
                        e.childNodes[0].style.backgroundImage = 'url(../static/css/img/r1.png)'
                }
                };


                divButton2.className = 'aria-label="反对"';
                divButton2.onmouseover = function () {
                    this.style.backgroundColor='#c4e1ff'
                };
                divButton2.onmouseout = function () {
                    this.style.backgroundColor='#d2e9ff'
                };
                divButton2.value = 'false';
                divButton2.onclick = function(){
                    let e = this;
                    let isLike = e.value;
                    if (isLike === 'true'){
                        e.value = 'false';
                        e.onmouseover= function () {
                            this.style.backgroundColor='#c4e1ff'
                        };
                        e.onmouseout= function () {
                            this.style.backgroundColor='#d2e9ff'
                        };
                        e.style.backgroundColor = '#d2e9ff';
                        e.childNodes[0].style.backgroundImage = "url(../static/css/img/s.png)";
                    }else {
                        e.value = 'true';
                        e.onmouseover = function () {
                            return null
                        };
                        e.onmouseout = function () {
                            return null
                        };
                        e.style.backgroundColor = '#0084ff';
                        e.childNodes[0].style.backgroundImage = "url(../static/css/img/s1.png)"
                    }
                };



                divButton3.className = 'aria-label="评论"';
                buttonSpan3.innerText = '1597 条评论';
                 buttonSpan3.onmouseover = function () {
                    this.style.color='#4f4f4f'
                };
                buttonSpan3.onmouseout = function () {
                    this.style.color='#8590a6'
                };

                divDiv.className = 'aria-label="分享"';
                buttonSpan5.innerText = '分享';
                buttonSpan5.onmouseover = function () {
                    this.style.color='#4f4f4f'
                };
                buttonSpan5.onmouseout = function () {
                    this.style.color='#8590a6'
                };

                divButton5.className = 'aria-label="收藏"';
                buttonSpan7.innerText = '收藏';
                buttonSpan7.onmouseover = function () {
                    this.style.color='#4f4f4f'
                };
                buttonSpan7.onmouseout = function () {
                    this.style.color='#8590a6'
                };

                divButton6.className = 'aria-label="感谢"';
                buttonSpan9.innerText = '感谢';
                buttonSpan9.onmouseover = function () {
                    this.style.color='#4f4f4f'
                };
                buttonSpan9.onmouseout = function () {
                    this.style.color='#8590a6'
                };

                divButton7.className = 'aria-label="收起"';
                buttonSpan10.innerText = '收起';
                divButton7.className = 'span-button';
                divButton7.style.display = 'none';


                div1.appendChild(a);
                div1.appendChild(div2);
                div1.appendChild(div3);
                div2.appendChild(span1);
                div2.appendChild(span_info);
                div2.appendChild(button1);
                button1.appendChild(span2);
                button1.appendChild(span3);
                div3.appendChild(divSpan1);
                divSpan1.appendChild(divButton1);
                divButton1.innerHTML = '<span></span>&nbsp;&nbsp;&nbsp;赞同 1k';
                div3.appendChild(divButton2);
                divButton2.appendChild(buttonSpan1);
                div3.appendChild(divButton3);
                divButton3.appendChild(buttonSpan2);
                divButton3.appendChild(buttonSpan3);
                div3.appendChild(divDiv);
                divDiv.appendChild(divButton4);
                divButton4.appendChild(buttonSpan4);
                divButton4.appendChild(buttonSpan5);
                div3.appendChild(divButton5);
                divButton5.appendChild(buttonSpan6);
                divButton5.appendChild(buttonSpan7);
                div3.appendChild(divButton6);
                divButton6.appendChild(buttonSpan8);
                divButton6.appendChild(buttonSpan9);
                div3.appendChild(divButton7);
                divButton7.appendChild(buttonSpan10);
                divButton7.appendChild(buttonSpan11);


                button1.onclick = function(){
                    let obj = this;
                        var a = obj.parentNode.parentNode.children[2].children[6];
                        var b = obj.parentNode.children[0];
                        b.setAttribute('hidden', 'True');
                        obj.parentNode.children[1].removeAttribute('hidden');
                        a.style.display = 'block';
                        obj.style.display = 'none';
                };
                divButton7.onclick = function () {
                    let obj = this;
                        var a = obj.parentNode.parentNode.children[1].children[0];
                        var b = obj.parentNode.parentNode.children[1].children[1];
                        obj.style.display = 'none';
                        a.removeAttribute('hidden');
                        b.setAttribute('hidden', 'True');
                        obj.parentNode.parentNode.children[1].children[2].style.display = 'inline-block';

                };
            }
        }
    })
}

function show() {
    let ul = document.getElementsByClassName('ul')[0];
    let val = ul.style.display;
    if (!val || val == 'none'){
        ul.style.display = 'block';
    }else {
        ul.style.display = 'none';
    }
}

// function hide() {
//     let con = 0;
//     let ul1 = document.getElementsByClassName('ul')[0].children[0];
//     ul1.addEventListener('click', function (e) {
//         if (e.target.innerText){
//             console.log(123)
//         }else {
//             let ul = document.getElementsByClassName('ul')[0];
//             ul.style.display = 'none';
//         }
//     })
// }
