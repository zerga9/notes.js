(function(exports){

  function NoteListView(list){
    this.noteList = list
  };

  NoteListView.prototype.display = function () {
     return "<ul><li><div>"+(this.noteList.notes.join("</div></li><li><div>"))+"</div></li></ul>";
   };

  exports.NoteListView = NoteListView;
})(this);
