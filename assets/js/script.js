function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}


// httpGetAsync(url)

function getDataEmail() {
    let inputEmail = document.getElementById("inputEmail").value;

    if (!inputEmail){
        document.getElementById("emailHelp").textContent = "Input email esta vacio";
        document.getElementById("emailHelp").className = "alertError";
        return;
    }

    const url = `https://emailvalidation.abstractapi.com/v1/?api_key=0f90a14c84be43b69a50059c60342988&email=${inputEmail}`
    httpGetAsync(url, function(response) {
        document.getElementById("result").innerHTML = "";
        const jsonResponse = JSON.parse(response);
        const formattedResponse = JSON.stringify(jsonResponse, null, 2);
        document.getElementById("result").innerHTML = `<pre>${formattedResponse}</pre>`;
        document.getElementById("emailHelp").textContent = "Con exito!";
        document.getElementById("emailHelp").className = "alertSuccess";
    });
}
