(function () {
  "use strict";

  function fallbackCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();

    var copied = document.execCommand("copy");
    document.body.removeChild(field);
    return copied;
  }

  async function copyEmail(trigger) {
    var email = trigger.getAttribute("data-copy-email");
    var copied = false;

    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(email);
      copied = true;
    } catch (error) {
      copied = fallbackCopy(email);
    }

    if (!copied) {
      window.location.href = trigger.getAttribute("href");
      return;
    }

    var originalLabel = trigger.getAttribute("data-copy-label") || trigger.textContent.trim();
    trigger.setAttribute("data-copy-label", originalLabel);
    trigger.textContent = "Email copied";
    trigger.classList.add("email-copy--success");

    window.setTimeout(function () {
      trigger.textContent = originalLabel;
      trigger.classList.remove("email-copy--success");
    }, 2200);
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-copy-email]");
    if (!trigger) return;

    event.preventDefault();
    copyEmail(trigger);
  });
})();
