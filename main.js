
      document.querySelector("#filter-coding").addEventListener("change", handleCodingFilter);
      document.querySelector("#filter-design").addEventListener("change", handleDesignFilter);
      document.querySelector("#filter-marketing").addEventListener("change", handleMarketingFilter);

      function handleCodingFilter() {
        document.querySelector("#filter-design").checked = false;
        document.querySelector("#filter-marketing").checked = false;
        document.querySelector("#filter-design").parentElement.classList.remove("active");
        document.querySelector("#filter-marketing").parentElement.classList.remove("active");

        if (document.querySelector("#filter-coding").checked) {
          document.querySelector("#filter-coding").parentElement.classList.add("active");

          hideAllCards();
          var codingCards = document.querySelectorAll(".coding");

          var iterator = 0;
          while (iterator < codingCards.length) {
            codingCards[iterator].style.display = "inline-block";
            iterator++;
          }
        } else {
          document.querySelector("#filter-coding").parentElement.classList.remove("active");
          showAllCards();
        }
      }

      function handleDesignFilter() {
        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-marketing").checked = false;
        document.querySelector("#filter-coding").parentElement.classList.remove("active");
        document.querySelector("#filter-marketing").parentElement.classList.remove("active");

        if (document.querySelector("#filter-design").checked) {
          document.querySelector("#filter-design").parentElement.classList.add("active");
          hideAllCards();
          var designCards = document.querySelectorAll(".design");

          var iterator = 0;
          while (iterator < designCards.length) {
            designCards[iterator].style.display = "inline-block";
            iterator++;
          }
        } else {
          document.querySelector("#filter-design").parentElement.classList.remove("active");
          showAllCards();
        }
      }

      function handleMarketingFilter() {
        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-design").checked = false;
        document.querySelector("#filter-coding").parentElement.classList.remove("active");
        document.querySelector("#filter-design").parentElement.classList.remove("active");

        if (document.querySelector("#filter-marketing").checked) {
          document.querySelector("#filter-marketing").parentElement.classList.add("active");
          hideAllCards();
          var marketingCards = document.querySelectorAll(".marketing");

          var iterator = 0;
          while (iterator < marketingCards.length) {
            marketingCards[iterator].style.display = "inline-block";
            iterator++;
          }
        } else {
          document.querySelector("#filter-marketing").parentElement.classList.remove("active");
          showAllCards();
        }
      }

      function hideAllCards() {
        var allCards = document.querySelectorAll(".card");

        var iterator = 0;
        while (iterator < allCards.length) {
          allCards[iterator].style.display = "none";

          iterator++;
        }
      }

      function showAllCards() {
        var allCards = document.querySelectorAll(".card");

        var iterator = 0;
        while (iterator < allCards.length) {
          allCards[iterator].style.display = "inline-block";

          iterator++;
        }
      }