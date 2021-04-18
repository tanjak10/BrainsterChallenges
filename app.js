$(function () {
  //write your code here

  let race = $(".btn1");
  let startOver = $(".btn2");
  let firstCar = $(".gif1");
  let secondCar = $(".gif2");
  let finish = $(".finish-gif");
  let first = false;
  let second = false;
  let hiddenOne = $(".one");
  let hiddenTwo = $(".two");
  let hiddenThree = $(".three");
  let hiddenImg = $(".hidden-img");
  let table = $("table");
  let bodyRace = $("#race");

  race.on("click", function () {
    hiddenImg.css({ display: "block" });
    hiddenThree.fadeIn(500, function () {
      hiddenThree.fadeOut(500, function () {
        hiddenTwo.fadeIn(500, function () {
          hiddenTwo.fadeOut(500, function () {
            hiddenOne.fadeIn(500, function () {
              hiddenOne.fadeOut(500, function () {
                hiddenImg.css({ display: "none" });
                race.attr("disabled", true);
                var carOneTime = Math.floor(Math.random() * 7000);
                var carTwoTime = Math.floor(Math.random() * 7000);
                table.append(`<tr>
            <td class = 'firstData'></td>
            <td class = 'secondData'></td>
          </tr>`);
                var place1;
                var place2;

                if (carOneTime < carTwoTime) {
                  place1 = "first";
                } else {
                  place1 = "second";
                }
                if (carTwoTime < carOneTime) {
                  place2 = "first";
                } else {
                  place2 = "second";
                }
                localStorage.setItem("carOneTime", carOneTime);
                localStorage.setItem("carTwoTime", carTwoTime);
                localStorage.setItem("firstPlace", place1);
                localStorage.setItem("secondPlace", place2);
                firstCar.animate({
                  duration: carOneTime,
                  complete: function () {
                    table
                      .find(".firstData")
                      .append(
                        `Finished in: ${place1} place with a time of: ${carOneTime} miliseconds!`
                      );
                    first = true;
                    completed();
                  },
                });
                secondCar.animate({
                  duration: carOneTime,
                  complete: function () {
                    table
                      .find(".firstData")
                      .append(
                        `Finished in: ${place2} place with a time of: ${carTwoTime} miliseconds!`
                      );
                    second = true;
                    completed();
                  },
                });
              });
            });
          });
        });
      });
    });
  });

  let item1 = localStorage.getItem("carOneTime");
  let item2 = localStorage.getItem("carTwoTime");
  let position1 = localStorage.getItem("firstPlace");
  let position2 = localStorage.getItem("secondPlace");
  let secondTable = $(".table2");

  if (item1 && item2) {
    secondTable.css({ opacity: "1" });
  }
  secondTable.find("table").append(`<tr class="table-row">
  <td class="first-car-value text-white d-block"></td>
  <td class="second-car-value  text-white d-block"></td>
  </tr>`);

  $(document)
    .find(".table-row")
    .find(".first-car-value")
    .append(
      `<span class='font-weight-bold'>Car1</span> finished in <span class="font-weight-bold">${position1} </span> place with a time of <span class="font-weight-bold">${item1}</span> miliseconds!`
    );
  $(document)
    .find(".table-row")
    .find(".second-car-value")
    .append(
      `<span class='text-danger font-weight-bold'>Car2</span> finished in <span class="text-danger font-weight-bold"> ${position2}</span> place with a time of <span class="text-danger font-weight-bold"> ${item2}</span> miliseconds!`
    );

  localStorage.removeItem("carOneTime");
  localStorage.removeItem("carTwoTime");
  localStorage.removeItem("firstPlace");
  localStorage.removeItem("secondPlace");

  function completed() {
    if (first === true || second === true) {
      finish.css({ display: "block" });
    }
    bodyRace.css({ backgroundColor: "rgba(0,0,0,6)" });
  }

  startOver.on("click", function () {
    if (first === true && second === true) {
      race.attr("disabled", false);
      secondCar.animate({ marginLeft: "0" }, 0, function () {
        finish.css({ display: "none" });
      });
      firstCar.animate({ marginLeft: "0" }, 0, function () {});
      first = false;
      second = false;
      bodyRace.css({ backgroundColor: "#24202" });
    }
  });
});
