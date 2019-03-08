$(document).ready(function() {
  $('button#form-submit-button').on('click', function(){
    var email = $('input[name = custEmail]').val();
    var sum = $('div.is-active > div.sale__price > span').html();
    var course_type = $('div.is-active > div.sale__text').html().replace(/\&nbsp;/g, ' ');
    var homework = $('div.is-active').attr('id');

    var receipt = '{"customerContact": "' + email + '", "taxSystem": 1, "items":[{"quantity": 1, "price": {"amount": ' + sum + '.0},  "tax": 1, "text": "' + course_type + '"}]}';

    $('input[name = cps_email]').val(email);
    $('input[name = sum]').val(sum);
    $('input[name = ym_merchant_receipt]').val(receipt);
    $('input[name = orderDetails]').val($('input[name = orderDetails]').val() + ' ' + homework);

    fbq('track', 'Purchase', {value: sum, currency: 'RUB'});

  });
});
