import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import InitialScreen from './InitialScreen';
import AppDetailScreen from './AppDetailsScreen/AppDetailScreen'
import AppListScreen from './AppListScreen/AppListScreen'
import CookiesMessage from './CookiesMessage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <InitialScreen />

        </Route>
        <Route exact path="/app/:appId">
          <AppDetailScreen />
        </Route>
        <Route exact path="/app-list">
          <AppListScreen />
        </Route>
      </Switch>
      
      {false &&
        <CookiesMessage />
      }
    </div>
  );
}





export default App;
