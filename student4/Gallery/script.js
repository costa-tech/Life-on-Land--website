function showExtendedView(imageSrc, description, caption) {
    var extendedView = document.getElementById('extended-view');
    var extendedImage = document.getElementById('extended-image');
    var extendedDescription = document.getElementById('extended-description');
    var extendedCaption = document.getElementById('extended-caption');

    extendedImage.src = imageSrc;
    extendedDescription.innerHTML = description;
    extendedCaption.innerHTML = caption;

    extendedView.style.display = 'block';
}

function closeExtendedView() {
    var extendedView = document.getElementById('extended-view');
    extendedView.style.display = 'none';
}

document.getElementById('theme-picker').addEventListener('change', function() {
    if (this.value === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

document.getElementById('font-picker').addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});