#!/bin/bash
# Unpacks /tmp/askfin-release.tar.gz into /var/www/askfinbot and restarts the systemd service.
set -e
rm -rf /tmp/askfin-x
mkdir -p /tmp/askfin-x
tar -xzf /tmp/askfin-release.tar.gz -C /tmp/askfin-x
systemctl stop askfinbot.service
rm -rf /var/www/askfinbot/.next
cp -a /tmp/askfin-x/.next /var/www/askfinbot/.next
cp -a /tmp/askfin-x/server.js /var/www/askfinbot/server.js
cp -a /tmp/askfin-x/public/. /var/www/askfinbot/public/
systemctl start askfinbot.service
for _ in $(seq 1 15); do
  if [ "$(systemctl is-active askfinbot.service)" = "active" ] &&
    curl --fail --silent --output /dev/null http://127.0.0.1:4010/; then
    break
  fi
  sleep 1
done
test "$(systemctl is-active askfinbot.service)" = "active"
curl --fail --silent --output /dev/null http://127.0.0.1:4010/
curl -s -o /dev/null -w "HOME=%{http_code}\n" http://127.0.0.1:4010/
curl -s -o /dev/null -w "STUDY=%{http_code}\n" http://127.0.0.1:4010/study
rm -rf /tmp/askfin-x /tmp/askfin-release.tar.gz
echo DONE
