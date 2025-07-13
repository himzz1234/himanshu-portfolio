import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext(null);

export default function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalContent]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {modalContent && (
          <>
            <motion.div
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-gradient-to-br from-[#d5ecff]/50 to-[#e9f4ff]/50 backdrop-blur-sm"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              <motion.div
                className="relative w-[90%] max-w-3xl h-fit"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white/60 backdrop-blur-xl text-[#264D73] px-[5px] py-[30px] rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/40 pointer-events-auto"
                >
                  {modalContent}
                </motion.div>

                <AnimatePresence>
                  <motion.img
                    key="character"
                    src="/src/assets/images/character_hold.png"
                    alt="Character"
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-[2px] w-[80px]"
                  />
                </AnimatePresence>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
