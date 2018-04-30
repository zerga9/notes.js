(function(exports) {
  function repeat(string, count) {
    return string.repeat(count);
  };

  exports.repeat = repeat;
})(this);

if (repeat("!", 5) !== "!!!!!") {
  throw new Error("repeating ! should equal !!!!!");
} else {
  console.log(".");
}
