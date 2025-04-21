import { Link } from "react-router-dom";
import './dropDown.css'

const DropDown = ( {array} ) => {

    return ( 
        <>
        <div className="dropdown">
                        <ul>
                             {array.map((obj, index) => (
                              <li key={index}><Link to={obj.path}>{obj.item}</Link></li>
                             ))}
                        </ul>
        </div>
       
        </>
     );
}
 
export default DropDown;