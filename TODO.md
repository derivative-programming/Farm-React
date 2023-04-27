job text...
The public repo is at https://github.com/derivative-programming/Farm-React.
You will be submitting a PR to this repository.

todo...     

report... if results match current displayed results, ignore

job...error display component unit testing...posted...
/components/forms/input-fields/ErrorDisplay
/components/reports/input-fields/ErrorDisplay

job...analytics queue...posted....
use indexeddb to store data locally
on click of langplantlist search button, create rec with utcdatetime and 'refresh button clicked', even if no internet connection exists.
Separately, another part of the app should monitor both internet connection and data entry into this db. if connected and a row exists, delete the row. if connection is lost, delete all recs when connection is made. 

job...web push...posted...
create a simple c# .net core signalr hub
have the react app connect to hub on login. 
reconnect if internet connection lost
disconnect on logout
channel specific for the logged in user. use customercode in local storage as the channel identifier 
protected the connection. no client knowing the customercode should be able to connect.
allow client to send and recieve simple string message with the hub
allow a trusted server app to send a message to a particular client userid channel through the hub. create a simple c# console app to demonstrate. 


job to fix error... posted...
    console.error
      Warning: An update to ReportConnectedPlantUserDetails inside a test was not wrapped in act(...).        

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at ReportConnectedPlantUserDetails (C:\VR\Source\DP\Farm-React\src\components\reports\connected\PlantUserDetails.tsx:11:43)
          at Router (C:\VR\Source\DP\packages\react-router\lib\components.tsx:173:13)
          at BrowserRouter (C:\VR\Source\DP\packages\react-router-dom\index.tsx:147:3)

      133 |         ReportService.submitRequest(query, contextCode)
      134 |             .then(response => handleQueryResults(response))
    > 135 |             .finally(() => {setIsProcessing(false);});
          |                             ^
      136 |     }, [query]);
      137 |
      138 |     return (

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27543:9)      
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25404:5)
      at setIsProcessing (node_modules/react-dom/cjs/react-dom.development.js:17389:16)
      at src/components/reports/connected/PlantUserDetails.tsx:135:29


job...posted...gdpr banner test,HeaderLandAddPlant unit test,HeaderLandPlantList unit test

  


C:\Users\vince\Downloads\possible-test-cases
  
Create Boolean Gen Val Tags_ProcessLine calculatedis should override simple is prop if its available

page headers - report...  
- need to look at isLabelVisible prop. should be attribute of ctrl displaying line item.  


page header - form.... 
- need to look at isLabelVisible prop. should be attribute of ctrl displaying line item.   

>>>>remove plantedit page.   


change add plant other button to 'Go To Dashboard'

create page components so forms and reports connected components can be used on the same page. form may be ok since no breadcrumb or buttons around title shown. options to hide breadcrumb, title, nav buttons?
  

job: no internet connection alert
  
test forceerror on add plant init and submit and its display.
    looks like just report page has this?

when creating seed data, int should never be 0?
   

fab: 'O K button Text'  

test err...logout expected mock service call. set ispage=false? clear out api token? 
    
- allow bookmark of report page url to view page with same filters

- allow bookmark of authorized page. require login then redirect to it.
  
- to-csv endpoint needs to stream out a file. react app needs to handle it.

- need page not found page.  redirect unknown urls to it?
   
- internationalization https://www.i18next.com/
- check for new app version
- no internet connection message  https://medium.com/@kirichuk/7-must-have-features-for-any-react-app-10b086038d9a
- run on google lighthouse 
- maintain a list ofr all feaatures
- collect analytics. 
- web push notifications
- document management
- google sso


jobs... 
 
1. add landaddplant and landplantlist and plantuserdetails unit tests

1. implement sonarqube

2. export button to csv (api should return a file?)
 
4. react app feature recommendations

5. >>>Simple Cypress implementation. 
    1 test suite on each page. no intercept of api requests. from login page, go to target page. test for existance of title. at start of spec, if target page requires authorization, register a user. Use that user in spec. Would like to use the page object pattern (each page having an object in supprot folder that exposes functions that return specific items on the page.  Example getTitle())
- (job posted) login
- (job posted) register
- (job posted) dashboard
- plant list
- add plant
- plant detail
- update plant

6. unit testing...

6.1 fix warnings and errors on existing unit tests
  


7. >>>visualization - line chart...
Create a new page.  Copy land-plant-list page to create land-plant-line-chart.  Replace result table with a chart that uses 'Some Date Time Val' and 'Some Decimal Val' values as data. 
Horizontal axis... datetime is horizontal axis. Dispaly dates on axis label (not time). labels for individual days should be shown on the axis, even if no data exists on that day
Vertical axis should show integers as labels. 

8. >>>visualization - card view...
create new page. Copy land-plant-list page to create land-plant-card-list. Replace result table with a card display.  Card will use 'Some Var Char Val' column as the card title and 'Some text Val' colummn as the card body. 

9. visualization - folder view

10. fix npm dependency alerts and warnings 
 


light\dark mode toggle. requires bootstrap 5.3 first. react boostrap is just on 5.2

style changes...   
Custom validation controls need same style as bootstrap Val error  

features... 
visualization chat 
never ending scroll
visualization twitter 
Sched report button on grid with indicator icon
Fav report button on grid with indicator icon  
report row is button drop down allowed
reprot rating level col name  
report table row button to stream out file 
report auto refresh
report badge display 
visualization report grid group by
visualization reprot pie chart
job:visualization report line chart
visualization report flow chart
job:visualization report card view
job:visualization report folder view
>>>report param is unknown lokup allowed
form credit card
form captcha
form auto submit   
impersonation page
form is custom page used
from control tool tip  

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



Translator… 
CHANGE REPO names from r18 b5 to react18_bootstrap5


if a genval variable is in the genif statement, you can remove it from the dimensional phrase?
 

Create simple stmt that tells us it’s a loop of reports or objwf instead of that big section I had to manually add. Have it convert automatically
 
create file that has list of all files (except index)?  if it matches one of the array lists then it identifies that folder type?

folder name can identify folder type? report? objwf? form? set those as 'none' and make others default of namespace?


authContext.js should be authContext.tsx. stop converting .js to .gen.js. create suppress extension substitution tag?

react demo app instead of static html


reverse template tag substitution: 
create separate replacement dictionary until full file is processed
put tags like |*[replacement tag array index number]*| in file
pass around tag array in tempalte creation code
add step at end to impement tag array
after this, sort on property by property name siz not relevant. 
sort on property value length is relevant

remove IsConditionalVisible prop. its not used. a calculated one is instead

Analytics…
Need… Api key, page , context code
Model feature?
Root Top level setting ?
Send to queue. No db write
All go to one endpoint
any button click? any link click?
use signalr to send analytics
create analytics specific hub? channel?
collect all events in local storage, even if connection is lost. 
store datetime with each event.
when connected to analytics hub, send queued events. then remove event from client queue.

Cache api keys? To redis? Mem cache?

voice assistant?
learn from api data and app model?

