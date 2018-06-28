var haslo = "Bez pracy nie ma kołaczy";
var ileSkuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

for(var i = 0; i< dlugosc ; i++){
	if(haslo.charAt(i) == ' ') haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}



function wypiszHaslo(){
	document.getElementById("plansza").innerHTML=haslo1;
}
window.onload = start;

var alfabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";


	
function start(){
	wypiszHaslo();
	var trescDiva = "";
	for(var i = 0; i<=34 ; i++){
		var element = "lit" + i;
		trescDiva = trescDiva + '<div class="litera" id="'+element+'" onclick="sprawdz('+i+')">'+alfabet.charAt(i)+'</div>';
		if((i+1)%7==0) trescDiva = trescDiva + '<div style="clear:both;"></div>';
	}
	
	
	document.getElementById("alfabet").innerHTML = trescDiva;
}
function sprawdz(nr){
	
	var trafiona = false;
	for(var x=0; x < dlugosc; x++){
		if(haslo.charAt(x) == alfabet.charAt(nr)){
			//haslo1.charAt(x) = haslo.charAt(x);
			haslo1 = haslo1.ustawZnak(x, haslo.charAt(x));
			trafiona = true;
			
		}
	}
	if(trafiona){
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background= "#003300";
		document.getElementById(element).style.cursor= "default";
		document.getElementById(element).style.color= "#00C000";
		document.getElementById(element).style.border= "3px solid #00C000";
		wypiszHaslo();
	}else{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background= "#330000";
		document.getElementById(element).style.cursor= "default";
		document.getElementById(element).style.color= "#C00000";
		document.getElementById(element).style.border= "3px solid #C00000";
		document.getElementById(element).setAttribute("onclick", ";");
		//skucha
		
		ileSkuch++;
		document.getElementById("szubienica").innerHTML='<img src="img/s'+ileSkuch+'.jpg" alt=""/>';
	}
	// wygrana
	if(haslo == haslo1){
		document.getElementById("alfabet").innerHTML = "Tak jest, podano prawidłowe hasło : " + haslo + '<br /> <br /> <span class="reset" onclick="location.reload()">Jeszcze Raz?</span>'; 
	}
	//przegrana
	if(ileSkuch>=9){
		document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło : " + haslo + '<br /> <br /> <span class="reset" onclick="location.reload()">Jeszcze Raz?</span>'; 
	}
	
}

String.prototype.ustawZnak = function(miejsce, znak){
	if(miejsce > this.length - 1) return this.toString();
	else return this.substr(0,miejsce) + znak + this.substr(miejsce + 1);
}