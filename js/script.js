// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "冠佑") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " 彰師附工林冠佑";
    document
        .querySelector("h1")
        .textContent = title;

  }
}


