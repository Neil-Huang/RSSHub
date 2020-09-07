const got = require('@/utils/got');
const cheerio = require('cheerio');
const date = require('@/utils/date');

module.exports = async (ctx) => {

    //uid = ctx.params.id;
    //console.log(uid);

    // 阿里技术
    const url = `https://profile.zjurl.cn/rogue/ugc/profile/?user_id=60783525276`;
    const url_host = `https://mlog.club`;
    var user_name = '111';

    const res = await got.get(url);
    const $ = cheerio.load(res.data);
    const list = $('.profile_card');

    user_name = $('title').text();

    items = [];
    items.push({
        title: `test`,
        link: `http://test.com`,
        pubDate: 1546272000000,
        author: `kevin`,
    });

    if (list.length > 0) {
        items = list.map((index, item) => {
            // try {
            //     item = $(item);
            //     // itemPicUrl = `${item.find('a.cover').attr('style')}`.replace('background-image:url(', '').replace(')', '');
            //     itemPicUrl = '';
            //     // 发布时间
            //     ptime = item.find('.header_right-bottom').last().text();

            //     return {
            //         title: item.find('.fold_main-content').text(),
            //         description: item.find('.weitoutiao_body').html(),
            //         link: '',
            //         pubDate: date(ptime),
            //     };
            // } catch (e) {
            //     console.error(e);

            // }

            return {
                title: `error`,
                link: `http://test.com`,
                pubDate: 1546272000000,
                author: `kevin`,
            };
        }).get();
    }
    // 返回数据
    ctx.state.data = {
        title: user_name,
        link: url,
        item: items
    };

};

