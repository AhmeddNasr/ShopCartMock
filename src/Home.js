import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div id="container">            
            <h1>Welcome to the shop</h1>
            <Link to="/shop">Shop noww</Link>
        </div>
    );
};

export default Home;
