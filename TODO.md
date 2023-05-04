job text...
The public repo is at https://github.com/derivative-programming/Farm-React.
You will be submitting a PR to this repository.


sunday...  
keyur chat = 10am Sunday
buy hat 

todo...       

test:plant list cypress update column is hidden but did not know it

close filter accordian by default. 

fab cypress issue on if sortup or sortdown is expected? separate test so it can retry?

separate cypress tests on filter and table and page?  

break out legacy templates into own repos...
- python django
- php laravel
- objective c
- Win App
- Fixed Html Demo?

can break out cypress tests in a separate repo? separate template set? 

create repo with larger react app that demostrates what can be built.  would need a api too. heroku is free?
what model? JC order system? public repo. something massive. link on readme of other to this one with size spects (# of pages, number of unti tests, number of cypress tests)

react app... handle primary model nav links to diff role sections (admin, config, etc)
links in header? sidebar?

filter ctrls are differnt.  hid search on guid? Just fabricated is diff?
 

change filter design? more columns? differnt closed accordian?

use local storage to hold values for...
- filter accordian open
- default page size
 
>>stream csv in api 

>>add 'Filter' to landplantlist param names

>>>change add plant other button to 'Go To Dashboard'...
- needs taccode , so change in model ui app and run ai
 

implement analytics collection storing to local db...  
- log button clicks... filter refresh
- log report query stats... duration, nubmer of rows, total rows, sort by, 
- log errors 
- log validation error. before api ? from api? 
- log page scroll to bottom? view of bottom?
- log page init start, page init complete (with duration and if success)
- log async report grid row async button click processing start and completed
- log async report grid multiselect button click processing start and completed
- log async report 3 col vis async other button click processing start and completed 
- log async form submit button click processing start and completed

 
api...python with django

job...better design? similar to upword?
 
job...web push...posted...
create a simple c# .net core signalr hub
have the react app connect to hub on login. 
reconnect if internet connection lost
disconnect on logout
channel specific for the logged in user. use customercode in local storage as the channel identifier 
protected the connection. no client knowing the customercode should be able to connect.
allow client to send and recieve simple string message with the hub
allow a trusted server app to send a message to a particular client userid channel through the hub. create a simple c# console app to demonstrate. 

C:\Users\vince\Downloads\possible-test-cases

Create Boolean Ge n Val Tags_ProcessLine calculatedis should override simple is prop if its available

page headers - report...  
- need to look at isLabelVisible prop. should be attribute of ctrl displaying line item.  

page header - form.... 
- need to look at isLabelVisible prop. should be attribute of ctrl displaying line item.   


create page components so forms and reports connected components can be used on the same page. form may be ok since no breadcrumb or buttons around title shown. options to hide breadcrumb, title, nav buttons?
  

job: no internet connection alert
  
test forceerror on add plant init and submit and its display.
    looks like just report page has this?

test:when creating seed data, int should never be 0?


Cypress tests...
need to create seed data?
gdpr test.. is visible, go to another page and is visible, accept and is hidden, go to another page and is hidden
submit add button and fill out form with seed data, if available? do this to create rows? can only do this in dev? not pac or tac? not config pages?
thse page tests should just look for elements on page, test sort, etc.? dont click async buttons? dont submit forms?
functional tests are separate from page testS?
report tests...
- open close filter 
- table cell data format display 
- paging controls data-testid="reportGridLandPlantList-paginator-pageination"
- table count display (data-testid="reportGridLandPlantList-paginator-pageination-count-display")
- page size control (data-testid="items-per-page-label") (data-testid="reportGridLandPlantList-paginator-pageination-select-page-size")
site header tests (data-testids exist)
site footer tests (data-testid="footer-text")

   


test err...logout expected mock service call. set ispage=false? clear out api token? 
    
- allow bookmark of report page url to view page with same filters

- allow bookmark of authorized page. require login then redirect to it.
  
- to-csv endpoint needs to stream out a file. react app needs to handle it.

- need page not found page.  redirect unknown urls to it?
   
- internationalization https://www.i18next.com/
- check for new app version
- no internet connection message  https://medium.com/@kirichuk/7-must-have-features-for-any-react-app-10b086038d9a
- run on google lighthouse 
- maintain a list of all features 
- web push notifications
- document management
- google sso


jobs... 
 
1. add landaddplant and landplantlist and plantuserdetails unit tests 

2. export button to csv (api should return a file?)
 
4. react app feature recommendations
 
6. unit testing...
 
  


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

display friendly ge neric message on hard unexpected error in api... 
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
 
 

Create simple stmt that tells us it’s a loop of reports or objwf instead of that big section I had to manually add. Have it convert automatically
 
create file that has list of all files (except index)?  if it matches one of the array lists then it identifies that folder type?

folder name can identify folder type? report? objwf? form? set those as 'none' and make others default of namespace?


authContext.js should be authContext.tsx. stop converting .js to .ge n.js. create suppress extension substitution tag?

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
All go to one endpoint 
use signalr to send analytics
create analytics specific hub? channel?  
when connected to analytics hub, send queued events. then remove event from client queue.

Cache api keys? To redis? Mem cache?

voice assistant?
learn from api data and app model?

