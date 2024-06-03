import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../States/Provider/App.context";

const Header = () => {
  const { currentAkses, setCurrentAkses } = useContext(AppContext);

  return (
    <div>
      <div
        class='ui grid'
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          alignItems: "center",
        }}
      >
        <div class='five wide column'>
          <img src='./Assets/Logo/logo1.jpeg' width='200' height='75' />
        </div>
        <div class='nine wide column'>
          <h2>SELAMAT DATANG DI I-PROLINE(IHATEC PROSEDUR ONLINE)</h2>
        </div>
      </div>
      <div class='ui huge menu'>
        <Link to='/' className='item'>
          Home
        </Link>
        <Link to='/Prosedur' className='item'>
          Prosedur
        </Link>
        <Link to='/UPP' className='item'>
          UPP Online
        </Link>
        {currentAkses?.data?.level == "Admin" && (
          <Link to='/Admin' className='item'>
            Admin
          </Link>
        )}
        <div class='right menu'>
          <div class='item'>
            {currentAkses?.data !== null ? (
              <p>Welcome, {currentAkses?.data?.nama_lengkap}</p>
            ) : (
              <Link to='/Login' className='ui primary button'>
                Login
              </Link>
            )}
          </div>
          {currentAkses?.data !== null ? (
            <button
              onClick={() => setCurrentAkses(null)}
              className='ui secondary button'
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
