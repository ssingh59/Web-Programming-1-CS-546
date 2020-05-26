(function()
{
    var errorDiv = document.getElementById("errorDiv");
    var errorTextElement = errorDiv.getElementsByClassName("text-goes-here")[0];
    var static=document.getElementById('myForm');
    var	list=document.getElementById('list');

    let palindrome =  { isPalindrome: function(inputString){
                           // iinputString !== null) {
                            
                                let cleanString = inputString.replace(/[\W_]/g, "").toLowerCase();
                                let palindromeString = cleanString.split('').reverse().join('');

                                if(palindromeString == '')
                                {
                                    return false;
                                }
                                else if(palindromeString !== cleanString) {
                                    return false;
                                }

                                if(palindromeString === cleanString) {
                                    return true;
                                }
                        }
                    };
                
    static.addEventListener('submit', function(event)
    {
        event.preventDefault();
       
            errorDiv.classList.add("hidden");
            //resultContainer.classList.add("hidden");
            var isPalindrome=palindrome['isPalindrome'];
            var text = document.getElementById("palindrome").value;

            if(text.trim().length === 0)
            {
                document.getElementById("errorDiv").style.display = "block";
                throw "Please Type Valid input String";
            }
            else document.getElementById("errorDiv").style.display = "none";
            var li = document.createElement("li");
            var result = isPalindrome(text);
            if(result)
            {
                li.classList.add('is-palindrome');
            }
            else
            {
                li.classList.add('not-palindrome')
            }
            li.appendChild(document.createTextNode(text));
            list.appendChild(li);
    });
})();