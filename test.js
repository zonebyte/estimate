
var hour = document.getElementById('calc_hour');
var cur = document.getElementById('calc_cur');
var cost = document.getElementById('calc_cost');
var charge = document.getElementById('calc_charge');
var submit = document.getElementById('submit');
var text = document.getElementById('result');
var word = document.getElementById('txt');
// var dollar = document.getElementById('dollar');
// var naira = document.getElementById('naira');
var select = document.getElementById('mySelect');

// function noInput() {
// 	if(hour.value.length < 0 || cur.value.length < 0 || cost.value.length < 0 || charge.value.length < 0 ){
// 		alert('ode')
// 	}
// }
function myVal() {
	return select.value;
}
function opo(){
if(hour.value.length != 0 && cur.value.length != 0 && cost.value.length != 0 && charge.value.length != 0 ){
	submit.disabled= false;
} else if(hour.value.length == 0 || cur.value.length == 0 || cost.value.length == 0 || charge.value.length == 0)
	submit.disabled=true;
}

select.addEventListener('change', function () {
	if (myVal() === "NGN"){
	cur.value = cur.value * 360;
	cost.value = cost.value * 360;
	charge.value = charge.value * 360;
	} else if (myVal() === "USD"){
	cur.value = cur.value / 360;
	cost.value = cost.value / 360;
	charge.value = charge.value / 360;
	}
	document.getElementById('cur').innerHTML = myVal();
	document.getElementById('cost').innerHTML = myVal();
	document.getElementById('charge').innerHTML = myVal();
	
})

function hour_val()  {
	return parseFloat(hour.value);
}
function cur_val()  {
	return parseFloat(cur.value);
}
function cost_val()  {
	return parseFloat(cost.value);
}
function charge_val()  {
	return parseFloat(charge.value);
}

function total() {
	return (hour_val() * cur_val()) + cost_val() + charge_val();
}

submit.addEventListener('click', function() {
	if(hour.value.length <= 0 || cur.value.length <= 0 || cost.value.length <= 0 || charge.value.length <= 0 ){
		alert('ode')
	} else if (myVal() === 'USD'){
		text.innerHTML = 'USD ' + total();
		word.innerHTML = 'Your base charge should be ' + total() + ' USD';
	} else if (myVal() === 'NGN'){
		text.innerHTML = 'NGN ' + total();
		word.innerHTML = 'Your base charge should be ' + total() + ' NGN';
	} 
	document.getElementById("submit").innerHTML = "SETUP THIS PROJECT";
	cur.value='';
	hour.value='';
	cost.value='';
	charge.value='';
})