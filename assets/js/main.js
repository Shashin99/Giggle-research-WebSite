$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    ///Send Email
    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault(); 

        var subject = document.getElementById('subject').value;
        var mailtoLink = "mailto:skindiseaseprediction@gmail.com?subject=" + encodeURIComponent(subject);
    
        window.open(mailtoLink, '_blank');
      });
      


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    });



    //===== Section Menu Active

    var scrollLink = $('.scroller');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
                $(this).parent().parent().parent().addClass('active');
                $(this).parent().parent().parent().siblings().removeClass('active');
                $(this).parent().siblings().children().children().removeClass('active');
                
               
            }
        });
    });


        //===== Section Menu Active

        // var scrollLink2 = $('.scroller2');
        // // Active link switching
        // $(window).scroll(function () {
        //     var scrollbarLocation2 = $(this).scrollTop();
    
        //     scrollLink2.each(function () {
    
        //         var sectionOffset2 = $(this.hash).offset().top - 73;
    
        //         if (sectionOffset2 <= scrollbarLocation2) {
        //             $(this).parent().parent().parent().addClass('active');
                    
        //         }
        //     });
        // });

    


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav .nav-hide").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    $(".dropdown .nav-hide").on('click', function () {
        $(".dropdown-menu").removeClass("show");
    });
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav .nav-hide").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });

    


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== Svg

    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });



    // ///Show more/less button Document
    // const gridItems = document.querySelectorAll('.doc-container');
    // const toggleButton = document.getElementById('toggle-button');
    // const VISIBLE_ITEM_COUNT = 4;
    
    // let isShowingAll = false;
    
    // function toggleItems() {
    //   isShowingAll = !isShowingAll;
    
    //   if (isShowingAll) {
    //     gridItems.forEach(item => item.classList.remove('hidden'));
    //     toggleButton.textContent = 'Show Less (04)';
    //   } else {
    //     for (let i = VISIBLE_ITEM_COUNT; i < gridItems.length; i++) {
    //       gridItems[i].classList.add('hidden');
    //     }
    //     toggleButton.textContent = 'Show All (10)';
    //   }
    // }
    
    // toggleButton.addEventListener('click', toggleItems);
    
    // // Initially hide items beyond the first 4
    // for (let i = VISIBLE_ITEM_COUNT; i < gridItems.length; i++) {
    //   gridItems[i].classList.add('hidden');
    // }


    //     ///Show more/less button Presentation
    //     const gridItems_presentation = document.querySelectorAll('.doc-container-presentation');
    //     const toggleButton_presentation = document.getElementById('toggle-button-presentation');
    //     const VISIBLE_ITEM_COUNT_presentation = 4;
        
    //     let isShowingAll_presentation = false;
        
    //     function toggleItems_presentation() {
    //       isShowingAll_presentation = !isShowingAll_presentation;
        
    //       if (isShowingAll_presentation) {
    //         gridItems_presentation.forEach(item => item.classList.remove('hidden'));
    //         toggleButton_presentation.textContent = 'Show Less (04)';
    //       } else {
    //         for (let i = VISIBLE_ITEM_COUNT_presentation; i < gridItems_presentation.length; i++) {
    //           gridItems_presentation[i].classList.add('hidden');
    //         }
    //         toggleButton_presentation.textContent = 'Show All (10)';
    //       }
    //     }
        
    //     toggleButton_presentation.addEventListener('click', toggleItems_presentation);
        
    //     // Initially hide items beyond the first 4
    //     for (let i = VISIBLE_ITEM_COUNT_presentation; i < gridItems_presentation.length; i++) {
    //       gridItems_presentation[i].classList.add('hidden');
    //     }


    //=====  WOW active

    new WOW().init();





});
