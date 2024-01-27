function newsletter() {
    //Not working correctly, server always responds with error 405, even if the email address is correct. Maybe problem with live server extension.
    var email = document.getElementById('email').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var response = JSON.parse(xhttp.responseText);
                document.getElementById('response').innerHTML = response.message;
            } else {
                document.getElementById('response').innerHTML = xhttp.statusText;
            }
        }
    };
    xhttp.open('POST', 'newsletter.php', true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send('email=' + encodeURIComponent(email));
}