function template(components){
  const foo = components.map(c => {
    const icon = c.originalPath.replace(/^svg\\|\.svg$/g, '');

    return `export * from "./${icon}";`
  })

  return foo.join("\n")
}

module.exports = template
