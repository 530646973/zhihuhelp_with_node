import _ from "lodash";
import Base from "~/src/api/base";
import AuthorRecord from '~/src/type/model/author'

class Author extends Base {
    /**
     * 获取用户信息
     * @param account 用户账号, hash或主页账号均可
     */
    static async asyncGetAutherInfo(account: string): Promise<AuthorRecord> {
        /**
         * 响应值demo => {"following_count":19,"shared_count":0,"included_text":"","pins_count":2,"is_activity_blocked":false,"is_force_renamed":false,"lite_favorite_content_count":0,"headline":"前私募研究员，公号“商业说”。","participated_live_count":1,"is_bind_sina":false,"location":[{"introduction":"","avatar_url":"https://pic4.zhimg.com/e82bab09c_s.jpg","name":"Kyushu","experience ":"","url":"","excerpt":"","type":"topic","id":""}],"type":"people","following_topic_count":15,"answer_count":65,"is_noti_reset_password":false,"url_token":"asdfkjasdfhwerqwer","articles_count":26,"name":"云松令","gender":0,"is_force_reset_password":false,"is_locked":false,"reactions_count":2,"hosted_live_count":0,"is_followed":false,"is_hanged":false,"user_type":"people","is_unicom_free":false,"is_following":false,"marked_answers_text":"","included_articles_count":0,"education":[{"name":"京都大学","url":"https://api.zhihu.com/topics/19919139","excerpt":"京都大学（英语：Kyoto University，日语平假名：きょうとだいがく），简称京大（きょうだい），是一所本部位于日本京都市左京区的日本顶尖研究型大学，在日本仅次于东京大学的学科齐全、规模宏大的国立综合大学，日本继东京大学之后设立的第二所旧制帝国大学。作为日本国内的最高学府之一，京都大学在全球都享有很高的声望，被誉为“科学家的摇篮”。京都大学创建于1897年，最初名为“京都帝国大学”，二战后，正式更名为“京都…","experience":"","introduction":"京都大学（英语：Kyoto University，日语平假名：きょうとだいがく），简称京大（きょうだい），是一所本部位于日本京都市左京区的日本顶尖研究型大学，在日本仅次于东京大学的学科齐全、规模宏大的国立综合大学，日本继东京大学之后设立的第二所旧制帝国大学。作为日本国内的最高学府之一，京都大学在全球都享有很高的声望，被誉为“科学家的摇篮”。京都大学创建于1897年，最初名为“京都帝国大学”，二战后，正式更名为“京都大学”。迄2017年为止，京都大学已经诞生了9名诺贝尔奖得主、2名菲尔兹奖得主、6名沃尔夫奖得主、4名拉斯克奖得主、4名芥川奖得主、6名京都奖得主、2名日本国际奖得主、日本唯一的达尔文-华莱士奖章得主，以及两位日本首相，其世界500强企业CEO校友数全球第12名，可谓巨擘辈出，其毕业生在科研学术界乃至政界商界普遍拥有举足轻重的地位。京都大学是亚太顶尖大学组织环太平洋大学联盟的成员校，东亚研究型大学协会成员校，日本文部科学省指定的“超级国际化大学计划”A类顶尖校。在2017年发布的QS世界大学排名，京都大学位列全球第36位、日本第2位；在CWUR大学排名，京都大学位列全球第20位、日本第2位；而在ARWU世界大学学术排名中，京都大学位列全球第26位，日本第2位，其在理学领域排名世界第18，生命科学排名世界第20，医学排名世界第49；在数学学科排名世界第17，物理学排名世界第27，化学排名世界第9，可谓是一所名副其实的日本顶尖高等学府。","avatar_url":"https://pic1.zhimg.com/50/a8552d820_s.jpg","meta":{"category":"n_wiki","type":"metapedia","id":1023621155533488129},"type":"topic","id":"19919139"}],"employment":[[{"name":"国立西洋美术馆","url":"https://api.zhihu.com/topics/20341973","excerpt":"","experience":"","introduction":"","avatar_url":"https://pic4.zhimg.com/50/e82bab09c_s.jpg","meta":{"category":"n_wiki","type":"metapedia","id":1023619567959961600},"type":"topic","id":"20341973"},{}]],"id":"6f68e2ecb01d304cd67451f9d647bb2c","favorite_count":2,"voteup_count":2348,"live_count":1,"is_blocking":false,"following_columns_count":13,"is_baned":false,"is_enable_signalment":true,"is_enable_watermark":true,"following_favlists_count":0,"favorited_count":817,"open_ebook_feature":true,"follower_count":399,"badge":[],"infinity":{"is_activated":false,"url":"","show_my_infinity_entrance":false},"description":"前私募研究員，專欄《商业社会》，公号《商业说》","business":{"name":"博物馆","url":"https://api.zhihu.com/topics/19551450","excerpt":"博物馆（museum）是一个为社会及其发展服务的、向公众开放的非营利性常设机构，为研究、教育和欣赏的目的征集、保护、研究、传播并展出人类及人类环境的物质及非物质遗产。——国际博物馆协会对博物馆的定义，2007年（据法文版译出）","introduction":"博物馆（museum）是一个为社会及其发展服务的、向公众开放的非营利性常设机构，为研究、教育和欣赏的目的征集、保护、研究、传播并展出人类及人类环境的物质及非物质遗产。<i>——国际博物馆协会对博物馆的定义，2007年（据法文版译出）</i>","avatar_url":"https://pic1.zhimg.com/50/v2-232eb7493e98bc4d142d6b33b0b38bd8_s.jpg","meta":{"category":"n_wiki","type":"metapedia","id":1023617278507626496},"type":"topic","id":"19551450"},"columns_count":1,"cover_url":"","question_count":22,"url":"https://api.zhihu.com/people/6f68e2ecb01d304cd67451f9d647bb2c","vip_info":{"is_vip":false},"included_answers_count":0,"avatar_url":"http://pic3.zhimg.com/50/38bb8d01012853b47517324149462ff4_s.jpg","following_question_count":136,"thanked_count":209,"is_apply_renamed":false,"independent_articles_count":0}
         */
        const baseUrl = `https://api.zhihu.com/people/${account}`;
        const config = {};
        const record: AuthorRecord = await Base.http.get(baseUrl, {
            params: config
        });
        const info = record;
        return info;
    }
}
export default Author;