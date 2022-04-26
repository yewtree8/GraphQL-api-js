const UserList = [
    {
      id: 1,
      name: "John",
      username: "john",
      age: 20,
      nationality: "CANADA",
      friends: [
        {
          id: 2,
          name: "Mat",
          username: "Mathew",
          age: 20,
          nationality: "UK",
        },
        {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
        }
      ],
      favouriteFilms: [
        1,4
      ]
    },
    {
      id: 2,
      name: "Mat",
      username: "Mathew",
      age: 20,
      nationality: "UK",
      favouriteFilms: [
        2,3
      ]
    },
    {
      id: 3,
      name: "Sarah",
      username: "cameron",
      age: 25,
      nationality: "INDIA",
      friends: [
        { id: 2,
          name: "Mat",
          username: "Mathew",
          age: 20,
          nationality: "UK"
        }
      ]
    },
    {
      id: 4,
      name: "Rafe",
      username: "rafe123",
      age: 60,
      nationality: "GERMANY",
    },
    {
      id: 5,
      name: "Kelly",
      username: "kelly2019",
      age: 5,
      nationality: "CHILE",
    },
  ];


  const FilmList = [
    {
      id: 1,
      name: "Avengers Endgame",
      published: 2019,
      inTheaters: true,
    },
    {
      id: 2,
      name: "Interstellar",
      published: 2007,
      inTheaters: true,
    },
    {
      id: 3,
      name: "Superbad",
      published: 2009,
      inTheaters: true,
    },
    {
      id: 4,
      name: "Mat The Film",
      published: 2035,
      inTheaters: false,
    },
  ];

  module.exports = { UserList, FilmList };