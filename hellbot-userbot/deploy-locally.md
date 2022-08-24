---
description: A guide to host HellBot Userbot locally.
---

# Deploy Locally

{% embed url="https://github.com/The-HellBot/HellBot" %}
Official HellBot Userbot Repo
{% endembed %}

### Steps to deploy locally:

* Fork & Star this [repo.](https://github.com/The-HellBot/HellBot)
*   Now, follow these steps carefully:

    *   Update apt:

        _<mark style="color:purple;">`sudo apt update && sudo apt upgrade -y`</mark>_
    *   Now install required packages:

        _<mark style="color:purple;">`sudo apt install --no-install-recommends -y python3-lxml python3-psycopg2 libpq-dev libcurl4-openssl-dev libxml2-dev libxslt1-dev python3-pip python3-sqlalchemy openssl wget curl git libffi-dev libjpeg-dev libwebp-dev python3 python3-dev pv tree mediainfo nano nodejs libreadline-dev libyaml-dev gcc zlib1g ffmpeg libssl-dev libgconf-2-4 libxi6 unzip libopus0 libopus-dev python3-venv tmux libmagickwand-dev`</mark>_
    *   Clone the GitHub repo:

        _<mark style="color:purple;">`git clone https://github.com/The-HellBot/Plugins-T`</mark>_
    *   Go to the cloned repo directory:

        _<mark style="color:purple;">`cd Plugins-T`</mark>_
    *   Edit the config file:

        _<mark style="color:purple;">`mv ex_config.py config.py`</mark>_

        _<mark style="color:purple;">`nano config.py`</mark>_

        Fill all the mentioned variables there. Refer to [this page](config-variables.md#mandatory-variables) for easier understanding.
    *   Enter in new window:

        _<mark style="color:purple;">`tmux`</mark>_
    *   Create and activate a new virtualenv:

        _<mark style="color:purple;">`virtualenv venv`</mark>_

        _<mark style="color:purple;">`source venv/bin/activate`</mark>_
    *   Install requirements to run the userbot:

        _<mark style="color:purple;">`pip3 install -r requirements.txt`</mark>_
    *   After requirements are installed, start the userbot:

        _<mark style="color:purple;">`bash start.sh`</mark>_
    *   Exit the window:

        _<mark style="color:purple;">**`CTRL + B`**</mark><mark style="color:purple;">**  **</mark><mark style="color:purple;">****</mark>  then  <mark style="color:purple;">****</mark><mark style="color:purple;">**  **</mark><mark style="color:purple;">**`D`**</mark>_

    _<mark style="color:purple;">**``**</mark>_

_<mark style="color:orange;">**Enjoy your Userbot**</mark>_ :tada:_<mark style="color:orange;">****</mark>_
