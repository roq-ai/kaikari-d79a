import * as yup from 'yup';

export const orderItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  order_id: yup.string().nullable(),
  item_id: yup.string().nullable(),
});
