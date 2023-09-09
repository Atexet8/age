//DOM document
//console.log (document) ;
//var h1 = document.getElementsByTagName("h1") [0];
//console.log (h1);

//h1.innerText = "sainuu";
//.style.styleName = "style utga"
//h1.style.color="red";
//var h12 = document.getElementsByTagName("h1") [1];
//console.log (h2);
//h12.innerText = "snu";
//h12.style.color="aqua";
var inputAge = document.getElementsByTagName('input')[0]
console.log(inputAge);
var result = document.getElementsByTagName('p')[0]
console.log(result);
var currentYear=2023, birthYear;
function convert(){
	if(inputAge.value>100){
		result.innerText="hun iim nasgu";
		result.style.color="red";
		}else if(inputAge.value<0){
			result.innerText="0-ees baga baij bolku";
			result.style.color="red;"
		}else if(inputAge.value==""){
			alert("hooson baij bolku")
		else{
	birthYear = currentYear - inputAge.value;
	result.innerText="tursun on: " + birthYear;
	}
}