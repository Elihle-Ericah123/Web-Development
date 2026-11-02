document.addEventListener("DOMContentLoaded", function() {
  var enquiryForm = document.getElementById("enquiryForm");
  var contactForm = document.getElementById("contactEnquiryForm");
  var modal = document.getElementById("successModal");
  var closeBtn = document.querySelector(".close-fancy");
  var thanksBtn = document.getElementById("thanksBtn");

  function openModal() { if(modal) modal.style.display = "flex"; }
  function closeModal() { if(modal) modal.style.display = "none"; }

  function getVal(form, id) {
    var el = form.querySelector('#' + id) || form.querySelector('[name="'+id+'"]');
    return el ? el.value.trim() : "";
  }

  function validateForm(form) {
  let fullName = form.querySelector('[name="name"]').value.trim();
  let email = form.querySelector('[name="email"]').value.trim();
  let phone = form.querySelector('[name="phone"]').value.trim();
  let subject = form.querySelector('[name="subject"]').value.trim();
  let message = form.querySelector('[name="message"]').value.trim();

  // 1. SUBJECT - CHECK FIRST SO IT'S ALWAYS ACTIVE
  if (subject === "") {
    alert("Subject is required! Please enter a subject.");
    form.querySelector('[name="subject"]').focus();
    form.querySelector('[name="subject"]').style.border = "2px solid red";
    return false;
  }
  if (!/^[a-zA-Z ]+$/.test(subject)) {
    alert("Subject must be words only, not numbers");
    form.querySelector('[name="subject"]').focus();
    form.querySelector('[name="subject"]').style.border = "2px solid red";
    return false;
  }
  form.querySelector('[name="subject"]').style.border = "2px solid green";

  // 2. Rest of your checks
  if (fullName === "" || !/^[a-zA-Z ]+$/.test(fullName)) {
    alert("Full Name is required and must be real letters, example: Nicole Smith");
    return false;
  }
  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email");
    return false;
  }
  if (phone === "" || !/^[0-9]{10}$/.test(phone)) {
    alert("Phone must be 10 numbers, Example: 0821234567");
    return false;
  }
  if (message === "" || message.length < 20) {
    alert("Message must be at least 20 letters");
    return false;
  }

  return true;
}
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (validateForm(enquiryForm)) { openModal(); enquiryForm.reset(); }
    });
  }
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (validateForm(contactForm)) { openModal(); contactForm.reset(); }
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (thanksBtn) thanksBtn.addEventListener("click", closeModal);
  window.addEventListener("click", function(e){ if(e.target===modal) closeModal(); });
});


// FIX PICTURES - tries .png if .jpg fails
document.querySelectorAll("#menuList img, #galleryList img").forEach(img => {
  img.addEventListener("error", function handler() {
    let src = this.src;
    if (src.includes(".jpg")) {
      this.src = src.replace(".jpg", ".png");
    } else if (src.includes(".png")) {
      this.src = src.replace(".png", ".jpeg");
    } else if (src.includes("Images/")) {
      this.src = src.replace("Images/", "images/");
    } else {
      this.src = src.replace("images/", "Images/");
    }
  });
});

// SEARCH BAR
const searchBox = document.getElementById("menuSearch");
if (searchBox) {
  searchBox.addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll("#menuList .menu-item").forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
    });
  });
}

// POPUP
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
if (modal && modalImg) {
  document.querySelectorAll("#menuList img, #galleryList img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("show");
      modalImg.src = img.src;
      captionText.textContent = img.alt;
    });
  });
  document.querySelector(".close-image").onclick = () => modal.classList.remove("show");
  modal.onclick = (e) => { if (e.target === modal) modal.classList.remove("show"); };
}