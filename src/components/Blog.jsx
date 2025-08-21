import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog data - 9 posts for 3 rows × 3 columns
  const blogPosts = [
     
       
    {
      id: 1,
      title: "東南亞的隱藏寶藏",
      description: "探索那些鮮為人知的絕美目的地，改變你對旅行的觀點。",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?...",
      date: "2024年12月15日",
      readTime: "閱讀時間 8 分鐘",
      rating: 4.0,
      slug: "hidden-gems-southeast-asia",
      author: "Sarah Johnson",
      content: `
        <p>東南亞一直是尋找冒險、文化和自然美景旅人的磁石。雖然曼谷、峇里島和新加坡等熱門地點每年吸引數百萬遊客，但仍有許多隱藏的秘境等待勇於探索的人發現。</p>
        
        <h2>拉賈安帕特的未受破壞群島</h2>
        <p>位於印尼西巴布亞省的拉賈安帕特，被譽為「海洋生物多樣性的皇冠明珠」。這個偏遠的群島由四座主要島嶼和無數小島組成，提供世界上最純淨的潛水與浮潛體驗。</p>
        
        <p>這片海域孕育超過 1,500 種魚類及 75% 已知的珊瑚品種。拉賈安帕特真正特別之處在於其對保育的承諾 —— 當地社群已建立海洋保護區，確保這些水下寶藏能保存給未來世代。</p>
        
        <h2>蒲甘的古老寺廟</h2>
        <p>雖然吳哥窟最受矚目，但緬甸的蒲甘也提供同樣壯麗卻人潮稀少的寺廟體驗。這座古城擁有超過 2,000 座佛教寺廟與佛塔，遍布廣闊的平原。</p>
        
        <p>最佳體驗方式是清晨搭乘熱氣球，當伊洛瓦底江上升起薄霧，金色寺廟逐漸從晨霧中浮現，那畫面將永生難忘。</p>
        
        <h2>芹苴的水上市場</h2>
        <p>越南湄公河三角洲以水上市場聞名，但大多數遊客只會去胡志明市附近的觀光化市場。若想體驗更真實的氛圍，前往芹苴的蔡楊水上市場吧，當地農民世世代代在此以小船交易水果與蔬菜。</p>
        
        <p>清晨抵達是最佳時機，你將看到滿載鳳梨、火龍果等熱帶水果的船隻，交織出水面上一幅繽紛的馬賽克畫。</p>
      `
    },
    {
      id: 2,
      title: "歐洲美食市集：一場味覺之旅",
      description: "從巴塞隆納的博克利亞市場到伊斯坦堡的大市集，探索世界上最熱鬧的美食場景。",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?...",
      date: "2024年12月12日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.8,
      slug: "european-food-markets",
      author: "Marco Rodriguez",
      content: `
        <p>歐洲的美食市集不只是購物的地方，更是滋養社群數百年的文化象徵。每一個市集都承載著當地傳統、時令食材，以及世代相傳的飲食文化。</p>
        
        <h2>巴塞隆納 ─ 博克利亞市場</h2>
        <p>或許是歐洲最著名的市集，博克利亞市場自 13 世紀起就服務著巴塞隆納。位於蘭布拉大道旁，這裡是感官的盛宴。</p>
        
        <p>千萬別錯過新鮮果汁、西班牙伊比利火腿，以及種類繁多的海鮮。繽紛的水果蔬菜攤位雖然適合拍照，但真正的魔力來自於那些令人驚豔的味道。</p>
        
        <h2>倫敦 ─ 博羅市場</h2>
        <p>倫敦的博羅市場是美食愛好者的天堂，匯聚英國及國際料理的精華。始於 13 世紀，它是倫敦最古老的美食市集之一。</p>
        
        <p>別錯過手工起司、新鮮出爐的麵包，以及來自世界各地的街頭美食。維多利亞式的建築更為你的美食冒險增添了壯麗背景。</p>
      `
    },
    {
      id: 3,
      title: "日本單人旅行：完整指南",
      description: "自信暢遊日出之國，首次單人旅行的必備技巧。",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?...",
      date: "2024年12月10日",
      readTime: "閱讀時間 12 分鐘",
      rating: 4.9,
      slug: "solo-travel-japan",
      author: "Yuki Tanaka",
      content: `
        <p>日本是世界上最適合單人旅行的國家之一。安全、便利與獨特的文化，讓它成為獨自探索的理想選擇。以下是首次單人暢遊日本所需知道的一切。</p>
        
        <h2>交通：JR 周遊券</h2>
        <p>日本鐵路周遊券（JR Pass）是高效且實惠的交通方式。持此票可無限搭乘大部分 JR 列車，包括著名的新幹線。</p>
        
        <p>建議在抵達日本前購買，可享最佳價格。7 日票非常適合首次造訪東京、京都、大阪的旅客。</p>
        
        <h2>住宿選擇：膠囊旅館與旅館（Ryokan）</h2>
        <p>日本提供多樣化的住宿選擇，特別適合單人旅行者。膠囊旅館位於市中心，價位親民、安全又乾淨；傳統旅館則能體驗榻榻米、蒲團與公共浴池，享受道地的日本風情。</p>
        
        <h2>文化禮儀</h2>
        <p>了解日本的文化禮儀能大幅提升旅行體驗。見面時鞠躬、進入民宅或餐廳需脫鞋、避免邊走邊吃——這些小細節都展現對當地文化的尊重。</p>
      `
    },
    {
      id: 4,
      title: "阿爾卑斯山的登山冒險",
      description: "體驗壯麗的阿爾卑斯山峰，探索令人屏息的健行步道。",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0494?...",
      date: "2024年12月08日",
      readTime: "閱讀時間 10 分鐘",
      rating: 4.7,
      slug: "mountain-adventures-alps",
      author: "Elena Schmidt",
      content: `
        <p>阿爾卑斯山橫跨八個國家，擁有世界上最壯觀的山景。從著名的馬特洪峰到奧地利的純淨湖泊，這片山脈為冒險者與大自然愛好者提供無窮選擇。</p>
        
        <h2>經典健行路線</h2>
        <p>勃朗峰環山步道（Tour du Mont Blanc）是阿爾卑斯最著名的長程健行路線，全長 170 公里，橫跨法國、義大利與瑞士，沿途風光從冰河谷地到高山草原。</p>
        
        <p>想挑戰短程卻同樣值得的路線，可以選擇霞慕尼至策馬特的高山路線（Haute Route），沿途可欣賞壯麗的冰河美景與高難度地形。</p>
        
        <h2>阿爾卑斯湖泊與山村</h2>
        <p>阿爾卑斯擁有無數絕美湖泊，如斯洛維尼亞的布萊德湖（Bled），島上教堂宛如童話；法國的安錫湖則被稱為「法國阿爾卑斯的明珠」。</p>
        
        <p>別錯過奧地利的哈修塔特（Hallstatt）或瑞士的金梅瓦爾德（Gimmelwald），這些山村至今仍保留傳統的阿爾卑斯文化。</p>
        
        <h2>最佳旅遊時機</h2>
        <p>夏季（6 月至 9 月）適合健行與戶外活動；冬季則化身滑雪與單板的天堂。春秋季人潮較少，色彩繽紛也別具魅力。</p>
      `
    },
    {
      id: 5,
      title: "世界街頭藝術之都",
      description: "從柏林到布宜諾斯艾利斯，探索充滿活力的街頭藝術與牆上的故事。",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?...",
      date: "2024年12月05日",
      readTime: "閱讀時間 7 分鐘",
      rating: 4.5,
      slug: "street-art-capitals",
      author: "Diego Martinez",
      content: `
        <p>街頭藝術已從地下反叛文化轉變為主流藝術表達，重塑全球城市風貌。這些城市擁抱街頭藝術，將其視為合法藝術，並打造露天美術館，呈現文化、政治與人性的故事。</p>
        
        <h2>柏林：塗鴉之都</h2>
        <p>柏林的街頭藝術聞名全球，其中東邊畫廊是柏林圍牆僅存的最長段落，如今覆滿國際藝術家的壁畫。自由開放的態度讓克羅伊茨貝格與弗里德里希斯海因等區域化身為「活的畫布」。</p>
        
        <p>參加導覽，探索隱藏的藝術作品，了解背後的政治與社會意涵。</p>
        
        <h2>布宜諾斯艾利斯：南美的藝術表達</h2>
        <p>布宜諾斯艾利斯擁有南美最具活力的街頭藝術場景。經濟困境催生出強烈的政治壁畫，而巴勒莫與聖太摩等街區則展現多彩的阿根廷文化藝術。</p>
        
        <p>當地甚至推出官方街頭藝術導覽，顯示政府已將其視為文化資產。</p>
        
        <h2>墨爾本：巷弄文化</h2>
        <p>墨爾本著名的巷弄如同街頭藝術迷宮，從大幅壁畫到精緻的模板噴畫應有盡有。這些藝術作品不斷更新，霍西爾巷與 AC/DC 巷是必訪之地。</p>
      `
    },
    {
      id: 6,
      title: "地中海跳島之旅",
      description: "航行於碧藍海水間，發現最美麗的地中海島嶼與祕密海灣。",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?...",
      date: "2024年12月03日",
      readTime: "閱讀時間 9 分鐘",
      rating: 4.6,
      slug: "mediterranean-island-hopping",
      author: "Sofia Papadopoulos",
      content: `
        <p>地中海上散落著數千座島嶼，每座島都有獨特的歷史、文化與自然景觀。跳島旅行就像穿越時光，從史前遺跡到中世紀堡壘，再到現代度假勝地。</p>
        
        <h2>希臘群島：基克拉迪風情</h2>
        <p>基克拉迪群島展現經典的希臘風格：白牆藍頂教堂、懸崖村莊。先到聖托里尼欣賞日落，再去米克諾斯享受夜生活，然後探索隱藏版的佛雷甘德羅斯與西弗諾斯。</p>
        
        <p>每座島都有不同性格——從伊奧斯的派對氛圍，到依舊用驢子運貨的藝術島嶼希德拉。</p>
        
        <h2>巴利阿里群島：西班牙天堂</h2>
        <p>西班牙的巴利阿里群島融合海灘放鬆與文化探索。伊比薩雖以電子音樂著名，但也有世界文化遺產與純淨海灘。馬略卡結合美麗海岸線、山中村莊與絕佳健行路線。</p>
        
        <p>別錯過梅諾卡，它是聯合國教科文組織生物圈保護區，擁有地中海最原始的海灘。</p>
        
        <h2>行程規劃</h2>
        <p>最佳跳島時機為晚春至初秋，渡輪航班最為頻繁。建議購買跳島套票以節省開支，夏季旺季務必提前預訂住宿。</p>
      `
    },
    {
      id: 7,
      title: "極光攝影：攝影師的夢想",
      description: "捕捉極光魔力，專家技巧與最佳取景地完整指南。",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?...",
      date: "2024年11月28日",
      readTime: "閱讀時間 11 分鐘",
      rating: 4.9,
      slug: "northern-lights-photography",
      author: "Lars Andersen",
      content: `
        <p>北極光是大自然最壯麗的奇觀之一。這些舞動的光幕數千年來吸引人類目光，只要掌握正確知識與設備，你也能捕捉到它的神秘之美。</p>
        
        <h2>認識極光</h2>
        <p>極光是太陽帶電粒子與地球磁場、大氣層互動的結果。最佳觀賞期為 9 月至 3 月的黑夜季，春分與秋分前後活動最頻繁。</p>
        
        <p>極光活動遵循 11 年太陽週期，目前正接近太陽極大期，是拍攝極光的絕佳時機。</p>
        
        <h2>最佳拍攝地點</h2>
        <p>冰島是最方便的極光觀賞地，雷克雅維克是北部探險的良好基地，冰河湖提供壯麗的前景。</p>
        
        <p>挪威特羅姆瑟周邊極光機率極高，峽灣倒映的光景令人驚嘆。芬蘭拉普蘭與瑞典北部則有純淨的荒野，光害極少。</p>
        
        <h2>攝影技巧</h2>
        <p>使用穩固的腳架，手動模式搭配廣角鏡頭。建議 ISO 1600–3200、光圈 f/2.8 或更大、曝光 10–25 秒。手動對焦至無限遠，並使用快門線或定時器避免晃動。</p>
        
        <p>在構圖中加入樹木、山脈或建築物，能讓照片更具故事性。天地之間的對比會帶來強烈的視覺效果。</p>
      `
    },
    {
      id: 8,
      title: "沙漠探險之旅",
      description: "從撒哈拉到阿拉伯半島金色沙丘，體驗沙漠的驚險與美麗。",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?...",
      date: "2024年11月25日",
      readTime: "閱讀時間 8 分鐘",
      rating: 4.4,
      slug: "desert-safari-adventures",
      author: "Amira Hassan",
      content: `
        <p>沙漠探險融合冒險、文化與自然之美。從廣袤的撒哈拉到阿拉伯半島的高聳沙丘，這些景觀帶來難忘的體驗，讓我們與地球最極端的環境產生連結。</p>
        
        <h2>撒哈拉：世界最大熱沙漠</h2>
        <p>摩洛哥的撒哈拉沙漠可從馬拉喀什與非斯出發，其中靠近梅祖卡的謝比沙丘高達 150 公尺，日出與日落景色壯觀。</p>
        
        <p>騎駱駝前往柏柏爾營地，體驗遊牧民族的生活。夜晚仰望滿天繁星，清晨伴隨悠揚的祈禱聲醒來。</p>
        
        <h2>阿拉伯半島：奢華沙漠體驗</h2>
        <p>阿聯酋的沙漠探險結合傳統貝都因文化與現代奢華。杜拜與阿布達比提供從四驅車衝沙到高級沙漠度假村的各種選擇。</p>
        
        <p>別錯過滑沙、獵鷹表演與指甲花彩繪。現代城市與永恆沙漠的對比，營造獨特的文化體驗。</p>
        
        <h2>必備小技巧</h2>
        <p>白天穿輕薄衣物，夜晚帶保暖衣。隨身攜帶足夠的水、防曬乳與帽子。尊重當地文化與脆弱的沙漠生態，僅留下足跡，帶走照片。</p>
        
        <p>最佳旅遊時段為涼爽的 10 月至 3 月，白天氣溫較舒適。</p>
      `
    },
    {
      id: 9,
      title: "城市探索：現代建築之美",
      description: "發現世界最具創新城市的建築奇蹟與設計故事。",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?...",
      date: "2024年11月22日",
      readTime: "閱讀時間 6 分鐘",
      rating: 4.3,
      slug: "urban-exploration-architecture",
      author: "Alexander Chen",
      content: `
        <p>現代建築重塑了全球城市天際線，這些地標不僅是建築，更是人類野心、科技進步與藝術視野的象徵。</p>
        
        <h2>杜拜：未來沙漠都市</h2>
        <p>杜拜的天際線展現了無限的建築企圖心。哈里發塔高達 828 公尺，刷新摩天樓的極限。設計靈感來自伊斯蘭建築與沙漠之花，體現了文化與現代的融合。</p>
        
        <p>未來博物館的環形建築外覆阿拉伯書法，象徵創新，挑戰傳統建築概念。</p>
        
        <h2>新加坡：綠色建築先驅</h2>
        <p>新加坡以永續都市建築聞名，例如柏克萊精選飯店（Parkroyal Collection Pickering），綠意面積甚至超越公園。親自然設計改善空氣品質並降低溫度。</p>
        
        <p>濱海灣花園的超級樹結合藝術、建築與環保科技，高達 50 公尺，可收集雨水、產生太陽能並為冷室通風。</p>
        
        <h2>哥本哈根：以人為本的設計</h2>
        <p>哥本哈根建築強調人類福祉與環境永續。由 BIG 建築事務所設計的「8 字樓」讓居民能騎腳踏車從一樓到 11 樓，重新定義城市生活。</p>
        
        <p>該市計劃在 2025 年實現碳中和，驅動建築創新，兼顧美學與永續責任。</p>
      `
    }

  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Adventures</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our journey as we explore the most beautiful places on Earth
            and share insider tips for your next adventure.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-sm">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-sm font-medium ml-1">{post.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
