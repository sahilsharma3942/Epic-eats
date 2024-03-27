import {Link} from "react-router-dom";


function Title(){

    return <div>
        <Link to='/'>
            <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&usqp=CAU"></img>
        </Link>
    </div>
}


function Header(){
    return (
        <div className='header'>
            <Title></Title>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;