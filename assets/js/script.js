emailjs.init("p8us6YLEb-CrS6eMp");

console.log("Running");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs
      .send("service_4rtyxek", "template_dz1hbql", {
        from_name: this.nameInput.value,
        reply_to: this.emailInput.value,
        message: this.messageInput.value,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  });
