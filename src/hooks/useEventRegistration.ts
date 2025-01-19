import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { account, databases, EVENTS_DATABASE_ID, REGISTRATIONS_COLLECTION_ID } from '../../lib/appwrite';

export function useAppwriteUser() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const createOrUpdateAppwriteUser = async () => {
        try {
          // Check if the user already exists in Appwrite
          const existingUser = await databases.getDocument(
            EVENTS_DATABASE_ID,
            REGISTRATIONS_COLLECTION_ID,
            user.id
          );

          if (!existingUser) {
            // If the user doesn't exist, create a new document
            await databases.createDocument(
              EVENTS_DATABASE_ID,
              REGISTRATIONS_COLLECTION_ID,
              user.id,
              {
                email: user.emailAddresses[0].emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
                // Add any other user data you want to store
              }
            );
          } else {
            // If the user exists, update the document
            await databases.updateDocument(
              EVENTS_DATABASE_ID,
              REGISTRATIONS_COLLECTION_ID,
              user.id,
              {
                email: user.emailAddresses[0].emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
                // Update any other user data you want to store
              }
            );
          }
        } catch (error) {
          console.error('Error creating/updating Appwrite user:', error);
        }
      };

      createOrUpdateAppwriteUser();
    }
  }, [user]);
}
