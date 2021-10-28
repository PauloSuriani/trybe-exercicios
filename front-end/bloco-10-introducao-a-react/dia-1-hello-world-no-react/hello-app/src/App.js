import logo from './logo.svg';
import './App.css';

const Task = (taskList) => {
  return (
    taskList.map((value) => <li>{value}</li>)
  );
}

function App() {
  const taskList = ['React', 'NPM', 'JSX', 'Classes'];

  return (
    <ol>{Task(taskList)}</ol>
  );
}

export default App;
