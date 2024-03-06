import "./App.css";
import Counter from "./components/Counter/Counter";
import AlarmClock from "./components/AlarmClock/AlarmClock";
import MessagesList from "./components/Message/MessagesList";
import Message from "./components/Message/Message";
import BookList from "./components/BookList/BookList";
import Container from "./components/Container";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Container>
            <Navbar />
            <Counter />
            <AlarmClock />
            <MessagesList />
            <Message />
            <BookList />
        </Container>
    );
}

export default App;
