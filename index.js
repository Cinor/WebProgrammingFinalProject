var markernumber = 0;
var marker;
var img;
var text;
var lat = [25.150024, 25.1325611, 25.1596123, 25.1283, 25.144658, 25.145639, 25.159463, 25.163325, 25.146013, 25.079253];
var lng = [121.7768812, 121.739341, 121.765433, 121.7432, 121.779831, 121.786015, 121.708087, 121.727093, 121.797491, 121.757408];

function start() {
    img = document.getElementById("pic");
    text = document.getElementById("text");
    var button1 = document.getElementById("button1");
    button1.addEventListener("click", click1, false);
    var button2 = document.getElementById("button2");
    button2.addEventListener("click", click2, false);
    var button3 = document.getElementById("button3");
    button3.addEventListener("click", click3, false);
    var button4 = document.getElementById("button4");
    button4.addEventListener("click", click4, false);
    var button5 = document.getElementById("button5");
    button5.addEventListener("click", click5, false);
    var button6 = document.getElementById("button6");
    button6.addEventListener("click", click6, false);
    var button7 = document.getElementById("button7");
    button7.addEventListener("click", click7, false);
    var button8 = document.getElementById("button8");
    button8.addEventListener("click", click8, false);
    var button9 = document.getElementById("button9");
    button9.addEventListener("click", click9, false);
    var button10 = document.getElementById("button10");
    button10.addEventListener("click", click10, false);
} // end function start
function click1() {
    markernumber = 0;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die1.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://www.ntou.edu.tw/files/11-1000-100.php?Lang=zh-tw>國立臺灣海洋大學</a>"
    text.innerHTML+="<p>自1953年創校以來，在歷任校長卓越領導及全體師生積極努力下，從臺灣省立海事專科學校、臺灣省立海洋學院、國立臺灣海洋學院到國立臺灣海洋大學，逐步發展成為一所具有海洋專業特色，教學、研究並重的重點大學。在英國泰晤士報高等教育專刊2011-2012世界大學排行榜中，海大名列全球前四百大，已經發展成為一所具有海洋特色的國際知名學府。</p>"
}
function click2() {
    markernumber = 1;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die2.jpg' width=100% height=100%>"
    text.innerHTML="<a href=https://zh.wikipedia.org/wiki/基隆車站>基隆車站</a>"
    text.innerHTML+="<p>基隆車站位於臺灣基隆市仁愛區，為台鐵縱貫線的鐵路車站，是縱貫鐵路與台鐵西部幹線的起點站，是全台最鄰近商港的鐵路客運車站。設立於清光緒十七年（1891年），與初代縱貫線同時啓用，站體經過四次改建，目前的半地下化車站於2015年6月29日啟用。此外，規劃中的基隆輕軌亦預定以基隆車站為路網中心。由於處於北台灣海岸地帶的中心位置，因此也成為基隆市及附近北海岸地區的交通樞紐，周邊設有數個客運轉運站，提供轉乘至北海岸各地的服務。</p>"
}

function click3() {
    markernumber = 2;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die3.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://tour.klcg.gov.tw/ScenicSpots/Detail.aspx?Guid=C1_376570000A_000048>和平島</a>"
    text.innerHTML+="<p>和平島原名社寮島，位於基隆東北一禹，是基隆港的門戶，同時也是北台灣最早有西方人足跡的地方，亦是基隆最早有漢人入墾的所在地之一。此地早期原為凱達格蘭族的聚落，之後被列為軍事管制區，目前在沿海部份地區已開放設為和平島公園。和平島公園的遊憩重點，就是園區內重要的海蝕地形景觀，位在海岸線旁的奇岩巨石，因長期受迎風面海蝕及風蝕影響，造就了特殊的地形景觀。</p>"
}

function click4() {
    markernumber = 3;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die4.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://travel.network.com.tw/tourguide/point/showpage/577.html>廟口夜市</a>"
    text.innerHTML+="<p>基隆廟口的小吃最早可溯源至日據時代，而今日『廟口』已成為眾所周知的觀光地點，基隆廟口因位於俗稱『聖王廟』的『奠濟宮』前而得名;奠濟宮建於西元1873年，迄今已有100多年的歷史，是名副其實的百年古剎；奠濟宮供奉的是開漳聖王，是唐朝的陳元光將軍，開漳聖王是河南人，在西元686年奉命平定閩粵有功，因此死後封為開漳聖王。</p>"
}

function click5() {
    markernumber = 4;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die5.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://travel.network.com.tw/tourguide/point/showpage/103847.html>槓子寮砲台</a>"
    text.innerHTML+="<p>槓子寮砲台位於基隆市信義區與中正區交界處，處於基隆市信義區的北端，位居海拔150公尺之處；『槓子』一詞取自於凱達格蘭族語『陷阱』的意思，寮字是漢人加上去的，意思是人們群居處；槓子寮砲台依槓子寮山的地形而建，地勢險要，佔地近5公頃，固守八斗子與基隆港北方海域及瑞芳方向之陸路，在民國87年6月30日被台灣省政府指定為『省定古蹟』，也就是『二級古蹟』。</p>"
}

function click6() {
    markernumber = 5;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die6.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://www.rssant.com/spot/one/30/308>八斗子觀光漁港</a>"
    text.innerHTML+="<p>八斗子觀光漁港原名碧砂漁港，位於台灣基隆市中正區的八斗子，是以休閒娛樂為導向的多功能漁港。內除設有漁貨直銷中心供消費者採買，亦設有熟食區可就地將生鮮漁獲交由店家處理。</p>"
}

function click7() {
    markernumber = 6;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die7.jpg' width=100% height=100%>"
    text.innerHTML="<a href=https://zh.wikipedia.org/wiki/大武崙砲臺>大武崙砲台</a>"
    text.innerHTML+="<p>大武崙砲台位於台灣基隆市安樂區，乃控制基隆與淡水間水路及陸路的交通孔道。一方面是防禦淡水經金山進入基隆這條陸路，另一方面砲台制高點可俯視馬鋉溪跟大武崙澳方面海域，兼陸防、海防雙重任務。西元1840年鴉片戰爭，台灣兵備道姚瑩即派兵駐紮大武崙一帶；1884年清法戰爭時劉銘傳也於大武崙附近設防以堵法軍入侵。為歷經19世紀鴉片戰爭與清法戰爭的歷史砲台的歷史建築。</p>"
}

function click8() {
    markernumber = 7;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die8.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://taiwan.net.tw/m1.aspx?sNo=0001105&id=9727>外木山濱海風景區</a>"
    text.innerHTML+="<p>外木山海岸為基隆市轄區僅存最長的天然海岸。自外木山漁港自澳底通村全長約5公里的海岸公路。一側為開闊的海岸景觀，一側為高聳的單面山懸崖，是極富壯麗景色的海岸線。在澳底漁村的沙灘是僅存的沙岸地型，小而美麗，夏日時成為民眾戲水游泳的好去處。夏季的日出是海岸不可多得的美景，坐在岸邊聆聽濤聲，欣賞彩霞萬丈之景，令人心曠神怡。海岸礁岩長年經海水沖蝕，雕塑出奇特的造形，值得民眾深入觀賞體會。</p>"
}

function click9() {
    markernumber = 8;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die9.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://travel.network.com.tw/tourguide/point/showpage/304.html>忘憂谷</a>"
    text.innerHTML+="<p>望幽谷又稱它作忘憂谷，位在八斗子和長潭里之間間一個Ｖ型山谷，是一片翠綠谷地，長年皆綠草如茵、起伏有致，近看八斗子漁港、遠望海中的基隆嶼，令人看了忘卻許多的憂愁，故稱為忘憂。四周海灘寬約20公尺，海灘遍佈海蝕平臺、豆腐岩等地質景觀，中央有一平台式的坡地可容納三、四十人紮營。適合拾貝、捉蟹、游泳、戲潮.....等等，同時也是觀察海洋生物的天然教室。山上因缺乏可遮蔽的樹蔭，白天很少有人久留，但是到了夜晚、山坡成了欣賞漁火的好地點。</p>"
}

function click10() {
    markernumber = 9;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
    img.innerHTML="<img src='die10.jpg' width=100% height=100%>"
    text.innerHTML="<a href=http://tour.klcg.gov.tw/ScenicSpots/Detail.aspx?Guid=C1_376570000A_000095>荖寮坑礦業生態園區</a>"
    text.innerHTML+="<p>荖寮坑位於暖暖區東南方，東勢溪上游海拔350公尺附近。依據文史訪查，「荖寮坑」當地人原稱「腦寮坑」，腦即樟腦，腦寮則為採伐樟木、提煉樟腦之臨時住所，之後「腦寮坑」逐漸轉音為「荖寮坑」。樟木伐盡之後，荖寮坑相繼種植過大菁、茶葉等經濟作物。清領時期，荖寮坑山區岩層中發現煤炭，1870年代開始有大規模開採，後因運輸不便、開採成本較高而逐漸沒落，於1920年代停採。</p>"
}
window.addEventListener("load", start, false);
