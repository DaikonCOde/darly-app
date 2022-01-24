import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


export const uploadImage = (file, setUrlImage) => {

  const storage = getStorage();
  const imgRef = ref(storage, `images/${file.name}`);

  // 'file' comes from the Blob or File API
  uploadBytes(imgRef, file).then((snapshot) => {
    console.log(snapshot);
    getDownloadURL(imgRef)
      .then((url) => {
        console.log(url)
        return setUrlImage((prevState) => [ ...prevState, url ])
      });
  });


}
