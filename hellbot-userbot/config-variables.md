---
description: A page with mandatory and common config variables.
---

# Config Variables

### :tickets: Environment Variables

These are the variables stored in system environment. Setting/deleting these variables needs bot to restart.

_**Setup command:** `.set var variable_name variable_value`_

_**Delete command:** `.del var variable_name`_

_**Get Value Command:** `.get var variable_name`_

<table><thead><tr><th width="260">Variable Name</th><th>Explanation</th></tr></thead><tbody><tr><td>ABUSE</td><td>Set this to <code>ON</code> to turn on abuse mode.</td></tr><tr><td>BUTTONS_IN_HELP</td><td>Number of buttons in help menu.</td></tr><tr><td>CURRENCY_API</td><td>Get an API key from <a href="https://app.exchangerate-api.com/sign-up">here</a>.</td></tr><tr><td>EMOJI_IN_HELP</td><td>Emoji to display in Help menu.</td></tr><tr><td>INSTAGRAM_SESSION</td><td>Needed for Instagram modules to work. Generate sessionn from <a href="broken-reference">here.</a></td></tr><tr><td>INSTANT_BLOCK</td><td>Instantly block users in new pm. Set this to <code>ENABLE</code> if you want instant block.</td></tr><tr><td>LYRICS_API</td><td>Get an API key from <a href="https://genius.com/api-clients">here.</a></td></tr><tr><td>MAX_SPAM</td><td>Number of messages new users can send you before the block blocks them.</td></tr><tr><td>MY_CHANNEL</td><td>Your channel username to display in <code>.hell</code></td></tr><tr><td>MY_GROUP</td><td>Your group username to display in <code>.hell</code></td></tr><tr><td>OCR_API</td><td>Get an API key from <a href="https://ocr.space/ocrapi/freekey">here.</a></td></tr><tr><td>PLUGIN_CHANNEL</td><td>Channel id of a channel you want to install external plugins.</td></tr><tr><td>PM_LOGGER</td><td>Channel id a channel/group to log pm messages.</td></tr><tr><td>PM_PERMIT</td><td>To disable pmpermit set this to <code>Disable</code></td></tr><tr><td>REMOVE_BG_API</td><td>Get an API key from <a href="https://www.remove.bg/api">here.</a></td></tr><tr><td>SESSION_2</td><td>Session string for 2nd client. Generate it from <a href="../string-session/repl.it.md">here.</a></td></tr><tr><td>SESSION_3</td><td>Session string for 3rd client. Generate it from <a href="../string-session/repl.it.md">here.</a></td></tr><tr><td>SESSION_4</td><td>Session string for 4th client. Generate it from <a href="../string-session/repl.it.md">here.</a></td></tr><tr><td>SESSION_5</td><td>Session string for 5th client. Generate it from <a href="../string-session/repl.it.md">here.</a></td></tr><tr><td>SUDO_HANDLER</td><td>Command handler for sudo users. Defaults to <code>.</code></td></tr><tr><td>TAG_LOGGER</td><td>Channel id of the channel/group to log tags.</td></tr><tr><td>THUMB_IMG</td><td>Direct link to the image.</td></tr><tr><td>UNLOAD</td><td>Name of plugins you don't want to load in your bot.</td></tr><tr><td>UPSTREAM_REPO</td><td>Github repo link for updates.</td></tr><tr><td>UPSTREAM_REPO_BRANCH</td><td>Github branch name for updates.</td></tr><tr><td>WEATHER_API</td><td>Get an API key from <a href="https://home.openweathermap.org/api_keys">here.</a></td></tr></tbody></table>

### :tickets: Database Variables

These are the variables stored in database. Setting/deleting these variables won't need bot to restart.

_**Setup Command:** `.svar variable_name variable_value`_

_**Delete Command:** `.dvar variable_name`_

_**Get Value Command:**_ _`.gvar variable_name`_

<table><thead><tr><th width="228">Variable Name</th><th>Explanation</th></tr></thead><tbody><tr><td>ALIVE_MSG</td><td>Message to display in your <code>.hell</code> command</td></tr><tr><td>ALIVE_NAME</td><td>Custom alive name to display in your <code>.alive</code> &#x26; <code>.hell</code> command.</td></tr><tr><td>ALIVE_PIC</td><td>Picture/gif/video you want to display on your <code>.alive</code> &#x26; <code>.hell</code> command. You can add multiple medias by separating every link with a space.</td></tr><tr><td>ALIVE_TEMPLATE</td><td>Alive message template.</td></tr><tr><td>BAN_PIC</td><td>A picture/gif/video to display in gban, gkick, gmute command.</td></tr><tr><td>BIO_MSG</td><td>Message for your bio.</td></tr><tr><td>CUSTOM_PMPERMIT</td><td>Message for your custom pmpermit texts.</td></tr><tr><td>HELP_PIC</td><td>Picture/gif/video to display in your help pic.</td></tr><tr><td>PING_PIC</td><td>Picture/gif/video to display in your ping text.</td></tr><tr><td>PMPERMIT_PIC</td><td>Picture/gif/video to display in your pmpermit.</td></tr><tr><td>STICKER_PACKNAME</td><td>Your custom sticker packname.</td></tr><tr><td>USE_EVAL</td><td>To use eval command set this to <code>True</code></td></tr></tbody></table>

### :ticket: Mandatory Variables

<table data-header-hidden><thead><tr><th width="230">Variable Name</th><th>Explanation</th></tr></thead><tbody><tr><td>APP_ID</td><td>Get this value by logging into <a href="https://my.telegram.org">telegram api website</a></td></tr><tr><td>API_HASH</td><td>Get this value by logging into <a href="https://my.telegram.org">telegram api website</a></td></tr><tr><td>HELLBOT_SESSION</td><td>Generate a session string using <a href="../string-session/repl.it.md">REPL</a> or <a href="../string-session/terminal.md">TERMINAL</a>.</td></tr><tr><td>BOT_TOKEN</td><td>Make a bot from <a href="https://t.me/botfather">@BotFather</a> and paste the token.</td></tr><tr><td>HANDLER</td><td>Give any symbol as the command handler.</td></tr><tr><td>DATABASE_URL</td><td>A postgreSQL Database url. <a href="../database/postgresql.md">Get the guide here</a>.</td></tr></tbody></table>
