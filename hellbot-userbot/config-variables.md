---
description: A page with mandatory and common config variables.
---

# Config Variables

### :tickets: Environment Variables

These are the variables stored in system environment. Setting/deleting these variables needs bot to restart.

_**Setup command:** `.set var variable_name variable_value`_

_**Delete command:** `.del var variable_name`_

_**Get Value Command:** `.get var variable_name`_

| Variable Name          | Explanation                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------- |
| ABUSE                  | Set this to `ON` to turn on abuse mode.                                                |
| BUTTONS\_IN\_HELP      | Number of buttons in help menu.                                                        |
| CURRENCY\_API          | Get an API key from [here](https://app.exchangerate-api.com/sign-up).                  |
| EMOJI\_IN\_HELP        | Emoji to display in Help menu.                                                         |
| INSTAGRAM\_SESSION     | Needed for Instagram modules to work. Generate sessionn from [here.](broken-reference) |
| INSTANT\_BLOCK         | Instantly block users in new pm. Set this to `ENABLE` if you want instant block.       |
| LYRICS\_API            | Get an API key from [here.](https://genius.com/api-clients)                            |
| MAX\_SPAM              | Number of messages new users can send you before the block blocks them.                |
| MY\_CHANNEL            | Your channel username to display in `.hell`                                            |
| MY\_GROUP              | Your group username to display in `.hell`                                              |
| OCR\_API               | Get an API key from [here.](https://ocr.space/ocrapi/freekey)                          |
| PLUGIN\_CHANNEL        | Channel id of a channel you want to install external plugins.                          |
| PM\_LOG\_ID            | Channel id a channel/group to log pm messages.                                         |
| PM\_PERMIT             | To disable pmpermit set this to `Disable`                                              |
| REMOVE\_BG\_API        | Get an API key from [here.](https://www.remove.bg/api)                                 |
| SESSION\_2             | Session string for 2nd client. Generate it from [here.](../string-session/repl.it.md)  |
| SESSION\_3             | Session string for 3rd client. Generate it from [here.](../string-session/repl.it.md)  |
| SESSION\_4             | Session string for 4th client. Generate it from [here.](../string-session/repl.it.md)  |
| SESSION\_5             | Session string for 5th client. Generate it from [here.](../string-session/repl.it.md)  |
| SUDO\_HANDLER          | Command handler for sudo users. Defaults to `.`                                        |
| TAG\_LOGGER            | Channel id of the channel/group to log tags.                                           |
| THUMB\_IMG             | Direct link to the image.                                                              |
| UNLOAD                 | Name of plugins you don't want to load in your bot.                                    |
| UPSTREAM\_REPO         | Github repo link for updates.                                                          |
| UPSTREAM\_REPO\_BRANCH | Github branch name for updates.                                                        |
| WEATHER\_API           | Get an API key from [here.](https://home.openweathermap.org/api\_keys)                 |

### :tickets: Database Variables

These are the variables stored in database. Setting/deleting these variables won't need bot to restart.

_**Setup Command:** `.svar variable_name variable_value`_

_**Delete Command:** `.dvar variable_name`_

_**Get Value Command:**_ _`.gvar variable_name`_

| Variable Name     | Explanation                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ALIVE\_MSG        | Message to display in your `.hell` command                                                                                                   |
| ALIVE\_NAME       | Custom alive name to display in your `.alive` & `.hell` command.                                                                             |
| ALIVE\_PIC        | Picture/gif/video you want to display on your `.alive` & `.hell` command. You can add multiple medias by separating every link with a space. |
| BAN\_PIC          | A picture/gif/video to display in gban, gkick, gmute command.                                                                                |
| BIO\_MSG          | Message for your bio.                                                                                                                        |
| CUSTOM\_PMPERMIT  | Message for your custom pmpermit texts.                                                                                                      |
| HELP\_PIC         | Picture/gif/video to display in your help pic.                                                                                               |
| PING\_PIC         | Picture/gif/video to display in your ping text.                                                                                              |
| PMPERMIT\_PIC     | Picture/gif/video to display in your pmpermit.                                                                                               |
| STICKER\_PACKNAME | Your custom sticker packname.                                                                                                                |
| USE\_EVAL         | To use eval command set this to `True`                                                                                                       |

### :ticket: Mandatory Variables

| APP\_ID          | Get this value by logging into [telegram api website](https://my.telegram.org)                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| API\_HASH        | Get this value by logging into [telegram api website](https://my.telegram.org)                                     |
| HELLBOT\_SESSION | Generate a session string using [REPL](../string-session/repl.it.md) or [TERMINAL](../string-session/terminal.md). |
| BOT\_TOKEN       | Make a bot from [@BotFather](https://t.me/botfather) and paste the token.                                          |
| HANDLER          | Give any symbol as the command handler.                                                                            |
| DATABASE\_URL    | A postgreSQL Database url. [Get the guide here](../database/postgresql.md).                                        |
