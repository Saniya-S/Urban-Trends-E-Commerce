import {Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js'

const Layout = () => {
    return(
        <div>
            <nav><Navbar /></nav>
            <main>
            <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}

export default Layout;