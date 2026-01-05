function sendMessage() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let url = "https://wa.me/919566749964?text="
    + encodeURIComponent(
      "Name: " + name +
      "\nPhone: " + phone +
      "\nMessage: " + message
    );

  window.open(url, "_blank");
}
