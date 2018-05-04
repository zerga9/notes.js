(function(exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.store = function(note) {

    this.notes.push(note);
  };

  NoteList.prototype.list = function() {
    return this.notes
  };
  exports.NoteList = NoteList;
})(this);