let time_out = 600;


$( document ).ready(function(){
setInterval(getLatestValue,5000);
});

let toggleLamp = function(on){
var $lamp = $("#lamp");

if(on==1 && $lamp.attr('src')=='/images/lampoff.png'){
    
    $lamp.fadeOut(time_out, function() {
        $lamp.attr('src','/images/lampon.png');
    })
    .fadeIn(time_out);
}
if(on==0 && $lamp.attr('src')=='/images/lampon.png'){
    $lamp.fadeOut(time_out, function() {
        $lamp.attr('src','/images/lampoff.png');
    })
    .fadeIn(time_out);
}
}

let getLatestValue = function(){
    $.get("http://things.ubidots.com/api/v1.6/devices/arduino/light/values?token=A1E-UnFQUtP9kjtmUpgm2nIG1yte7ge7xe")
            .done(function(data){
                console.log(data.results[0].value);
                toggleLamp(data.results[0].value);
            });
}