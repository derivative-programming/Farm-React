job text...
The public repo is at https://github.com/derivative-programming/Farm-React.
You will be submitting a PR to this repository.


sunday...  
keyur chat = 10am Sunday
buy hat 

todo...        
  
  

add 'Filter' to landplantlist param names...
- need to run ai
- need to run db updates
- would break existing apps
- would need an api depoly


react app... handle primary model nav links to diff role sections (admin, config, etc)
links in header? sidebar? NavButton is in root, not namespace, so that complicates things. copy it to namespace in 
workign model?

cypress tests..
site header tests (not page header) (data-testids exist)
 
 
test:when creating seed data, int should never be 0? . farm api deploy required
   
ios swift app 

android Kotlin app

flutter app (ios and android)

react native app (ios and android)

report table row button to stream out file 
 
 api...python with django

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
 

create page components so forms and reports connected components can be used on the same page. form may be ok since no breadcrumb or buttons around title shown. options to hide breadcrumb, title, nav buttons?
  

job: no internet connection alert
  
test forceerror on add plant init and submit and its display.
    looks like just report page has this?



Cypress tests... 
gdpr test.. is visible, go to another page and is visible, accept and is hidden, go to another page and is hidden
submit add button and fill out form with seed data, if available? do this to create rows? can only do this in dev? not pac or tac? not config pages?
report tests...
- table cell data format display  


processsing animation on report export button
   
allow copy of link on report that contains report query

test err...logout expected mock service call. set ispage=false? clear out api token? 
    
- allow bookmark of report page url to view page with same filters

- allow bookmark of authorized page. require login then redirect to it. 

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
 
4. react app feature recommendations
 
6. unit testing...
 
  


7. visualization - line chart...
Create a new page.  Copy land-plant-list page to create land-plant-line-chart.  Replace result table with a chart that uses 'Some Date Time Val' and 'Some Decimal Val' values as data. 
Horizontal axis... datetime is horizontal axis. Dispaly dates on axis label (not time). labels for individual days should be shown on the axis, even if no data exists on that day
Vertical axis should show integers as labels. 

8. visualization - card view...
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
report param is unknown lokup allowed
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

stop converting .js to .gen.js? create suppress extension substitution tag?

create react demo app instead of static html? use fixture json for data?


reverse template tag substitution: 
create separate replacement dictionary until full file is processed
put tags like |*[replacement tag array index number]*| in file
pass around tag array in tempalte creation code
add step at end to impement tag array
after this, sort on property by property name siz not relevant. 
sort on property value length is relevant

remove IsConditionalVisible prop. its not used. a calculated one is instead

Analytics… 
this is a Model feature?  Root Top level setting ? 
All go to one endpoint 
use signalr to send analytics
create analytics specific hub? channel?  
when connected to analytics hub, send queued events. then remove event from client queue.

Cache api keys? To redis? Mem cache?

voice assistant?
learn from api data and app model?


authContext.js should be authContext.tsx. 

can break out cypress tests in a separate repo? separate template set? 


separate cypress tests on filter and table and page?  


break out legacy templates into own repos...
- python django
- php laravel
- objective c
- Win App
- Fixed Html Demo?

create repo with larger react app that demostrates what can be built.  would need a api too. heroku is free?
what model? JC order system? public repo. something massive. link on readme of other to this one with size spects (# of pages, number of unti tests, number of cypress tests)
