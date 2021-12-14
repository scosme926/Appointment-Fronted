import axios from "axios"
import { VERSION_ENDPOINT, HELLO_ENDPOINT } from "../constants"

export function getVersion(onSuccessCallback, onErrorCallback, onDoneCallback) {
  axios.get(VERSION_ENDPOINT)
    .then(onSuccessCallback)
    .catch(onErrorCallback)
    .then(onDoneCallback)

}

export function postHello(data, onSuccefulCallBack, onErrorCallBack, doneCallBack){
    axios.post(HELLO_ENDPOINT, data)
  .then(onSuccefulCallBack)
  .catch(onErrorCallBack)
  .then(doneCallBack)
}
