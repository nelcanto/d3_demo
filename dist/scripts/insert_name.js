"use strict";
function showUser(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
      }
    };
    xmlhttp.open("GET", "./php/insert_name.php?q=" + str, true);
    xmlhttp.send();
  }
}
