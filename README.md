# FB handler for mobile

Ever clicked on a Facebook link on your phone, and it opened in your mobile browser instead of the app? Here's a simple lib to help fix.

## Concept
There's an "FB Protocol" which is registered and handled by your app.

## Work in Progress

The current version 'works' but is buggy and the code is ugly as sin. 

It works on Android and iPhone as of a year ago, but things may have changed. 

There is some troubleshooting console logging going on, there's a cookie (would prefer cookieless), and the logic flow could definitely use some help. I developed this as a quick solution for a client so it was "good enough" at the time.

I'm not necessarily looking for bug reports, pull requests -- just publishing this to get it out there to start.

# Usage

### 1. Include this .js library:

``` <script src="fb-handler-for-mobile.js">```

### 2. Be sure to edit the window.location links to your FB page!
### 3. HTML:

```<a onclick="fbHandler()">Facebook</a>```

## License
[Licensed under MIT](https://opensource.org/licenses/MIT) - open source. Do whatever you like, no limits. Don't even need to buy me a beer!
