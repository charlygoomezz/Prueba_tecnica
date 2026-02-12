import type { Group } from '../types/board.types';

interface GroupProps {
  group: Group;
}

export default function Group({ group }: GroupProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl w-72 shrink-0 flex flex-col max-h-full">
      <h2>{group.title}</h2>
    </div>
  );
}
