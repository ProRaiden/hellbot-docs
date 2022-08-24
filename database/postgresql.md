---
description: Guide to get a PostgreSQL Database url.
---

# PostgreSQL

### :pushpin: From ElephantSQL

{% embed url="https://customer.elephantsql.com/login" %}
ElephantSQL
{% endembed %}

* Open ElephantSQL website from above and login into your account. If you don't have an account on ElephantSQL, you'll have to create an account using github or google.
* After logging is done, you'll see 'Create new Instance' on top right side of the page.

![Create New Instance](../.gitbook/assets/photo\_2022-08-21\_14-01-59.jpg)

* Now fill 'HellBot DB' in the Name field and select plan as 'Tiny Turtle'
* Then scroll down and click on 'Select Region'.

![Name & Plan](../.gitbook/assets/photo\_2022-08-21\_14-06-34.jpg)

* Leave it as it is. It should be Northern Virginia by default.
* Now scroll down and click on 'Review'.&#x20;
* In the next page, scroll down again and click on 'Create Instance'
* Now click on your newly created database.&#x20;
* Under details section, you'll see your URL. Unhide it and copy the database url.
* That's all. You got your database url from elephantsql.



### :pushpin: From Heroku

{% embed url="https://dashboard.heroku.com" %}
Heroku
{% endembed %}

* Open Heroku website from above.
* Create a new app from option at top right side.

![Create new app](../.gitbook/assets/photo\_2022-08-21\_14-17-54.jpg)

* Now give your app a name and click on 'Create App'.
* Now, go to resources bar and click on 'Quickly add Addons'
* Type 'heroku postgres' and you'll see 'Heroku Postgres' in the list. Click on that.

![Create Database](../.gitbook/assets/photo\_2022-08-21\_14-23-21.jpg)

* Now select free plan and click on 'Submit Order Form'.
* Now go to settings bar, scroll down and click on 'Reveal Config Var'.
* Now open 'DATABASE\_URL' variable and copy the value. That's your Database Url from Heroku.

![Databse url](../.gitbook/assets/photo\_2022-08-21\_14-29-09.jpg)

