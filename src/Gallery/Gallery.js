import React, {useEffect, useState} from 'react';
import styles from "./Gallery.module.css"



const Gallery = () => {

    const [pictures, setPictures] = useState([]);

    const GetData = async() => {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=MarilynMonroe&per_page=9&format=json&nojsoncallback=1`);
        const json = await response.json();
        let picturesArray = json.photos.photo.map((picture) => {
            let srcPath = `https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`;
            return srcPath;
        });
        setPictures(picturesArray);
    };

    useEffect(() => {
        GetData();
    },[]);

    return (
        <div className={styles.gallery}>
            {pictures.map(picture => <img src={picture} key={picture} alt="Marilyn Monroe" />)}
        </div>
    );
};

export default Gallery;