(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5

  function exclaim(string) {
    return string + repeat("!", EXCLAMATION_MARK_COUNT);
  };

  exports.exclaim = exclaim;
})(this);

if (exclaim("hi") !== "hi!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
  console.log(".");
}
