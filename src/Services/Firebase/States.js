import { getDocumentData } from '../../Utils/FirebaseUtils';
import firebase from '../Firebase';
import { stateCreateSchema } from './StateSchema';

export const getStatesCollection = () => firebase.firestore().collection('states');

export const listAllStates = async () => {
  const response = await getStatesCollection().get();
  return response.docs.map((document) => getDocumentData(document));
};

export const getState = async (uid) => {
  const response = await getStatesCollection().doc(uid).get();
  return getDocumentData(response);
};

export const createState = async (stateData) => {
  const isValid = await stateCreateSchema.isValid(stateData);
  if (!isValid) throw new Error("State create validation doesn't match");
  const response = await getStatesCollection()
    .doc()
    .set({
      ...stateData,
    });
  return response;
};
