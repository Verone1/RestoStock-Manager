/* THINGS TO DO 
-- Add the images 
-- Sort out the API end point 
-- sort out branch ID functoin which may need to be done somewhere else 
 */






// import "useState" and "useEffect " from react linrary 
import React, {useState, useEffect} from "react";  



// function for entire class 
const InventoryPage = () =>
{
    // invenInfo variable whcih has assigned for now state value whcih in this case is an empty array - intialised with 
    const [invenInfo, setInvenData] = useState([]); 

    // purpose is to manage side effect to do with the API in terms of information retrieval
    // automatically calllled - the function inside it dataRetrievalFromAPI executes
    // done through use of ('[]'), this is 2nd arg to useeffect and its passed, empty dependency 
    useEffect(() => 
    {
        const dataRetrievalFromAPI = async () =>
        {
        // try this first 
            try
            {
            // DO THIS OR FIND OUT IF DONE
            //const storeID = getUserStoreID(); // need to make this function if not already made 

            // fetch (retrieve) information from API that you have specified and assign to "response"
            const response = await fetch ("api-endpoint/inventory/${storeID}");  
            // pasrse the reponse from fetch above as a json and assign it to information 
            const information = await response.json(); 
            // assigne data of "information" to "setInvenData" using function setInvenData
            setInvenData(information);
             }
            // execute if there is error
            catch(error)
             {
            // something goes wrong fetching data from API, log error in form of message to console
            console.error("Error occurred retrieving info", error);
            }

            }; 

        // calls the dataRetrievalFormAPI function 
        dataRetrievalFromAPI(); 
    }, []); 



    
    


    /*
    useEffect(() => 
    {
        myDummyData(); 
    }, []); 

    const myDummyData = () => 
    {
        const dummyData =
        [
            {id: 1, productName: "Cash Register", itemsLeft: 50, pricePoint: "£" + 30}, 
            {id: 2, productName: "Card Machine", itemsLeft: 100, pricePoint: "£" + 100}, 
            {id: 3, productName: "Scales", itemsLeft: 20, pricePoint: "£" + 20},
            {id: 4, productName: "Contactless Reader", itemsLeft: 35, pricePoint: "£" + 40},
        ]; 
        setInvenData(dummyData); 
    }; */ 



    /*Function to create the table headers */
    const createAllTableHeaders = () => 
    {
        // checks if invenInfo has data assigned to it but checking if its greater then 0 
        if (invenInfo.length > 0)
        {
            // variable headers is assigned an array with column names 
            const headers = ["ID", "Product Name", "Items Left", "Price Point"]; 
            // iterate through array using map. Generates table header for every element
            // the table headers are then returned 
            return headers.map((header) => <th key = {header}>{header}</th>);
        }
        // return null in the event invenInfo.length < 0 
        return null; 
    };
     

  /*Function to create the table rows */
const createAllTableRows = () =>
{
    //  useing  map, itarate across invenInfo array which contains inventory list
    // returns all the data 
    return invenInfo.map((item) => 
    (
        // for every 'item' found in array (invenInfo) - makes react element for the purpose of representing row for table
        // key assigned to id, ensure unique identifier  - good rendering of the relevant elements
        // <td> = table data, there are 4, each have respective inside "item" for every row
        // values of of id, productName, itemsLeft, pricepOINT  then render into every realted cell with the table
        <tr key = {item.id}> 
        <td>{item.id}</td> 
        <td>{item.productName}</td>
        <td>{item.itemsLeft}</td>
        <td>{item.pricePoint}</td>
        </tr>
    ));
}




    // renders the inventory page 
    return (
        // to style the page has whole using <div> 
        <div className = "full-container">
            <div className = "title-container">
                {/* label to display the name of page, title-body unique identifer for styling*/}
                <label className = "title-body"> Inventory Page</label> 
            </div>

            {/* div to contain and style the part that contians the table for the inventory items*/}
            <div className = "inventory-info-container">
                {/* checks to see if invenInfo actually has data assigned to it and if true renders table*/}
                {invenInfo.length > 0 && (
                    // renders table povided condition is true 
                    <table> 
                        {/* representation for the table headers */}
                        <thead>
                            {/*generates the row for the table that has within it the headers by executing fuction createAllTableHeaders*/}
                            <tr>{createAllTableHeaders()}</tr>
                        </thead>
                        
                            {/* executes function, tables rows generated with data places in respective cells taken from array "ivenInfor" */}
                            {createAllTableRows()}
                       
                    </table>
                )}
            </div>
        </div>
    ); 



    


};

// this exports iventory page, this gives us the ability to import it into other classes/pages
export default InventoryPage; 
