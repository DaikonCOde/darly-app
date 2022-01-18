import db from './credentials';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(db);