// Handle dropdown selection
document.getElementById("viewSelect").addEventListener("change", function() {
  let body = document.body;
  body.classList.remove("mobile", "tablet", "large");

  if (this.value === "mobile") {
    body.classList.add("mobile");
  } else if (this.value === "tablet") {
    body.classList.add("tablet");
  } else if (this.value === "large") {
    body.classList.add("large");
  }
});

// Default = mobile
document.body.classList.add("mobile");
