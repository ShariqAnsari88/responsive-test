$(document).ready(function () {
  $(".nav-icon").click(function () {
    $(this).toggleClass("open")
    $("nav > ul").slideToggle()
  })

  function resize() {
    if (window.innerWidth > 767) {
      $("nav > ul").css({ display: "flex" })
    } else {
      $(".nav-icon").removeClass("open")
      $("nav > ul").hide()
    }
  }

  $(window).resize(function () {
    resize()
  })
  resize()

  $(".grid-item").click(function () {
    let imgPath = $(this).find("img").attr("src")
    $(".lightbox").removeClass("hide").addClass("show")
    if ($(".lightbox-img").length < 1) {
      $(".lightbox .content").append(`<img class="lightbox-img" src="${imgPath}">`)
    } else {
      $(".lightbox-img").attr("src", imgPath)
    }
  })

  $("body").on("click", ".close-btn, .opac-layer", function () {
    $(".lightbox").removeClass("show").addClass("hide")
  })

  $("body").on("animationend", ".hide", function () {
    $(".lightbox").removeClass("hide")
  })
})
