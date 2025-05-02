import './NewsCard.css'

const NewsCard = ({img, date, time, desc, cardWidth }) => {
    return ( 
        <>
         <div className={`${cardWidth}-card-box`} data-aos="fade-up">
                        <div className={`${cardWidth}-card`}>
                        <img src={img} alt="" />
                        </div>
                        <div className={`${cardWidth}-card-description`}>
                        <p className='date-time'>{date}, {time}</p>
                        <p className='event'>{desc}</p>
                        </div>
                    </div>
        </>
     );
}
 
export default NewsCard;