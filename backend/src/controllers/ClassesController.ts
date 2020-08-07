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
  async index(request: Request, response: Response) {
    const filters = request.query

    const week_day = filters.week_day as string
    const subject = filters.subject as string
    const time = filters.time as string

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing parameters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await prisma.classes.findMany({
      where: {
        subject,
        ClassSchedules: {
          some: {
            week_day: {
              equals: Number(week_day)
            },
            from: {
              lte: timeInMinutes
            },
            to: {
              gt: timeInMinutes
            }
          }
        }
      },
      include: {
        user: true,
      }
    })

    return response.json(classes)
  }

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
