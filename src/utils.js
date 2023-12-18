import * as imagePicker from "expo-image-picker";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { storage } from "./firebase";

export async function pickImage() {
  let result = imagePicker.launchCameraAsync();
  return result;
}

export async function askPermission() {
  const { status } = await imagePicker.requestCameraPermissionsAsync();
  return status;
}

// const imageRef = ref(storage, ``.jpg)

// const snapshot = await uploadBytes(imageRef,{contentType: 'image/jpeg'})
// const url= await getDownloadURL(snapshot.ref)
