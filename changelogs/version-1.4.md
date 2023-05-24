---
description: 'Released: March 23, 2023'
---

# Version 1.4

## :rocket: _<mark style="color:red;">**Hêllẞø† α - 1.4**</mark>_

* **Stability:** HellBot is now more stable than ever. Less crash, zero downtime, smoother performance, etc.
*   **Build:**

    * _Python - 3.11.0_
    * _Updated Dependencies_
    * _Secured session generator_
    * _New asyncio updater_
    * _Custom repo support_


*   **Major Updates:**

    * **Core:** Changed HellBot's core once again for future updates.

    > _In future:_ Assistant, Voice Chat Player, and many more.

    * **Custom Plugins Repo:** You can now choose your own plugins repo. Add an environment variable `GIT_REPO` with your repo name as value.

    > _For Example:_ `GIT_REPO` = `HellBoy-OP/Plugins`


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

    * **Help Menu:** Fixed help menu not working problem.
    * **Clone:** Fixed `.clone` command.
    * **Local Host:** Fixed problems in local hosting.
    * **Markdowns:** Fixed all markdown problems.
    * **Songs:** Fixed song and video songs download plugin.
    * **YTDL:** Fixed youtube download plugin.
    * **Logo:** Fixed logo making plugin.
    * **Image:** Fixed google image download plugin.
    * **Reverse:** Fixed google reverse image search plugin.
    * Other vulnerable bugs fix.


* **New:**
  * **Block All:** Added a new command in `banall` section to block all/contacts/non-contacts in a group.
  * **waifu:** This plugin contains both NSFW & SFW content.
