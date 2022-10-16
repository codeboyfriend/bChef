import Nav from "../utils/Nav";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] bg-bgColor">
        <Nav />
        <div className='flex flex-col items-center justify-center max-w-[600px] h-[80vh] px-4 mx-auto'>
            <h2 className='text-3xl font-bold mb-6'>Welcome To bChef</h2>

            <p className='text-center mb-4'>An open, crowd-sourced database of recipes from around the world. We have over 200 recipes available from different continents.</p>

            <button 
              className='btn px-4 py-1' 
              onClick={() => navigate('/kitchen')}>Enter Kitchen</button>
        </div>
    </div>
  )
}

export default LandingPage