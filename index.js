function scuberGreetingForFeet(rideLengthInt){
  if (rideLengthInt <= 400) {
    return 'This one is on me!';
  } else if (rideLengthInt > 400 && rideLengthInt <= 2000) {
    return 'That will be twenty bucks.'
  } else if (rideLengthInt > 2000 && rideLengthInt <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  return 'No can do.'
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipString){
  switch (tipString) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return "Bye."
  }
}