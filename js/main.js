$(function () {
  // write your code here

  function createCard(obj) {
    return `<div class="col-3>"<a href="#"><div class="card mr-3 my-3" style="width: 15rem;">
        <img src="img/${obj.image}.png" class="card-img-top" alt="${obj.name}" style="width:200px; height:150px;">
        <div class="card-body" style="background-color:#ffa500; padding:15px;" >
          <h6 class="card-title" style="font-weight:bolder;">${obj.name}</h6>
          <p class="card-text">${obj.price}$</p>
        </div>
      </div>
      </a>
      </div>`;
  }

  $.get("https://json-project3.herokuapp.com/products", function (bikes) {
    bikes.forEach((bike) => {
      $(".all-bikes").append(createCard(bike));
    });
  });

  // $(".show-all").on("click", function () {
  //   $(".all-bikes").filter((bike) => {

  //   });
  // });

  $(".male").on("click", function (bikes) {
    bikes.forEach(() => {
      $(".all-bikes").filter("MALE");
    });
  });
});
