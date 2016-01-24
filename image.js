$(document).ready(function () {
	var divDis = $('#divDisplay');
	var imgLink = $('#keyImg');
	var title = $('#divTitle');
	var i =0;
	var images = ['BarcodeA.gif','BarcodeB.gif','SnapChat.jpg'];
    divDis.position({
        of: $(document),
        my: 'center center',
        at: 'center center',
        collision: 'flip flip'
    });
	imgLink.on('click', function(){
		i = i < images.length ? i+1: 0;
		imgLink.attr('src', images[i]);
		title.text(images[i].split('.')[0]);
	});
});