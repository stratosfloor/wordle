
const data = [
  "film",
  "robust",
  "dirt",
  "rabbit",
  "well-made",
  "grease",
  "ruin",
  "push",
  "dirty",
  "crate",
  "bless",
  "mixed",
  "town",
  "prefer",
  "snotty",
  "depend",
  "nosy",
  "pizzas",
  "dizzy",
  "awesome",
  "crowded",
  "basin",
  "ultra",
  "smart",
  "anger",
  "sand",
  "object",
  "yard",
  "nimble",
  "complex",
  "station",
  "bore",
  "vast",
  "breezy",
  "incandescent", 
  "exist",
  "obtain",
  "coil",
  "step",
  "string",
  "profuse",
  "quilt",
  "husky",
  "scene",
  "instinctive",
  "wren",
  "tree",
  "bottle",
  "scatter",
  "brush",
  "suit",
  "sink",
  "sneeze",
  "overwrought",
  "stroke",
  "appliance",
  "extend",
  "library",
  "distribution", 
  "claim",
  "unsuitable",
  "boot",
  "cagey",
  "frightening",
  "answer",
  "excite",
  "grin",
  "gather",
  "shrill",
  "flagrant",
  "optimal",
  "scarecrow",
  "laughable",
  "unable",
  "uneven",
  "seal",
  "save",
  "cuddly",
  "intend",
  "heat",
  "economic",
  "rainstorm",
  "ground",
  "zipper",
  "alarm",
  "amazing",
  "gaping",
  "lame",
  "peaceful",
  "telling",
  "fowl",
  "sigh",
  "pine",
  "flashy",
  "sparkle",
  "curly",
  "veil",
  "cross",
  "coach",
  "development",
]

export function getWord(list, numberOfLetters, uniqueLetters = false) {
  let payload = [];
  if (!uniqueLetters) {
    payload = list.filter((word) => word.length == numberOfLetters);
  } else {
    payload = list
      .filter((word) => word.length == numberOfLetters)
      .filter((word) => numberOfLetters == new Set(word).size);
  }
  if (payload.length > 0) {
    return payload[Math.floor(Math.random() * payload.length)];
  } else {
    console.log("No word found");
    return null;
  }
}



const word = getWord(data, 10);
console.log(word);

