exports.macro = function (context) {
    var url = context.params['url'],
        lang = context.params['lang'] || 'en';

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
        body: '<div class="error-message">' + message + '</div>',
        pageContributions: {}
    }
}
