/**
 * Created by Arthur on 23-1-2017.
 */
function admSelectCheck(nameSelect)
{
    console.log(nameSelect);
    if(nameSelect){
        admOptionValue = document.getElementById("admOption").value;
        if(admOptionValue == nameSelect.value){
            document.getElementById("admDivCheck").style.display = "block";
        }
        else{
            document.getElementById("tweeteams").style.display = "block";
        }
        else{
            document.getElementById("drieteams").style.display = "block";
        }
        else{
            document.getElementById("vierteams").style.display = "block";
        }
        else{
            document.getElementById("vijfteams").style.display = "block";
        }
    }
    else{
        document.getElementById("admDivCheck").style.display = "none";
    }
}