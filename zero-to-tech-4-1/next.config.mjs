/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出：构建成纯静态文件（HTML/CSS/JS），可用 nginx 直接服务
  output: "export",
  // 生成目录形式的路径（/text-lab/index.html），nginx 处理更友好
  trailingSlash: true,
};

export default nextConfig;
