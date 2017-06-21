# Exercice
To practice using JSX and embedding expressions with JSX, let's try creating a notification bell element that can transition between three different states:

<img width="958" alt="badges" src="https://user-images.githubusercontent.com/1416436/27402232-f9929a1a-5693-11e7-92d7-4465c3fd138b.png">

1. When there are no notifications, we want to only display the notification icon.
2. If there are less than 99 notifications, we'll want to display the icon and notifications badge.
3. If there are more than 99 notifications, we'll want to truncate the number of notifications shown on the badge and only display `99+`, and we'll want to add an `has-fire` class to the notification badge to display the flames.
