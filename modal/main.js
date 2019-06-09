document.addEventListener("DOMContentLoaded", function() {
  var modalTrigger = document.getElementsByClassName("modal-trigger-box")[0];
  var modalWrapper = document.getElementsByClassName("modal-wrapper")[0];
  var closeModal = document.getElementsByClassName("fa-times")[0];

  modalTrigger.addEventListener("click", function() {
    modalWrapper.classList.add("show");
  });

  closeModal.addEventListener("click", function() {
    modalWrapper.classList.remove("show");
  });
});
