// YOUR CODE BELOW
function partial(callback, a) {
  return function(b) {
    return callback(a, b);
  };
}
