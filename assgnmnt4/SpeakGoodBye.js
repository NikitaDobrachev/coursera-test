(function(window) {
  var byeSpeaker = {}
  byeSpeaker.name = null;
  var speakWord = "Good Bye";
  byeSpeaker.speakGoodBye = function () {
    console.log(speakWord + " " + byeSpeaker.name)
  }

  window.byeSpeaker = byeSpeaker;
})(window);