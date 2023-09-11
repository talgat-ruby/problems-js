function getStudentsWithNamesAndTopNotes(input) {
  return input.map((item) => ({
    name: item.name,
    topNote: item.notes.length > 0 ? Math.max(...item.notes) : 0,
  }));
}

module.exports = getStudentsWithNamesAndTopNotes;
