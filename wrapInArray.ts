function wrapInArray<T>(item: T): T[] {
    return [item];
  }
  
  // Contoh penggunaan
  console.log(wrapInArray(3))  // Output: [3]
  console.log(wrapInArray("aurora"))   // Output: ["aurora"]