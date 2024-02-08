/* ========= HEADER ========= */

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

/* ========= ABOUT ========= */

document.addEventListener("DOMContentLoaded", function () {
  const aboutContainer = document.querySelector(".about-container");
  const aboutText = about.querySelector(".about-text");
  const moreAbout = document.createElement("a");
  moreAbout.href = "#";
  moreAbout.className = "btn";
  moreAbout.textContent = "More About";
  aboutContainer.appendChild(moreAbout);

  aboutContainer.addEventListener("click", function (e) {
    e.preventDefault();
    aboutContainer.classList.toggle("expanded");
    if (aboutContainer.classList.contains("expanded")) {
      moreAbout.textContent = "Less About";
    } else {
      moreAbout.textContent = "More About";
    }
  });

  // Check if the content is overflowing initially
  if (aboutText.scrollHeight > aboutText.clientHeight) {
    moreAbout.style.display = "inline-block";
  } else {
    moreAbout.style.display = "none";
  }
});

/* ========= SERVICES ========= */

document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelectorAll(".box");
  const offset = 1;

  box.forEach(function (box) {
    const para = box.querySelector("p");
    const readMore = document.createElement("a");
    readMore.href = "#";
    readMore.className = "read";
    readMore.textContent = "Read More";
    box.appendChild(readMore);

    box.addEventListener("click", function (e) {
      e.preventDefault();
      box.classList.toggle("expanded");
      if (box.classList.contains("expanded")) {
        readMore.textContent = "Read Less";
      } else {
        readMore.textContent = "Read More";
      }
    });

    // Check if the content is overflowing initially
    if (para.scrollHeight > para.clientHeight) {
      readMore.style.display = "inline-block";
    } else {
      readMore.style.display = "none";
    }
  });
});

/* ========= SAY HELLO ========= */

document.addEventListener("DOMContentLoaded", function () {
  const helo = document.querySelector(".helo");
  const textArea = document.querySelector(".contact-form textarea");
  helo.addEventListener("click", function (e) {
    textArea.textContent = "Hello Nanba!";
  });
});

/* ========= SCROLL TOP ========= */

// window.onscroll = function () {
//   toggleScrollToTopButton();
// };

function toggleScrollToTopButton() {
  const top = document.querySelector(".top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    top.classList.add("show");
  } else {
    top.classList.remove("show");
  }
}

/* ========= MENU ICON ========= */

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  nav.classList.remove("open");
  toggleScrollToTopButton();
};

/* ========= SHARE ========= */

function copyLink() {
  var input = document.createElement("input");
  input.value = window.location.href;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Link copied to clipboard!");
}

/* ========= SEND MESSAGE ========= */

function sendMessage() {
  alert("Currently this feature is not available!");
}
