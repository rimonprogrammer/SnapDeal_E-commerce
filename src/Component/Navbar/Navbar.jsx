import { useEffect, useState } from 'react';
import './Navbar.css';
import '../../assets/css/Common.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo-png.png';
import { useThemeContext } from '../../Context/ThemeContext';
import { FaCartArrowDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const {ChangeMode, theme, textColor, bgHeaderTop, bgHeaderBottom} = useThemeContext();
    
    const themeImg = JSON.parse(localStorage.getItem('theme'));
    const HeaderLocalTop = JSON.parse(localStorage.getItem('bgHeaderTop'));
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));
    const HeaderLocalBottom = JSON.parse(localStorage.getItem('bgHeaderBottom'));

    const [sticky, setSticky] = useState('');
    const stickyNav = () =>{
        window.scrollY > 10 ? setSticky('fixed-top') : setSticky('');
    }
    document.addEventListener('scroll', stickyNav);

    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        if(localStorage.getItem('SnapDeal_User')){
            const data = JSON.parse(localStorage.getItem('SnapDeal_User'));
            setUserData(data);
        }
    }, []);

    const logout = () =>{
        localStorage.clear();
        navigate('/Login');
    }

    // search product
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchValue.trim() !== "") {
            navigate(`/Products?search=${encodeURIComponent(searchValue)}`);
            setSearchValue("");
        }
    };
  return (
    <header>
        {/* >>>>>>> navbar-top start <<<<<<<<< */}
        <nav style={HeaderLocalTop ? HeaderLocalTop : bgHeaderTop} className="navbar-top">
            <div className=" d-flex align-items-center justify-content-between container"> 
                <div className="navbar-top-left d-flex">
                    <Link to='/' className='navbar-logo d-flex  align-items-center text-decoration-none'>
                        <img src={logo} alt="SnapDeal logo" />
                        <h4>Snap<span style={textLocalColor ? textLocalColor : textColor}>Deal</span></h4>
                    </Link>
                    <div className='navbar-search ms-4 mt-1'>
                        <form onSubmit={handleSearch} className={`${sticky ? "sticky-search" : ""}`}>
                            <input
                                className="transition"
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                required
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <button type="submit" className="HomeSearchLink">
                                <MdSearch className="search-icon" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="navbar-top-right d-flex align-items-center">
                    {
                        userData.name ?
                        <button onClick={logout} className='authentication-btn ms-2'>Logout</button>:
                        <Link to='/Login' className='ms-3'>
                            <button className='authentication-btn'>
                                Login
                            </button>
                        </Link>
                    }
                     <Link to='#' className='ms-2 mt-1'>
                        <button type="button" className="btn bg-light cart-btn position-relative">
                            <FaCartArrowDown/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-5 mt-2 bg-danger">
                                <p className='m-0'>9+</p>
                            </span>
                        </button>
                    </Link>
                    <div className="navbar-theme ms-3">
                        <img onClick={ChangeMode} src={themeImg ? themeImg : theme} alt="" />
                        {/* <img onClick={ChangeMode} src={theme ? theme : themeImg} alt="" /> */}
                    </div>
                </div>
            </div>
        </nav>
        {/* >>>>>>> navbar-top end <<<<<<<<< */}

        {/* >>>>>>> navbar-bottom start <<<<<<<<< */}
        <div 
            style={HeaderLocalBottom ? HeaderLocalBottom : bgHeaderBottom} 
            className={`${sticky} navbar navbar-expand-md `}
        >
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#CollapseID">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='CollapseID'>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link style={textLocalColor ? textLocalColor : textColor} to='/' className={`nav-link ${location.pathname === '/' ? 'select_nav' : ''}`}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={textLocalColor ? textLocalColor : textColor} to='/Products' className={`nav-link ${location.pathname === '/Products' ? 'select_nav' : ''}`}>All product</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={textLocalColor ? textLocalColor : textColor} to='/Mens' className={`nav-link ${location.pathname === '/Mens' ? 'select_nav' : ''}`}>Mens Wear</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={textLocalColor ? textLocalColor : textColor} to='/Womens' className={`nav-link ${location.pathname === '/Womens' ? 'select_nav' : ''}`}>Woman's Wear</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={textLocalColor ? textLocalColor : textColor} to='/Kids' className={`nav-link ${location.pathname === '/Kids' ? 'select_nav' : ''}`}>Kids Wear</Link>
                    </li>
                </ul>
            </div>
        </div>
        {/* >>>>>>> navbar-bottom end <<<<<<<<< */}
    </header>
  )
}

export default Navbar;