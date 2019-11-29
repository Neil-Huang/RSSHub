const got = require('@/utils/got');
const cheerio = require('cheerio');
const date = require('@/utils/date');

module.exports = async (ctx) => {

    uid = ctx.params.id;
    console.log(uid);

    // 阿里技术
    const url = `https://mlog.club/user/${uid}/articles`;
    const url_host = `https://mlog.club`;

    const res = await got.get(url);
    const $ = cheerio.load(res.data);
    const list = $('.article-item');
    const user_name = $('title').text();
    
    items = [];

    // items.push({
    //     title: `Mess Title`,
    //     link: `/DIYgod/RSSHub/issues/0`,
    //     pubDate: 1546272000000,
    //     author: `DIYgod0`,
    // });

    items = list.map((index,item) => {
        item = $(item);
        // itemPicUrl = `${item.find('a.cover').attr('style')}`.replace('background-image:url(', '').replace(')', '');
        itemPicUrl = '';
        // 发布时间
        ptime = item.find('time').last().text();

        return {
            title: item.find('.article-title a').first().text(),
            description: `作者：${item.find('.article-author').last().text()}<br>
                          描述：${item.find('.article-summary').text()}<br><img src="${itemPicUrl}">`,
            link: url_host + item.find('.article-title a').attr('href'),
            pubDate: date(ptime),
        };
    }).get();

    // 返回数据
    ctx.state.data = {
        title: user_name,
        link: url,
        item: items
    };

};
