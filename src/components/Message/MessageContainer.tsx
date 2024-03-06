import Navbar from "../Navbar/Navbar";
import MessagesList from "./MessagesList";
import Message from "./Message";
import Container from "../Container";

const MessageContainer = () => {
    return (
        <Container>
            <Navbar />
            <MessagesList />
            <Message />
        </Container>
    );
};

export default MessageContainer;
