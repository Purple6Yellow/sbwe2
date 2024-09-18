$(document).ready( function() {

$('#buttonBK').on('click', function URL(){
    location.href = "/CC/verhuurBK.html"
    console.log('verhuur ingeladen')
    //alert('Wilt u Barthkapel huren?')
    });

$('#buttonGalerie').on('click', function URL(){
    location.href = "/historie.html"
    });

});