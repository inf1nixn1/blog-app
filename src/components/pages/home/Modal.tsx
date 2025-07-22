type ModalProps = {
  children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-start justify-center pt-20  bg-black/70">
      <div className="min-h-44 min-w-96  bg-white rounded-lg ">
        {children}
      </div>
    </div>
  );
}

export default Modal;