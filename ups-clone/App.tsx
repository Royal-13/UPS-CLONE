import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

// const LOCAL_SYSTEM_IP_ADDRESS = '192.168.29.176';
// const PORT = '5000';

const client = new ApolloClient({
  link: createHttpLink({
  uri: 'http://192.168.29.176:5001/graphql',
  }),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition 
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
      <NavigationContainer>
      <RootNavigator/>
      </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

