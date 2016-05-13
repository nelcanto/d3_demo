/*function book_suggestion()  
{  
var book = document.getElementById("book").value;  
var xhr;  
 if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
    xhr = new XMLHttpRequest();  
} else if (window.ActiveXObject) { // IE 8 and older  
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  
}  
var data = "book_name=" + book;  
     xhr.open("POST", "./php/insert_name.php", true);   
     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                    
     xhr.send(data);  
     xhr.onreadystatechange = display_data;  
    function display_data() {  
     if (xhr.readyState == 4) {  
      if (xhr.status == 200) {  
       //alert(xhr.responseText);        
      document.getElementById("suggestion").innerHTML = xhr.responseText;  
      } else {  
        alert('There was a problem with the request.');  
      }  
     }  
    }  
}  */

function showUser(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","./php/insert_name.php?q="+str,true);
        xmlhttp.send();
    }
}