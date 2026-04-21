const words = [
  "Junior Accountant",
  "ACCA Student",
  "Xero Accounting User",
  "Financial Data Specialist"
];

let i = 0;
let j = 0;
let text = "";
let deleting = false;

function type() {
  text = words[i];

  if (!deleting) j++;
  else j--;

  document.querySelector(".typing").textContent = text.substring(0, j);

  if (!deleting && j === text.length) {
    deleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, deleting ? 60 : 100);
}

type();

/* Scroll animation */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
