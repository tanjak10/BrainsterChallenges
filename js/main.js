$(function () {
  // write your code here

  function createCard(obj) {
    return `<div class="card mr-3 my-3" style="width: 15rem">
   <img src="img/${obj.image}.png" class="card-img-top" alt="${obj.name}" style="width:230px; height:150px" />
   <div class="card-body" style="background-color:#ffa500; padding:15px;" >
     <h6 class="card-title" style="font-weight:bolder;">${obj.name}</h6>
     <p class="card-text">${obj.price}</p>
   </div>
 </div>`;
  }

  $.get("https://json-project3.herokuapp.com/products", function (bikes) {
    bikes.forEach((bike) => {
      $(".all-bikes").append(createCard(bike));
    });
  });

  $(".show-all").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      bikes.forEach((bike) => {
        $(".all-bikes").append(createCard(bike));
        const showAllBikes = bikes.length;
        $(".badge-all").text(showAllBikes);
      });
    });
  });

  $(".male").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const maleBikes = bikes.filter((bike) => bike.gender === "MALE");
      console.log(maleBikes);
      const numOfMale = maleBikes.length;
      $(".badge-male").text(numOfMale);
    });
  });

  $(".female").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const femaleBikes = bikes.filter((bike) => bike.gender === "FEMALE");
      console.log(femaleBikes);
      const numOfFemale = femaleBikes.length;
      $(".badge-female").text(numOfFemale);
    });
  });

  $(".grand").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const grandBikes = bikes.filter(
        (bike) => bike.brand === "LE GRAND BIKES"
      );
      console.log(grandBikes);
      const numOfGrandBikes = grandBikes.length;
      $(".badge-grand").text(numOfGrandBikes);
    });
  });

  $(".kross").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const krossBikes = bikes.filter((bike) => bike.brand === "KROSS");
      console.log(krossBikes);
      const numOfKrossBikes = krossBikes.length;
      $(".badge-kross").text(numOfKrossBikes);
    });
  });

  $(".explorer").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const explorerBikes = bikes.filter((bike) => bike.brand === "EXPLORER");
      console.log(explorerBikes);
      const numOfExplorerBikes = explorerBikes.length;
      $(".badge-explorer").text(numOfExplorerBikes);
    });
  });

  $(".visitor").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const visitorBikes = bikes.filter((bike) => bike.brand === "VISITOR");
      console.log(visitorBikes);
      const numOfVisitorBikes = visitorBikes.length;
      $(".badge-visitor").text(numOfVisitorBikes);
    });
  });

  $(".pony").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const ponyBikes = bikes.filter((bike) => bike.brand === "PONY");
      console.log(ponyBikes);
      const numOfPonyBikes = ponyBikes.length;
      $(".badge-pony").text(numOfPonyBikes);
    });
  });

  $(".force").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const forceBikes = bikes.filter((bike) => bike.brand === "FORCE");
      console.log(forceBikes);
      const numOfForceBikes = forceBikes.length;
      $(".badge-force").text(numOfForceBikes);
    });
  });

  $(".e-bikes").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const eBikes = bikes.filter((bike) => bike.brand === "E-BIKES");
      console.log(eBikes);
      const numOfEBikes = eBikes.length;
      $(".badge-eBikes").text(numOfEBikes);
    });
  });

  $(".ideal").on("click", function () {
    $.get("https://json-project3.herokuapp.com/products", function (bikes) {
      const idealBikes = bikes.filter((bike) => bike.brand === "IDEAL");
      console.log(idealBikes);
      const numOfIdealBikes = idealBikes.length;
      $(".badge-ideal").text(numOfIdealBikes);
    });
  });
});
