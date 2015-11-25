using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using Microsoft.Phone.Controls;
using Windows.ApplicationModel.Store;
using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;
using Newtonsoft.Json.Linq;
using VK.WindowsPhone.SDK;
using VK.WindowsPhone.SDK.API;
using VK.WindowsPhone.SDK.API.Model;
using VK.WindowsPhone.SDK.Util;
using System.Windows.Media.Imaging;
using VK.WindowsPhone.SDK.Pages;
using System.IO;

namespace WPCordovaClassLib.Cordova.Commands
{

    public class SocialVk : BaseCommand
    {
        public void initSocialVk(string par)
        {
            string[] options = JsonHelper.Deserialize<string[]>(par);
            VKSDK.AccessTokenReceived += (sender, args) =>
            {
                System.Diagnostics.Debug.WriteLine("Access token recieved " + args);
            };

            VKSDK.CaptchaRequest = (VKCaptchaUserRequest captchaUserRequest, Action<VKCaptchaUserResponse> action) =>
            {
                System.Diagnostics.Debug.WriteLine("Captcha request " + captchaUserRequest);
            };

            VKSDK.AccessDenied += (sender, args) =>
            {
                System.Diagnostics.Debug.WriteLine("Access denied " + args);
            };

            VKSDK.Initialize(options[0]);
            VKSDK.WakeUpSession();

            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "VK Plugin inited"));
        }

        public void login(string par)
        {
            string[] _scope = JsonHelper.Deserialize<string[]>( JsonHelper.Deserialize<string[]>(par)[0]);
            List<String> scope = new List<string>(_scope);
            VKSDK.Authorize(scope, false, false);
        }

        public void share(string par)
        {

        }

        public void logout(string par)
        {
            VKSDK.Logout();
        }

        public void users_get(string par)
        {

        }

        public void users_search(string par)
        {

        }

        public void users_isAppUser(string par)
        {

        }

        public void users_getSubscriptions(string par)
        {

        }

        public void users_getFollowers(string par)
        {

        }

        public void wall_post(string par)
        {

        }

        public void photos_getUploadServer(string par)
        {

        }

        public void photos_getWallUploadServer(string par)
        {

        }

        public void photos_saveWallPhoto(string par)
        {

        }

        public void photos_save(string par)
        {

        }

        public void friends_get(string par)
        {

        }

        public void friends_getOnline(string par)
        {

        }

        public void friends_getMutual(string par)
        {

        }

        public void friends_getRecent(string par)
        {

        }

        public void friends_getRequests(string par)
        {

        }

        public void callApiMethod(string par)
        {

        }

    }
}