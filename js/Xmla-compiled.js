(function(){var t="http://schemas.xmlsoap.org/soap/",u=t+"envelope/",m="SOAP-ENV",C="xmlns:"+m+'="'+u+'"',v=m+':encodingStyle="'+t+'encoding/"',w="urn:schemas-microsoft-com:",x=w+"xml-analysis",D='xmlns="'+x+'"',E="sql",F=w+"xml-sql",y="xsd",z="http://www.w3.org/2001/XMLSchema",p=x+":rowset",G=window.ActiveXObject?true:false;function H(a){var b;b=G?new ActiveXObject("MSXML2.XMLHTTP.3.0"):new XMLHttpRequest;b.open("POST",a.url,a.async);var d=false;function c(){d=true;switch(b.readyState){case 0:a.aborted(b);
break;case 4:b.status===200?a.complete(b,"success"):a.error(b,b.status,null);break}}b.onreadystatechange=c;b.setRequestHeader("Content-Type","text/xml");b.send(a.data);!a.async&&!d&&c.call(b);return b}function j(a){return typeof a==="undefined"}function r(a){return typeof a==="function"}function I(a){return typeof a==="string"}function J(a){return typeof a==="number"}function K(a){return typeof a==="object"}function A(a){return a.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l(a,
b,d,c){return r(a.getElementsByTagNameNS)?a.getElementsByTagNameNS(b,c):d?a.getElementsByTagName(d+":"+c):a.getElementsByTagName(c)}function L(a,b,d,c){return r(a.getAttributeNS)?a.getAttributeNS(b,c):d?a.getAttribute(d+":"+c):a.getAttribute(c)}function s(a,b,d){var c="<"+a+">";if(d){var e;c+="<"+b+">";for(var f in d)if(d.hasOwnProperty(f)){e=d[f];c+="<"+f+">";if(typeof e==="array")for(var i,h=0,q=e.length;h<q;h++){i=e[h];c+="<Value>"+A(i)+"</Value>"}else c+=A(e);c+="</"+f+">"}c+="</"+b+">"}c+="</"+
a+">";return c}function M(a){var b="",d=a.method;b+="<"+m+":Envelope "+C+" "+v+"><"+m+":Body><"+d+" "+D+" "+v+">";var c=null;switch(d){case Xmla.METHOD_DISCOVER:if(j(a.requestType))c={name:"Missing request type",description:'Requests of the "Discover" method must specify a requestType.'};else b+="<"+B+">"+a.requestType+"</"+B+">"+s("Restrictions","RestrictionList",a.restrictions)+s("Properties","PropertyList",a.properties);break;case Xmla.METHOD_EXECUTE:if(j(a.statement))c={name:"Missing statement",
description:'Requests of the "Execute" method must specify an MDX statement.'};else b+="<Command><Statement>"+a.statement+"</Statement></Command>"+s("Properties","PropertyList",a.properties);break;default:c={name:"Invalid XMLA method",description:'The method must be either "Discover" or "Execute".'}}if(c!==null)throw c;b+="   </"+d+"></"+m+":Body></"+m+":Envelope>";return b}function g(a,b,d){if(b&&!a)a={};for(var c in b)if(b.hasOwnProperty(c))if(d||j(a[c]))a[c]=b[c];return a}Xmla=function(a){this.listeners=
{};this.listeners[Xmla.EVENT_REQUEST]=[];this.listeners[Xmla.EVENT_SUCCESS]=[];this.listeners[Xmla.EVENT_ERROR]=[];this.listeners[Xmla.EVENT_DISCOVER]=[];this.listeners[Xmla.EVENT_DISCOVER_SUCCESS]=[];this.listeners[Xmla.EVENT_DISCOVER_ERROR]=[];this.listeners[Xmla.EVENT_EXECUTE]=[];this.listeners[Xmla.EVENT_EXECUTE_SUCCESS]=[];this.listeners[Xmla.EVENT_EXECUTE_ERROR]=[];this.options=g(g({},Xmla.defaultOptions,true),a,true)};Xmla.defaultOptions={requestTimeout:30000,async:false};Xmla.METHOD_DISCOVER=
"Discover";Xmla.METHOD_EXECUTE="Execute";var B="RequestType",n="DISCOVER_",k="MDSCHEMA_",o="DBSCHEMA_";Xmla.DISCOVER_DATASOURCES=n+"DATASOURCES";Xmla.DISCOVER_PROPERTIES=n+"PROPERTIES";Xmla.DISCOVER_SCHEMA_ROWSETS=n+"SCHEMA_ROWSETS";Xmla.DISCOVER_ENUMERATORS=n+"ENUMERATORS";Xmla.DISCOVER_KEYWORDS=n+"KEYWORDS";Xmla.DISCOVER_LITERALS=n+"LITERALS";Xmla.DBSCHEMA_CATALOGS=o+"CATALOGS";Xmla.DBSCHEMA_COLUMNS=o+"COLUMNS";Xmla.DBSCHEMA_PROVIDER_TYPES=o+"PROVIDER_TYPES";Xmla.DBSCHEMA_SCHEMATA=o+"SCHEMATA";
Xmla.DBSCHEMA_TABLES=o+"TABLES";Xmla.DBSCHEMA_TABLES_INFO=o+"TABLES_INFO";Xmla.MDSCHEMA_ACTIONS=k+"ACTIONS";Xmla.MDSCHEMA_CUBES=k+"CUBES";Xmla.MDSCHEMA_DIMENSIONS=k+"DIMENSIONS";Xmla.MDSCHEMA_FUNCTIONS=k+"FUNCTIONS";Xmla.MDSCHEMA_HIERARCHIES=k+"HIERARCHIES";Xmla.MDSCHEMA_LEVELS=k+"LEVELS";Xmla.MDSCHEMA_MEASURES=k+"MEASURES";Xmla.MDSCHEMA_MEMBERS=k+"MEMBERS";Xmla.MDSCHEMA_PROPERTIES=k+"PROPERTIES";Xmla.MDSCHEMA_SETS=k+"SETS";Xmla.EVENT_REQUEST="request";Xmla.EVENT_SUCCESS="success";Xmla.EVENT_ERROR=
"error";Xmla.EVENT_EXECUTE="execute";Xmla.EVENT_EXECUTE_SUCCESS="executesuccess";Xmla.EVENT_EXECUTE_ERROR="executeerror";Xmla.EVENT_DISCOVER="discover";Xmla.EVENT_DISCOVER_SUCCESS="discoversuccess";Xmla.EVENT_DISCOVER_ERROR="discovererror";Xmla.EVENT_GENERAL=[Xmla.EVENT_REQUEST,Xmla.EVENT_SUCCESS,Xmla.EVENT_ERROR];Xmla.EVENT_DISCOVER_ALL=[Xmla.EVENT_DISCOVER,Xmla.EVENT_DISCOVER_SUCCESS,Xmla.EVENT_DISCOVER_ERROR];Xmla.EVENT_EXECUTE_ALL=[Xmla.EVENT_EXECUTE,Xmla.EVENT_EXECUTE_SUCCESS,Xmla.EVENT_EXECUTE_ERROR];
Xmla.EVENT_ALL=[].concat(Xmla.EVENT_GENERAL,Xmla.EVENT_DISCOVER_ALL,Xmla.EVENT_EXECUTE_ALL);Xmla.PROP_DATASOURCEINFO="DataSourceInfo";Xmla.PROP_CATALOG="Catalog";Xmla.PROP_CUBE="Cube";Xmla.PROP_FORMAT="Format";Xmla.PROP_FORMAT_TABULAR="Tabular";Xmla.PROP_FORMAT_MULTIDIMENSIONAL="Multidimensional";Xmla.PROP_AXISFORMAT="AxisFormat";Xmla.PROP_AXISFORMAT_TUPLE="TupleFormat";Xmla.PROP_AXISFORMAT_CLUSTER="ClusterFormat";Xmla.PROP_AXISFORMAT_CUSTOM="CustomFormat";Xmla.PROP_CONTENT="Content";Xmla.PROP_CONTENT_DATA=
"Data";Xmla.PROP_CONTENT_NONE="None";Xmla.PROP_CONTENT_SCHEMA="Schema";Xmla.PROP_CONTENT_SCHEMADATA="SchemaData";Xmla.prototype={listeners:null,response:null,responseText:null,responseXml:null,setOptions:function(a){g(this.options,a,true)},addListener:function(a){var b=a.events;if(j(b))throw"No events specified";if(I(b))b=b==="all"?Xmla.EVENT_ALL:b.split(",");if(!(b instanceof Array))throw'Property "events" must be comma separated list string or array.';for(var d=b.length,c,e,f=0;f<d;f++){c=b[f].replace(/\s+/g,
"");e=this.listeners[c];if(!e)throw'Event "'+c+'" is not defined.';if(r(a.handler)){if(!K(a.scope))a.scope=window;e.push(a)}else throw"Invalid listener: handler is not a function";}},_fireEvent:function(a,b,d){var c=this.listeners[a];if(!c)throw'Event "'+a+'" is not defined.';var e=c.length,f=true;if(e)for(var i,h=0;h<e;h++){i=c[h];i=i.handler.call(i.scope,a,b,this);if(d&&i===false){f=false;break}}else if(a==="error")throw b;return f},request:function(a){var b=this,d=M(a);a.soapMessage=d;d={async:j(a.async)?
this.options.async:a.async,timeout:this.options.requestTimeout,contentType:"text/xml",data:d,dataType:"xml",error:function(c,e,f){b._requestError({xmla:b,request:a,xhr:c,error:{errorCategory:"xhrError",errorString:e,errorObject:f}})},complete:function(c,e){e==="success"&&b._requestSuccess({xmla:b,request:a,xhr:c,status:status})},url:j(a.url)?this.options.url:a.url,type:"POST"};if(a.username)d.username=a.username;if(a.password)d.password=a.password;this.response&&this.response.close();this.responseXml=
this.responseText=this.response=null;if(this._fireEvent(Xmla.EVENT_REQUEST,a,true)&&(a.method==Xmla.METHOD_DISCOVER&&this._fireEvent(Xmla.EVENT_DISCOVER,a)||a.method==Xmla.METHOD_EXECUTE&&this._fireEvent(Xmla.EVENT_EXECUTE,a)))d=H(d);return this.response},_requestError:function(a){a.xmla=this;this._fireEvent("error",a)},_requestSuccess:function(a){var b=a.xhr;this.responseXML=b.responseXML;this.responseText=b.responseText;var d=a.request;b=d.method;var c=l(this.responseXML,u,m,"Fault");if(c.length){c=
c.item(0);var e=c.getElementsByTagName("faultcode").item(0).childNodes.item(0).data;c=c.getElementsByTagName("faultstring").item(0).childNodes.item(0).data;e={errorCategory:"soapFault",faultCode:e,faultString:c};a.error=e;switch(b){case Xmla.METHOD_DISCOVER:this._fireEvent(Xmla.EVENT_DISCOVER_ERROR,a);break;case Xmla.METHOD_EXECUTE:this._fireEvent(Xmla.EVENT_EXECUTE_ERROR,a);break}this._fireEvent(Xmla.EVENT_ERROR,a)}else{switch(b){case Xmla.METHOD_DISCOVER:b=new Xmla.Rowset(this.responseXML,d.requestType);
this.response=a.rowset=b;this._fireEvent(Xmla.EVENT_DISCOVER_SUCCESS,a);break;case Xmla.METHOD_EXECUTE:b=d.properties[Xmla.PROP_FORMAT];switch(b){case Xmla.PROP_FORMAT_TABULAR:break;case Xmla.PROP_FORMAT_MULTIDIMENSIONAL:break}this.response=a.resultset=e;this._fireEvent(Xmla.EVENT_EXECUTE_SUCCESS,a);break}this._fireEvent(Xmla.EVENT_SUCCESS,a)}},execute:function(a){var b=a.properties;if(j(b)){b={};a.properties=b}if(j(b[Xmla.PROP_CONTENT]))b[Xmla.PROP_CONTENT]=Xmla.PROP_CONTENT_SCHEMADATA;if(j(b[Xmla.PROP_FORMAT]))a.properties[Xmla.PROP_FORMAT]=
Xmla.PROP_FORMAT_MULTIDIMENSIONAL;a=g(a,{method:Xmla.METHOD_EXECUTE},true);return this.request(a)},discover:function(a){a=g(a,{method:Xmla.METHOD_DISCOVER},true);return this.request(a)},discoverDataSources:function(a){a=g(a,{requestType:Xmla.DISCOVER_DATASOURCES},true);return this.discover(a)},discoverProperties:function(a){a=g(a,{requestType:Xmla.DISCOVER_PROPERTIES},true);return this.discover(a)},discoverSchemaRowsets:function(a){a=g(a,{requestType:Xmla.DISCOVER_SCHEMA_ROWSETS},true);return this.discover(a)},
discoverEnumerators:function(a){a=g(a,{requestType:Xmla.DISCOVER_ENUMERATORS},true);return this.discover(a)},discoverKeywords:function(a){a=g(a,{requestType:Xmla.DISCOVER_KEYWORDS},true);return this.discover(a)},discoverLiterals:function(a){a=g(a,{requestType:Xmla.DISCOVER_LITERALS},true);return this.discover(a)},discoverDBCatalogs:function(a){a=g(a,{requestType:Xmla.DBSCHEMA_CATALOGS},true);return this.discover(a)},discoverDBColumns:function(a){a=g(a,{requestType:Xmla.DBSCHEMA_COLUMNS},true);return this.discover(a)},
discoverDBProviderTypes:function(a){a=g(a,{requestType:Xmla.DBSCHEMA_PROVIDER_TYPES},true);return this.discover(a)},discoverDBSchemata:function(a){a=g(a,{requestType:Xmla.DBSCHEMA_SCHEMATA},true);return this.discover(a)},discoverDBTables:function(a){a=g(a,{requestType:Xmla.DBSCHEMA_TABLES},true);return this.discover(a)},discoverDBTablesInfo:function(a){a=g(a,{requestType:Xmla.DBSCHEMA_TABLES_INFO},true);return this.discover(a)},discoverMDActions:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_ACTIONS},
true);return this.discover(a)},discoverMDCubes:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_CUBES},true);return this.discover(a)},discoverMDDimensions:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_DIMENSIONS},true);return this.discover(a)},discoverMDFunctions:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_FUNCTIONS},true);return this.discover(a)},discoverMDHierarchies:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_HIERARCHIES},true);return this.discover(a)},discoverMDLevels:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_LEVELS},
true);return this.discover(a)},discoverMDMeasures:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_MEASURES},true);return this.discover(a)},discoverMDMembers:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_MEMBERS},true);return this.discover(a)},discoverMDProperties:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_PROPERTIES},true);return this.discover(a)},discoverMDSets:function(a){a=g(a,{requestType:Xmla.MDSCHEMA_SETS},true);return this.discover(a)}};function N(a){a=l(a,z,y,"complexType");var b=a.length,d,
c;for(c=0;c<b;c++){d=a.item(c);if(d.getAttribute("name")==="row")return d}return null}Xmla.Rowset=function(a,b){this.numRows=(this.rows=l(a,p,null,"row"))?this.rows.length:0;this.rowIndex=0;this.row=this.hasMoreRows()?this.rows.item(this.rowIndex):null;this.fieldOrder=[];this.fields={};this._fieldCount=0;if(a=N(a)){a=l(a,z,y,"sequence").item(0);a=a.childNodes;for(var d=a.length,c,e,f,i,h,q=0;q<d;q++){c=a.item(q);if(c.nodeType==1){e=L(c,F,E,"field");f=c.getAttribute("name");h=c.getAttribute("type");
if(!h&&b==Xmla.DISCOVER_SCHEMA_ROWSETS&&f=="Restrictions")h="Restrictions";i=c.getAttribute("minOccurs");c=c.getAttribute("maxOccurs");this.fields[e]={name:f,label:e,index:this._fieldCount++,type:h,minOccurs:j(i)?1:i,maxOccurs:j(c)?1:c==="unbounded"?Infinity:c,getter:this._createFieldGetter(f,h,i,c)};this.fieldOrder.push(e)}}}else throw"Couldn't parse XML schema while constructing resultset";};Xmla.Rowset.prototype={_boolConverter:function(a){return a==="true"?true:false},_intConverter:function(a){return parseInt(a,
10)},_floatConverter:function(a){return parseFloat(a,10)},_textConverter:function(a){return a},_restrictionsConverter:function(a){return a},_arrayConverter:function(a,b){for(var d=[],c=a.length,e,f=0;f<c;f++){e=a.item(f);d.push(b(this._elementText(e)))}return d},_elementText:function(a){if(a.innerText)return a.innerText;else if(a.textContent)return a.textContent;else{var b="";a=a.childNodes;for(var d=a.length,c=0;c<d;c++)b+=a.item(c).data;return b}},_createFieldGetter:function(a,b,d,c){if(d===null)d=
"1";if(c===null)c="1";var e=this,f=null;switch(b){case "xsd:boolean":f=e._boolConverter;break;case "xsd:decimal":case "xsd:double":case "xsd:float":f=e._floatConverter;break;case "xsd:int":case "xsd:integer":case "xsd:nonPositiveInteger":case "xsd:negativeInteger":case "xsd:nonNegativeInteger":case "xsd:positiveInteger":case "xsd:short":case "xsd:byte":case "xsd:long":case "xsd:unsignedLong":case "xsd:unsignedInt":case "xsd:unsignedShort":case "xsd:unsignedByte":f=e._intConverter;break;case "xsd:string":f=
e._textConverter;break;case "Restrictions":f=e._restrictionsConverter;break;default:f=e._textConverter;break}var i;if(c==="1")if(d==="1")i=function(){var h=l(this.row,p,null,a);return f(e._elementText(h.item(0)))};else{if(d==="0")i=function(){var h=l(this.row,p,null,a);return h.length?f(e._elementText(h.item(0))):null}}else if(d==="1")i=function(){var h=l(this.row,p,null,a);return e._arrayConverter(h,f)};else if(d==="0")i=function(){var h=l(this.row,p,null,a);return h.length?e._arrayConverter(h,f):
null};return i},getFields:function(){for(var a=[],b=this._fieldCount,d=this.fieldOrder,c=0;c<b;c++)a[c]=this.fieldDef(d[c]);return a},hasMoreRows:function(){return this.numRows>this.rowIndex},next:function(){this.row=this.rows.item(++this.rowIndex)},fieldDef:function(a){var b=this.fields[a];if(j(b))throw'No such field: "'+a+'"';return b},fieldIndex:function(a){a=this.fieldDef(a);return a.index},fieldName:function(a){return this.fieldOrder[a]},fieldVal:function(a){if(J(a))a=this.fieldName(a);a=this.fieldDef(a);
return a.getter.call(this)},fieldCount:function(){return this._fieldCount},close:function(){this.rows=this.row=null},fetchAsArray:function(){var a,b,d,c;if(this.hasMoreRows()){b=this.fields;a=[];for(d in b)if(b.hasOwnProperty(d)){c=b[d];a[c.index]=c.getter.call(this)}this.next()}else a=false;return a},fetchAsObject:function(){var a,b,d,c;if(this.hasMoreRows()){b=this.fields;a={};for(d in b)if(b.hasOwnProperty(d)){c=b[d];a[d]=c.getter.call(this)}this.next()}else a=false;return a},fetchAllAsArray:function(){for(var a,
b=[];a=this.fetchAsArray();)b.push(a);return b},fetchAllAsObject:function(){for(var a,b=[];a=this.fetchAsObject();)b.push(a);return b}}})();
