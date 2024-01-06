import { randomNumber, randomDate } from "../utils"

const names = ["running", "cycling", "swimming"]

export class Activity {
  id
  name
  distance
  time
  elevationGain
  date

  constructor(
    id,
    name,
    distance,
    time,
    elevationGain,
    date = randomDate(new Date(2023, 7, 1), new Date())
  ) {
    this.id = id
    this.name = name
    this.distance = distance
    this.time = time
    this.elevationGain = elevationGain
    this.date = date
  }

  static buildActivity() {
    return new Activity(
      randomNumber(1, 10000),
      names[randomNumber(0, 2)],
      randomNumber(100, 1000),
      randomNumber(30, 60),
      randomNumber(500, 1000)
    )
  }
}
