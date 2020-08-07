import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const totalConnections = await prisma.connections.count()

    return response.json(totalConnections)
  }

}
