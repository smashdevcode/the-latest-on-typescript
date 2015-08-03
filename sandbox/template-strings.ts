
namespace Sandbox.TemplateStrings {
    // Multiline text
    /*var templateStringMultiline = `This is the first line.
    And here's the second line.`;*/

    // With expressions
    /*var value1 = 1;
    var value2 = 'hello';
    var templateWithExpressions = `Value 1 is: ${value1}; Value 2 is: ${value2}`;*/

    // With tag
    /*var say = 'a bird in hand > two in the bush';
    var html = htmlEscape `<div> I would just like to say : ${say}</div>`;
    function htmlEscape(literals, ...placeholders) {
        let result = '';

        // interleave the literals with the placeholders
        for (let i = 0; i < placeholders.length; i++) {
            result += literals[i];
            result += placeholders[i]
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        // add the last literal
        result += literals[literals.length - 1];
        return result;
    }*/
}
