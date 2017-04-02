cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-social-vk/www/social-vk.js",
        "id": "cordova-social-vk.SocialVk",
        "pluginId": "cordova-social-vk",
        "clobbers": [
            "SocialVk"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-facebook4/www/facebook-browser.js",
        "id": "cordova-plugin-facebook4.FacebookConnectPluginBrowser",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "file": "plugins/com-badrit-macaddress/www/MacAddress.js",
        "id": "com-badrit-macaddress.MacAddress",
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
}
// BOTTOM OF METADATA
});