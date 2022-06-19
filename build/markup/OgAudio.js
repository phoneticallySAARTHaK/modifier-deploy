"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var markup = function markup(url, audio_url, title, description) {
  return "<html lang=\"en\">\n    <head>\n      <title>modifier</title>\n\t  \t<meta http-equiv=\"refresh\" content=\"0; url=".concat(url, "\"/>\n      <meta name=\"description\" content=\"").concat(description, "\"/>\n\n      <!-- Open Graph / Facebook -->\n      <meta property=\"og:type\" content=\"object\" />\n      <meta property=\"og:url\" content=\"").concat(url, "\" />\n      <meta property=\"og:title\" content=\"").concat(title, "\" />\n      <meta property=\"og:description\" content=\"").concat(description, "\"/>\n      <meta property=\"og:audio\" content=\"").concat(audio_url, "\" />\n  \n      <!-- Twitter -->\n      <meta property=\"twitter:card\" content=\"summary_large_image\" />\n      <meta property=\"twitter:url\" content=\"").concat(url, "\" />\n      <meta property=\"twitter:title\" content=\"").concat(title, "\" />\n      <meta property=\"twitter:description\" content=\"").concat(description, "\"/>\n      <meta property=\"twitter:player\" content=\"").concat(audio_url, "\" />\n      \n    </head>\n    <body style=\"background: #202630\">\n      <h1 style=\"text-align: center; color: #c678dd; margin-top: 400px\">Redirecting....</h1>\n    </body>\n  </html>");
};

var _default = markup;
exports["default"] = _default;