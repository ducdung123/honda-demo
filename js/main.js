$(".vehicle-list").mCustomScrollbar({
    theme: "dark"
})
//lướt đến nd trong vehicle
let move = (id) => {
    $(".vehicle-list").mCustomScrollbar("scrollTo", id, {
        scrollEasing: 'easeOut'
    })
}
let vehicle_id = "vehicle-car"
$('.header_vehicle__content > nav > a').click(() => {
    move(`#${event.target.getAttribute('data-id')}`);
    document.getElementById(`${vehicle_id}`).classList.remove('active')
    vehicle_id = event.target.getAttribute('id');
    // console.log(vehicle_id)    
    event.target.classList.add('active')
})

//arrow-nav-header
let arrowNavHeader = (array) => {
    // for (let item of array){
    //     console.log(item)
    // }
    if (array[0].id == '1') {
        array[0].classList.remove('animate__fadeOutDown')
        array[0].classList.add('animate__fadeInUp')
        setTimeout(() => {
            array[0].classList.remove('d-none')
        }, 300)

        array[0].removeAttribute('id')

        array[1].classList.remove('animate__fadeInUp')
        array[1].classList.add('animate__fadeOutDown')
        setTimeout(() => {
            array[1].classList.add('d-none')
        }, 300)

        return;
    }
    array[0].classList.remove('animate__fadeInUp')
    array[0].classList.add('animate__fadeOutDown')
    setTimeout(() => {
        array[0].classList.add('d-none')
    }, 300)
    array[0].setAttribute('id', '1')

    array[1].classList.remove('animate__fadeOutDown')
    array[1].classList.add('animate__fadeInUp')
    setTimeout(() => {

        array[1].classList.remove('d-none')
    }, 300)


}
//đóng mở nội dung nav...
let nav_header_id = "";
$('#nav-header a').click(() => {
    if (window.innerWidth < 768) {
        //console.log(event.target.id)
        if (event.target.id === "nav-header__8") {
            if (event.target.getAttribute('data-id') == null) {
                event.target.classList.add('nav-header__active');
                document.getElementById("header_vehicle").classList.remove('hide')
                $(".header_vehicle__content > nav").removeClass('animate__fadeOutUp')
                $(".vehicle__content").removeClass('animate__fadeOutDown')
                $(".header_vehicle__content > nav").addClass('animate__fadeInDown')
                $(".vehicle__content").addClass('animate__fadeInUp')
                event.target.setAttribute('data-id', '1')
            }
            else {
                event.target.classList.remove('nav-header__active');
                $(".header_vehicle__content > nav").removeClass('animate__fadeInDown')
                $(".vehicle__content").removeClass('animate__fadeInUp')
                $(".header_vehicle__content > nav").addClass('animate__fadeOutUp')
                $(".vehicle__content").addClass('animate__fadeOutDown')
                setTimeout(() => {
                    document.getElementById("header_vehicle").classList.add('hide')
                }, 300)
                event.target.removeAttribute('data-id');
            }


        }
        return
    }
    if (event.target.id == "nav-header__3" || event.target.id == "nav-header__6") {
        console.log(event.target.id)
        return
    }
    if (nav_header_id === "") {
        //event.target.offsetParent.classList.add('nav-header__active');
        event.target.classList.add('nav-header__active');
        // event.target.classList.remove('nav-header__overlay')
        // console.log(event.target.offsetParent);
        nav_header_id = event.target.id;
        if (nav_header_id === 'nav-header__7') {
            $("#header_search").css({
                'transform': 'translateX(0)'
            })
            return
        }
        arrowNavHeader(event.target.children);
        navAddClass(nav_header_id)

    }
    else if (nav_header_id === event.target.id) {
        event.target.classList.remove('nav-header__active');
        console.log(event.target);
        if (nav_header_id === 'nav-header__7') {
            $("#header_search").css({
                'transform': 'translateX(100%)'
            })
            nav_header_id = "";
            return
        }
        arrowNavHeader(event.target.children)
        navRemoveClass(nav_header_id)


        nav_header_id = "";
    }
    else {
        //$(`#${nav_header_id}`).classList.remove('123');
        document.getElementById(`${nav_header_id}`).classList.remove('nav-header__active')
        if (nav_header_id === 'nav-header__7') {
            arrowNavHeader(event.target.children);
            event.target.classList.add('nav-header__active')
            navRemoveClass(nav_header_id)


            nav_header_id = event.target.id;
            navAddClass(nav_header_id)
            return
        }
        if (event.target.id === 'nav-header__7') {
            arrowNavHeader(document.getElementById(`${nav_header_id}`).children);
            event.target.classList.add('nav-header__active')
            navRemoveClass(nav_header_id)
            nav_header_id = event.target.id;
            navAddClass(nav_header_id)
            return
        }
        arrowNavHeader(document.getElementById(`${nav_header_id}`).children);
        arrowNavHeader(event.target.children);
        event.target.classList.add('nav-header__active')
        navRemoveClass(nav_header_id)


        nav_header_id = event.target.id;
        navAddClass(nav_header_id)

        //console.log(event.target);
    }
})




//vehilce-close
$('.vehicle__content__close').click(() => {
    $(".header_vehicle__content > nav").removeClass('animate__fadeInDown')
    $(".vehicle__content").removeClass('animate__fadeInUp')
    $(".header_vehicle__content > nav").addClass('animate__fadeOutUp')
    $(".vehicle__content").addClass('animate__fadeOutDown')
    setTimeout(() => {
        document.getElementById("header_vehicle").classList.add('hide')
    }, 300)
    nav_header_id = "";
    //$('#nav-header__1').classList.remove('nav-header__active')
    document.getElementById('nav-header__1').classList.remove('nav-header__active');
    document.getElementById('nav-header__8').classList.remove('nav-header__active');
    document.getElementById('nav-header__8').removeAttribute('data-id');
    arrowNavHeader(document.getElementById('nav-header__1').children);
    //console.log(document.getElementById('nav-header__1').children);
})

let navRemoveClass = (nav_header_id) => {
    if (nav_header_id === 'nav-header__1') {
        $(".header_vehicle__content > nav").removeClass('animate__fadeInDown')
        $(".vehicle__content").removeClass('animate__fadeInUp')
        $(".header_vehicle__content > nav").addClass('animate__fadeOutUp')
        $(".vehicle__content").addClass('animate__fadeOutDown')
        setTimeout(() => {
            document.getElementById("header_vehicle").classList.add('hide')
        }, 300)
    }
    if (nav_header_id === 'nav-header__2') {

        $("#header_shopping").removeClass('animate__fadeInDown')
        //$(".vehicle__content").removeClass('animate__fadeOutDown')
        $("#header_shopping").addClass('animate__fadeOutUp')
        //$(".vehicle__content").addClass('animate__fadeInUp')
        setTimeout(() => {
            document.getElementById("header_shopping").classList.add('hide')
        }, 300)
    }
    if (nav_header_id === 'nav-header__4') {
        $("#header__own").css({
            'transform': 'translateY(-100%)'
        })
    }
    if (nav_header_id === 'nav-header__5') {
        $("#header_discover").css({
            'transform': 'translateY(-100%)'
        })
    }
    if (nav_header_id === 'nav-header__7') {
        $("#header_search").css({
            'transform': 'translateX(100%)'
        })
        // nav_header_id = "";
        return
    }
}

let navAddClass = (nav_header_id) => {
    if (nav_header_id === 'nav-header__1') {
        document.getElementById("header_vehicle").classList.remove('hide')
        $(".header_vehicle__content > nav").removeClass('animate__fadeOutUp')
        $(".vehicle__content").removeClass('animate__fadeOutDown')
        $(".header_vehicle__content > nav").addClass('animate__fadeInDown')
        $(".vehicle__content").addClass('animate__fadeInUp')
    }
    if (nav_header_id === 'nav-header__2') {
        document.getElementById("header_shopping").classList.remove('hide')
        $("#header_shopping").removeClass('animate__fadeOutUp')
        //$(".vehicle__content").removeClass('animate__fadeOutDown')
        $("#header_shopping").addClass('animate__fadeInDown')
        //$(".vehicle__content").addClass('animate__fadeInUp')
    }
    if (nav_header_id === 'nav-header__4') {
        $("#header__own").css({
            'transform': 'translateY(0)'
        })
    }
    if (nav_header_id === 'nav-header__5') {
        $("#header_discover").css({
            'transform': 'translateY(0)'
        })
    }
    if (nav_header_id === 'nav-header__7') {
        $("#header_search").css({
            'transform': 'translateX(0)'
        })
        return
    }
}
$('.button_toggle').click(() => {
    if (event.target.getAttribute('data-id') == null) {
        $('.nav-header__right').css({
            'transform': 'translateX(0)'
        })
        event.target.setAttribute('data-id','1');
    }
    else{
        $('.nav-header__right').css({
            'transform': 'translateX(100%)'
        })
        event.target.removeAttribute('data-id');
    }
})

let scrollTop = ()=>{
    if(document.documentElement.scrollTop > 450 || document.body.scrollTop > 450){
        document.querySelector('.back-to-top').style.display = 'block';
        
    }
    else{
        document.querySelector('.back-to-top').style.display = 'none';
    }
}
window.onscroll = scrollTop;
document.querySelector('.back-to-top').onclick = ()=>{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
$('.list__item__title--md').click(()=>{
    event.target.parentElement.querySelector('ol').classList.toggle('ol-height-md')
})