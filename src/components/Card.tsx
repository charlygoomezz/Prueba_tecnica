export default function Card() {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md border border-gray-100 p-4 ">
      <div className="flex items-center space-x-4">
        <img className="h-10 w-10 rounded-full object-cover" src="./vite.svg" alt="Avatar" />
        <div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">Nombre</h3>
          <p className="text-gray-500 font-medium text-sm">@nombre</p>
        </div>
      </div>
    </div>
  );
}
