'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export function useAppwriteRegistration() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const registerInAppwrite = async () => {
        try {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.primaryEmailAddress?.emailAddress,
              firstName: user.firstName,
              lastName: user.lastName,
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to register user in Appwrite');
          }
        } catch (error) {
          console.error('Error during Appwrite registration:', error);
        }
      };

      registerInAppwrite();
    }
  }, [isLoaded, isSignedIn, user]);
}
