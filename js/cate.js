const cateBtns = document.querySelectorAll(".cate-btn")


// *cate click
cateBtns.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault()

    const cardFrames = document.querySelectorAll(".card-frame")

    // *btn 變色
    cateBtns.forEach(i => i.classList.remove("active"))
    item.classList.add("active")

    // *all
    if (item.getAttribute("id").includes("all")) {
      cardFrames.forEach(item => item.classList.remove("none"))
      return
    }

    // *news
    if (item.getAttribute("id").includes("news")) {
      cardFrames.forEach(item => item.getAttribute("data-card").includes("news") ? item.classList.remove("none") : item.classList.add("none"))
      return
    }

    // *event
    if (item.getAttribute("id").includes("event")) {
      cardFrames.forEach(item => item.getAttribute("data-card").includes("event") ? item.classList.remove("none") : item.classList.add("none"))
      return
    }

    // *map
    if (item.getAttribute("id").includes("map")) {
      cardFrames.forEach(item => item.getAttribute("data-card").includes("map") ? item.classList.remove("none") : item.classList.add("none"))
      return
    }

    // *game
    if (item.getAttribute("id").includes("game")) {
      cardFrames.forEach(item => item.getAttribute("data-card").includes("game") ? item.classList.remove("none") : item.classList.add("none"))
      return
    }

    console.log("cate error")
  }, false)
})