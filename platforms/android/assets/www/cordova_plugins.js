cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-social-vk.SocialVk",
        "file": "plugins/cordova-social-vk/www/social-vk.js",
        "pluginId": "cordova-social-vk",
        "clobbers": [
            "SocialVk"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "id": "com-badrit-macaddress.MacAddress",
        "file": "plugins/com-badrit-macaddress/www/MacAddress.js",
        "pluginId": "com-badrit-macaddress",
        "clobbers": [
            "window.MacAddress"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-social-vk": "1.0.4",
    "cordova-plugin-dialogs": "1.3.2",
    "cordova-plugin-inappbrowser": "1.7.0",
    "cordova-plugin-facebook4": "1.7.4",
    "com-badrit-macaddress": "0.2.1"
};
// BOTTOM OF METADATA
});