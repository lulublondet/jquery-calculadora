


$(function(){

	$valInput = $('input:text').css({border:'1px solid red'});


	$containerBotones = $('.container-botones').css({border:'1px solid blue'});
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
 
})

