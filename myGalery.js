//META{"name":"Disgalery"}*//

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

var allimgsN;
var allImgs;
var allImgslinks;
var currentImgN = 0;
var startImgLink;
//var Counter;

var Disgalery = function(){}

Disgalery.prototype.start = function () {
	document.onkeydown = checkKey;
};


function RunDisgalery(init = 0){
	
		//GET IMAGES
		allImgs = document.getElementsByClassName("da-imageWrapper da-imageZoom da-clickable da-embedWrapper");
		allimgsN = allImgs.length;
	
		allImgslinks = [allImgs.length];
		for (var i=0; i < allImgs.length; i++) {
			allImgslinks[i] = allImgs[i].href;
			//if(allImgslinks[i] == startImgLink[0] && init==1){
			//	currentImgN = i;
			//	console.log(currentImgN);
			//} 
		}
	
		//start GALERY
		var galerySpace = document.getElementsByClassName("da-modal");
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
}

function scrollImg(n){
	currentImgN += n;
	if(currentImgN >= allimgsN){
		currentImgN = 0;
	}else if(currentImgN < 0){
		currentImgN = allimgsN-1;
	}
	var i = allImgslinks[currentImgN];
	document.getElementById("cimg").src = i;
	RunDisgalery();
	console.log(currentImgN + "/" + allimgsN);
}

function checkKey(event) {
    var x = event.which || event.keyCode;
	var left = 37;
	var up = 38;
	var right = 39;
	var down = 40;
	var F12 = 123;
	var F11 = 122;
	if(x == left || x == up){
    	scrollImg(1);
	}
	if(x == right || x == down){
    	scrollImg(-1);
	}
	if(x == F12){
    	RunDisgalery(1);
	}
	if(x == F11){ //DOWNLOAD IMAGE
		var a = $("<a>")
		.attr("href", allImgslinks[currentImgN])
		.attr("download", "img.png")
		.appendTo("body");
	
		a[0].click();
	
		a.remove();
	}
}

Disgalery.prototype.getSettingsPanel = function () {
    return "<h3>Settings Panel</h3>";
};

Disgalery.prototype.getName = function () {
    return "Disgalery";
};

Disgalery.prototype.getDescription = function () {
    return "Disgalery";
};

Disgalery.prototype.getVersion = function () {
    return "0.1.0";
};

Disgalery.prototype.getAuthor = function () {
    return "906Eventyon";
};
