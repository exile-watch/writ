const iconComponentTemplate = (variables, { tpl }) => {
  const memoDeclaration = variables.exports[1]
  const forwardRef = memoDeclaration.declarations[0].init.arguments
  const [, icon] = variables.componentName.split('Svg')

  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports[0]};
const ${icon} = memo(${forwardRef});
export { ${icon} }
`
}

module.exports = iconComponentTemplate