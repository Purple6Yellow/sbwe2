$(document).ready( function() {

    $('#buttonBK').on('click', function URL(){
        location.href = "/CC/verhuurBK.html"
        });
    
    $('#buttonGalerie').on('click', function URL(){
        location.href = "/historie.html"
        });
    
    const hoverInOptions = { 
        'width': '500px',
        'font-size': '25px',
        'height': '500px',
        'margin-right': '+=10px',
        'margin-top': '+=10px',
    };

    const hoverOutOptions = { 
        'width': '500px',
        'font-size': '30px',
        'height': '500px',
        'margin-right': '+=50px',
        'margin-top': '+=50px',
    };
    
    $('.menu4-menu-container li').hover(
        function () {
        $(this).animate( hoverInOptions, 200);
        },
        function() {
        $(this).animate( hoverOutOptions, 200);
        }
    );

    $('.menu4-menu-container').on('mouseover', function (){
        $('#dropdown4').animate(
            animationOptions, 2000);
        //alert('dropdown!!!!!!!!!!!!!!')
        console.log('mouseover');
        });
    
    $('.menu4-menu-container').on('click', function (){
        $('#dropdown4').animate(animationOptions, 2000);
        //alert('dropdown!!!!!!!!!!!!!!')
        console.log('click');
        });

        const animationOptions = { 
            'width': '500px',
            'font-size': '25px',
            'height': '500px',
            'margin-right': '+=50px',
            'margin-top': '+=50px',
            };
        
        $('.menu4-menu-container').on('mouseover', function (){
            $('#dropdown4').animate(
                console.log('check'),
                [{
                    opacity:1,
                    color:'#fff',
                    height:'200px',
                },
                {
                    opacity:0.5,
                    color:'#000',
                    heigth:'300px',
                },
            ], 2000,
            );
            });
});