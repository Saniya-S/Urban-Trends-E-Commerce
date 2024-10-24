import {Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Layout = () => {
    return(
        <div>
            <nav><Navbar /></nav>
            <main>
            <Outlet />
            </main>
            
        </div>
    )
}

export default Layout;