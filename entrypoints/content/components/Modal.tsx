interface ModalProps {
  children: React.ReactNode;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ children, setModalOpen }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = () => {
    if (modalRef.current) {
      return modalRef.current.focus();
    }
    console.log("object");
    setModalOpen(false);
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-xl w-full max-w-[40%]"
      >
        {children}
      </div>
    </div>
  );
}
