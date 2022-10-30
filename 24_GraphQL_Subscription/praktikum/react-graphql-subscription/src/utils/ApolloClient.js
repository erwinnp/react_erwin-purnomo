import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://holy-flea-31.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':
          'obY0kl2CAwvRwsPVvNmrZ3FqoM1VGWXR0WNuyXImaDJnmYmytY9wj2juMhGKtYyV',
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: 'https://holy-flea-31.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'obY0kl2CAwvRwsPVvNmrZ3FqoM1VGWXR0WNuyXImaDJnmYmytY9wj2juMhGKtYyV',
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
