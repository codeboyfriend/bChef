import Logo from "../assets/images/logo.svg";

const Nav = () => {
  return (
    <div className='nav flex items-center justify-between p-6'>
        <img src={Logo} alt="" />
        <h2 className="text-[1.2rem] brand">bChef</h2>
    </div>
  )
}

export default Nav