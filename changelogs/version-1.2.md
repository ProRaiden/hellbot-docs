---
description: 'Released: March 13, 2022'
---

# Version 1.2

## :rocket: _<mark style="color:red;">**Hêllẞø† α - 1.2**</mark>_

* **Heroku Fix:** Fixed heroku deploy problem. Now you can deploy on heroku without any account ban issue.
* **Clone:** Fixed clone plugin not working as it should be. Also updated revert command. Now you don't have to setup any variable to revert back.
* **Stickers:** Fixed stickers not creating new pack after completing 120 stickers.
* **Video Stickers:** Added video stickers in `.kang`. Note that after completing 50 stickers you won't be able to kang video/gif automatically to another pack. You'll have to give pack number manually. For more details see hell chats.
* **Limits:** Added a new plugin to check limitations on your account.
* **Gmute:** Fixed gmute in private chats.
* **Ban pics:** Added and improved gban/gkick pics. Set your own ban pic by `.svar Ban_pic <link>`
* **Mute:** Fixed admins mute command.
* **Alive:** Improved and fixed alive plugin.
* **Autoprofile:** Fixed autobio, autoname, etc
* **Pmpermit:** Fixed and improved pmpermit for main client. Also added custom pmpermit pic and pmpermit message.
* **Help:** Did some changes in Help Menu.
* **Sticker Packname:** Added option to change packname without restarting bot.
* **Evaluator:** Did some changes in eval and exec command.
* **Tag Logger:** Fixed tag logger. Need to setup `TAG_LOGGER` with value as channel/grp id.
* **Welcome:** Fixed welcome plugin.
* **Sudo:** Highly improved sudo. Add sudo users by `.addsudo` and remove them by `.rmsudo`
* **Memify:** Fixed memify.
* **Instagram:** Fixed Instagram video/pic downloadplugin.
* **AutoHusbando:** Added AutoHusbando plugin. Do `.plinfo protecc` to know more.
* **Font Changer:** Added font changer plugin using latest `python 3.10.2` features. Do `.plinfo fonts` to know more.
* **Filter:** Fixed filters and snips.
* **Spam:** Fixed and improved spamming. Also break spam works smoothly now.
* **Purge:** Fixed purgeme command.
*   **Command Info:** Added command to check other command's infos.

    **Example:** `.cmdinfo alive`
*   **Unwanted Plugins:** Added option to uninstall some unwanted plugins. To uninstall plugins permanently fill `UNLOAD` with the names of unwanted plugins separated by space. Get all plugins name by `.cmds`

    **Example:** `.set var UNLOAD banall adultzone ascii`
* **Ping Pic:** Added option to set picture/video/gif in ping message. You can set multiple pic/vid/gif by separating each link with a space. Do `.svar ping_pic <links>`
* **Config List:** Added a command to display all config variables. Do `.vars` to get normal variables and `.vars -db` to get Database based variables name.
* **Plugin Channel:** Now extra plugins from plugin channel will be loaded automatically on every restart. Do `.set var PLUGIN_CHANNEL <channel_id>` to setup plugin channel. Remember plugin should be in [this format](https://github.com/The-HellBot/Plugins/blob/master/Plugins.md#follow-this-format-to-make-your-own-plugin-for-hellbot)
* **Updated HellBot Startup & Core.**

_<mark style="color:red;">**`NOTE:`**</mark>_ _<mark style="color:yellow;">`Now HellBot supports multi clients at it's fullest. Will add more database based command in multi clients soon with updates. Stay tuned!`</mark>_
