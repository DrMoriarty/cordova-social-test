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
        "file": "plugins/ru.trilan.cordova-social-ok/www/social-ok.js",
        "id": "ru.trilan.cordova-social-ok.SocialOk",
        "clobbers": [
            "SocialOk"
        ]
    },
    {
        "file": "plugins/ru.trilan.cordova-social-vk/www/social-vk.js",
        "id": "ru.trilan.cordova-social-vk.SocialVk",
        "clobbers": [
            "SocialVk"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.device": "0.2.13",
    "org.apache.cordova.splashscreen": "0.3.5",
    "ru.trilan.cordova-social-ok": "1.0.0",
    "ru.trilan.cordova-social-vk": "1.0.0"
}
// BOTTOM OF METADATA
});