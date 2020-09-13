git update-index --assume-unchanged settings.json
git update-index --assume-unchanged settings-example.json
git update-index --assume-unchanged proxies.txt
git update-index --assume-unchanged accounts.txt
git update-index --assume-unchanged songWriterNames.txt
git update-index --assume-unchanged genres/
git update-index --assume-unchanged arts/
del -f "node_modules/"
npm install