#!/bin/bash
set -e
pm2 stop askfinbot
rm -rf /tmp/askfin-x
mkdir -p /tmp/askfin-x
tar -xzf /tmp/askfin-auth.tar.gz -C /tmp/askfin-x
rm -rf /var/www/askfinbot/.next
cp -a /tmp/askfin-x/.next /var/www/askfinbot/.next
cp -a /tmp/askfin-x/server.js /var/www/askfinbot/server.js
cp -a /tmp/askfin-x/public/. /var/www/askfinbot/public/
pm2 start askfinbot
sleep 4
EMAIL="cookietest_$RANDOM@askfinbot.local"
curl -s -D /tmp/af-h -o /tmp/af-b -X POST http://127.0.0.1:4010/api/auth/login \
  -H 'Content-Type: application/json' \
  -d "{\"action\":\"register\",\"email\":\"$EMAIL\",\"password\":\"test1234\",\"name\":\"Cookie Test\"}"
echo "BODY=$(head -c 220 /tmp/af-b)"
echo "SETCOOKIE=$(grep -i set-cookie /tmp/af-h | tr -d '\r')"
if grep -qi 'Secure' /tmp/af-h; then echo 'BAD: Secure flag present'; else echo 'GOOD: no Secure flag'; fi
COOKIE=$(grep -i set-cookie /tmp/af-h | sed -n 's/.*askfinbot_user_session=\([^;]*\).*/\1/p' | head -1)
curl -s -H "Cookie: askfinbot_user_session=$COOKIE" http://127.0.0.1:4010/api/auth/me | head -c 220
echo
rm -rf /tmp/askfin-x /tmp/askfin-auth.tar.gz /tmp/af-h /tmp/af-b
pm2 save
echo DONE
