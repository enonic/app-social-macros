var portal = require('/lib/xp/portal');

exports.macro = function (context) {
    var url = context.params['url'];

    if(!url || !isYoutubeUrl(url)) {
        return makeErrorMessage("Valid youtube url is required.");
    }

    var html = "<div class='youtube-video-wrapper'><iframe src='" + convertUrl( url ) + "' allowfullscreen></iframe></div>";

    return {
        body: html,
        pageContributions: {
            headBegin: [
                '<link rel="stylesheet" href="' + portal.assetUrl({path: 'css/youtube.css', application: app.name}) + '" type="text/css" />'
            ]
        }
    }
};

function makeErrorMessage ( message ) {
    return {
        body: message,
        pageContributions: {}
    }
}

function isYoutubeUrl( url ) {
    return /^(https:\/\/|http:\/\/)?(www\.)?(m\.)?(youtu\.be\/|youtube\.com\/)(.)+/.test( url );
}

function convertUrl( url ) {
    return "https://www.youtube-nocookie.com/embed/" + fetchVideoId( url );
}

function fetchVideoId( url ) {
    var pathWithVideoId = fetchLastPathOfUrl( url );

    if ( urlPathHasAttributes( pathWithVideoId ) )
    {
        return findVideoIdWithinPathAttributes( pathWithVideoId );
    }

    return pathWithVideoId;  // matches ...www.youtube.com/v/gdfgdfg and ...youtu.be/cFfxuWUgcvI
}

function findVideoIdWithinPathAttributes( path ) {
    var indexOfIdKey = path.lastIndexOf( "v=" );
    if ( indexOfIdKey > -1 )
    {
        var videoId = path.substring( indexOfIdKey + 2),
            indexOfAmp = videoId.indexOf( "&" );
        if ( indexOfAmp > -1 )
        { // case like v=cFfxuWUgcvI&t=2
            return videoId.substring( 0, indexOfAmp );
        }
        else
        {
            return videoId;
        }
    }
    return path.substring( 0, path.indexOf( "?" ) ); // ...www.youtube.com/v/-aAbBcCdDeE?version=3&autohide=1
}

function fetchLastPathOfUrl( url )
{
    return url.substring( url.lastIndexOf( "/" ) + 1 );
}

function urlPathHasAttributes( path )
{
    return path.indexOf( "?" ) > -1;
}
