git remote add https://github.com/harden-ung/um_auto_build.git
git remote -v

git update-index --assume-unchanged settings.json
git update-index --assume-unchanged proxies.txt
git update-index --assume-unchanged accounts.txt
git update-index --assume-unchanged songWriterNames.txt
git update-index --assume-unchanged genres/*
git update-index --assume-unchanged reports/*
git update-index --assume-unchanged arts/*
git update-index --assume-unchanged .vscode/*
git update-index --assume-unchanged genres/
git update-index --assume-unchanged reports/
git update-index --assume-unchanged arts/
git update-index --assume-unchanged .vscode/
git update-index --assume-unchanged vcc.txt

git update-index --no-assume-unchanged settings-example.json

del -f "node_modules/"
npm install
cmd /k
