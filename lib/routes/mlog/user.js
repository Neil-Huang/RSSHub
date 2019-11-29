const got = require('@/utils/got');
const cheerio = require('cheerio');
const date = require('@/utils/date');

module.exports = async (ctx) => {

    uid = ctx.params.id;
    console.log(uid);

    // 阿里技术
    const url = `https://mlog.club/user/428/articles`;
    const url_host = `https://mlog.club`;

    const res = await got.get(url);
    const $ = cheerio.load(res.data);
    const list = $('.article-item');

    items = [];

    items.push({
        title: `Mess Title`,
        link: `/DIYgod/RSSHub/issues/0`,
        pubDate: 1546272000000,
        author: `DIYgod0`,
    });

    // 返回数据
    ctx.state.data = {
        title: 'mlog-阿里技术',
        link: url,
        item: items
    };

};
