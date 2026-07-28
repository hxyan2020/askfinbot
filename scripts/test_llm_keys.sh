#!/bin/bash
set -e
KEY=$(node -e "console.log(require('/var/www/askfinbot/ecosystem.config.cjs').apps[0].env.DEEPSEEK_API_KEY)")
curl -s -w "\nHTTP=%{http_code}\n" https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $KEY" \
  -d '{"model":"deepseek-chat","messages":[{"role":"user","content":"Reply with only the word OK"}],"max_tokens":16}' | head -c 400
echo
GKEY=$(node -e "console.log(require('/var/www/askfinbot/ecosystem.config.cjs').apps[0].env.GEMINI_API_KEY)")
curl -s -w "\nHTTP=%{http_code}\n" "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$GKEY" \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Say OK"}]}]}' | head -c 400
echo
