/*

	IBM-BPM-jsonUtil.js
	
	https://github.com/NithinBiliya/IBMBPM_JSON-js
	
	Nithin Biliya
	31/01/2017
	
	This file creates a global IBMBPM_JSON object containing one method: stringify - to convert IBM BPM objects into JSON strings.
	
	Currently features -
	1. IBMBPM_JSON.stringify(bpmObj) - returns string
		This function converts IBM BPM object (bpmObj) to JSON string
	
	Future roadmap -
	1. IBMBPM_JSON.parse(jsonStr) - return bpmObj
		This function converts JSON string to IBM BPM object (bpmObj)
		
	Known Bugs -
	1. IBMBPM_JSON.stringify() - Adds "," (comma) at the end of the string

*/

// Create a IBMBPM_JSON object only if one does not already exist

if (typeof IBMBPM_JSON !== "object") {
    IBMBPM_JSON = {};
}

(function () {
    "use strict";

	// If the IBMBPM_JSON object does not yet have a stringify method, give it one.
    if (typeof IBMBPM_JSON.stringify !== "function") {
        IBMBPM_JSON.stringify = function (twObject) {
			var jsonString="";
			if (typeof twObject =='object' && twObject!=null) {
				if (twObject.listLength>0) {
					jsonString+="[";
					for (var j=0; j<twObject.listLength; j++) {
						if (typeof twObject[j]!='string')
							jsonString+="{";
						for (var property in twObject[j].propertyNames) {
							var name = twObject[j].propertyNames[property];
							if (typeof twObject[j][name]=='object') {
								if (Object.prototype.toString.call(twObject[j][name]).indexOf("TWDate")!="-1") {
									jsonString+="\""+name+"\":\""+twObject[j][name].format("yyyy-MM-dd'T'HH:mm:ss'Z'")+"\",";
								} else {
									jsonString+="\""+name+"\":"+createJson(twObject[j][name]);
								}
							}
							else {
								jsonString+="\""+name+"\":\""+twObject[j][name]+"\",";
							}
							if (twObject[j].listLength>0) {
								for (var k=0;k<twObject[j].listLength;k++) {
									jsonString+="\""+ twObject[j][k]+"\",";
								}
							}
						}
						if (typeof twObject[j] == 'string') {
							jsonString+="\""+twObject[j]+"\"";
						}
						if (typeof twObject[j]!='string')
							jsonString+="}";
						if (j!=twObject.listLength-1) {
							jsonString+=",";
						}
					}
					jsonString+="],";
				}
				else {
					try {
						if (twObject.propertyNames.length>0) {
							jsonString+="{";
							for (var property in twObject.propertyNames) {
								var name = twObject.propertyNames[property];
								if (typeof twObject[name]=='object') {
									if (Object.prototype.toString.call(twObject[name]).indexOf("TWDate")!="-1") {
										jsonString+="\""+name+"\":\""+twObject[name].format("yyyy-MM-dd'T'HH:mm:ss'Z'")+"\",";
									} else {
										jsonString+="\""+name+"\":"+createJson(twObject[name]);
									}

								} else {
									jsonString+="\""+name+"\":\""+twObject[name]+"\",";
								}
							}
							jsonString+="},";                }
						else {
							return "{},";
						}            } catch (e) {
						return "{},";
					}
				}
			}
			else if (typeof twObject =='object' && twObject==null) {
				return "{},";
			}
			return jsonString;		
        };
    }

// If the IBMBPM_JSON object does not yet have a parse method, give it one. --> Need to write the function
/*
    if (typeof IBMBPM_JSON.parse !== "function") {
        IBMBPM_JSON.parse = function (jsonStr) {

        };
    }
*/

}());
