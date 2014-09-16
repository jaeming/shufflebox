

var $audio = $("#mp3");

//Load a Playlist

function load_album1(){
    $('#playlist').load('playlist-1.html');
}

function load_album2(){
    $('#playlist').load('playlist-2.html');
}


//capture click event on a link to an track

$("ul li a").click(function(event){
  event.preventDefault();
  var audioLocation = $(this).attr("href");

//update src corresponding to url clicked above	
	
	$audio.attr("src", audioLocation);
	
//and play it...	
	
	$audio.trigger('play');
	
	
	//play the next song when current one ends




});


