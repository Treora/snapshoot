# Snapshoot

A simple browser extension to snapshot wepages and upload them to a server.

Snapshotting is done using [freeze-dry][]. This takes the DOM, fetches and
inlines all images and stylesheets, and creates a self-contained static HTML
file.

Uploading is done with a simple HTTP POST containing form data
(`multipart/form-data`), compatible with a [Micropub media endpoint][].


[Micropub media endpoint]: https://www.w3.org/TR/micropub/#media-endpoint
[freeze-dry]: https://github.com/WebMemex/freeze-dry


## Status

Works, but experimental, unpublished. Feel free to fork and improve.

Possible things to add:
* Let the user give their server URL.
* Give the user a way to authenticate.
* Support similar file upload protocols, e.g. [LDP][] or [IPFS API v0][].

[LDP]: https://www.w3.org/TR/2015/NOTE-ldp-primer-20150423/#creating-a-non-rdf-binary-resource-post-an-image-to-an-ldp-bc
[IPFS API v0]: https://ipfs.io/docs/api/#api-v0-add


## Build

```
npm install
npm run build
```

To try it out, add `./extension` as an 'unpackaged' (in Chromium) or '[temporary]' (Firefox) extension to your browser.

[temporary]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox
