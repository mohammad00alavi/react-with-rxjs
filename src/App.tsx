import "./App.css";
import Counter from "./components/Counter/Counter";
import AlarmClock from "./components/AlarmClock/AlarmClock";
import MessagesList from "./components/Message/MessagesList";
import Message from "./components/Message/Message";
import BookList from "./components/BookList/BookList";

function App() {
    return (
        <>
            <Counter />
            <AlarmClock />
            <MessagesList />
            <Message />
            <BookList />
        </>
    );
}

export default App;
