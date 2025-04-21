import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { team } from "../team/Team";
import './playerPage.css'
import { useParams } from "react-router-dom";


const PlayerPage = () => {

    const { id } = useParams()
    const player = team.find(p => p.id === parseInt(id))

    if(!player) {
        return <div>Undefined player...</div>
    }

    return ( 
        <>
        <Header/>
        <h2>Hello from {player.name} page</h2>
        <Footer/>
        </>
     );
}
 
export default PlayerPage;