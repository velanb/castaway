class ErrorHandler extends Error {
  constructor(message) {
    super(JSON.stringify(message));
  }
}

module.exports = ErrorHandler;
