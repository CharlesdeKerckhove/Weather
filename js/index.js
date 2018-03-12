//create and send XHR request
function makeRequest() {
     console.log("make");
xhr = new XMLHttpRequest();
xhr.onreadystatechange = responseMethod;
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Worcester,England' + '&appid=' + '9df93abfcfe54178c78910bf2dafac74', true);
xhr.send();
    console.log("sent");

}
//Handle XHR response – Callback Function
function responseMethod() {
     console.log("response");
    if (xhr.readyState == 4) { // Ready
        console.log("4");
        if (xhr.status == 200) { // HTTP OK
        console.log("200");
            alert(xhr.responseText); //Assuming Text else responseXML
        }
        else {
        alert('There was a problem with the request.');
        }
    }
}
