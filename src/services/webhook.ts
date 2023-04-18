import axios from 'axios';
import { getWebhook } from '../zap-util';

export function webhook(instance:any, type:any, data:any) {
  const host = getWebhook(instance);
  var content;
  content = {instance, type, data}
  //comment if condition to send messages
  if (type.split("/")[0] != 'connection'){
    content = {};
  }
  axios.post(`${host}/wahook/${type}`, content)
        .then((success) => {
            return success
        })
        .catch((error) => {
            console.log(error)
            return error
        })
}

