# Firi-node-app

## A command based through text virtual helper.



This text based node operated search helper will help you find useful information. *Firi* was made to make looking for a song on spotify easy and find an artists upcoming concert. In addition to that concerts she can provide you with some movie information as well.
__________________________________________________________________________________

The App is organized in functions with api calls inside of them. The needed information is identified with-in the call and then logged in a manor doesn't appear as if you are "just inputting commands".
Of course the global variables are listen on top.
After the functions were created a switch statement was placed to recieve commands and initiate the calls.


            
To provide the necessary information a couple apis were used to make it all happen. 

The apis used are listed here:

1. **Spotify**

With the Spotify api *Firi* is able to display Information about any music artist.

1. **Bands in town**

The Bands in Town API provided the information to identify where a music arist is going to have their next concert.

1. **omdbAPI**

To find information about movies *Firi* uses omdbAPI.


## How to use *Firi*

*Firi* is rather easy to use. As of now there are only four basic commands.

For spotify simply type *node firi.js spotify* **your search**
as shown below.

![spotify call](/ReadMeImages/Spotifysc.png)



For concerts type *node firi.js concert* **your search**
as shown in the picture.

![concert call](/ReadMeImages/concertsc.png)



If youre trying to find info ona movie type *node firi.js movie* **your search**
as deminstrated in the picture.

![movie call](/ReadMeImages/moviesc.png)



And just to try it out there is an extra function "read" which can be used tryping
*node firi.js read*. This is used to read the text in a file and make a call.

![read call](/ReadMeImages/readsc.png)

______________________________________________________________________________________


Now you too can aquire this information using *Firi*.

**Please npm install before using or else it will not work**

Thank you!