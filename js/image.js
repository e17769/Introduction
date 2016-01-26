$(document).ready(function () {
	var divDis = $('#divDisplay');
	var imgLink = $('#keyImg');
	var title = $('#divTitle');
	var i =0;
	var images = ['https://photos.google.com/share/AF1QipOjCPM1V4ujwHirKq0zIBdad8gHtmCbVnD8inKXu2Vr_Rj24P530-by58tUj6iMCQ/photo/AF1QipPzlGg_h1t0Y1iJ2NgfAK0fixPqoveGykBm740W?key=MlZKbktic3QtbEFncEVMR2E2RGNVbkV3R2NiZjZ3',
	'https://photos.google.com/share/AF1QipOjCPM1V4ujwHirKq0zIBdad8gHtmCbVnD8inKXu2Vr_Rj24P530-by58tUj6iMCQ/photo/AF1QipPzlGg_h1t0Y1iJ2NgfAK0fixPqoveGykBm740W?key=MlZKbktic3QtbEFncEVMR2E2RGNVbkV3R2NiZjZ3',
	'https://lh3.googleusercontent.com/59zvjQB0UT9TNtfx34yUDAe1mpmWpg83NuKK8QZReNtpBDd0QZ_qIcODrHRTJwmGTbeQJq7MjMEfiSOAPSPoZ5omxajiP9U77T0Gc4W0jH4rkuxwZ4o6yJfMOEc3kRNU-VPaBxgei0mjZ2M5TGE3unoMJBww5TRtMBSzDaDXw34HIaWhcyes3OGCoZmcMVUCgDZ0kewb0JBfFQqNskbCVGkWcyfprmreGZHUVp-T7lZlsSKGEsiuL4Lcpa7eMQqsZUXjYuc5ayYHtV3o6jgDtJGNjdFs5ROxQepEDMmGoT-KiZGaMgcqNnVf7ixVZYiqHGG_5ZWdlz4VU66JeViRSZDYGgshl027dWvvR28tTxTjD0tW4PEXJxwD5vLYBxdiwDdrHaj5T7zmAsqUgRIjbQ_pKsLcmVE2IrhAH5-2rVM854YJFUesKD5JPldFv1MyMprTjNoV_WmPXuzgK5EyLpLOo2g03zEBxwlcK1fa-J8huwzMvZPeC2qBFQghPcdr47387R0QvlheCGpshfphMlvI2hTOsGPlUfZ6wbgyg75iHcbIGseXpBit_FvN3d8FguCsFQ=s1420-no'];
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