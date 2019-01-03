const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            {ballroom: false },
            { conservatory: true },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: true },
            {ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            {ballroom: false },
            { conservatory: true },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: true },
            {ballroom: false },
            { conservatory: false },
            { 'dining room': true },
            { 'billiard room': false },
            { library: false }
        ]
    }
]

let isFalse = [];
let isTrue = [];

let getRooms = newDevelopment
    .map(room => room.rooms)
    .reduce((acc, cur) => acc.concat(cur))
    .reduce((acc, cur) => {
        for ( key in cur ) {
            if ( cur[key] === false ) { 
                isFalse.includes(key) ? '' : isFalse.push(key)
            }
            else if ( cur[key] === true ) { 
                isTrue.includes(key) ? '' : isTrue.push(key)
            }
        } 
        return isFalse;
    }, [])
    .filter(room => {
        if (isTrue.includes(room)) { return false; } 
        else { return true; }
    })

console.log(getRooms);
