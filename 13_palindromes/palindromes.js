const palindromes = function (string) {
    return isPalindrome(string, 0, string.length - 1)
};

function isPalindrome(string, leftCharIndex, rightCharIndex)
{
    if (leftCharIndex == rightCharIndex || rightCharIndex - leftCharIndex == 1)
    {
        return true
    }
    else
    {
        let notALetterOrNumRegex = "[^a-zA-Z0123456789]"
        if (string[leftCharIndex].match(notALetterOrNumRegex))
        {
            return isPalindrome(string, leftCharIndex + 1, rightCharIndex)
        }
        else if (string[rightCharIndex].match(notALetterOrNumRegex))
        {
            return isPalindrome(string, leftCharIndex, rightCharIndex - 1)
        }
        else if (string[leftCharIndex].toLowerCase() == string[rightCharIndex].toLowerCase())
        {
            return isPalindrome(string, leftCharIndex + 1, rightCharIndex - 1)
        }
        else { return false }
    }
}

// Do not edit below this line
module.exports = palindromes;
