// EASY............................
const mainHeading = document.getElementById("main-heading")
mainHeading.textContent = "My Awesome Shop"

// const tagline = document.getElementsByClassName("tagline")
const tagline = document.querySelector("p.tagline")
tagline.innerHTML = "Find the <strong>best</strong> products here!"

const footer_p = document.querySelector("footer p")
footer_p.innerHTML = "&copy; 2025 shivam.pandey@minfytech.com"

// MEDIUM..........................
const main_container = document.getElementById("app-container")

const heading_footer = document.createElement("h2")
heading_footer.textContent = "About Us"

const p_footer = document.createElement("p")
p_footer.textContent = "We are a small team passionate about quality products."

main_container.append(heading_footer, p_footer)

// HARD............................
const div = document.createElement("div")
div.classList.add("contact-info")

const [p1, p2] = [document.createElement("p"), document.createElement("p")]
p1.textContent = "Email: contact@awesomeshop.com"
p2.innerText = "Phone: 123-456-7890"

div.append(p1, p2)

const footer = document.querySelector("footer")
document.body.insertBefore(div, footer)