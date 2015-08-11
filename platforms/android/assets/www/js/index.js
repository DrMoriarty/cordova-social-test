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

function log(message) {
    console.log(message);
    var parentElement = document.getElementById("log");
    var line = document.createElement("p");
    line.innerText = message;
    parentElement.appendChild(line);
}

function error_message(tag, message) {
    console.log(tag+': '+message);
    var parentElement = document.getElementById("log");
    var line = document.createElement("p");
    line.innerText = tag;
    parentElement.appendChild(line);
    line = document.createElement("p");
    line.setAttribute('style', 'color:red;');
    line.innerText = message;
    parentElement.appendChild(line);
}

function success_message(tag, message) {
    console.log(tag+': '+message);
    var parentElement = document.getElementById("log");
    var line = document.createElement("p");
    line.innerText = tag;
    parentElement.appendChild(line);
    line = document.createElement("p");
    line.setAttribute('style', 'color:green;');
    line.innerText = message;
    parentElement.appendChild(line);
}

/**
 * Convert an image 
 * to a base64 url
 * @param  {String}   url         
 * @param  {Function} callback    
 * @param  {String}   [outputFormat=image/png]           
 */
function convertImgToBase64URL(url, callback, outputFormat){
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS'),
            ctx = canvas.getContext('2d'), dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
    };
    img.src = url;
}

function testNonAuthorizedFunctions() {
    SocialVk.users_get('205387401', 'photo_50,city,verified', '', function(res) {
        success_message('VK users get', JSON.stringify(res));
    }, function(err) {
        error_message('VK users get', err);
    });

    SocialVk.users_getSubscriptions(66748, 1, 0, 20, '', function(res) {
        success_message('VK users getSubscriptions', JSON.stringify(res));
    }, function(err) {
        error_message('VK users getSubscriptions', err);
    });

    SocialVk.users_getFollowers(66748, 0, 2, 'photo_50', '', function(res) {
        success_message('VK users getFollowers', JSON.stringify(res));
    }, function(err) {
        error_message('VK users getFollowers', err);
    });
    
    SocialVk.friends_get(1, 'name', 3, 100, 'city,domain', 'ins', function(res) {
        success_message('VK friends get', JSON.stringify(res));
    }, function(err) {
        error_message('VK friends get', err);
    });
}

function testAuthorizedFunctions(user_id) {
    user_id = user_id || 0;
    SocialVk.users_search('Vasya Babich', function(res) {
        success_message('VK users search', JSON.stringify(res));
    }, function(err) {
        error_message('VK users search', err);
    });

    SocialVk.users_isAppUser(2943, function(res) {
        success_message('VK users isAppUser', JSON.stringify(res));
    }, function(err) {
        error_message('VK users isAppUser', err);
    });

    SocialVk.wall_post('Test VK post', function(res) {
        success_message('VK wall post', JSON.stringify(res));
    }, function(err) {
        error_message('VK wall post', err);
    });

    SocialVk.photos_getUploadServer(169819278, 37273781, function(res) {
        success_message('VK photos getUploadServer', JSON.stringify(res));
    }, function(err) {
        error_message('VK photos getUploadServer', err);
    });

    SocialVk.photos_getWallUploadServer(61264413, function(res) {
        success_message('VK photos getWallUploadServer', JSON.stringify(res));
    }, function(err) {
        error_message('VK photos getWallUploadServer', err);
    });

    convertImgToBase64URL('img/logo.png', function(base64Img) {
        SocialVk.photos_saveWallPhoto(base64Img, user_id, 0, function(res) {
            success_message('VK photos saveWallPhoto', JSON.stringify(res));
        }, function(err) {
            error_message('VK photos saveWallPhoto', err);
        });

        SocialVk.photos_save(base64Img, 0, 0, function(res) {
            success_message('VK photos save', JSON.stringify(res));
        }, function(err) {
            error_message('VK photos save', err);
        });
    });

    SocialVk.friends_getOnline(1, 'name', 3, 0, function(res) {
        success_message('VK friends getOnline', JSON.stringify(res));
    }, function(err) {
        error_message('VK friends getOnline', err);
    });

    SocialVk.friends_getMutual(1, 21, 'random', 10, 0, function(res) {
        success_message('VK friends getMutual', JSON.stringify(res));
    }, function(err) {
        error_message('VK friends getMutual', err);
    });

    SocialVk.friends_getRecent(10, function(res) {
        success_message('VK friends getRecent', JSON.stringify(res));
    }, function(err) {
        error_message('VK friends getRecent', err);
    });

    SocialVk.friends_getRequests(0, 10, 1, 1, 1, 0, 0, function(res) {
        success_message('VK friends getRequests', JSON.stringify(res));
    }, function(err) {
        error_message('VK friends getRequests', err);
    });

    SocialVk.callApiMethod('audio.search', {'q': 'The Beatles', 'count': 10}, function(res) {
        success_message('VK call API audio.search', JSON.stringify(res));
    }, function(err) {
        error_message('VK call API audio.search', err);
    });
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        if(window.SocialVk) {
            SocialVk.init('5027289', function() {
                success_message('VK plugin', 'inited');
                testNonAuthorizedFunctions();
                SocialVk.login(['wall', 'offline', 'friends', 'audio', 'video', 'photos'], function(res) {
                    success_message('VK login', JSON.stringify(res));
                    testAuthorizedFunctions();
                }, function(err) {
                    error_message('VK login', err);
                });
            }, function(err) {
                error_message('VK plugin', err);
            });
        } else {
            error_message('VK plugin', 'not found');
        }
        if(window.SocialOk) {
            SocialOk.init('198971648', '46B5A159EC2760CBD51CD645', 'CBACBNNMABABABABA', function() {
                success_message('OK plugin', 'inited');
            }, function(err) {
                error_message('OK plugin', err);
            });
        } else {
            error_message('OK plugin', 'not found');
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};

app.initialize();
