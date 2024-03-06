import { Button } from "@mui/material";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <Link to={"/counter"}>
                <Button variant="outlined">Counter</Button>
            </Link>
            <Link to={"/alarm"}>
                <Button variant="outlined">Alarm Clock</Button>
            </Link>
            <Link to={"/message-list"}>
                <Button variant="outlined">Messages List</Button>
            </Link>
            <Link to={"/book-search"}>
                <Button variant="outlined">Auto Complete Search</Button>
            </Link>
        </Container>
    );
};

export default Home;
