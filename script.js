"use strict";

const arrowImg = document.querySelectorAll(".arrow");
const textBold = document.querySelectorAll(".text-bold");

document.querySelectorAll(".question").forEach((question) =>
  question.addEventListener("click", () => {
    if (
      question.parentNode.classList.contains("active") &&
      question.parentNode.classList.contains("rotate")
    ) {
      question.parentNode.classList.toggle("rotate");
      question.parentNode.classList.toggle("active");
    } else {
      document
        .querySelectorAll(".question")
        .forEach((question) => question.parentNode.classList.remove("active"));
      document
        .querySelectorAll(".question")
        .forEach((question) => question.parentNode.classList.remove("rotate"));
      question.parentNode.classList.add("active");
      question.parentNode.classList.add("rotate");
    }
  })
);
