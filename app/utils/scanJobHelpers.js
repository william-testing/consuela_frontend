function statusCodeToText (code) {
  if (code == 1) {
    return "Success"
  } else if (code == 0) {
    return "Processing"
  } else {
    return "Error"
  }
}

var helpers = {
  statusCodeToText: function (code) {
    return statusCodeToText(code)
  }
}

module.exports = helpers;
