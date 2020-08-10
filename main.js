// Smooth Scrolling
$("#main-nav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 112,
      },
      1000
    );
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   // you works start here
//   const btn = document.querySelector("#main-nav .checkbtn");
//   const navigation = document.querySelector("#main-nav .navigation");
//   function myFunc() {
//     navigation.style.right == "-500px"
//       ? (navigation.style.right = "0px")
//       : (navigation.style.right = "-500px");
//   }

//   btn.addEventListener("click", (e) => {
//     console.log(e);
//     myFunc();
//   });

//   navigation.addEventListener("click", (e) => {
//     if (e.target.tagName == "A") {
//       navigation.style.right = "-500px";
//       // navigation.classList.remove("right");
//     }
//   });
// });
