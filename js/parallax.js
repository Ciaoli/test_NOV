window.addEventListener('load', function () {

    var parallaxImg = document.querySelectorAll(".fixed-bac-img img")
    var backgroundImg = document.querySelectorAll(".full-fixed")
    var screenWidth = window.innerWidth
    var screenHeight = document.documentElement.clientHeight

    // Mobile
    if (screenWidth <= 768) {

        for (var i = 0; i < parallaxImg.length; i++) {

            if (parallaxImg[i].getAttribute("data-mobSrc") != undefined) {
                parallaxImg[i].src = parallaxImg[i].getAttribute("data-mobSrc")

            }

        }

        // Web 
    } else {

        for (var i = 0; i < parallaxImg.length; i++) {

            if (parallaxImg[i].getAttribute("data-webSrc") != undefined) {
                parallaxImg[i].src = parallaxImg[i].getAttribute("data-webSrc")

            }

        }

    }

    // IE
    if (navigator.userAgent.match(/Trident\/7\./)) {

        document.body.addEventListener("mousewheel", function (event) {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);

        })
        // Mobile
        if (screenWidth <= 768) {

            for (var i = 0; i < backgroundImg.length; i++) {

                var changeMobImg = document.querySelectorAll(".fixed-bac-img img")[i].getAttribute("data-mobSrc")
                backgroundImg[i].style.backgroundImage = "url(" + changeMobImg + ")"

            }
            // Web
        } else {

            for (var i = 0; i < backgroundImg.length; i++) {

                var changeWebImg = document.querySelectorAll(".fixed-bac-img img")[i].getAttribute("data-webSrc")
                backgroundImg[i].style.backgroundImage = "url(" + changeWebImg + ")"

            }

        }

    }


    // Safari Mobile
    if (navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) {

        for (var i = 0; i < parallaxImg.length; i++) {

            parallaxImg[i].style.height = screenHeight + 120 + "px"

        }


    }

    // Chrome
    if (navigator.userAgent.match("Chrome")) {

        for (var i = 0; i < parallaxImg.length; i++) {
            parallaxImg[i].style.height = "100vh"

        }
    }

})




var parallax = function () {

    var parallaxBlock = document.getElementsByClassName("full-fixed")
    var parallaxImg = document.querySelectorAll(".fixed-bac-img img")
    var footer = document.querySelector("footer")

    if (navigator.userAgent.match(/Trident\/7\./)) {

        for (var i = 0; i < parallaxImg.length; i++) {

            parallaxImg[i].src = "";

        }

    } else {

        for (var i = 0; i < parallaxBlock.length; i++) {

            var scrollShowImg = (parallaxBlock[i].offsetTop) - (parallaxBlock[i].clientHeight)
            var footerHideImg = ((footer.offsetTop) - 4 * (footer.clientHeight))

            if (pageYOffset > footerHideImg) {

                parallaxImg[i].style.opacity = "0"


            } else {

                if (pageYOffset > scrollShowImg) {

                    parallaxImg[i].style.opacity = "1"

                } else {

                    parallaxImg[i].style.opacity = "0"
                }

            }

        }
    }

}

window.addEventListener('scroll', parallax)




window.addEventListener('resize', function () {

    var parallaxImg = document.querySelectorAll(".fixed-bac-img img")
    var backgroundImg = document.querySelectorAll(".full-fixed")

    var screenWidth = window.innerWidth

    var screenHeight = document.documentElement.clientHeight

    // Safari Mobile
    if (navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) {

        for (var i = 0; i < parallaxImg.length; i++) {

            parallaxImg[i].style.height = screenHeight + 120 + "px"

        }


    }


    // IE
    if (navigator.userAgent.match(/Trident\/7\./)) {


        if (screenWidth <= 768) {

            for (var i = 0; i < backgroundImg.length; i++) {
                var changeMobImg = document.querySelectorAll(".fixed-bac-img img")[i].getAttribute("data-mobSrc")
                backgroundImg[i].style.backgroundImage = "url(" + changeMobImg + ")"

            }

        } else {

            for (var i = 0; i < backgroundImg.length; i++) {
                var changeWebImg = document.querySelectorAll(".fixed-bac-img img")[i].getAttribute("data-webSrc")
                backgroundImg[i].style.backgroundImage = "url(" + changeWebImg + ")"

            }
        }

    } else {

        // 斷點換圖
        // Mobile
        if (screenWidth <= 768) {


            for (var i = 0; i < parallaxImg.length; i++) {

                if (parallaxImg[i].getAttribute("data-mobSrc") != undefined) {

                    parallaxImg[i].src = parallaxImg[i].getAttribute("data-mobSrc")

                }

            }

            // Web    
        } else {

            for (var i = 0; i < parallaxImg.length; i++) {

                if (parallaxImg[i].getAttribute("data-webSrc") != undefined) {

                    parallaxImg[i].src = parallaxImg[i].getAttribute("data-webSrc")

                }

            }


        }
    }


    // Chrome
    if (navigator.userAgent.match("Chrome")) {

        for (var i = 0; i < parallaxImg.length; i++) {
            parallaxImg[i].style.height = "100vh"

        }

    }

})