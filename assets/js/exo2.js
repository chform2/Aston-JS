
/* Function qui change l'heure dans le DOM */
function updateTime() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.querySelector('.horloge').innerHTML = time;
}

// déclenchement de la fonction updateTime au chargement
window.onload = function(){
    setInterval('updateTime()',1000);
}