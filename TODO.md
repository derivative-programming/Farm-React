job text...
The public repo is at https://github.com/derivative-programming/Farm-React.
You will be submitting a PR to this repository.



todo...  

job: lazy loading on router

Job: create list of unit tests to be added

job: catch 401 unauth api errros and redirect to login page

job: gdpr alert

job: no internet connection alert
  
test forceerror on add plant init and submit and its display.
    looks like just report page has this?

plant list report query not working

remove plantedit page.  
change plant detail update plant button to 'add another plant'
change add plant other button to 'Go To Dashboard'

deploy farm api:default add plant flavor should be sweet

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
- code splitting and lazy route https://medium.com/@kirichuk/7-must-have-features-for-any-react-app-10b086038d9a
- maintain a list ofr all feaatures
- collect analytics
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
Sched report button on grid with indicator icon
Fav report button on grid with indicator icon 
>>>report header display form initobjwf output params
report row is button drop down allowed
reprot rating level col name  
report table row button to stream out file 
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
 

Create simple stmt that tells us it’s a loop of reports or objwf instead of that big section I had to manually add. Have it convert automatically
 
create file that has list of all files (except index)?  if it matches one of the array lists then it identifies that folder type?

folder name can identify folder type? report? objwf? form? set those as 'none' and make others default of namespace?


authContext.js should be authContext.tsx. stop converting .js to .gen.js. create suppress extension substitution tag?

react demo app instead of static html

remove {/*[any number of spaces or newlines]*/} from fabrication results

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

