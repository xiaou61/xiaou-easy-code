import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:8081/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      var imgUrl="http://localhost:8081/"+response.data
      setImageUrl(imgUrl);
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  return (
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadImage}>上传图片</button>
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      </div>
  );
}

export default ImageUploader;
