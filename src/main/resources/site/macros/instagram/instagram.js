exports.macro = function (context) {
    var url = context.params['url'],
        maxWidth = context.params['maxWidth'] || 'auto';

    if (!url || !isValidInstagramUrl(url)) {
        return makeErrorMessage("Valid url is required.");
    }

    var html = "<blockquote class='instagram-media' data-instgrm-captioned style='width: 100%; max-width: " + maxWidth + ";'>" +
               "<a href='" + url + "'>Link to post</a></blockquote>\n";

    return {
        body: html,
        pageContributions: {
            bodyEnd: [
                "<script src='//platform.instagram.com/en_US/embeds.js'></script>"
            ]
        }
    }
};

function isValidInstagramUrl(url) {
    return /((http|https):\/\/)?(www.)?(instagram.com|instagr.am)\/(\S+)/.test(url);
}

function makeErrorMessage(message) {
    return {
        body: '<div class="error-message">' + message + '</div>',
        pageContributions: {}
    }
}
