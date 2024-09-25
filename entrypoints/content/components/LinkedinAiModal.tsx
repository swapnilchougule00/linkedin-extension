import React, { useState } from "react";
import { Modal } from "./Modal";
import { ChatMessage } from "./ChatMessage";
interface props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function LinkedInAIModal({ setModalOpen }: props) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean }>
  >([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setMessages((prev) => [...prev, { text: prompt, isUser: true }]);
    setIsGenerating(true);
    setPrompt("");

    // Simulate API call with 2 second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response =
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
    setMessages((prev) => [...prev, { text: response, isUser: false }]);
    setIsGenerating(false);
  };

  return (
    <Modal setModalOpen={setModalOpen}>
      <div className="p-4 flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
        </div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Your prompt"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="flex justify-end space-x-2">
          <button
            // onClick={handleInsert}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Insert
          </button>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ${
              isGenerating
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            }`}
          >
            {isGenerating ? "Generating..." : "Regenerate"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
