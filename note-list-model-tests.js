function testCreateNoteList() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.notes), 'created notelist');
};

testCreateNoteList();

function testStoreNote() {
  var noteList = new NoteList()
  var note = Note.create("Favourite drink: seltzer")
  noteList.store(note)
  console.log(noteList.notes)
  assert.isTrue(note.text === "Favourite drink: seltzer", 'stored note in list');
};

testStoreNote();