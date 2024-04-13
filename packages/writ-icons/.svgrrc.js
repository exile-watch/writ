const indexTemplate = require("./src/templates/index-template");
const iconComponentTemplate = require("./src/templates/icon-component-template");

module.exports = {
  dimensions: true,
  typescript: true,
  memo: true,
  ref: true,
  indexTemplate,
  template: iconComponentTemplate,
};
