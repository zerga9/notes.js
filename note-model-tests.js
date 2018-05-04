function testNoteId() {

  var note1 = Note.create("blah");
  var note2 = Note.create("trah");
  var note3 = Note.create("boing");
  var notelist = new NoteList();
  notelist.store(note1);
  notelist.store(note2);
  notelist.store(note3);
  console.log(note1.id)
  console.log(note2.id)
  console.log(note3.id)
  assert.isTrue(note1.id == 0, "note 1 id passed ");
  assert.isTrue(note2.id == 1, "note 2 id passed ");
  assert.isTrue(note3.id == 2, "note 3 id passed ");
};
testNoteId();


function testCreateNote() {
  var note = Note.create("This is a test");
  console.log(note.text)
  assert.isTrue(note.text === "This is a test", 'created note');
};

testCreateNote();

function testReadNote() {
  var note = Note.create("This is a test");
  console.log(note);
  assert.isTrue(note.text === "This is a test", 'read note');
};

testReadNote();