interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div
      className={`max-w-3/4 rounded-lg p-3 mb-2 ${
        isUser ? "bg-gray-200 self-end" : "bg-blue-100 self-start"
      }`}
    >
      <p className={`text-lg ${isUser ? "text-gray-800" : "text-blue-800"}`}>
        {message}
      </p>
    </div>
  );
}
