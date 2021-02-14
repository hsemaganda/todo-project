import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">

            <div>
                <div>

                </div>
                <Link to="/">Home</Link>
                <Link to="/pending">Pending Tasks</Link>
                <Link to="/completed">Completed Tasks</Link>
                <Link to="/search">Search </Link>

            </div>
        </nav>
    );
}

export default Navbar;