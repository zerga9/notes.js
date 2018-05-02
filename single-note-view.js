(function(exports) {
  function SingleNoteView(note = new Note()){
    this.note = note;
  }
  SingleNoteView.prototype.display = function(){
    return "<div>" + this.note.read() + "</div>";
  }
  exports.SingleNoteView = SingleNoteView;
})(this);
