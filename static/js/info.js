// window.onload = function(){
//     var input = document.getElementById('fileImg')
//     var div = document.createElement('div');
//     input.onchange = function(){
//         readFile(this)
//     }
//     var readFile = function(obj){
//         var fileList = obj.files;
//         for (let i = 0; i < fileList.length; i++) {
//             var reader = new FileReader();
//             reader.readAsDataURL(fileList[i]);
//             reader.onload = function(e){
//                 input.style.display = 'none'
//                 div.innerHTML = '<img id="image" src="'+ this.result + '"/>';
//                 document.getElementById('img-box').appendChild(div)
//                 var cropper = new Cropper(image, {
//                     aspectRatio: 16 / 9,
//                     viewMode:1,
//                     Boolean: false,
//                     // dragMode:'move',
//                     crop: function (e) {
//                         console.log(e)
//                     }
//                 });
//             }
            
//         }
//     }
// }
function change(e){
    let fileList = e.target.files
    for (let i = 0; i < fileList.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(fileList[i])
        reader.onload = function(){
            document.getElementsByClassName('image')[0].style.backgroundImage = 'url("' + this.result + '")'
            document.getElementsByClassName('img')[0].src = this.result
        }
    }
}
                                                                                                     
function iClick(e){
    console.log(123)
    var h2 = document.getElementsByTagName('h2')[0]
    var name = document.getElementsByClassName('nickname')[0]
    var sex = document.getElementsByClassName('sex')[0]
    var span = document.getElementsByClassName('span1')
    var input = document.getElementsByClassName('input')
    if (e.target.innerText == '编辑资料'){
        e.target.innerText = '保存'
        h2.style.display = 'none'
        name.removeAttribute('hidden')
        span[0].style.display = 'none'
        sex.style.display = 'inline-block'
        span[1].style.display = 'none'
        input[0].removeAttribute('hidden')
        span[2].style.display = 'none'
        input[1].removeAttribute('hidden')
        span[3].style.display = 'none'
        input[2].removeAttribute('hidden')
        span[4].style.display = 'none'
        input[3].removeAttribute('hidden')
        span[5].style.display = 'none'
        input[4].removeAttribute('hidden')
    }else{
        e.target.innerText = '编辑资料'
        h2.style.display = 'inline-block';
        name.setAttribute('hidden', 'true')
        span[0].style.display = 'inline-block'
        sex.style.display = 'none'
        span[1].style.display = 'inline-block'
        input[0].setAttribute('hidden', 'true')
        span[2].style.display = 'inline-block'
        input[1].setAttribute('hidden', 'true')
        span[3].style.display = 'inline-block'
        input[2].setAttribute('hidden', 'true')
        span[4].style.display = 'inline-block'
        input[3].setAttribute('hidden', 'true')
        span[5].style.display = 'inline-block'
        input[4].setAttribute('hidden', 'true')
    }
}



// function hover(e){
//     // let span = document.createElement('span')
//     // span.innerText = '修改'
//     // span.style.marginLeft = '20px';
//     // span.style.fontSize = '15px'
//     // span.style.color = '#175199'
//     // span.style.cursor = 'pointer'
//     // e.target.appendChild(span)
//     e.target.children[1].style.display = 'inline';
// } 
// function rHover(e){
//     // e.target.children[0].remove()
//     e.target.children[1].style.display = 'none';
    
// }