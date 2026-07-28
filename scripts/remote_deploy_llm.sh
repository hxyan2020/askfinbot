#!/bin/bash
set -e
pm2 stop askfinbot
rm -rf /tmp/askfin-x
mkdir -p /tmp/askfin-x
tar -xzf /tmp/askfin-llm.tar.gz -C /tmp/askfin-x
rm -rf /var/www/askfinbot/.next
cp -a /tmp/askfin-x/.next /var/www/askfinbot/.next
cp -a /tmp/askfin-x/server.js /var/www/askfinbot/server.js
cp -a /tmp/askfin-x/public/. /var/www/askfinbot/public/
pm2 start askfinbot
sleep 5
EMAIL="llmtest_$(date +%s)@askfinbot.local"
curl -s -D /tmp/h -o /tmp/b -X POST http://127.0.0.1:4010/api/auth/login \
  -H 'Content-Type: application/json' \
  -d "{\"action\":\"register\",\"email\":\"$EMAIL\",\"password\":\"test1234\",\"name\":\"LLM Test\"}"
COOKIE=$(grep -i set-cookie /tmp/h | sed -n 's/.*askfinbot_user_session=\([^;]*\).*/\1/p' | head -1)
echo "COOKIE_LEN=${#COOKIE}"
curl -s -X POST http://127.0.0.1:4010/api/chat \
  -H 'Content-Type: application/json' \
  -H "Cookie: askfinbot_user_session=$COOKIE" \
  -d '{"examId":"frm","message":"what is FRM in one short sentence","provider":"gemini"}' | head -c 600
echo
rm -rf /tmp/askfin-x /tmp/askfin-llm.tar.gz /tmp/h /tmp/b
pm2 save
echo DONE
