import createImagePreview from './createImagePreview';

console.log('app.js is bunled');

const dndContainer = document.querySelector('.dnd_container');
const fileInput = dndContainer.querySelector('.input_file');
const previewContainer = document.querySelector('.preview_container');

dndContainer.addEventListener('click', (e) => {
  e.preventDefault();

  fileInput.dispatchEvent(new MouseEvent('click'));
});

dndContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
});

const displayImageContent = (e) => {
  e.preventDefault();

  createImagePreview(previewContainer);

  const images = Array.from(previewContainer.querySelectorAll('.preview_image'));
  const nextPreview = images[images.length - 1];

  if (e instanceof ProgressEvent) {
    nextPreview.src = e.target.result;
  }
  if (e instanceof DragEvent) {
    nextPreview.src = URL.createObjectURL(e.dataTransfer.files && e.dataTransfer.files[0]);
  }
};

dndContainer.addEventListener('drop', (e) => {
  e.preventDefault();

  displayImageContent(e);
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files && fileInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.addEventListener('load', displayImageContent);

  reader.readAsDataURL(file);

  fileInput.value = null;
});
