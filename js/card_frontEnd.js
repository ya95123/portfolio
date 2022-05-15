import data_fontEnd from "./data_frontEnd.js"
const card = document.getElementById("card")
const dataCard = data_fontEnd.card
console.log(dataCard)

// 製造卡片
dataCard.forEach(item => {
  card.insertAdjacentHTML("beforeEnd",
    `
    <div class="card-frame" data-card="${item.cate}">
      <div class="card-img-frame">
        <img class="card-img" loading="lazy" src="${item.imgSrc}">
      </div>
      <div class="card-tag-frame">
        <span class="card-tag" data-cate="${item.cate}">${item.cateName}</span>
        <span class="card-company">${item.company}</span>
        <span class="card-time">${item.time}</span>
      </div>
      <div class="card-text-frame">
        <h3 class="card-title">
          ${item.title}
          <a class="fa-solid fa-link" href="${item.url}" target="_blank"></a>
        </h3>
        <p class="card-intro">${item.intro}</p>
      </div>
    </div>
    `
  )
})