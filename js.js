$( document ).ready(function() {
  updateAmounts()
});

// Amount on change, input event
$('#amount, #term').on('change input', e => updateAmounts());

function updateAmounts(){
  // update slider values
  $('#amountDsiplay').html($('#amount').val())
  $('#termDsiplay').html($('#term').val())

  // calcualte monthly installment

  // update installment value
}



const rates = {
  1000: { initiation: 0, insurance: 4.5 },
  2000: { initiation: 0, insurance: 9.0 },
  3000: { initiation: 0, insurance: 13.5 },
  4000: { initiation: 0, insurance: 18.0 },
  5000: { initiation: 0, insurance: 22.5 },
  6000: { initiation: 0, insurance: 27.0 },
  7000: { initiation: 0, insurance: 31.5 },
  8000: { initiation: 0, insurance: 36.0 },
  9000: { initiation: 0, insurance: 40.5 },
  10000: { initiation: 0, insurance: 45.0 },
  11000: { initiation: 0, insurance: 49.5 },
  12000: { initiation: 0, insurance: 54.0 },
  13000: { initiation: 0, insurance: 58.5 },
  14000: { initiation: 0, insurance: 36.1 },
  15000: { initiation: 0, insurance: 67.5 },
  16000: { initiation: 0, insurance: 72.0 },
  17000: { initiation: 0, insurance: 76.5 },
  18000: { initiation: 0, insurance: 81.0 },
  19000: { initiation: 0, insurance: 85.5 },
  20000: { initiation: 0, insurance: 90.0 },
  21000: { initiation: 0, insurance: 94.5 },
  22000: { initiation: 0, insurance: 99.0 },
  23000: { initiation: 0, insurance: 103.5 },
  24000: { initiation: 0, insurance: 108.0 },
  25000: { initiation: 0, insurance: 112.5 },
  26000: { initiation: 0, insurance: 117.0 },
  27000: { initiation: 0, insurance: 121.5 },
  28000: { initiation: 0, insurance: 126.0 },
  29000: { initiation: 0, insurance: 130.5 },
  30000: { initiation: 0, insurance: 135.0 },
}