// on click cause the .line to rotate in an "X" shape
;(function($) {
    $(function() {
        $('nav ul li > a:not(:only-child)').click(function(e) {
            $(this)
                .siblings('.nav-dropdown')
                .slideToggle()
            $('.nav-dropdown')
                .not($(this).siblings())
                .hide()
            e.stopPropagation()
        })
        $('html').click(function() {
            $('.nav-dropdown').hide()
        })
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active')
        })
    })
})(jQuery)

// animations
// on scroll down add the fade in effect from id fadeIn-visible
window.addEventListener('scroll', () => {
    const fadeInVisible = document.getElementById('fadeInAbout')
    const fadeInVisiblePosition = fadeInVisible.getBoundingClientRect().top
    const screenPosition = window.innerHeight
    if (fadeInVisiblePosition < screenPosition) {
        fadeInVisible.classList.add('fadeInUp')
        fadeInVisible.classList.add('delay-1')
    }
})

window.addEventListener('scroll', () => {
    const fadeInVisible = document.getElementById('fadeInPrayer1')
    const fadeInVisiblePosition = fadeInVisible.getBoundingClientRect().top
    const screenPosition = window.innerHeight
    if (fadeInVisiblePosition < screenPosition) {
        fadeInVisible.classList.add('fadeInLeft')
    }
})
window.addEventListener('scroll', () => {
    const fadeInVisible = document.getElementById('fadeInPrayer2')
    const fadeInVisiblePosition = fadeInVisible.getBoundingClientRect().top
    const screenPosition = window.innerHeight
    if (fadeInVisiblePosition < screenPosition) {
        fadeInVisible.classList.add('fadeInLeft')
        fadeInVisible.classList.add('delay-1')
    }
})
window.addEventListener('scroll', () => {
    const fadeInVisible = document.getElementById('fadeInPrayer3')
    const fadeInVisiblePosition = fadeInVisible.getBoundingClientRect().top
    const screenPosition = window.innerHeight
    if (fadeInVisiblePosition < screenPosition) {
        fadeInVisible.classList.add('fadeInLeft')
        fadeInVisible.classList.add('delay-2')
    }
})
window.addEventListener('scroll', () => {
    const fadeInVisible = document.getElementById('fadeInPrayer4')
    const fadeInVisiblePosition = fadeInVisible.getBoundingClientRect().top
    const screenPosition = window.innerHeight
    if (fadeInVisiblePosition < screenPosition) {
        fadeInVisible.classList.add('fadeInLeft')
        fadeInVisible.classList.add('delay-3')
    }
})