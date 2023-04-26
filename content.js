document.addEventListener('DOMContentLoaded', function() {
  // Get the switch element and set its initial state to "on"
  var switchElement = document.getElementById('extension-switch'); 
  var isOn = true;
  switchElement.checked = true;

  // Add a click event listener to the switch element
  switchElement.addEventListener('click', function() {
    isOn = !isOn;
  });

  // Add a click event listener to the extension icon
  var extensionIcon = document.getElementById('extension-icon');
  extensionIcon.addEventListener('click', function() {
    // Check if the switch is on
    if (isOn) {
      // Your original code here
      var selection = window.getSelection().toString();
      if (selection.length > 0) {
        var words = selection.split(' ');
        for (var i = 0; i < words.length; i++) {
          if (words[i].length > 8) {
            var boldCount = Math.round(words[i].length / 2);
            var firstLetters = words[i].substring(0, boldCount);
            var rest = words[i].substring(boldCount);
            words[i] = '<strong>' + firstLetters + '</strong>' + rest;
          } else if (words[i].length > 5) {
            var firstThree = words[i].substring(0, 3);
            var rest = words[i].substring(3);
            words[i] = '<strong>' + firstThree + '</strong>' + rest;
          } else if (words[i].length > 1) {
            words[i] = '<strong>' + words[i].substring(0, 2) + '</strong>' + words[i].substring(2);
          }
        }
        var formatted = words.join(' ');
        var range = window.getSelection().getRangeAt(0);
        var newNode = document.createElement('span');
        newNode.innerHTML = formatted;
        range.deleteContents();
        range.insertNode(newNode);
      }
    }
  });
});
