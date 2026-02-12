import CreateButton from './components/CreateButton';
import Group from './components/Group';
import EdgeLayer from './components/EdgeLayer';
import { useBoard } from './hooks/useBoard';

function App() {
  const { groups, cards, edges, addGroups, addCards, dragAndDrop, connectCards, selectedCardId } =
    useBoard();

  return (
    <div className="min-h-screen bg-white p-8 relative overflow-hidden">
      <div className="relative z-10 flex gap-6 items-start">
        {groups.map(group => (
          <Group
            key={group.id}
            group={group}
            cards={cards.filter(c => c.groupId === group.id)}
            addCard={addCards}
            dragAndDrop={dragAndDrop}
            onCardClick={connectCards}
            selectedCardId={selectedCardId}
          />
        ))}
      </div>

      <div className="fixed inset-0 z-20 pointer-events-none">
        <EdgeLayer edges={edges} />
      </div>

      <div className="fixed top-8 left-8 z-30">
        <CreateButton label="Create Group" variant="group" onClick={addGroups} />
      </div>
    </div>
  );
}

export default App;
