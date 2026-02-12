interface CreateButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'group' | 'card';
  disabled?: boolean;
}

export default function CreateButton({
  onClick,
  label,
  variant = 'group',
  disabled,
}: CreateButtonProps) {
  const baseStyles = 'transition-all font-medium flex items-center justify-center gap-2';

  const variants = {
    group: `w-72 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-xl
    py-3 font-medium transition-all border-2 border-dashed border-gray-300`,
    card: `mt-4 w-full py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 
        rounded-lg text-sm font-bold transition-colors`,
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {label}
    </button>
  );
}
