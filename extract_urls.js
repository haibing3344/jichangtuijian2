import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取sitemap文件
const sitemapPath = path.join(__dirname, 'dist', 'sitemap-0.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 使用正则表达式提取所有URL
const urlRegex = /<loc>(https:\/\/jichangtuijian\.bid[^<]+)<\/loc>/g;
const urls = [];
let match;

while ((match = urlRegex.exec(sitemapContent)) !== null) {
  urls.push(match[1]);
}

// 将URL数组格式化为JSON并写入out.txt
const outputPath = path.join(__dirname, 'out.txt');
fs.writeFileSync(outputPath, JSON.stringify(urls, null, 2), 'utf8');

console.log(`已提取 ${urls.length} 个URL并保存到 out.txt`);