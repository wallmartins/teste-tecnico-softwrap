import * as yup from 'yup';

export const stateCreateSchema = yup.object().shape({
  name: yup.string().required(),
  code: yup.string().required(),
});
