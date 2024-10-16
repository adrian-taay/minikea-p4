export function randomProductIdArray(noOfItems: number = 6): number[] {
  const result: number[] = [];
  const usedNumbers = new Set<number>(); // Set to track used numbers

  while (result.length < noOfItems) {
    const randomNumber = Math.floor(Math.random() * 194) + 1;

    if (!usedNumbers.has(randomNumber)) {
      result.push(randomNumber);
      usedNumbers.add(randomNumber); // Add to the set of used numbers
    }
  }

  return result;
}
