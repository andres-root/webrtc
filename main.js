
var streamToAttach

params = {audio: true, video: true}
navigator.getUserMedia( params,  function(stream) {
	video.src = window.URL.createObjectUrl(stream);
	streamToAttach = stream;
}, function(error) {
	alert(erro)
});