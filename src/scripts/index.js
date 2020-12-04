import "./firebase/firebaseConfig"
import {clickHandler} from "./utils";
import {googleSignIn, googleSignOut} from "./firebase/firebaseAuthentication"

clickHandler("signIn-google", googleSignIn)
clickHandler("app-signOut", googleSignOut)