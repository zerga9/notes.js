function testSingleNoteView() {
  var singleNoteView = new SingleNoteView(note = new Note('Favourite drink: seltzer'));
  assert.isTrue(singleNoteView.display() === "<div>Favourite drink: seltzer</div>", "single note view works ")
};
testSingleNoteView();
