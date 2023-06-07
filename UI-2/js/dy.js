function setCookie(name,value,expire,path,domain){
    var cookieString = name + "=" + value
 + ((expire) ? ";expire=" + expire.toGMTString() : "")
 +((path)? ";path=" + path :'')
 +((domain) ? ";domain=" + domain :"");
 
 document.cookie = cookieString;
 console.log(document.cookie);
};
function getCookie(name){
 console.log(document.cookie);
 if(document.cookie.length>0){
     start = document.cookie.indexOf(name + "=");
      if(start != -1){
          start = start + name.length + 1;
          end=document.cookie.indexOf(";",start);

          if(end == -1){
              document.cookie.length;
          }
          return document.cookie.substring(start,end);
      }
 }
 return undefined;
};
function deleteCookie(name){
var date=new Date();
date.getTime(date.getTime()-10000);
document.cookie= name + "= v;expires = " +date.toGMTString();
};