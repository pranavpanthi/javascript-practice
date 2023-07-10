let numberOfGuests = 5;
let ticketsRemaining = false;
let artistName = 'Prahlad Panthi';

let guests =['Pranav Panthi', 'Pramod Subedi'];

let artistProfile = {
    numberOfGuests: numberOfGuests,
    ticketsRemaining: ticketsRemaining,
    artistName: artistName,
    guests: guests
};

let artistArray = [numberOfGuests, ticketsRemaining, artistName, guests];

guests.push('Prakriti Subedi');

console.log(artistProfile);
console.log(artistArray);