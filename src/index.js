import "./style.css";
import { createHeader } from "./script/header.js";

document.addEventListener("DOMContentLoaded", () => {
  createHeader();

  const links = document.querySelectorAll(".navigation ul li a");
  const currentPage = window.location.pathname;

  links.forEach(link => {
    // Adjust this condition to match your routing
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    }
  });
});



