'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth-modal";
import { events } from "@/components/data";
import { useAuth } from "@clerk/nextjs";

interface RegisterButtonProps {
  eventId: string;
}

export function RegisterButton({ eventId }: RegisterButtonProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleRegister = () => {
    if (!isSignedIn) {
      setShowAuthModal(true);
      return;
    }

    const event = events.find(e => e.id.toString() === eventId);
    if (event) {
      router.push(`/register?eventId=${eventId}&eventTitle=${encodeURIComponent(event.title)}`);
    } else {
      console.error('Event not found');
    }
  };

  return (
    <>
      <Button onClick={handleRegister}>
        Register for Event
      </Button>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode="sign-in"
        redirectUrl={`/events/${eventId}`}
      />
    </>
  );
}
