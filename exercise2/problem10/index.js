function getStudentsWithNamesAndTopNotes(input) {
  return input.map((item) => ({
    name: item.name,
    topNote: item.notes.length > 0 ? Math.max(...item.notes) : 0,
  }));
}
console.log(
	getStudentsWithNamesAndTopNotes([
		{name: "John", notes: [3, 5, 4]},
		{name: "Max", notes: [1, 4, 6]},
		{name: "Zygmund", notes: [1, 2, 3]},
	])
)
// [
//   ({ name: "John", topNote: 5 },
//   { name: "Max", topNote: 6 },
//   { name: "Zygmund", topNote: 3 })
// ];

module.exports = getStudentsWithNamesAndTopNotes;
