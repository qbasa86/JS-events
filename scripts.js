var addElem = document.getElementById('addElem'),
    list = document.getElementById('list'),
    itemNumber = 1,
    liNumber = document.getElementsByTagName('li'),
    details = document.getElementById('details');

addElem.addEventListener('click', function() {
	list.innerHTML += "<li>item "+itemNumber+"</li>";
	itemNumber++;
});
details.addEventListener('click', function() {
	alert(liNumber.length);
});
