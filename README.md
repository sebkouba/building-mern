# Internations Interview Task
There are many things I would like to improve about this but I ran out of time.
Hopefully it will suffice as a conversation starter.

### Installation
Assuming Node is installed, simply clone the repo, `npm install`, `npm start` or `nodemon` and go to `localhost:3001`.

Everything is built on a starter kit I had begun to implement working towards a simple MERN
boiler plate. This is a fork of that project.

### API Endpoints
#### Add User
Should accept `username` post data on `/useradd`
#### Delete User
Should accept `userid` delete request on `/userdelete`
#### Add Group
Should accept `groupname` post data on `/groupadd`
#### Delete Group
Should accept `groupid` delete request on `/groupdelete`
#### User & Group Management

### Thoughts
* The handling of the AJAX requests is poor
* Bootstrap was used to have time for React
* Redux was not used since state is fairly limited
* Assuming the Backend data starts in the React Component state was a shortcut
* Users and Groups don't have and id when they are created but use one otherwise
* If it had been an "official implementation" request there would have been many
clarifying questions I would have asked but I assumed that wasn't the point here.
* Automated testing was omitted
