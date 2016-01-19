$(document).ready(function() {
    $('a#go').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#order-pop-up')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#order-pop-up-close, #overlay').click( function(){
        $('order-pop-up')
            .animate({opacity: 0, top: '45%'}, 200,
            function(){ // пoсле aнимaции
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });
});