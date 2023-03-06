function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "InputHPFilter"};
	this.sidHashMap["InputHPFilter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "InputHPFilter:11"};
	this.sidHashMap["InputHPFilter:11"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/InputHP"] = {sid: "InputHPFilter:1"};
	this.sidHashMap["InputHPFilter:1"] = {rtwname: "<Root>/InputHP"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "InputHPFilter:3"};
	this.sidHashMap["InputHPFilter:3"] = {rtwname: "<Root>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
