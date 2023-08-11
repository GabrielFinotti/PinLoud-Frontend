// Visualização de prévia

function updatePreviewImage() {
    var uploadInput = document.getElementById('uploadInput');
    var previewImage = document.getElementById('previewImage');
    var uploadedImage = document.getElementById('uploadedImage');

    uploadInput.addEventListener('change', function (event) {
        var file = event.target.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result;
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block';
            };

            reader.readAsDataURL(file);
        }
    });
}
