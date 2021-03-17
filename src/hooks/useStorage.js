import { useEffect, useState } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

// state to use storage to upload images and get url to save in db

// db contains collection(which is images) then document (which is record id auto created) then field (which carry date and url of image)

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // create refrence url to use in storage
        const sotrageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images')

        // use storageRef to put it in aollection of urls in storage refrence
        // put method is async
        sotrageRef.put(file).on('state_changed', (snap) => {
            // create progress bar
            let percentege = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentege);
        }, (err) => {
            setError(err)
        }, async() => {
            const url = await sotrageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt}) // make collection to save images in db
            setUrl(url)
        })
    }, [file])// this function runs every file selected

    return {progress, url, error}
}

export default useStorage;