import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('678662a1000920315bd5'); // Make sure this is correct

export const account = new Account(client);
export const databases = new Databases(client);

// Database and Collection IDs
export const EVENTS_DATABASE_ID = '678663010038694c8a74';
export const REGISTRATIONS_COLLECTION_ID = '679206b0000ac2e2a32d';
export const CONTACT_COLLECTION_ID = '67935845002a9c880074';

// Helper function to check if we're on the client side
export const isClient = typeof window !== 'undefined';

