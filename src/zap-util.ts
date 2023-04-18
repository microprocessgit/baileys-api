import { find, update } from './services/client';
const clientsList = new Map();

export async function insertClients() {
  find().then(clients => {
    for (const val of clients) {
      setClientList(val);
    }
  }); 
}

export async function updateClients(req: any) {
  update(req).then(clients => {
    setClientList(clients);
  }); 
}

function setClientList(clients: any) {
  const { client, key, webhook } = clients;
  clientsList.set(client, { key, webhook });
}

export function clientListExists(req: any) {
  const { sessionId, sessionKey } = req.body;
  let result;
  clientsList.forEach((value, item) => {
    if (item == sessionId)
      result = value.key;
  })
  return (result == sessionKey);
}
