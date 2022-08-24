---
description: 'Released: October 18, 2021'
---

# Version 1.0

## :rocket: _<mark style="color:red;">**Hêllẞø† α - 1.0**</mark>_

* Fixed heroku deploy problem.
* Due to heroku account suspension issue removed 3 plugins. `memify.py, imgmemes.py, img_edits.py`.
* Added Multi-Clients. Now you can use 5 userbots by deploying one app in heroku.
* Changes whole base of HellBot. Now it's faster, smoother and supports 5 telegram account in one deploy.
* To use 5 accounts you need to fill up Heroku vars. `STRING_2`, `STRING_3`, `STRING_4`, `STRING_5`. Default string `HELLBOT_SESSION` acts as first client.
* Note that it's not mandatory to fill all 5 variables. If you want single client then fillup `HELLBOT_SESSION` only. And if you want 2 clients then fill up `STRING_2` along with `HELLBOT_SESSION`.
* You'll have to add your another clients to same logger, pm\_logger, tag\_logger channel to work properly.
* Fixed every other issues that you all mentioned earlier.
* Fixed alive image and help image too.
* And many more changes.
* If you face any bugs kindly report it to me. It'll help providing better updates in future.
* Due to heroku suspension issue, do not give `.update` `.update now` `.update build` commands.
