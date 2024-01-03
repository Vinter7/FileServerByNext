# File Server By Next.js

# 基于Next.js的文件服务器

## how to use

- run `npm i` and `npm run dev` to start
- put your file into `public` folder
- open `localhost:3000` in browser

## 碎碎念

元旦放假在家没什么事情，想着试试Next.js，但做个什么项目好呢。之前折腾过NAS，但说实话用起来挺麻烦的。像smb nfs ftp什么的文件共享都要下各种软件，然后还有用户登录啥的，心累。有没有一个简单点的，有浏览器就能用的文件共享方法呢。也许已经有了，但我想自己写一个，因此就有了这个项目。因为我也是刚刚接触Next.js，不知道这样的方式是不是最佳实践，后续还会加一个文件上传的功能，不过这回就做到这吧。新年快乐，happy new year。20240101。

文件上传的功能已经做上去了，用了前后端分离api调用的方法。网上关于api路由的文章全是用的page的方法，好不容易才摸索出了app模式的api路由。然后卡在保存文件那里一直解决不了。前端传过去的是formData，然后首先要拿到File，那File想要保存到文件，还要用Blob的stream方法转为可读流，然后再接到可写流里面。各种博客和GPT都查遍了才解决。后续计划加一个删除文件的功能，然后开始尝试加入用户鉴权。20240103。