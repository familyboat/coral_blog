# 如何访问 GitHub

作为一名开发人员，需要经常访问 GitHub 相关的服务，但是在中国直接访问 GitHub 的服务一般是不可能的，通常需要一些额外的工作，例如，连接 VPN。通常 VPN 服务是需要付费的，那是否有一种不需要付费的方式呢？

偶然发现在中国无法正常 GitHub 相关的服务是因为 DNS 污染，既然知道了根本原因，就可以对症下药。

## 访问网站的一般流程

1. 对网站域名进行解析；
2. 根据解析得到的 IP 地址，向目标服务器发起请求；
3. 等待目标服务器的响应；
4. 根据响应内容做进一步的处理。

在中国访问 GitHub 相关的网站时（例如，https://github.com），通常不会得到想要的内容，这是因为在对域名进行解析时，没有解析到域名真正对应的 IP 地址——也就是所谓的 DNS 污染。

## 解析域名的一般流程

1. 在 host 文件中查找域名对应的 IP 地址，如果找到则使用该 IP 地址，如果没有进行下一步；
2. 向域名服务器查询该域名的 IP 地址，使用解析到的 IP 地址。

因此，在某些域名存在 DNS 污染的情况下，可以先以某种方式获取到该域名真正对应的 IP，然后在 host 文件中加入 `IP 域名`条目。

## 如何获取域名真实的 IP

用 [deno](https://deno.com) 运行时提供的 `Deno.resolveDns` 接口实现域名解析的功能，并将该功能以 Web 服务的形式托管在 [deno deploy](https://deno.com/deploy) 上。想要了解更多详情，参见[源码仓库](https://github.com/familyboat/domain_name_to_ip)。

在浏览器中访问 `https://domain-name-to-ip.deno.dev/domain_name/:id`（将 `:id` 替换为你想要查询的域名）获取该域名的真实 IP。

## 如何在 host 文件加入 `IP 域名` 条目

host 文件的位置在不同的操作系统有所不同。在 Windows 中位于 C:\Windows\System32\drivers\etc\hosts；在 Linux 中位于 /etc/hosts；在 macOS 中位于 /etc/hosts。

打开 host 文件，将 `IP 域名`条目添加到文件中。

## 示例

下列的示例，通过添加 github.com 的 `IP 域名`条目，提升访问 github 仓库的体验。

1. 访问 `https://domain-name-to-ip.deno.dev/domain_name/github.com` 获取 github.com 真实的 IP；
2. 打开 host 文件，添加 `20.205.243.166 github.com`（以你看到的为准）;
3. 在命令行中输入 `git clone <your repository>`。

## 总结

在访问某个网站的服务时，发现无法正常访问，可以排查一下是否是因为 DNS 污染。
