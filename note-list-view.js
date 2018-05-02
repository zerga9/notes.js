(function(exports){

  function NoteListView(list){
    this.noteList = list
  };

  NoteListView.prototype.display = function () {
     return "<ul><li><div>"+(this.noteList.notes.map(note => note.slice(0, 20)).join("</div></li><li><div>"))+"</div></li></ul>";
   };

  exports.NoteListView = NoteListView;
})(this);
