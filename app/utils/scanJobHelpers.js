function statusCodeToText (code) {
  if (code == 1) {
    return "Success"
  } else if (code == 0) {
    return "Processing"
  } else {
    return "Error"
  }
}

function floorFigure(figure, decimals){
    if (!decimals) decimals = 2;
    var d = Math.pow(10,decimals);
    return (parseInt(figure * d) / d).toFixed(decimals);
};

function bytesToMb (size) {
  return floorFigure((size / 1048576));
};

var helpers = {
  statusCodeToText: function (code) {
    return statusCodeToText(code)
  },
  bytesToMb: function (size) {
    return bytesToMb(size);
  }
}

module.exports = helpers;
