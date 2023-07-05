document.addEventListener('DOMContentLoaded', function() {
    var sliderCards = document.querySelectorAll('.slider-card');
    
        sliderCards.forEach(function(card, index) {
        card.addEventListener('click', function() {
            changeLine2Position(index);
        });
        });
    });
    
    function changeLine2Position(cardIndex) {
        var line2 = document.querySelector('.line2');
        var baseBottom = 480; // Initial bottom value in pixels
        var stepSize = 130; // Amount to increase or decrease bottom value in pixels
    
        var newPosition = baseBottom - cardIndex * stepSize;
        // console.log(cardIndex);
        line2.style.bottom = newPosition + 'px';
    }