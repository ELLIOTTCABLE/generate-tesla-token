generate-tesla-token
====================
This is a tiny, one-off module to generate [Tesla API][API] tokens (necessary if you don't want to
give your username and password out to random Internet services) locally, i.e. if you're properly
paranoid, and don't want to trust websites that say they “don't store the information, and only use
it to generate a token.”

Hopefully, with the immanent release of the Model 3, Tesla will get off their collective asses and
offer a proper OAuth authentication (and crucially, revocation) flow, with granular permissions ...
until then, be careful with this. **Any token you generate with this can be used to unlock, locate,
start your car!**

Here's a couple sites for which this is useful (i.e. ones that allow you to directly enter a token,
manually):

 - <TeslaLog.com>, an automated data-logger and graph generator for Tesla drivers
 - The [My Tesla][] skill for [Amazon Alexa and Echo devices][Alexa]

   [Alexa]: <https://www.amazon.com/Amazon-Echo-Bluetooth-Speaker-with-WiFi-Alexa/dp/B00X4WHP5E>
      "The Amazon Echo intelligent home-control speaker"
   [My Tesla]: <https://www.amazon.com/Nikhil-Kapur-My-Tesla-Unofficial/dp/B01N9Y4I1E>
      "Nikhil Kapur's unofficial ‘My Tesla’ Alexa skill"


Usage
-----
You'll [need Node and npm][tutorial] installed, first.

You can install this the traditional way, if you really want it sitting around on your computer and
getting out-of-date:

    npm install -g generate-tesla-token

However, if you have a recent version of  npm, it's much simpler to use [`npx`][npx] (you can
upgrade with `npm install -g npm`, or install it directly with `npm install -g npx`):

    npx generate-tesla-token

<p align="center">
   <img width=650 align=center
      src="https://user-images.githubusercontent.com/200/28244480-e69b65e6-69b1-11e7-9cc8-be027d87f84c.png">
</p>

   [tutorial]: <https://www.npmjs.com/package/generate-tesla-token/tutorial>
      "npm's instructions for installing Node.js on your computer"
   [npx]: <https://www.npmjs.com/package/npx#description> "Kat Marchán's npm-package-execution tool"
