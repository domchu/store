let btn = [...document.querySelectorAll(".btn")];
let storeItem = [...document.querySelectorAll(".store-item")];
let errorText = document.querySelector(".error-text");

btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let category = e.target.dataset.filter;
    storeItem.forEach(function (item) {
      if (category == "all") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

// this is for the search input for filter
let search = document.querySelector("#search-item");

search.addEventListener("keyup", (e) => {
  let filter = e.target.value.toLowerCase().trim();
  storeItem.forEach((item) => {
    if (item.textContent.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  let noItemFound = storeItem.every(function (items) {
    if (items.style.display == "none") {
      return true;
    } else {
      return false;
    }
  });
  // The input is not correct or do not match the data filter
  if (noItemFound) {
    errorText.style.display = "block";
    errorText.textContent = `No ${filter} found`;
  } else {
    errorText.style.display = "none";
  }
});

//javascript toggle
let mobeileMenu = document.querySelector(".mobile-menu");
let bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
  if (bars.classList.contains("fa-bars")) {
    mobeileMenu.style.display = "block";
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");
  } else {
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");
    mobeileMenu.style.display = "none";
  }
});
// search.addEventListener("keyup", function (e) {
//   let filter = e.target.value.toLowerCase().trim();
//   console.log(filter);
// storeItem.forEach(function (item) {
// console.log(item);
// if (item.classList.includes(filter)) {
//   item.style.display = "block";
// } else {
//   item.style.display = "none";
// }

//   storeItem.forEach((i) => {

//       console.log(i);
//       if (i.classList.includes(filter)) {
//         i.style.display = "block";
//       } else i.style.display = "none";

//   });
// });
