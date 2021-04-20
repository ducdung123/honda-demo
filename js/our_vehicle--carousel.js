$('.our-vehicle__nav__item').click(() => {
    $('.our-vehicle__nav__item').removeClass('active')
    //console.log(event.target.getAttribute('data-id'))
    let a = Number(event.target.getAttribute('data-id'));
    $(event.target).addClass('active')
    console.log(window.innerWidth)
    $('.owl-stage').css({
        'transform': `translate3d(-${a * (window.innerWidth - 17)}px, 0px, 0px)`,
        'transition': 'all .6s ease 0s'
    })
    $('.owl-item').removeClass('active')
    
    document.querySelectorAll('.our-vehicle .owl-item')[`${a}`].setAttribute('class', 'owl-item active')

})

let ourVehicleDrag = () => {
    let array = document.querySelectorAll('.our-vehicle .owl-item')
    console.log(array)
    let a = 0;
    setTimeout(() => {
        for (let item in array) {
            if (array[item].getAttribute('class') === 'owl-item active') {
                console.log(item)
                a = item;
                break;
            }
        }
        $('.our-vehicle__nav__item').removeClass('active')
        document.querySelectorAll('.our-vehicle__nav__item')[`${a}`].setAttribute('class', 'our-vehicle__nav__item active')
    }, 500)


}

let ourVehicleXsRotate = () => {
    if (document.querySelector(".our-vehicle__nav-xs__title__icon").getAttribute('data-id') == null) {
        document.querySelector(".our-vehicle__nav-xs__title__icon").setAttribute('data-id', '1');
        $('.our-vehicle__nav-xs__title__icon').css({
            'transform': 'rotate(180deg)'
        })
        $('.our-vehicle__nav-xs__content').css({
            'transform': 'translateY(0)'
        })
        return;
    }
    document.querySelector(".our-vehicle__nav-xs__title__icon").removeAttribute('data-id')
    $('.our-vehicle__nav-xs__title__icon').css({
        'transform': 'rotate(0deg)'
    })
    $('.our-vehicle__nav-xs__content').css({
        'transform': 'translateY(-100%)'
    })
}
$('.our-vehicle__nav-xs__title').click(() => {
    ourVehicleXsRotate()
})
$('.our-vehicle__nav-xs__content li').click(()=>{
    $('.our-vehicle__nav-xs__title__content').html(event.target.innerText)
    ourVehicleXsRotate()
    let a = Number(event.target.getAttribute('data-id'));
    $('.owl-stage').css({
        'transform': `translate3d(-${a * (window.innerWidth - 17)}px, 0px, 0px)`,
        'transition': 'all .6s ease 0s'
    })
    $('.owl-item').removeClass('active')
    document.querySelectorAll('.our-vehicle .owl-item')[`${a}`].setAttribute('class', 'owl-item active')
})