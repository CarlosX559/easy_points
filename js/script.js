function menu(){
    $(".menu_opener").click(
        function(){
            
            $('.menu_mobile_total').css( 'display', 'flex' ).css( 'top', '100px' ).css( 'animation', 'move 1s ease' );
            setTimeout( ()=> {
                $('.menu_opener').css( 'display', 'none' );
                $('.menu_close').css( 'display', 'flex' );
            }, 600 );
        }  
    );

    $(".menu_close").click(
        function() {
            $('.menu_mobile_total').css( 'top', '-100%' ).css('animation', 'move 1s ease' );
            setTimeout( () => {
                if($('.menu_mobile_total').css('top', '-100%')) {
                    $('.menu_mobile_total').css('display', 'none');
                }
            }, 600);

            setTimeout( ()=> {
                $('.menu_opener').css( 'display', 'flex' );
                $('.menu_close').css( 'display', 'none' );
            }, 100 );
            
        }
        
    );
}
window.onload( menu() );