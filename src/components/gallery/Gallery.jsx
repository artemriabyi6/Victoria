import './gallery.css'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Gallery = () => {

    const isMobile = useMediaQuery({maxWidth: 767})

    return ( 

        isMobile ? (
            <div className="container">
            <div className="title-box">
                <h3>Галереї</h3>
                <a href="">Більше</a>
            </div>
            <div className="gallery-box">
                    <div className="gallery-card">
                        <Link to='/photos'>
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                        </Link>
                    </div>
            </div>
            
        </div>
        ) : (
            <div className="container">
            <div className="title-box">
                <h3>Галереї</h3>
                <a href="">Більше</a>
            </div>
            <div className="gallery-box">
                    <div className="gallery-card">
                        <Link to='/photos'>
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                        </Link>
                    </div>
                    <div className="gallery-card">
                        <Link to='/photos'>
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                        </Link>
                    </div>
                    <div className="gallery-card">
                        <Link to='/photos'>
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                        </Link>
                    </div>
                    <div className="gallery-card">
                        <Link to='/photos'>
                        <p className="icon-length">89 photo</p>
                        <p className='date'>11.04.2025</p>
                        <p className="gallery-description">{`24 Тур "Вікторія" - "Прикарпаття"`}</p>
                        </Link>
                    </div>
            </div>
            
        </div>
        )
       
     );
}
 
export default Gallery;