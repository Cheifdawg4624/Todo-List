export class TodoItem {
  id = (new Date() + "").slice(-10);
  constructor(title, description, date, time) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
  }
}
