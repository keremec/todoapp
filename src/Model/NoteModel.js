export default class NoteModel {
  id;
  title;
  isDone;

  constructor(_id, _title, _isDone = true) {
    this.id = _id;
    this.title = _title;
    this.isDone = _isDone;
  }
}
