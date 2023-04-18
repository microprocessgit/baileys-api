import { prisma } from '../shared';

export async function insert(client: any) {
  return await prisma.client.create({ data: client });
}

export async function find() {
  return await prisma.client.findMany();
}

export async function update(req: any) {
  var { client, key, webhook, sessionId, sessionKey } = req.body;
  if(client == undefined)client = sessionId;
  if(key == undefined)key = sessionKey;
  return await prisma.client.update({
    where: {
      client: client
    },
    data: {
      client: client,
      key: key,
      webhook: webhook
    }
  });
}

export async function deleteClient(id: any) {
  return await prisma.client.delete({
    where: {
      pkId: parseInt(id),
    },
  })
}
