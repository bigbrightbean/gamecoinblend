// =====================================================
// WORD LIST
// Write each word with a SPACE between every SOUND.
//   "b r ai n"  → b · r · ai · n   (ai underlined, one dot)
//   "ch ee k"   → ch · ee · k
//   "c a k _e"  → _e = silent (magic) e: grey, no dot
// Every word has 2–5 sounds.
// Rewards: a surprise 1–6 per word; words with 5 sounds = SUPER WORD (7).
// =====================================================
const wordSets = {
  // ---------- CONTROLLED R ----------
  controlled_ar: ["c ar", "j ar", "b ar", "t ar", "s t ar", "f ar m", "b ar n", "p ar k", "d ar k", "y ar n",
                  "c ar d", "c ar t", "h ar p", "ar m", "ar t", "sh ar k", "ch ar t", "ch ar m", "s c ar f", "s t ar t",
                  "s m ar t", "s p ar k", "h ar d", "y ar d", "l ar k", "m ar k", "b ar k", "p ar t", "t ar t", "sh ar p",
                  "h ar m", "s c ar", "c ar p", "m ar sh"],
  controlled_er: ["h er", "f er n", "h er d", "h er b", "t er m", "j er k", "p er ch", "v er b", "p er k", "s t er n",
                  "c l er k", "p er m", "g er m", "t er n", "n er d", "v er s _e", "n er v _e", "s er v _e", "s w er v _e", "p er t",
                  "b er th", "s i s t er", "t i g er", "l e tt er", "b e tt er", "w i n t er", "d i nn er", "s i l v er", "p e pp er", "b u tt er",
                  "h a mm er", "j e s t er"],
  controlled_ir: ["b ir d", "g ir l", "d ir t", "f ir m", "f ir s t", "sh ir t", "s k ir t", "s t ir", "th ir d", "t w ir l",
                  "s w ir l", "s qu ir t", "b ir ch", "ch ir p", "f ir", "s ir", "wh ir l", "b ir th", "th ir s t", "s m ir k",
                  "qu ir k", "sh ir k", "m ir th", "f l ir t", "ir k", "d ir t y", "th ir t y", "s qu ir m"],
  controlled_or: ["c or n", "f or k", "h or n", "c or k", "b or n", "f or t", "p or ch", "t or ch", "n or th", "sh or t",
                  "s p or t", "s t or k", "s t or m", "th or n", "s n or t", "f or", "f or m", "c or d", "l or d", "s or t",
                  "p or t", "t or n", "w or n", "s c or ch", "f or th", "h or s _e", "s w or n"],
  controlled_ur: ["f ur", "b ur n", "t ur n", "h ur t", "c ur l", "s ur f", "c ur b", "t ur f", "h ur l", "ch ur ch",
                  "ch ur n", "b ur s t", "b l ur t", "s l ur p", "b l ur", "s p ur", "b ur p", "c ur d", "l ur k", "m ur k",
                  "n ur s _e", "p ur s _e", "c ur v _e", "t ur n i p", "b ur g er", "c ur l y", "t ur k ey"],

  // ---------- LONG VOWELS (magic e) ----------
  longvowels_a: ["c a k _e", "l a k _e", "m a k _e", "c a p _e", "t a p _e", "g a t _e", "p l a t _e", "n a m _e", "g a m _e", "c a v _e",
                 "w a v _e", "g r a p _e", "s n a k _e", "sh a d _e", "s k a t _e", "f l a m _e", "b r a k _e", "ch a s _e", "c r a t _e", "p a s t _e",
                 "b a k _e", "r a k _e", "d a t _e", "l a t _e", "f a k _e", "s a l _e", "t a l _e", "wh a l _e", "p l a n _e", "sh a k _e",
                 "b l a d _e", "t r a d _e", "c r a n _e"],
  longvowels_e: ["th e s _e", "th e m _e", "e v _e", "g e n _e", "sc e n _e", "d e l e t _e", "a th l e t _e", "c e d _e", "m e t _e", "o b e s _e",
                 "s e r e n _e", "r e c e d _e", "i m p e d _e", "h e r _e", "m e r _e", "P e t _e", "S t e v _e"],
  longvowels_i: ["b i k _e", "k i t _e", "f i v _e", "l i n _e", "p i n _e", "r i d _e", "h i d _e", "t i m _e", "d i m _e", "b r i d _e",
                 "sh i n _e", "s p i n _e", "s t r i p _e", "s m i l _e", "s l i d _e", "p r i z _e", "wh i t _e", "s w i p _e", "m i c _e", "r i c _e",
                 "d i c _e", "p i p _e", "w i p _e", "m i l _e", "t i l _e", "s i d _e", "h i k _e", "n i n _e", "h i v _e", "d r i v _e",
                 "v i n _e"],
  longvowels_o: ["b o n _e", "c o n _e", "h o m _e", "h o p _e", "r o p _e", "r o s _e", "n o s _e", "n o t _e", "h o l _e", "p o l _e",
                 "ch o k _e", "d o m _e", "g l o b _e", "s m o k _e", "s t o v _e", "s t o n _e", "ph o n _e", "c o d _e", "r o d _e", "j o k _e",
                 "p o k _e", "b r o k _e", "h o s _e", "th o s _e", "m o l _e", "v o t _e", "r o b _e", "c o v _e"],
  longvowels_u: ["c u b _e", "c u t _e", "t u b _e", "t u n _e", "m u l _e", "m u t _e", "d u n _e", "f l u t _e", "p l u m _e", "p r u n _e",
                 "r u l _e", "f u s _e", "h u g _e", "u s _e", "f u m _e", "d u k _e", "n u d _e", "r u d _e", "c r u d _e", "b r u t _e",
                 "l u t _e", "d u d _e", "r u n _e", "s p r u c _e", "t r u c _e", "c u b _e s", "t u n _e s", "m u l _e s"],

  // ---------- CONSONANT BLENDS ----------
  consonantblend_l: ["b l i m p", "c l a m", "c l a p", "c l o ck", "f l a g", "f l a p", "f l o ss", "g l a d", "g l a ss", "p l u m",
                     "p l u g", "s l i p", "s l e d", "s l a m", "f l i p", "b l o b", "b l a ck", "c l u b", "c l i ff", "p l a n",
                     "b l o t", "s l o t", "f l a t", "c l i p", "g l u m", "p l o t", "f l o p", "s l a p", "f l i ck", "b l e n d",
                     "p l a n k", "c l u m p", "s l e p t"],
  consonantblend_r: ["c r a b", "d r u m", "f r o g", "g r i n", "t r i p", "b r i ck", "d r e ss", "g r a ss", "t r u ck", "t r a p",
                     "c r i b", "b r u sh", "d r i p", "g r a b", "p r o p", "p r e ss", "t r o t", "b r a g", "c r o p", "c r u s t",
                     "d r o p", "f r o m", "g r i p", "g r u b", "t r i m", "t r a ck", "c r a ck", "p r i n t", "f r o s t", "t r u n k"],
  consonantblend_s: ["s t o p", "s t e p", "s p i n", "s p o t", "s n a p", "s n a ck", "s w i m", "s k i p", "s k u n k", "s m e ll",
                     "s m a sh", "s c a b", "s c a n", "s t i ck", "s t a m p", "s p i ll", "s n i ff", "s w i ng", "s t a b", "s t e m",
                     "s n i p", "s n u g", "s p u n", "s w a m", "s k i d", "s k i n", "s t a ck", "s t u ck", "s c r u b", "s t r a p",
                     "s t o m p"],

  // ---------- DIAGRAPHS ----------
  diagraphs_ch: ["ch i n", "ch i p", "ch o p", "ch a t", "ch i ck", "ch e ss", "r i ch", "m u ch", "s u ch", "l u n ch",
                 "b e n ch", "b u n ch", "ch i m p", "ch a m p", "i n ch", "ch a p", "ch u g", "ch e s t", "ch e ck", "p i n ch",
                 "p u n ch", "c r u n ch", "r a n ch", "m u n ch", "h u n ch", "ch i ll", "ch o m p", "b r a n ch"],
  diagraphs_ng: ["r i ng", "s i ng", "k i ng", "w i ng", "s o ng", "l o ng", "l u ng", "h a ng", "b a ng", "f a ng",
                 "s w i ng", "s t i ng", "s l i ng", "s t r i ng", "r a ng", "s a ng", "d i ng", "b r i ng", "c l i ng", "f l i ng",
                 "th i ng", "c l a ng", "p r o ng", "s t r o ng", "h u ng", "s u ng", "r u ng", "s t u ng"],
  diagraphs_sh: ["sh i p", "sh o p", "sh e ll", "sh u t", "sh e d", "sh i n", "f i sh", "d i sh", "w i sh", "c a sh",
                 "r a sh", "c r a sh", "b r u sh", "f l a sh", "s p l a sh", "sh r u b", "sh a ck", "sh o ck", "sh o t", "sh i f t",
                 "sh r i m p", "h u sh", "r u sh", "d a sh", "f r e sh", "t r a sh", "f l u sh", "m e sh"],
  diagraphs_th: ["th i n", "th i ck", "th i n k", "p a th", "b a th", "m a th", "m o th", "c l o th", "w i th", "th i s",
                 "th a t", "th e m", "th e n", "th a n", "th u d", "th u m p", "th a n k", "th r i ll", "th r o b", "b r o th",
                 "f r o th", "s l o th", "t e n th", "d e p th", "w i d th", "th e f t"],

  // ---------- VOWEL PAIRS ----------
  // Long A
  vp_ai:   ["r ai n", "t r ai n", "b r ai n", "p ai n t", "m ai l", "n ai l", "s n ai l", "t ai l", "s ai l", "ch ai n",
            "p ai l", "w ai t", "m ai d", "p ai d", "g r ai n", "d r ai n", "s t ai n", "m ai n", "p l ai n", "f ai n t",
            "r ai d", "b ai t", "h ai l", "j ai l", "r ai l", "t r ai l", "ai m", "c l ai m", "s p r ai n"],
  vp_ay:   ["d ay", "p l ay", "s ay", "s t ay", "t r ay", "c l ay", "g r ay", "s p r ay", "h ay", "w ay",
            "p ay", "r ay", "s w ay", "s t r ay", "b ay", "j ay", "l ay", "m ay", "p r ay", "a w ay",
            "t o d ay", "d e l ay", "r e l ay", "b r ay", "o k ay"],
  vp_ey_a: ["th ey", "g r ey", "p r ey", "o b ey", "h ey", "wh ey", "c o n v ey", "s ur v ey", "o s p r ey", "p ur v ey",
            "p r ey s", "o b ey s", "g r ey s"],
  // Long E
  vp_ee:   ["t r ee", "b ee", "s ee", "f r ee", "th r ee", "g r ee n", "sh ee p", "f ee t", "s ee d", "s l ee p",
            "qu ee n", "ch ee k", "w ee k", "j ee p", "b ee f", "t ee th", "s t r ee t", "s w ee t", "f ee l", "h ee l",
            "wh ee l", "d ee p", "k ee p", "n ee d", "s ee n", "sh ee t", "c r ee k", "g r ee t", "s t ee p", "s w ee p"],
  vp_ea:   ["s ea", "t ea", "p ea", "ea t", "b ea ch", "r ea d", "l ea f", "m ea t", "s ea l", "t ea m",
            "d r ea m", "c l ea n", "c r ea m", "p ea ch", "b ea n", "h ea t", "wh ea t", "s p ea k", "m ea l", "s ea t",
            "n ea t", "b ea t", "l ea k", "w ea k", "s t ea m", "s t r ea m", "b ea s t", "f ea s t", "ch ea p", "ea ch"],
  vp_ie_e: ["ch ie f", "th ie f", "f ie l d", "sh ie l d", "b r ie f", "y ie l d", "g r ie f", "p r ie s t", "w ie l d", "n ie c _e",
            "p ie c _e", "sh r ie k", "s ie g _e", "b e l ie f", "r e l ie f", "th ie v _e s", "f ie l d s", "sh ie l d s", "a ch ie v _e", "b e l ie v _e",
            "g r ie v _e", "ch ie f s", "y ie l d s", "m o v ie", "c oo k ie", "b ir d ie"],
  vp_ey_e: ["k ey", "m o n k ey", "d o n k ey", "h o n ey", "m o n ey", "t ur k ey", "h o ck ey", "j o ck ey", "ch i m n ey", "v a ll ey",
            "a ll ey", "t r o ll ey", "k i d n ey", "b ar l ey", "p u ll ey", "g a ll ey", "j er s ey", "m e d l ey", "k ey s", "ch u t n ey",
            "a bb ey", "v o ll ey", "t ur k ey s", "a ll ey s", "v a ll ey s"],
  // Long I
  vp_ie_i: ["p ie", "t ie", "l ie", "d ie", "c r ie d", "f r ie d", "t r ie d", "d r ie d", "s p ie d", "c r ie s",
            "f r ie s", "t r ie s", "d r ie s", "s p ie s", "t ie s", "p ie s", "l ie s", "f l ie s", "s k ie s", "m a g p ie",
            "u n t ie", "n e ck t ie", "d e n ie d", "r e l ie d", "d e f ie d"],
  vp_igh:  ["h igh", "s igh", "th igh", "n igh t", "l igh t", "r igh t", "f igh t", "t igh t", "b r igh t", "f l igh t",
            "m igh t", "s igh t", "s l igh t", "f r igh t", "t igh t s", "l igh t s", "n igh t s", "f igh t s", "h igh w ay", "d e l igh t",
            "t o n igh t", "u p r igh t", "a l r igh t", "p l igh t", "b l igh t"],
  // Long O
  vp_oa:   ["b oa t", "c oa t", "g oa t", "r oa d", "t oa d", "s oa p", "l oa f", "f oa m", "c oa ch", "f l oa t",
            "t oa s t", "g r oa n", "c l oa k", "r oa s t", "m oa n", "oa k", "oa t", "l oa n", "m oa t", "c r oa k",
            "c oa s t", "b oa s t", "g oa l", "s oa k", "l oa d", "th r oa t", "r oa m"],
  vp_ow_o: ["s n ow", "s l ow", "g r ow", "sh ow", "g l ow", "c r ow", "b l ow", "l ow", "m ow", "r ow",
            "th r ow", "b ow l", "f l ow", "ow n", "sh ow n", "g r ow n", "b l ow n", "f l ow n", "th r ow n", "w i n d ow",
            "y e ll ow", "p i ll ow", "sh a d ow", "a rr ow", "e l b ow", "r ai n b ow"],
  vp_oe:   ["t oe", "h oe", "d oe", "f oe", "w oe", "g oe s", "t oe s", "h oe s", "f oe s", "r oe",
            "o b oe", "t i p t oe", "f l oe", "a l oe", "w oe s", "t oe d", "h oe d"],
  // Long U
  vp_ue:   ["b l ue", "g l ue", "c l ue", "t r ue", "d ue", "s ue", "c ue", "h ue", "c l ue s", "g l ue d",
            "b l ue s", "g l ue s", "i ss ue", "t i ss ue", "r e s c ue", "s t a t ue", "v a l ue", "v e n ue", "ar g ue", "a v e n ue",
            "u n t r ue", "p ur s ue", "f o n d ue", "c ue s", "h ue s", "d ue s"],
  vp_ew:   ["n ew", "f ew", "d ew", "ch ew", "s t ew", "c r ew", "d r ew", "g r ew", "f l ew", "b l ew",
            "s c r ew", "th r ew", "p ew", "b r ew", "sh r ew", "n ew t", "n ew s", "j ew e l", "n e ph ew", "c ur f ew",
            "c a sh ew", "m i l d ew", "ch ew s", "s t ew s", "kn ew", "s t r ew"],
  vp_ui:   ["f r ui t", "s ui t", "j ui c _e", "c r ui s _e", "b r ui s _e", "s ui t s", "f r ui t s", "j ui c y", "s l ui c _e", "b r ui s _e d",
            "c r ui s _e d", "f r ui t y"],
  vp_oo_long: ["m oo n", "s p oo n", "f oo d", "p oo l", "t oo l", "b oo t", "r oo t", "r oo f", "z oo", "b r oo m",
               "r oo m", "s oo n", "n oo n", "s c oo p", "h oo p", "t oo th", "b oo m", "c oo l", "h oo t", "l oo p",
               "m oo d", "m oo s _e", "p r oo f", "sh oo t", "s t oo l", "s w oo p", "g r oo m", "b l oo m", "g oo s _e"],
  // Other sounds
  vp_oo_short: ["b oo k", "c oo k", "l oo k", "h oo k", "f oo t", "g oo d", "w oo d", "w oo l", "h oo d", "t oo k",
                "sh oo k", "b r oo k", "s t oo d", "n oo k", "r oo k", "c r oo k", "s oo t", "b oo k s", "c oo k s", "l oo k s",
                "h oo k s", "w oo d s", "w oo d e n", "w oo ll y", "h oo d ie", "u n h oo k"],
  vp_ou:   ["ou t", "c l ou d", "l ou d", "m ou th", "s ou th", "r ou n d", "s ou n d", "g r ou n d", "p ou n d", "sh ou t",
            "c ou ch", "p ou ch", "c ou n t", "p r ou d", "n ou n", "ou ch", "s c ou t", "s p r ou t", "t r ou t", "s n ou t",
            "s p ou t", "f ou n d", "h ou n d", "b ou n d", "m ou s _e", "h ou s _e"],
  vp_ow_ou: ["c ow", "h ow", "n ow", "ow l", "t ow n", "b r ow n", "c r ow n", "c l ow n", "d ow n", "g ow n",
             "f r ow n", "h ow l", "g r ow l", "p l ow", "w ow", "v ow", "ch ow", "c r ow d", "d r ow n", "p r ow l",
             "s c ow l", "t ow e l", "p ow d er", "ow l s", "c ow s", "b r ow", "t ow n s"],
  vp_oi:   ["oi l", "c oi n", "b oi l", "s oi l", "f oi l", "j oi n", "p oi n t", "m oi s t", "s p oi l", "c oi l",
            "t oi l", "c oi n s", "j oi n t", "n oi s _e", "v oi c _e", "ch oi c _e", "v oi d", "a v oi d", "b r oi l", "t oi l e t",
            "c oi l s", "oi l y", "h oi s t", "j oi n s", "p oi n t s"],
  vp_oy:   ["b oy", "t oy", "j oy", "s oy", "c oy", "p l oy", "e n j oy", "b oy s", "t oy s", "c ow b oy",
            "a nn oy", "e m p l oy", "d e p l oy", "d e c oy", "a ll oy", "oy s t er", "r oy a l", "l oy a l", "j oy f u l", "e n v oy",
            "c o n v oy", "a h oy", "t o m b oy", "j oy s", "e n j oy s"],
  vp_au:   ["h au l", "m au l", "f au l t", "v au l t", "h au n t", "t au n t", "l au n ch", "s au c _e", "c au s _e", "p au s _e",
            "h au n ch", "j au n t", "f l au n t", "f r au d", "au th or", "s au c er", "f au c e t", "h au l s", "s au n a", "p au n ch",
            "v au l t s", "f au l t s", "g au n t", "h au n t s", "t au n t s"],
  vp_aw:   ["s aw", "p aw", "j aw", "r aw", "l aw", "c l aw", "d r aw", "s t r aw", "y aw n", "l aw n",
            "d aw n", "c r aw l", "h aw k", "sh aw l", "th aw", "p aw s", "j aw s", "c l aw s", "f aw n", "p aw n",
            "d r aw n", "p r aw n", "s p aw n", "b r aw l", "s p r aw l", "aw f u l"],
  vp_ea_short: ["b r ea d", "h ea d", "d ea d", "th r ea d", "s p r ea d", "b r ea th", "s w ea t", "d ea f", "h ea l th", "d r ea d",
                "t r ea d", "w ea l th", "s t ea l th", "th r ea t", "s w ea t er", "r ea d y", "h ea v y", "f ea th er", "w ea th er", "l ea th er",
                "h ea v e n", "m ea n t", "s t ea d y", "d ea l t", "m ea d ow"]
};

// names shown in the game for each set
const setLabels = {
  controlled_ar: "AR", controlled_er: "ER", controlled_ir: "IR", controlled_or: "OR", controlled_ur: "UR",
  longvowels_a: "Long A", longvowels_e: "Long E", longvowels_i: "Long I", longvowels_o: "Long O", longvowels_u: "Long U",
  consonantblend_l: "L Blends", consonantblend_r: "R Blends", consonantblend_s: "S Blends",
  diagraphs_ch: "CH", diagraphs_ng: "NG", diagraphs_sh: "SH", diagraphs_th: "TH",
  vp_ai: "AI", vp_ay: "AY", vp_ey_a: "EY (they)", vp_ee: "EE", vp_ea: "EA (sea)", vp_ie_e: "IE (chief)",
  vp_ey_e: "EY (key)", vp_ie_i: "IE (pie)", vp_igh: "IGH", vp_oa: "OA", vp_ow_o: "OW (snow)", vp_oe: "OE",
  vp_ue: "UE", vp_ew: "EW", vp_ui: "UI", vp_oo_long: "OO (moon)", vp_oo_short: "OO (book)", vp_ou: "OU",
  vp_ow_ou: "OW (cow)", vp_oi: "OI", vp_oy: "OY", vp_au: "AU", vp_aw: "AW", vp_ea_short: "EA (bread)"
};

// =====================================================
// TEAM COLOURS (header dropdowns)
// =====================================================
// 7 rainbow colours: [main, darker shade, text colour]
const teamColors = {
  Red:    ["#ff4b4b", "#c81e1e", "#fff"],
  Orange: ["#ff9a1f", "#d16400", "#fff"],
  Yellow: ["#ffd21f", "#c99a00", "#5a4200"],
  Green:  ["#38c95a", "#1c8a37", "#fff"],
  Blue:   ["#2fa8ff", "#0a6cc0", "#fff"],
  Pink:   ["#ff5fa8", "#d11f78", "#fff"],
  Purple: ["#a259ff", "#6a1fd1", "#fff"]
};
// always starts as Red vs Blue
let teamColor = { t1: "Red", t2: "Blue" };

// =====================================================
// THEMES — same game, different look
// =====================================================
const themes = {
  coins: {
    cheers: ["Cha-ching!", "Ka-ching ka-ching!", "Money money!", "JACKPOT!"],
    title: "💰 Coin Blends", item: "💰", one: "coin", many: "coins", trophy: "🏆",
    burst: ["⭐", "⭐", "🌟"],
    sparkle: ["✨", "🌟", "⭐"],
    glit: ["✨", "⭐", "✨", "⭐", "✨", "✨"],
    superFx: ["🎆", "🌈", "⭐", "✨", "💰", "🎉", "🌟"],
    confetti: ["🎉", "⭐", "💰", "🎊", "🌟", "✨"],
    done: ["#ffd60a", "#ff5fa2", "#3ee07a", "#3cb4ff", "#b07cff", "#ff9a1f", "#ff5a5a", "#1fe0c4"]
  },
  diamond: {
    cheers: ["Bling!", "Shiny shiny!", "Sparkle-tastic!", "DIAMOND KING!"],
    title: "💎 Diamond Blends", item: "💎", one: "diamond", many: "diamonds", trophy: "👑",
    burst: ["💎", "✨", "💠"],
    sparkle: ["✨", "💎", "💠"],
    glit: ["✨", "💎", "✨", "💠", "✨", "💎"],
    superFx: ["💎", "🌈", "✨", "💠", "🎆", "👑", "🔮"],
    confetti: ["💎", "✨", "💠", "👑", "🎉", "🔷"],
    done: ["#5ee7ff", "#b18cff", "#ff8fe0", "#7dd3fc", "#a5b4fc", "#67f5d8", "#c4f1ff", "#f0a8ff"]
  },
  teddy: {
    cheers: ["Big bear hug!", "Squeeeze!", "Cuddle party!", "TEDDY TIME!"],
    title: "🧸 Teddy Bear Blends", item: "🧸", one: "teddy bear", many: "teddy bears", trophy: "🧸",
    burst: ["💖", "🎀", "💕"],
    sparkle: ["💕", "🎀", "✨"],
    glit: ["💕", "🎀", "✨", "💖", "🎀", "💕"],
    superFx: ["🧸", "💖", "🎀", "🌈", "🎈", "🍭", "🍯"],
    confetti: ["🧸", "💖", "🎀", "🎈", "🍭", "💕"],
    done: ["#ffadd2", "#ffcf99", "#fff07a", "#b8f2a0", "#9fe0ff", "#e0b3ff", "#ff9e9e", "#ffd6a5"]
  }
};
Object.assign(themes, {
  gift: {
    cheers: ["Surprise!", "Ooh, presents!", "Gift-tastic!", "BIRTHDAY BONANZA!"],
    title: "🎁 Gift Blends", item: "🎁", one: "gift", many: "gifts", trophy: "🎁",
    burst: ["🎁", "🎀", "✨"],
    sparkle: ["🎀", "✨", "🎊"],
    glit: ["✨", "🎀", "✨", "🎊", "✨", "🎀"],
    superFx: ["🎁", "🎀", "🎉", "🎊", "🌈", "🎈", "✨"],
    confetti: ["🎁", "🎀", "🎊", "🎉", "✨", "🎈"],
    done: ["#ff5c7a", "#3ee07a", "#ffd60a", "#3cb4ff", "#b07cff", "#ff9a1f", "#ff8fd8", "#1fe0c4"]
  },
  pumpkin: {
    cheers: ["Pumpkin-tastic!", "Crunchy leaves!", "Harvest hooray!", "PUMPKIN PARTY!"],
    title: "🎃 Pumpkin Blends", item: "🎃", one: "pumpkin", many: "pumpkins", trophy: "🌻",
    burst: ["🍂", "🍁", "🎃"],
    sparkle: ["🍁", "🍂", "✨"],
    glit: ["🍁", "✨", "🍂", "🌰", "✨", "🍁"],
    superFx: ["🎃", "🍁", "🍂", "🌻", "🍎", "🌰", "🌈"],
    confetti: ["🍂", "🍁", "🎃", "🌰", "🍎", "🌻"],
    done: ["#ffb347", "#ff7f50", "#ffd166", "#f4a261", "#c9e265", "#ff9f68", "#ffcf70", "#e9c46a"]
  },
  cookie: {
    cheers: ["Nom nom!", "Yum yum yum!", "Cookie crunch!", "COOKIE MONSTER!"],
    title: "🍪 Cookie Blends", item: "🍪", one: "cookie", many: "cookies", trophy: "🍪",
    burst: ["🍪", "✨", "🥛"],
    sparkle: ["✨", "🍪", "⭐"],
    glit: ["✨", "🍪", "✨", "⭐", "✨", "🍪"],
    superFx: ["🍪", "🧁", "🍩", "🥛", "🎉", "🌈", "✨"],
    confetti: ["🍪", "🥛", "🧁", "🍩", "✨", "🎉"],
    done: ["#ffd6a5", "#ffadad", "#caffbf", "#9bf6ff", "#fdffb6", "#ffc6ff", "#f6bd60", "#a0e7e5"]
  },
  burger: {
    cheers: ["Yummy!", "Extra cheese!", "Burger-licious!", "MEGA BURGER!"],
    title: "🍔 Burger Blends", item: "🍔", one: "burger", many: "burgers", trophy: "🍔",
    burst: ["🍔", "🍟", "⭐"],
    sparkle: ["🍟", "✨", "🍅"],
    glit: ["✨", "🍟", "✨", "🧀", "✨", "🍅"],
    superFx: ["🍔", "🍟", "🥤", "🧀", "🍅", "🌭", "🎉"],
    confetti: ["🍔", "🍟", "🥤", "🧀", "🍅", "🎉"],
    done: ["#ffd23f", "#ff6b6b", "#7cd67c", "#6ec6ff", "#ffa94d", "#ff9ff3", "#f9f871", "#4ecdc4"]
  },
  mushroom: {
    cheers: ["Boing!", "Mush-room for more!", "Fun-gi time!", "MUSHROOM MAGIC!"],
    title: "🍄 Mushroom Blends", item: "🍄", one: "mushroom", many: "mushrooms", trophy: "🍄",
    burst: ["🍄", "🌿", "✨"],
    sparkle: ["🌿", "✨", "🍃"],
    glit: ["✨", "🍃", "✨", "🌸", "✨", "🐞"],
    superFx: ["🍄", "🌈", "🌿", "🐞", "🌸", "🍃", "✨"],
    confetti: ["🍄", "🌿", "🍃", "🌸", "🐞", "✨"],
    done: ["#b9fbc0", "#ffadad", "#fdffb6", "#a0c4ff", "#ffd6a5", "#caffbf", "#ffc6ff", "#98f5e1"]
  }
  ,
  banana: {
    title: "🍌 Banana Blends", item: "🍌", one: "banana", many: "bananas", trophy: "🍌",
    cheers: ["Bananas!", "Peel-tastic!", "Going bananas!", "TOP BANANA!"],
    burst: ["🍌", "💛", "⭐"],
    sparkle: ["🍌", "✨", "💛"],
    glit: ["✨", "🍌", "✨", "💛", "✨", "🍌"],
    superFx: ["🍌", "🐵", "🌴", "💛", "🎉", "🥥", "✨"],
    confetti: ["🍌", "🌴", "🥥", "💛", "🐵", "🎉"],
    done: ["#fff176", "#ffd54f", "#b9f6ca", "#ffab91", "#80d8ff", "#ea80fc", "#ccff90", "#ffe57f"]
  },
  rainbow: {
    title: "🌈 Rainbow Blends", item: "🌈", one: "rainbow", many: "rainbows", trophy: "🦄",
    cheers: ["Woo-hoo!", "Over the rainbow!", "Colour blast!", "UNICORN MAGIC!"],
    burst: ["🌈", "⭐", "☁️"],
    sparkle: ["✨", "🌈", "💖"],
    glit: ["✨", "🌈", "✨", "⭐", "✨", "💖"],
    superFx: ["🌈", "🦄", "☁️", "⭐", "💖", "🎉", "✨"],
    confetti: ["🌈", "🦄", "☁️", "⭐", "💖", "✨"],
    done: ["#ff5a5a", "#ff9a1f", "#ffd60a", "#3ee07a", "#3cb4ff", "#b07cff", "#ff5fa2", "#1fe0c4"]
  },
  monkey: {
    title: "🐵 Monkey Blends", item: "🐵", one: "monkey", many: "monkeys", trophy: "🐵",
    cheers: ["Ooh ooh!", "Ooh ooh aah aah!", "Monkey business!", "KING OF THE JUNGLE!"],
    burst: ["🐵", "🍌", "🌴"],
    sparkle: ["🍌", "✨", "🌿"],
    glit: ["🍌", "✨", "🌿", "✨", "🍌", "✨"],
    superFx: ["🐵", "🙈", "🙉", "🙊", "🍌", "🌴", "🎉"],
    confetti: ["🐵", "🍌", "🌴", "🙈", "🥥", "🌿"],
    done: ["#c5e1a5", "#ffe082", "#ffcc80", "#80deea", "#f48fb1", "#b39ddb", "#a5d6a7", "#fff59d"]
  },
  pig: {
    title: "🐷 Pig Blends", item: "🐷", one: "piggy", many: "piggies", trophy: "🐷",
    cheers: ["Oink!", "Oink oink!", "Snort snort hooray!", "OINK-TASTIC!"],
    burst: ["🐷", "💖", "🐽"],
    sparkle: ["💖", "✨", "🐽"],
    glit: ["✨", "🐽", "✨", "💖", "✨", "🐽"],
    superFx: ["🐷", "🐽", "💖", "🌸", "🎉", "🍎", "✨"],
    confetti: ["🐷", "🐽", "💖", "🌸", "🍎", "🎉"],
    done: ["#ffb6c1", "#ff9ecb", "#ffd1dc", "#b5f5c8", "#a9def9", "#fff3a0", "#ffc3a0", "#e4c1f9"]
  }
});
let theme = themes.coins;   // always starts as Coins
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

const teamName = t => teamColor[t] + " Team";

// =====================================================
// SETUP
// =====================================================
const params = new URLSearchParams(window.location.search);
let chosen = (params.get("sets") || params.get("set") || "").split(",").filter(k => wordSets[k]);
if (!chosen.length) chosen = Object.keys(wordSets); // fallback: everything

function parseWord(str) {
  const parts = str.trim().split(/\s+/);
  const text = parts.map(p => p.replace("_", "")).join("");
  const sounds = parts.filter(p => !p.startsWith("_")).length;
  return { text, parts, sounds };
}

// 💰 reward: 5+ sounds = 7 coins, otherwise a surprise 1–6
function rewardFor(w) {
  return w.sounds >= 5 ? 7 : 1 + Math.floor(Math.random() * 6);
}

function buildDeck() {
  const seen = new Set();
  const list = [];
  chosen.forEach(key => wordSets[key].forEach(s => {
    const w = parseWord(s);
    if (!seen.has(w.text)) { seen.add(w.text); list.push(w); }
  }));
  return shuffle(list);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// =====================================================
// STATE
// =====================================================
let deck, idx, tried, completed, currentTeam, scores, spinning, spinReady;

function resetState() {
  deck = buildDeck();
  idx = -1;
  tried = new Set();       // words already shown to a player
  completed = new Map();   // word -> { coins, color }
  currentTeam = "t1";
  scores = { t1: 0, t2: 0 };
  spinning = false;
  spinReady = true;        // spin is only active again after the word is marked
}

// =====================================================
// ELEMENTS
// =====================================================
const $ = id => document.getElementById(id);
const wordBox = $("wordBox"), wordInner = $("wordInner"), spinBtn = $("spinBtn"), spinWrap = $("spinWrap");

// =====================================================
// SOUNDS (no files needed)
// =====================================================
let actx = null;
function tone(freq, dur = 0.08, type = "sine", vol = 0.12, delay = 0) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime + delay;
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(actx.destination);
    o.start(t); o.stop(t + dur + 0.02);
  } catch (e) {}
}
const sTick    = () => tone(900 + Math.random() * 300, 0.04, "square", 0.05);
const sLand    = () => { tone(660, 0.12, "triangle", 0.15); tone(990, 0.2, "triangle", 0.12, 0.1); };
const sSparkle = () => [1400, 1800, 2200].forEach((f, i) => tone(f, 0.1, "sine", 0.06, i * 0.05));
const sWin     = () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.22, "triangle", 0.14, i * 0.09));
const sFanfare = () => [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => tone(f, i === 6 ? 0.5 : 0.18, "triangle", 0.15, i * 0.11));
const sNo      = () => tone(180, 0.15, "sawtooth", 0.06);

// =====================================================
// RENDER WORD (dot under each sound)
// =====================================================
function isVowelSound(p) {
  return /[aeiou]/.test(p) && p !== "qu";
}

function baseSize() {
  // word size grows with the box
  return Math.max(36, Math.min(wordBox.clientHeight * 0.42, 170));
}

function renderWord(w) {
  wordInner.className = "";
  wordInner.innerHTML = "";
  w.parts.forEach(p => {
    const span = document.createElement("span");
    span.className = "snd";
    if (p.startsWith("_")) {
      span.textContent = p.slice(1);
      span.classList.add("silent");
    } else {
      span.textContent = p;
      if (p.length > 1) span.classList.add("multi");
      if (isVowelSound(p)) span.classList.add("vowel");
    }
    wordInner.appendChild(span);
  });
  fitWord();
}

function fitWord() {
  let size = baseSize();
  wordInner.style.fontSize = size + "px";
  const max = wordBox.clientWidth - 40;
  while (wordInner.scrollWidth > max && size > 24) {
    size -= 3;
    wordInner.style.fontSize = size + "px";
  }
}

function renderPlaceholder(text) {
  wordInner.className = "placeholder";
  wordInner.style.fontSize = Math.max(26, baseSize() * 0.45) + "px";
  wordInner.textContent = text;
}

function rewardWords(n) {
  if (n >= 7) return "Super star!";
  if (n >= 5) return "Amazing!";
  if (n >= 3) return "Wow!";
  return "Good job!";
}

function renderReward(w, coins) {
  wordInner.className = "reward";
  wordInner.style.fontSize = Math.max(18, baseSize() * 0.3) + "px";
  const bags = Array.from({ length: coins }, (_, i) =>
    `<span style="animation-delay:${(i * 0.12).toFixed(2)}s">${theme.item}</span>`).join("");
  wordInner.innerHTML =
    `<span class="wow">${theme.cheers ? theme.cheers[coins >= 7 ? 3 : coins >= 5 ? 2 : coins >= 3 ? 1 : 0] : rewardWords(coins)} You got <span class="num">${coins}</span> ${coins > 1 ? theme.many : theme.one}! 🎉</span>` +
    `<span class="bags">${bags}</span>`;
  // shrink to fit the box
  let size = parseFloat(wordInner.style.fontSize);
  const fits = () => [...wordInner.children].every(el => el.scrollWidth <= wordBox.clientWidth - 30) &&
                     wordInner.scrollHeight <= wordBox.clientHeight - 10;
  while (!fits() && size > 10) {
    size -= 1;
    wordInner.style.fontSize = size + "px";
  }
}

function restart(el, cls) {
  el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
}

const isSuper = w => w.sounds >= 5;

// show the word at deck[i] as the current word (always the word, never the coins)
function showWord(i) {
  idx = i;
  const w = deck[idx];
  tried.add(w.text);
  wordBox.classList.remove("done", "super");
  renderWord(w);
  $("superTag").classList.toggle("show", isSuper(w));
  updateInfo();
}

// next / previous word that hasn't been read yet
function stepWord(dir) {
  const n = deck.length;
  for (let k = 1; k <= n; k++) {
    const i = ((idx < 0 ? (dir > 0 ? -1 : 0) : idx) + dir * k + n * 2) % n;
    if (!completed.has(deck[i].text) && i !== idx) return i;
  }
  return -1;
}

// =====================================================
// TEAMS / UI
// =====================================================
function applyColors() {
  ["t1", "t2"].forEach((t, n) => {
    const [c, d, txt] = teamColors[teamColor[t]];
    [$("team-" + t), $("pick" + (n + 1))].forEach(el => {
      el.style.setProperty("--team", c);
      el.style.setProperty("--team-dark", d);
      el.style.setProperty("--team-text", txt);
    });
    $("name-" + t).textContent = teamName(t);
  });
}

function fillDropdowns() {
  ["t1", "t2"].forEach((t, n) => {
    const sel = $("color" + (n + 1));
    const other = teamColor[t === "t1" ? "t2" : "t1"];
    sel.innerHTML = Object.keys(teamColors)
      .map(name => `<option value="${name}" ${name === teamColor[t] ? "selected" : ""} ${name === other ? "disabled" : ""}>${name}</option>`)
      .join("");
    sel.onchange = () => { teamColor[t] = sel.value; fillDropdowns(); applyColors(); };
  });
}

function updateTeams() {
  ["t1", "t2"].forEach(t => {
    $("team-" + t).classList.toggle("active", t === currentTeam);
    $("score-" + t).textContent = scores[t];
  });
}

function updateInfo() {
  const left = deck.filter(w => !tried.has(w.text)).length;
  const sounds = chosen.map(k => setLabels[k] || k).join(" · ");
  $("infoLine").textContent = `Sounds: ${sounds}  |  ${left} of ${deck.length} words left to spin · ${completed.size} read`;
}

function setSpinReady(on) {
  spinReady = on;
  spinWrap.classList.toggle("off", !on);
}

function switchTeam() {
  currentTeam = currentTeam === "t1" ? "t2" : "t1";
  updateTeams();
}

// teacher can tap a scoreboard to choose whose turn it is
document.querySelectorAll(".team").forEach(el => el.addEventListener("click", () => {
  if (spinning) return;
  currentTeam = el.dataset.team;
  updateTeams();
}));

// =====================================================
// SPIN
// =====================================================
function untriedIndexes() {
  const out = [];
  deck.forEach((w, i) => { if (!tried.has(w.text)) out.push(i); });
  return out;
}

function allDone() {
  wordBox.classList.remove("done", "super");
  $("superTag").classList.remove("show");
  renderPlaceholder("🎉 All words done! Press End Game");
  restart(wordBox, "shake"); sNo();
}

async function spin({ short = false } = {}) {
  if (spinning) return;
  let pool = untriedIndexes();
  if (!pool.length && short) {
    // Shuffle: fall back to words shown but not read yet
    deck.forEach((w, i) => { if (!completed.has(w.text) && i !== idx) pool.push(i); });
  }
  if (!pool.length) { allDone(); return false; }
  spinning = true;
  $("superTag").classList.remove("show");
  wordBox.classList.remove("done", "land", "super");
  wordBox.classList.add("spinning");

  const target = pool[Math.floor(Math.random() * pool.length)];
  const ticks = short ? 8 : 18;
  for (let t = 0; t < ticks; t++) {
    renderWord(deck[Math.floor(Math.random() * deck.length)]);
    restart(wordInner, "roll");
    sTick();
    await new Promise(r => setTimeout(r, 45 + t * t * (short ? 1.6 : 0.9)));
  }

  wordBox.classList.remove("spinning");
  showWord(target);
  restart(wordInner, "roll");
  restart(wordBox, "land");
  sLand();
  spinning = false;
  return true;
}

// press down / release on the spin button (mouse + touch)
spinBtn.addEventListener("pointerdown", () => {
  if (spinReady && !spinning) { spinBtn.classList.remove("bounce"); spinBtn.classList.add("pressed"); }
});
spinBtn.addEventListener("pointerup", () => {
  if (!spinBtn.classList.contains("pressed")) return;
  spinBtn.classList.remove("pressed");
  restart(spinBtn, "bounce");
});
["pointerleave", "pointercancel"].forEach(ev =>
  spinBtn.addEventListener(ev, () => spinBtn.classList.remove("pressed")));
spinBtn.addEventListener("animationend", () => spinBtn.classList.remove("bounce"));

spinBtn.addEventListener("click", async () => {
  if (!spinReady || spinning) { if (!spinning) sNo(); return; }
  if (!spinBtn.classList.contains("bounce")) restart(spinBtn, "bounce"); // keyboard / quick taps
  goldSparkles();
  setSpinReady(false);
  const ok = await spin();
  if (!ok) setSpinReady(true);
});

// =====================================================
// MARK COMPLETE (tap the white box)
// =====================================================

wordBox.addEventListener("pointerdown", () => {
  if (!spinning && idx >= 0 && !completed.has(deck[idx].text)) wordBox.classList.add("pressing");
});
["pointerup", "pointerleave", "pointercancel"].forEach(ev =>
  wordBox.addEventListener(ev, () => wordBox.classList.remove("pressing")));

wordBox.addEventListener("click", () => {
  wordBox.classList.remove("pressing");
  if (spinning || idx < 0) return;
  const w = deck[idx];
  if (completed.has(w.text)) { restart(wordBox, "shake"); return; }

  const coins = rewardFor(w);
  const color = pick(theme.done);
  completed.set(w.text, { coins, color });
  const team = currentTeam;

  const special = coins === 7;

  // bob down + release + shake, yellow star burst, then show the coins
  restart(wordBox, "bob");
  burstStars();
  special ? sFanfare() : sWin();
  setTimeout(() => {
    wordBox.style.setProperty("--done", color);
    wordBox.classList.add("done");
    $("superTag").classList.remove("show");
    if (special) wordBox.classList.add("super");
    renderReward(w, coins);
  }, 220);
  if (special) superCelebration();

  // money bags fly to the scoreboard, then score updates
  setTimeout(() => {
    flyBags(coins, team, () => {
      scores[team] += coins;
      updateTeams();
      restart($("score-" + team), "pop");

      const chip = document.createElement("span");
      chip.textContent = w.text;
      $("words-" + team).prepend(chip);

      // next team, and only now the spin button wakes up
      switchTeam();
      setSpinReady(true);
    });
  }, special ? 1800 : 900);

  updateInfo();
});

// 🌈 7-coin SUPER WORD: flash, rainbow box, spinning rays, firework waves
function superCelebration() {
  const flash = document.createElement("div");
  flash.className = "flash";
  $("fxLayer").appendChild(flash);
  setTimeout(() => flash.remove(), 700);

  const banner = document.createElement("div");
  banner.className = "super-banner";
  banner.textContent = "🌟 SUPER WORD! 🌟";
  $("fxLayer").appendChild(banner);
  setTimeout(() => banner.remove(), 2600);

  const fx = theme.superFx;
  for (let wave = 0; wave < 4; wave++) {
    setTimeout(() => {
      const x = window.innerWidth * (0.15 + Math.random() * 0.7);
      const y = window.innerHeight * (0.15 + Math.random() * 0.5);
      for (let i = 0; i < 22; i++) {
        const ang = (Math.PI * 2 * i) / 22;
        const dist = 120 + Math.random() * 160;
        particle("star", fx[i % fx.length], x, y, Math.cos(ang) * dist, Math.sin(ang) * dist, Math.random() * 0.1);
      }
      tone(300 + wave * 150, 0.25, "sine", 0.08);
    }, 300 + wave * 380);
  }
}

function centerOf(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height };
}

// ⭐ yellow stars all around the word box
function burstStars() {
  const c = centerOf(wordBox);
  const n = 34;
  for (let i = 0; i < n; i++) {
    const ang = (Math.PI * 2 * i) / n;
    // start on the edge of the box
    const sx = c.x + Math.cos(ang) * c.w * 0.5;
    const sy = c.y + Math.sin(ang) * c.h * 0.5;
    const dist = 90 + Math.random() * 160;
    particle("star", theme.burst[i % theme.burst.length], sx, sy, Math.cos(ang) * dist, Math.sin(ang) * dist, Math.random() * 0.15);
  }
}

// ✨ golden sparkles all around the spin box, flying outward
function goldSparkles() {
  const c = centerOf(spinWrap);
  sSparkle();

  const ring = document.createElement("div");
  ring.className = "spin-ring";
  ring.style.left = c.x + "px";
  ring.style.top = c.y + "px";
  ring.style.width = c.w + "px";
  ring.style.height = c.h + "px";
  $("fxLayer").appendChild(ring);
  setTimeout(() => ring.remove(), 900);

  const n = 26;
  for (let i = 0; i < n; i++) {
    const ang = (Math.PI * 2 * i) / n;
    const sx = c.x + Math.cos(ang) * c.w * 0.5;
    const sy = c.y + Math.sin(ang) * c.h * 0.5;
    const dist = 70 + Math.random() * 110;
    particle("sparkle", theme.sparkle[i % theme.sparkle.length], sx, sy, Math.cos(ang) * dist, Math.sin(ang) * dist, Math.random() * 0.08);
  }
}

function particle(cls, emoji, x, y, dx, dy, delay) {
  const el = document.createElement("div");
  el.className = cls;
  el.textContent = emoji;
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.setProperty("--dx", dx + "px");
  el.style.setProperty("--dy", dy + "px");
  el.style.setProperty("--rot", (Math.random() * 180 - 90) + "deg");
  el.style.setProperty("--s", (0.8 + Math.random() * 0.8).toFixed(2));
  el.style.animationDelay = delay + "s";
  $("fxLayer").appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function flyBags(count, team, done) {
  const from = centerOf(wordBox);
  const to = centerOf($("score-" + team));
  for (let i = 0; i < count; i++) {
    const bag = document.createElement("div");
    bag.className = "fly-bag";
    bag.textContent = theme.item;
    bag.style.left = from.x + (i - count / 2) * 34 + "px";
    bag.style.top = from.y + "px";
    $("fxLayer").appendChild(bag);
    setTimeout(() => {
      bag.style.left = to.x + "px";
      bag.style.top = to.y + "px";
      bag.classList.add("go");
      bag.style.opacity = "0";
    }, 60 + i * 70);
    setTimeout(() => bag.remove(), 1200 + i * 70);
  }
  setTimeout(done, 800 + count * 70);
}

// =====================================================
// MODERATOR BUTTONS
// =====================================================
// Shuffle / Previous / Next change the word for the SAME player
$("shuffleBtn").addEventListener("click", () => {
  if (spinning) return;
  // any random unread word (prefer ones not shown yet)
  let pool = untriedIndexes().filter(i => i !== idx);
  if (!pool.length) deck.forEach((w, i) => { if (!completed.has(w.text) && i !== idx) pool.push(i); });
  if (!pool.length) { allDone(); return; }
  showWord(pool[Math.floor(Math.random() * pool.length)]);
});

function shiftTo(dir) {
  if (spinning) return;
  const target = stepWord(dir);
  if (target < 0) { allDone(); return; }
  showWord(target);
}
$("prevWordBtn").addEventListener("click", () => shiftTo(-1));
$("nextWordBtn").addEventListener("click", () => shiftTo(1));

// Skip Turn: player couldn't read it → no coins, other team, spin wakes up
$("skipBtn").addEventListener("click", () => {
  if (spinning || spinReady) return;
  switchTeam();
  setSpinReady(true);
  wordBox.classList.remove("done", "super");
  $("superTag").classList.remove("show");
  renderPlaceholder("Press SPIN 👉");
});

$("mainMenuBtn").addEventListener("click", () => { window.location.href = "index.html"; });

// =====================================================
// END GAME
// =====================================================
$("endGameBtn").addEventListener("click", () => {
  const a = scores.t1, b = scores.t2;
  const wt = $("winnerText");
  if (a === b) {
    wt.style.color = "#333";
    wt.textContent = "🤝 It's a Tie!";
  } else {
    const win = a > b ? "t1" : "t2";
    wt.style.color = teamColors[teamColor[win]][0];
    wt.textContent = teamName(win) + " Wins!";
  }
  $("finalScores").innerHTML =
    `<b style="color:${teamColors[teamColor.t1][0]}">${teamName("t1")}: <span class="fnum">${a}</span> ${theme.item}</b> &nbsp;&nbsp; ` +
    `<b style="color:${teamColors[teamColor.t2][0]}">${teamName("t2")}: <span class="fnum">${b}</span> ${theme.item}</b>`;
  $("trophy").textContent = theme.trophy;
  $("endPopup").classList.add("show");
  popupBursts();
  confetti();
  sWin();
});

let confettiTimer = null;
function dropConfetti(n) {
  const bits = theme.confetti;
  for (let i = 0; i < n; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.textContent = bits[Math.floor(Math.random() * bits.length)];
    c.style.left = Math.random() * 100 + "vw";
    const dur = 1.8 + Math.random() * 2;
    c.style.animationDuration = dur + "s";
    c.style.animationDelay = Math.random() * 0.4 + "s";
    $("fxLayer").appendChild(c);
    setTimeout(() => c.remove(), (dur + 0.5) * 1000);
  }
}
// keeps raining until stopConfetti()
function confetti() {
  stopConfetti();
  dropConfetti(60);
  confettiTimer = setInterval(() => dropConfetti(10), 150);
}
let popupTimer = null;
// confetti bursting out of the popup, again and again
function popupBursts() {
  const burst = () => {
    const bits = theme.confetti;
    const c = centerOf(document.querySelector(".popup-content"));
    const n = 32;
    for (let i = 0; i < n; i++) {
      const ang = (Math.PI * 2 * i) / n + Math.random() * 0.2;
      const sx = c.x + Math.cos(ang) * c.w * 0.5;
      const sy = c.y + Math.sin(ang) * c.h * 0.5;
      const dist = 80 + Math.random() * 150;
      particle("star", bits[i % bits.length], sx, sy, Math.cos(ang) * dist, Math.sin(ang) * dist, Math.random() * 0.1);
    }
  };
  burst();
  popupTimer = setInterval(burst, 550);
}
function stopConfetti() {
  if (confettiTimer) clearInterval(confettiTimer);
  if (popupTimer) clearInterval(popupTimer);
  confettiTimer = popupTimer = null;
}

$("playAgainBtn").addEventListener("click", () => {
  stopConfetti();
  $("endPopup").classList.remove("show");
  startGame();
});
$("popupMenuBtn").addEventListener("click", () => { stopConfetti(); window.location.href = "index.html"; });
$("closePopupBtn").addEventListener("click", () => { stopConfetti(); $("endPopup").classList.remove("show"); });

// =====================================================
// START
// =====================================================
function startGame() {
  resetState();
  ["t1", "t2"].forEach(t => $("words-" + t).innerHTML = "");
  wordBox.classList.remove("done", "super");
  $("superTag").classList.remove("show");
  renderPlaceholder("Press SPIN 👉");
  setSpinReady(true);
  updateTeams();
  updateInfo();
}

window.addEventListener("resize", () => {
  if (wordInner.classList.contains("placeholder")) renderPlaceholder(wordInner.textContent);
  else if (wordInner.classList.contains("reward") && idx >= 0) renderReward(deck[idx], completed.get(deck[idx].text).coins);
  else if (idx >= 0) fitWord();
});

function applyTheme(key) {
  theme = themes[key];
  document.body.dataset.theme = key;
  $("title").textContent = theme.title;
  document.title = theme.title.replace(/^\S+\s/, "") + " Game";
  document.querySelectorAll(".team-score .bag").forEach(el => el.textContent = theme.item);
  document.querySelectorAll("#spinBtn .glit").forEach((el, i) => el.textContent = theme.glit[i % theme.glit.length]);
  $("superTag").textContent = `🌟 Super Word! 7 ${theme.many} 🌟`;
  $("trophy").textContent = theme.trophy;
  // re-colour a reward that is on screen now
  if (wordInner.classList.contains("reward") && idx >= 0 && completed.has(deck[idx].text)) {
    const c = completed.get(deck[idx].text);
    c.color = pick(theme.done);
    wordBox.style.setProperty("--done", c.color);
    renderReward(deck[idx], c.coins);
  }
}
// ➕➖ word box + spin box size (remembered on this device)
let zoom = 1;
try { zoom = parseFloat(localStorage.getItem("spinblend_zoom")) || 1; } catch (e) {}
function setZoom(z) {
  zoom = Math.min(1.8, Math.max(0.6, Math.round(z * 10) / 10));
  document.documentElement.style.setProperty("--zoom", zoom);
  $("zoomVal").textContent = Math.round(zoom * 100) + "%";
  try { localStorage.setItem("spinblend_zoom", zoom); } catch (e) {}
  requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
}
$("zoomIn").addEventListener("click", () => setZoom(zoom + 0.1));
$("zoomOut").addEventListener("click", () => setZoom(zoom - 0.1));
setZoom(zoom);

$("themeSel").value = "coins";
$("themeSel").addEventListener("change", e => applyTheme(e.target.value));

fillDropdowns();
applyColors();
applyTheme("coins");
startGame();
