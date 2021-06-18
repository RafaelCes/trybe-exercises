import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['esquenta', 'conteudo', 'aula ao vivo', 'exercicios', 'plantoes', 'fechamento'];

function App() {
  return (
    <ol>
      {compromissos.map((item) => Task(item))}
    </ol>
  );
}

export default App;
