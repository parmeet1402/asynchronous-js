document.getElementById("btn").addEventListener("click", loadDataFromTextFile);

function loadDataFromTextFile() {
  // Create an XHR object
  var xhr = new XMLHttpRequest();
  // Open
  xhr.open("GET", "data.txt", true);

  //handle spinners or loaders
  xhr.onprogress = function() {
    document.getElementById("output").innerHTML = `<h1>Loading..</h1>`;
  };

  //handle response
  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById("output").innerHTML = `<h1>${
        this.responseText
      }</h1>`;
    }
  };

  //handle errors
  xhr.onerror = function() {
    console.log("request error");
  };

  //make the request
  xhr.send();
}
