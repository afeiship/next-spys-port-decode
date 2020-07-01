/*!
 * name: @feizheng/next-spys-port-decode
 * description: Spys port decode.
 * homepage: https://github.com/afeiship/next-spys-port-decode
 * version: 1.0.0
 * date: 2020-07-01T11:49:55.841Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var CODE_MAP = {
    Eight: 8,
    EightThreeZeroFour: 6661,
    Five: 6,
    Five0Three: 6668,
    Five1Zero: 1975,
    Five5TwoEight: 7029,
    Four: 2,
    FourNineNine: 5714,
    FourThreeThreeSix: 11320,
    FourTwoOneFive: 356,
    Nine: 5,
    Nine4SixZero: 2021,
    Nine5SevenSeven: 1971,
    One: 4,
    One2FiveNine: 8177,
    OneSixEightTwo: 11578,
    Seven: 7,
    SevenZeroEight: 7603,
    Six: 0,
    Three: 1,
    Three1Four: 11570,
    ThreeEightNineThree: 5713,
    ThreeEightOne: 353,
    Two: 9,
    TwoNineSeven: 7026,
    Zero: 3,
    Zero5Two: 2019,
    ZeroNineFive: 11322,
    ZeroNineFourOne: 7603,
    ZeroSevenSix: 8176,
  };

  nx.spysPortDecode = function (inString) {
    if (!inString) return inString;
    var result = '';
    with(CODE_MAP){
      result += eval('":" + ' + inString);
    }
    return result.slice(1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.spysPortDecode;
  }
})();

//# sourceMappingURL=next-spys-port-decode.js.map
