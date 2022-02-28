import React, { useEffect, useState } from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAccount } from "./redux/user/user.actions";

import "./App.css";

function App(props) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          props.setAccount({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        props.setAccount(null);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  /*   useEffect(() => {
    console.log(props.account);
  }, [props.account]); */

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signin"
          render={() =>
            props.account ? <Redirect to="/" /> : <SignInSignUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  account: state.user.account,
});

const mapDispatchToProps = (dispatch) => ({
  setAccount: (account) => dispatch(setAccount(account)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
