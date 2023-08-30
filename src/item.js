export class TodoItem {
  id = (new Date() + "").slice(-5);
  constructor(title, description, date, time, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
    this.priority = priority;
  }
}
