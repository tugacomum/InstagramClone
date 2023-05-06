import * as React from "react";
import { registerRootComponent } from "expo";
import AuthNavigation from "./AuthNavigation";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <AuthNavigation />
      <StatusBar style="auto" />
    </>
  );
}

registerRootComponent(App);
