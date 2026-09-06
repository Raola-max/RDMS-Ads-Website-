// Replace with your real target WhatsApp number (Country code + phone number without leading '+' or spaces)
const WHATSAPP_PHONE_NUMBER = "2348055825647"; 

/**
 * Handles pricing card button selection and smooth scrolling
 */
function selectPackage(packageName) {
  const selectElem = document.getElementById("package_selected");
  if (selectElem) {
    selectElem.value = packageName;
    
    // Trigger smooth focus animation on contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

/**
 * Form submission router for WhatsApp integration
 */
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const packageSelected = document.getElementById("package_selected").value;
  const userMessage = document.getElementById("message").value.trim();

  // Build clean markdown message payload
  let payload = `🚀 *NEW LANDING PAGE INQUIRY*\n\n`;
  payload += `👤 *Name:* ${name}\n`;
  payload += `📧 *Email:* ${email}\n`;
  payload += `📱 *Phone:* ${phone}\n`;
  payload += `💼 *Selected Package:* ${packageSelected}\n`;
  
  if (userMessage) {
    payload += `📝 *Project Scope:* ${userMessage}\n`;
  }

  // Encode text for web URL safe execution
  const encodedMessage = encodeURIComponent(payload);

  // Construct target link
  const whatsappUrl = `https://wa.me/${2348055825647}?text=${encodedMessage}`;

  // Execute deep link redirect
  window.open(whatsappUrl, "_blank");
});