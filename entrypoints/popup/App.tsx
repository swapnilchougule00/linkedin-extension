function App() {
  return (
    <div className=" w-[400px] bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-indigo-600">
        LinkedIn AI Reply
      </h1>
      <p className="text-gray-600 mb-4">Your intelligent messaging assistant</p>
      <h2 className="text-2xl font-semibold mb-4 text-indigo-800 border-b border-indigo-200 pb-2">
        How to use:
      </h2>
      <ol className="space-y-4 text-gray-700">
        {[
          "Focus on the LinkedIn message input field",
          "Click on the AI icon that appears",
          "Enter your command in the modal",
          "Click Generate to get AI assistance",
        ].map((step, index) => (
          <li
            key={index}
            className="flex items-center animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <span className="flex items-center justify-center bg-indigo-500 text-white rounded-full w-8 h-8 mr-3 flex-shrink-0 text-lg font-semibold shadow-md">
              {index + 1}
            </span>
            <span className="text-lg leading-6 pt-1">{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-6 text-center">
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 text-sm"
        >
          Learn more about LinkedIn AI Reply
        </a>
      </div>
    </div>
  );
}

export default App;
