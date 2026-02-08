# One ICPC year of HCMUS-AtCoder (Lamu side)

Hi, mình là Kriz_Wu (hoặc Lamu) đến từ HCMUS, team HCMUS-AtCoder. 

Mình vừa trải qua một kì ICPC đáng nhớ cùng với team tại ICPC World Finals tại Baku. Vì một thành viên trong team chuyển trường nên team sẽ rã vào mùa sau. Mình muốn chia sẻ thêm về hành trình của team mình trong năm vừa qua và chiến thuật của team.


> #### ICPC là gì
> International Collegiate Programming Contest (ICPC) là kì thi lập trình thi đấu dành cho bậc đại học lớn nhất thế giới. Một đội gồm 3 thành viên và 1 máy tính phải giải các bài toán (~12-14 bài) trong vòng 5 tiếng. Kì thi tập trung vào tư duy thuật toán, cài đặt và khả năng làm việc nhóm.

## Giới thiệu thành viên

HCMUS-AtCoder gồm 3 thành viên Kriz_Wu (Lamu, năm 2), DeMen100ns (DeMen, năm 2) và Pannda (Ann, năm 1). 

### Kriz_Wu

https://codeforces.com/profile/Kriz_Wu

Kinh nghiệm 6 năm CP. Nhất ~~thủ khoa~~ VOI (2023). Thế mạnh của mình là ở các bài toán optimization, greedy, hình học, tree, game theory, khả năng nghĩ và phản ứng nhanh, rà bug và đưa ra edge case hộ người khác và toàn diện ở hầu hết các mảng (trừ các mảng mình yếu). Điểm yếu của mình là ở các bài counting, math, number theory, random và heuristics.  

### Pannda

https://codeforces.com/profile/Ann

Nhì VOI + APIO 2024. Điểm mạnh là DS, graph, tree. Điểm yếu là số học, geometry, dần dần ở trong team thì yếu thêm combinatorics/probability tại được gánh rồi. Role: ~~ngồi nhìn~~ du nhập đạo. Quirk: hay typo.

### DeMen100ns
https://codeforces.com/profile/DeMen100ns

Nhì VOI + APIO 2023. Hiểu biết hầu hết mọi thuật toán ở mức tương đối. Điểm yếu là geometry (mù hẳn) và cây (nhẹ). Điểm mạnh là combin/number theory/algebraic problem, heuristic/optimization problem. Đôi khi cũng đóng vai trò là người tính toán đpt, bách khoa toàn thư thuật toán của team.

---

## Trước khi lập team
Lamu và DeMen tham gia ICPC năm trước dưới team HCMUS-PeTalNyKing cùng với Danh (Đồng IMO). Sau vòng Super Regional (APAC24) thì team rã vì Danh chuyển trường. 

Trước khi thi APAC, có chút lưỡng lự sẽ không teamup với DeMen cho năm sau nữa (thấy gà quá, còn không nghĩ tới sẽ đi WF). Cơ bản vì cảm giác không hợp với mình cũng không đặt mục tiêu cao với ICPC. Nhưng sau khi thi xong thì vẫn quyết định đâm đầu thêm 1 năm nữa. Nên suýt nữa thì HCMUS-AtCoder sẽ không có mình mà là một ai đó khác :v.

Lamu và DeMen scout được Ann (lúc đó là đàn em cùng trường PTNK, vừa mới đậu TST/APIO) và quyết định teamup tạo thành đội hình như bây giờ. Vì từng gặp nhau từ trước nên dễ làm quen với nhau hơn;

## Những buổi train đầu tiên

Team bắt đầu train từ hè 2024, lúc đấy khá rảnh nên team virt liên tục để tăng chemistry.

Vạn sự khởi đầu nan. Các virtuals đầu tiên của team, theo mình đánh giá, hơi "thảm họa". 3 người sẽ chọn ra 3 bài, mỗi người nghĩ 1 bài, cuối cùng ai ra bài nào thì giành máy vào code. Lúc đó thì khá là "luật rừng". 

Sau vài buổi như vậy, tụi mình cũng xác định được strength và weakness của nhau:
- Ann code khỏe nên gần như thành "máy code" của team lúc đó, chúa imple. Ann khá giỏi trong các bài cần tư duy, observations, thường hay đưa ra một số lemma cho các bài toán.
- DeMen thì có nền toán vững, kết hợp với một số kiến thức sâu về combinatorics, polynomial, number theory. 
- Lamu thì giỏi greedy, game, graph flow, tree dp, computational geometry hoặc các bài có idea "lạ" nên sẽ cover phần đó. Mình có khả năng thích ứng và rà bug hộ người khác nên sẽ support nếu có ai đó đang bug.  

Từ đó thì team có thêm các interaction có ý nghĩa hơn:
1. Các bài trung bình khó phải được một người khác "confirm thuật" thì mới được vào code
2. Role "monitor" - 2 người cài cùng lúc, một người cài, một người rà bug live.
3. Dựa vào tag để delegate bài cho hợp lý
4. Quản lý progress / queue trong contest.


## Quản lý
Một thứ khá mởi mẻ so với các team mình từng tham gia. Team mình luôn có một mindset phải quản lý tất cả mọi thứ lại, để sau này có data để phân tích.

Inspired từ coach GATECH (Chenjb), team sẽ log lại mọi buổi virtual các thông tin như bài nào được giải, ai giải / cài bài đó.

![image](https://hackmd.io/_uploads/HkD-20wBWl.png)
*Có 2 cột có label thành viên, bên trái là solver, bên phải là implementer. Nhiều người có thể solve, implement một bài.*

## The start

Do có mấy buổi virtual quá tệ, team quyết định họp bàn chiến lược và tạo ra một bộ formal rule ngay trước vòng National. 

Một điều khá khác biệt so với các team ICPC của mình trước đây.

### Start of the Strategy (Strat AtCoder 1.1)

##### Goals
Trước khi các kì thi diễn ra, team đều sẽ đặt ra mục tiêu và baseline cần đạt cho kì thi đó:
- Baseline: thứ mình chắc chắn phải làm được trong bắt cứ hoàn cảnh nào.
- Goal: thứ mình muốn đạt được, và **có khả năng đạt được** trong hoàn cảnh tốt nhất. 

##### Quy ước
Bài sẽ được phần thành 3 loại chính:
(1) - Bài \*800, bài nghĩ trong 10', cài trong 15'
(2) - Bài nghĩ trong 30', cài trong 30'
(3) - Nhiều người làm chung thì <= 90ph, cần sự phối hợp của nhiều người

##### Thời gian

Chia làm 3 phase:

**Phase 1: Opening [0h, 2h)**

1. Chia problemset thành 3 phần, chia cho mỗi người.
2. Đọc đề phần mình.
3. "Skim and scan", detect bài (1) và gắn tag. Có thể dựa vào tag để delegate bài cho người khác.
4. Nếu một người đang trên máy và chưa đọc hết set bài của họ, đẩy các bài chưa đọc cho 2 teammate còn lại.

**PHASE 1 GOAL**: 
    - AC hết (1)
    - (2) và (3) phải được đọc bởi ít nhất một người.
    - Push (2), (3) vào queue càng nhiều càng tốt.


**Phase 2: Mid phase [2h, 4h)**

1. Các bài (2) và (3) phải được đọc bởi mọi thành viên của team.
2. Nếu |queue| >= 3, cần có 2 người pop bài, 1 trên máy, 1 code giấy.
3. Nếu |queue| <= 2, sẽ có một người pop bài, (hoặc 2 nếu bài được pop có độ khó (3)).


**FINAL PHASE 2 GOAL**: 
    - Push all (2) vào queue
    - Cố pop hết các bài (2) trước freeze
    - Cố push nhiều (3) vào queue nhất
    - Các bài chưa giải được phải được một người nghĩ trong 20-30'


**Phase 3: Freezing phase [4h, 5h)**

1. Pop mọi bài trong queue, giải phóng người
2. Nếu |queue| >= 2, toàn team dồn lực debug, pop queue
3. Nếu |queue| = 1, chia ra 1-2 hoặc 3-0 (cài - nghĩ)
4. Ở phase này, các bài loại (3) phải được nghĩ bởi ít nhất 2 người
- Trường hợp đặc biệt:
    + Nếu ăn pen và thua 1-2 bài, ưu tiên debug kỹ trước khi nộp, giữ lợi thế pen
    + Nếu cần AC 2-3 bài, có thể break luật 3.4

#### Other notes


Khi gặp bug:
1. **Đọc lại đề bài** :)))
2. Nếu queue còn bài:
    2.1. In code
    2.2. Code bài tiếp theo trong lúc bài được debug
2.3. Khi máy trống thì chạy vào stress
2.4. Khi ra được bug:
2.4.1. Nếu bug dễ -> "cho tui xin 5s"
2.4.2. Nếu bug khó (sửa nhiều), ưu tiên làm sau bài đang cài. (nếu quá sai thì phải quay lại quy trình code giấy)
3. Nếu queue hết bài:
3.1. Debug mắt (should be 5-10 mins)
3.2. Nếu không ra -> stress

*Hết cứu quá thì đi cầu cứu viện :v*

Principles:
- Penalty luôn quan trọng
- Hệ thống các bài để quản lý
- Thử một vài test tay trước khi nộp!!!
- If you keep getting WA on a problem, let it be for a while and try to solve another problem. Phần lớn thời gian của team sẽ nằm trong nhà vệ sinh
- Do not hesitate to tourist, bài toàn <=15ph
- Use good judgement to cầu cứu. Chỉ cầu cứu sau khi đã tự debug một mình


##### Start of the Traditions

Nếu mọi người để ý thì team mình mang khá nhiều mascot đi thi. Traditions này chắc là bắt đầu từ mình. Ở vòng national mình muốn mang con gì đó lên nhìn cho đẹp nên mang thêm đèn con gà này theo, thế là nó đã thành linh vật đầu tiên của team.


![chicken](https://hackmd.io/_uploads/rk9qcz8wWl.jpg)


Con gà đã đồng hành với mình (và team mình) trong suốt tất cả các kì thi icpc, 

Từ đó, sau một khoảng thời gian team lại tậu thêm vài mascot nữa. 

![fumo_mascot](https://live.staticflickr.com/65535/54766963405_f35e619d0d_o.jpg)

Nhờ có những con fumo nên team cũng được dịp giao lưu với các team khác.

![fumofumo](https://hackmd.io/_uploads/ryKHJiAH-g.jpg)

(Friendships with Gyerantak, N-Dimensional Sum, 7 is our favourite number and NYCU_MyGO!!!)


### ICPC National


Như đã bàn từ trước, Ann template, Lamu queue và DeMen chia bài. Các bài được chia đều cho DeMen(ABCD) - Ann(EFGH) - Lamu (IJKL).

DeMen đọc và có thuật cho bài Aa (AC A 11'). Vào tốn 5 đấm, mình nhớ là ngộ nhận thuật hơi nhiều. Biến team mình thành top các team penalty cao nhất cho bài A (bài dễ nhất). Sau đóm DeMen đã sửa lỗi bằng 1 đấm AC bài D (AC D 17'). 

Sau đó An vào cài H (AC H 20') và mình vào cài K (AC K 28', 2 đấm). Sau bài K, mình thấy đã có người ac I nên nhảy qua bàn bài đó chung với DeMen (AC I 54'). 

Sau bài I, team chính thức bước vào phase 2. Mọi người bắt đầu đưa đẩy bài cho nhau, chia người ra để insight các bài còn lại. 

Nhìn vào standing lúc đó có F và G nên tụi mình cũng tập trung hơn vào 2 bài đó. Ann ra công thức bài F từ đầu giờ nhưng không biết cách cài sao cho nhanh. May có DeMen phụ để optimize phần đấy (AC F 133'). Trong lúc đó, mình với Ann cũng bàn với nhau một chút bài G và ra được idea. Ann đẩy cho mình phần cài đặt để chạy qua F với DeMen (AC G 173'). 

Sau khi nháp tay ra vài trường hợp, mình propose một thuật cho Ann và nhờ Ann code trâu để check trâu. Sau đó thì mình cảm giác tự làm được nên tự đảm nhiệm bài L, đẩy 2 người kia qua các bài còn lại. (AC L 220', 2nd solve)

Sau bài L, team quyết định đổi qua phase 3. Nhìn về standing lúc đó, có các bài B, C, E, J (B với C có vẻ dễ hơn). Team ngồi họp lại để chọn một bài all-in. Và thế là tụi mình quyết định chọn bài E, một bài planar graph + geometry. Dù đã ra được idea cốt lõi nhưng việc cài đặt và xử lý trên planar graph, chưa ai trong team từng cài nên team đã dành 80' còn lại suffer trong việc cài đặt và không AC. Kết thúc với 8 bài, top 2 National.
![image](https://hackmd.io/_uploads/HJqwvgUPbl.png)

Đây là lần đầu team áp dụng strat và cảm thấy có hiệu quả khá rõ rêt, mọi người bắt đầu ăn ý với nhau hơn và có sự tương tác nhiều hơn. Đây là bước đệm cho sự phát triển của strat AtCoder.

### Jakarta trip

#### Day 0: Travel day

Lần đầu tiên team được ra nước ngoài thi nên khá háo hức. 

![image](https://hackmd.io/_uploads/rJ28LsCrWg.png)

Khách sạn khá nhiều tiện nghi. Họ có bàn bida, bóng bàn, bể bơi, sân bóng rổ, sân bóng đá. Sau khi nhận phòng mình với Ann ra test phòng gym.

![image](https://hackmd.io/_uploads/ryKvSiRBbl.png)


Tối ăn ở [Tsuka Ramen](https://maps.app.goo.gl/LSUENjLLfnmzATWQ7). Quán không ai biết nói tiếng anh nên cần google dịch. Ramen phiên bản Indo và ăn khá ngon, mình reccommend các team nếu có đi thi ở Jakarta có thể ghé qua.

![tsuka-ramen](https://hackmd.io/_uploads/BkyG9_SDWe.jpg)



#### Day 1: Rehearsal day

![binus](https://hackmd.io/_uploads/SJ5q__Svbg.jpg)


![image](https://hackmd.io/_uploads/S1Hzwi0HZg.png)
First impression là trường khá to. Trong trường còn có thang cuốn để di chuyển.

![image](https://hackmd.io/_uploads/ByeRaUi0Bbx.png)
Bên Indo người ta tổ chức khá chuyên nghiệp.


Vì là team nước ngoài nên sẽ có một bạn escort dẫn đi trong suốt quá trình thi. Bạn escort team mình khá nice, bạn còn dẫn bọn mình vào thư viện trường Binus.

Vào lúc team photo, Ann suggest làm cái gì đó "lạ". Idea ban đầu là làm hình ngôi sao, tính một hồi thì không đủ người nên đổi thành hình tam giác cho đơn giản. 

![jakarta-pose](https://hackmd.io/_uploads/SkAIOOSw-g.jpg)


Khu vực thi được tách thành các phòng máy. Phòng có style khá giống i52 ở HCMUS nên tạo cảm giác khá quen thuộc. Trong kì thi không cho xài CodeBlocks, một IDE quen thuộc với team mình nên xài vscode khá gượng.

Trái với kì Regional trước đó, tâm lý trước khi thi của mình khá thoải mái. Vì mình tin đồng đội của mình và tự tin phong độ của team lúc đó. Mọi thứ khá thuận lợi để bước vào kì thi.

#### Day 2: Contest day

Trong lúc ăn sáng, Ann với mình uống thử lon cold brew Starbuck mới mua tối hôm trước. Lúc uống thấy có vị lạ lạ, thế là cả 2 đau bụng trước khi thi :<. 

Trước lúc thi Ann rủ mình đi hít đất cho nóng người. Từ buổi đó, hít đất trở thành truyền thống của team mình luôn. 

Bắt đầu kì thi, dựa vào strat, mình viết tờ queue, Ann vào máy viết template.cpp, DeMen thì ngồi tách đề. Mình được phân set bài J-K-L-M. 

Mình đọc M vào và ra được idea. Trong lúc nháp M thì Triệu vào máy và AC A (13'). Sau đó mình chạy vào cài M. Do đã nháp kĩ nên mình cài khá nhanh, AC M(24'). Lần đầu first solve trong một kì thi.

Sau đó, Ann lấy máy và cài C. Do các bài đầu dễ nên team speed qua khá nhanh (AC C 33').

Mình đọc xong J,K,L và không biết làm bài nào. Qua đọc I của Ann và ac I (61'). 

Tại đây có thể nói là đã kết thúc phase 1, mọi người bắt đầu vào phase 2, trao đổi bài với nhau nhiều hơn.

Mình có ra idea F nhưng idea sai. Bài F nhận thấy cũng khá căng (loại(3) và hiện chưa có ai làm) nên tạm thời skip.

Sau đó, do thấy std_abs ac B nên mình chạy qua với Triệu đấm B, trong lúc đó thì an cài H. 
(AC B 147', AC H 139'). 

Sau đó thì mình quay lại sống mái tiếp với bài F. Nhưng vẫn chưa ra được gì cụ thể. Ann có nghĩ ra được một hướng cho G nên Ann với Triệu invest vào G. Còn mình tách 2-1 và được đẩy bài E. Mình hơi bất ngờ với E vì là một bài dễ nhưng lại bị hầu hết team bỏ qua. Team mình sau đó đều cài trơn tru cả hai bài. (AC G 215', AC E 253'). 

Sau khi ac E thì mình lại tiếp tục với F. Với bản thân mình thì mình đã nghĩ F được 1-2h rồi. Do là phase cuối nên Triệu với Ann vào và support mình F luôn. Tụi mình chia nhau, một người code trâu (DeMen), 1 người tạo edge case (Ann) và mình ngồi nghĩ lại idea bài F. Sau một hồi thì mình mới thấy được pattern của bài. Dù chưa được chứng minh chặt chẽ nhưng lúc đầy gần hết giờ rồi nên cứ "thử" và may mắn AC F (288'), được một pha hú hét khắp phòng. 


*Trong contest, tụi mình có dùng trick mà team hay nói vui là "trick bài L". Nhìn thấy bài L là một bài khá khó và rối, tụi mình nộp 2 đấm printf("Hello World"), một trước freeze, một sau freeze để các team khác đổ xô đi làm bài đó ;).*

Khúc cuối còn dư 15-20', team ngồi nghĩ J với L nhưng không có tiến triển gì mấy. Team mình dứng lại với 9 bài và 1273 penalty.

Kết quả cuối cùng team được top 3 Jakarta. 
![image](https://hackmd.io/_uploads/rJtaaiCHWl.png)

Dù không được kết quả mong đợi nhưng mình thấy team mình đã cố hết sức. Khúc sau Ann có nghĩ ra J nữa và mới biết J cũng là một bài dễ ... Đây cũng là lần đầu team mình được gold medal nên cũng khá vui.

Vì first solve nên còn được thêm 3 cái ly
![image](https://hackmd.io/_uploads/SJ6z0jCS-x.png)

Sau bế mạc, ban tổ chức cho ăn tối tại sảnh và chuẩn bị xe đưa các team về. 

![image](https://hackmd.io/_uploads/BJWBCiRBbx.png)
Quà mình tặng cho bạn escort.

Sau khi về thì mình rủ Ann với DeMen đi dạo chơi Jakarta. Tụi mình bắt xe ra một cái mall khá to. 

Có một sảnh của mall tổ chức fes pokemon nhìn khá hay.
![image](https://hackmd.io/_uploads/SyQOAoASWl.png)
![image](https://hackmd.io/_uploads/H1wOAsRSZx.png)

Cảnh Jakarta về đêm
![image](https://hackmd.io/_uploads/HJsu0iCrbe.png)

Do lúc đó muộn nên mall chuẩn bị đóng cửa, không mua được gì. Khúc sau tụi mình còn khá suffer với việc đặt xe vì mall như mê cung và tài xế không biết nói tiếng anh. Kết thúc chuyến đi.


#### Day 3: ~~Excursion~~ Departure day

Thật ra ngày 3 là ngày excursion nhưng vé tụi mình bay sáng hôm đó nên không đi được. Mình được nghe bảo là đi Disneyland bến đó. Khá tiếc vì không đi được. 

Kết thúc chuyển đi, bọn mình bàn với nhau chuyến lược để chuẩn bị cho vòng Regional tiếp theo tại Hanoi. 
<!-- 
---
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Dưới đây là nháp.
Just random thoughts.

 -->

<!-- ## Một chút về bản thân
Hi, mình là Vũ Quốc Lâm, thường team mình hay gọi mình với cái tên là Lamu nên mình sẽ lấy tên này trong phần sau của blog.

Team HCMUS-AtCoder bao gồm 3 thành viên, Võ Khắc Triệu (DeMen100ns), Lamu (Kriz_Wu) và Lê Nguyễn Hữu An (Ann / Pannda). 

Lamu với Triệu đã từng ở trong team HCMUS-PeTalNyKing vào hồi năm nhất. Chia sẻ một chút về chuyện năm trước. Team mình đã có một cơ hội suýt soát mém đậu ICPC 48th World Finals Astana, nếu không vì có 2 team cùng trường đứng ngay trước mình. Lúc đó, tụi mình cũng hơi buồn vì dù có thứ hạng cao và đủ để đậu nhưng tụi mình đã không đi được.  -->
<!-- 

Có một điều khá vui là tất cả các đội mình đã tham gia thi ICPC cùng đều là full cựu học sinh NK. Cái này chắc cũng chỉ là tình cờ, một phần cũng vì mình và DeMen thấy thoải mái khi làm việc với những người mình đã quen trước đó, nó sẽ dễ làm việc hơn. -->
<!-- 
Do team được lập khá sớm, tụi mình đã mời Ann đi train team từ trước khi Ann nhập học HCMUS. Tụi mình tin rằng việc train và tập virtual trước sẽ giúp team mình có synergy và chemistry với nhau hơn, một điều tối quan trọng trong kì thi như ICPC. -->

<!-- 
Các contest ban đầu, mình đánh giá, nó như một nồi lẩu thập cẩm, một khu rừng rú, chẳng có luật lệ hay nhịp điệu gì cả. Mình sẽ gọi khoảng thời gian đó là "Luật Rừng" (cái này mình mới nghĩ ra thôi chứ không involve gì 2 đứa kia).

Trong "Luật Rừng", có 3 con khỉ, nhưng 3 con khỉ đó phải share cho nhau một cái cây, nên khi một con muốn dùng cây, nó sẽ ngồi tranh với mấy con khác, đi đập lộn để có được cái cây đó. Ok đó là description của mình.

Specifically, nó là 3 người ngồi nghĩ riêng, không ai đụng ai, ai có sol gì thì ngồi vào máy, nếu máy không trống thì ngồi chờ hoặc tranh nhau với thằng kia (khá giống HCMUS-PeTalNyKing, nhưng thay vì 2 người tranh thì thành 3 người tranh). 
 -->
 
<!--  
## HCMUS Training Camp

Đây là một trại training camp private dành riêng cho các sinh viên HCMUS để chuẩn bị cho các kì thi sắp diễn ra (ICPC và OLP Sinh Viên). 

Trong tại training camp này, gần như rất ít các buổi mà có mặt đủ 3 thành viên để tham dự train (vì một số lý do cá nhân). Để thay thế cho sự thiếu vắng ấy, chúng ta có một substitute chất lượng cũng từ PTNK (Icelast ᕙ(  •̀ ᗜ •́  )ᕗ) Husuuuuuuu!!!!!


Ở mỗi contest là một team composition khác nhau :))

- Round 2 (Ice, Kriz, Ann)
- Round 4 (Kriz, Ice, DeMen)
- Round 5 (Kriz, DeMen, Ann)

## Contest log

Cái này tụi mình mượn ý tưởng từ coach của team GATECH (Chenjb). Sau mỗi kì thi / virtual contest, tụi mình sẽ ghi chú lại một số thông tin của kỳ thi hôm đó. Các thông tin chủ yếu là:
- Có bao nhiêu bài
- Team giải được bao nhiêu bài
- Đứng hạng mấy trong contest
- Ai là người ra idea bài đó
- Ai là người đã cái bài đó

Khúc sau tụi mình còn sử dụng thêm tool Xeppelin để theo dỏi kì thi, sẽ được nói ở các phần sau.


Ai muốn biết thêm về cách tụi mình ghi contest log thì có thể xem ở phần dưới

> Spoiler

![image](https://hackmd.io/_uploads/SkhuQcGH-l.png)
Đây là một trong những contest đầu tiên tụi mình làm

- Upsolved 
- No one ૮(˶╥︿╥)ა
- Pannda ʕ•ᴥ•ʔﾉ♡
- Demen100ns ฅ^•ﻌ•^ฅ
- Kriz_Wu ( ͡⎚ ω ͡⎚)
- Icelast ᕙ(  •̀ ᗜ •́  )ᕗ


## Quân sự


Trong đợt tháng 9, mình khá tiếc khi phải đi học quốc phòng và không train được với team mình trong suốt một tháng, và lúc đó icelast sẽ là người thay thế mình.

Cơ bản ở đây không có gì đáng nhắc tới, chỉ là để vào cho vui.


## ICPC HCMUS

Sau đợt quân sự là ICPC vòng trường. Năm ngoái đạt hạng 2, nên năm nay Lamu sẽ quyết tâm đạt hạng 1, chinh phục giấc mơ vô địch ICPC HCMUS bấy lâu nay.

Sorry mình cũng quên kha khá phần trong này nên chỉ nói mấy phần vui vui thôi.

Mới vào, team clear khá nhanh mấy bài dễ (*800)

Sau đó, Ann ra được A và chiếm máy cài (nhắm First Solve). Tuy nhiên bị bug. Trong lúc An bug, Lamu và DeMen ngồi clear hết mấy bài còn lại. Lamu có chạy lại phụ Ann debug nhưng chưa xong, Võ cũng lại phụ. Rốt cuộc một hồi mới biết là bug do để INF chưa đủ to :vvv (một số bài hình, mình cần để INF lên đến 6e18 lận). Tụi mình nhận ra được sau 6 đấm. 

![image](https://hackmd.io/_uploads/BkuwI9MB-g.png)

Mấy bài còn lại thì lại khó và không đủ thời gian, nên mình dừng lại ở top5 trường :cried:

## ICPC Southern

Mình sẽ bỏ qua L, M (for some reason)

5' E: Trong lúc mình vẫn đang ngồi đọc đề thì Ann vào và clear bài đầu tiên (*800).
17' A: DeMen

Sau khi đọc K, mình tóm đề và idea cho Ann vì Ann là người code chắc tay nhất team. Sau đó mình chạy qua bài khác. Somehow, bài này mất đến 4 đấm và có lúc Lamu phải chạy qua để debug giùm. 58' K

Khoảng thời gian sau đó DeMen cài J nhưng bug. Mình với Ann ở ngoài thì có bàn chung với nhau, ra được C. Sau đó, Ann cũng ra idea cho H khá nhanh. Trong lúc cài C và H, DeMen cũng debug xong J 
(84' C, 108' J (3 đấm), 114' H (3 đấm))

Bài sau là F, no comment, just implementation, bài này cài khá rối nên mất khá lâu (174' F), và đương nhiên là task của Ann.

233' G: team mình ra được công thức cho bài này từ hồi đầu giờ, nhưng rất sợ TLE. Mãi đến khi DeMen yap cái x2 +1 trick thì mới thở qua được bài này.

251' H: 
"Bài này MO 4d" -- DeMen
"Em vét bài này" -- Ann
Và team mình AC bài này bằng thuật brute :+1: 

Kết thúc contest, mình khá thất vọng vì mình chẳng được cài bài nào cả, cũng chẳng có ra idea một bài nào một cách hẳn hoi. Mình khá buồn vì mình dành thời gian nghĩ mấy bài L với M nhưng không ra :sadge:

Coi như là contest 2 người (Ann + DeMen) =)))


## IEEExtreme 18.0

Đây là một kì thi do IEEE tổ chức. Thể thức khá giống ICPC nhưng là 24h.

Để tham gia kì thi này, mình rủ 2 teammate đến qua nhà mình ăn nằm ngủ nghỉ tại đó luôn. Tụi mình dành 24h chỉ để ngồi cp (contest rất mệt nhưng cũng rất vui)



Đây cũng là contest để giúp team mình connect được với nhau tốt hơn. (Dù trong lúc thi, mình bỏ 2 teammate mình để đi chơi concert 3h (nice)) Biết và hiểu nhau nhiều hơn. Sau khi kết thúc, tụi mình còn ngồi bàn lại với nhau về strength và weaknesses của mỗi người để hiểu nhau hơn.

Kết quả IEEEXtreme là top3 (thua HLD cùng trường). Do siêu cay vì thua HLD, tụi mình quyết định thức tiếp thi luôn ICPC Northen dù không có kế hoạch từ trước

![image](https://hackmd.io/_uploads/rkp7hcMHbe.png)

Contest như này



## Sự ra đời của Strat

Ok đến phần hay rồi, mình thấy cái mà giúp cho team mình nổi trội hơn các team khác dù bị đánh giá thấp hơn, đó là sự kỷ luật, và tụi mình luôn tuân theo một set các luật nhất định, được ghi rõ ràng ở trong Strat.


Strat được lập ra ngay trước ICPC National, vì một buổi virtual nhưng thấy thi rất nát và không giúp ích được gì. Thế là, tối hôm ngay trước thi National, tụi mình call nhau lại và quy ước ra một bộ strat dài 2 trang A4 và quyết định thử nghiệm nó tại ICPC National.


## Strat ver 1.1
Đây là strategy của team dùng cho các kì thi từ regional trở xuống.

## Nghệ thuật của việc stalking
"Biết mình biết ta trăm trận trăm thắng" --- Ai đó

Mình nhớ có một blog vnoi có nói về cái này, nếu các bạn muốn tìm hiểu thêm thì có thể đọc trong blog vnoi wiki

Như định nghĩa "stalk"

Trước hết, ta có một số thông tin cơ bản của các team sẽ tham gia các kỳ thi sắp tới:
- Tên trường đại học
- Tên đội thi
- Tên thành viên (optional)

Tên trường đại học + tên đội thi 
 thông tin của 3 thành viên (Codeforces Gym / UCUP / CLIST / web thông tin của trường đó), trường hợp không tìm thầy thì ở search các team năm ngoái của trường đó.
 
Thông tin thành viên
- Acc codeforces / atcoder / qoj (dùng CPHOF / Clist / codeforces, thậm chỉ mạng xã hội Instagram / Twitter / ...)

Để tra được performance của một team ICPC cũng như đánh giá được trình độ của team đó:
- Xem thử các contest team đã tham gia trước đó (chính thức, virtual)
- UCUP: hầu hết các team Trung Quốc và các đội mạnh (>= top50 wf) đều sẽ làm ở trên nền tảng này
- CLIST: có ghi lại hết thông tin của hầu hết các judge
- OCPC: xem được acc codeforces và atcoder
- Codeforces Gym / các judge của nước họ.
- Để so sánh chính xác, có thể virtual cùng contest đó để biết khoảng cách thực lực so với team của mình.


- Mình sẽ nói về cách mình stalk ở một số vùng / quốc gia sau:
    + UCUP, có thể tìm thấy hầu hết các team ở trình độ tương đối cao (cỡ top60 WF trở lên), ngoài ra cũng sẽ tìm thấy các team Trung Quốc trên đây
    + Thường để stalk các team Châu Âu thì lên codeforces hoặc các trại training camp của Châu Âu (OCPC - Đông Âu, Petro Camp - Tây Âu, ...)
    + Với các team nhật, hãy thử search tài khoản ở trên AtCoder, X(Twitter), và UCUP. Có một lưu ý là một số thành viên Nhật không có acc codeforces
    + Với các team trung quốc, dễ tìm nhất là ở QOJ (một trang web của Qingyu) và UCUP. Đây cũng là các team khó tìm nhất. Vì ở một số kì thi (như AECOI), họ để tiếng Trung, nên bọn mình phải dịch lại và match với tên tiếng anh của họ. Nhiều khi miss một số team mạnh vì cái này
    + Đài Loan, chủ yếu họ là contest ở trên Codeforces Gym và UCUP. Mình cũng có thể tìm thêm tại các contest Gym ICPC của đài loan, sẽ ra được các đội đài loan ở đó
    + Hàn Quốc, chủ yếu là ở codeforces
    + Việt Nam, ... võ
    + Thailand, Indonesia, Myanmmar, Phillipines, thường bạn chỉ cần tìm 1-2 trường top đầu của nước này là được.
    + Châu Phi, ...
    + Mỹ, kattis và UCUP, và kết quả NAC


### Goal and Baseline
- Baseline: là những gì mình chắc chắn phải làm được (cho dù choke nặng đến cỡ nào cũng phải đạt được)
- Goal: là những gì mình **muốn** đạt được. Tuy nhiên goal đặt ra phải có tính thực tế, nghĩa rằng đó sẽ là kết quả tốt nhất trong trường hợp tốt nhất (rất khó xảy ra nhưng khả năng vẫn > 0%).

Sau khi stalk hết thông tin đối thủ, dựa vào tình hình thực tế và mong muốn bản thân để đặt Baseline / Goal cho đúng

### Phases

Chia 5h kì thi thành 3 phase

chia bài thành 3 loại:
- (1) bài *800
- (2) bài nghĩ trong <=30ph và TỰ cài <=30ph (30 là cực trị)
- (3) bài cần 2 người cài và đống bài thonkery siêu nhức óc

#### Phase 1 (The Opening) Should be [0, 2h]

- Chia thành 5-4-5, 5-4-4 hoặc 4-4-4 (Demen -> Ann -> Lamu)
- ƯU TIÊN: [AC tất cả các bài (1)] + [Cả 3 thành viên đọc hết các bài (2) và (3)] + [Push các bài (2) và (3) vào queue càng nhiều càng tốt].
- Ai nghĩ được bài nào thì cài đặt bài đó.
- Nếu người đọc muốn cài đặt một bài (1) nhưng chưa đọc hết set bài, giao lại các bài còn lại trong set bài cho 2 người còn lại trước khi cài đặt.
- Các người đọc sẽ áp dụng “skim and scan” để lọc các bài (1) để cho vào queue. 
- Các bài (2) và (3) sẽ được tóm lại giữa hai người đọc. Nếu người ngồi máy đã cài đặt xong, tóm bài cho người vừa ngồi máy.
- Nếu queue có nhiều bài, ưu tiên bài mà người ngồi máy biết làm trước (Trơn việc code và khâu tóm đề).


Phase 1 trơn tru thì sẽ tạo quán tính cho các phase tiếp theo 

#### Phase 2 (Mid Phase) Should be [2, 4h]
- ƯU TIÊN: [Push các bài (2) và (3) vào queue] + [Tất cả các bài (2) được đưa vào queue] + [Cố gắng pop hết (2) trước freeze]
- Tại phase này, tất cả các bài (2) và (3) đều đã được đọc bởi mọi thành viên trong team.
- Nếu |queue| >= 3, sẽ có hai người pop bài. (*important)
- Nếu |queue| <= 2, sẽ có một người pop bài (hoặc hai nếu bài được pop có độ khó (3))



#### Phase 3 (Freezing Phase) Should be [4, 5h]
- ƯU TIÊN: [Pop mọi bài trong queue] + [Giải các bài (3)] (1)
- Nếu |queue| >= 2, toàn team dồn lực debug để giải phóng người. (2) 
- Nếu |queue| = 1, chia ra 1-2 hoặc 3-0 (cài-nghĩ), tùy vào tình trạng bài và nội dung bài. (3)
- Ở phase này, mỗi bài (3) phải được nghĩ bởi ít nhất 2 người. (nhắm đạt được một solution càng trong suốt và dễ cài càng tốt) (4)
- Các trường hợp đặc biệt:
+ Nếu mình ăn pen và thua 1-2 bài, ưu tiên debug kỹ trước khi nộp, tránh để mất lợi thế về pen.
+ Nếu mình cần AC 2-3 bài, có thể break luật (4), cho phép nghĩ nhiều bài hơn 






## Some notes about strat


## Jakarta 

### Day 1
// Nên đọc thêm mấy blog nhật
Sân bay
Lần đầu tiên DeMen và Ann đi nước ngoài. Sân bay to zl
Khách sạn xịn zl
Võ vào và làm đổ ly nước khách sạn  đền
Tối đó nguyên team đi ăn một quán ramen do Lamu reccommend
Dô quán không ai bt nói tiếng anh, dùng gg translate với body language
Đồ ăn khá ngon khá rẻ, 9/10

### Day 2
Có bus của btc chạy từ ks lên trường thi. Sẽ được phân ra các nhóm, mỗi nhóm có 1 escort giúp guide mng. Bạn escort siêu cute, friendly. Mình còn được ăn trưa tại trường, đồ ăn khá ngon, có món nước trà sữa lúc nào cũng MLE. Lúc ăn xong team mình dạo vòng vòng trường xem có gì hay. Rồi xin vào thư việc trường người ta luôn. May mà bạn escort dễ thương nên xin nhân viên cho tụi mình đc đột nhập vào thư viện.

Có cái khá mới là ở Indo lúc chụp hình team cho freestyle, muốn pose gì thì pose, có team bưng ông coach lên. Nên Ann suggest làm gì đó vui vui. Ban đầu định làm ngôi sao nhưng không đủ, mới đổi lại thành pose tam giác.

Chiều hôm đó là buổi thi, phòng thi khá giống i52 nên mang cho mình cảm giác quen thuộc, bàn phím xài khá ổn. Chỗ thi thử sẽ khác chỗ thi thật. Chỗ thi thoáng rộng, dù bị tách ra nhiều phòng. Lúc thi thử, tụi mình cũng test được mấy trò hay hay. Cái khó chịu nhất là không có CodeBlocks

### Day 3
Bus escort vào lúc sáng sớm. Ăn sáng tại BiNus, đồ ăn vẫn vậy, vẫn siêu ngon. Ăn xong mình với Ann uống thử lon cà phê Starbuck mới mua hôm qua. Uống dô thấy 6-7 vị - brew trong nhà vệ sinh (gg). Có mỗi DeMen là không uống nên vẫn sống. 

Team mình có mua supply lúc thi nhưng mới bt tin không được mang dô. Người ta có provide đồ ăn sẵn. Khá ngon. Quầy đồ khá đầy đủ.

Mình với Ann sau khi cắm cọc trong nhà vệ sinh xong thì sau đó 5' thì bắt đầu. Ann suggest hít đất cho nóng người nên mình với Ann hít đất.


...

 lúc thi
 
 // goodbye escort 
-->
