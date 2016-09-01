$(document).ready(function () {
	var divDis = $('#divDisplay');
	var imgLink = $('#keyImg');
	var title = $('#divTitle');
	var i =0;
	var images = [
    '/public/img/barcodea.gif',
	'/public/img/barcodeb.gif',
	'/public/img/snapchat.jpg',
    '/public/img/Kroger.jpg'
    ];
    divDis.position({
        of: $(document),
        my: 'center center',
        at: 'center center',
        collision: 'flip flip'
    });
	imgLink.on('click', function(){
		i = i < images.length ? i+1: 0;
		imgLink.attr('src', images[i]);
		//title.text(images[i].split('.')[0]);
	});
});