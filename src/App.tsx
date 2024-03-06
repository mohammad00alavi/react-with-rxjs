import "./App.css";
import Counter from "./components/Counter/Counter";
import AlarmClock from "./components/AlarmClock/AlarmClock";
import MessageContainer from "./components/Message/MessageContainer";

function App() {
    return (
        <>
            <Counter />
            <AlarmClock />
            <MessageContainer />
        </>
    );
}

export default App;
