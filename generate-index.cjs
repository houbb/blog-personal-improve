const fs = require('fs');
const path = require('path');

// 定义 posts 目录和输出文件路径
const postsDir = path.join(__dirname, 'src', 'posts');
const outputFile = path.join(__dirname, 'index.md');

// 用于存储所有文章信息的数组
const articles = [];

// 递归遍历目录的函数
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (stat.isFile() && path.extname(file) === '.md') {
      // 读取文件内容
      const content = fs.readFileSync(filePath, 'utf8');
      
      // 提取标题
      const titleMatch = content.match(/title:\s*(.*)/);
      const title = titleMatch ? titleMatch[1].trim() : path.basename(file, '.md');
      
      // 计算相对于 src 目录的路径
      const relativePath = path.relative(path.join(__dirname, 'src'), filePath).replace(/\\/g, '/');
      
      articles.push({
        title: title,
        path: relativePath
      });
    }
  });
}

// 生成索引文件内容
function generateIndexContent() {
  let content = `# 文章索引\n\n`;
  
  // 按路径排序
  articles.sort((a, b) => a.path.localeCompare(b.path));
  
  // 按目录分组
  const groupedArticles = {};
  articles.forEach(article => {
    const dir = path.dirname(article.path);
    if (!groupedArticles[dir]) {
      groupedArticles[dir] = [];
    }
    groupedArticles[dir].push(article);
  });
  
  // 生成按目录分组的内容
  Object.keys(groupedArticles).sort().forEach(dir => {
    content += `## ${dir}\n\n`;
    groupedArticles[dir].forEach(article => {
      content += `- [${article.title}](${article.path})\n`;
    });
    content += '\n';
  });
  
  return content;
}

// 主函数
function main() {
  console.log('开始遍历 posts 目录...');
  walkDir(postsDir);
  console.log(`找到 ${articles.length} 篇文章`);
  
  const indexContent = generateIndexContent();
  fs.writeFileSync(outputFile, indexContent, 'utf8');
  console.log(`索引文件已生成: ${outputFile}`);
}

main();