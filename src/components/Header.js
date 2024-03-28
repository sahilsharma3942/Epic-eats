import { useState } from "react";
import {Link} from "react-router-dom";


function Title(){

    return <div>
        <Link to='/'>
            <img alt="logo" className="h-20 m-2 " src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdbS5-vC-hi1Ln8IWKn2fKqlTG8DI7ESG2ncW12VWwA5H2gPdRqYMpDJC1_M9T2mju3g6piXb8Z2BuTb-mXcQYZtlSwYMtVmY-HL5txNYVwqIdMfhh3b-PYVvC4NqyabpnnPQAmbhA7Dhh/s1146/icon-grabfood.png"></img>
        </Link>
    </div>
}

function Header(){

    const [isLoggedIn , setIsLoggedIn]  = useState(false);
    return (
        <div className='flex justify-between shadow-2xl px-4 sticky top-0 z-50 bg-slate-100 '>
            <Title ></Title>
            <div>
                <ul className="flex py-10">
                    <li className="px-3 font-bold text-slate-700 hover:scale-110"><Link to="/">Home</Link></li>
                    <li className="px-3 font-bold text-slate-700 hover:scale-110"><Link to="/about">About</Link></li>
                    <li className="px-3 font-bold text-slate-700 hover:scale-110"><Link to="/contact">Contact</Link></li>
                    <li className="px-3 font-bold text-slate-700 hover:scale-110">Cart</li>
                </ul>
            </div>
            {isLoggedIn?<button className="p-2 m-2"onClick={()=>{setIsLoggedIn(false)}}>Logout</button>
                :<button className="p-2 m-2" onClick={()=>{setIsLoggedIn(true)}}>Login</button>}
        </div>
    );
}

export default Header;