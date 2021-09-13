# ReadMe!
a thign
## installation stuff
go to [here](nodejs.org "download for nodejs") and download nodejs
## make discord bot
1. go to [here](https://discord.com/developers/applications "manager for discord applications")
2. press "new application"
3. give it name and junk (thats cool you can set a team now)
4. go to bot tab
5. press add bot
6. you're done creting bot (just copy the token for next bit)
## set up files
1. download from github
2. edit .env to contain 
> "token = \<bot token copied from discord>"
3. go to .gitignore and add files under "#re-add these manually"
4. put content listed in a comment below each file in respective files (ignore "#")
5. run "npm i" in terminal
6. should be good?
## add bot
1. go back to new application on discord
2. copy application id
3. go [here](https://discordapi.com/permissions.html "gets a link to add bot")
4. paste application id into client id
5. select perms
6. use link at bottom to invite bot!
## start bot
1. run `node .` in termimal
2. should work? (test with @\<bot> ping)
3. stop it by pressing ctrl+c in console.
## clashroyale
1. get token
   1. [register](https://developer.clashroyale.com/#/register)
   2. go [here](https://developer.clashroyale.com/#/account) and press `create new key`
   3. copy ip from [here](https://ipv4.myip.wtf/ "cool site ngl")
   4. fill out junk
   5. create key
   6. go to new key
   7. copy token
2. open up data/strings.json
3. replace below with copied token
   > \<insert clashroyale api here>
4. restart bot and shouldn't break? (fingers crossed)