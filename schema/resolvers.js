const { UserList } = require("../FakeData");
//All resolver functions within the api.
const resolvers = {
    Query: {
        users() {
            return UserList;
        },
    },
};

module.exports = {resolvers};