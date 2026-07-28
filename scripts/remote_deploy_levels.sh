#!/bin/bash
set -e
pm2 stop askfinbot
rm -rf /tmp/askfin-x
mkdir -p /tmp/askfin-x
tar -xzf /tmp/askfin-levels.tar.gz -C /tmp/askfin-x
rm -rf /var/www/askfinbot/.next
cp -a /tmp/askfin-x/.next /var/www/askfinbot/.next
cp -a /tmp/askfin-x/server.js /var/www/askfinbot/server.js
cp -a /tmp/askfin-x/public/. /var/www/askfinbot/public/
pm2 start askfinbot
sleep 4
curl -s -o /dev/null -w STUDY=%{http_code}\\n http://127.0.0.1:4010/study
# quick syllabus level check via logged-in is hard; just hit page
rm -rf /tmp/askfin-x /tmp/askfin-levels.tar.gz
pm2 save
echo DONE
