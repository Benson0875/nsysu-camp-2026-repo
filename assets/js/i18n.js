const languageStorageKey = 'nsysu-camp-language';
const currentLanguage = (() => { try { return localStorage.getItem(languageStorageKey) || 'zh-Hant'; } catch { return 'zh-Hant'; } })();

const en = {
  '跳到主要內容':'Skip to main content', '主要導覽':'Main navigation', '回首頁':'Back to home', '選單':'Menu', '首頁':'Home', '活動介紹':'Activities', '行程資訊':'Schedule', '贊助合作':'Sponsor with us',
  '五系聯合宿營':'Five-Department Freshman Camp', '光是醫外遇見你':'Meeting You Beyond Medicine', '就用盡了一生機會':'Is Worth a Lifetime',
  '醫科、外文、光電、機電、生科一起出發。從破冰、闖關到晚會與安平探索，在三天兩夜裡，寫下大學第一段回憶。':'Biomedical Science, Foreign Languages, Photonics, Mechanical & Mechatronic Engineering, and Life Sciences set off together. From icebreakers and challenges to the evening show and Anping, we will make our first university memories in three days and two nights.',
  '立即報名':'Register now', '看活動亮點':'Explore activities', '查看三日行程':'View 3-day schedule', '從第一個招呼開始，我們就不再是一個人':'From the first hello, no one is on their own.',
  '參與系所':'Departments', '醫科、外文、光電、機電、生科':'Biomedical Science, Foreign Languages, Photonics, Mechanical & Mechatronic Engineering, Life Sciences', '活動天數':'Duration', '三天兩夜':'3 days / 2 nights', '旅程地點':'Destinations', '中山大學、走馬瀨、台南安平':'National Sun Yat-sen University, Tsou Ma Lai Farm, Anping, Tainan',
  '一群人一起闖關':'Take on challenges together', '把陌生變成同一隊':'Turn strangers into one team', '混合小隊、團隊任務與學長姐陪伴，讓每一次笑聲、每一次互相幫忙，都變成認識彼此最自然的方式。':'Mixed-department teams, shared missions, and guidance from senior students make every laugh and helping hand a natural way to get to know one another.',
  '跨系交流':'Cross-department connection', '在小隊中遇見不同背景的夥伴，開啟新的對話與默契。':'Meet teammates from different backgrounds and start new conversations and connections.', '團隊挑戰':'Team challenges', '大地遊戲與水大地，讓策略、體力和歡笑一起發生。':'Land games and water challenges bring strategy, energy, and laughter together.', '共同記憶':'Shared memories', '夜教、晚會與探索，替大學生活留下一個有溫度的開場。':'Night activities, the evening show, and exploration create a warm beginning to university life.',
  '從集合那一刻開始':'From the moment we meet', '新生就不是一個人':'new students are never alone', '第一天從校園破冰揭開序幕，第二天在走馬瀨全力挑戰，第三天走進安平，把校園、自然與城市串成完整的旅程。':'We begin with icebreakers on campus, take on challenges at Tsou Ma Lai on day two, and explore Anping on day three—connecting campus, nature, and city into one complete journey.', '展開三日行程':'Explore the 3-day schedule',
  '感謝一起成就這趟旅程的夥伴':'Thanks to the partners who make this journey possible', '完整合作資訊':'Full partnership details', '活動補水夥伴提案中':'Activity hydration partner proposal', '餐飲補給夥伴':'Food & refreshment partner', '校園友善店家':'Campus-friendly shop', '活動物資支持':'Event supplies partner', '影像紀錄夥伴':'Media documentation partner', '品牌合作夥伴':'Brand partnership partner',
  '用活動讓陌生變熟':'Let activities turn strangers into friends', '讓五系變成同一隊':'Bring five departments into one team', '從輕鬆的第一個招呼，到全力以赴的團隊挑戰，每一個活動都留有剛剛好的空間，讓你和新朋友一起參與。':'From a relaxed first hello to full-on team challenges, every activity leaves just the right space for you and new friends to join in.',
  '破冰':'Icebreaker', '用輕鬆互動打開第一步，快速記住夥伴，也建立後續活動的安全感。':'Start with easy interactions, remember your teammates quickly, and build comfort for the activities ahead.', '夜教':'Night activity', '在夜晚的情境與小隊合作中，創造最容易被記住的共同經驗。':'Create the kind of shared experience people remember through nighttime scenarios and teamwork.', '大地遊戲':'Land game', '在走馬瀨闖關，結合溝通、策略與體力，讓交流更自然。':'Take on challenges at Tsou Ma Lai, combining communication, strategy, and energy to make connection feel natural.', '水大地':'Water challenge', '用高能量的水上挑戰製造夏日感，也是默契最集中的時刻。':'High-energy water challenges create a summer feeling and bring team chemistry to its peak.', '晚會表演':'Evening show', '一起完成舞台時刻，把白天累積的熟悉感推向最熱鬧的高潮。':'Share a stage moment and turn the familiarity built during the day into the night’s liveliest highlight.', '安平探索':'Anping exploration', '以台南安平收尾，在遊戲與自由活動中留下更生活化的交流時間。':'End in Tainan’s Anping, with games and free time for more relaxed conversation.', '下一步看行程':'Next: view the schedule',
  '從校園出發到安平收尾':'From campus to Anping', '2026/10/09 至 2026/10/11，第一天在國立中山大學，第二、三日前往走馬瀨農場與台南安平。':'From 9–11 October 2026: day one is at National Sun Yat-sen University, followed by Tsou Ma Lai Farm and Anping, Tainan.', '中山大學':'National Sun Yat-sen University', '集合與報到':'Meet-up and check-in', '就寢':'Lights out', '走馬瀨農場':'Tsou Ma Lai Farm', '發車前往走馬瀨':'Depart for Tsou Ma Lai', '晚餐':'Dinner', '走馬瀨 × 安平':'Tsou Ma Lai × Anping', '早餐':'Breakfast', '結業與點心':'Closing and snacks', '安平遊戲與自由活動':'Anping games and free time', '回到中山大學散場':'Return to NSYSU and dismiss',
  '活動地點':'Locations', '國立中山大學、走馬瀨農場與台南安平地區，將依活動節奏完成每次移動與集合。':'National Sun Yat-sen University, Tsou Ma Lai Farm, and Anping, Tainan. Each transfer and meet-up follows the event schedule.', '安全與應變':'Safety and contingencies', '集合點、移動路線、器材檢查與點名皆有明確流程；遇天候或安全疑慮將即時調整。':'Meet-up points, travel routes, equipment checks, and roll calls follow clear procedures. Plans will be adjusted promptly for weather or safety concerns.', '醫療與交通':'Medical and transport', '團隊備有保險、急救用品、飲水與緊急聯絡資訊，每次上下車均會執行點名。':'The team prepares insurance, first-aid supplies, drinking water, and emergency contacts, with roll calls for every departure and arrival.', '查看贊助合作':'View sponsorship opportunities',
  '讓品牌成為':'Let your brand become', '新生回憶的一部分':'part of new students’ memories', '五系聯合宿營集結跨系新生與工作團隊。從物資支援到現場互動，每一份合作都讓這趟旅程更完整。':'Our five-department camp brings together new students and the organizing team. From material support to on-site interaction, every partnership makes this journey more complete.', '合作夥伴':'Partners', '活動物資':'Event supplies', '校園優惠':'Campus offers', '影像紀錄':'Media documentation', '周邊合作':'Merchandise partnership', '抽獎支持':'Raffle support',
  '合作情境示意：讓補水支持成為大家會保留下來的一張合照。':'Partnership mock-up: hydration support becomes a group photo worth keeping.', '品牌同行時刻':'A moment alongside the brand', '一瓶在炎熱活動中被自然拿起的補給，不只支援當下，也會留在新生的第一段共同回憶裡。合作落定後，我們將規劃團隊與贊助品的合影，作為可交付的活動紀錄素材。':'A drink naturally picked up during a hot activity supports the moment and becomes part of a new student’s first shared memories. Once confirmed, we will plan a team photo with the sponsored product as a deliverable event record.', '活動現場自然露出':'Natural on-site presence', '團隊合影素材紀錄':'Team photo documentation', '社群貼文延伸使用':'Extended social-post use', '一起把好感留在校園裡':'Leave a good impression on campus together', '合作店家與品牌可透過社群貼文、活動現場、手冊、物資與專屬優惠，和新生建立真實的第一印象。':'Partner businesses and brands can create a real first impression with new students through social posts, the event, handbooks, supplies, and exclusive offers.', '合作露出':'Partnership visibility', '網站、社群貼文、活動現場、手冊與工作團隊宣傳素材。':'Website, social posts, event presence, handbooks, and organizer promotional materials.', '店家資訊':'Business information', '店名、地址、營業時間、社群連結與活動期間優惠內容。':'Business name, address, opening hours, social links, and event-period offers.', '合作形式':'Partnership formats', '物資贊助、餐飲補給、折扣優惠、抽獎品與活動服務合作。':'Material sponsorship, food support, discounts, raffle prizes, and event-service partnerships.'
};

const titles = { home:'2026 NSYSU Five-Department Freshman Camp', activities:'Activities | 2026 NSYSU Five-Department Freshman Camp', schedule:'Schedule | 2026 NSYSU Five-Department Freshman Camp', sponsors:'Sponsorship | 2026 NSYSU Five-Department Freshman Camp' };

function translatePage() {
  document.documentElement.lang = 'en';
  document.title = titles[document.body.dataset.page] || document.title;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { const value = node.nodeValue; const key = value.trim(); if (en[key]) node.nodeValue = value.replace(key, en[key]); });
  document.querySelectorAll('[alt],[aria-label]').forEach((element) => ['alt','aria-label'].forEach((attribute) => { const value = element.getAttribute(attribute); if (en[value]) element.setAttribute(attribute, en[value]); }));
}

if (currentLanguage === 'en') translatePage();

const languageTools = document.querySelector('.nav-tools');
if (languageTools) {
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'language-toggle'; toggle.textContent = currentLanguage === 'en' ? '中文' : 'EN';
  toggle.setAttribute('aria-label', currentLanguage === 'en' ? '切換為繁體中文' : 'Switch to English');
  toggle.addEventListener('click', () => { try { localStorage.setItem(languageStorageKey, currentLanguage === 'en' ? 'zh-Hant' : 'en'); } catch {} window.location.reload(); });
  languageTools.prepend(toggle);
}
