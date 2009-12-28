(function(){var y="http://schemas.xmlsoap.org/soap/",c=y+"envelope/",h='xmlns:SOAP-ENV="'+c+'"',q='SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"',f="urn:schemas-microsoft-com:",r=f+"xml-analysis",e='xmlns="'+r+'"',g=f+"xml-sql",z="http://www.w3.org/2001/XMLSchema",b=r+":rowset",a=window.ActiveXObject?true:false;function d(C){var E;if(a){E=new ActiveXObject("MSXML2.XMLHTTP.3.0")}else{E=new XMLHttpRequest()}E.open("POST",C.url,C.async);var B=false;var D=function(){B=true;switch(E.readyState){case 0:C.aborted(E);break;case 4:if(E.status===200){C.complete(E,"success")}else{C.error(E,E.status,null)}break}};E.onreadystatechange=D;E.setRequestHeader("Content-Type","text/xml");E.send(C.data);if(!C.async&&!B){D.call(E)}return E}function o(B){return typeof(B)==="undefined"}function A(B){return typeof(B)==="function"}function u(B){return typeof(B)==="string"}function w(B){return typeof(B)==="number"}function s(B){return typeof(B)==="object"}function l(B){return B.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var j=function(D,C,B){if(A(D.getElementsByTagNameNS)){return D.getElementsByTagNameNS(C,B)}else{return D.getElementsByTagName(B)}};var k=function(C,D,B){if(A(C.getAttributeNS)){return C.getAttributeNS(D,B)}else{return C.getAttribute(B)}};function p(B,G,E){var C="<"+B+">";if(E){var J;C+="<"+G+">";for(var I in E){if(E.hasOwnProperty(I)){J=E[I];C+="<"+I+">";if(typeof(J)==="array"){for(var H,D=0,F=J.length;D<F;D++){H=J[D];C+="<Value>"+l(H)+"</Value>"}}else{C+=l(J)}C+="</"+I+">"}}C+="</"+G+">"}C+="</"+B+">";return C}function x(B){var D="";var E=B.method;D+="<SOAP-ENV:Envelope "+h+" "+q+"><SOAP-ENV:Body><"+E+" "+e+" "+q+">";var C=null;switch(E){case Xmla.METHOD_DISCOVER:if(o(B.requestType)){C={name:"Missing request type",description:'Requests of the "Discover" method must specify a requestType.'}}else{D+="<"+Xmla.REQUESTTYPE+">"+B.requestType+"</"+Xmla.REQUESTTYPE+">"+p("Restrictions","RestrictionList",B.restrictions)+p("Properties","PropertyList",B.properties)}break;case Xmla.METHOD_EXECUTE:if(o(B.statement)){C={name:"Missing statement",description:'Requests of the "Execute" method must specify an MDX statement.'}}else{D+="<Command><Statement>"+B.statement+"</Statement></Command>"+p("Properties","PropertyList",B.properties)}break;default:C={name:"Invalid XMLA method",description:'The method must be either "Discover" or "Execute".'}}if(C!==null){throw C}D+="   </"+E+"></SOAP-ENV:Body></SOAP-ENV:Envelope>";return D}function t(C,D,B){if(D&&(!C)){C={}}for(var E in D){if(D.hasOwnProperty(E)){if(B||o(C[E])){C[E]=D[E]}}}return C}Xmla=function(B){this.listeners={};this.listeners[Xmla.EVENT_REQUEST]=[];this.listeners[Xmla.EVENT_SUCCESS]=[];this.listeners[Xmla.EVENT_ERROR]=[];this.listeners[Xmla.EVENT_DISCOVER]=[];this.listeners[Xmla.EVENT_DISCOVER_SUCCESS]=[];this.listeners[Xmla.EVENT_DISCOVER_ERROR]=[];this.listeners[Xmla.EVENT_EXECUTE]=[];this.listeners[Xmla.EVENT_EXECUTE_SUCCESS]=[];this.listeners[Xmla.EVENT_EXECUTE_ERROR]=[];this.options=t(t({},Xmla.defaultOptions,true),B,true)};Xmla.defaultOptions={requestTimeout:30000,async:false};Xmla.METHOD_DISCOVER="Discover";Xmla.METHOD_EXECUTE="Execute";Xmla.REQUESTTYPE="RequestType";var m="DISCOVER_";var i="MDSCHEMA_";var n="DBSCHEMA_";Xmla.DISCOVER_DATASOURCES=m+"DATASOURCES";Xmla.DISCOVER_PROPERTIES=m+"PROPERTIES";Xmla.DISCOVER_SCHEMA_ROWSETS=m+"SCHEMA_ROWSETS";Xmla.DISCOVER_ENUMERATORS=m+"ENUMERATORS";Xmla.DISCOVER_KEYWORDS=m+"KEYWORDS";Xmla.DISCOVER_LITERALS=m+"LITERALS";Xmla.DBSCHEMA_CATALOGS=n+"CATALOGS";Xmla.DBSCHEMA_COLUMNS=n+"COLUMNS";Xmla.DBSCHEMA_PROVIDER_TYPES=n+"PROVIDER_TYPES";Xmla.DBSCHEMA_SCHEMATA=n+"SCHEMATA";Xmla.DBSCHEMA_TABLES=n+"TABLES";Xmla.DBSCHEMA_TABLES_INFO=n+"TABLES_INFO";Xmla.MDSCHEMA_ACTIONS=i+"ACTIONS";Xmla.MDSCHEMA_CUBES=i+"CUBES";Xmla.MDSCHEMA_DIMENSIONS=i+"DIMENSIONS";Xmla.MDSCHEMA_FUNCTIONS=i+"FUNCTIONS";Xmla.MDSCHEMA_HIERARCHIES=i+"HIERARCHIES";Xmla.MDSCHEMA_LEVELS=i+"LEVELS";Xmla.MDSCHEMA_MEASURES=i+"MEASURES";Xmla.MDSCHEMA_MEMBERS=i+"MEMBERS";Xmla.MDSCHEMA_PROPERTIES=i+"PROPERTIES";Xmla.MDSCHEMA_SETS=i+"SETS";Xmla.EVENT_REQUEST="request";Xmla.EVENT_SUCCESS="success";Xmla.EVENT_ERROR="error";Xmla.EVENT_EXECUTE="execute";Xmla.EVENT_EXECUTE_SUCCESS="executesuccess";Xmla.EVENT_EXECUTE_ERROR="executeerror";Xmla.EVENT_DISCOVER="discover";Xmla.EVENT_DISCOVER_SUCCESS="discoversuccess";Xmla.EVENT_DISCOVER_ERROR="discovererror";Xmla.EVENT_GENERAL=[Xmla.EVENT_REQUEST,Xmla.EVENT_SUCCESS,Xmla.EVENT_ERROR];Xmla.EVENT_DISCOVER_ALL=[Xmla.EVENT_DISCOVER,Xmla.EVENT_DISCOVER_SUCCESS,Xmla.EVENT_DISCOVER_ERROR];Xmla.EVENT_EXECUTE_ALL=[Xmla.EVENT_EXECUTE,Xmla.EVENT_EXECUTE_SUCCESS,Xmla.EVENT_EXECUTE_ERROR];Xmla.EVENT_ALL=[].concat(Xmla.EVENT_GENERAL,Xmla.EVENT_DISCOVER_ALL,Xmla.EVENT_EXECUTE_ALL);Xmla.PROP_DATASOURCEINFO="DataSourceInfo";Xmla.PROP_CATALOG="Catalog";Xmla.PROP_CUBE="Cube";Xmla.PROP_CONTENT="Content";Xmla.PROP_CONTENT_SCHEMA="Schema";Xmla.PROP_CONTENT_DATA="Data";Xmla.PROP_CONTENT_SCHEMADATA="SchemaData";Xmla.PROP_FORMAT="Format";Xmla.PROP_FORMAT_TABULAR="Tabular";Xmla.PROP_FORMAT_MULTIDIMENSIONAL="Multidimensional";Xmla.PROP_AXISFORMAT="AxisFormat";Xmla.PROP_AXISFORMAT_TUPLE="TupleFormat";Xmla.PROP_AXISFORMAT_CLUSTER="ClusterFormat";Xmla.PROP_AXISFORMAT_CUSTOM="CustomFormat";Xmla.prototype={listeners:null,setOptions:function(B){t(this.options,B,true)},addListener:function(G){var E=G.events;if(o(E)){throw"No events specified"}if(u(E)){if(E==="all"){E=Xmla.EVENT_ALL}else{E=E.split(",")}}if(!(E instanceof Array)){throw'Property "events" must be comma separated list string or array.'}var D=E.length;var B,F;for(var C=0;C<D;C++){B=E[C].replace(/\s+/g,"");F=this.listeners[B];if(!F){throw'Event "'+B+'" is not defined.'}if(A(G.handler)){if(!s(G.scope)){G.scope=window}F.push(G)}else{throw"Invalid listener: handler is not a function"}}},_fireEvent:function(G,J,C){var H=this.listeners[G];if(!H){throw'Event "'+G+'" is not defined.'}var F=H.length;var B=true;if(F){var D,I;for(var E=0;E<F;E++){D=H[E];I=D.handler.call(D.scope,G,J,this);if(C&&I===false){B=false;break}}}else{if(G==="error"){throw J}}return B},request:function(C){var D=this;var E=x(C);C.soapMessage=E;var F;var B={async:o(C.async)?this.options.async:C.async,timeout:this.options.requestTimeout,contentType:"text/xml",data:E,dataType:"xml",error:function(I,H,G){D._requestError({xmla:D,request:C,xhr:I,error:{errorCategory:"xhrError",errorString:H,errorObject:G}})},complete:function(G,H){if(H==="success"){D._requestSuccess({xmla:D,request:C,xhr:G,status:status})}},url:o(C.url)?this.options.url:C.url,type:"POST"};if(C.username){B.username=C.username}if(C.password){B.password=C.password}this.response=null;if(this._fireEvent(Xmla.EVENT_REQUEST,C,true)&&((C.method==Xmla.METHOD_DISCOVER&&this._fireEvent(Xmla.EVENT_DISCOVER,C))||(C.method==Xmla.METHOD_EXECUTE&&this._fireEvent(Xmla.EVENT_EXECUTE,C)))){F=d(B)}return this.response},_requestError:function(B){B.xmla=this;this._fireEvent("error",B)},_requestSuccess:function(H){var L=H.xhr;this.responseXML=L.responseXML;this.responseText=L.responseText;var G=H.request;var B=G.method;var D=j(this.responseXML,c,"Fault");if(D.length){D=D.item(0);var I=D.getElementsByTagName("faultcode").item(0).childNodes.item(0).data;var E=D.getElementsByTagName("faultstring").item(0).childNodes.item(0).data;var F={errorCategory:"soapFault",faultCode:I,faultString:E};H.error=F;switch(B){case Xmla.METHOD_DISCOVER:this._fireEvent(Xmla.EVENT_DISCOVER_ERROR,H);break;case Xmla.METHOD_EXECUTE:this._fireEvent(Xmla.EVENT_EXECUTE_ERROR,H);break}this._fireEvent(Xmla.EVENT_ERROR,H)}else{switch(B){case Xmla.METHOD_DISCOVER:var C=new Xmla.Rowset(this.responseXML);H.rowset=C;this.response=C;this._fireEvent(Xmla.EVENT_DISCOVER_SUCCESS,H);break;case Xmla.METHOD_EXECUTE:var J;var K=G.properties[Xmla.PROP_FORMAT];switch(K){case Xmla.PROP_FORMAT_TABULAR:break;case Xmla.PROP_FORMAT_MULTIDIMENSIONAL:break}H.resultset=J;this.response=J;this._fireEvent(Xmla.EVENT_EXECUTE_SUCCESS,H);break}this._fireEvent(Xmla.EVENT_SUCCESS,H)}},execute:function(B){var C=B.properties;if(o(C)){C={};B.properties=C}if(o(B.properties[Xmla.PROP_FORMAT])){B.properties[Xmla.PROP_FORMAT]=Xmla.PROP_FORMAT_MULTIDIMENSIONAL}var D=t(B,{method:Xmla.METHOD_EXECUTE},true);return this.request(D)},discover:function(B){var C=t(B,{method:Xmla.METHOD_DISCOVER},true);return this.request(C)},discoverDataSources:function(B){var C=t(B,{requestType:Xmla.DISCOVER_DATASOURCES},true);return this.discover(C)},discoverProperties:function(B){var C=t(B,{requestType:Xmla.DISCOVER_PROPERTIES},true);return this.discover(C)},discoverSchemaRowsets:function(B){var C=t(B,{requestType:Xmla.DISCOVER_SCHEMA_ROWSETS},true);return this.discover(C)},discoverEnumerators:function(B){var C=t(B,{requestType:Xmla.DISCOVER_ENUMERATORS},true);return this.discover(C)},discoverKeywords:function(B){var C=t(B,{requestType:Xmla.DISCOVER_KEYWORDS},true);return this.discover(C)},discoverLiterals:function(B){var C=t(B,{requestType:Xmla.DISCOVER_LITERALS},true);return this.discover(C)},discoverDBCatalogs:function(B){var C=t(B,{requestType:Xmla.DBSCHEMA_CATALOGS},true);return this.discover(C)},discoverDBColumns:function(B){var C=t(B,{requestType:Xmla.DBSCHEMA_COLUMNS},true);return this.discover(C)},discoverDBProviderTypes:function(B){var C=t(B,{requestType:Xmla.DBSCHEMA_PROVIDER_TYPES},true);return this.discover(C)},discoverDBSchemata:function(B){var C=t(B,{requestType:Xmla.DBSCHEMA_SCHEMATA},true);return this.discover(C)},discoverDBTables:function(B){var C=t(B,{requestType:Xmla.DBSCHEMA_TABLES},true);return this.discover(C)},discoverDBTablesInfo:function(B){var C=t(B,{requestType:Xmla.DBSCHEMA_TABLES_INFO},true);return this.discover(C)},discoverMDActions:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_ACTIONS},true);return this.discover(C)},discoverMDCubes:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_CUBES},true);return this.discover(C)},discoverMDDimensions:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_DIMENSIONS},true);return this.discover(C)},discoverMDFunctions:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_FUNCTIONS},true);return this.discover(C)},discoverMDHierarchies:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_HIERARCHIES},true);return this.discover(C)},discoverMDLevels:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_LEVELS},true);return this.discover(C)},discoverMDMeasures:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_MEASURES},true);return this.discover(C)},discoverMDMembers:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_MEMBERS},true);return this.discover(C)},discoverMDProperties:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_PROPERTIES},true);return this.discover(C)},discoverMDSets:function(B){var C=t(B,{requestType:Xmla.MDSCHEMA_SETS},true);return this.discover(C)}};function v(F){var C=j(F,z,"complexType"),E=C.length,D,B;for(B=0;B<E;B++){D=C.item(B);if(D.getAttribute("name")==="row"){return D}}return null}Xmla.Rowset=function(C){this.rows=j(C,b,"row");this.numRows=this.rows?this.rows.length:0;this.rowIndex=0;this.row=(this.hasMoreRows())?this.rows.item(this.rowIndex):null;this.fieldOrder=[];this.fields={};this._fieldCount=0;var H=v(C);if(H){var M=j(H,z,"sequence").item(0);var E=M.childNodes;var G=E.length;var K,B,L,I,D,J;for(var F=0;F<G;F++){K=E.item(F);if(K.nodeType!=1){continue}B=k(K,g,"field");L=K.getAttribute("name");J=K.getAttribute("type");I=K.getAttribute("minOccurs");D=K.getAttribute("maxOccurs");this.fields[B]={name:L,label:B,index:this._fieldCount++,type:J,minOccurs:o(I)?1:I,maxOccurs:o(D)?1:(D==="unbounded"?Infinity:D),getter:this._createFieldGetter(L,J,I,D)};this.fieldOrder.push(B)}}else{throw"Couldn't parse XML schema while constructing resultset"}};Xmla.Rowset.FETCH_ARRAY=1;Xmla.Rowset.FETCH_OBJECT=2;Xmla.Rowset.prototype={node:null,_boolConverter:function(B){return B==="true"?true:false},_intConverter:function(B){return parseInt(B,10)},_floatConverter:function(B){return parseFloat(B,10)},_textConverter:function(B){return B},_arrayConverter:function(D,C){var B=[],F=D.length,G;for(var E=0;E<F;E++){G=D.item(E);B.push(G.tagName)}return B},_elementText:function(C){var F="",E=C.childNodes,D=E.length;for(var B=0;B<D;B++){F+=E.item(B).data}return F},_createFieldGetter:function(H,E,G,D){if(G===null){G="1"}if(D===null){D="1"}var F=this;var C=null;switch(E){case"xsd:boolean":C=F._boolConverter;break;case"xsd:decimal":case"xsd:double":case"xsd:float":C=F._floatConverter;break;case"xsd:int":case"xsd:integer":case"xsd:nonPositiveInteger":case"xsd:negativeInteger":case"xsd:nonNegativeInteger":case"xsd:positiveInteger":case"xsd:short":case"xsd:byte":case"xsd:long":case"xsd:unsignedLong":case"xsd:unsignedInt":case"xsd:unsignedShort":case"xsd:unsignedByte":C=F._intConverter;break;case"xsd:string":C=F._textConverter;break;default:C=F._textConverter;break}var B;if(G==="1"&&D==="1"){B=function(){var I=j(this.row,b,H);return C(F._elementText(I.item(0)))}}else{if(G==="0"&&D==="1"){B=function(){var I=j(this.row,b,H);if(!I.length){return null}else{return C(F._elementText(I.item(0)))}}}else{if(G==="1"&&(D==="unbounded"||parseInt(D,10)>1)){B=function(){var I=j(this.row,b,H);return F._arrayConverter(I,C)}}else{if(G==="0"&&(D==="unbounded"||parseInt(D,10)>1)){B=function(){var I=j(this.row,b,H);if(!I.length){return null}else{return F._arrayConverter(I,C)}}}}}}return B},getFields:function(){var E=[],D=this._fieldCount,B=this.fieldOrder;for(var C=0;C<D;C++){E[C]=this.fieldDef(B[C])}return E},hasMoreRows:function(){return this.numRows>this.rowIndex},next:function(){this.row=this.rows.item(++this.rowIndex)},fieldDef:function(B){var C=this.fields[B];if(o(C)){throw'No such field: "'+B+'"'}return C},fieldIndex:function(B){var C=this.fieldDef(B);return C.index},fieldName:function(B){return this.fieldOrder[B]},fieldVal:function(B){if(w(B)){B=this.fieldName(B)}var C=this.fieldDef(B);return C.getter.call(this)},fieldCount:function(){return this._fieldCount},close:function(){this.row=null},fetchAsArray:function(){var E,B,D,C;if(this.hasMoreRows()){B=this.fields;E=[];for(D in B){if(B.hasOwnProperty(D)){C=B[D];E[C.index]=C.getter.call(this)}}this.next()}else{E=false}return E},fetchAsObject:function(){var C,B,E,D;if(this.hasMoreRows()){B=this.fields;C={};for(E in B){if(B.hasOwnProperty(E)){D=B[E];C[E]=D.getter.call(this)}}this.next()}else{C=false}return C},fetchAllAsArray:function(){var C,B=[];while((C=this.fetchAsArray())){B.push(C)}return B},fetchAllAsObject:function(){var C,B=[];while((C=this.fetchAsObject())){B.push(C)}return B}}}());