// Pré-visualização
document.addEventListener("DOMContentLoaded", function () {
    var uploadInput = document.getElementById("uploadInput");
    var previewImage = document.getElementById("previewImage");

    uploadInput.addEventListener("change", function (event) {
        var file = event.target.files[0];

        if (file) {
            var validExtensions = ["jpg", "jpeg", "png", "gif"];
            var fileExtension = file.name.split(".").pop().toLowerCase();

            if (validExtensions.includes(fileExtension)) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = "block";
                };

                reader.readAsDataURL(file);
            } else {
                alert("Por favor, escolha um arquivo com extensão jpg, jpeg, png ou gif.");
                uploadInput.value = ""; // Limpar a seleção do arquivo inválido
                previewImage.style.display = "none"; // Esconder a imagem de pré-visualização
            }
        }
    });
});
