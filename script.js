$(document).ready(function () {
    var slideCount = $('.slide').length;
    var currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }

        var translateValue = -index * 100 + '%';
        $('.slider').css('transform', 'translateX(' + translateValue + ')');
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, 2000); // Change slide every 2 seconds

    // Optional: Pause on hover
    $('.slider-container').hover(function () {
        clearInterval(slideInterval);
    }, function () {
        setInterval(nextSlide, 5000);
    });
});
