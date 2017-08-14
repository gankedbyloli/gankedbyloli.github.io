$(document).ready(function () {

    try {
    	var oneDistance    = $("#section1").offset().top - 100;
    	var twoDistance    = $("#section2").offset().top - 100;
    	var threeDistance  = $("#section3").offset().top - 100;
    	var fourDistance   = $("#section4").offset().top - 100;
    	var fiveDistance   = $("#section5").offset().top - 100;
    }

    catch(err) {
        console.log("fewer sections than expected")
    }

    $(window).scroll(function () {
        $(".highlight").each(function () {
            if($(this).isOnScreenHighlight()) {
                $(this).css({"background-position": "-100% 0"});
            } else {
                $(this).css({"background-position": "0 0"});
            }
        });

        if ($(this).scrollTop() > 0) {
            $(".portfolio-nav-container").addClass("sticky");
        } else {
            $(".portfolio-nav-container").removeClass("sticky");
        }

        if ($(this).scrollTop() > oneDistance) {
            $(".dot-nav").addClass("is-visible");
        } else {
            $(".dot-nav").removeClass("is-visible");
        }

        try {
        	if ($(this).scrollTop() > oneDistance) {
        		$('#section1Nav').addClass("is-active");
        		$('#section2Nav').removeClass("is-active");
                $('#section3Nav').removeClass("is-active");
                $('#section4Nav').removeClass("is-active");
                $('#section5Nav').removeClass("is-active");
        	}
        	if ($(this).scrollTop() > twoDistance) {
                $('#section1Nav').removeClass("is-active");
        		$('#section2Nav').addClass("is-active");
                $('#section3Nav').removeClass("is-active");
                $('#section4Nav').removeClass("is-active");
                $('#section5Nav').removeClass("is-active");
        	}
        	if ($(this).scrollTop() > threeDistance) {
                $('#section1Nav').removeClass("is-active");
        		$('#section2Nav').removeClass("is-active");
                $('#section3Nav').addClass("is-active");
                $('#section4Nav').removeClass("is-active");
                $('#section5Nav').removeClass("is-active");
        	}
        	if ($(this).scrollTop() > fourDistance) {
                $('#section1Nav').removeClass("is-active");
        		$('#section2Nav').removeClass("is-active");
                $('#section3Nav').removeClass("is-active");
                $('#section4Nav').addClass("is-active");
                $('#section5Nav').removeClass("is-active");
        	}
        	if ($(this).scrollTop() > fiveDistance) {
                $('#section1Nav').removeClass("is-active");
        		$('#section2Nav').removeClass("is-active");
                $('#section3Nav').removeClass("is-active");
                $('#section4Nav').removeClass("is-active");
                $('#section5Nav').addClass("is-active");
        	}
        }

        catch (err) {
            console.log("fewer sections than expected")
        }
    })

    $.fn.isOnScreenHighlight = function () {
        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };

        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));
    };

});
