/*!
* Aleatorios
* randomImage(['0.png',50,50,'1.png',25,25,'2.png',50,25]);
 */

( function randomImage(imgArr){
  var imgSrc, imgW, imgH, r;
  r = randomNumber(imgArr.length / 3)-1;<?xml version="1.0" encoding = "utf-8"?>
<snippet xmlns:MMString="http://www.macromedia.com/schemes/dat/string/" MMString:name = "Snippets/JavaScript/randomizers/randomNumber_csn/snippet/name/Random" MMString:description = "Snippets/JavaScript/randomizers/randomNumber_csn/snippet/description/Returns" preview="code" type="block">

<insertText location="beforeSelection">
<![CDATA[function randomNumber(limit){
  return Math.floor(Math.random()*limit);
}
]]>
</insertText>
<insertText location="afterSelection"><![CDATA[]]>
</insertText>
</snippet>

  
  imgSrc = imgArr[r * 3];
  imgW = imgArr[(r * 3)+1];
  imgH = imgArr[(r * 3)+2];

  document.write('<IMG SRC='+imgSrc+' WIDTH='+imgW+' HEIGHT='+imgH+'>');
}
});