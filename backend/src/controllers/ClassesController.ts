import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import convertHourToMinutes from '../utils/convertHourToMinutes'

const prisma = new PrismaClient()

interface IScheduleItem {
  week_day: Number
  from: string
  to: string
}

export default class ClassesController {

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body

    const classSchedule = schedule.map((scheduleItem: IScheduleItem) => {
      return {
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to)
      }
    })

    try {
      await prisma.user.create({
        data: {
          name,
          avatar,
          whatsapp,
          bio,
          Classes: {
            create: [
              {
                subject,
                cost: Number(cost),
                ClassSchedules: {
                  create: classSchedule
                }
              }
            ]
          }
        }
      })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}
