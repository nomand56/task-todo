import { TodoProvider } from './Context/Context';
import './App.css';
import Todo from './components/Todo';
import Done from './components/Done';
import Progress from './components/Progress';
function App() {
  return (
    <div className="App">
      <TodoProvider>
<Todo/>
  <Progress/>  
  <Done/> 
      </TodoProvider>
     </div>
  );
}

export default App;
