
todo...        
- add page random values button isnt working. posting to same page but init not running again.
- test harvest. could have issue since name attributes changed lines    

  

jobs...

1. correct bootstrap 5 implementation...
- skills... react, react bootstrap
- alot of custom css being used that shouldnt be.   
- show how to change to smaller scale  

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

10. fix npm dependency alerts and warnings

style changes...  
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

