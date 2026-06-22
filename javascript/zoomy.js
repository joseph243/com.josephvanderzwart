function zoomy1(){

	
	document.getElementById("zoomy").innerHTML = "onnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn";
	//document.getElementById("zoomy").innerHTML = "offy";
};


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};


setInterval(zoomy1(), 500);  
 
//only runs once?
