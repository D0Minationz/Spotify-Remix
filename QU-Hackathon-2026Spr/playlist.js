class Playlist {

    constructor(name) {
        this.name = name;
        this.songs = [];//my list
    }

    addSongToEnd(song) {
        this.songs.push(song);
    }

    addSongHere(song, index) {
        this.songs.splice(index, 0, song);
    }

    removeSong(song) {
        const index = this.songs.indexOf(song); 
        if (index > -1) {
            this.songs.splice(index, 1); //(Where its being taken out, how many to remove)
        }
    }

    replaceSong(oldSong, newSong) {
        const index = this.songs.indexOf(oldSong); 
        this.removeSong(oldSong);
        this.addSong(newSong, index);
    }
    
    displayPlaylist() {
        console.log("Playlist: " + this.name);
        console.log("Songs:");

        for (let i = 0; i < this.songs.length; i++) {
            this.songs[i].displaySong();
        }
    }

    setName(newName) {
        this.name = newName;
    }


}