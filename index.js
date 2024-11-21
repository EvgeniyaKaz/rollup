import logo from "./assets/images.png";
import "./index.css";
console.log("Hello World!");

const header = document.createElement("h1");
const img = document.createElement("img");
img.src = logo;

document.querySelector("body").append(header);
document.querySelector("body").append(img);
