import './gallery.css'

const Gallery = () => {
    return ( 
        <div className="container">
            <div className="title-box">
                <h3>Галереї</h3>
                <a href="">Більше</a>
            </div>
            <div className="gallery-box">
                    <div className="gallery-card">
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                    </div>
                    <div className="gallery-card">
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                    </div>
                    <div className="gallery-card">
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                    </div>
                    <div className="gallery-card">
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                    </div>
            </div>
            
        </div>
     );
}
 
export default Gallery;