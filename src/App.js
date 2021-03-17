import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  // state to link Modal with app when click on image 
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <br />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={ setSelectedImg }/>}
    </div>
  );
}

export default App;
