(function(exports){
  function NoteList(){
    this.notes = [];
  };
  NoteList.prototype.store = function(string){
    this.notes.push(new Note(string));
  }
  exports.NoteList = NoteList;
})(this);
