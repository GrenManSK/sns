function opacity(id, value) {
  String(value);
  document.getElementById(id).style.opacity = value;
}

function mtop(id, value) {
  document.getElementById(id).style.marginTop = value;
}

function left(id, value) {
  document.getElementById(id).style.marginLeft = value;
}

function tran(id, value) {
  document.getElementById(id).style.transition = value;
}

function width(id, value) {
  document.getElementById(id).style.width = value;
}

function sauce(id, value) {
  document.getElementById(id).src = value;
}

function out(list) {
  for (var i = 0; i < list.length; i++) {
    document.getElementById(list[i]).style.display = "none";
  }
}

value = window.scrollY;
function explore() {
  console.log(value);
  if (value < 1) {
    window.scrollTo(0, 200);
  } else if (value > 0 && value <= 500) {
    window.scrollTo(0, 750)
  } else if (value > 500 && value <= 1000) {
    window.scrollTo(0, 1500)
  } else if (value > 1000 && value <= 1750) {
    window.scrollTo(0, 2200)
    value = window.scrollY;
  }else if (value > 1750) {
    window.scrollTo(0, 2400)
    value = window.scrollY;
  }
}





window.addEventListener("scroll", (event) => {
  value = window.scrollY;
  console.log(value);
  if (value == 0) {
    if (document.querySelector("#svg").classList.contains("active")) {
      document.querySelector("#svg").classList.toggle("active");
      mtop("navbar_navigation", "0vw");
    }
    tran("navbar_logo", "0.5s");
    left("navbar_logo", "2.5vw");
    tran("navbar_title", "0.5s");
    mtop("navbar_title", "3vw");
    tran("navbar_navigation", "0.75s");
    left("navbar_navigation", "85vw");
    mtop("navbar_navigation", "0vw");
    tran("navbar_navigation_show", "1s");
    left("navbar_navigation_show", "100vw");
    tran("main_stage_logo", "0.75s");
    left("main_stage_logo", "-30vw");
    tran("main_stage_podium_mojasns", "1s");
    left("main_stage_podium_mojasns", "100vw");
  }
  if (value != 0) {
    tran("navbar_navigation_show", "1s");
    left("navbar_navigation_show", "90vw");
    mtop("navbar_navigation", "7.5vw");
    tran("navbar_logo", "1s");
    left("navbar_logo", "-20vw");
    tran("navbar_title", "0.5s");
    mtop("navbar_title", "-10vw");
    if (document.querySelector("#svg").classList.contains("active")) {
    } else {
      tran("navbar_navigation", "0.75s");
      left("navbar_navigation", "100vw");
    }
    mtop("main_stage_text", String(value * 0.005) + "vw");
    mtop("main_stage_podium_mojasns", "10vw");
    mtop("main_stage_logo", "1vw");
    mtop('main_stage_explore', '32.5vw')
    tran('main_stage_explore', 'margin-top 1s')
    if (value > 500 && value < 1000) {
      tran("main_stage_logo", "1.25s");
      left("main_stage_logo", "60vw");
      tran("main_stage_podium_mojasns", "1s");
      left("main_stage_podium_mojasns", "100vw");
      tran("main_stage_text_intro", "1s");
      left("main_stage_text_intro", "5vw");
      tran("main_stage_text_about", "1s");
      left("main_stage_text_about", "100vw");
    } else if (value >= 1000 && value < 1750) {
      tran("main_stage_logo", "1.25s");
      left("main_stage_logo", "10vw");
      tran("main_stage_podium_mojasns", "1s");
      left("main_stage_podium_mojasns", "100vw");
      tran("main_stage_text_intro", "1s");
      left("main_stage_text_intro", "-50vw");
      tran("main_stage_text_about", "1s");
      left("main_stage_text_about", "50vw");
    } else if (value >= 1750 && value < 2250) {
      tran("main_stage_logo", "1.25s");
      left("main_stage_logo", "35vw");
      mtop("main_stage_logo", "-7.5vw");
      tran("main_stage_text_intro", "1s");
      left("main_stage_text_intro", "-50vw");
      tran("main_stage_text_about", "1s");
      left("main_stage_text_about", "100vw");
      tran("main_stage_podium_mojasns", "1s");
      left("main_stage_podium_mojasns", "32vw");
      mtop("main_stage_podium_mojasns", "25vw");
    } else if (value >= 2250) {
      mtop('main_stage_explore', '-20vw')
      tran('main_stage_explore', 'margin-top 1.5s')
      tran("main_stage_logo", "1.25s");
      left("main_stage_logo", "35vw");
      mtop("main_stage_logo", "-50vw");
      tran("main_stage_podium_mojasns", "1s");
      left("main_stage_podium_mojasns", "32vw");
      mtop("main_stage_podium_mojasns", "-20vw");
    } else {
      tran("main_stage_logo", "0.75s");
      left("main_stage_logo", "10vw");
      tran("main_stage_podium_mojasns", "1s");
      left("main_stage_podium_mojasns", "50vw");
      tran("main_stage_text_intro", "1s");
      left("main_stage_text_intro", "-100vw");
      tran("main_stage_text_about", "1s");
      left("main_stage_text_about", "100vw");
    }
  }
});

window.addEventListener("click", (event) => {
  if (value != 0) {
    if (document.querySelector("#svg").classList.contains("active")) {
      left("navbar_navigation", "85vw");
      tran("navbar_navigation", "0.75s");
    } else if (!document.querySelector("#svg").classList.contains("active")) {
      left("navbar_navigation", "100vw");
      tran("navbar_navigation", "0.75s");
    }
  }
});

// navigation

$("#navbar_button1").hover(
  function () {
    $(this).addClass("navbar_button_active");
    $("#navbar_button2").removeClass("navbar_button_active");
    $("#navbar_button3").removeClass("navbar_button_active");
  },
  function () {
    $("#navbar_button1").removeClass("navbar_button_active");
    if (
      document
        .querySelector("#navbar_button1")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button1").addClass("navbar_button_active");
    }
    if (
      document
        .querySelector("#navbar_button2")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button2").addClass("navbar_button_active");
    }
    if (
      document
        .querySelector("#navbar_button3")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button3").addClass("navbar_button_active");
    }
  }
);
$("#navbar_button2").hover(
  function () {
    $(this).addClass("navbar_button_active");
    $("#navbar_button1").removeClass("navbar_button_active");
    $("#navbar_button3").removeClass("navbar_button_active");
  },
  function () {
    $("#navbar_button2").removeClass("navbar_button_active");
    if (
      document
        .querySelector("#navbar_button1")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button1").addClass("navbar_button_active");
    }
    if (
      document
        .querySelector("#navbar_button2")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button2").addClass("navbar_button_active");
    }
    if (
      document
        .querySelector("#navbar_button3")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button3").addClass("navbar_button_active");
    }
  }
);
$("#navbar_button3").hover(
  function () {
    $(this).addClass("navbar_button_active");
    $("#navbar_button1").removeClass("navbar_button_active");
    $("#navbar_button2").removeClass("navbar_button_active");
  },
  function () {
    $("#navbar_button3").removeClass("navbar_button_active");
    if (
      document
        .querySelector("#navbar_button1")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button1").addClass("navbar_button_active");
    }
    if (
      document
        .querySelector("#navbar_button2")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button2").addClass("navbar_button_active");
    }
    if (
      document
        .querySelector("#navbar_button3")
        .classList.contains("navbar_button_main")
    ) {
      $("#navbar_button3").addClass("navbar_button_active");
    }
  }
);
