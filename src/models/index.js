// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, ContactUs } = initSchema(schema);

export {
  Todo,
  ContactUs
};