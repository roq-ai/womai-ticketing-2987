import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  event_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
