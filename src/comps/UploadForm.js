import React, { useState } from 'react';
import ProgressBar from '../comps/ProgressBar'

const UploadForm = () => {
    // create state to carry files
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        let selected = e.target.files[0];

        // array of allowed types of file
        const types = ['image/png', 'image/jpeg'];

        //check if user selected file & valid type (not doc or pdf)
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please Select an Image File (png or jpeg)');
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>            <div className="output">
                {error && <div className="error">{error}</div>}
                <br />
                {file && <div>{file.name}</div>}
                <br />
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}

export default UploadForm