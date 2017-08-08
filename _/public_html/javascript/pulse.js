function pulse1(){
	document.getElementById("pulse").style.borderColor = white;
	sleep(1000);
	document.getElementById("pulse").style.borderColor = black;
};




function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};


setInterval(pulse1(), 1000);  
