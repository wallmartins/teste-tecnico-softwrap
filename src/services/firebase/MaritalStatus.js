import { getDocumentData } from '../../Utils/FirebaseUtils';
import firebase from '../Firebase';

export const getMaritalStatusCollection = () => firebase.firestore().collection('marital_status');

export const listAllStates = async () => {
  const response = await getMaritalStatusCollection().get();
  return response.docs.map((document) => getDocumentData(document));
};
