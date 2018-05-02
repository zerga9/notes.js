function noteListViewTests(){
  var list = new NoteList();
  var note1 = new Note("hello");
  var note2 = new Note("goodbye all");
  list.store(note1);
  list.store(note2);
  var view = new NoteListView(list)
  console.log(view.display())
  assert.isTrue(view.display() === "<ul><li><div>hello</div></li><li><div>goodbye all</div></li></ul>", "returns a string of HTML that represents the note list mode");
}

noteListViewTests();

function lessThan20Char(){
  var list = new NoteList();
  var note = new Note("Favourite drink: seltzer")
  list.store(note);
  var view = new NoteListView(list)
  assert.isTrue(view.display() === "<ul><li><div>Favourite drink: sel</div></li></ul>" , "this note is 20 char or less ")
}
lessThan20Char();
