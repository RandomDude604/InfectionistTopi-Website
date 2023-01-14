function firstMessage() {
    document.getElementById("first-message").innerHTML = "Feel Free to Explore! I'm still learning as I'm making this sorry about the bugs and all!";
  }

  setInterval(myTime, 1000);
function myTime() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark'){
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
  } else {
      setTheme('theme-light');
  }
})();