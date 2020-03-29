import modal from "./modal";

const addFormHandlers = () => {
  const form = document.querySelector("#quote");
  form.addEventListener("submit", evt => {
    const formData = new FormData(form);
    const [subject, description] = [
      formData.get("subject") || "No subject",
      formData.get("details") || "No description"
    ];
    modal.showModal({
      subject,
      description
    });
    evt.preventDefault();
    return false;
  });

  window.addEventListener("closeModal", () => {
    form.reset();
  });
};

export default {
  addFormHandlers
};
