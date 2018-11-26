SERVER=http://localhost:99/project.html?projectId=AngularAppGit
USER=mohdz1985
PASS="mydob1985"
 
LOCATOR=$1
 
# The following is one-line:
(sleep 10;  curl --user $USER:$PASS -X POST "$SERVER/app/rest/vcs-root-instances/commitHookNotification?locator=$LOCATOR" -o /dev/null) >/dev/null 2>&1 <&1 &
 
exit 0
