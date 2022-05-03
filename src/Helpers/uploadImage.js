import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


export const uploadImage = (files, setFile) => {
  
  const storage = getStorage();
  files.data.map( file => {
    setFile(( prevState ) => ({ ...prevState, isLoading: true  }))
    const imgRef = ref(storage, `images/${file.name}`);

    // 'file' comes from the Blob or File API
    return uploadBytes(imgRef, file).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(imgRef)
        .then((url) => {
          console.log(url)
          return setFile((prevState) => ( { ...prevState, urlImg: [ ...prevState.urlImg, url ], isLoading: false} ) )
        });
    });
  }  )
}
