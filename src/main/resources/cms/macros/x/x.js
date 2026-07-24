exports.macro = function (context) {
    var url = context.params['url'],
        lang = getLang(context);

    if (!url || !isValidPostUrl(url)) {
        return makeErrorMessage("Valid X post url is required.");
    }

    var html = "<blockquote class='twitter-tweet' lang='" + lang + "'><a hidden='true' href='" + url + "'>Link to post</a></blockquote>\n";

    return {
        body: html,
        pageContributions: {
            bodyEnd: [
                "<script src=\"https://platform.x.com/widgets.js\" async=\"\" charset=\"utf-8\"></script>"
            ]
        }
    }
};

function isValidPostUrl(url) {
    return /^(https|http)?:\/\/(x|twitter)\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)??(?:&?[^=&]*=[^=&]*)*$/.test(url);
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
