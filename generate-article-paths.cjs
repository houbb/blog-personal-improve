const fs = require('fs');
const path = require('path');

// 定义 posts 目录路径
const postsDir = path.join(__dirname, 'src', 'posts');

// 用于存储所有文章信息的数组
const articlesData = {};

// 递归遍历目录的函数
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (stat.isFile() && path.extname(file) === '.md') {
      // 获取相对路径
      const relativePath = path.relative(postsDir, filePath);
      const [folder, filename] = relativePath.split(path.sep);
      
      // 初始化文件夹数组
      if (!articlesData[folder]) {
        articlesData[folder] = [];
      }
      
      // 添加文章信息（去掉 .md 扩展名）
      const htmlFilename = filename.replace(/\.md$/, '.html');
      articlesData[folder].push({
        title: filename, // 简化处理，实际项目中可能需要从文件中提取标题
        url: `/blog-personal-improve/posts/${folder}/${htmlFilename}`
      });
    }
  });
}

// 生成文章数据文件
function generateArticleData() {
  console.log('开始遍历 posts 目录...');
  walkDir(postsDir);
  console.log(`处理完成，共处理 ${Object.keys(articlesData).length} 个分类`);
  
  // 生成 JavaScript 文件
  const jsContent = `// 自动生成的文章路径数据
const articlePaths = ${JSON.stringify(articlesData, null, 2)};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = articlePaths;
}`;
  
  fs.writeFileSync(path.join(__dirname, 'src', '.vuepress', 'public', 'tools', 'games', 'article-paths.js'), jsContent, 'utf8');
  console.log('文章路径数据文件已生成: src/.vuepress/public/tools/games/article-paths.js');
}

// 执行生成
generateArticleData();