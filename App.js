import * as React from "react";
import SignedInStack from './navigation';
import { registerRootComponent } from "expo";

export default function App() {
  return (
      <SignedInStack />
  );
}

registerRootComponent(App);