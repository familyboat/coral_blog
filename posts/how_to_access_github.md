---
title: 如何访问 Github
date: 2024-12-01
author: familyboat
---

作为一名开发人员，需要经常访问 [GitHub](https://github.com) 提供的服务。在中国，直接访问 GitHub 提供的服务一般是不可能的。

偶然发现无法访问 GitHub 提供的服务是因为 [DNS 欺骗](https://en.wikipedia.org/wiki/DNS_spoofing)。

接下来探讨相应的解决方法。

<!--more-->

## 访问网站

无论是在浏览器中，还是在终端中，访问网站提供的服务时，一般会涉及下列这些步骤：

1. 域名解析：向域名服务器发送请求，询问网站域名对应的 [IP 地址](https://en.wikipedia.org/wiki/IP_address)；
2. 建立 TCP 连接：和目标服务器（IP 地址指向目标服务器）建立 TCP 连接；
3. 发送 HTTP 请求：向目标服务器发送 HTTP 请求；
4. 处理 HTTP 响应：处理从目标服务器发送的 HTTP 响应。

如果域名解析阶段得到的 IP 地址是错误的，那么后续的步骤都将会是错误的。

## 域名解析

域名解析一般涉及下列这些步骤：

1. 检查 hosts 文件：查看 hosts 文件中是否存在该域名的 IP 地址映射，如果存在，则返回该 IP 地址；
2. 操作系统缓存查询：调用 DNS 缓存查询函数，查找缓存中是否存在该域名的 IP 地址，如果存在，则返回该 IP 地址；
3. 域名服务器查询：向域名服务器查询该域名的 IP 地址，返回解析到的 IP 地址。

一般而言，hosts 文件中没有任何的 IP 地址——域名的映射。如果操作系统缓存中没有该域名的 IP 地址时，就需要向域名服务器发送查询请求。如果域名服务器返回的结果是虚假的，那么后续的步骤都是错误的。

因此，可以先获取该域名真实的 IP 地址，然后在 hosts 文件中加入 IP 地址——域名的条目。

## 如何获取域名真实的 IP 地址

用 [deno](https://deno.com) 运行时提供的 `Deno.resolveDns` 接口实现域名解析的功能，并将该功能以 Web 服务的形式托管在 [deno deploy](https://deno.com/deploy) 上。想要了解更多详情，参见[源码仓库](https://github.com/familyboat/domain_name_to_ip)。

获取域名真实的 IP 地址的服务位于 https://domain-name-to-ip.deno.dev/domain_name/:id（将 `:id` 替换为你想要查询的域名）。

## 如何在 hosts 文件中加入 IP 地址——域名条目

hosts 文件的位置在不同的操作系统有所不同。在 Windows 中位于 C:\Windows\System32\drivers\etc\hosts；在 Linux 中位于 /etc/hosts；在 macOS 中位于 /etc/hosts。

打开 hosts 文件，将 IP 地址——域名条目添加到文件中。

> [!note]
> 修改 hosts 文件需要管理员或 root 权限。

## 示例

下列的示例首先获取 github.com 真实的 IP 地址，然后向 hosts 文件中添加相应的条目，提升访问 GitHub 服务的用户体验。

1. 访问 https://domain-name-to-ip.deno.dev/domain_name/github.com 获取 github.com 真实的 IP 地址；
2. 打开 hosts 文件，添加 20.205.243.166 github.com（IP 地址以你看到的为准）;
3. 在命令行中输入 `git clone <your repository>`。

## 总结

在访问某个网站提供的服务时，如果发现无法正常访问，可以排查一下是否是因为 DNS 欺骗，如果是，可以尝试本文中介绍的解决方法。

## 许可

This work © 2024-12-1 by familyboat is licensed under Creative Commons Attribution 4.0 International
