// Funcția pentru încărcarea conținutului headerului
function loadHeader() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "header.html", true);
    xhttp.send();
  }
  
  // Funcția pentru încărcarea conținutului footerului
  function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
  }
  