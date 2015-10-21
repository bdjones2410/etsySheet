console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

//answer one:
var priceArray = _.pluck(items, 'price');

var total = 0
_.each(priceArray, function(item) {total += item; return total;});

var avgPrice = Math.round(total / priceArray.length);

$('#answer1').text("average price: " + avgPrice);

//answer two:
var priceCheck =_.filter(items, function(item) {
  if(item.price > 14 && item.price < 18){
return item };
})
var itemsPriced = _.pluck(priceCheck, 'title')
$('#answer2').text(itemsPriced);

//answer three:

var gbP = _.filter(items, function(item){
  return item.currency_code === "GBP";
});

var priceNtitle = _.chain(gbP)
.map(function(item){
    return{name: item.title, price: item.price};
})
.value();

$('#answer3').text("name: " + priceNtitle[0].name +"   price: " + priceNtitle[0].price);

// answer four:


var wooden =_.filter(items, function(item){
  return _.contains(item.materials, 'wood');
});
var woodName = _.pluck(wooden, 'title');

$('#answer4').text(woodName);




//answer five
var eightOrMore = _.filter(items, function(item){ if(item.materials.length > 8) return item;});
var neatEight = _.map(eightOrMore, function(item){
    return item.title +"<br>"+ item.materials.length +"<br>"+ item.materials;
});
$('#answer5').html(neatEight);

//answer six

var whomade = _.filter(items, function(item){
  return (item.who_made === 'i_did' || item.who_made === 'collective');
});
$('#answer6').text("number of items made by seller: " + whomade.length);
