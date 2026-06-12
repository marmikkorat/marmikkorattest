// INIT EMAILJS// INIT EMAILJS(e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.innerText = "Sending...";

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      status.innerText = "✅ Message Sent Successfully!";
      this.reset();
    })
    .catch(() => {
      status.innerText = "❌ Failed to send. Try again.";
    });
});
``
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔥 replace this
})();

// FORM SUBMIT
