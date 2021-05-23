//Defining variables at the starting of the file, so that we will not encounter the Temporal DeadZone
var url = 'https://api.spacexdata.com/v3/launches?limit=100';
var Parameter_Key;
var index;
//Fetching The id of the div, with the id="main-content"
const main_container = document.getElementById('main-content');

//Defining The Functions for Collecting the Buttons Data as the onclick event is fired than different functions will get executed.
fetchData(url);
function myfunction(d)
{
    Parameter_Key = 'year_data';
    if(getParameter(Parameter_Key) == d)
    {
        clearParameter(Parameter_Key);
        console.log('Parameter Cleared');
    }
    else
    {
        setParameter(Parameter_Key, d);
        console.log('Parameter Set');
    }
    var urlz;
    urlz = getURL();
    console.log(urlz);
    fetchData(urlz);
}
function myfunctionx(Parameter_Key,d)
{
    console.log(Parameter_Key, d);
    if(getParameter(Parameter_Key) && d == 'false')
    {
        clearParameter(Parameter_Key);
        console.log('Parameter is Removed in case of false');
    }
    else
    {
        setParameter(Parameter_Key, d);
        console.log('Parameter is Added in case of true');
    }
    var urlz;
    urlz = getURL();
    console.log(urlz);
    fetchData(urlz);
}

function getURL()
{

    if(localStorage.getItem('year_data') && localStorage.getItem('land_success') && localStorage.getItem('launch_success'))
    {
        
        console.log('I am Condition3');
        url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success='+localStorage.getItem('launch_success')+'&amp;land_success='+localStorage.getItem('land_success')+'&amp;launch_year='+localStorage.getItem('year_data');
        console.log(url);
        return url;
    } 
    else if(localStorage.getItem('land_success') && localStorage.getItem('launch_success'))
    {
        
        console.log('I am Condition2');
        url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success='+localStorage.getItem('launch_success')+'&amp;land_success='+localStorage.getItem('land_success');
        console.log(url);
        return url;
    }
    else if(localStorage.getItem('launch_success'))
    {
        
        console.log('I am Condition1');
        url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success='+localStorage.getItem('launch_success');
        console.log(url);
        return url;
    }
}


function setParameter(parameterName, parameterValue)
{
    localStorage.setItem(parameterName, parameterValue);    
}

function getParameter(parameterName)
{
    return localStorage.getItem(parameterName);
}

function clearParameter(parameterName)
{
    localStorage.removeItem(parameterName);
}

function fetchData(URL)
{
    //Fetching the Data From API-Endpoints
    axios.get(URL).then(response => 
    {
        //Results are stored in full_data
        full_data = response.data;
        console.log(full_data[0]);
        //Loop through the full_data variable
        for(var i=0; i<full_data.length; i++)
        {
            // console.log(full_data[i]);
            //Generating a Markup
            // How Markup Should be?
            // 1. Main Container
            // 2. Main Container will contain 6 child containers
            // 3. 1st Child Container will be of Image Container
            // 4. Rest 5 will be containing the following entries related to the Rocket
            // 5. CSS classes were appended to the associated conatiners.
            // 6. Once the entire structure of div block is ready , append the same to the container with the id - (main-content)

            const d1 = document.createElement('div');
            d1.className='common-class';
            main_container.appendChild(d1);

            const d2 = document.createElement('div');
            const imgTag = document.createElement('img');
            d2.className='image-container';
            d2.appendChild(imgTag);
            
            //Data needs to be extracted from the full_data and put the image link in aTag.href
            imgTag.src = full_data[i].links.mission_patch;
            d1.appendChild(d2);

            const d3 = document.createElement('div');
            d3.className='c-1';
            d1.appendChild(d3);


            const d3_span1 = document.createElement('span');

            index = full_data[i];
            //Processing and Filtering the Specific Entry From the Result set 
            const d3_span1_TextNode = document.createTextNode(full_data[i].mission_name+' #'+full_data.indexOf(index));
            d3_span1.appendChild(d3_span1_TextNode);
            d3.appendChild(d3_span1);

            const d4 = document.createElement('div');
            d4.className='c-2';
            d1.appendChild(d4);

            const d4_span1 = document.createElement('span');
            const d4_span1_TextNode = document.createTextNode("Mission Id's:");
            d4_span1.appendChild(d4_span1_TextNode);
            d4.appendChild(d4_span1);

            //Inside the API datastructure, the entry mission_id needs to be populated for filling the data 
            //Which will be populated and filtered through a loop

            for(var j=0; j<full_data[i].mission_id.length; j++)
            {
                const d4_span2 = document.createElement('span');
                const d4_span2_TextNode = document.createTextNode(full_data[i].mission_id[j]);
                d4_span2.appendChild(d4_span2_TextNode);
                d4.appendChild(d4_span2);
            }

            const d5 = document.createElement('div');
            d5.className='c-3';
            d1.appendChild(d5);

            const d5_span1 = document.createElement('span');
            const d5_span1_TextNode = document.createTextNode("Launch Year:");
            d5_span1.appendChild(d5_span1_TextNode);
            d5.appendChild(d5_span1);

            //Processing and Filtering the Specific Entry From the Result set

            

            const d5_span2 = document.createElement('span');
            const d5_span2_TextNode = document.createTextNode(full_data[i].launch_year);
            d5_span2.appendChild(d5_span2_TextNode);
            d5.appendChild(d5_span2);

            const d6 = document.createElement('div');
            d6.className='c-4';
            d1.appendChild(d6);

            const d6_span1 = document.createElement('span');
            const d6_span1_TextNode = document.createTextNode("Successful Launch:");
            d6_span1.appendChild(d6_span1_TextNode);
            d6.appendChild(d6_span1);

            const d6_span2 = document.createElement('span');
            const d6_span2_TextNode = document.createTextNode(full_data[i].launch_success);
            d6_span2.appendChild(d6_span2_TextNode);
            d6.appendChild(d6_span2);

            const d7 = document.createElement('div');
            d7.className='c-5';
            d1.appendChild(d7);
            // console.log(full_data[i].rocket.first_stage.cores[i]);
            // console.log(full_data[i].rocket.first_stage.cores[i].gridfins);

            // if(full_data[i].rocket.first_stage.cores[i][land_success])
            // {
            //     const d7_span1 = document.createElement('span');
            //     const d7_span1_TextNode = document.createTextNode("Successful Landing:");
            //     d7_span1.appendChild(d7_span1_TextNode);
            //     d7.appendChild(d7_span1);

            //     const d7_span2 = document.createElement('span');
            //     const d7_span2_TextNode = document.createTextNode(full_data[i].rocket.first_stage.cores[i][land_success]);
            //     d7_span2.appendChild(d7_span2_TextNode);
            //     d7.appendChild(d7_span2);
            // }
        }
    })
    .catch(error => console.log(error));
}