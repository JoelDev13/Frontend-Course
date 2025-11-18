interface audioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: details;
}

interface details{
    author: string;
    year: number;
}

const audioPlayer: audioPlayer = {
    audioVolumen: 75,
    songDuration: 4,
    song: "yellow",
    details: {
        author: 'coldplay',
        year: 2011
    }
}

//Desestructuracion
const {song:anothersong, songDuration:duration, details} = audioPlayer 
const {author} = details

/*console.log(anothersong);
console.log(duration)
console.log(author)*/


//Desestructuración de arreglo

const [p1, p2, p3]: string[] = ["mario kart", "legend of zelda", "pokemon"]

console.log(p3);


