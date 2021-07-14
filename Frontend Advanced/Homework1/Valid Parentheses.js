// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//_______________________________________________________________________________________________________________

var s = '{[([])]}{()[([()])[](){}]}',
    arr;

var isValid = function(arr) {
    if (s.length % 2 !== 0) return false;
    
    arr = s.split('');
    var i;

    for (i = 0; i < arr.length; i += 1) {
        switch (arr[i]) {
            case '}':
                if (arr[i - 1] === '{') {
                    arr.splice(i - 1, 2);
                    i -= 2;
                } else if (arr[i - 1] !== '{') {
                    return false;
                }
                break;
            case ']':
                if (arr[i - 1] === '[') {
                    arr.splice(i - 1, 2);
                    i -= 2;
                } else if (arr[i - 1] !== '[') {
                    return false;
                }
                break;
            case ')':
                if (arr[i - 1] === '(') {
                    arr.splice(i - 1, 2);
                    i -= 2;
                } else if (arr[i - 1] !== '(') {
                    return false;
                }
                break;
            default:
                break;
        }
    }

    if (arr.length === 0) {
    return true;
    } return false;
};

console.log('Valid Parentheses');
console.log(isValid(arr));

