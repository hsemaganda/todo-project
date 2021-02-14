import Background from "../components/Background";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
    return (

        <Background>
            <Banner title=" page not found" >
                <Link to="/" className="btn-primary">return to home</Link>

            </Banner>
        </Background>
    );
}

export default Error;