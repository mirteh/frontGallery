var getLink;
var getTitle;
var getText;
var getParent;
var galName;
var imgClass;
var currentImg;
var aniTime;
var imgWidth;
var containerWidth;
var aniTransition = "fade";

function createGallery(getLink, getTitle, getText,galName) {
	jQuery("html, body").animate({ scrollTop: "0px" });
	jQuery("body").prepend('<div id="overlay">&nbsp;</div>');

	if(galName != null) {
		jQuery("body").prepend('<div class="frontGallery" name="'+ galName +'"> </div>');	
	} else { 
		jQuery("body").prepend('<div class="frontGallery"> </div>');	
	} 

	jQuery("div.frontGallery").append('<div class="imgContainer"><img class="galleryImg" src="' + getLink + '"/></div>');
	jQuery("div.frontGallery").append('<div class="imgBox"></div>');

	imgWidth = jQuery("div.imgContainer").width();

	if(getTitle) {
		jQuery("div.imgBox").append('<div class="imgTitle" style="width:'+imgWidth+'px"><div>' + getTitle + '</div></div>');
	} else {
		jQuery("div.imgBox").append('<div class="imgTitle hidden"><div></div></div>');
	}
	if(getText) {
		jQuery("div.imgBox").append('<div class="imgText" style="width:'+imgWidth+'px"><div>' + getText + '</div></div>');
	} else {
		jQuery("div.imgBox").append('<div class="imgText hidden"><div></div></div>');
	}
	jQuery("div.imgContainer").append('<div class="galleryControls"></div>');
	jQuery("div.galleryControls").append('<a class="galleryClose">x</a>');

	controlGallery(getLink);
}

function controlGallery(getLink) {
	imgClass = jQuery("a[href='"+ getLink +"']");

	galName = jQuery(imgClass).attr("gal-name");


	jQuery(document).find("div.frontGallery div.next").remove();
	jQuery(document).find("div.frontGallery div.prev").remove();

	if(!jQuery(imgClass).is("[gal-order='last']")) {
		jQuery("div.galleryControls").append('<div class="next">&raquo;</div>');
	}

	if(!jQuery(imgClass).is("[gal-order='first']")) {
		jQuery("div.galleryControls").append('<div class="prev">&laquo;</div>');
	}
}

function showNextImg(galName,nextImg) {
	currentImg = jQuery(document).find(".galleryImg");

	if(jQuery("a[href='"+ nextImg +"']").attr("gal-name", galName)) {
		if( jQuery("a[href='"+ nextImg +"']").attr("slide-title")) {
 			getTitle = jQuery("a[href='"+ nextImg +"']").attr("slide-title");
		} else {
			getTitle = "noTitle";
		}

		if( jQuery("a[href='"+ nextImg +"']").attr("slide-text")) {
 			getText = jQuery("a[href='"+ nextImg +"']").attr("slide-text");
		} else {
			getText = "noTitle";
		}

		if(aniTransition == "fade") {
			jQuery(".frontGallery img").animate({
				opacity: 0,
				}, aniTime, function() {
			  	currentImg.attr("src", nextImg);
			});

			jQuery(".imgBox").animate({
			    opacity: 0,
			  }, aniTime, function() {
				  	if(getText != "noTitle") {
				  		jQuery(document).find("div.imgText div").text(getText);
				  		jQuery(document).find("div.imgText").removeClass("hidden");
				  	} else {
						jQuery(document).find("div.imgText").addClass("hidden");
				  	}

				  	if(getTitle != "noTitle") {
				  		jQuery(document).find("div.imgTitle div").text(getTitle);
				  		jQuery(document).find("div.imgTitle").removeClass("hidden");
				  	} else {
						jQuery(document).find("div.imgTitle").addClass("hidden");
				  	}
			   
			});

			containerWidth = jQuery("div.imgContainer").width();
			imgWidth = jQuery("div.imgContainer img").width();

			if(containerWidth > imgWidth) {
			  	imgWidth = containerWidth;
			}
			jQuery(document).find("div.imgText").css("width", imgWidth+"px");
			jQuery(document).find("div.imgTitle").css("width", imgWidth+"px");
			
			jQuery(".imgBox").animate({
			    opacity:1,
			  }, aniTime, function() {
				if(getText != "noTitle") {
			  		jQuery(document).find("div.imgText div").text(getText);
			  		jQuery(document).find("div.imgText").removeClass("hidden");
			  		
			  	} else {
					jQuery(document).find("div.imgText").addClass("hidden");
			  	}

			  	if(getTitle != "noTitle") {
			  		jQuery(document).find("div.imgTitle div").text(getTitle);
			  		jQuery(document).find("div.imgTitle").removeClass("hidden");
			  	} else {
					jQuery(document).find("div.imgTitle").addClass("hidden");
			  	}
			});
			jQuery(".frontGallery img").animate({
				opacity: 1,
			});
		}
		controlGallery(nextImg);
	}			
}

function showPrevImg(galName,prevImg) {
		currentImg = jQuery(document).find(".galleryImg");

		if(jQuery("a[href='"+ prevImg +"']").attr("gal-name") == galName) {
			getTitle = jQuery("a[href='"+ prevImg +"']").attr("slide-title");
		
			if( jQuery("a[href='"+ prevImg +"']").attr("slide-title")) {
	 			getTitle = jQuery("a[href='"+ prevImg +"']").attr("slide-title");
			} else {
				getTitle = "noTitle";
			}

			if( jQuery("a[href='"+ prevImg +"']").attr("slide-text")) {
	 			getText = jQuery("a[href='"+ prevImg +"']").attr("slide-text");
			} else {
				getText = "noTitle";
			}
		}
		
		if(aniTransition == "fade") {
			jQuery(".frontGallery img").animate({
				opacity: 0,
			}, aniTime, function() {
			  	currentImg.attr("src", prevImg);
			});
		
			jQuery(".imgBox").animate({
			    opacity: 0,
			  }, aniTime, function() {
			  	if(getText != "noTitle") {
			  		jQuery(document).find("div.imgText div").text(getText);
			  		jQuery(document).find("div.imgText").removeClass("hidden");
			  	} else {
					jQuery(document).find("div.imgText").addClass("hidden");
			  	}

			  	if(getTitle != "noTitle") {
			  		jQuery(document).find("div.imgTitle div").text(getTitle);
			  		jQuery(document).find("div.imgTitle").removeClass("hidden");		
			  	} else {
					jQuery(document).find("div.imgTitle").addClass("hidden");
			  	}
			});
		
			containerWidth = jQuery("div.imgContainer").width();
			imgWidth = jQuery("div.imgContainer img").width();

			if(containerWidth > imgWidth) {
			  	imgWidth = containerWidth;
			}

			jQuery(document).find("div.imgText").css("width", imgWidth+"px");
			jQuery(document).find("div.imgTitle").css("width", imgWidth+"px");

			jQuery(".imgBox").animate({
			    opacity:1,
			  }, aniTime, function() {
				if(getText != "noTitle") {	
			  		jQuery(document).find("div.imgText div").text(getText);
			  		jQuery(document).find("div.imgText").removeClass("hidden");	  		
			  	} else {
					jQuery(document).find("div.imgText").addClass("hidden");
			  	}

			  	if(getTitle != "noTitle") {
			  		jQuery(document).find("div.imgTitle div").text(getTitle);
			  		jQuery(document).find("div.imgTitle").removeClass("hidden");
			  	} else {
					jQuery(document).find("div.imgTitle").addClass("hidden");
			  	}
			});

			jQuery(".frontGallery img").animate({
				opacity: 1,
			});
		}	
		controlGallery(prevImg);
		
}

function frontGallery(settings) {
  	jQuery.each(settings, function (index, value) {
        aniTime = settings.aniTime;
        aniClass = settings.aniClass;
    });

    jQuery(document).find("."+aniClass).first().attr("gal-order", "first");
	jQuery(document).find("."+aniClass).last().attr("gal-order", "last");
	
	jQuery(document).ready(function() {
		if(aniClass != undefined) {
			link = "a."+aniClass;
		} else {
			link = "a";	
		}

		jQuery(link).click(function() {
			getLink = jQuery(this).attr("href");
			getTitle = jQuery(this).attr("slide-title");
			getText = jQuery(this).attr("slide-text");
			galName = jQuery(this).attr("gal-name");

			jQuery(document).find("a[gal-name='"+galName+"']").first().attr("gal-order", "first");
			jQuery(document).find("a[gal-name='"+galName+"']").last().attr("gal-order", "last");

			createGallery(getLink, getTitle, getText,galName);
			return false;
		});

		jQuery(document).on('click', '.galleryClose', function(){ 
	    	jQuery(document).find(".frontGallery").remove();
	    	jQuery(document).find("#overlay").remove();
		}); 
		
		jQuery(document).on('click', '.next', function(){ 
	    	currentImg = jQuery(document).find("div.frontGallery img").attr("src");
	    	galName = jQuery("a[href='"+ currentImg +"']").attr("gal-name");
	    	nextImg = jQuery("a[href='"+ currentImg +"']").next().attr("href");
			
	    	showNextImg(galName,nextImg);
		}); 

		jQuery(document).on('click', '.prev', function(){ 
	    	currentImg = jQuery(document).find("div.frontGallery img").attr("src");
	    	galName = jQuery("a[href='"+ currentImg +"']").attr("gal-name");
	    	prevImg = jQuery("a[href='"+ currentImg +"']").prev().attr("href");
			console.log(prevImg);
	    	showPrevImg(galName,prevImg);
		}); 

	});	
}