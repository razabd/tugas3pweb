function calc()
{
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const statement = document.getElementById('statement').value;
    console.log(statement);

    if (statement == "plus")
    {
        const temp = Number(number1) + Number(number2);
        document.getElementById('result').innerHTML=temp;
    };

    if (statement == "minus")
    {
        const temp = Number(number1) - Number(number2);
        document.getElementById('result').innerHTML=temp;
    };

    if (statement == "kali")
    {
        const temp = Number(number1) * Number(number2);
        document.getElementById('result').innerHTML=temp;
    };

    if (statement == "bagi")
    {
        const temp = Number(number1) / Number(number2);
        document.getElementById('result').innerHTML=temp;
    };
}