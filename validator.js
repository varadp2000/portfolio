function ev(){
	var x=document.form1.em.value;
	a=x.length;
	var atpos=x.indexOf('@')
	var dotpos=x.indexOf('.')
	if(atpos<1||dotpos<atpos+1||dotpos+1>=x.length){
		alert("Enter Valid Email");
		return false;
	}
}
function pv(){
	var y=document.form1.pn.value;
	b=y.length;
	if(b<10||b>10)
	alert("Enter Correct Phone Number");
}