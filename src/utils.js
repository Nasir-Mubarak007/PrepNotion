import * as imagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import * as Crypto from "expo-crypto";

const UUID = Crypto.randomUUID();
// console.log("Your UUID: " + UUID);

export async function pickImage() {
  let result = imagePicker.launchCameraAsync();
  return result;
}

export async function askPermission() {
  const { status } = await imagePicker.requestCameraPermissionsAsync();
  return status;
}

export async function uploadImage(uri, path, fName) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };

    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileName = fName || UUID
  const imageRef = ref(storage,`${path}/${fileName}.jpeg`)
  const snapshot = await uploadBytes(imageRef, blob, { contentType: "image/jpeg" });

  blob.close();

  const url = await getDownloadURL(snapshot.ref);

  return { url, fileName };
}

// const snapshot = await uploadBytes(imageRef,{})
// const url= await getDownloadURL(snapshot.ref)
