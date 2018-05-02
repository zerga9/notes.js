function testGetHTML() {
  var notecontroller = new NoteController()
  notecontroller.getHTML();

    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>", "notecontroller tested ")
  };
   testGetHTML();
