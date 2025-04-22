import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GalleryCard from "../../components/galleryCard/GalleryCard";
import './photos.css'

const Photos = () => {
    return ( 
        <>
            <Header/>
            <section className="photos-section">
                <div className="container">
                    <h1>Фото Галереї</h1>
                </div>
            </section>
            <div className="container">
                <div className="gallery-block" data-aos="fade-up">
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                </div>
              
            </div>
            <Footer/>
        </>
     );
}
 
export default Photos;