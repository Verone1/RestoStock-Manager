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





    useEffect(() => {
        const retrieveData = async () => {
            try {
                const retrieveResponse = await fetch("my-api-endpoint/areaManager");
                const infoCapture = await retrieveResponse.json();
                assignAreaManagers(infoCapture);
            }
            catch (error) {
                console.error("Error while retrieving area managers", error);
            }
        };

        retrieveData();
    }, []);

    // can place all the use effect stuff into 1 single useEffect module 
    useEffect(() => {
        const retrieveData2 = async () => {
            try {
                const retrieveResponse2 = await fetch("my-api-endpoint/year");
                const infoCapture = await retrieveResponse2.json();
                assignYears(infoCapture);
            }
            catch (error) {
                console.error("Errow while retrieving year")
            }
        };

        retrieveData2();
    }, []);

    //

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

    const submitButtonFunc = () => {
        retrieveExpenditure();
    }


    return (
        // start div 
        <div className="expenditure-body">

            <div className="page-title">
                <div className="expenditure-title-text"> Expenditure Retrieval </div>
            </div>


            <div className="user-input-body">


                <div className="area-man-body">
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



                <div className="month-body">
                    <label className="month-label " htmlFor="monthDropdown"> Month: </label>

                    <div className="month-drop-down">
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


                </div>


                <div className="year-body">
                    <label className="year-label" htmlFor="year"> Year:</label>


                    <div className="year-drop-down">
                        <select className="year-select" id="year" value={chosenYear} onChange={(e) => assignChosenYear(e.target.value)}>
                            <option value=""> Year </option>
                            {years.map((year) => (
                                <option key={year.id} value={year.name}>
                                    {year.name}
                                </option>
                            ))}
                        </select>
                    </div>



                </div>


                <div className="button-body">
                    <button className="sub-button" onClick={submitButtonFunc}> Submit </button>
                    {expenditureInfo && (
                        <div>
                            <h2> Expenditure Data</h2>
                            <pre> {JSON.stringify(expenditureInfo, null, 2)}</pre>
                        </div>
                    )}
                </div>





            </div>

        </div> // end div




    );
};

export default ExpenditureModule; 
