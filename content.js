var names = [
    ["Ovid", "Egg-Shaped"]
];

var elements = document.getElementsByTagName('*');

var regexes = [];
for (var i = 0; i < names.length; i++) {
    regexes[i] = new RegExp("\\b" + names[i][0] + "\\b");
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
	    var newText = text;
	    for (var k = 0; k < names.length; k++){
		var regex = regexes[k]
		newText = newText.replace(regex, names[k][1]);
	    }

            if (newText !== text) {
                element.replaceChild(document.createTextNode(newText), node);
            }
        }
    }
}