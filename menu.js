const data = [
  {
    id: 1,
    title: "Serpme Kahvaltı",
    description:
      "Egeden siyah ve yeşil kırma Zeytin çeşitleri,5 çeşit Peynir...",
    price: "100TL/Kişi Başı",
    image: "./images/serpme-kahvaltı.jpg",
    category: "Breakfast",
  },
  {
    id: 2,
    title: "Royal Burger",
    description:
      "Bioche ekmeğine sarılmış dana eti, cheddar peyniri,turşu,sos...",
    price: "50TL",
    image: "./images/royal-burger.jpg",
    category: "Lunch",
  },
  {
    id: 3,
    title: "Patates Kızartması ve Curly Chicken",
    description:
      "Çıtır çıtır patates kızartmasının yanında acı baharatlı tavuk parçaları...",
    price: "40TL",
    image: "./images/curly-chicken.jpg",
    category: "Hot&Chill",
  },
  {
    id: 4,
    title: "Viyana Usulü Shnitzel",
    description:
      " Yumuşacık ağızda dağılan bir tavuk eti,şimdi onu et ile düşünün...",
    price: "60TL",
    image: "./images/viyana-şinitzel.jpg",
    category: "Dinner",
  },
  {
    id: 5,
    title: "Makarna",
    description:
      "Üç peynirli kremalı enfes makarna",
    price: "30Tl",
    image: "./images/makarna.jpg",
    category: "Lunch",
  }
];

const categoryBtnBox = document.querySelector(".category-btns");

/*
const menuTitle=document.querySelector(".title");
const menuImgSrc=document.querySelector(".img").getAttribute('src');
const menuDescription=document.querySelector(".description");
const menuPrice=document.querySelector(".price");
*/

const menuBox = document.querySelector(".menu-box");
const menuCategories = data.reduce(
  (total, item) => {
    if (!total.includes(item.category)) {
      total.push(item.category);
    }
    return total;
  },
  ["All"]
);
let btnTemplate = [];

function displayBtns() {
  menuCategories.forEach((category) => {
    const temp = `<button type="button">${category}</button>`;
    btnTemplate.push(temp);
  });
  btnTemplate = btnTemplate.join("");
  categoryBtnBox.innerHTML = btnTemplate;
}

window.addEventListener("DOMContentLoaded", () => {
  displayBtns();
  displayMenuItems(data);
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let tempList = [];
      if (btn.textContent === "All") {
        displayMenuItems(data);
        return;
      }
      data.forEach((item) => {
        if (btn.textContent === item.category && !tempList.includes(item)) {
          tempList.push(item);
        }
      });
      displayMenuItems(tempList);
    });
  });
});

function displayMenuItems(items) {
  let menuArr = [];
  const menuItem = items.forEach((menu) => {
    const cardTitle = menu.title;
    const cardText = menu.description;
    const cardSrc = menu.image;
    const cardPrice = menu.price;
    let menuTemplate = `<article class="menu-item">
    <h2 class="title">${cardTitle}</h2>
    <div class="section-splitter">
    <div class="img-box">    
      <img class="img" src="${cardSrc}" alt="">
    </div>
        <div class="item-flex">
            <p class="description">${cardText}</p>
            <div class="price-box">
                <h4 class="price">${cardPrice}</h4>
            </div>
        </div>
    </div>
</article>`;

    menuArr.push(menuTemplate);
  });
  menuBox.innerHTML = menuArr.join("");
}
