import axios from "axios";
import React, { useState, useEffect} from "react"; 

const BudgetMod = () =>
{
    const [areaManagers, assignAreaManagers] = useState([]); 
    const [chosenManager, assignChosenManager] = useState(""); 

    const [years, assignYears] = useState([]); 
    const [chosenYear, assignChosenYear] = useState(""); 

    const [chosenMonth, assignChosenMonth] = useState(""); 

    const [budgetInfo, assignBudgetInfo] = useState(null); 



    const [monthsInYear, assignMonths] = useState(
    [
        "Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sept", "Oct", "Dec"
    ]);

    useEffect(() => 
    {
        const retrieveData = async () => 
        {
            try
            {
                const retrieveResponse  = await axios.get("my-api-endpoint/areaManager"); 
                assignAreaManagers(retrieveResponse.data); 
            }
            catch (error)
            {
                console.error("Error while retrieving area managers", error); 
            }
        };

        retrieveData(); 
    }, []); 

    // can place all the use effect stuff into 1 single useEffect module 
    useEffect(() =>
    {
        const retrieveData2 = async () =>
        {
            try 
            {
                const retrieveResponse2 = await axios.get("my-api-endpoint/year"); 
                assignYears(retrieveResponse2.data); 
            }
            catch (error)
            {
                console.error("Errow while retrieving year")
            }
        }; 

        retrieveData2(); 
    }, []); 

    const retrieveBudget = async () => 
    {
        try 
        {
            const retrieveResponse = await axios.get("my-api-endpoint/budget", 
            {
                params:
                {
                    areaManager : chosenManager, month : chosenMonth 
                }
            });
            assignBudgetInfo(retrieveResponse.data); 
        }
        catch (error)
        {
            console.error("Error ocurred while retrieveing budget")
        }
        
    };

    const submitButtonFunc = () => 
    {
        retrieveBudget(); 
    }


    return (
        // start div 
        <div> 

        <label htmlFor = "areaManager"> Area Manager: </label>

        <select id = "areaManager" value = {chosenManager} onChange = {(e) => assignChosenManager(e.target.value)}>

        <option value = " "> Chose Area Manager</option>
        {areaManagers.map((manager) => (
            <option key = {manager.id} value = {manager.name}>
                {manager.name}
            </option>
        ))}

        </select>


        <label htmlFor = "monthDropdown"> Month: </label>   

        <select id = "monthDropdown" value = {chosenMonth} onChange = {(e) => assignChosenMonth(e.target.value)}>
            <option value = ""> Month</option>
            {monthsInYear.map((month, index) => (
                <option key = {index} value = {month}>
                    {month}
                </option>
            ))}
            </select>     

            <label htmlFor = "year"> Year</label>

            <select id = "year" value = {chosenYear} onChange = {(e) => assignChosenYear(e.target.value)}>

            <option value = ""> Year </option>
            {years.map((year) => (
                <option key = {year.id} value = {year.name}>
                    {year.name}
                </option>
                ))}
                

            </select>
            

            <button onClick = {submitButtonFunc}> Submit </button>
                {budgetInfo && (
                    <div>
                        <h2> Budget Data</h2>
                        <pre> {JSON.stringify(budgetInfo, null, 2)}</pre>
                    </div>
                )}



        </div> // end div
        
        
    

    ); 
};

export default BudgetMod; 
