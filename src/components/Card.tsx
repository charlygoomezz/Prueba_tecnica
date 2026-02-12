export default function Card() {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md border border-gray-100 p-4 ">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg ring-2 ring-gray-200"></div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">Nombre</h3>
          <p className="text-gray-500 font-medium text-sm">@nombre</p>
        </div>
      </div>
    </div>
  );
}
