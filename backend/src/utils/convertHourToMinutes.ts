export default function convertHourToMinutes(time: string) {
  const [hours, minutes] = time.split(':')

  const timeInMinutes = Number(hours) * 60 + Number(minutes)

  return timeInMinutes
}
