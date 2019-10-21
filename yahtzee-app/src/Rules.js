/** Rule for Yahtzee scoring.
 *
 * This is an "abstract class"; the real rules are subclasses of these.
 * This stores all parameters passed into it as properties on the instance
 * (to simplify child classes so they don't need constructors of their own).
 *
 * It contains useful functions for summing, counting values, and counting
 * frequencies of dice. These are used by subclassed rules.
 */

class Rule {
  constructor(params) {
    // put all properties in params on instance
    Object.assign(this, params);
  }

  sum(dice) {
    // sum of all dice
    return dice.reduce((prev, curr) => prev + curr);
  }

  freq(dice) {
    // frequencies of dice values
    const freqs = new Map();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1); //important: if its there increase otherwise just add 1
    return Array.from(freqs.values());
    // Map in JavaScript. ... Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key,value pair in the same order as inserted.
  }

  count(dice, val) {
    // # times val appears in dice
    return dice.filter(d => d === val).length;
  }
}

/** Given a sought-for val, return sum of dice of that val.
 *
 * Used for rules like "sum of all ones"
 */

class TotalOneNumber extends Rule {
  evalRoll = dice => {
    return this.val * this.count(dice, this.val);
  };
}

/** Given a required # of same dice, return sum of all dice.
 *
 * Used for rules like "sum of all dice when there is a 3-of-kind"
 */

class SumDistro extends Rule {
  evalRoll = dice => {
    // do any of the counts meet of exceed this distro?
    //count is passed in when instantiate
    return this.freq(dice).some(c => c >= this.count) ? this.sum(dice) : 0;
  };
  //take freq (how many times something occur) then use the some method to know that if that array actually contain something like (4 of kind or 3 of kind ) then return true and the call the sum function on that dice

  //The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
}

/** Check if full house (3-of-kind and 2-of-kind) */

class FullHouse extends Rule {
  evalRoll = dice => {
    const frequency = this.freq(dice);
    return frequency.includes(2) && frequency.includes(3) ? this.score : 0;
  };
}

/** Check for small straights. */

class SmallStraight extends Rule {
  evalRoll = dice => {
    var d = new Set(dice);
    //2345 1234
    if (d.has(2) && d.has(3) && d.has(4) && (d.has(5) || d.has(1)))
      return this.score;
    //3456 , 2345
    if (d.has(3) && d.has(4) && d.has(5) && (d.has(6) || d.has(2)))
      return this.score;

    return 0;
  };
}

/** Check for large straights. */

class LargeStraight extends Rule {
  evalRoll = dice => {
    const d = new Set(dice);
    //set allows only unique item
    // large straight must be 5 different dice & only one can be a '1' or a '6'
    //12345 or 23456
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}

/** Check if all dice are same. */

class Yahtzee extends Rule {
  evalRoll = dice => {
    // all dice must be the same
    //this.freq returns array with freq and it only has 1 item if all are same
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

// ones, twos, etc score as sum of that value
const ones = new TotalOneNumber({ val: 1 });
const twos = new TotalOneNumber({ val: 2 });
const threes = new TotalOneNumber({ val: 3 });
const fours = new TotalOneNumber({ val: 4 });
const fives = new TotalOneNumber({ val: 5 });
const sixes = new TotalOneNumber({ val: 6 });

// three/four of kind score as sum of all dice
const threeOfKind = new SumDistro({ count: 3 });
const fourOfKind = new SumDistro({ count: 4 });

// full house scores as flat 25
const fullHouse = new FullHouse({ score: 25 });

// small/large straights score as 30/40
const smallStraight = new SmallStraight({ score: 30 });
const largeStraight = new LargeStraight({ score: 40 });

// yahtzee scores as 50
const yahtzee = new Yahtzee({ score: 50 });

// for chance, can view as sum of all dice, requiring at least 0 of a kind
const chance = new SumDistro({ count: 0 });

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
};
