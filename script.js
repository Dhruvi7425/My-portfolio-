// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  menuToggle.classList.toggle("active")
})

// Close menu when clicking nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
    menuToggle.classList.remove("active")
  })
})

// Navbar background on scroll
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(2, 6, 23, 0.95)"
  } else {
    navbar.style.background = "rgba(2, 6, 23, 0.8)"
  }
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
const formStatus = document.getElementById("formStatus")

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value,
  }

  // Change button text
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  try {
    // Replace this URL with your backend endpoint
    const response = await fetch("contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      formStatus.textContent = "Message sent successfully!"
      formStatus.className = "form-status success"
      contactForm.reset()
    } else {
      throw new Error("Failed to send message")
    }
  } catch (error) {
    formStatus.textContent = "Failed to send message. Please try again."
    formStatus.className = "form-status error"
  } finally {
    submitBtn.textContent = originalText
    submitBtn.disabled = false

    // Hide status after 5 seconds
    setTimeout(() => {
      formStatus.style.display = "none"
    }, 5000)
  }
})

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 64 // navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})
