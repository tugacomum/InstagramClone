import React from "react";
import { SignedInStack, SignedOutStack } from "./navigation";
import { useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const useHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(() => onAuthStateChanged(auth, (user) => useHandler(user)), []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
