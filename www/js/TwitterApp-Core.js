//launch twitter authorize page
function twitterLogin(authUrl){
	window.plugins.childBrowser.openExternal(authUrl);
}

//online page utility functions.
var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
function callbackaccesstoken(response){
	var root = response.query.results.result.replace(/(\r\n|\n|\r)/gm,"").split("&");
	
	var accesstoken   = root[0].split("=")[1];
    var accesstokensecret   = root[1].split("=")[1];
    var userId   = root[2].split("=")[1];
    var screenName = root[3].split("=")[1];
    
    //set the access tokens
    appOAuthNode.twitter.setAccesstoken(accesstoken);
    appOAuthNode.twitter.setAccesstokensecret(accesstokensecret);
   
    //store access tokens in local storage and sessionStorage
    sessionStorage.accesstoken = accesstoken;
    sessionStorage.accesstokensecret = accesstokensecret;
    
    localStorage.accesstoken = accesstoken;
    localStorage.accesstokensecret = accesstokensecret;
    
    //set the user name and screen name to cookie
    $.cookie("userId",userId);
    $.cookie("screenName",screenName);
    //$("#loadAccessElement").remove();
    
    //get the user profile details
    
    getProfileDetails();
}

function getProfileDetails(){
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'SELECT * FROM twitter.account.credentials WHERE oauth_consumer_key="'+ck+'" AND oauth_consumer_secret="'+cs+'" AND oauth_token ="'+ak+'" AND oauth_token_secret = "'+as+'"';
	var url = baseUrl + q + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	url = url + '&format=json&callback=callbackProfileDetails';
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"online-loadProfileElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	
	$.get(url);
}

function getRefreshProfileDetails(){
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'SELECT * FROM twitter.account.credentials WHERE oauth_consumer_key="'+ck+'" AND oauth_consumer_secret="'+cs+'" AND oauth_token ="'+ak+'" AND oauth_token_secret = "'+as+'"';
	var url = baseUrl + q + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	url = url + '&format=json&callback=callbackRefreshProfileDetails';
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"online-loadRefreshProfileElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	
	$.get(url);
}

function getLocationProfileDetails(){
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'SELECT * FROM twitter.account.credentials WHERE oauth_consumer_key="'+ck+'" AND oauth_consumer_secret="'+cs+'" AND oauth_token ="'+ak+'" AND oauth_token_secret = "'+as+'"';
	var url = baseUrl + q + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	url = url + '&format=json&callback=callbackLocationProfileDetails';
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"online-loadRefreshProfileElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	
	$.get(url);
}

function getNameProfileDetails(){
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'SELECT * FROM twitter.account.credentials WHERE oauth_consumer_key="'+ck+'" AND oauth_consumer_secret="'+cs+'" AND oauth_token ="'+ak+'" AND oauth_token_secret = "'+as+'"';
	var url = baseUrl + q + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	url = url + '&format=json&callback=callbackNameProfileDetails';
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"online-loadRefreshProfileElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	
	$.get(url);
}

function callbackNameProfileDetails(response){
	var root = response.query.results;
	$("#screenname-myupdate").val(root.user.name);
}

function callbackLocationProfileDetails(response){
	var root = response.query.results;
	$("#location-myupdate").val(root.user.location);
}

function callbackProfileDetails(response){
	var root = response.query.results;
	$("#online-twitter-name").html("").html(root.user.name);
	$("#online-twitter-screenname").html("").html(root.user.screen_name);
	$("#online-twitter-location").html("").html(root.user.location);
	$("#online-twitter-uid").html("").html(root.user.id);
	$("#online-twitter-followers").html("").html(root.user.followers_count);
	$("#online-twitter-friends").html("").html(root.user.friends_count);
	$("#online-twitter-lasttweet").html("").html(root.user.status.text);
		
	//$("#online-loadProfileElement").remove();
}

function callbackRefreshProfileDetails(response){
	var root = response.query.results;
	$("#online-twitter-name").html("").html(root.user.name);
	$("#online-twitter-screenname").html("").html(root.user.screen_name);
	$("#online-twitter-location").html("").html(root.user.location);
	$("#online-twitter-uid").html("").html(root.user.id);
	$("#online-twitter-followers").html("").html(root.user.followers_count);
	$("#online-twitter-friends").html("").html(root.user.friends_count);
	$("#online-twitter-lasttweet").html("").html(root.user.status.text);
		
	//$("#online-loadRefreshProfileElement").remove();
}

function getScheduleTime(){
	var tweetdate = $("#online-mydate").val();

	var tweettime = $("#online-tweet-time").val();
	var tweetamPm = $("#online-tweet-zone").val();
	
	var datasplit,timesplit,date;
	datasplit = tweetdate.split("-");
	
	date = new Date();
	date.setUTCDate(datasplit[2]);
	date.setUTCMonth($.inArray(datasplit[1],months));
	date.setUTCFullYear(datasplit[0]);
	
	var timesplit = tweettime.split(":");
	var tweethour = parseInt(timesplit[0],10);
	var tweetmin = parseInt(timesplit[1],10);
	
	if (tweetamPm == "AM" && tweethour == 12){
		tweethour = 0;
	}else if (tweetamPm == "PM" && tweethour != 12){
		tweethour += 12;	
	}
	
	date.setUTCHours(tweethour);
	date.setUTCMinutes(tweetmin);
	date.setUTCSeconds(0);
	date.setUTCMilliseconds(0);
	var tweetEpoc = date.getTime();
	return tweetEpoc;
}

function callbacktweet(response){
	$.mobile.loading('hide');	
	$("#online-mytweet").val("");
	$("#online-positionWindow").popup("open");
	//remove the script tag as well
	//$("#online-loadElement").remove();
}

function offlinetweetcallback(response){
	
}

function scheduletweetcallback(response){
	
}

function postTweet(mytweet,callback,callbacktweet,autoSync){
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	var userid = $.cookie("userId");
	if(!autoSync){
		$.mobile.loading('show');
	}
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'INSERT INTO twitter.status (status,oauth_consumer_key,oauth_consumer_secret,oauth_token,oauth_token_secret) VALUES ("'+mytweet+'","'+ck+'","'+cs+'","'+ak+'","'+as+'")';
	var url = baseUrl + encodeURIComponent(q) + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	if(callback){
		url = url + '&callback='+callbacktweet;
	}
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"online-loadElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	$.get(url);
}

function callbacklocation(){
	$.mobile.loading('hide');	
	$("#location-positionWindow").popup("open");
	//remove the script tag as well
	//$("#location-loadElement").remove();
}

function postLocation(mylocation,callbacklocation){
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'update twitter.account.profile set location="'+mylocation+'" where oauth_consumer_key="'+ck+'" and oauth_consumer_secret="'+cs+'" and oauth_token="'+ak+'" and oauth_token_secret="'+as+'"';
	var url = baseUrl + encodeURIComponent(q) + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	
	url = url + '&callback='+callbacklocation;
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"location-loadElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	
	$.get(url);
}

function callbackscreenname(){
	//alert("call back called");
	$.mobile.loading('hide');	
	$("#screenname-positionWindow").popup("open");
	//remove the script tag as well
	//$("#screenname-loadElement").remove();
}

function postScreenName(myscreenname,callbackscreenname){
	//alert(myscreenname);
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'update twitter.account.profile set name="'+myscreenname+'" where oauth_consumer_key="'+ck+'" and oauth_consumer_secret="'+cs+'" and oauth_token="'+ak+'" and oauth_token_secret="'+as+'"';
	var url = baseUrl + encodeURIComponent(q) + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	
	url = url + '&callback='+callbackscreenname;
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"screenname-loadElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	$.get(url);
	//alert("appended");
}

function callbackprofilecolor(){
	$.mobile.loading('hide');	
	$("#profilecolor-positionWindow").popup("open");
	//remove the script tag as well
	//$("#profilecolor-loadElement").remove();
}

function postProfileColor(myprofilecolor,callbackprofilecolor){
	var cs = appOAuthNode.twitter.getConsumersecret();
	var ck = appOAuthNode.twitter.getConsumerkey();
	var ak = appOAuthNode.twitter.getAccesstoken();
	var as = appOAuthNode.twitter.getAccesstokensecret();
	
	var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
	var	q = 'update twitter.account.profile_colors set profile_background_color="'+myprofilecolor+'" where oauth_consumer_key="'+ck+'" and oauth_consumer_secret="'+cs+'" and oauth_token="'+ak+'" and oauth_token_secret="'+as+'"';
	var url = baseUrl + encodeURIComponent(q) + '&diagnostics=true&env=store://datatables.org/alltableswithkeys';
	
	url = url + '&callback='+callbackprofilecolor;
	
	/*var s = document.createElement('script');
	s.setAttribute('src',url);
	s.setAttribute('id',"profilecolor-loadElement");
	document.getElementsByTagName('head')[0].appendChild(s);*/
	
	$.get(url);
}


