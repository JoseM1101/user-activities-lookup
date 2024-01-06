import { Activity } from "./Activity"
import { randomNumber, months, capitalize } from "../utils"

export class User {
  id = randomNumber(1, 10000)
  name
  activities = []

  constructor(name) {
    this.name = name
  }

  generateActivities(quantity) {
    for (let i = 0; i < quantity; i++) {
      this.activities.push(Activity.buildActivity())
    }
  }

  getMonthlyActivities(month) {
    const monthlyActivities = this.activities.filter((activity) => {
      return months[activity.date.getMonth()] === capitalize(month)
    })

    return monthlyActivities
  }

  calcTotal(prop, activities) {
    let total = 0

    activities.forEach((activity) => {
      total += activity[prop]
    })

    return total
  }
}
