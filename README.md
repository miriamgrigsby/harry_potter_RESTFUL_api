# Harry Potter 1-Page App 

  This is a simple application with a Ruby on Rails detached backend and vanilla Javascript front

  It is free to use and modify for your own strategies. It provides the folllowing: 

    An application takes in user input and only allows the user to interact with the page dynamically rendering changes

    Backend uses strong params, rails validations, API calls 
    
    Front uses vanilla JavaScript, JQuery, and event-listeners

Getting Started:

    Create a folder and clone down

    Run bundle to install the gems if using Bundler

    Run rails db:create
    
    Run rails db:migrate

    Run rails db:seed

    Run rails s to start the sever

Operation Overview:

    User is greeted with a home image and an enter button

    After entering the "game" the user can choose one of 4 Harry Potter Houses and enter their name to be stored in a database
    
    Enter an ancestry attribute for the player and a spell and submit the form to see your battle team begin to assemble

    User chooses two team-mates to add to their battle team (these team-mates are filted by the house the user chose above)

    Once a team is created the user can either delete their name, associated house, and ancestry and submit a new one in the same form, or update their ancestry dynamically 

    Now that both teams are filled out and correct, the user presses the battle button to compare their spells
    
    The spells have associated ratings that are added and compared between the created users

    The winner is printed out with a link to more information about the team 
    
    The team homepage links to information about random spells the user now has based on the spells their teammates had
    
    The team homepage also plays a video of the final battle in Harry Potter

    Menus throughout allow the user to return to previous menus or to exit the app 
    
* [Walk Through Video](https://www.youtube.com/watch?v=1IhnkICbymg&feature=youtu.be)
