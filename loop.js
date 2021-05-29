//while loop
var num=10
while(num<=15)
{
    console.log(num)
    num++
}
//for loop
for(var i=0;i<10;i++)
{
    console.log(i);
}
var teaLine=['zitu','fahim','tasmin','moon']
for(var i=0;i<teaLine.length;i++)
{
    console.log(teaLine[i])
}

//switch statement
var expr="watermelon"
switch(expr)
{
    case 'mango':
        console.log('i am not orange')
        break;
        case 'papaya':
            console.log("i am not orange")
            break;
            case "watermelon":
                console.log("hey can't you see i am not orange")
                break;
                case "apple":
                    console.log("may be i know who is orange")
                    break;
                    case "orange":
                        console.log("hey i am there")
                        break;
                        default:
                            console.log('dont you remeber me?!')
                            break;

}

//function
function sayIdontknow()
{
    console.log("I have no clue")
    console.log("i have no idea")
    console.log("who knows?")
}
sayIdontknow();
var num=5;
sayIdontknow();