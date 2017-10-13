export function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', (e) => {
    const image = new Image();
    image.src = e.target.result;
    image.onload = () => {
      callback(reader.result, image.width, image.height);
    };
  });
  reader.readAsDataURL(img);
}
