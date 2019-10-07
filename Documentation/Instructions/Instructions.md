# Instructions

## Installation
The software and tools needed are [HERE](Installation.md) with a guide on how to get it up and running.
If you want to build the mobile app yourself you will need to install everything listed in that list.
We have [pre-made a APK](/APK/) to make it easier for those that don't wish to go through the whole process,
if you are just going to use the APK no software is needed to use it. 
If you just want to to run it on your browser (Which we do not recommand because of limitations) you only need the first two items in the list to be installed.

## Download project
Choose a folder on your computer and open terminal in it.
Use the command <br>
`git clone https://github.com/cos301-2019-se/Geyser-App.git`
<br>
Then just have to go into the folder
<br>
`cd Geyser-App`
<br>

## Mobile App
There are 3 ways you can use the mobile app.
1. We have pre-built the APK for the mobile app [HERE](/APK/) and it only needs to be downloaded and put into the phone and installed.

2. Go into the Ionic Mobile App folder with this command <br>
`cd '.\Ionic Mobile App\'`

Once inside the folder use this command to get all the needed files automatically.
<br>
`npm install`

When that is done you can run the command <br>
`ionic serve`
<br>
This will open your internet browser and run the mobile application,
but beware running through the browser has its limitations, and
you won't be able yo go past the point where the mobile app needs to
take pictures.

3. The final way is to build the APK if everything is installed properly then just running the command  <br>
`ionic cordova build android`
<br>
This will build an APK in '\platforms\android\app\build\outputs\apk\debug' directory and then it needs to be put into the phone and installed.

If a guide on how to use the mobile app is needed, it can be found in our [User Manual Document](/Documentation/User%20Manual/User%20manual%20Final%20one.pdf). Or a quick [video demonstration](https://www.youtube.com/watch?v=xDqgnfOv5bI&feature=youtu.be)