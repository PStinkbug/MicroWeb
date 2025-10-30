const iframe = document.getElementById("display");
const urlInput = document.getElementById("url");
const goBtn = document.getElementById("go");
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");

function loadPage() {
  let url = urlInput.value.trim();

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  iframe.src = url;
}

// Go button
goBtn.addEventListener("click", loadPage);

// Press Enter to load
urlInput.addEventListener("keypress", e => {
  if (e.key === "Enter") loadPage();
});

// Back & forward buttons (inside iframe)
backBtn.onclick = () => iframe.contentWindow.history.back();
forwardBtn.onclick = () => iframe.contentWindow.history.forward();
