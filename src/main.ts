import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen("https://e-commerce-backend-data.herokuapp.com/").then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
