function testCreateNote() {
  var note = new Note("This is a test");
  assert.isTrue(note.text === "This is a test", 'created note');
};

testCreateNote();

function testReadNote() {
  var note = new Note("This is a test");
  assert.isTrue(note.read() === "This is a test", 'read note');
};

testReadNote();
