/**
 * 2017 Iblyaminov Albert <rie.albert@gmail.com>
 */

var Social = function () {
    this.init();
};

Social.prototype.attach = function () {
    this.attachFacebook();
    // this.attachTwitter();
    this.attachVK();
};

Social.prototype.init = function () {
    window.fbAsyncInit = this.attachFacebook.bind(this);
    // window.twAsyncInit = this.attachTwitter.bind(this);
    window.vkAsyncInit = this.attachVK.bind(this);

    this.loadScriptFacebook();
    this.loadScriptVk();
    // this.loadScriptTwitter();
};

Social.prototype.attachFacebook = function () {
    try {
        FB.init({
            appId: '1378529325809070',
            xfbml: true,
            version: 'v2.3'
        });

        return FB.XFBML.parse();
    } catch (error) {
        // console.log(error);
    }
};

Social.prototype.loadScriptFacebook = function () {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/ru_RU/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};

Social.prototype.attachVK = function() {
    try {
        if (!this.inited) {
            VK.init({apiId: 4402732, onlyWidgets: true});
        } else {
            this.inited = true;
        }

        var buttons = document.querySelectorAll('.vk-share-button:not(.ready)');
        for (var i = 0; i < buttons.length; i++) {
            VK.Widgets.Like(buttons[i].getAttribute('id'), {
                type: 'button',
                pageUrl: buttons[i].getAttribute('data-href') || undefined
            });
            buttons[i].classList.add('ready');
        }
    } catch (error) {
        // console.log(error);
    }
};

Social.prototype.loadScriptVk = function () {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//vk.com/js/api/openapi.js?116&callback=vkAsyncInit";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'vk-jssdk'));
};

Social.prototype.attachTwitter = function() {
    try {
        var buttons = document.querySelectorAll('.twitter-share-button:not(.ready)');
        for (var i = 0; i < buttons.length; i++) {
            twttr.widgets.createShareButton(buttons[i].getAttribute('data-url'),
                document.getElementById(buttons[i].getAttribute('id')), {
                    lang: 'ru'
                });
            buttons[i].classList.add('ready');
        }
    } catch (error) {
        // console.log(error);
    }
};

Social.prototype.loadScriptTwitter = function () {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//platform.twitter.com/widgets.js?callback=twAsyncInit";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'twitter-jssdk'));
};

document.addEventListener("DOMContentLoaded", function() {
    window.Social = new Social();
});
