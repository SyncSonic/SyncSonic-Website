document.addEventListener("DOMContentLoaded", function () {
  const recordButton = document.getElementById("record-button");
  const recordContent = document.getElementById("record-content");

  const uploadButton = document.getElementById("upload-button");
  const uploadContent = document.getElementById("upload-content");

  const filesButton = document.getElementById("files-button");
  const filesContent = document.getElementById("files-content");

  const buttons = [recordButton, uploadButton, filesButton];
  const contents = [recordContent, uploadContent, filesContent];

  function change_page(button, content) {
    for (let i = 0; i < buttons.length; i++) {
      const b = buttons[i];
      const c = contents[i];
      if (b === button) {
        b.classList.add("active-button");
        c.style.display = "flex";
      } else {
        b.classList.remove("active-button");
        c.style.display = "none";
      }
    }
    content.classList.toggle("show");
  }

  for (let i = 0; i < buttons.length; i++) {
    const b = buttons[i];
    const c = contents[i];
    b.addEventListener("click", () => {
      change_page(b, recordContent);
    });
  }
});
