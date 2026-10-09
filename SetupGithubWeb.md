##Username GitHub:lethanhdat160607-sys
Project: ví dụ ~/Documents/binh-my-moon-river

#bạn phải đang ở trong thư mục 
cd ~/Documents/binh-my-moon-river

#kiểm tra file : ls 


##Khởi tạo 
#Nếu Project chưa có git 
git init
#Git sẽ tạo thư mục:
.git/
#Bạn có thể kiểm tra
git status
#nếu thấy On branch master hoặc On branch main thì đã được khởi tạo


##Đặt tên và email cho Git

#tên git 
git config --global user.name "lethanhdat160607-sys"
git config --global user.email "lethanhdat160607@gmail.com"

#kiêm tra
git config --global user.name
git config --global user.email

##Đổi thành branch thành main 
git branch -M main
#kiểm tra 
git branch #thấy ra main là ok 


##Đưa toàn bộ code vào Git
git add .
#kiểm tra 
git status # nếu hiện ra new file: ... thì ok 


##Tạo commit đầu tiên
git commit -m "Initial website" # ghi theo gì bạn muốn
# nếu hiện [main xxxxxxx] Add Initial website


##Tạo Repository trên GitHub
lưu ý nếu bạn đã có code ở máy rồi, khi tạo repository GitHub, tốt nhất không tạo thêm README ở GitHub # Add a README file tương tự không cần thêm -.gitignore -License


##Kết nối project Linux với GitHub
cd ~/Documents/binh-my-moon-river
git remote add origin https://github.com/lethanhdat160607-sys/MY-WEB.git
git remote -v
# nếu nó hiện này thì ok  
origin  https://github.com/lethanhdat160607-sys/MY-WEB.git (fetch)
origin  https://github.com/lethanhdat160607-sys/MY-WEB.git (push)

##Đăng nhập GitHub trên Linux
sudo apt update
sudo apt install gh
# kiểm tra 
gh --version
# sau đó
gh auth login

##GitHub CLI sẽ hỏi ? 

câu 1 GitHub CLI sẽ hỏi ? 
chọn GitHub.com
câu 2 What is your preferred protocol for Git operations on this host?
chọn HTTPS 
câu 3 Authenticate Git with your GitHub credentials?
chon yes or y 
# đăng nhập github tài khoản google nó hiện Congratulations, you're all set! Your device is now connected là ok 

###GitHub đăng ký bằng Google thì password là gì?
khi dung HTTPS 
Username
Password
# không nên nhập nooooooooooooooooooo

#bạn chon là 
gh auth login


## Push code lên 
git push -u origin main

### Trường hợp đã có lịch sử trước đó 
git push -u origin main


##Ghép lịch sử GitHub và Linux
git pull origin main --allow-unrelated-histories --no-rebase


## Push lại 
#sao khi pull thành công
git push -u origin main

nếu nó hiện : 
To https://github.com/lethanhdat160607-sys/MY-WEB.git
   8de62c0..94c2f99  main -> main

branch 'main' set up to track 'origin/main'.

### kiểm tra github

#### đưa web lên github pages 
#Trong repository:

MY-WEB

#chọn:

Settings

#Sau đó bên trái chọn:

Pages

#Tại:

Build and deployment

#chọn:

Source
    Deploy from a branch

#Sau đó:

Branch
    main

#và:

Folder
    / (root)

Rồi:

Save

## nếu sao này sửa lại thì sao ? không cần tạo repository mới chỉ cần 
cd <thư mục> 
git add .
git commit -m "Update website"
git push


####### setup project mới cho github
cd ~/Documents/TEN-PROJECT

git init

git config --global user.name "lethanhdat160607-sys"
git config --global user.email "lethanhdat160607@gmail.com"

git branch -M main

git add .

git commit -m "Initial website"

git remote add origin https://github.com/lethanhdat160607-sys/TEN-REPOSITORY.git

git push -u origin main
