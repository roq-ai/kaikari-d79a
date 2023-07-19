import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  business_id: yup.string().nullable(),
});
