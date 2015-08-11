cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
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
    "ru.trilan.cordova-social-ok": "1.0.0",
    "ru.trilan.cordova-social-vk": "1.0.0"
}
// BOTTOM OF METADATA
});