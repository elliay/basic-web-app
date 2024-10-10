export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "elliay"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Ellia"
    );
  }
  // if (query.toLowerCase().includes("Which of the following numbers is the largest: ")) {
  //   query = query.split(":")[1];
  //   let numbers = query.split(" ");
  //   let nums = [];
  //   for (let number in numbers){
  //     if (number[-1] === ','){
  //       number = number.split(",")[0];
  //       nums.push(Number.parseInt(number))
  //     }
  //   }
  //   Math.max(nums)
  //   return (
  //     "Ellia"
  //   );
  // }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
}
