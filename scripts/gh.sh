host=`pwd`;

echo ${host};

rm -rf ${host}/dist

yarn build

cd ${host}/dist

git init

git config user.name "lauxinyi"
git config user.email "lauxinyi@gmail.com"

git checkout --orphan gh-pages

git add -A
git commit -m "master"

#git push -f https://github.com/lsamu/sass_data_app.git gh-pages

git remote add origin https://github.com/lsamu/sass_data_screen.git

git push -f origin gh-pages