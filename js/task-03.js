const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// const arrayImages = [];
// images.forEach(({ url, alt }) => {
//   let liElem = document.createElement("li");
//   let imgElem = document.createElement("img");
//   let divEl = document.createElement("div");
//   imgElem.src = url;
//   imgElem.alt = alt;
//   imgElem.width = 260;

//   divEl.appendChild(imgElem);
//   divEl.classList.add("thumb");
//  
//   liElem.appendChild(divEl);

//   console.log(liElem);
//   arrayImages.push(liElem);
// });
// console.log(arrayImages);

const makeListItemWithImage = ({ url, alt }) => {
  return `<li>
        <img src= ${url} alt= ${alt}>
    </li>`;
};

const arrayImages = images.map(makeListItemWithImage).join("");

const listImages = document.querySelector(".gallery");
listImages.classList.add("box-flex");

listImages.insertAdjacentHTML("beforeend", arrayImages);
console.log(listImages);
const thumbBoxItems = document.querySelectorAll("li");

thumbBoxItems.forEach((item) => {
  item.classList.add("thumb");
});

const imageInThumb = document.querySelectorAll(".thumb > img");

imageInThumb.forEach((image) => {
  image.classList.add("image-in-thumb");
});
