---
description: 'Released: September 05, 2021'
---

# Version 0.9

## :rocket: _<mark style="color:red;">**Hêllẞø† α - 0.9**</mark>_

* Fixed crash while deploying in railway.app
* Blacklisted @HellBot\_Chat from `Gcast`.
* Updated `.mute`. Now you can mute admins of a group if you are also an admin with delete message permission.
* Some changes in inviteall.
* Updated `AFK`. Now you can enable AFK Mode without mentioning reason. Simply do `.afk` to activate AFK Mode.
* Fixed and updated wikipedia command. Changed command from `.wikipedia` to `.wiki`
* Added new command `.aw` to give the list of groups with Autowaifu enabled.
* Added `uptime` in alive messages.
* Updated `.alive` & `.hell` looks. See it yourself. There's something more regarding Alive message, just keep on reading....
* Added DB Variables. You can save vars in DB without restarting your bot. Currently there are limited variables supporting DB. To get the list of all DB Vars do `.vars`
* To ease-up setting variables I added 3 more commands. These are `.gvar` - To get value of that given variable. `.svar` - To save the variable to DB. `.dvar` - To deleted the variable from DB.
* To add DB vars you'll have to do `.svar <variable name> <variable value>`
* To delete a DB Var you'll have to do `.dvar <variable name>`
* To get info of a DB Var do `.gvar <variable name>`
* Now `.meev` & `.mev` will send meme voice to the replied person as a reply. Previously it won't tag them, but now it is fixed. Enjoy.
* Added new command `.reload`. Same as restart but it won't uninstall any external plugin you have installed.
* Now you can set multiple Alive pic for your `.alive` & `.hell` command. To do this, do `.svar ALIVE_PIC <telegraph links separated by a space>`. This will save your alive pic to DB and you'll get random pics in alive message.
* Same as alive pic, I added DB var in BAN\_PIC. You can follow same step to add multiple pics in GBAN, GKICK pics. Do `.svar BAN_PIC <telegraph links separated by a space>`
* Now you can set alive message without going to heroku. Do `.svar ALIVE_MSG <alive msg here>`
* Added new command in **memify**. Do `.plinfo memify` to get more details.

_<mark style="color:red;">**`NOTE:`**</mark>` `<mark style="color:yellow;">`I'm looking for a good Alive template. If you wanna contribute it'll be a huge help. Credits will be given to respective designers. Please don't come up with any old/other userbot design.`</mark>_
