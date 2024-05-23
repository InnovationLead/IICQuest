import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './style.css'


const images = [
    {
        original: "images/gallery/2O4A0182.JPG"
    },
    {
        original: "images/gallery/2O4A0300.JPG"
    },
    {
        original: "images/gallery/2O4A0392.JPG"
    },
    {
        original: "images/gallery/2O4A8402.JPG"
    },
    {
        original: "images/gallery/2O4A8444.JPG"
    },
    {
        original: "images/gallery/2O4A8549.JPG"
    },
    {
        original: "images/gallery/2O4A8762.JPG"
    },
    {
        original: "images/gallery/2O4A9787.JPG"
    },
];



const QuestGallery = () => {
    return (
        <div className='pb-20'>
            <h2 id='gallery' className='text-5xl text-center mt-40 mb-7 font-oswald'>OUR ARCHIVES</h2>
            <ImageGallery  classname="mt-5" items={images}  autoPlay={true} useBrowserFullscreen={false}/>;

        </div>
    )
}

export default QuestGallery