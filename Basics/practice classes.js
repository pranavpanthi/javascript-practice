class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}

let firstEpisode = new Episode ('The boy', 45, true);
let secondEpisode = new Episode ('541 meters', 50, false);
let thirdEpisode = new Episode ('Jutulheim', 45, false);

console.log (firstEpisode);
console.log (secondEpisode);
console.log (thirdEpisode);
