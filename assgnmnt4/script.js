(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0);
    helloSpeaker.name = names[i];
    byeSpeaker.name = names[i];
    if (firstLetter.toLowerCase() === "j") {
      byeSpeaker.speakGoodBye()
    } else {
      helloSpeaker.sayHello()
    }
  }
})(window);