import { Link } from "react-router-dom";
import './dropDown.css'

const DropDown = ( {array} ) => {

    return ( 
        <>
        <div className="dropdown">
                        <ul>
                          {array.map((item, index) => (
                            <li key={item + index}><Link to='/Calendar'>{item}</Link></li>
                          ))}
                        </ul>
        </div>
       
        </>
     );
}
 
export default DropDown;