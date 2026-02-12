import CreateButton from './components/CreateButton';
import Group from './components/Group';
import { useBoard } from './hooks/useBoard';

function App() {
  const { addGroups, groups } = useBoard();
  return (
    <>
      <div className="min-h-screen bg-white p-8 overflow-x-auto">
        <div className="flex gap-6 items-start">
          {groups.map(group => (
            <Group key={group.id} group={group} />
          ))}

          <CreateButton addGroups={addGroups} />
        </div>
      </div>
    </>
  );
}

export default App;
