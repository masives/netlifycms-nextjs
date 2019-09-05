const fs = require('fs');
const frontMatter = require('front-matter');
const blogPostsFolder = './content/blogPosts';

const blogList = fs.readdirSync(blogPostsFolder);

const blogPosts = blogList.map(filename => ({
  ...frontMatter(fs.readFileSync(`${blogPostsFolder}/${filename}`, 'utf-8')),
  slug: filename.substring(0, filename.length - 3),
}));

export default async (req, res) => {
  res.status(200).json(blogPosts);
};
