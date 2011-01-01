var Xmla;(function(){var y="http://schemas.xmlsoap.org/soap/",P=y+"envelope/",M="SOAP-ENV",z="xmlns:"+M+'="'+P+'"',j=M+':encodingStyle="'+y+'encoding/"',h="urn:schemas-microsoft-com:",g=h+"xml-analysis",A='xmlns="'+g+'"',i="sql",d=h+"xml-sql",o="http://www.w3.org/2001/XMLSchema",s="xsd",N="http://www.w3.org/2001/XMLSchema-instance",K="xsi",u=g+":rowset",O=g+":mddataset",r=window.ActiveXObject?true:false;function C(R){var T,Q=false,S=function(){Q=true;switch(T.readyState){case 0:R.aborted(T);break;case 4:if(T.status===200){R.complete(T)}else{R.error(Xmla.Exception._newError("HTTP_ERROR","_ajax",R))}break}};if(r){T=new ActiveXObject("MSXML2.XMLHTTP.3.0")}else{T=new XMLHttpRequest()}if(R.username&&R.password){T.open("POST",R.url,R.async,R.username,R.password)}else{T.open("POST",R.url,R.async)}T.onreadystatechange=S;T.setRequestHeader("Accept","text/xml, application/xml");T.setRequestHeader("Content-Type","text/xml");T.send(R.data);if(!R.async&&!Q){S.call(T)}return T}function G(Q){return typeof(Q)==="undefined"}function f(Q){return typeof(Q)==="number"}function l(Q){return Q.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var L=document.getElementsByTagNameNS?function(S,R,T,Q){return S.getElementsByTagNameNS(R,Q)}:function(S,R,T,Q){if(T){return S.getElementsByTagName(T+":"+Q)}else{return S.getElementsByTagName(Q)}};var I=document.documentElement.getAttributeNS?function(R,S,T,Q){return R.getAttributeNS(S,Q)}:function(R,S,T,Q){if(T){return R.getAttribute(T+":"+Q)}else{return R.getAttribute(Q)}};function p(R){if(R.innerText){return R.innerText}else{if(R.textContent){return R.textContent}else{if(R.normalize){R.normalize();if(R.firstChild){return R.firstChild.data}else{return null}}else{var U="",T=R.childNodes,S=T.length;for(var Q=0;Q<S;Q+=1){U+=T.item(Q).data}return U}}}}function x(Q,W,U,S){if(!S){S=""}var V,T,X,Y,Z,R="\n"+S+"<"+Q+">";if(U){R+="\n"+S+" <"+W+">";for(Y in U){if(U.hasOwnProperty(Y)){Z=U[Y];R+="\n"+S+"  <"+Y+">";if(typeof(Z)==="array"){for(X,T=0,V=Z.length;T<V;T+=1){X=Z[T];R+="<Value>"+l(X)+"</Value>"}}else{R+=l(Z)}R+="</"+Y+">"}}R+="\n"+S+" </"+W+">"}R+="\n"+S+"</"+Q+">";return R}var a="RequestType";function J(Q){var T=Q.method,R=null,S='<?xml version="1.0" encoding="UTF-8"?>\n<'+M+":Envelope "+z+" "+j+">\n <"+M+":Body>\n  <"+T+" "+A+" "+j+">";switch(T){case Xmla.METHOD_DISCOVER:if(Q.requestType){S+="\n   <"+a+">"+Q.requestType+"</"+a+">"+x("Restrictions","RestrictionList",Q.restrictions,"   ")+x("Properties","PropertyList",Q.properties,"   ")}else{R=Xmla.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",Q)}break;case Xmla.METHOD_EXECUTE:if(Q.statement){S+="\n   <Command>\n    <Statement>"+l(Q.statement)+"</Statement>\n   </Command>"+x("Properties","PropertyList",Q.properties,"   ")}else{R=Xmla.Exception._newError("MISSING_REQUEST_TYPE","Xmla._getXmlaSoapMessage",Q)}break;default:}if(R!==null){R._throw()}S+="\n  </"+T+">\n </"+M+":Body>\n</"+M+":Envelope>";return S}function e(R,S,Q){if(S&&(!R)){R={}}for(var T in S){if(S.hasOwnProperty(T)){if(Q||G(R[T])){R[T]=S[T]}}}return R}Xmla=function(Q){this.listeners={};this.listeners[Xmla.EVENT_REQUEST]=[];this.listeners[Xmla.EVENT_SUCCESS]=[];this.listeners[Xmla.EVENT_ERROR]=[];this.listeners[Xmla.EVENT_DISCOVER]=[];this.listeners[Xmla.EVENT_DISCOVER_SUCCESS]=[];this.listeners[Xmla.EVENT_DISCOVER_ERROR]=[];this.listeners[Xmla.EVENT_EXECUTE]=[];this.listeners[Xmla.EVENT_EXECUTE_SUCCESS]=[];this.listeners[Xmla.EVENT_EXECUTE_ERROR]=[];this.options=e(e({},Xmla.defaultOptions,true),Q,true);return this};Xmla.defaultOptions={requestTimeout:30000,async:false};Xmla.METHOD_DISCOVER="Discover";Xmla.METHOD_EXECUTE="Execute";var F="DISCOVER_";var b="MDSCHEMA_";var q="DBSCHEMA_";Xmla.DISCOVER_DATASOURCES=F+"DATASOURCES";Xmla.DISCOVER_PROPERTIES=F+"PROPERTIES";Xmla.DISCOVER_SCHEMA_ROWSETS=F+"SCHEMA_ROWSETS";Xmla.DISCOVER_ENUMERATORS=F+"ENUMERATORS";Xmla.DISCOVER_KEYWORDS=F+"KEYWORDS";Xmla.DISCOVER_LITERALS=F+"LITERALS";Xmla.DBSCHEMA_CATALOGS=q+"CATALOGS";Xmla.DBSCHEMA_COLUMNS=q+"COLUMNS";Xmla.DBSCHEMA_PROVIDER_TYPES=q+"PROVIDER_TYPES";Xmla.DBSCHEMA_SCHEMATA=q+"SCHEMATA";Xmla.DBSCHEMA_TABLES=q+"TABLES";Xmla.DBSCHEMA_TABLES_INFO=q+"TABLES_INFO";Xmla.MDSCHEMA_ACTIONS=b+"ACTIONS";Xmla.MDSCHEMA_CUBES=b+"CUBES";Xmla.MDSCHEMA_DIMENSIONS=b+"DIMENSIONS";Xmla.MDSCHEMA_FUNCTIONS=b+"FUNCTIONS";Xmla.MDSCHEMA_HIERARCHIES=b+"HIERARCHIES";Xmla.MDSCHEMA_LEVELS=b+"LEVELS";Xmla.MDSCHEMA_MEASURES=b+"MEASURES";Xmla.MDSCHEMA_MEMBERS=b+"MEMBERS";Xmla.MDSCHEMA_PROPERTIES=b+"PROPERTIES";Xmla.MDSCHEMA_SETS=b+"SETS";Xmla.EVENT_REQUEST="request";Xmla.EVENT_SUCCESS="success";Xmla.EVENT_ERROR="error";Xmla.EVENT_EXECUTE="execute";Xmla.EVENT_EXECUTE_SUCCESS="executesuccess";Xmla.EVENT_EXECUTE_ERROR="executeerror";Xmla.EVENT_DISCOVER="discover";Xmla.EVENT_DISCOVER_SUCCESS="discoversuccess";Xmla.EVENT_DISCOVER_ERROR="discovererror";Xmla.EVENT_GENERAL=[Xmla.EVENT_REQUEST,Xmla.EVENT_SUCCESS,Xmla.EVENT_ERROR];Xmla.EVENT_DISCOVER_ALL=[Xmla.EVENT_DISCOVER,Xmla.EVENT_DISCOVER_SUCCESS,Xmla.EVENT_DISCOVER_ERROR];Xmla.EVENT_EXECUTE_ALL=[Xmla.EVENT_EXECUTE,Xmla.EVENT_EXECUTE_SUCCESS,Xmla.EVENT_EXECUTE_ERROR];Xmla.EVENT_ALL=[].concat(Xmla.EVENT_GENERAL,Xmla.EVENT_DISCOVER_ALL,Xmla.EVENT_EXECUTE_ALL);Xmla.PROP_DATASOURCEINFO="DataSourceInfo";Xmla.PROP_CATALOG="Catalog";Xmla.PROP_CUBE="Cube";Xmla.PROP_FORMAT="Format";Xmla.PROP_FORMAT_TABULAR="Tabular";Xmla.PROP_FORMAT_MULTIDIMENSIONAL="Multidimensional";Xmla.PROP_AXISFORMAT="AxisFormat";Xmla.PROP_AXISFORMAT_TUPLE="TupleFormat";Xmla.PROP_AXISFORMAT_CLUSTER="ClusterFormat";Xmla.PROP_AXISFORMAT_CUSTOM="CustomFormat";Xmla.PROP_CONTENT="Content";Xmla.PROP_CONTENT_DATA="Data";Xmla.PROP_CONTENT_NONE="None";Xmla.PROP_CONTENT_SCHEMA="Schema";Xmla.PROP_CONTENT_SCHEMADATA="SchemaData";Xmla.prototype={listeners:null,soapMessage:null,response:null,responseText:null,responseXML:null,setOptions:function(Q){e(this.options,Q,true)},addListener:function(V){var T=V.events;if(!T){Xmla.Exception._newError("NO_EVENTS_SPECIFIED","Xmla.addListener",V)._throw()}if(typeof(T)==="string"){if(T==="all"){T=Xmla.EVENT_ALL}else{T=T.split(",")}}if(!(T instanceof Array)){Xmla.Exception._newError("WRONG_EVENTS_FORMAT","Xmla.addListener",V)._throw()}var S=T.length;var Q,U;for(var R=0;R<S;R+=1){Q=T[R].replace(/\s+/g,"");U=this.listeners[Q];if(!U){Xmla.Exception._newError("UNKNOWN_EVENT","Xmla.addListener",V)._throw()}if(typeof(V.handler)=="function"){if(!V.scope){V.scope=window}U.push(V)}else{Xmla.Exception._newError("INVALID_EVENT_HANDLER","Xmla.addListener",V)._throw()}}},_fireEvent:function(V,Y,R){var W=this.listeners[V];if(!W){Xmla.Exception._newError("UNKNOWN_EVENT","Xmla._fireEvent",V)._throw()}var U=W.length;var Q=true;if(U){var S,X;for(var T=0;T<U;T+=1){S=W[T];X=S.handler.call(S.scope,V,Y,this);if(R&&X===false){Q=false;break}}}else{if(V==="error"){Y.exception._throw()}}return Q},request:function(R){var T,S=this;this.response=null;this.responseText=null;this.responseXML=null;if(!R.url){if(this.options.url){R.url=this.options.url}else{T=Xmla.Exception._newError("MISSING_URL","Xmla.request",R);T._throw()}}R.properties=e(R.properties,this.options.properties,false);R.restrictions=e(R.restrictions,this.options.restrictions,false);if(G(R.async)&&!G(this.options.async)){R.async=this.options.async}if(G(R.requestTimeout)&&!G(this.options.requestTimeout)){R.requestTimeout=this.options.requestTimeout}if(!R.username&&this.options.username){R.username=this.options.username}if(!R.password&&this.options.password){R.password=this.options.password}var U=J(R);this.soapMessage=U;var V;var Q={async:R.async,timeout:R.requestTimeout,data:U,error:function(W){R.exception=W;S._requestError(R)},complete:function(W){R.xhr=W;S._requestSuccess(R)},url:R.url};if(R.username){Q.username=R.username}if(R.password){Q.password=R.password}if(this._fireEvent(Xmla.EVENT_REQUEST,R,true)&&((R.method==Xmla.METHOD_DISCOVER&&this._fireEvent(Xmla.EVENT_DISCOVER,R))||(R.method==Xmla.METHOD_EXECUTE&&this._fireEvent(Xmla.EVENT_EXECUTE,R)))){V=C(Q)}return this.response},_requestError:function(Q){this._fireEvent("error",Q)},_requestSuccess:function(V){var Y=V.xhr;this.responseXML=Y.responseXML;this.responseText=Y.responseText;var Q=V.method;var S=L(this.responseXML,P,M,"Fault");if(S.length){S=S.item(0);V.exception=new Xmla.Exception(Xmla.Exception.TYPE_ERROR,S.getElementsByTagName("faultcode").item(0).childNodes.item(0).data,S.getElementsByTagName("faultstring").item(0).childNodes.item(0).data,null,"_requestSuccess",V);switch(Q){case Xmla.METHOD_DISCOVER:this._fireEvent(Xmla.EVENT_DISCOVER_ERROR,V);break;case Xmla.METHOD_EXECUTE:this._fireEvent(Xmla.EVENT_EXECUTE_ERROR,V);break}this._fireEvent(Xmla.EVENT_ERROR,V)}else{switch(Q){case Xmla.METHOD_DISCOVER:var R=new Xmla.Rowset(this.responseXML,V.requestType);V.rowset=R;this.response=R;this._fireEvent(Xmla.EVENT_DISCOVER_SUCCESS,V);break;case Xmla.METHOD_EXECUTE:var T,W=null,U=null;var X=V.properties[Xmla.PROP_FORMAT];switch(X){case Xmla.PROP_FORMAT_TABULAR:T=W=new Xmla.Rowset(this.responseXML);break;case Xmla.PROP_FORMAT_MULTIDIMENSIONAL:T=U=new Xmla.Dataset(this.responseXML);break}V.resultset=W;V.dataset=U;this.response=T;this._fireEvent(Xmla.EVENT_EXECUTE_SUCCESS,V);break}this._fireEvent(Xmla.EVENT_SUCCESS,V)}},execute:function(Q){var R=Q.properties;if(!R){R={};Q.properties=R}e(R,this.options.properties,false);if(!R[Xmla.PROP_CONTENT]){R[Xmla.PROP_CONTENT]=Xmla.PROP_CONTENT_SCHEMADATA}if(!R[Xmla.PROP_FORMAT]){Q.properties[Xmla.PROP_FORMAT]=Xmla.PROP_FORMAT_MULTIDIMENSIONAL}var S=e(Q,{method:Xmla.METHOD_EXECUTE},true);return this.request(S)},executeTabular:function(Q){if(!Q.properties){Q.properties={}}Q.properties[Xmla.PROP_FORMAT]=Xmla.PROP_FORMAT_TABULAR;return this.execute(Q)},executeMultiDimensional:function(Q){if(!Q.properties){Q.properties={}}Q.properties[Xmla.PROP_FORMAT]=Xmla.PROP_FORMAT_MULTIDIMENSIONAL;return this.execute(Q)},discover:function(Q){var R=e(Q,{method:Xmla.METHOD_DISCOVER},true);if(!R.requestType){R.requestType=this.options.requestType}return this.request(R)},discoverDataSources:function(Q){var R=e(Q,{requestType:Xmla.DISCOVER_DATASOURCES},true);return this.discover(R)},discoverProperties:function(Q){var R=e(Q,{requestType:Xmla.DISCOVER_PROPERTIES},true);return this.discover(R)},discoverSchemaRowsets:function(Q){var R=e(Q,{requestType:Xmla.DISCOVER_SCHEMA_ROWSETS},true);return this.discover(R)},discoverEnumerators:function(Q){var R=e(Q,{requestType:Xmla.DISCOVER_ENUMERATORS},true);return this.discover(R)},discoverKeywords:function(Q){var R=e(Q,{requestType:Xmla.DISCOVER_KEYWORDS},true);return this.discover(R)},discoverLiterals:function(Q){var R=e(Q,{requestType:Xmla.DISCOVER_LITERALS},true);return this.discover(R)},discoverDBCatalogs:function(Q){var R=e(Q,{requestType:Xmla.DBSCHEMA_CATALOGS},true);return this.discover(R)},discoverDBColumns:function(Q){var R=e(Q,{requestType:Xmla.DBSCHEMA_COLUMNS},true);return this.discover(R)},discoverDBProviderTypes:function(Q){var R=e(Q,{requestType:Xmla.DBSCHEMA_PROVIDER_TYPES},true);return this.discover(R)},discoverDBSchemata:function(Q){var R=e(Q,{requestType:Xmla.DBSCHEMA_SCHEMATA},true);return this.discover(R)},discoverDBTables:function(Q){var R=e(Q,{requestType:Xmla.DBSCHEMA_TABLES},true);return this.discover(R)},discoverDBTablesInfo:function(Q){var R=e(Q,{requestType:Xmla.DBSCHEMA_TABLES_INFO},true);return this.discover(R)},discoverMDActions:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_ACTIONS},true);return this.discover(R)},discoverMDCubes:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_CUBES},true);return this.discover(R)},discoverMDDimensions:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_DIMENSIONS},true);return this.discover(R)},discoverMDFunctions:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_FUNCTIONS},true);return this.discover(R)},discoverMDHierarchies:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_HIERARCHIES},true);return this.discover(R)},discoverMDLevels:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_LEVELS},true);return this.discover(R)},discoverMDMeasures:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_MEASURES},true);return this.discover(R)},discoverMDMembers:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_MEMBERS},true);return this.discover(R)},discoverMDProperties:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_PROPERTIES},true);return this.discover(R)},discoverMDSets:function(Q){var R=e(Q,{requestType:Xmla.MDSCHEMA_SETS},true);return this.discover(R)}};function v(V,Q){var S=L(V,o,s,"complexType"),U=S.length,T,R;for(R=0;R<U;R+=1){T=S.item(R);if(T.getAttribute("name")===Q){return T}}return null}Xmla.Rowset=function(R,Q){this._node=R;this._type=Q;this._initData();return this};Xmla.Rowset.MD_DIMTYPE_UNKNOWN=0;Xmla.Rowset.MD_DIMTYPE_TIME=1;Xmla.Rowset.MD_DIMTYPE_MEASURE=2;Xmla.Rowset.MD_DIMTYPE_OTHER=3;Xmla.Rowset.MD_DIMTYPE_QUANTITATIVE=5;Xmla.Rowset.MD_DIMTYPE_ACCOUNTS=6;Xmla.Rowset.MD_DIMTYPE_CUSTOMERS=7;Xmla.Rowset.MD_DIMTYPE_PRODUCTS=8;Xmla.Rowset.MD_DIMTYPE_SCENARIO=9;Xmla.Rowset.MD_DIMTYPE_UTILIY=10;Xmla.Rowset.MD_DIMTYPE_CURRENCY=11;Xmla.Rowset.MD_DIMTYPE_RATES=12;Xmla.Rowset.MD_DIMTYPE_CHANNEL=13;Xmla.Rowset.MD_DIMTYPE_PROMOTION=14;Xmla.Rowset.MD_DIMTYPE_ORGANIZATION=15;Xmla.Rowset.MD_DIMTYPE_BILL_OF_MATERIALS=16;Xmla.Rowset.MD_DIMTYPE_GEOGRAPHY=17;Xmla.Rowset.MD_STRUCTURE_FULLYBALANCED=0;Xmla.Rowset.MD_STRUCTURE_RAGGEDBALANCED=1;Xmla.Rowset.MD_STRUCTURE_UNBALANCED=2;Xmla.Rowset.MD_STRUCTURE_NETWORK=3;Xmla.Rowset.MD_USER_DEFINED=1;Xmla.Rowset.MD_SYSTEM_ENABLED=2;Xmla.Rowset.MD_SYSTEM_INTERNAL=4;Xmla.Rowset.MDMEMBER_TYPE_REGULAR=1;Xmla.Rowset.MDMEMBER_TYPE_ALL=2;Xmla.Rowset.MDMEMBER_TYPE_FORMULA=3;Xmla.Rowset.MDMEMBER_TYPE_MEASURE=4;Xmla.Rowset.MDMEMBER_TYPE_UNKNOWN=0;Xmla.Rowset.KEYS={};Xmla.Rowset.KEYS[Xmla.DBSCHEMA_CATALOGS]=["CATALOG_NAME"];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_COLUMNS]=["TABLE_CATALOG","TABLE_NAME","COLUMN_NAME"];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_PROVIDER_TYPES]=["TYPE_NAME"];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_SCHEMATA]=["CATALOG_NAME","SCHEMA_NAME"];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_TABLES]=["TABLE_CATALOG","TABLE_NAME"];Xmla.Rowset.KEYS[Xmla.DBSCHEMA_TABLES_INFO]=["TABLE_CATALOG","TABLE_NAME"];Xmla.Rowset.KEYS[Xmla.DISCOVER_DATASOURCES]=["DataSourceName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_ENUMERATORS]=["EnumName","ElementName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_KEYWORDS]=["Keyword"];Xmla.Rowset.KEYS[Xmla.DISCOVER_LITERALS]=["LiteralName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_PROPERTIES]=["PropertyName"];Xmla.Rowset.KEYS[Xmla.DISCOVER_SCHEMA_ROWSETS]=["SchemaName"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_ACTIONS]=["CATALOG_NAME","CUBE_NAME","ACTION_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_CUBES]=["CATALOG_NAME","CUBE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_DIMENSIONS]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_FUNCTIONS]=["FUNCTION_NAME","PARAMETER_LIST"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_HIERARCHIES]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_LEVELS]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME","LEVEL_UNIQUE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_MEASURES]=["CATALOG_NAME","CUBE_NAME","MEASURE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_MEMBERS]=["CATALOG_NAME","CUBE_NAME","DIMENSION_UNIQUE_NAME","HIERARCHY_UNIQUE_NAME","LEVEL_UNIQUE_NAME","MEMBER_UNIQUE_NAME"];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_PROPERTIES]=[];Xmla.Rowset.KEYS[Xmla.MDSCHEMA_SETS]=[];function E(Q){return Q==="true"?true:false}function n(Q){return parseInt(Q,10)}function t(Q){return parseFloat(Q,10)}function w(Q){return Q}function m(Q){return Date.parse(Q)}function c(Q){return Q}function D(S,R){var Q=[],U=S.length,V;for(var T=0;T<U;T+=1){V=S.item(T);Q.push(R(p(V)))}return Q}function H(R){var Q={};switch(R){case"xsd:boolean":Q.func=E;Q.jsType="boolean";break;case"xsd:decimal":case"xsd:double":case"xsd:float":Q.func=t;Q.jsType="number";break;case"xsd:int":case"xsd:integer":case"xsd:nonPositiveInteger":case"xsd:negativeInteger":case"xsd:nonNegativeInteger":case"xsd:positiveInteger":case"xsd:short":case"xsd:byte":case"xsd:long":case"xsd:unsignedLong":case"xsd:unsignedInt":case"xsd:unsignedShort":case"xsd:unsignedByte":Q.func=n;Q.jsType="number";break;case"xsd:string":Q.func=w;Q.jsType="string";break;case"xsd:dateTime":Q.func=m;Q.jsType="object";break;case"Restrictions":Q.func=c;Q.jsType="object";break;default:Q.func=w;Q.jsType="object";break}return Q}function B(S){var Q=p(S),R=S.getAttribute("type");converter;if(R){converter=H(R);if(converter){return converter.func(Q)}else{return Q}}else{return Q}}Xmla.Rowset.prototype={_node:null,_type:null,_row:null,_rows:null,numRows:null,fieldOrder:null,fields:null,_fieldCount:null,_initData:function(){this._rows=L(this._node,u,null,"row");this.numRows=this._rows?this._rows.length:0;this.reset();this.fieldOrder=[];this.fields={};this._fieldCount=0;var X=v(this._node,"row");if(X){var ac=L(X,o,s,"sequence").item(0),U=ac.childNodes,W=U.length,aa,Q,ab,Y,T,Z,R;for(var V=0;V<W;V+=1){aa=U.item(V);if(aa.nodeType!==1){continue}Q=I(aa,d,i,"field");ab=aa.getAttribute("name");Z=aa.getAttribute("type");if(Z===null&&this._row){var S=this._row.getElementsByTagName(ab);if(S.length){Z=I(S.item(0),N,K,"type")}}if(!Z&&this._type==Xmla.DISCOVER_SCHEMA_ROWSETS&&ab==="Restrictions"){Z="Restrictions"}Y=aa.getAttribute("minOccurs");if(Y){Y=parseInt(Y,10)}else{Y=1}T=aa.getAttribute("maxOccurs");if(T){if(T==="unbounded"){T=Infinity}else{Y=parseInt(T,10)}}else{T=1}R=H(Z);this.fields[Q]={name:ab,label:Q,index:this._fieldCount++,type:Z,jsType:R.jsType,minOccurs:Y,maxOccurs:T,getter:this._createFieldGetter(ab,R.func,Y,T)};this.fieldOrder.push(Q)}}else{Xmla.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",this._node)._throw()}},_createFieldGetter:function(V,R,U,S){var T=this;var Q;if(S===1){if(U===1){Q=function(){var W=L(this._row,u,null,V);return R(p(W.item(0)))}}else{if(U===0){Q=function(){var W=L(this._row,u,null,V);if(W.length){return R(p(W.item(0)))}else{return null}}}}}else{if(U===1){Q=function(){var W=L(this._row,u,null,V);return D(W,R)}}else{if(U===0){Q=function(){var W=L(this._row,u,null,V);if(W.length){return D(W,R)}else{return null}}}}}return Q},getType:function(){return this._type},getFields:function(){var T=[],S=this._fieldCount,Q=this.fieldOrder;for(var R=0;R<S;R+=1){T[R]=this.fieldDef(Q[R])}return T},getFieldNames:function(){var S=[];for(var Q=0,R=this._fieldCount;Q<R;Q+=1){S[Q]=this.fieldOrder[Q]}return S},hasMoreRows:function(){return this.numRows>this.rowIndex},next:function(){this.rowIndex+=1;this._row=this._rows.item(this.rowIndex);return this.rowIndex},curr:function(){return this.rowIndex},rowCount:function(){return this.numRows},reset:function(){this.rowIndex=0;this._row=(this.hasMoreRows())?this._rows.item(this.rowIndex):null},fieldDef:function(Q){var R=this.fields[Q];if(!R){Xmla.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",Q)._throw()}return R},fieldIndex:function(Q){return this.fieldDef(Q).index},fieldName:function(Q){var R=this.fieldOrder[Q];if(!R){Xmla.Exception._newError("INVALID_FIELD","Xmla.Rowset.fieldDef",Q)._throw()}return R},fieldVal:function(Q){if(f(Q)){Q=this.fieldName(Q)}return this.fieldDef(Q).getter.call(this)},fieldCount:function(){return this._fieldCount},close:function(){this._node=null;this._row=null;this._rows=null},readAsArray:function(T){var Q=this.fields,S,R;if(!T){T=[]}for(S in Q){if(Q.hasOwnProperty(S)){R=Q[S];T[R.index]=R.getter.call(this)}}return T},fetchAsArray:function(Q){if(this.hasMoreRows()){Q=this.readAsArray(Q);this.next()}else{Q=false}return Q},readAsObject:function(R){var Q=this.fields,T,S;if(!R){R={}}for(T in Q){if(Q.hasOwnProperty(T)){S=Q[T];R[T]=S.getter.call(this)}}return R},fetchAsObject:function(Q){if(this.hasMoreRows()){Q=this.readAsObject(Q);this.next()}else{Q=false}return Q},fetchCustom:function(R){var Q;if(this.hasMoreRows()){Q=R.call(this);this.next()}else{Q=false}return Q},fetchAllAsArray:function(Q){var R;if(!Q){Q=[]}while((R=this.fetchAsArray())){Q.push(R)}return Q},fetchAllAsObject:function(Q){var R;if(!Q){Q=[]}while((R=this.fetchAsObject())){Q.push(R)}return Q},fetchAllCustom:function(R,Q){var S;if(!R){R=[]}while((S=this.fetchCustom(Q))){R.push(S)}return R},mapAsObject:function(Q,X,Z){var T,Y,R,U,V=X.length,W=V-1,S=Q;for(U=0;U<V;U+=1){T=X[U];Y=Z[T];R=S[Y];if(R){if(U===W){if(R instanceof Array){R.push(Z)}else{S[Y]=[R,Z]}}else{S=R}}else{if(U===W){S[Y]=Z}else{S=S[Y]={}}}}},mapAllAsObject:function(Q,R){if(!R){R={}}if(!Q){Q=this.getKey()}var S;while(S=this.fetchAsObject()){this.mapAsObject(R,Q,S)}return R},getKey:function(){var Q;if(this._type){Q=Xmla.Rowset.KEYS[this._type]}else{Q=this.getFieldNames()}return Q}};Xmla.Dataset=function(Q){this._initDataset(Q);return this};Xmla.Dataset.AXIS_COLUMNS=0;Xmla.Dataset.AXIS_ROWS=1;Xmla.Dataset.AXIS_PAGES=2;Xmla.Dataset.AXIS_SECTIONS=3;Xmla.Dataset.AXIS_CHAPTERS=4;Xmla.Dataset.AXIS_SLICER="SlicerAxis";Xmla.Dataset.prototype={_root:null,_axes:null,_axesOrder:null,_numAxes:null,_slicer:null,_cellset:null,_initDataset:function(Q){this._initRoot(Q);this.cubeName=p(L(this._root,O,"","CubeName").item(0));this._initAxes();this._initCells()},_initRoot:function(R){var Q=L(R,O,"","root");if(Q.length){this._root=Q.item(0)}else{Xmla.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Dataset._initData",R)._throw()}},_initAxes:function(){var T,U,R,W,S,Q,V={};this._axes={};this._axesOrder=[];S=L(this._root,O,"","AxisInfo");Q=S.length;for(T=0;T<Q;T++){R=S.item(T);W=R.getAttribute("name");V[W]=R}S=L(this._root,O,"","Axis");Q=S.length;for(T=0;T<Q;T++){R=S.item(T);W=R.getAttribute("name");U=new Xmla.Dataset.Axis(V[W],R);if(W==Xmla.Dataset.AXIS_SLICER){this._slicer=U}else{this._axes[W]=U;this._axesOrder.push(U)}}this._numAxes=this._axesOrder.length},_initCells:function(){this._cellset=new Xmla.Dataset.Cellset(this)},getAxisCount:function(){return this._numAxes},getAxis:function(Q){var R,S;if(isNum(Q)){R=this._axesOrder[Q];if(G(Q)){Xmla.Exception._newError("INVALID_AXIS","Xmla.Dataset.getAxis",R)._throw()}}else{R=Q}if(R==Xmla.Dataset.AXIS_SLICER){S=this._slicer}else{S=this._axes[R]}return S},getColumns:function(){return this.getAxis(Xmla.Dataset.AXIS_COLUMNS)},getRows:function(){return this.getAxis(Xmla.Dataset.AXIS_ROWS)},getSlicer:function(){return this._slicer},close:function(){if(this._slicer){this._slicer.close()}for(var Q=0;Q<this._namAxes;Q++){this.getAxis(Q).close()}this._cellset.close();this._root=null;this._axes=null;this._axesOrder=null;this._numAxes=null;this._slicer=null}};Xmla.Dataset.Axis=function(R,Q){this._initAxis(R,Q);return this};Xmla.Dataset.Axis.MEMBER_UNIQUE_NAME="UName";Xmla.Dataset.Axis.MEMBER_CAPTION="Caption";Xmla.Dataset.Axis.MEMBER_LEVEL_NAME="LName";Xmla.Dataset.Axis.MEMBER_LEVEL_NUMBER="LNum";Xmla.Dataset.Axis.MEMBER_DISPLAY_INFO="DisplayInfo";Xmla.Dataset.Axis.prototype={_tuples:null,_members:null,numTuples:null,numHierarchies:null,_tupleIndex:null,_hierarchyOrder:null,_hierarchyDefs:null,_initHierarchies:function(Q){var Y=L(Q,O,"","HierarchyInfo"),V=Y.length,T,R,ab,U,aa,X,S,W,Z;this._hierarchyDefs={};this._hierarchyOrder=[];this.numHierarchies=V;for(T=0;T<V;T++){ab=Y.item(T);U=ab.getAttribute("name");this._hierarchyOrder[T]=U;X={};W=L(Q,O,"","*");S=W.length;for(R=0;R<S;R++){Z=W.item(R);X[Z.tagName]=null}aa={index:T,name:U,properties:X};this._hierarchyDefs[U]=aa}},_initAxis:function(R,Q){this.name=Q.getAttribute("name");this._initHierarchies(R);this._tuples=L(Q,O,"","Tuple");this.numTuples=this._tuples.length;this.reset()},_getMembers:function(){if(this.tupleIndex<this.numTuples){return L(this._tuples.item(this.tupleIndex),O,"","Member")}else{return null}},reset:function(){this.tupleIndex=0;this._members=(this.hasMoreTuples())?this._getMembers():null},hasMoreTuples:function(){return this.numTuples>this.tupleIndex},next:function(){this.tupleIndex+=1;this._members=this._getMembers();return this.tupleIndex},tupleCount:function(){return this.numTuples},getHierarchyNames:function(){var S=[];for(var Q=0,R=this.numHierarchies;Q<R;Q+=1){S[Q]=this._hierarchyOrder[Q]}return S},hierarchyCount:function(){return this.numHierarchies},hierarchyIndex:function(Q){return this._hierarchiesNames[Q]},hierarchyName:function(Q){return this._hierarchyOrder[Q]},hierarchyDef:function(R){var Q=this._hierarchyDefs[R];if(!Q){Xmla.Exception._newError("INVALID_HIERARCHY","Xmla.Dataset.Axis.hierarchyDef",R)._throw()}return Q},member:function(Q){var T,R,S,U,V,W,X={};switch(typeof(Q)){case"string":T=this.hierarchyIndex(Q);R=Q;break;case"number":R=this.hierarchyName(Q);T=Q;break}S=this.hierarchyDef(R);U=S.properties;W=this._members.item(T);X.hierarchy=R;X.index=T;for(V in U){el=L(W,O,"",V);switch(el.length){case 0:X[V]=U[V];break;case 1:X[V]=p(el.item(0));break;default:Xmla.Exception._newError("UNEXPECTED_ERROR_READING_MEMBER","Xmla.Dataset.Axis.member",V)._throw()}}return X},readAsArray:function(R){if(!R){R=[]}for(var Q=0;Q<this.numHierarchies;Q++){R[Q]=this.member(Q)}return R},readAsObject:function(Q){if(!Q){Q={}}for(var R=0;R<this.numHierarchies;R++){Q[this._hierarchyOrder[R]]=this.member(R)}return Q},fetchAsArray:function(){var Q;if(this.hasMoreTuples()){Q=this.readAsArray();this.next()}else{Q=false}return Q},fetchAsObject:function(){var Q;if(this.hasMoreTuples()){Q=this.readAsObject();this.next()}else{Q=false}return Q},fetchAllAsArray:function(Q){var R;if(!Q){Q=[]}while((R=this.fetchAsArray())){Q.push(R)}return Q},fetchAllAsObject:function(Q){var R;if(!Q){Q=[]}while((R=this.fetchAsObject())){Q.push(R)}return Q}};Xmla.Dataset.Cellset=function(Q){this._dataset=Q;this._initCellset();return this};Xmla.Dataset.Cellset.prototype={_dataset:null,_cellNodes:null,_cellCount:null,_cellNode:null,_cellDefs:null,_idx:null,_ord:null,_cellOrd:null,_initCellset:function(){var ae=this._dataset._root,R,S,aa,af,V,Q,U,ac,T,X,ab,ad,ag,Z,Y,W;R=v(ae,"CellData");if(!R){Xmla.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",ae)._throw()}S=L(R,o,s,"element");aa=S.length;V=L(ae,O,"","CellInfo");if(!V||V.length==0){Xmla.Exception._newError("ERROR_PARSING_RESPONSE","Xmla.Rowset",ae)._throw()}Q=V.item(0);ab=L(Q,O,"","*");this._cellDefs={};Z=ab.length;for(Y=0;Y<Z;Y+=1){ad=ab.item(Y);ag=ad.tagName;for(var W=0;W<aa;W++){af=S.item(W);if(af.getAttribute("name")!==ag){continue}X={name:ag};this._cellDefs[ag]=X;ac=af.getAttribute("type");if(ac){X.type=ac;T=H(ac);if(T){X.jsType=T.jsType;X.converter=T.func}}break}}this._cellNodes=L(ae,O,"","Cell");this._cellCount=this._cellNodes.length},_getCellNode:function(){this._cellNode=this._cellNodes.item(this._idx);this._cellOrd=parseInt(this._cellNode.getAttribute("CellOrdinal"),10)},reset:function(){this._idx=0;this._getCellNode();this._ord=0},hasMoreCells:function(){return this._idx<this._cellCount},next:function(){this._idx+=1;if(this._cellOrd===this._ord&&this.hasMoreCells()){this._getCellNode()}},curr:function(){return this._idx},cellValue:function(){return B(L(this._cellNode,O,"","Value").item(0))},readAsObject:function(){var Q,T,R,S;if(this._cellOrd===this._ord){Q={ordinal:this._ord};for(var U in this._cellDefs){R=this._cellDefs[U];T=L(this._cellNode,O,"",U).item(0);if(R.type){S=R.converter;Q[U]=S(p(T))}else{if(U==="Value"){Q[U]=B(T)}else{}}Q[U]=p(T)}}else{if(this._cellOrd>this._ord){Q=null}}return Q},close:function(){this._dataset=null;this._cellNodes=null;this._cellNode=null}};Xmla.Exception=function(S,U,T,Q,W,V,R){this.type=S;this.code=U;this.message=T;this.source=W;this.helpfile=Q;this.data=V;this.args=R;return this};Xmla.Exception.TYPE_WARNING="warning";Xmla.Exception.TYPE_ERROR="error";var k="http://code.google.com/p/xmla4js/wiki/ExceptionCodes";Xmla.Exception.MISSING_REQUEST_TYPE_CDE=-1;Xmla.Exception.MISSING_REQUEST_TYPE_MSG="Missing_Request_Type";Xmla.Exception.MISSING_REQUEST_TYPE_HLP=k+"#"+Xmla.Exception.MISSING_REQUEST_TYPE_CDE+"_"+Xmla.Exception.MISSING_REQUEST_TYPE_MSG;Xmla.Exception.MISSING_STATEMENT_CDE=-2;Xmla.Exception.MISSING_STATEMENT_MSG="Missing_Statement";Xmla.Exception.MISSING_STATEMENT_HLP=k+"#"+Xmla.Exception.MISSING_STATEMENT_CDE+"_"+Xmla.Exception.MISSING_STATEMENT_MSG;Xmla.Exception.MISSING_URL_CDE=-3;Xmla.Exception.MISSING_URL_MSG="Missing_URL";Xmla.Exception.MISSING_URL_HLP=k+"#"+Xmla.Exception.MISSING_URL_CDE+"_"+Xmla.Exception.MISSING_URL_MSG;Xmla.Exception.NO_EVENTS_SPECIFIED_CDE=-4;Xmla.Exception.NO_EVENTS_SPECIFIED_MSG="No_Events_Specified";Xmla.Exception.NO_EVENTS_SPECIFIED_HLP=k+"#"+Xmla.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+Xmla.Exception.NO_EVENTS_SPECIFIED_MSG;Xmla.Exception.WRONG_EVENTS_FORMAT_CDE=-5;Xmla.Exception.WRONG_EVENTS_FORMAT_MSG="Wrong_Events_Format";Xmla.Exception.WRONG_EVENTS_FORMAT_HLP=k+"#"+Xmla.Exception.NO_EVENTS_SPECIFIED_CDE+"_"+Xmla.Exception.NO_EVENTS_SPECIFIED_MSG;Xmla.Exception.UNKNOWN_EVENT_CDE=-6;Xmla.Exception.UNKNOWN_EVENT_MSG="Unknown_Event";Xmla.Exception.UNKNOWN_EVENT_HLP=k+"#"+Xmla.Exception.UNKNOWN_EVENT_CDE+"_"+Xmla.Exception.UNKNOWN_EVENT_MSG;Xmla.Exception.INVALID_EVENT_HANDLER_CDE=-7;Xmla.Exception.INVALID_EVENT_HANDLER_MSG="Invalid_Events_Handler";Xmla.Exception.INVALID_EVENT_HANDLER_HLP=k+"#"+Xmla.Exception.INVALID_EVENT_HANDLER_CDE+"_"+Xmla.Exception.INVALID_EVENT_HANDLER_MSG;Xmla.Exception.ERROR_PARSING_RESPONSE_CDE=-8;Xmla.Exception.ERROR_PARSING_RESPONSE_MSG="Error_Parsing_Response";Xmla.Exception.ERROR_PARSING_RESPONSE_HLP=k+"#"+Xmla.Exception.ERROR_PARSING_RESPONSE_CDE+"_"+Xmla.Exception.ERROR_PARSING_RESPONSE_MSG;Xmla.Exception.INVALID_FIELD_CDE=-9;Xmla.Exception.INVALID_FIELD_MSG="Invalid_Field";Xmla.Exception.INVALID_FIELD_HLP=k+"#"+Xmla.Exception.INVALID_FIELD_CDE+"_"+Xmla.Exception.INVALID_FIELD_MSG;Xmla.Exception.HTTP_ERROR_CDE=-10;Xmla.Exception.HTTP_ERROR_MSG="HTTP Error";Xmla.Exception.HTTP_ERROR_HLP=k+"#"+Xmla.Exception.HTTP_ERROR_CDE+"_"+Xmla.Exception.HTTP_ERROR_MSG;Xmla.Exception.INVALID_HIERARCHY_CDE=-11;Xmla.Exception.INVALID_HIERARCHY_MSG="Invalid_Hierarchy";Xmla.Exception.INVALID_HIERARCHY_HLP=k+"#"+Xmla.Exception.INVALID_HIERARCHY_CDE+"_"+Xmla.Exception.INVALID_HIERARCHY_MSG;Xmla.Exception.UNEXPECTED_ERROR_READING_MEMBER_CDE=-12;Xmla.Exception.UNEXPECTED_ERROR_READING_MEMBER_MSG="Error_Reading_Member";Xmla.Exception.UNEXPECTED_ERROR_READING_MEMBER_HLP=k+"#"+Xmla.Exception.UNEXPECTED_ERROR_READING_MEMBER_CDE+"_"+Xmla.Exception.UNEXPECTED_ERROR_READING_MEMBER_MSG;Xmla.Exception._newError=function(Q,S,R){return new Xmla.Exception(Xmla.Exception.TYPE_ERROR,Xmla.Exception[Q+"_CDE"],Xmla.Exception[Q+"_MSG"],Xmla.Exception[Q+"_HLP"],S,R)};Xmla.Exception.prototype={type:null,code:null,message:null,source:null,helpfile:null,data:null,_throw:function(){throw this},args:null,getStackTrace:function(){var R,Q="",T=/^\sfunction\s*([^\(]+)?\s*\(\)$/;if(this.args){var S=this.args.callee;while(S){R=String(S);S=S.caller}}return Q}}}());