import "./App.css";
import Counter from "./components/Counter/Counter";
import AlarmClock from "./components/AlarmClock/AlarmClock";
import BookList from "./components/BookList/BookList";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComponentPageLayout from "./layout/ComponentPageLayout";
import MessageContainer from "./components/Message/MessageContainer";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ComponentPageLayout />}>
                <Route index element={<Home />} />
                <Route path="counter" element={<Counter />} />
                <Route path="alarm" element={<AlarmClock />} />
                <Route path="message-list" element={<MessageContainer />} />
                <Route path="book-search" element={<BookList />} />
                <Route path="todo-list" element={<TodoList />} />
            </Route>
        </Routes>
    );
}

export default App;
