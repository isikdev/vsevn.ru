let selectBtn = document.querySelector(".select__btn");
selectBtn.addEventListener('click', function() {
    var el = document.querySelector(".ad__tab-jobs");

    if (el.style.block === 'auto') {
        el.style.block = 'none';
    } else {
        el.style.display = 'block';
        selectBtn.style.background = '#fede31';

    }
}, false);