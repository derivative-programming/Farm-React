
todo...  
 
add isIgnored to api endpoints

test:react farm needs to move other form page init services to init folder. so old tests can pass with fab code

remove plantedit page.  change plant detail button to 'add new plant'

add 'other' button to add plant page

on test title, intro text, and footer with data-testid,  verify correct text exists

fab: 'O K button Text'  

test err: logout expected mock service call

remove update plant page? not necessary bc add plant does everything?


on creation of project, create the initial model and initial version rec?
request ai processing on creation of project? no. allow for selection of features.

allow pull of version model in ui from api   

add general initialization button in pac config
   
- add page random values button isnt working. posting to same page but init not running again.
- add page new values button necessary?        
test:- harvest testing should run original tests of farm too
- allow bookmark of report page url to view page with same filters
- allow bookmark of authorized page. require login then redirect to it.
 
toCSV endpoint for report export

- add report export to file endpoint... get [path]/[guid]/ToFile. max of 1000. ignore page size
- job:on expired api key, redirect to login page
- add gdpr alert 
- common, light, dark theme
- internationalization https://www.i18next.com/
- check for new app version
- no internet connection message  https://medium.com/@kirichuk/7-must-have-features-for-any-react-app-10b086038d9a
- run on google lighthouse
- code splitting and lazy route https://medium.com/@kirichuk/7-must-have-features-for-any-react-app-10b086038d9a
- maintain a list ofr all feaatures
- collect analytics
- web push notifications
- document management
- google sso


jobs... 

1. audit landaddplant and landplantlist unit tests

1. implement sonarqube

1. catch 401 unauth api errros and redirect to login page

2. export button to csv (api should return a file?)
 

4. recommendations

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

6.2 audit unit testing - plant list page

6.3 audit unit testing - add plant page

6.4 add missing unit testing


7. >>>visualization - line chart...
Create a new page.  Copy land-plant-list page to create land-plant-line-chart.  Replace result table with a chart that uses 'Some Date Time Val' and 'Some Decimal Val' values as data. 
Horizontal axis... datetime is horizontal axis. Dispaly dates on axis label (not time). labels for individual days should be shown on the axis, even if no data exists on that day
Vertical axis should show integers as labels. 

8. >>>visualization - card view...
create new page. Copy land-plant-list page to create land-plant-card-list. Replace result table with a card display.  Card will use 'Some Var Char Val' column as the card title and 'Some text Val' colummn as the card body. 

9. visualization - folder view

10. fix npm dependency alerts and warnings 



style changes...   
Custom validation controls need same style as bootstrap Val error  

features... 
Sched report button on grid with indicator icon
Fav report button on grid with indicator icon 
>>>report header display form initobjwf output params
report row is button drop down allowed
reprot rating level col name  
job:report export 
report auto refresh
report badge display
>>>report is header visible
report grid group by
reprot pie chart
job:report line chart
report flow chart
job:report card view
job:report folder view
>>>report param is unknown lokup allowed
form credit card
form captcha
form auto submit 
login form 
- page changes with learn statement
logout form
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

instead of putting all booleans in the dimension phrase, use wildcard 'is*=false,' and remove all false ones.  

Create simple stmt that tells us it’s a loop of reports or objwf instead of that big section I had to manually add. Have it convert automatically
 
create file that has list of all files (except index)?  if it matches one of the array lists then it identifies that folder type?

folder name can identify folder type? report? objwf? form? set those as 'none' and make others default of namespace?


authContext.js should be authContext.tsx. stop converting .js to .gen.js. create suppress extension substitution tag?

react demo app instead of static html

remove {/*[any number of spaces or newlines]*/}

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


Cache api keys? To redis? Mem cache?

