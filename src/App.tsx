import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import EventExample from "./components/EventExample";
import TodoPage from "./components/TodoPage";
import UserItemPage from "./components/UserItemPage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to={"/todo"}>Список дел</Link>
          <Link to={"/users"}>Пользователи</Link>
        </div>
        <Routes>
          <Route path={"/todo"} element={<TodoPage />} />
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
        </Routes>
      </BrowserRouter>
      <EventExample />
      <Card
        width={"200px"}
        height={"200px"}
        background={"teal"}
        myClick={() => console.log("test")}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Button");
          }}
        >
          ЦИСК
        </button>
      </Card>
    </div>
  );
}

export default App;
