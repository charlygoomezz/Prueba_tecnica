import Card from './components/Card';
import CreateButton from './components/CreateButton';
import { useBoard } from './hooks/useBoard';

function App() {
  const { addGroups } = useBoard();
  return (
    <>
      <h1 className="text-2xl">Crear una tarjeta</h1>

      <Card />
      <CreateButton addGroups={addGroups} />
    </>
  );
}

export default App;
