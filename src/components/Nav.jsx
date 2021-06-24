import { useEffect, useState } from 'react'

const Nav = () => {
    const [handleShow, setHandleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setHandleShow(true);
            } else {
                setHandleShow(false);
            }                       
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    return (
        <div className={`navbar${handleShow ? " nav-black" : ""}`}>
            <img 
                className="logoImg" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
                alt="nav-png" 
            />
            <img className="menuImg" src="menu.png" alt="menu-png" />
        </div>
    )
}

export default Nav;
