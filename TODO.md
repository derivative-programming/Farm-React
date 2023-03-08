
todo...      
page size update. if switching from pagesize1 and page 10 to page size 10, nothing is shown. reset to page 1.


jobs...

1. correct bootstrap 5 implementation...
- skills... react, bootstrap 5
- alot of custom css being used that shouldnt be. 
- not importing bootstrap css in index file as we should
- not using container tag
- show how to change to smaller scale
- 'add' icon on 'add a plant' button

2. export button to csv

3. processing animaiton
- grid during api call
- form submission during api call
- init form during api call

4. recommendations

5. Simple Cypress implementation. 1 test per page

6. add unit testing

7. visualization - line chart

8. visualization - card view

9. visualization - folder view

style changes...
remove use of className="custom-form-control"   
use standard bootstrap container classes 
Add button icon on grid add button
Back button icon on back btns 
Custom validation controls need same style as bootstrap Val error 
show a slightly zoomed out view, showing everythign smaller (scaled down?)

features...
job:show processing animation on... form init, form submit, report init, report query  
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
job:
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



Translator… 
if a genval variable is in the genif statement, you can remove it from the dimensional phrase?

instead of putting all booleans in the dimension phrase, use wildcard 'is*=false,' and remove all false ones.  

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

