Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function rescaleImg(Img_el){
	var width = Img_el.style.width;	
	var height = Img_el.style.height;
	//alert(width + "/" + height);
	//if(width > maxWidth){
	//    ratio = maxWidth / width;   // get ratio for scaling image
	//    $(this).css("width", maxWidth); // Set new width
	//    $(this).css("height", height * ratio);  // Scale height based on ratio
	//    height = height * ratio;    // Reset height to match scaled image
	//    width = width * ratio;    // Reset width to match scaled image
	//}
}
var allimgsN;
var allImgs;
var allImgslinks;

function StartMyDiscordGalery(r){
    //GET IMAGES
    allImgs = document.getElementsByClassName("imageWrapper-38T7d9");
    allimgsN = allImgs.length;
	if(r!=0)currentImgN = allimgsN;

    allImgslinks = [allImgs.length];
    for (var i=0; i < allImgs.length; i++) {
        allImgslinks[i] = allImgs[i].href;
    }

    //REMOVE IMAGE
    document.getElementsByClassName("inner-1_1f7b").remove();

    //AND ADD GALERY
    var galerySpace = document.getElementsByClassName("modal-2LIEKY");
    galerySpace[0].innerHTML = '<div style="z-index: 10000; -webkit-flex: 1 0 auto;\
    flex: 1 0 auto;\
    display: -webkit-flex;\
    display: flex;\
    -webkit-align-items: flex-start;\
    align-items: flex-start;\
    -webkit-justify-content: space-around;\
    justify-content: space-around;\
    overflow: hidden;\
    width: auto;" class="a-gal inner-1_1f7b"><img style="max-height: 100vh; max-width: 100%;" class="imageWrapper-38T7d9" id="cimg" src=""><a id="ilink" href=""></img></div>';

document.getElementById("cimg").src = allImgslinks[currentImgN];

document.onkeydown = checkKey;

}

function scrollImg(n){
	currentImgN += n;
	if(currentImgN > allimgsN){
		currentImgN = 0;
	}else if(currentImgN < 0){
		currentImgN = allimgsN;
	}
	var i = allImgslinks[currentImgN];
	document.getElementById("cimg").src = i;
}

function checkKey(event) {
    var x = event.which || event.keyCode;
	var left = 37;
	var up = 38;
	var right = 39;
	var down = 40;
	if(x == left || x == up){
    	scrollImg(1);
	}
	if(x == right || x == down){
    	scrollImg(-1);
	}
}

StartMyDiscordGalery(1);
