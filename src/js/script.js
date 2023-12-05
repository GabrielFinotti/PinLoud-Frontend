//Prévia imagem
document.addEventListener("DOMContentLoaded", function () {
  var uploadInput = document.getElementById("uploadInput");
  var previewImage = document.getElementById("previewImage");
  var errorMessage = document.getElementById("errorMessage");

  uploadInput.addEventListener("change", function (event) {
    var file = event.target.files[0];

    var allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    var fileExtension = file.name
      .toLowerCase()
      .substring(file.name.lastIndexOf("."));
    if (allowedExtensions.indexOf(fileExtension) === -1) {
      errorMessage.textContent =
        "Por favor, escolha um arquivo com extensão jpg, jpeg, png ou gif.";
      previewImage.style.display = "none";
      return;
    }

    errorMessage.textContent = "";

    var reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
    };

    reader.readAsDataURL(file);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const imageParam = urlParams.get("image");
  const downloadLink = document.getElementById("downloadLink");

  if (imageParam) {
    const imagemAmpliada = document.getElementById("imagemAmpliada");
    imagemAmpliada.src = imageParam;

    downloadLink.href = imageParam;
    downloadLink.setAttribute("download", "");
  }
});
