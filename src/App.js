import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Test1 from "./component/ajax1/test1";
import Post from "./component/post";
import Counter from "./component/practice/Counter";

import TodoWrapper from "./component/todo";


function App() {
    return (
        <div className="App" >
            <TodoWrapper/>
        </div>
    );
}

export default App;
