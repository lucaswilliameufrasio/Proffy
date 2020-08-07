import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const totalConnections = await prisma.connections.count()

    return response.json({
      total: totalConnections
    })
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body

    await prisma.connections.create({
      data: {
        user: {
          connect: { id: user_id }
        }
      }
    })

    return response.status(201).send()
  }
}
