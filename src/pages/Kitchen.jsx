import Form from "../components/Form";
import Res from "../components/Res";
import Logo from "../assets/images/logo.svg";
import Map from "../components/Map";
import Suggest from "../components/Suggest";

const Kitchen = () => {  
  return (
    <div className="home w-[100%] min-h-[100vh] text-black flex flex-col justify-between  bg-bgWhite">
        <div className="bg-bgColor px-6 md:px-10 py-4">
          <div className="flex items-center justify-between mb-6">
            <img src={Logo} alt="" />
            <h2 className="text-[1.2rem] text-white">bChef</h2>
          </div>

          <p className="opacity-80 text-white text-sm -mb-1">Search for the</p>
          <h2 className="mb-3 text-white">Food you love</h2>

          <Form />
        </div>
        
        <div className="px-6 md:px-10 py-4">
          <Res />
        </div>

        <div>
          <Map />
        </div>

        <div>
          <Suggest />
        </div>

        <div className="footer w-[100%] bg-bgColor py-3">
          <h2 className="text-center text-white">bChef <span className="text-sm">v.1.0</span></h2>
        </div>
    </div>
  )
}

export default Kitchen