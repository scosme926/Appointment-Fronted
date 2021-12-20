import axios from "axios";
import { LIST_CREATE_APPOINTMENT } from "../constants"

export function getAppointmentList(onSuccefulCallBack, onErrorCallBack, doneCallBack){
  axios.get(LIST_CREATE_APPOINTMENT)
  .then(onSuccefulCallBack)
  .catch(onErrorCallBack)
  .then(doneCallBack)
}

export function postAppointment(data, onSuccefulCallBack, onErrorCallBack, doneCallBack){
  console.log(data)
  axios.post(LIST_CREATE_APPOINTMENT, data)
  .then(onSuccefulCallBack)
  .catch(onErrorCallBack)
  .then(doneCallBack)
}
