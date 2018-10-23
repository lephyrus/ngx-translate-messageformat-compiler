Error.stackTraceLimit = Infinity;

require("reflect-metadata");

var testContext = require.context("./src", true, /\.spec\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
