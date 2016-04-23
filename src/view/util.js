export function withTypes(propTypes, component) {
  component.propTypes = propTypes
  return component
}
