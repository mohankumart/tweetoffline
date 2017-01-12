/**
 * Initialize the oAuth definition
 */

var appOAuthNode = {};
var twitterAuthorizeWindow;
function InitializeOAuth(connectType){
	if(connectType == "twitter"){
		var oAuthNode = new OAuth();	
		oAuthNode.setConsumerkey("AjM0puHk8rA9fMvaQZxKQ");
		oAuthNode.setConsumersecret("LKYXapCRzeeFubuERBckFURsiBOpNxrzjLqGnA");
		oAuthNode.setOAuthSignaturemethod("HMAC-SHA1");
		oAuthNode.setOAuthVersion("1.1");
		oAuthNode.setCallbackUrl("http://tweetoffline.appspot.com/Twitter-Authorize.html");
		appOAuthNode.twitter = oAuthNode;
	}
}

