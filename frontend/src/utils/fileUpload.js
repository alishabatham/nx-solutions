export function readImageAsBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error('No file provided.'));
    }

    // Limit size to 5MB for fast local rendering & storage
    if (file.size > 5 * 1024 * 1024) {
      return reject(new Error('File size exceeds 5MB limit. Please choose a smaller image.'));
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
