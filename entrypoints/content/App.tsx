import AiAssistant from "./components/AiAssistant";

function App() {
  const LinkedinMessageClass = ".msg-form__msg-content-container--scrollable";
  const [modal, setModal] = useState(false);
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const handleFocusIn = (event: Event) => {
      const target = event.target as HTMLElement;
      const container = target.closest(LinkedinMessageClass) as HTMLElement;
      if (container) {
        setFocusedElement(container);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      const container = target.closest(LinkedinMessageClass) as HTMLElement;
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (container && (!relatedTarget || !container.contains(relatedTarget))) {
        setFocusedElement(null);
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  return (
    <>
      {focusedElement && (
        <AiAssistant container={focusedElement} setModal={setModal} />
      )}
    </>
  );
}

export default App;
