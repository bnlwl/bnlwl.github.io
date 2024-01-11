echo "进行项目build"
pnpm build

echo "打包文件"
git add ./

echo "设置commit"
git commit -m 'out'

echo "push 远程"
git push
