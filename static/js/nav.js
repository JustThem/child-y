function show() {
    let ul = document.getElementsByClassName('ul')[0];
    let val = ul.style.display;
    if (!val || val == 'none'){
        ul.style.display = 'block';
    }else {
        ul.style.display = 'none';
    }
}