$(document).ready(function () {
  updateAmounts()
});

// Amount on change, input event
$('#amount, #term').on('change input', e => updateAmounts());

function updateAmounts() {
  // update display values
  $('#amountDsiplay').html($('#amount').val())
  $('#termDsiplay').html($('#term').val())
  $('#monthlyInstallment').html(montlyInstalment().toFixed(2))

  console.log()
  // update installment value
}

function montlyInstalment() {
  let amount = $('#amount').val()
  let term = $('#term').val()

  const originationFee = 165.0
  let initiationFee = ((amount<=1000?amount*0.15:((amount>1000&&amount<10000)?originationFee+(amount-1000)*0.1:(amount>=10000?1050:0)))/amount>0.15?amount*0.15:(amount<=1000?amount*0.15:((amount>1000&&amount<10000)?originationFee+(amount-1000)*0.1:(amount>=10000?1050:0))))*1.15
  let capitalizedAmount = parseFloat(initiationFee) + parseFloat(amount)
  const serviceFee = 69.00
  let insurance = (parseFloat(amount) / 1000) * 4.5
  const interestRate = 0.020625
  
  return PMT(interestRate, term, -(capitalizedAmount)) + insurance + serviceFee
}



function PMT(rate, nper, pv, fv, type) {
  if (!fv) fv = 0;
  if (!type) type = 0;

  if (rate == 0) return -(pv + fv)/nper;
  
  var pvif = Math.pow(1 + rate, nper);
  var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

  if (type == 1) {
    pmt /= (1 + rate);
  };

  return pmt;
}
