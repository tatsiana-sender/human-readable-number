module.exports = function toReadable (number) {
  var num = number.toString().match(/.{1}/g);
  var word = num.map(function(item) {
    switch (item) {
      case '1':
        return ( 'one' );
        break;
      case '2':
        return ( 'two' );
        break;
      case '3':
        return ( 'three' );
        break;
      case '4':
        return ( 'four' );
        break;
      case '5':
        return ( 'five' );
        break;
      case '6':
        return ( 'six' );
        break;
      case '7':
        return ( 'seven' );
        break;
      case '8':
        return ( 'eight' );
        break;
      case '9':
        return ( 'nine' );
        break;
      case '0':
        return ( 'zero' );
        break;
    }
  });

  var decade = num.map(function(item) {
    switch (item) {
      case '1':
        return ( 'one' );
        break;
      case '2':
        return ( 'twenty' );
        break;
      case '3':
        return ( 'thirty' );
        break;
      case '4':
        return ( 'forty' );
        break;
      case '5':
        return ( 'fifty' );
        break;
      case '6':
        return ( 'sixty' );
        break;
      case '7':
        return ( 'seventy' );
        break;
      case '8':
        return ( 'eighty' );
        break;
      case '9':
        return ( 'ninety' );
        break;
      case '0':
        return ( 'zero' );
        break;
    }
  });

  var tens = num.map(function(item) {
    switch (item) {
      case '1':
        return ( 'eleven' );
        break;
      case '2':
        return ( 'twelve' );
        break;
      case '3':
        return ( 'thirteen' );
        break;
      case '4':
        return ( 'fourteen' );
        break;
      case '5':
        return ( 'fifteen' );
        break;
      case '6':
        return ( 'sixteen' );
        break;
      case '7':
        return ( 'seventeen' );
        break;
      case '8':
        return ( 'eighteen' );
        break;
      case '9':
        return ( 'nineteen' );
        break;
      case '0':
        return ( 'ten' );
        break;
    }
  });

  if ( word.length == 3 && word[1] != 'one'  && word[1] != 'zero'  && word[2] != 'zero' ) {
    return( word[0] + ' hundred' + ' '  + decade[1] + ' ' + word[2]);
  } else if ( word.length == 3 && word[1] == 'one') {
    return( word[0] + ' hundred' + ' '  + tens[2]);
  } else if ( word.length == 3 && word[1] == 'zero' && word[2] == 'zero') {
    return( word[0] + ' hundred');
  } else if ( word.length == 3 && word[1] != 'one' && word[1] != 'zero' && word[2] == 'zero') {
    return( word[0] + ' hundred' + ' '  + decade[1]);
  } else if ( word.length == 3 && word[1] == 'zero') {
    return( word[0] + ' hundred' + ' '  + word[2]);
  } else if ( word.length == 2 && word[0] != 'one' && word[1] != 'zero'  ) {
    return( decade[0] + ' ' + word[1]);
  } else if ( word.length == 2 && word[0] == 'one') {
    return( tens[1]);
  } else if ( word.length == 2 ) {
    return( decade[0]);
  } else {
    return( word[0]);
  }
}
