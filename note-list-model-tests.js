function testCreateNoteList() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.notes), 'created notelist');
};

testCreateNoteList();

function testStoreNote() {
  var noteList = new NoteList()
  noteList.store("Favourite drink: seltzer")
  console.log(noteList.notes)
  assert.isTrue(noteList.notes[0] === "Favourite drink: seltzer", 'stored note in list');
};

testStoreNote();
