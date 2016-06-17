exports.macro = function (context) {
    var url = context.params['url'],
        lang = getLang(context);

    if (!url || !isValidTweetUrl(url)) {
        return makeErrorMessage("Valid tweet url is required.");
    }

    var html = "<blockquote class='twitter-tweet' lang='" + lang + "'><a hidden='true' href='" + url + "'>Link to tweet</a></blockquote>\n";

    return {
        body: html,
        pageContributions: {
            bodyEnd: [
                "<script src=\"//platform.twitter.com/widgets.js\" async=\"\" charset=\"utf-8\"></script>"
            ]
        }
    }
};

function isValidTweetUrl(url) {
    return /^(https|http)?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)$/.test(url);
}

function makeErrorMessage(message) {
    return {
        body: message,
        pageContributions: {}
    }
}

function getLang(context) {
    if(context.request.headers.hasOwnProperty("Accept-Language")) {
        var acceptLang = context.request.headers["Accept-Language"];
        return acceptLang.split(",")[0];
    }
    return 'en';
}
