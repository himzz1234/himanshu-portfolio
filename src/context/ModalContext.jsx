import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import sparkle1 from "../assets/images/sparkle_1.png";
import sparkle2 from "../assets/images/sparkle_2.png";

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
              className="fixed inset-0 z-30 bg-gradient-to-br from-[#d5ecff]/50 to-[#e9f4ff]/50 backdrop-blur-sm"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              <motion.div
                className="relative w-[90%] max-w-2xl h-fit"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white/60 dark:bg-[#141d2c]/80 backdrop-blur-xl text-[#264D73] px-4 sm:px-8 py-6 sm:py-10 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/40 pointer-events-auto"
                >
                  {modalContent}
                </motion.div>
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
