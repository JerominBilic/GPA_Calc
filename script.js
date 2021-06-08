
function calculateGPA(grades)
{
    //calculate total sum of the grades
    let sum= 0;
    for(let i = 0; i< grades.length; i++)
    {
        let grvalue = 0;
    
        //convert letter to number

        if(grades[i]=="A")
        {grvalue=100;
        }else if(grades[i]=="B"){
            grvalue = 80;
        }else if(grades[i]=="C"){
            grvalue = 70;
        }
        

        sum = sum +grvalue;
    }
    //calculate GPA
    let gpa = sum / grades.length;

    //convert letter to number
    let finalgpa = '';
    
    if(gpa >=70 && gpa <=79)
    {
        finalgpa = 'C';
    }else if(gpa >=80 && gpa <=99){
        finalgpa = 'B';
    }else if(gpa == 100){
        finalgpa = 'A';
    }

    return finalgpa;
        }
    
let lettergrade = ["A", "A", "A"];
let result = calculateGPA(lettergrade);
document.write("Your GPA is " + result);
