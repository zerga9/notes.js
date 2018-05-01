function testViewNote() {
  var viewNoteList = new viewNoteList();
  assert.isTrue(viewNoteList.show === "T<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>", "can view notes");
};

testViewNote()
