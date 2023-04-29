import { Button } from "@material-ui/core";
import BottomNav from "../partials/BottomNav";
import Header from "../partials/Header";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/notFound.css'

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className="not-found-container">
        <div
          className='grid bg-white p-10 
          rounded-[24px] shadow-2xl m-auto text-black font-bold
          text-4xl' 
        >
          Página no encontrada
        </div>
          <Button style={{color: "#FFF7F1", backgroundColor: '#3D656A'}} onClick={() => navigate('/')}>Ir al mapa</Button>
        </div>
      <BottomNav/>
    </div>
  );
}
