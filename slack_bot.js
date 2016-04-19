//----------初期設定------------
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}
//-----------------------------


//-----------環境変数---------------
var Botkit = require('./lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

//ちょるるがいやというたびに100追加される変数でチョルルへお金を請求する
var coin = 0;

var map = new Object();

var bot = controller.spawn({
    token: process.env.token
}).startRTM();
//-----------------------------------

terada();
oshima_majime();
oshima_fuzake();
oshima_san();
tyoruru();
nomal();


function terada(){

    controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'はろー');
    });

    controller.hears(['いや'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        coin += 100;
        bot.reply(message, 'あ、いやって言った！ちょるる'+coin+"円な！");
        if(coin == 500){
            bot.reply(message, 'お金稼いであそぶなや！ちょるるクリッカーちゃうで');
        }
    });


    controller.hears(['ぬるぽ'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, 'ぬるぽっていうのはなんかやっちまった時のやつやで♂♂♂');
            bot.reply(message, 'http://cdn-ak.f.st-hatena.com/images/fotolife/s/shichan1222/20131231/20131231180256.jpg');

        });
    });
}

function oshima_majime(){
    controller.hears(['ジェットストリーム'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'ジェットストリームアタック!!!');
                bot.reply(message,'http://stat.ameba.jp/user_images/20140928/08/woodyyasu/5f/28/j/o0773039013080556045.jpg');
            }
        });
    });

    controller.hears(['うどん'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'うどんよりそば！うどんよりそば！');
                bot.reply(message, 'https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11325869_1589202678021619_1652299799_n.jpg');

            }
        });
    });
    controller.hears(['ドミノピザ'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'ぴっっづぁぁああら！！');
                bot.reply(message, 'http://blogimg.goo.ne.jp/user_image/45/ed/daf031fc4efd19615c10b43795e3d0a5.jpg');
            }
        });
    });
    controller.hears(['LANケーブル'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'ケーブル「応仁のLAN」');
                bot.reply(message,'http://gyao.c.yimg.jp/rio/v/b9c2a6685d97dad752160d08d9871d5d.jpg');
            }
        });
    });
    controller.hears(['児玉智詩'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'うどんよりそば！うどんよりそば！');
            }
        });
    });
    controller.hears(['こだまさとし'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'こじま？');
                bot.reply(message,'http://stat.ameba.jp/user_images/20141016/22/luvluvhirorin818/6e/d8/j/o0720040513100165226.jpg');
            }
        });
    });
    controller.hears(['ちょるる'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'いやいやいやいや');
                bot.reply(message,'http://blogimg.goo.ne.jp/user_image/51/23/0e41c2dceea6bcf2ea3bce5b58313e1c.jpg');
            }
        });
    });
    //一つの返答パターン（こんにちはとはい）っていう入力が来たらウルトラハローとかHelloと名前を組み合わせて返答される）
    controller.hears(['CVR','cvr'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'ConVersionRate webサイトを閲覧したユーザーが、ある目的(コンバージョン)を達成した割合。');
                bot.reply(message,'http://www.sitedirector.jp/images/material/013_006_02.png');

            }
        });
    });

    controller.hears(['CTA','cta'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Call To Action バナーなどのweb上の目標を達成させるための要素');
                bot.reply(message,'http://bahamas.ihollaback.org/files/2014/03/calltoaction.jpg');
            }
        });
    });

    controller.hears(['amp','AMP'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Accelerated Mobile Pages GoogleとTwitterで共同開発されている、モバイル端末でウェブページを高速表示するためのプロジェクト');
            }   bot.reply(message,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNqgeb-ZW26dlAUljRm657KrczDElG3PxHRdLPYhrk-Aeg2x1moA');
        });
    });

    controller.hears(['DSP','dsp'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, ' Demand-Side Platform オンライン広告において、広告主側の広告効果最大化を支援するためのプラットフォーム');
            }   bot.reply(message,'https://codezine.jp/static/images/article/6865/6865_fig01.gif');
        });
    });

    controller.hears(['sfa','SFA'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Sales Force Automation 営業支援を目指したシステム。「勘」「根性」「経験」の営業から「科学的」「自動的」な営業に営業を改善するという米国から1995年あたりにやってきた概念');
            }   bot.reply(message,'https://www.kbresearch.com/concept-files/sales-force-automation1.png');
        });
    });

    controller.hears(['ROAS','roas'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Rerurn On Advertising Spend 広告の費用対効果を表す指標の一つで、広告費用1円あたりに対して得られた売り上げ金額を意味する');
            }
        });
    });

    controller.hears(['TGIF','tgif'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Thanks God It’s Friday 飲みたくなるよね金曜日');
                bot.reply(message,'http://countdown.onlineclock.net/countdowns/friday/tgif.jpg');

            }
        });
    });

    controller.hears(['PDCA','pdca'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Plan-Do-Check-Act プランから修正までをやりましょう、というサイクル。大体の人がやれてない。');
                bot.reply(message,'http://www.seo-hikaku.jp/images/flow/pdca_image02.jpg');
            }
        });
    });

    controller.hears(['5フォース'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, '業界の収益性を決める5つの競争要因から、業界の構造分析をおこなう手法のことで、マイケル・ポーターの著書『競争の戦略』で広く学会やビジネス界に知れ渡った。');
                bot.reply(message,'http://keiei-manabu.com/img/5force-analysis.png');
            }
        });
    });

    controller.hears(['AISAS','aisas'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'マーケティングの考え方で Attention（認知・注意）Interest（興味・関心）Search（検索）Action（行動）Shere（共有）の頭文字をとったもの。この循環で消費者は動くという考え方');
            }
        });
    });


    controller.hears(['MVNO','mvno'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Mobile Virtual Network Operator 携帯電話回線などの無線通信基盤を他の通信事業者から借り受け、独自のサービスをくわえて提供する企業のこと');
                bot.reply(message,'http://www.nikkei.com/content/pic/20120420/96958A9C93819499E3EBE2E1978DE3EBE2E6E0E2E3E0E2E2E2E2E2E2-DSXBZO4057153019042012000001-PN1-29.jpg');
            }
        });
    });
}

function oshima_fuzake() {
    //一つの返答パターン（こんにちはとはい）っていう入力が来たらウルトラハローとかHelloと名前を組み合わせて返答される）
    controller.hears(['にしおか','西岡','ゆきな'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'すみこだよ');
                bot.reply(message,'http://stat.ameba.jp/user_images/20130730/22/macchinda/1a/ff/g/o0500033312628512292.gif');
            }
        });
    });


    controller.hears(['ゆっきーな'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'プレゼン！！プレゼンや！！');
                bot.reply(message, 'http://livedoor.blogimg.jp/tarou_hama/imgs/6/a/6a60ae77.png');
            }
        });
    });

    controller.hears(['香川','かがわ'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'かがわ「あいつはちょっとブンデスではナンバー１プレーヤーですね。」');
                bot.reply(message,'https://pbs.twimg.com/profile_images/621336172275458048/86wK2WO_.jpg');
            }
        });
    });


    controller.hears(['ミート君','みーとくん','ミートくん'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, '児玉のあだ名(自称)自分で似合っていると思っている分ややタチが悪い');
                bot.reply(message, 'http://blogs.c.yimg.jp/res/blog-f3-7e/bare_cook/folder/690004/22/5282222/img_0?-1');
                bot.reply(message,'http://stat.ameba.jp/user_images/20150509/09/iichan1963/ab/61/p/o0404040413301352213.png');
            }
        });
    });


    controller.hears(['ぱねぇ','パネェ'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'いやまじぱねぇ');
                bot.reply(message,'http://guutarasyufu30.blog.so-net.ne.jp/_images/blog/_a2c/guutarasyufu30/oda.jpg');
            }
        });
    });


    controller.hears(['スマホケース','すまほけーす'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, '児玉「ラコ◯テは俺に任せて!!」');
                bot.reply(message, 'http://www.fashion-headline.com/imgs/zoom/124377.jpg');
            }
        });
    });
}

function oshima_san(){
    controller.hears(['石田','いしだ','石田翔太','いしだしょうた'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, '顔認証は20分あれば作れる');
    });
    
    controller.hears(['唐沢', 'からさわ','唐沢貴大','からさわたかひろ','ぺっぱー','ペッパー'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, '殺すぞ');
    });
    
    controller.hears(['しらき', 'しらきひろとも','白木','白木宏朋'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'テース');
    });
    
    controller.hears(['浅本', '浅本侑樹','あさもと','あさもん','あさもとゆうき'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'やんなぁ');
    });
    
    controller.hears(['SEO', ' SEO対策','エスイーオー','えすいーおーたいさく'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'Search Engine Optimization　GoogleやYahoo!などのサーチエンジン（検索エンジン）で、特定キーワードで検索が実行されたとき、ホームページが表示される順位を上げるためのさまざまな施策のこと');
    });
    
    controller.hears(['LTV'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'Life Time Value 一人または一社の顧客が、取引開始から終了までのトータル期間中に企業にて対してもたらす総利益のこと');
    });
    controller.hears(['LPO'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'Landing Page Optimization インターネット広告や検索エンジンなどの外部からのリンクで表示される際の最初のページである「ランディングページ」を、そのページの作成者の意図にもっとも適した形に最適化すること');
    });
    
    controller.hears(['WEBマーケティング', 'Webマーケティング', 'webマーケティング', 'ウェブマーケティング'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, '「Web上での売れる仕組み」のことで、ネットマーケティングとも呼ばれています');
    });
    
    controller.hears(['シズル感', 'シズル','シズリング'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, '食欲をそそる音の"sizzleからきている言葉から派生し、ビールの広告などで飲みたくなさせる感覚、といった意味で"シズル感がある"などと使われる"');
    });
    controller.hears(['メルマガ','メールマガジン'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'メールマガジンの略。企業においてのメルマガは販売促進や顧客維持の一助として実施しているケースが多いため、読者をいかに満足させ購読を続けてもらえるかが重要になります。メルマガの登録および解除は自由であるため、発行者にとっては反応が分かりやすい手法でもあります。');
    });
    
    controller.hears(['リスティング', 'リスティング広告','リスティングこうこく'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, '検索エンジンの検索結果ページに、ユーザーが検索したキーワードに関連した広告を、有料で表示するサービスのこと');
    });
    
    controller.hears(['クロール', 'クローラー','クローリング'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'クローラーとは、検索エンジンへのインデックス作業のためにインターネット上に存在する様々なWEBサイトの情報を集めデータベースに登録するプログラムのこと。それを行うことをクロールという。');
    });
    
    controller.hears(['サーチコンソール','Google Search Console','サチコ','webマスターツール','ウェブマスターツール'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'google search console webマスタースールとも呼ばれる。webサイトを運営する以上使ったほうがよいツール。');
    });
    
    controller.hears(['LP','ランディングページ','ランペ'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'Landing Page ユーザーが検索エンジンあるいは広告などから最初にアクセスしたページのこと');
    });
    
    controller.hears(['リンクジュース'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, '自分のホームページから外部のホームページにリンクさせたとき、リンク先のホームページに与えるSEO効果のこと');
    });
    controller.hears(['リードナーチャリング','ナーチャリング','りーどなーちゃりんぐ','なーちゃりんぐ'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, '自社の商品やサービスに興味を示す見込客を獲得することです。狭義ではそのような見込客の個人情報を取得することを表し、広義ではそのように獲得した見込客を、より実際に購入に結び付ける行為を指します。');
    });
}

function tyoruru(){
    controller.hears(['最後に何か言うことない？','最後に何か言うことは？','何か言うことは？','もう終わりだよ'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        bot.reply(message, 'ご清聴ありがとうございました');
        bot.reply(message, 'http://to-a.ru/eFT5mR/img1');
    });

    controller.hears(['USJ','usj'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, '関西ではユニバってゆーねんで。');
                bot.reply(message, 'http://fanblogs.jp/hphphphpvv/file/BHcapcom-summerjam-banner.jpg');
            }
        });
    });




    controller.hears(['OMG','omg','オーマイガー','おーまいがー'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'オーマイガーーーーーーーーーーーーーーーーーーーーーーー');
                bot.reply(message, 'http://s3-ap-northeast-1.amazonaws.com/topicks/article_thumb/31434_original.jpg');
            }
        });
    });




    controller.hears(['テラバイト','てらばいと','寺田'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'ログの貴公子');
                bot.reply(message, 'http://livedoor.blogimg.jp/kettouc/imgs/d/3/d3499018.jpg');

            }
        });
    });




    controller.hears(['滋賀','shiga','しが'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, '琵琶湖琵琶湖琵琶湖琵琶湖琵琶湖琵琶湖琵琶湖琵琶湖琵琶湖琵琶湖');
                bot.reply(message, 'http://www.unn-news.com/news-ritsumei/wp-content/uploads/sites/8/2014/05/656f480211c8a1028cf58739826bf93e.jpg');
            }
        });
    });





    controller.hears(['スマホ','すまほ'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, '歩きスマホは、やめましょう。');
            }
        });
    });




    controller.hears(['CTR','ctr'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Click Through Rateの略。 広告が表示された際のクリックされる割合を表す。クリック数÷インプレッション数で算出可能');
                bot.reply(message, 'http://3d5t2z4fgvhd3pxi5x44kx4d.wpengine.netdna-cdn.com/wp-content/uploads/2013/11/calculating-click-through-rate.gif');

            }
        });
    });





    controller.hears(['CPA','cpa'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Cost Per Acquisitionの略。 掲載した広告を経由してサイトを訪れた人が商品を購入したり有料会員登録をするなど新規顧客の獲得に結びついた場合に、その人数あたりの費用を指す。');
                bot.reply(message,'http://www.swiftutors.com/admin/photos/cost-per-acquisition-formula.png');

            }
        });
    });





    controller.hears(['SaaS','saas'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Software as a Serviceの略。必要な機能を必要な分だけサービスとして利用できるようにしたソフトウェアのこと');
            }
        });
    });





    controller.hears(['CRM','crm'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Customer Relationship Managementの略。情報システムを用いて顧客の属性や接触履歴を記録・管理し、それぞれの顧客に応じた細かい対応を行うことで良好な関係を築き、顧客満足度を向上させる取り組み。');
                bot.reply(message,'http://blogs.plymouth.ac.uk/crm/wp-content/uploads/sites/42/2015/04/CRM-flow-diagram.jpg');
            }
        });
    });




    controller.hears(['ROI','roi'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Return On Investmentの略。投資した資本に対して得られる利益の割合。対象から得られた利益を投資額で割ったもの。一般的には割合の値に100を乗じてパーセンテージとして表す。');
                bot.reply(message,'http://cdn.poweredbysearch.com/wp-content/uploads/2014/01/return-on-investment-formula1.jpg');
            }
        });
    });




    controller.hears(['TL','tl'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Time Lineの略。ツイッターで他人や自分のツイートが表示されている画面のこと。');
                bot.reply(message,'https://s3.amazonaws.com/s3.envato.com/files/61965734/main_preview.png?AWSAccessKeyId=AKIAJYG5ROGJ6X7Z3M6Q&Expires=1775555689&Signature=uJi%2BpLOPYZMpeI8cGI%2Bw2T7TrLA%3D');
            }
        });
    });




    controller.hears(['FTP','ftp'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'File Transfer Protocolの略。インターネットなどのTCP/IPネットワークでファイルを転送するのに使われるプロトコルの一つ。');
                bot.reply(message, 'http://www.deskshare.com/resources/articles/images/ftp-protocol.gif');
            }
        });
    });




    controller.hears(['3C','3c'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Company,Competitor,Customerの３つの頭文字をとって3Cと呼ぶ。自社、競合、顧客を分析するためのフレームワーク');
                bot.reply(message, 'http://www.act-con.jp/wp-content/uploads/kj_clip_image002.jpg');
            }
        });
    });




    controller.hears(['4P','4p'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Product,Place,Price,Promotionの4つの頭文字をとって4Pと呼ぶ。別名マーケティングミックスとも呼ばれ、以上の４つに着目した分析を指す。商品のポジショニングやそれを達成するための手段を決定するときするためのフレームワーク。');
                bot.reply(message, 'http://www.hri-japan.co.jp/term/analysis/images/term-4panalysis.jpg');

            }
        });
    });




    controller.hears(['AIDMA','aidma'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Attention,Interest,Desire,Memory,Actionの頭文字を取ったもので、アメリカのローランド・ホールが提唱した「消費行動」の仮説である。消費者の心理的プロセス・モデル。');
                bot.reply(message, 'http://gms.globis.co.jp/_app/picture.php/25105/w512');
            }
        });
    });




    controller.hears(['SIPS','sips'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'Sympathize,Identify,Participate,Share & Spreadの頭文字をとった、企業のコミュニケーション・プランニングなどにおいて、ソーシャルメディアを積極的に利用している生活者を考える上でのひとつの概念。');
                bot.reply(message, 'http://web-tan.forum.impressrd.jp/files/images/article2011/webantenna/20110226_webantenna_sips2.png');
            }
        });
    });




    controller.hears(['ミスター','大島','おおしま'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {


        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, '誰か日報に返信くださぁぁぁぁぁぁぁい！！！');
                bot.reply(message, 'http://tn-skr4.smilevideo.jp/smile?i=27101503.L');
                bot.reply(message, 'http://www.baitoru.com/files/user/boms/pc/contents/star2/114/image/img02.jpg');
                
            }
        });
    });
}

function nomal(){
    controller.hears(['こんにちは', 'はい'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        controller.storage.users.get(message.user, function(err, user) {
            if (user && user.name) {
                bot.reply(message, 'Hello ' + user.name + '!!');
            } else {
                bot.reply(message, 'ウルトラハロー');
            }
        });
    });

    controller.hears(['(.*)：(.*)','(.*):(.*)','(.*)は(.*)'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        var result = message.text.split( "：" );
        var before = result[0];
        var after = result[1];
        map[before] = after;
        bot.reply(message, 'なるほど【'+before+'】は【'+map[before]+'】なのですねwしばらく覚えておきますーw');
    });    

    controller.hears(['(.*)'], 'direct_message,direct_mention,mention,ambient,ambient,ambient', function(bot, message) {
        var getword = map[message.text];
        if(typeof getword === "undefined"){
            bot.reply(message, 'ぼくはそんなたんごしらないですねーw\nーーーーーー僕の辞書ーーーーーー\nCVR\tCV\tCTR\tCTA\nCPC\tAMP\tAPI\tSaaS\nDSP\tSSP\tCRM\tSFA\nROI\tROAS\tROA\tTL\nTGIF\tFTP\tRRP\tPDCA\nSWOT\t4P\t3C\tPREP\nAIDMA\tAISAS\tAARRR\tSIPS\nMVNO\nPPA\tSEO\tメルマガ\tリスティング広告\nマーケティング\tウェブマーケティング\tクロール\tサーチコンソール\nLPO\nLP\tリンクジュース\n----------なんかの単語？----------\n【16卒の人の名前】\tLANケーブル\tスマホ\nぱねえ\tOMG\t香川\tドミノピザ\tうどん\tいや\n\n\n--------------------------------新しい単語を教えて下さい!!---------------------------\n 登録したい単語：その単語の意味\nで入力してくれれば覚えるんでw\n---------------------------------------------------------------------------------');
        }else{
            bot.reply(message, 'それは'+getword+'ですねー');
        }
    });
}

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}
