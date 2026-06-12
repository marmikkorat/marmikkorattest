(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("✅ Message Sent");
      this.reset();
    })
    .catch(() => {
      alert("❌ Failed");
    });
});
