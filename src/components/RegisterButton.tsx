'use client';
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export function RegisterButton({ eventId }: { eventId: string }) {
  const { isSignedIn, isLoaded } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();
  const handleRegister = async () => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      router.push(`/sign-in?redirect=${encodeURIComponent(`/events/${eventId}`)}`);
      return;
    }
    setIsRegistering(true);
    try {
      // Implement your event registration logic here
      // For example:
      // await registerForEvent(eventId);
      console.log(`Registered for event ${eventId}`);
    } catch (error) {
      console.error('Error registering for event:', error);
    } finally {
      setIsRegistering(false);
    }
  };
  return (
    <Button onClick={handleRegister} disabled={isRegistering}>
      {isRegistering ? "Registering..." : "Register for Event"}
    </Button>
  );
}
