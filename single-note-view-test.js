function testSingleNoteView() {
  var singleNoteView = new SingleNoteView(note = Note.create('Favourite drink: seltzer'));
  assert.isTrue(singleNoteView.display() === "<div>Favourite drink: seltzer</div>", "single note view works ")
};
testSingleNoteView();