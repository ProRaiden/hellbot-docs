---
description: 'Released: August 09, 2022'
---

# Version 1.3

## :rocket: _<mark style="color:red;">**Hêllẞø† α - 1.3**</mark>_

* **Stability:** HellBot is now more stable than ever. Less crash, zero downtime, smoother performance, etc.
* **Build:**
  * _Python - 3.10.6_
  * _Updated Dependencies_
  * _Secured session generator_
  * _New asyncio updater_
  * _Custom repo support_
*   **Major Updates:**

    * **Core:** Changed HellBot's core once again for future updates.

    > _In future:_ Assistant, Voice Chat Player, Pyrogram Supported, and many more.

    * **Custom Plugins Repo:** You can now choose your own plugins repo. Add an environment variable `GIT_REPO` with your repo name as value.

    > _For Example:_ `GIT_REPO` = `HellBoy-OP/Plugins`

    * **Updated Configs:** Some new config variables are added to support new features.

    > Types:
    >
    > 1. _DB configs:_ These are database configs. While setting/removing them bot does not need to restart.
    > 2. _OS configs:_ These are environment configs. While setting/removing them bot needs to restart to apply changes.

    * **Database:** Databasese are now improved and fully implemented for multi-clients.

    > Currently only PostgreSQL is supported for Database.

    * **Clients:** Improved clients. Better connectivity and uptime.

    > Types:
    >
    > 1. _Telegram:_ 5 Telegram clients connected using Telethon.
    > 2. _Instagram:_ 1 Instagram client connected using Instagrapi.

    * **Functions:** For external & unofficial plugin developers.

    > Every pre-defined functions are defined in `TelethonHell/helpers` folder. You can make new plugins for yourself using these functions if needed.

    * **Utilities:** All utilities are updated to suit new update and new core.

    > Some core level functions are defined in `TelethonHell/utils` folder. Explore them to get better of HellBot.

    * **Plugins:** Updated all plugins to suit new update and new core of HellBot.

    > Plugins info and their usages with some examples are provided in the help menu. Explore all the plugins to get to know The Hellbot to its fullest.
    >
    > `P.S.` Every plugin is re-coded. So there might be some changes in working than it used to be in past. Some command trigger might have changed, so explore the help menu to get to know every command and their usage. Also check out HellBot Support Chat to get help regarding any issues with the bot.

### :rocket: _<mark style="color:red;">Hêllẞø† α - 1.3.5</mark>_

*   **Bugs Fixes:**

    * **Remove BG:** `.rmbg` command was not uploading output image.

    > Now it is fixed and improved for better use.

    * **Sangmata:** Due to some problems in sangmata official bot, hellbot was also affected by it.

    > This is just a temporary fix until the developers of sangmata updates the bot.

    * **App search:** `.app` command was not returning application information.

    > Fixed and moved this in `android` section in help menu.

    * **Tag logger:** The tag logger was bugged.

    > Fixed and also improved for multi clients.

    * **Memes and tweets:** Memes and tweets plugins were not receiving input from replies.

    > It was not a bug, I just didnt added this back then.

    * **Gcast:** Gcast for some users was not working and failing everytime.

    > Fixed for all flags: `-all` `-pvt` `-grp`

_<mark style="color:red;">**`NOTE:`**</mark>_ <mark style="color:yellow;">`I'm planning to add pyrogram version of HellBot. Any developer who knows Pyrogram and is willing to help you're most welcome. Connect with me on telegram through HellBot Support Chat. Also, I'm not expecting newbies! Someone who can code a plugin in pyrogram is good enough`</mark>
