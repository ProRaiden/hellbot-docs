---
description: Guide to generate a session string using Repl.it
---

# REPL.it

### :link: Follow these steps carefully to generate string sessions:

* Open the repl link from below.
* Click on the Play Button.
* Wait for requirements to finish.
* Do human verification.
* Select the type of session.
* _<mark style="color:purple;">**`Telethon:`**</mark>_
  * Fill API ID, API HASH, Phone number (with country code).
  * Paste the OTP received on Telegram.
  * If You have Enabled 2-Step Verification then fill your password.
  * Your Telethon Session Will be saved in your Telegram Saved Message.
* _<mark style="color:purple;">**`Pyrogram:`**</mark>_
  * Fill API ID, API HASH, Phone number (with country code).
  * Paste the OTP received on Telegram.
  * If You have Enabled 2-Step Verification then fill your password.
  * Your Pyrogram Session will be saved in your Telegram Saved Message.
*   _<mark style="color:purple;">**`Instagram:`**</mark>_

    * Fill instagram username and password.
    * If asked for OTP check yout email and fill up the OTP from there.
    * Your Instagram Session will be displayed on the screen.
    * Copy it carefully and Do Not Share With Anyone!
    * Using a fake account is recommended.



{% embed url="https://replit.com/@TheHellBot/HellBot?v=1" %}
HellBot's Official Repl.it
{% endembed %}

## <mark style="color:red;">Error while Generating Session</mark>

Due to telegram's new and updating privacy & policies, many users have been facing a problem while generating the session from the repl. This is because telegram detects so many requests from the same network and it refuses to connect through it.  And since hellbot only works with its personal session that is known as HellBot Session that can only be generated using HellBot's official repl, you won't be able to generate any session whatsoever.

### Using Terminal

This issue can be bypassed when you're using a VPS or RDP or a Local Machine to host hellbot.  You can simply run a python script in the terminal.

`python3 hell_string.py`

Using this command mentioned above you can run the session generator file and generate hellbot session which will be automatically saved in your telegram's saved message. Then you only need to copy that session and paste it in your config vars.

### Heroku

If you're using heroku or any other platform to deploy hellbot, you can always generate the session in their terminal. Here we will talk about Heroku as it is widely in use.

* Deploy the bot without filling up the HELLBOT\_SESSION variable. You can fill up anything randomly just to bypass the required field.
* Now, go to the app's dashboard and click on "More" button.
* There you'll get an option "Run Console", click on that.
* Now, it'll ask for an command you can copy this and paste it in that input box.

`python3 hell_string.py`

* It'll start the session generator and you'll be able to generate the HellBot Session.
* The session will get saved in your telegram's saved messages. Copy that session.
* Now go to settings tab > Reveal Config Vars > HELLBOT\_SESSION
* Paste the session in that field.
* Now you can turn on the dynos and enjoy your HellBot.
