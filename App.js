import * as React from "react";
import { StatusBar } from "react-native";
import SignedInStack from './navigation';

export default function App() {
  return (
    <>
      <SignedInStack />
      <StatusBar barStyle="dark-content"/>
    </>
  );
}
