$(document).ready(function() {

    let imgWidth = $('#slider ul li img').width();
    var active_li = $('div#slider ul li.active-li');
    let ul = $('div#slider ul');
    var index = 0;

    let images = [
        'images/flowers/f1.jpg',
        'images/flowers/f2.jpg',
        'images/flowers/f3.jpg'
    ]
    let titles = ['Flower1', 'Flower2', 'Flower3'];


    $('img#arrow_right').on('click', function(event) {

        if (index < images.length - 1) {
            index += 1;
        } else index = 0;


        $('li:not(li.active-li)').remove();
        ul.css('margin-left', '0px');
        // if there's any item before active_li(from previous step-while it's not the first item), after removing it, active_li will move 250px(the sitze of image) to left, so we need to first compensate this amount.
        var my_li = document.createElement('li');
        my_li.innerHTML = `<img class="my-img" src=${images[index]}><span>${titles[index]}</span>`;
        ul.append(my_li);
        ul.animate({ 'margin-left': `-${imgWidth}` }, 'slow');
        active_li.removeClass('active-li');
        $(my_li).addClass('active-li');
        active_li = $(my_li);

    });

    $('img#arrow_left').on('click', function(event) {

        if (index > 0) {
            index -= 1;
        } else index = images.length - 1;

        $('li:not(.active-li)').remove();
        var my_li = document.createElement('li');
        my_li.innerHTML = `<img class="my-img" src=${images[index]}><span>${titles[index]}</span>`;
        ul.prepend(my_li);
        // after adding a li before active_li, it will move 250px(the size of the image) to the right(because of the order of elements in the <ul> tag), so we need to put it in its initial position in order to get ready for sliding.
        ul.css('margin-left', `-${imgWidth}px`);
        ul.animate({ 'margin-left': '0px' }, 'slow');
        active_li.removeClass('active-li');
        $(my_li).addClass('active-li');
        active_li = $(my_li);

    });



})