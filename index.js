module.exports = function dummy(string) {
  if (typeof string !== "string") throw new TypeError("Dummy wants a string!");
  return string.concat("Dummy says ", string);
};
