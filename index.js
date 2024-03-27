// code your solution here
// Defines a function to search for a Super Bowl win
superbowlWin = (record) => {
  // Use the find method to search the record array for an object where the result is "W" (win)
  const result = record.find(record => record.result === "W");

  // Checks if a winning record was found and return the year of the win. If no win is found, return undefined
  return !!result ? result.year : undefined;
}