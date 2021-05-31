import * as yup from 'yup';

export const userCreateSchema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório!'),
  age: yup.number().typeError('O campo Idade é obrigatório').positive().integer().min(18).max(150).required(),
  marital_status: yup.string().required('O campo estado civil é obrigatório.'),
  document: yup
    .string()
    .required('O campo CPF é obrigatório.')
    .matches(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/, 'Digite um CPF válido. Ex: XXX.XXX.XXX-XX'),
  city: yup.string().required('O campo cidade é obrigatório.'),
  state: yup.string().required('O campo estado é obrigatório.'),
});

export const userUpdateSchema = yup.object().shape({
  name: yup.string(),
  age: yup.number().positive().integer().min(18).max(150),
  marital_status: yup.string(),
  document: yup.string().matches(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/),
  city: yup.string(),
  state: yup.string(),
});
