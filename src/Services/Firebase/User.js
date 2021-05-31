import { getDocumentData } from '../../Utils/FirebaseUtils';
import firebase from '../Firebase';
import { userCreateSchema, userUpdateSchema } from './UserSchema';

export const getUsersCollection = () => firebase.firestore().collection('users');

export const listAllUsers = async () => {
  const response = await getUsersCollection().get();
  return response.docs.map((document) => getDocumentData(document));
};

export const getUser = async (uid) => {
  const response = await getUsersCollection().doc(uid).get();
  return getDocumentData(response);
};

export const updateUser = async (uid, userData) => {
  const isValid = await userUpdateSchema.isValid(userData);
  if (!isValid) throw new Error("User create validation doesn't match");

  const response = await getUsersCollection()
    .doc(uid)
    .update({ ...userData });
  return response;
};

export const deleteUser = async (uid) => {
  const response = await getUsersCollection().doc(uid).delete();
  return response;
};

export const createUser = async (userData) => {
  const isValid = await userCreateSchema.isValid(userData);
  if (!isValid) throw new Error("User create validation doesn't match");
  const response = await getUsersCollection()
    .doc()
    .set({
      ...userData,
    });
  return response;
};
