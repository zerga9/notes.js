(function(exports){

  function NoteController(list = new NoteList){
    note = Note.create("Favourite drink")
    this.list = list
    list.store(note)
    this.view = new NoteListView(list);
  };
 NoteController.prototype.getHTML = function() {
   document.getElementById("app").innerHTML = this.view.display();

 };
  exports.NoteController = NoteController;
})(this);
