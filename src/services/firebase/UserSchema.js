import * as yup from 'yup';

export const userCreateSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer().min(18).max(150),
  marital_status: yup.string().required(),
  document: yup
    .string()
    .matches(/^[0-9]+$/)
    .min(11)
    .max(11)
    .required(),
  city: yup.string().required(),
  state: yup.string().required(),
});

export const userUpdateSchema = yup.object().shape({
  name: yup.string(),
  age: yup.number().positive().integer().min(18).max(150),
  marital_status: yup.string(),
  document: yup
    .string()
    .matches(/^[0-9]+$/)
    .min(11)
    .max(11),
  city: yup.string(),
  state: yup.string(),
});
