const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const subjectPlaceholder = modal.querySelector(".message-subject");
const descriptionPlaceholder = modal.querySelector(".message-description");

const setModalData = data => {
  if (!data) return;
  clearModalData();
  subjectPlaceholder.innerHTML = data.subject;
  descriptionPlaceholder.innerHTML = data.description;
};

const clearModalData = () => {
  subjectPlaceholder.innerHTML = "";
  descriptionPlaceholder.innerHTML = "";
};

const showModal = data => {
  setModalData(data);
  modal.classList.add("show-modal");
};

const closeModal = () => {
  modal.classList.remove("show-modal");
  window.dispatchEvent(new CustomEvent("closeModal"));
};

const windowOnClick = evt => {
  if (evt.target === modal) {
    closeModal();
  }
};

const addModalClickHandlers = () => {
  closeButton.addEventListener("click", closeModal);
  window.addEventListener("click", windowOnClick);
};

export default {
  addModalClickHandlers,
  showModal
};
