cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.crashlytics/www/crashlytics.js",
        "id": "org.apache.cordova.crashlytics.crashlytics",
        "clobbers": [
            "navigator.crashlytics"
        ]
    },
    {
        "file": "plugins/ru.orangeapps.cordova-plugin-googleplaygame/www/GooglePlayGame.js",
        "id": "ru.orangeapps.cordova-plugin-googleplaygame.GooglePlayGame",
        "clobbers": [
            "window.plugins.googleplaygame"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.device": "0.2.13",
    "org.apache.cordova.splashscreen": "0.3.5",
    "org.apache.cordova.crashlytics": "0.0.2-dev",
    "ru.orangeapps.cordova-plugin-googleplaygame": "0.1"
}
// BOTTOM OF METADATA
});