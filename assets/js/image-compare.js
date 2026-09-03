(function () {
  "use strict";

  document.querySelectorAll("[data-image-compare]").forEach(function (comparison) {
    var range = comparison.querySelector(".image-compare__range");

    if (!range) return;

    function updatePosition() {
      comparison.style.setProperty("--position", range.value + "%");
    }

    range.addEventListener("input", updatePosition);
    updatePosition();
  });
})();
