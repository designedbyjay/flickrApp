$(document).ready(function(){

	alert(" ");

	var key = 'fe16383c25c52c98d6d42b79fc58eb81'; 
	var api_secret = 'cd06c0e9eee1b448';

	var url = 'http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=' +key+ '&format=json&nojsoncallback=1';

	var imgSrc = new Array;

	$.getJSON(url, function(json){

		//console.log(json);
		//console.log(json.photos);
		console.log(json.photos.photo)
		
		// Flickr's img src URl format 
		// http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg


		for (var j = 0; j< json.photos.photo.length; j++){
		
		//console.log(j);

		var farm = json.photos.photo[j].farm;
		var id = json.photos.photo[j].id;
		var server = json.photos.photo[j].server;
		var secret = json.photos.photo[j].secret;
		var title = json.photos.photo[j].title;

		var img = 'http://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_q.jpg'

		var image = $('<img/>').attr('src', img).attr('alt', title).appendTo('#container');

		}


	});

});