function noteListViewTests(){
  var list = new NoteList();
  var note1 = new Note("Favourite food: pesto");
  var note2 = new Note("Favourite drink: seltzer");
  list.store(note1);
  list.store(note2);
  var view = new NoteListView(list)
  console.log(view.display())
  assert.isTrue(view.display() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>", "returns a string of HTML that represents the note list mode");
}

noteListViewTests();
