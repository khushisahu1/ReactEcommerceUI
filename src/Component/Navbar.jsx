
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <div>
     
     <div className='firstnav'>
     <div className='secondnav'>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img className="navbar-brand" src="/Images/logo1.png" alt="" style={{width:'7%' ,height:'10%', marginLeft:'7%', marginTop:'1%'}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul> */}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:'700px', marginLeft:'10%', backgroundColor:'#cccbca'}} />
        <span className="material-symbols-outlined" style={{backgroundColor:'#cccbca',borderRadius:'5px', width:'50px', textAlign:'center', paddingTop:'7px', height:'40px'}}>search</span>
       
      </form>
      <span className="material-symbols-outlined" style={{height:'40px', width:'25px',paddingTop:'7px', marginLeft:'20%', cursor:'pointer' }}>location_on</span>
        <span className="material-symbols-outlined" style={{height:'40px', width:'25px',paddingTop:'7px', marginLeft:'1%', cursor:'pointer'  }}>person</span>
        <span className="material-symbols-outlined" style={{height:'40px', width:'25px',paddingTop:'7px', marginLeft:'1%',cursor:'pointer'  }}>favorite</span>
        <span className="material-symbols-outlined" style={{height:'40px', width:'25px',paddingTop:'7px', marginLeft:'1%',cursor:'pointer'  }}>shopping_cart</span>
    </div>
  </div>
</nav>
        
     </div>
     <div className='secondnav'>
     <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#ec008c',}}>
  <div className="container-fluid">
    
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link nav1" aria-current="page" style={{color:'whitesmoke'}}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link nav1" href="#" style={{color:'whitesmoke'}}>SHOP</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a className="nav-link nav1" style={{color:'whitesmoke'}}>JAQULINE USA</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav1" style={{color:'whitesmoke'}}>BRAND</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav1" style={{color:'whitesmoke'}}>NEW ARIVALs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav1" style={{color:'whitesmoke'}}>BESTSELLERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav1" style={{color:'whitesmoke'}}>JEWELLRS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  nav1" style={{color:'whitesmoke'}}>OFFER</a>
        </li>
        <li className="nav-item">
          <Link to="/read" className="nav-link  nav1 "  style={{color:'whitesmoke'}}>Admine</Link>
        </li>
        <li className="nav-item">
          <Link to="/Signup" className="nav-link  nav1" style={{color:'whitesmoke', fontWeight:'200' }}>SIGHIN</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
