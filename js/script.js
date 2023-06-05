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
menu();


function faq() {

    const quest = document.querySelectorAll(".quest");
    const aswer = document.querySelectorAll(".aswer");

    for (let i = 0; i < quest.length; i++) {
       
        quest[i].addEventListener("click", () => {

            if( quest[i].classList.contains("close") ) {
                quest[i].classList.toggle("close");
                aswer[i].classList.toggle("open");

            }else {
                quest[i].classList.add("close");
                aswer[i].classList.add("open");
              
            }


        });

    }


}
faq();

const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
    const area_window = window.innerHeight * 0.21 * 3.8;

    animations.forEach((element) => {
        let posicaoAtual = element.getBoundingClientRect().top;

        if (area_window > posicaoAtual) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

if (animations.length) {
    window.addEventListener("scroll", animation_scroll);
}



var selection = document.querySelectorAll('.img-opt-title');

selection.forEach((element) => {

    element.addEventListener('click', () => {


            if(element.classList.contains('select') ) {
                element.classList.toggle('select');  
            }
            else {
                element.classList.add('select');  
            }
           
        

    });

}); 