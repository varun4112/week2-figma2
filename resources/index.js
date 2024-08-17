// code for chart
const ctx = document.getElementById("myDoughnutChart").getContext("2d");
const myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [275, 75, 100],
        backgroundColor: [
          "rgba(91, 185, 145, 1)",
          "rgba(231, 125, 118, 1)",
          "rgba(243, 177, 125, 1)",
        ],
        borderColor: "#263A8B",
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "none",
      },
      title: {
        display: false,
        text: "Doughnut Chart Example",
      },
    },
  },
});

// Code for dropdown in sidebar
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// second dropdown
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of dropdown2
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// js code of expanding table col
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.getElementsByClassName("expand_more");
  Array.from(toggleButtons).forEach((toggleButton, index) => {
    toggleButton.addEventListener("click", () => {
      console.log(`Button ${index + 1} clicked`);
      const fourthTd = toggleButton
        .closest("tr")
        .querySelector("td:nth-child(4)");
      if (fourthTd) {
        fourthTd.classList.toggle("active");
      }
    });
  });
});

// SIDEBAR OPEN AND CLOSING
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.getElementById("closedSidebarIcon");

//   const menuList = document.querySelector("#menuList");
//   const openSidebarIcon = document.querySelector("#openSidebarIcon");

//   toggleButton.addEventListener("click", () => {
//     console.log("clicked");
//     menuList.classList.toggle("active");
//     openSidebarIcon.toggle("active");
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("closedSidebarIcon");
  const sideBar = document.getElementById("sideBar");
  const openSidebarIcon = document.querySelector("#openSidebarIcon");
  const grainEdash = document.getElementById("grainEdash");
  const menuList = document.getElementById("menuList");
  const sidebarBottomOptions = document.getElementById("sidebarBottomOptions");
  // const closedSidebarIcon = document.getElementById("closedSidebarIcon");

  openSidebarIcon.addEventListener("click", () => {
    console.log("clicked");
    sideBar.classList.toggle("active");
    grainEdash.classList.toggle("active");
    menuList.classList.toggle("active");
    sidebarBottomOptions.classList.toggle("active");
  });

  toggleButton.addEventListener("click", () => {
    console.log("clicked");
    menuList.classList.toggle("active");
    // openSidebarIcon.classList.toggle("active"); // Updated this line
    sidebarBottomOptions.classList.toggle("active");
    // closedSidebarIcon.classList.toggle("active"); // Updated this line

  });
});
