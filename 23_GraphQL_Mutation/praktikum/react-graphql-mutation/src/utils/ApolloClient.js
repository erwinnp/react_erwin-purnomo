import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://holy-flea-31.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'obY0kl2CAwvRwsPVvNmrZ3FqoM1VGWXR0WNuyXImaDJnmYmytY9wj2juMhGKtYyV',
  },
  cache: new InMemoryCache(),
});

export default client;
