// JavaScript Document
function closest(a,b){
// traverse parents
for(;a;){
//parent = el.parentElement;
if(a&&a.matches(b))return a;a=a.parentElement}return null}function _$(a){function b(b,c,d){if(!c||"string"!=typeof c)throw Error("Second parameter should be a node selector");if(a){b=b.split(" ");for(var e in b)document.querySelector(a).addEventListener(b[e],function(b){var e=b||window.event,f=e.target||e.srcElement,g=document.querySelectorAll(a+" "+c);if(g.length)for(var h=0,i=g.length;h<i;h++){var j=closest(f,c);if(j===g[h])return d.call(j,b),!1}},!0)}}return{deligate:b}}!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(a){for(var b=(this.document||this.ownerDocument).querySelectorAll(a),c=b.length;--c>=0&&b.item(c)!==this;);return c>-1})}();var projectRefine=function(a){var b=a.jsondata;delete b[1e3];var c=this,d=[],e=[],f=[];c.rBlock=a.ids,c.jsond=b,c.seljson=a.selectedjson||{},c.tagBlock=a.tagid,c.showli=a.showlength,c.scrollbar=a.scrollfunc,c.tagcallback=a.tagremoveCallback,c.stopTagJson=a.preventTagJson;var g=c.rBlock.replace(/#/g,"");Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1};$(c.tagBlock).off("click"),$(c.tagBlock).on("click","li a",function(a){c.removeTags(a)}),c.init=function(){c.refineSelected(),c.refineLeft()},c.removeTags=function(a){var b,d=$n(a.target||a.srcElement),e=d.currObj().nodeName.toLowerCase();"a"===e&&"removeTag"===d.attr("rel")&&(b=d.parent().attr("id"),c.uprefine(b),c.tagcallback())},c.uprefine=function(a){for(k in c.seljson[a])c.seljson[a][k]=[],$n(c.rBlock+" .refineTab li a[rel="+a+"] span").html(""),$n(c.rBlock+" .refineTab li.active a").currObj().click(),c.create_Tag(0,a)},c.refineLeft=function(){if("none"===document.getElementById("refine_project").style.display)var a='<div class="clr_link"><a href="javascript:void(0)" id="clearTag" rel="clrAll">Clear All </a>|<a href="javascript:void(0)" onclick="$n(\'#refineblock\').toggle();"> Close</a></div>';else var a='<div class="clr_link"><a href="javascript:void(0)" id="clearTag" rel="clrAll" >Clear All </a>|<a href="javascript:void(0)" onclick="$n(\'#refineblock\').toggle();"> Close</a></div>';var b,d,f,g,h,i=$n("<div>").addClass("refineTab nScroll"),j=$n("<ul>").css({width:"180px"});$n(c.rBlock).append(a);var k=$n("<div>").addClass("refineTabCont nScroll"),l=$n("<ul>").attr({id:"refinedata"});k.css({maxHeight:"190px"}),$(c.rBlock).off("click"),$(c.rBlock).on("click","#clearTag,input[type=checkbox]",function(a){c.checkdata(a)});for(b in c.jsond){if(""===c.seljson[b]||"undefined"===c.seljson[b]){var m={};c.seljson[b]=m}f=$n("<li>");for(d in c.jsond[b]){var n={},o=0;""===c.seljson[b][d]||void 0===c.seljson[b][d]?(n[d]=[],c.seljson[b]=n):(o=c.seljson[b][d].length,o&&(c.create_Tag(o,b),c.setRefineOnString(b,d))),g=$n("<a>").attr({href:"javascript:void(0)",rel:b,title:d}),h=$n("<span>"),o?h.append(" ("+o+")"):"",g.addEvent("click",function(){e=[],c.refineRight($n(this)),c.scrollbar()}),i.append(j.append(f.append(g.append(d).append(h))))}}var p=document.getElementById("refinewrap"),q=document.getElementsByClassName("refineTab"),r=document.getElementsByClassName("refineTabCont");q.length&&r.length&&(p.removeChild(q[0]),p.removeChild(r[0])),$n(c.rBlock).append(i).append(k.append(l)),$n(c.rBlock+" .refineTab li:first a").currObj().click()},c.refineRight=function(a){"span"==a.currObj().nodeName.toLowerCase()&&(a=a.parent());var b,e=a.attr("rel"),f=a.attr("title"),g=0;d[0]=e,d[1]=f,$n(c.rBlock+" .refineTab li").removeClass("active"),a.parent().addClass("active"),$n(c.rBlock+" #refinedata").html(""),$n(c.rBlock+" #refinedata");for(f in c.jsond[e])for(b in c.jsond[e][f]){if(!(g<c.showli))break;var h=c.jsond[e][f][b][0],i=c.jsond[e][f][b][1],j=$n("<li>"),b=b.replace(/#/gi,"");pa=$n("<label>").attr({"for":"name_"+b,title:h}),pin=$n("<input>").attr({type:"checkbox",id:"name_"+b,value:b}).addClass("f_check"),psp=$n("<span>"),psm=$n("<small>"),"-1"!=c.seljson[e][f].indexOf(b)?pin.currObj().defaultChecked=!0:"",j.append(pin).append(pa.append(psp.append(h)).append(psm.append("("+i.toString()+")"))),$n(c.rBlock+" #refinedata").append(j),g+=1}"none"===document.getElementById("refine_project").style.display?$n("#reqRefine_Data").val(JSON.stringify(c.seljson)):$n(c.rBlock+"_Data").val(JSON.stringify(c.seljson))},c.checkdata=function(a){var b,e=$n(a.target||a.srcElement),f=e.currObj().nodeName.toLowerCase();if("input"==f&&"checkbox"===e.attr("type")){var g=$n(c.rBlock+" .refineTab li a[rel="+d[0]+"]"),h=c.seljson[d[0]][d[1]].indexOf(e.val());e.currObj().checked&&h<0?c.seljson[d[0]][d[1]].push(e.val()):e.currObj().checked===!1&&h>-1&&c.seljson[d[0]][d[1]].splice(h,1);var i=c.seljson[d[0]][d[1]].length;i?g.eq(b).childrens("span").html(" ("+i+")"):g.eq(b).childrens("span").html(""),c.create_Tag(i,d[0]),c.setRefineOnString(d[0],d[1]),"none"===document.getElementById("refine_project").style.display?$n("#reqRefine_Data").val(JSON.stringify(c.seljson)):$n(c.rBlock+"_Data").val(JSON.stringify(c.seljson))}else"a"==f&&"clrAll"===e.attr("rel")&&(c.uprefine(d[0]),c.tagcallback())},c.setRefineOnString=function(a,b){if(c.stopTagJson.indexOf(a)!=-1){var d="Refining On",e=" All",g=" requirements",h=c.jsond[a][b],i=c.seljson[a][b],j=c.seljson[a][b][0];Object.keys(h).length!=i.length&&i.length?e=' "'+c.jsond[a][b]["#"+j][0]+'"':i.length||(e="",g=""),"true"===$n("#requestFlag").val()&&"none"===document.getElementById("refine_project").style.display&&(g=" requests"),$n("#refineOnText").html(d+e+g),f.length?$n("#refineOnText").parent().show():$n("#refineOnText").parent().hide()}},c.create_Tag=function(a,b){var d,e,g=b,h=a,i='<a class="close-icon" rel="removeTag" href="javascript:void(0)">&times;</a>';for(e in c.jsond[b])e=e.replace(/by/i,"");if(a)"-1"!=f.indexOf(b)?c.stopTagJson.indexOf(b)==-1&&$n(c.tagBlock+" #"+b).html(e).append(" ("+h.toString()+")").append(i):(c.stopTagJson.indexOf(b)==-1&&(d=$n("<li>").attr({id:g}),0===$n("#"+g).length&&(d.html(e).append(" ("+h.toString()+")").append(i),$n(c.tagBlock).append(d))),f.push(b));else{var j=f.indexOf(g);j!=-1&&(f.splice(j,1),$n(c.tagBlock+" #"+b).remove())}f.length?$n(c.tagBlock).parent().show():$n(c.tagBlock).parent().hide()},c.refineSelected=function(){var a=$n("<input>").attr({type:"hidden",name:g+"_Data",id:g+"_Data"}),b=$n("<input>").attr({type:"hidden",name:"reqRefine_Data",id:"reqRefine_Data"});$n(c.rBlock).append(a),$n(c.rBlock).append(b)},c.init()};