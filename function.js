$('#imgM').click(function(){
	$('#mMobile').slideDown(1000);
	$('#imgM').css('display', 'none');
	$('#btnClose').css('display', 'block');
});	


$('#btnClose').click(function(){
	$('#mMobile').slideUp(1000);
	$('#btnClose').css('display', 'none');
	$('#imgM').css('display', 'block');
});








