const { UserList, FilmList } = require("../FakeData");
const _ = require("lodash"); //Because not using db yet.
//All resolver functions within the api.
const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        //Film resolvers
        film: (parent, args) => {
            const query = args.name;
            const targetFilm = _.find(FilmList, {name: query});
            return targetFilm;
        },
        films: () => {
            return FilmList;
        }
    },
    User: { //Specific user based attached query by ID
        favouriteFilms: (parent, args) => {
            console.log(parent);
            const filmIDs = parent.favouriteFilms;
            console.log(filmIDs);
            const favouriteFilms = _.filter(FilmList, (film) => filmIDs.indexOf(film.id) != -1);
            return favouriteFilms;
         },
    },
};

//Example of getting a single user and specific data
// query GetUser($userId: ID!) {
//     user(id: $userId) {
//       name
//       age
//       nationality
//       friends {
//         id
//         name
//       }
//     }
//   }

//Example of getting favourite films by user ID
// query GetFavouriteFilms($userID: ID!) {
//     user(id: $userID){
//       name
//       age
//       favouriteFilms {
//         name
//         published
//         inTheaters
//       }
//     }
//   }

module.exports = {resolvers};