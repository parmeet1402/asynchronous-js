//getting random chuck norris jokes

document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(event) {
  event.preventDefault();
  let numberOfJokes = document.querySelector("#number").value;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);
  xhr.onprogress = function() {};

  xhr.onload = function() {
    if (this.status === 200) {
      const jokes = JSON.parse(this.responseText).value;
      let output = "<h2>Requested Chuck Norris Jokes:</h2>";
      jokes.map(joke => {
        output += `<p>${joke.joke}</p>`;
      });
      document.querySelector(".jokes-output").innerHTML = output;
    }
  };

  xhr.send();
}
