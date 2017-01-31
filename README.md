# IBMBPM_JSON-js
JSON utility for IBM BPM

## IBM-BPM-jsonUtil.js

https://github.com/NithinBiliya/IBMBPM_JSON-js

###### Nithin Biliya
###### 31/01/2017

This file creates a global IBMBPM_JSON object containing one method: stringify - to convert IBM BPM objects into JSON strings.

Currently features -
1. IBMBPM_JSON.stringify(bpmObj) - returns string
	This function converts IBM BPM object (bpmObj) to JSON string

Future roadmap -
1. IBMBPM_JSON.parse(jsonStr) - return bpmObj
	This function converts JSON string to IBM BPM object (bpmObj)

Known Bugs -
1. IBMBPM_JSON.stringify() - Adds "," (comma) at the end of the string


## Usage

BPM object -
Private>requestFilenetInput
	> sourceDocumentClass (String)
	> targetDocumentClass (String)
	> compareSearchQuery (String)
	> reindexSearchQuery (String)
	> keyValue (String)
	> flag (String)

Convertion code -
	
	jsonStr=IBMBPM_JSON.stringify(tw.local.requestFilenetInput);

Output - jsonStr will contain -
	
	{"flag":"11","keyValue":"43215678","reindexSearchQuery":"([PROPNUM]='43215678')","compareSearchQuery":"([PROPNUM]='43215678' AND [MAINDOC]='PROPOSAL')","targetDocumentClass":"POLICYINFO","sourceDocumentClass":"POLICYINFOTMP",},
