module.exports = function toReadable (number) {
  if (number === 0) return 'zero';

  const words = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  const [unit, ten, hundred] = Array.from(String(number)).reverse();

  const hasNthteen = (Number(`${ten}${unit}`) >= 10 && Number(`${ten}${unit}`) <= 20);
  const unitPart = hasNthteen ? '' : words[unit];
  const tenPart = hasNthteen ? words[`${ten}${unit}`] : words[ten * 10];
  const hundredPart = hundred ? `${words[hundred]} hundred` : '';

  return [hundredPart, tenPart, unitPart].filter((char) => char !== '').join(' ').trim();
}
