echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -a 'deploy'

cd - 