import firebase from "firebase/app"
import "firebase/auth"

export const config = {
  apiKey: "AIzaSyDoKrSvoxh7cgJBdtkBnEpzPXVO5GBiOt4",
  authDomain: "hakumon-7a085.firebaseapp.com",
  projectId: "hakumon-7a085",
  storageBucket: "hakumon-7a085.appspot.com",
  messagingSenderId: "727369403241",
  appId: "1:727369403241:web:3d445b83305bfcbd20cbf8",
  measurementId: "G-ZQSQEY8VT3"
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export const getSyllabus = async () => {
  const repoUrl = 'https://api.github.com/repos/Cyllabus/GetSyllabus/contents/syllabus.json'
  const response = await fetch(repoUrl)
  // const files = await response.json()
  return response
}

export const writeFireStore = () => {
  // const db = firebase.firestore()
  // db.collection("cyllabus").doc().set(getCyllabus());
  // db.collection("cyllabus").where("id", "==", "1")

}