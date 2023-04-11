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
//   divEl.style.width = "260px";
//   divEl.style.height = "170px";

//   imgElem.style.display = "block";
//   imgElem.style.width = "100%";
//   imgElem.style.height = "100%";
//   imgElem.style.objectFit = "cover";

//   liElem.appendChild(divEl);

//   console.log(liElem);
//   arrayImages.push(liElem);
// });
// console.log(arrayImages);

const makeArrayImages = (images) => {
  return images.map(({ url, alt }) => {
    let liElem = document.createElement("li");
    let imgElem = document.createElement("img");

    imgElem.src = url;
    imgElem.alt = alt;

    liElem.classList.add("thumb");

    imgElem.classList.add("image-in-thumb");

    liElem.appendChild(imgElem);

    console.log(liElem);
    return liElem;
  });
};
const arrayImages = makeArrayImages(images);
const listImages = document.querySelector(".gallery");
listImages.append(...arrayImages);
listImages.classList.add("box-flex");
// listImages.style.display = "flex";
// listImages.style.listStyle = "none";
// listImages.style.gap = "10px";
