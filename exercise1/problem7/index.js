function isPrimitive(value) {
  return (typeof value !== 'object' && typeof value !== 'function') || value === null;
}

// Examples
console.log(isPrimitive(function add(x, y) {
  return x + y;
}));

module.exports = isPrimitive;