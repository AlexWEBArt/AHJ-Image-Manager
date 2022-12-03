function createImagePreview(element) {
  const containerImage = document.createElement('DIV');
  const imagePreview = document.createElement('IMG');
  const close = document.createElement('SPAN');

  containerImage.classList.add('container_image');
  imagePreview.classList.add('preview_image');
  close.classList.add('close');
  close.textContent = '\u2573';

  element.appendChild(containerImage);
  containerImage.appendChild(imagePreview);
  containerImage.appendChild(close);

  close.addEventListener('click', () => {
    close.closest('.container_image').remove(close.closest('.container_image'));
  });
}

export default createImagePreview;
