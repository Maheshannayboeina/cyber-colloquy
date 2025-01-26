// src/components/ClientLayout.tsx
"use client";

import React, { useState, useCallback } from "react";
import GetStartedModal from "./GetStartedModal";
import { Navbar } from "./Navbar";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsGetStartedModalOpen(true);
  }, [setIsGetStartedModalOpen]);

  const handleCloseModal = useCallback(() => {
    setIsGetStartedModalOpen(false);
  }, [setIsGetStartedModalOpen]);

  return (
    <>
      <Navbar setGetStartedModalOpen={handleOpenModal} />
      {children}
      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ClientLayout;
