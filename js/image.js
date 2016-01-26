$(document).ready(function () {
	var divDis = $('#divDisplay');
	var imgLink = $('#keyImg');
	var title = $('#divTitle');
	var i =0;
	var images = ['https://lh3.googleusercontent.com/a9GqB67TiPfB94RRdAv0aVU-T3WGZSsg8vgiKDPVm9tMia9-L6weO9mKlnczwzSXFHCUC-oLaKZ8EbcBlzUDW82C69IyxV81uk5iQJ521uhLda7-q_NJHn_CVYs9yVbo8gbjC_MdiA-_mvq2afY7Uqjr49SKh0g7UPRjNmwZu-FdghJx7bmUUH4_H-SPD-w9LIaMVLCGu5woR4xPpsCSHNSJAdhHae-pHSzHU_fSwnA_4VURV0IELvMc80E_Mdw_Pw-uomILgyoqF24HdiH4fxHGpP01y_5jbtjEI9quUdf8pCGnn2NS7zCXUxbOnJHG-nOyQhv6BLL5RCv-Y2M0ts8eg19NIv6WRvTDxc141ohXeLeGgky5OlkoEV7_JghuVYiDlakObfj3_tU-pX1VoXFoud1DkY86SsCo7l_LuCGayRiDF5AuljbyBHih3jS-z-EORZoJcRrnGu4lXR2FnucKAjsxQtVuAeVkBGlnH9aO_YXYyrXh2n4wgj6zTuEBCzyPSI5h4stomlqp13XK0I8l08nHA0MgGRO1aK5oY-D4zo8jmF_p2nNB3-XAtjB0VqPoNQ=w444-h120-no',
	'https://lh3.googleusercontent.com/W3vTKldPPoRDV_C3ukHeHT9AFXuboqwC--m_1NvncnkFld2UnajEnsdkmheanhR-a0IJVlaRQHrps9IobQ7s4OhS5mtF3NO7pxCIXlllqi4QceTfbotsvGhDa02HbYoW0K8VedasnSCAdPulgr8wHrMhMFqtPhxH-X0KL3WMV7rfG6gAC0eTDv-t2OMTl97UyLyEljpAmhc_yfja997zV32LauU8DRQ6wm4E8vhgT6Zm5x5vS4F75MY881cOsVkYY43vu5SVPgxQR0VjfTrCT_-on_jeWfVeBAgB32jvqsle0fEa-N9rUYVccyQNSvUAvKc5EN0ez_a6bl5GgZ342IZcoL1EUJHWGHE2C3uMxARIf3Yz-HOqjB4SpK6ndoFIkh8MWa8pZtJTCcSS1J3YNISlSlcmZg3EVZo1vFMdZ8mYeBV1VyM1OKRcnWugGUvHrc90gu7LI8eM8biaEsY5tLiEQwtU6F7D6axpQXMksLN4ie0sH0SRKPFNDGCS7TLn-gkIRqcBRmlf2BhW5HNjs0kFD9lLr2kwr4xwEnykbrpRFLK6oBXBHrlucjPg7UWGNX13cg=w116-h136-no',
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