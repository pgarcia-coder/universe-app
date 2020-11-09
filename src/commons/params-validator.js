const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-errors')(ajv);

module.exports = (schema, params) => {
  const validate = ajv.compile(schema);
  validate(params);
  return validate.errors ? validate.errors.map((error) => error.message) : [];
};
