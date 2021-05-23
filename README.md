# Assignment-PS

## Developed a front-end application which would help users list and browse all launches by SpaceX program.

### Functionalities
- The initial launch programs landing page is server-side-rendered.
- NodeJS is used for server-side rendering.
- Added Filters for fetching the result set from provided API's.
1.  https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true
2.  https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true
3.  https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014
4.  https://api.spacexdata.com/v3/launches?limit=100

- Applied filters change the URL and update the Page with latest records without refreshing the page.

### Approach Followed:
User selects the Button in the initial launch program page and once the button is clicked the data will get saved in the localstorage as the Key-Value Pairs,
The same approach will be followed for all the 3 filters
1. Launch Year
2. Launch Succes
3. Land Success

Now as per the User Choice Selection, the data will be set or cleared from the localstorage.
After the Choice selection the URL will be formed as per the user choice selection (According to Filters)
and then the required data will be fetched from the fetchData() function, a new markup will get generated and 
the data will get updated without refreshing the page.
