/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        window.SocialVk.init('5916792', this.vkInitCallback, this.vkErrorInitCallback);
  
    },
    vkInitCallback(result){
      console.log("initCallback");
      console.log(result);
      
    },
    vkErrorInitCallback(error){
      console.log("errorInitCallback");
      console.log(error);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // myFacebookApp.init();

        console.log('Received Event: ' + id);

        var login = document.getElementById("login_button");
        // console.log(share_button);
        login.addEventListener("click", function(){
                    window.SocialVk.login(["WALL"], this.vkInitCallback, this.vkErrorInitCallback);
        });

        var share_button = document.getElementById("share_button");
        share_button.addEventListener("click", function(){
                    window.SocialVk.share('http://www.pngmart.com/files/2/Mario-Transparent-Background.png', 
                      '','https://vk.com/id182742236', this.vkInitCallback, this.vkErrorInitCallback);
          });
     // console.log(SocialVk.PluginResult.Status.OK);
          // var login_facebook = document.getElementById('login_facebook');
          // login_facebook.addEventListener("click", login);

             

    },


    handleLoginResponse: function(response) {

       if (response.status == 'connected') {
          console.log("connected");
       } else {
          console.log("unconnected");
       }
    },

    login_facebook:  function(){
      facebookConnectPlugin.login(["public_profile"],
      this.handleLoginResponse,
            function (error) { console.log("" + error) }
        );

          // var fbLoginSuccess = function (userData) 
          // {
          //     console.log("UserInfo: " + JSON.stringify(userData));
          //     facebookConnectPlugin.getAccessToken(function(token) 
          //     {
          //         console.log("Token: " + token);
          //     }, function(err) {
          //         console.log("Could not get access token: " + err);
          //     });
          // }
           
          // facebookConnectPlugin.login(["public_profile"],
          //     fbLoginSuccess,
          //     function (error) { console.log("" + error) }
          // );
    },


    logout: function() {
     facebookConnectPlugin.logout(
      function () { console.log("logout") }
        ,
      function () { console.log("error") }
        
        // switchToView.loggedout,
         // switchToView.loggedin
     );
    },

   share_facebook: function(){

    facebookConnectPlugin.getLoginStatus(
      function (status) {
        console.log("current status: " + JSON.stringify(status));

        var options = { 
          method: "feed",
          picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
          name:'Test Post',
          message:'First photo post',    
          caption: 'Testing using phonegap plugin',
          description: 'Posting photo using phonegap facebook plugin'
         };
        facebookConnectPlugin.showDialog(options,
          function (result) {
              console.log("Posted. " + JSON.stringify(result));       },
          function (e) {
              console.log("Failed: " + e);
        });
      })
    }

};

app.initialize();
