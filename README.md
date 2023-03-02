


todo...   
remove component\pages
show processing animation on... form init, form submit, report init, report query  
Center paging ctrl on grid. Match footer display
Nav page implementation
Fix button display on three col viz. buttons on top right?
A two column implementation? Make three one smart if no buttons? 
nav link col examples? 
dont process lexicon array

style changes...
remove use of className="custom-form-control"   
use standard bootstrap container classes 
Add button icon on grid add button
Back button icon on back btns 
Custom validation controls need same style as bootstrap Val error 
show a slightly zoomed out view, showing everythign smaller (scaled down?)

features...
Sched report button on grid with indicator icon
Fav report button on grid with indicator icon
reprot paging optional
report row is button drop down allowed
reprot rating laevel col name
reprot is fitler section hidden
report is fitler section collapsible
reprot si breadcrumb section hidden
report is refresh button hidden
report export
report is export section hidden
report auto refresh
report badge display
report is header visible
report grid group by
reprot pie chart
report line chart
report flow chart
report card view
report folder view
report param is unknown lokup allowed
form credit card
form captcha
form auto submit
login form
logout form
impersonation page
form is custom page used
from control tool tip
add cypress?
 

display friendly generic message on hard unexpected error in api... 
- form init and post 
- report grid init and query and async button
- report 3 col init and query and async button
- authorization error


research to build examples of use list...
report grid page template
report three column template
report navigation template
form template

add examples of use...infinite
 
 
unit testing...infinite
component\forms\connected
component\forms\input-fields @disabled, @autofocus, @label done
component\forms\lookups
component\forms\services
component\lookups
component\reports\connected
component\reports\filters
component\reports\input-fields  @disabled, @autofocus, @label done
component\reports\lookups
component\reports\services
component\reports\visualization\detail-three-column
component\reports\visualization\detail-three-column\columns
component\reports\visualization\grid
component\reports\visualization\grid\columns
component\services
  

special lists...
report
objwfs
all pages 
subsets of any array. try setting each boolean prop to true or false in the dimension phrase to see if a perfect set is found. need to look for full lists first. 
  
  
Check success add navigation on result code 

Form other button example  

Primary and secondary button examples…
Grid row
Report other buttons
Form other buttons
 


Translator… 

instead of putting all booleans in the dimension phrase, use wildcard 'is*=false,' and remove all false ones.   

Remove model type from final learn stmt conversion to genif stmt
 
Create simple stmt that tells us it’s a loop of reports or objwf instead of that big section I had to manually add. Have it convert automatically
 
create file that has list of all files (except index)?  if it matches one of the array lists then it identifies that folder type?

folder name can identify folder type? report? objwf? form? set those as 'none' and make others default of namespace?

 
Analytics…
Need… Api key, page , context code
Model feature?
Root Top level setting ?
Send to queue. No db write
All go to one endpoint


Cache api keys? To redis? Mem cache?



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You can run the all component testcase.
### `npm test` OR
### `npm run test`

Run specific component testcase.
### `npm test TacLogin.test.tsx` OR
### `npm run test TacLogin.test.tsx`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
