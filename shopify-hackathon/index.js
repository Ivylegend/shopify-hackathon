const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
const alertBell = document.querySelector(".alert");
const one = document.querySelector(".one");
const box = document.querySelector(".box");
const menuBox = document.querySelector(".menu-box");
const userName = document.querySelector(".user-div");

// NOTIFICATION CLICK
alertBell.addEventListener("click", () => {
  if (menuBox.classList.contains("active")) {
    menuBox.classList.remove("active");
  }
  box.classList.add = "active";
  box.classList.toggle("active");
  one.setAttribute("aria-expanded", "true");
});

// USERNAME CLICK
userName.addEventListener("click", () => {
  if (box.classList.contains("active")) {
    box.classList.remove("active");
  }
  menuBox.classList.add = "active";
  menuBox.classList.toggle("active");
  userName.setAttribute("aria-expanded", "true");
});

// CANCEL BTN
const cancelBtn = document.querySelector(".cancel-btn");
const mainOne = document.querySelector(".main-one");
cancelBtn.onclick = function () {
  mainOne.style.display = "none";
};

// SETUP GUIDE OPEN AND CLOSE
const upDown = document.querySelector(".up-down");
const bodyItem = document.querySelector(".accordion");
upDown.onclick = function () {
  upDown.classList.toggle("active");
  if (upDown.classList.contains("active")) {
    bodyItem.style.maxHeight = bodyItem.scrollHeight + "px";
    upDown.innerHTML =
      "<img class='up' src='https://crushingit.tech/hackathon-assets/icon-arrow-up.svg' alt='up' />";
  } else {
    bodyItem.style.maxHeight = 0;
    upDown.innerHTML =
      "<img class='down' src='https://crushingit.tech/hackathon-assets/icon-arrow-down.svg' alt='down' />";
  }
};

// ACCORDION
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordion = document.querySelector(
      ".accordion-item-header.active"
    );

    if (
      currentlyActiveAccordion &&
      currentlyActiveAccordion !== accordionItemHeader
    ) {
      currentlyActiveAccordion.classList.toggle("active");
      currentlyActiveAccordion.nextElementSibling.style.maxHeight = 0;
      // accordionItem.classList.toggle("bg_active");
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItemHeader.setAttribute("aria-expanded", "true");

    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItemBody.setAttribute("aria-hidden", "false");
      accordionItems.forEach((accordionItem) => {
        accordionItem.classList.toggle("bg_active");
      });
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItems.forEach((accordionItem) => {
        accordionItem.style.backgroundColor = "transparent";
      });
    }
  });
});

const count = 0;
const counters = document.getElementById("#counter");

// RANGE
let counter = 0;
function updateCounter(img) {
  const rangeInput = document.getElementById("range-input");

  if (img.src.endsWith("icon-dashed-circle.svg")) {
    img.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
    counter++;
  } else {
    img.src =
      "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
    counter--;
  }

  document.getElementById("counter").innerText = counter;
  rangeInput.value = counter;
}

// ARIA LABELS CHANGE

// LOADING ANIMATION
const saveBtns = document.querySelectorAll(".save-btn");
const loadedBtns = document.querySelectorAll(".loaded");
saveBtns.forEach((saveBtn) => {
  saveBtn.onclick = function () {
    this.innerHTML =
      "<img src='https://crushingit.tech/hackathon-assets/icon-spinner.svg' alt='load-spinner' class='loader'/>";
    setTimeout(() => {
      this.innerHTML =
        "<img src='https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg' alt='loaded' class='loaded' />";
    }, 2000);
  };
});

loadedBtns.forEach((loadedBtn) => {
  loadedBtn.onclick = function () {
    this.innerHTML =
      "<img src='https://crushingit.tech/hackathon-assets/icon-spinner.svg' alt='load-spinner' class='loader'/>";
    setTimeout(() => {
      this.innerHTML =
        "<img src='https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg' alt='leader' />";
    }, 2000);
  };
});

// const checkBoxButtons = document.querySelector(".save-btn");
// const notCompleted = checkBoxButtons.querySelector(".not-completed");
// const completed = checkBoxButtons.querySelector(".loaded");
// const loadingSpinner = checkBoxButtons.querySelector(".loader");

// console.log(checkBoxButtons, notCompleted, completed, loadingSpinner);

// function handleMarkDoneOrNotDone() {
//   notCompleted.classList.add("hidden");
// }

// checkBoxButtons.addEventListener("click");
