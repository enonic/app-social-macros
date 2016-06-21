# Social Macros App
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

## Instagram macro
```
requires 'url' attribute with link to instagram post [instagram url="https://www.instagram.com/p/post-id/"/]
```

By default, rendered macros use their own native styling, so in order to override that, user would have to wrap them into something of his own.

## Build code:

    gradle build
  
Before trying to build the project, you need to verify that the following software are installed:

* Java 8 (update 40 or above) for building and running.
* Gradle 2.x build system.

## Deploy:
    gradle deploy - (requires XP_HOME variable to be set) - this will build and deploy the app into XP_HOME/deploy folder
    
    ... or build project and put jar into XP_HOME folder
    
    ... or simply install the app via Enonic market

## Usage

Add Social Macros App as a dependency to your site to enable it using macros
