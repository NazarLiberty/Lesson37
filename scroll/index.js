$(document).ready(function () {
    scrollAnimation()
})

function scrollAnimation() {
    scrollInfo();
    scrollNews();
    scrollGallery();
    let offsetBottom;
    let offsetTop;
    function scrollInfo() {
        let infoTitleTop = $('#info-title').offset().top
        let infoTitleBottom = $('#info-title').offset().top + $('#info-title').height()
        let infoTextTop1 = $('#info-text-1').offset().top
        let infoTextBottom1 = $('#info-text-1').offset().top + $('#info-text-1').height()
        let infoTextTop2 = $('#info-text-2').offset().top
        let infoTextBottom2 = $('#info-text-2').offset().top + $('#info-text-2').height()
        let infoImgTop1 = $('#info-img-1').offset().top;
        let infoImgBottom1 = infoImgTop1 + $('#info-img-1').height();
        let infoImgTop2 = $('#info-img-2').offset().top;
        let infoImgBottom2 = infoImgTop2 + $('#info-img-2').height();
        $(window).on('scroll', function (e) {
            offsetBottom = $(window).scrollTop() + $(window).height();
            offsetTop = $(window).scrollTop();
            if (offsetBottom > infoImgTop1 && offsetTop < infoImgBottom1) $('#info-img-1').removeClass('info-img__img--hide')
            if (offsetBottom > infoImgTop2 && offsetTop < infoImgBottom2) $('#info-img-2').removeClass('info-img__img--hide_2')
            if (offsetBottom > infoTitleTop && offsetTop < infoTitleBottom) $('#info-title').addClass('info-title--show')
            if (offsetBottom > infoTextTop1 && offsetTop < infoTextBottom1) $('#info-text-1').addClass('info-text--show')
            if (offsetBottom > infoTextTop2 && offsetTop < infoTextBottom2) $('#info-text-2').addClass('info-text--show')
        })
    }
    function scrollNews() {
        let newsTop = $('#news').offset().top;
        let newsBottom = newsTop + $('#news').height();
        $(window).on('scroll', function (e) {
            offsetBottom = $(window).scrollTop() + $(window).height();
            offsetTop = $(window).scrollTop();
            if (offsetBottom > newsTop && offsetTop < newsBottom) $('#news').addClass('news--show')

        })
    }
    function scrollGallery() {
        let galleryBlock = $('#gallery').offset().top
        let galleryBlockBottom = galleryBlock + $('#gallery').height() - 250;
        $(window).on('scroll', function (e) {
            offsetBottom = $(window).scrollTop() + $(window).height();
            offsetTop = $(window).scrollTop();
            if (offsetBottom > galleryBlock) $('#gallery').addClass('gallery--show')
            if (offsetBottom > galleryBlockBottom) {
                $('.galleryImg1').addClass('galleryImg1--show')
                $('.galleryImg2').addClass('galleryImg2--show')
                $('.galleryImg3').addClass('galleryImg3--show')
                $('.galleryImg4').addClass('galleryImg4--show')
                $('.galleryImg5').addClass('galleryImg5--show')
            }
        })
    }

}

$('#projectsMenu').on('click', () => {
    $('#menu path').attr('fill', 'transparent')
    $('#projectsMenu path').attr('fill', 'white')
    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    })
})
$('#drop').on('click', (e) => {
    window.scrollTo({
        top: (e.pageY - 400) + $('#gallery')[0].getBoundingClientRect().top,
        behavior: 'smooth'
    })
})
$('#aboutUsMenu').on('click', () => {
    $('#menu path').attr('fill', 'transparent')
    $('#aboutUsMenu path').attr('fill', 'white')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
$('#newsMenu').on('click', (e) => {
    $('#menu path').attr('fill', 'transparent')
    $('#newsMenu path').attr('fill', 'white')
    window.scrollTo({
        top: (e.pageY - 100) + $('#news')[0].getBoundingClientRect().top,
        behavior: 'smooth'
    })
})
$('#contactMenu').on('click', (e) => {
    $('#menu path').attr('fill', 'transparent')
    $('#contactMenu path').attr('fill', 'white')
    window.scrollTo({
        top: (e.pageY - 100) + $('#footer')[0].getBoundingClientRect().top,
        behavior: 'smooth'
    })
})

$(document).on('click', function (e) {
    console.log(e)
})


$(document).ready(
    $('.h-slider').slick({
        vertical: true,
        verticalScrolling: true,
        verticalSwiping: true,
        arrows: false,
        dots: true,
        appendDots: $('#dots'),
        dotsClass: 'my-dots',
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    verticalScrolling: false,
                    verticalSwiping: false,
                    slidesToShow: 1,
                    appendDots: $('#dots-mobile'),
                }
            }
        ]
    })

)
$(document).ready(
    $('.n-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        slidesToShow: 3,
        nextArrow: ' <img src="./img/arrRight.png" alt="" class="rightArr">',
        prevArrow: ' <img src="./img/arrLeft.png" alt="" class="leftArr">',
        dotsClass: 'news-dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    })
)
$('#burger').on('click', function () {
    $('#menu').addClass('h-menu__text--active');
})
$('#menu').on('click', function () {
    $('#menu').removeClass('h-menu__text--active');
})

function initMap() {
    var NY = { lat: 40.687777, lng: -73.904736 };
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 14.3,
        center: NY,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]


    });
    var marker = new google.maps.Marker({
        position: NY,
        map: map,
        icon: 'img/marker.svg',
        animation: google.maps.Animation.BOUNCE,
    });
}
