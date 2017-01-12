/**
 * Manage the oAuth tokens of an app
 */


function OAuth(){
	this.consumerkey;
	this.consumersecret;
	this.requesttoken;
	this.requesttokensecret;
	this.accesstoken;
	this.accesstokensecret;
	this.callbackurl;
	this.oauthsignaturemethod;
	this.oauthversion;
	this.oauthverifier;
}

OAuth.prototype = {
		setConsumerkey : function(consumerkey){
			this.consumerkey = consumerkey;
		},
		getConsumerkey : function(){
			return this.consumerkey;
		},
		setConsumersecret : function(consumersecret){
			this.consumersecret = consumersecret;
		},
		getConsumersecret : function(){
			return this.consumersecret;
		},
		setRequesttoken : function(requesttoken){
			this.requesttoken = requesttoken;
			
		},
		getRequesttoken : function(){
			return this.requesttoken;
		},
		setRequesttokensecret : function(requesttokensecret){
			this.requesttokensecret = requesttokensecret;
		},
		getRequesttokensecret : function(){
			return this.requesttokensecret;
		},
		setAccesstoken : function(accesstoken){
			this.accesstoken = accesstoken;
		},
		getAccesstoken : function(){
			return this.accesstoken;
		},
		setAccesstokensecret : function(accesstokensecret){
			this.accesstokensecret = accesstokensecret;
		},
		getAccesstokensecret : function(){
			return this.accesstokensecret;
		},
		setCallbackUrl : function(callbackurl){
			this.callbackurl = callbackurl;
		},
		getCallbackUrl : function(){
			return this.callbackurl;
		},
		setOAuthSignaturemethod : function(oauthsignaturemethod){
			this.oauthsignaturemethod = oauthsignaturemethod;
		},
		getOAuthSignaturemethod : function(){
			return this.oauthsignaturemethod;
		},
		setOAuthVersion : function(oauthversion){
			this.oauthversion = oauthversion;
		},
		getOAuthVersion : function(){
			return this.oauthversion;
		},
		setOAuthVerifier : function(oauthverifier){
			this.oauthverifier = oauthverifier;
		},
		getOAuthVerifier : function(){
			return this.oauthverifier;
		}
		
};
