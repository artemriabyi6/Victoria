import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './teamslider.css';
import images from '../../utils/images';

const players = [
  {
    name: 'Микита Турбаєвський',
    position: 'Воротар',
    number: 30,
    image: images.slide2,
  },
  {
    name: 'Дмитро Мацапура',
    position: 'Воротар',
    number: 53,
    image: images.slide2,
  },
  {
    name: 'Жуніньо',
    position: 'Захисник',
    number: 10,
    image: images.slide2,
  },
  {
    name: 'Габріель Ескінья',
    position: 'Захисник',
    number: 4,
    image: images.slide2,
  },
  {
    name: 'Роман Вантух',
    position: 'Захисник',
    number: 47,
    image: images.slide2,
  },
  {
    name: 'Роман Вантух',
    position: 'Захисник',
    number: 47,
    image: images.slide2,
  },
  {
    name: 'Роман Вантух',
    position: 'Захисник',
    number: 47,
    image: images.slide2,
  },
  {
    name: 'Роман Вантух',
    position: 'Захисник',
    number: 47,
    image: images.slide2,
  },
  {
    name: 'Роман Вантух',
    position: 'Захисник',
    number: 47,
    image: images.slide2,
  },
  {
    name: 'Роман Вантух',
    position: 'Захисник',
    number: 47,
    image: images.slide2,
  },
  {
    name: 'Роман Вантух',
    position: 'Захисник',
    number: 47,
    image: images.slide2,
  },
];

const slidesPerView = 5;

const TeamSlider = () => {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].offsetWidth + 16;
      const maxScrollIndex = players.length - slidesPerView;

      setActiveIndex((prevIndex) => {
        let newIndex = direction === 'left' ? prevIndex - 1 : prevIndex + 1;
        newIndex = Math.max(0, Math.min(newIndex, maxScrollIndex));

        const scrollAmount = newIndex * cardWidth;
        sliderRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });

        return newIndex;
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0].offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current && sliderRef.current.children[index]) {
      const cardWidth = sliderRef.current.children[0].offsetWidth + 16;
      sliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
  
    slider.addEventListener('scroll', handleScroll);
  
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
  
        if (nextIndex > players.length - slidesPerView) {
          // Повертаємося на початок
          scrollToSlide(0);
          return 0;
        } else {
          scrollToSlide(nextIndex);
          return nextIndex;
        }
      });
    }, 3000); // кожні 5 секунд
  
    return () => {
      slider.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);
  

  return (
    <div className="team-slider-container">
      <button className="team-slider-btn left" onClick={() => scroll('left')} disabled={activeIndex === 0}>
        &lt;
      </button>
      <div className="team-slider-track" ref={sliderRef}>
        {players.map((player, index) => (
            <div className="player-card" key={index} >
               <Link  to='/player/1'>
            <img src={player.image} alt={player.name} className="player-img" />
            <div className="player-info">
              <h3>{player.name}</h3>
              <p className="position">{player.position}</p>
              <div className="number">{player.number}</div>
            </div>
            </Link>
          </div>
         
        ))}
      </div>
      <button
        className="team-slider-btn right"
        onClick={() => scroll('right')}
        disabled={activeIndex >= players.length - slidesPerView}
      >
        &gt;
      </button>

      <div className="team-slider-dots">
        {Array.from({ length: players.length - slidesPerView + 1 }).map((_, index) => (
          <span
            key={index}
            className={`team-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;
