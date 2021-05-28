export const getDocumentData = (document) => {
  if (!document.exists) {
    throw new Error("Document doesn't exists");
  }

  return {
    ...document.data(),
    uid: document.id,
  };
};
