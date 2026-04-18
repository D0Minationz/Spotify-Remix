class Song{

    constructor(title, artist, pictureURL){
        this.title = title;
        this.artist = artist; 
        this.picture = pictureURL;
    }

    constructor(){
        title = "Unknown Title";
        artist = "Unknown Artist";
        picture = ""; //nothing here for now
    }

    displaySong(){ //"SongObject".displaySong() 
        console.log("Title: " + this.title);
        console.log("Artist: " + this.artist);
        console.log("Picture: " + this.pictureURL);//may not work, not sure how to display picture in console
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setArtist(newArtist){
        this.artist = newArtist;
    }

    setPicture(newPictureURL){
        this.picture = newPictureURL;
    }

    //const song1 = new Song("Shape of You", "Ed Sheeran", "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png");
    //const song2 = new Song("Blinding Lights", "The Weeknd", "https://upload.wikimedia.org/wikipedia/en/0/09/The_Weeknd_-_After_Hours.png");
    //const song3 = new Song("Levitating", "Dua Lipa", "https://upload.wikimedia.org/wikipedia/en/0/0b/Dua_Lipa_-_Future_Nostalgia.png");




}

