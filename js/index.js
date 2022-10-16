/* const content = document.querySelector(".content");

const info = [
  {
    title: "Lockerlegends",
    desc: "A project done for a customer from Las Vegas, re-building a wordpress site. /n only using wordpress as a headless cms and building the frontednd with NEXT.JS, SCSS modules, Framer-motion and GraphQL",
    img: "/assets/images/lln1.png",
  },
  {
    title: "Street Art Market",
    desc: "A project done for a customer from Stockholm, re-building a wordpress site. /n only using wordpress as a headless cms and building the frontednd with NEXT.JS, SCSS modules, Framer-motion and GraphQL",
    img: "/assets/images/streetartmarket.png",
  },
];

let div = document.createElement("DIV");
info.forEach(({ title, desc, img }) => {
  div = `
        <h1 class="content_title">${title}<h1>
        <h4 class="content_desc">${desc}</h4>
        <img src="${img}" class="content_img"></img>
        `;
});

content.innerHTML = div;
 */
/* 
const contentTitle = document.createElement("h2");
contentTitle.classList.add("content_title");
contentTitle.textContent = info[0].title;

content.appendChild(contentTitle); */
var myPath = document.getElementById("cpath");
var length = myPath.getTotalLength();
console.log(length);
