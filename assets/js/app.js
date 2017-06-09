$( _ => {

const $valInput = $('input:text');
const $containerBotones = $('.container-botones');

	$containerBotones.on('click','input',function(e){
		 
		 $valEachNumber = $(this).val();
		 $valInputCurrent = $valInput.val();
		 $valInputCurrent += $valEachNumber;
		 $valInput.val($valInputCurrent);

		if($(this).val() === "C"){
					$valInput.val(" ");
				}

		if($(this).is('#result')){
			const a = $valInput.val().substring(0,($valInput.val().indexOf("=")));
			$valInput.val(eval(a));
		}

		$(this).addClass('active');
		$(this).siblings().removeClass();		

		})

});
		



/*$(function(){

var $valInput = $('input:text');
var $containerBotones = $('.container-botones');

	$containerBotones.on('click','input',function(e){
		 
		 $valEachNumber = $(this).val();
		 $valInputCurrent = $valInput.val();
		 $valInputCurrent += $valEachNumber;
		 $valInput.val($valInputCurrent);

		if($(this).val() === "C"){
					$valInput.val(" ");
				}

		if($(this).is('#result')){
			var a = $valInput.val().substring(0,($valInput.val().indexOf("=")));
			$valInput.val(eval(a));
		}

		$(this).addClass('active');
		$(this).siblings().removeClass();		

		})
*/		
/*
	$(document).on('keydown',function(e){
		console.log(e);
		console.log($valInput.val(e.key));


	})	
	*/
 


