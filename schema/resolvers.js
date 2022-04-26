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

module.exports = {resolvers};