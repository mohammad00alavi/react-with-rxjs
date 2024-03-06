import "./App.css";
import Counter from "./components/Counter/Counter";
import AlarmClock from "./components/AlarmClock/AlarmClock";
import MessagesList from "./components/Message/MessagesList";
import Message from "./components/Message/Message";

function App() {
    return (
        <>
            <Counter />
            <AlarmClock />
            <MessagesList />
            <Message />
        </>
    );
}

export default App;
