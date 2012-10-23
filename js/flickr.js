$(document).ready(function(){

	//alert(" ");

	var key = 'fe16383c25c52c98d6d42b79fc58eb81'; 
	var api_secret = 'cd06c0e9eee1b448';

	var url = 'http://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key='+key+'&group_id=30649004@N00&format=json&nojsoncallback=1';
	var imgSrc = new Array;

	$.getJSON(url, function(json){

		//console.log(json);
		//console.log(json.photos);
		//console.log(json.photos.photo)
		
		// Flickr's img src URl format 
		// http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg

		console.log(json);


		for (var j = 0; j< json.photos.photo.length; j++){
		

		/* */
		var farm = json.photos.photo[j].farm;
		var id = json.photos.photo[j].id;
		var server = json.photos.photo[j].server;
		var secret = json.photos.photo[j].secret;
		var title = json.photos.photo[j].title;

		
	var img = 'http://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_q.jpg'
console.log(img);
	var title = $('#container').append("<p>"+title+"</p>");	
	var image = $('<img/>').attr('src', img).attr('alt', title).appendTo('#container');
	
		}


	});

});