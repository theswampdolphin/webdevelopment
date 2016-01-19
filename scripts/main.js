var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/cmobitch/Desktop/mozilla site/test site/images/firefox-256.png') {
      myImage.setAttribute ('src','/Users/cmobitch/Desktop/mozilla site/test site/images/fox.png');
    } else {
    	myImage.setAttribute ('src','/Users/cmobitch/Desktop/mozilla site/test site/images/firefox-256.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
