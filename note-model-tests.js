function testCreateNote() {
  var note = new Note("This is a test");
  assert.isTrue(note.text === "This is a test");
};

testCreateNote();

function testReadNote() {
  var note = new Note("This is a test");
  assert.isTrue(note.read() === "This is a test");
};

testReadNote();
