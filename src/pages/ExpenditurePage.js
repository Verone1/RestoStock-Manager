import React, { useState, useEffect } from "react";
import "../index.css";

const ExpenditureModule = () => {
    useEffect(() => {
        document.title = 'Expenditure Tracker | RestoStock Manager';
    })

    const [areaManagers, assignAreaManagers] = useState([]);
    const [chosenManager, assignChosenManager] = useState("");

    const [years, assignYears] = useState([]);
    const [chosenYear, assignChosenYear] = useState("");

    const [chosenMonth, assignChosenMonth] = useState("");

    const [expenditureInfo, assignExpenditureInfo] = useState(null);




    // automatically called 
    // useEffect - manages side effect for API - data retrievels with empty depency passed to it ('[]')
    useEffect(() => {
        // retrieves area manager from API endpoint to insert into drops down 
        const retrieveData = async () => {
            try {
                /* fetch and assign to variable retrieveResponse from API - are manager list */
                const retrieveResponse = await fetch("my-api-endpoint/areaManager");
                // parse the retrieved fetch from aboev as a ajson and assign it to the variable inforcapture
                const infoCapture = await retrieveResponse.json();
                // pasrse infoCapture to the function assignAreaManager 
                assignAreaManagers(infoCapture);
            }
            // catch error 
            catch (error) {
                // if something goes wrong while featching, log errror message to the colse 
                console.error("Error while retrieving area managers", error);
            }
        };
        // calls the retrieveData function 
        retrieveData();
    }, []);



    // automatically called 
    // useEffect - manages side effect for API - data retrievels with empty depency passed to it ('[]')
    useEffect(() => {
        // retrieve years from API endpoint to insert into drop down 
        const retrieveData2 = async () => {
            try {
                /* fetch and assign to variable retrieveResponse2 from API - years list */
                const retrieveResponse2 = await fetch("my-api-endpoint/year");
                // parse the retrieved fetch from aboev as a ajson and assign it to the variable inforcapture
                const infoCapture = await retrieveResponse2.json();
                assignYears(infoCapture);
            }
            // catch error 
            catch (error) {
                // if something goes wrong while featching, log errror message to the colse 
                console.error("Errow while retrieving year")
            }
        };

        // calls the retrieveData2 function 
        retrieveData2();
    }, []);



    const retrieveExpenditure = async () => {
        try {
            const retrieveResponse = await fetch("my-api-endpoint/expenditure?areaManager=${chosenManager}&month=${chosenMonth"
            );

            const infoCapture = await retrieveResponse.json();
            assignExpenditureInfo(infoCapture);
        }
        catch (error) {
            console.error("Error ocurred while retrieveing expenditure")
        }

    };

    // function that calls the function retrieveExpenditure
    // tied to a button click below 
    const submitButtonFunc = () => {
        retrieveExpenditure();
    }


    return (
        // start div 
        <div className="page-container">
            <div classname="title-container">
                <h1 className="page-title">Expenditure Retrieval</h1>
                <p className="page-description">add text here</p>
            </div>
            <form>
                <div>
                    <label className="area-man-label" htmlFor="areaManager"> Area Manager: </label>
                    <select className="area-man-select" id="areaManager" value={chosenManager} onChange={(e) => assignChosenManager(e.target.value)}>
                        <option value=" "> Area Manager</option>
                        {areaManagers.map((manager) => (
                            <option key={manager.id} value={manager.name}>
                                {manager.name}
                            </option>
                        ))}
                    </select>
                </div>


                <div>
                    <label className="month-label " htmlFor="monthDropdown"> Month: </label>
                    <select className="month-select" id="monthDropdown" value={chosenMonth} onChange={(e) => assignChosenMonth(e.target.value)}>
                        <option value=""> Month</option>
                        {[
                            "Jan", "Feb", "March", "April", "May", "June",
                            "July", "Aug", "Sept", "Oct", "Dec"
                        ].map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="year-label" htmlFor="year"> Year:</label>
                    <select className="year-select" id="year" value={chosenYear} onChange={(e) => assignChosenYear(e.target.value)}>
                        <option value=""> Year </option>
                        {years.map((year) => (
                            <option key={year.id} value={year.name}>
                                {year.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>


            <div>
                <button id="save-button" onClick={submitButtonFunc}> Submit </button>
                {expenditureInfo && (
                    <div>
                        <h2> Expenditure Data</h2>
                        <pre> {JSON.stringify(expenditureInfo, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpenditureModule; 
