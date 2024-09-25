import Assistant from "./components/Assistant";
import LinkedInAIModal from "./components/LinkedinAiModal";

function App() {
  const messageContainerSelector =
    ".msg-form__msg-content-container--scrollable";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleElementFocus = (event: Event) => {
      console.log("on focus");
      const targetElement = event.target as HTMLElement;
      const messageContainer = targetElement.closest(
        messageContainerSelector
      ) as HTMLElement;
      if (messageContainer) {
        setActiveElement(messageContainer); // Set active element when the message container is focused
      }
    };

    const handleElementBlur = (event: FocusEvent) => {
      console.log("on blur");
      const targetElement = event.target as HTMLElement;
      const messageContainer = targetElement.closest(
        messageContainerSelector
      ) as HTMLElement;
      const nextFocusedElement = event.relatedTarget as HTMLElement;
      if (
        messageContainer &&
        (!nextFocusedElement || !messageContainer.contains(nextFocusedElement))
      ) {
        setActiveElement(null); // Reset active element when focus leaves the message container
      }
    };

    document.addEventListener("focusin", handleElementFocus);
    document.addEventListener("focusout", handleElementBlur);

    return () => {
      document.removeEventListener("focusin", handleElementFocus);
      document.removeEventListener("focusout", handleElementBlur);
    };
  }, []);

  return (
    <>
      {activeElement && (
        <Assistant container={activeElement} setModalOpen={setIsModalOpen} />
      )}

      {isModalOpen && <LinkedInAIModal setModalOpen={setIsModalOpen} />}
    </>
  );
}

export default App;
