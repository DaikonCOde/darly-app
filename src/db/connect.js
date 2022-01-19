import db from './credentials';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const auth = getAuth(db);
export const DBfirestore = getFirestore(db);

