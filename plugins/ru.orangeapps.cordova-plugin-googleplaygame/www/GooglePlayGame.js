function GooglePlayGame() {
}

GooglePlayGame.prototype.isAvailable = function (callback) {
  cordova.exec(callback, null, "GooglePlayGame", "isAvailable", []);
};

GooglePlayGame.prototype.login = function (options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "GooglePlayGame", "login", [options]);
};

GooglePlayGame.prototype.trySilentLogin = function (options, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "GooglePlayGame", "trySilentLogin", [options]);
};

GooglePlayGame.prototype.logout = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "GooglePlayGame", "logout", []);
};

GooglePlayGame.prototype.disconnect = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "GooglePlayGame", "disconnect", []);
};

GooglePlayGame.prototype.invite = function (options, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "GooglePlayGame", "invite", [options]);
};

GooglePlayGame.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.googleplaygame = new GooglePlayGame();
  return window.plugins.googleplaygame;
};

cordova.addConstructor(GooglePlayGame.install);
