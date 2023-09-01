export class TodoItem {
  id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  constructor(title, description, date, time, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
    this.priority = priority;
  }
}
