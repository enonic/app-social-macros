# app-social-macros
Application that enables usage of social macros in your site's html area.

Macros are written in the following format: 
- [macroName attribute1="value1" attribute1="value2"]body of the macro[/macroName]
or in a short format
- [macroName attribute1="value1" attribute1="value2"/]

Macros will be processed on page render or you may preview them via macros dialog in XP Admin Application.
<br/><br/>
Following macros are available:
## Youtube macro
```
requires 'url' attribute with video link [youtube url="https://youtu.be/some-link"/]
```

## Tweet macro
```
requires 'url' attribute with link to tweet [tweet url="https://twitter.com/user-name/status/post-id"/]
```

## Tweet macro
```
requires 'url' attribute with link to instagram post [instagram url="https://www.instagram.com/p/post-id/"/]
```

By default, rendered macros use their own native styling, so in order to override that, user would have to wrap them into something of his own.
