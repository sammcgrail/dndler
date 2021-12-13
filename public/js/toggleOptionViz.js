let toggleOptionViz = (sendID, targetName="", targetID="") => {
    const sending = document.getElementById(sendID);
    // set as off or invisible for init
    let viz = "none";
    if(sending.type == "checkbox")
    {
        if(sending.checked)
        {
            viz = "block";
        }
    }

    if(targetName!=="")
    {
        const targets = document.getElementsByClassName(targetName);
        for(let i=0, n=targets.length; i<n; ++i){
            if(targets[i].id !== targetID) //when both ID and name are given, ID is excluded
            {
                targets[i].style.display = viz;

            }
        }
    }
    else if(targetID!=="") //if only ID is given, target only ID
    {
        document.getElementById(targetID).style.display = viz;
    }
    else
        return;
};