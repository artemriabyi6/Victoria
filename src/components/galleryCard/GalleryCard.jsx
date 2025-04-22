import './galleryCard.css'

const GalleryCard = (  ) => {
    return ( 
        <div className="gallery-card" data-aos="fade-up">
        <p className="icon-length">89 photo</p>
        <p className='date'>11.04.2025</p>
        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
        </div>
     );
}
 
export default GalleryCard;