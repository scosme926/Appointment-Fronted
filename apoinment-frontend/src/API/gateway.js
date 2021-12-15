import axios from "axios"
import { LOGIN_ENDPOINT } from "../constants"

export function postLogin(data, onSuccefulCallBack, onErrorCallBack, doneCallBack){
    axios.post(LOGIN_ENDPOINT, data)
  .then(onSuccefulCallBack)
  .catch(onErrorCallBack)
  .then(doneCallBack)
}

export function postRegister(data, onSuccefulCallBack, onErrorCallBack, doneCallBack){
    axios.post(LOGIN_ENDPOINT, data)
  .then(onSuccefulCallBack)
  .catch(onErrorCallBack)
  .then(doneCallBack)
}
