String.prototype.format = function() {
	var s = this;
	for (var i = 0; i < arguments.length; i++) {       
		var reg = new RegExp("\\{" + i + "\\}", "gm");             
		s = s.replace(reg, arguments[i]);
	}
	
	return s;
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var videoIdRegex = /watch\?v=([^&]*)/;
var linkFormat = "/watch?v={0}&list={1}"

var channelId = $('meta[itemprop=channelId]').attr("content");
var playlistId = channelId.replaceAt(1,'U');

var firstVideoUrl = $('.yt-lockup-title:first').find("a")[0].href;
var firstVideoId = videoIdRegex.exec(firstVideoUrl)[1];

var playistLink = linkFormat.format(firstVideoId,playlistId);

var linkElement = $('<a class="yt-uix-button  shelves-play play-all-icon-btn yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-small yt-uix-button-has-icon no-icon-markup"><span class="yt-uix-button-content">Alle wiedergeben</span></a>')[0]
linkElement.href = playistLink;
linkElement.style = "margin-left: 10px;";
$(".branded-page-module-title:first").append(linkElement)