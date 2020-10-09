const got = require('@/utils/got');
const cheerio = require('cheerio');
const date = require('@/utils/date');

module.exports = async (ctx) => {

    // 新会新闻
    const url = `http://www.xinhui.gov.cn/zwgk/xhdt/spxw/`;

    const res = await got.get(url);
    const $ = cheerio.load(res.data);
    const list = $('.play_vedio');

    items = [];
    items = list.map((index,item) => {
        item = $(item);
        atext = item.text();
        
        // 发布时间
        ptime = atext.replace('新会新闻','');
        pubDate = new Date(ptime.substring(0,4)+'/'+ ptime.substring(4,6)+'/'+ ptime.substring(6,8));
        console.log(pubDate)
        return {
            title: item.text(),
            description: `作者：新会广播电视台<br>
                          描述：${item.text()}<br>">`,
            link: item.attr('href'),
            pubDate: pubDate,
        };
    }).get();

    // 返回数据
    ctx.state.data = {
        title: '新会新闻',
        link: url,
        item: items
    };

};
