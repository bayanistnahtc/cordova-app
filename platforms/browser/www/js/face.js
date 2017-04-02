var myFacebookApp = {
   init: function() {
         facebookConnectPlugin.getLoginStatus(
             myFacebookApp.handleLoginResponse,
             myFacebookApp.debugResponse
         );
   },
   handleLoginResponse: function(response) {
       console.log('response', response);
       alert("Message: " + JSON.stringify(response));

       if (response.status == 'connected') {
       // myFacebookApp.switchToView.loggedin();
       $('.loggedin').hide();
       $('.loggedout').show();
       } else {
           // myFacebookApp.switchToView.loggedout();
                $('.loggedin').show();
       			$('.loggedout').hide();
       }
   },


   debugResponse: function(response) {
       console.log('response', response);
       alert("Message: " + JSON.stringify(response));
   },
   switchToView: {
   loggedin: function() {
       $('.loggedin').show();
       $('.loggedout').hide();
   },
   loggedout: function() {
       $('.loggedin').hide();
       $('.loggedout').show();
   }
},

login: function() {
   facebookConnectPlugin.login(["public_profile"],
       myFacebookApp.handleLoginResponse,
       myFacebookApp.debugResponse
   );
},
logout: function() {
   facebookConnectPlugin.logout(
       myFacebookApp.switchToView.loggedout,
       myFacebookApp.switchToView.loggedin
   );
}

};

