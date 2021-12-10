let toggleOptionViz = (sendName, targetName) => {
    const options = document.getElementsByName(sendName);
    // set as off or invisible for init
    let viz = "none";
    for(let i=0; i<options.length; ++i)
    {
        // one of the controlling options has been toggled on
        if(options[i].checked)
        {
            viz = "block";
            break;
        }
    }
    document.getElementById(targetName).style.display = viz;
};