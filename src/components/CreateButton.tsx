interface CreateButtonProps {
  addGroups: () => void;
}

export default function CreateButton({ addGroups }: CreateButtonProps) {
  return (
    <button
      onClick={addGroups}
      className="w-72 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-xl
    py-3 font-medium transition-all border-2 border-dashed border-gray-300"
    >
      Create Group
    </button>
  );
}
