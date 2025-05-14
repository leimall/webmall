// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://ftanails.com', // 网站根URL
  // generateRobotsTxt: true, // 自动生成robots.txt
  sitemapSize: 7000, // 每个sitemap的最大条目数（可选）
    // 排除不需要生成的 URL（关键配置）
  exclude: [
    // 支付相关页面（敏感操作，无需搜索引擎索引）
    '/payment/error',
    '/payment',
    '/payment/success',
    // 购物车与结账页（用户会话相关，非公共内容）
    '/cart',
    '/checkout',
    // 用户资料页（包含个人信息，需登录后访问）
    '/profile/address',
    '/profile/orders',
    '/profile/shipping',
    '/profile/myself',
    // 认证页面（登录/注册，无需搜索引擎收录）
    '/auth/signin',
    '/auth/signup',
    // 其他不需要的页面
    '/sales', // 假设是临时促销页
    '/search', // 搜索结果页（动态内容，可按需保留或排除）
    '/readytogo',
    '/404',
    '/500',
    '/403',
    '/401',
    '/400',
  ],

  
  // 配置SSG动态路由（关键！）
  dynamicRoutes: {
    // 示例：从API获取博客文章路径
    '/category/[slug]': async () => {
      const posts = await fetch('https://api.freebooks.ink/api/web/category/list').then(res => res.json());
      return posts.map(post => {
        let trimmedStr = post.title_en.replace(/\s+/g, ' ').trim();
        const id = trimmedStr.toLowerCase().replace(/[\s\/]+/g, '_')
        return { slug: id }
      });
    },
    
    // 示例：产品页面动态路由
    '/product/[id]': async () => {
      const products = await fetch('https://api.freebooks.ink/api/web/product/list').then(res => res.json());
      return products.map(product => ({ id: product.productId }));
    },
  },
  
  // 可选：自定义页面优先级和更新频率
  transform: async (config, path) => {
    // 首页优先级设为1.0
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
      };
    }

    if (path === '/category/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 8.0,
      };
    }

    if (path === '/product/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
      };
    }

    if (path === '/document/') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.5,
      };
    }
    
    
    // 其他页面保持默认
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },
};