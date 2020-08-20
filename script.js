$(document).ready(function(e) {
        var width = $(document).width()
    ;
    
    function goLeft() { 
        $("animate").animate ({
            left: 0
        }, 5000, function() {
            setTimeout(goRight, 50);
        });
    }

