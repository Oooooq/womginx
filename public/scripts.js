// Navigation tabs logic
document.querySelectorAll('.navbar a').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all
    document.querySelectorAll('.navbar a').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Hide all sections
    document.querySelectorAll('main section').forEach(sec => (sec.style.display = 'none'));

    // Show the target section
    const targetId = tab.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.style.display = 'block';
  });
});

// Proxy redirect function
function go() {
  const input = document.getElementById('url-target');
  if (input.value.trim() !== '') {
    // Sanitize input: remove https:// if user adds it by accident
    let url = input.value.trim().replace(/^https?:\/\//, '');
    // Redirect proxy path - customize '/main/' if needed
    window.location.href = '/main/' + url;
  } else {
    alert('Please provide a link. It does not require https://.');
  }
}

// Settings logic
window.onload = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const blockCookies = localStorage.getItem('blockCookies') === 'true';
  const enableJs = localStorage.getItem('enableJavaScript') !== 'false'; // default true

  document.getElementById('dark-mode-toggle').checked = darkMode;
  document.getElementById('block-cookies-toggle').checked = blockCookies;
  document.getElementById('enable-javascript-toggle').checked = enableJs;

  if (darkMode) document.body.style.backgroundColor = '#0d0d0d';
  else document.body.style.backgroundColor = '#fff';
};

// Save settings function
function saveSettings() {
  const darkMode = document.getElementById('dark-mode-toggle').checked;
  const blockCookies = document.getElementById('block-cookies-toggle').checked;
  const enableJs = document.getElementById('enable-javascript-toggle').checked;

  localStorage.setItem('darkMode', darkMode);
  localStorage.setItem('blockCookies', blockCookies);
  localStorage.setItem('enableJavaScript', enableJs);

  alert('Settings saved!');
  if (darkMode) document.body.style.backgroundColor = '#0d0d0d';
  else document.body.style.backgroundColor = '#fff';
}

// --- Animated tab title ---
// Text to animate in the browser tab
const titleText = 'DYNX Proxy - Secure & Fast ';
let index = 0;

function animateTitle() {
  document.title = titleText.substring(0, index);
  index++;
  if (index > titleText.length) {
    index = 0; // Restart animation
  }
  setTimeout(animateTitle, 200); // Animation speed (ms)
}

// Start the animation
animateTitle();
