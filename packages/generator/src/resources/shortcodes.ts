/* eslint-disable sort-keys */

/**
 * Official Emojibase shortcodes list.
 *
 * NAMING GUIDELINES
 *
 *  - Gender neutral emoji must be prefixed with "person_",
 *    while female emoji use "woman_", and male "man_".
 *    Plural forms use "people_", "women_", and "men_".
 *    In rare occasions, the gender can be suffixed,
 *    like "bald_man" or "blonde_woman".
 *
 *  - Animals depicted from the side use the animal name,
 *    while animals depicted with a head, or a face,
 *    must use the animal name suffixed with "_face".
 *
 *  - Japenese specific emoji must be prefixed with "ja_".
 *
 *  - Specifiers, like color or size, must be used as a
 *    prefix. For example, "small_", or "red_".
 *
 *  - Use a more descriptive term over the annotation if
 *    applicable. For example, "storm" over the annotation
 *    "cloud with lightning and rain".
 *
 *  - Use emotions when describing smiley faces. For example,
 *    "happy" over the annotation "smiling face with open
 *    mouth & smiling eyes".
 *    https://www.dailywritingtips.com/100-words-for-facial-expressions/
 *
 *  - Hexcodes that end in a variation selector 16 (FE0F) and their
 *    leading hexcode already exists as another emoji, must reference that
 *    emoji by setting their value to that hexcode (and not shortcodes).
 *
 * ADDING SHORTCODES
 *
 * Please submit a PR with the addition so that it
 * may be discussed.
 *
 * RENAMING/REMOVING SHORTCODES
 *
 * Shortcodes are meant to be permanent, and should never
 * change (excluding typos), as to not destroy historical
 * usage of the shortcode. If a more descriptive term
 * is wanted, or the Unicode standard has changed meaning
 * or naming, we should persist the original shortcode.
 * We can do this by shifting the old shortcode to the end
 * of the array, while placing the new shortcode at the
 * beginning. This allows for backwards compatible changes.
 */

export default {
  // VERSION 1
  // 🏽 medium skin tone
  '1F3FD': ['skin_tone_medium', 'tone3'],
  // 😀 grinning face
  '1F600': ['gleeful'],
  // 😃 grinning face with big eyes
  '1F603': ['glad', 'smile'],
  // 😄 grinning face with smiling eyes
  '1F604': ['happy'],
  // 😁 beaming face with smiling eyes
  '1F601': ['blissful', 'grin'],
  // 😆 grinning squinting face
  '1F606': ['amused', 'laugh', 'lol'],
  // 😅 grinning face with sweat
  '1F605': ['embarassed'],
  // 😂 face with tears of joy
  '1F602': ['joyful', 'haha'],
  // 🙂 slightly smiling face
  '1F642': ['pleased'],
  // 🙃 upside-down face
  '1F643': ['ecstatic', 'upside_down'],
  // 😉 winking face
  '1F609': ['coy', 'wink'],
  // 😊 smiling face with smiling eyes
  '1F60A': ['anxious', 'blush'],
  // 😇 smiling face with halo
  '1F607': ['innocent', 'halo'],
  // 😍 smiling face with heart-eyes
  '1F60D': ['lovestruck'],
  // 😘 face blowing a kiss
  '1F618': ['flirty'],
  // 😗 kissing face
  '1F617': ['kiss'],
  // ☺️ smiling face
  '263A': ['relaxed'],
  // 😚 kissing face with closed eyes
  '1F61A': ['loving_kiss'],
  // 😙 kissing face with smiling eyes
  '1F619': ['happy_kiss'],
  // 😋 face savoring food
  '1F60B': ['yum', 'savour'],
  // 😛 face with tongue
  '1F61B': ['playful', 'tongue_out'],
  // 😜 winking face with tongue
  '1F61C': ['mischievous'],
  // 😝 squinting face with tongue
  '1F61D': ['facetious', 'lmao'],
  // 🤑 money-mouth face
  '1F911': ['pretentious', 'money_mouth'],
  // 🤗 hugging face
  '1F917': ['hugging'],
  // 🤔 thinking face
  '1F914': ['curious', 'thinking'],
  // 🤐 zipper-mouth face
  '1F910': ['silenced', 'zipper_mouth'],
  // 😐️ neutral face
  '1F610': ['indifferent', 'neutral'],
  // 😑 expressionless face
  '1F611': ['apathetic', 'expressionless'],
  // 😶 face without mouth
  '1F636': ['vacant', 'no_mouth'],
  // 😏 smirking face
  '1F60F': ['cocky', 'smirk'],
  // 😒 unamused face
  '1F612': ['unamused'],
  // 🙄 face with rolling eyes
  '1F644': ['disbelief'],
  // 😬 grimacing face
  '1F62C': ['grimaced'],
  // 😌 relieved face
  '1F60C': ['relieved'],
  // 😔 pensive face
  '1F614': ['pensive'],
  // 😪 sleepy face
  '1F62A': ['sleepy'],
  // 😴 sleeping face
  '1F634': ['exhausted', 'sleeping'],
  // 😷 face with medical mask
  '1F637': ['ill', 'mask'],
  // 🤒 face with thermometer
  '1F912': ['sick'],
  // 🤕 face with head-bandage
  '1F915': ['injured'],
  // 😵 dizzy face
  '1F635': ['dizzy'],
  // 😎 smiling face with sunglasses
  '1F60E': ['confident'],
  // 🤓 nerd face
  '1F913': ['nerd'],
  // 😕 confused face
  '1F615': ['confused'],
  // 😟 worried face
  '1F61F': ['worried'],
  // 🙁 slightly frowning face
  '1F641': ['cheerless'],
  // ☹️ frowning face
  '2639': ['sad', 'frowning'],
  // 😮 face with open mouth
  '1F62E': ['surprised'],
  // 😯 hushed face
  '1F62F': ['hushed'],
  // 😲 astonished face
  '1F632': ['astonished'],
  // 😳 flushed face
  '1F633': ['flushed'],
  // 😦 frowning face with open mouth
  '1F626': ['bored'],
  // 😧 anguished face
  '1F627': ['anguished', 'wtf'],
  // 😨 fearful face
  '1F628': ['fearful'],
  // 😰 anxious face with sweat
  '1F630': ['frustrated'],
  // 😥 sad but relieved face
  '1F625': ['hopeful'],
  // 😢 crying face
  '1F622': ['upset', 'cry'],
  // 😭 loudly crying face
  '1F62D': ['distressed', 'sob'],
  // 😱 face screaming in fear
  '1F631': ['frightened', 'scream'],
  // 😖 confounded face
  '1F616': ['confounded'],
  // 😣 persevering face
  '1F623': ['persevered'],
  // 😞 disappointed face
  '1F61E': ['disappointed'],
  // 😓 downcast face with sweat
  '1F613': ['shamed'],
  // 😩 weary face
  '1F629': ['weary'],
  // 😫 tired face
  '1F62B': ['tired'],
  // 😤 face with steam from nose
  '1F624': ['annoyed', 'hrmph'],
  // 😡 pouting face
  '1F621': ['enraged', 'pout'],
  // 😠 angry face
  '1F620': ['angry'],
  // 😈 smiling face with horns
  '1F608': ['imp'],
  // 👿 angry face with horns
  '1F47F': ['angry_imp'],
  // 💀 skull
  '1F480': ['skull'],
  // ☠️ skull and crossbones
  '2620': ['crossbones'],
  // 💩 pile of poo
  '1F4A9': ['poop'],
  // 👹 ogre
  '1F479': ['ogre'],
  // 👺 goblin
  '1F47A': ['goblin'],
  // 👻 ghost
  '1F47B': ['ghost'],
  // 👽️ alien
  '1F47D': ['alien'],
  // 👾 alien monster
  '1F47E': ['alien_monster', 'space_invader'],
  // 🤖 robot
  '1F916': ['robot'],
  // 😺 grinning cat
  '1F63A': ['smiling_cat'],
  // 😸 grinning cat with smiling eyes
  '1F638': ['grinning_cat'],
  // 😹 cat with tears of joy
  '1F639': ['joyful_cat'],
  // 😻 smiling cat with heart-eyes
  '1F63B': ['lovestruck_cat'],
  // 😼 cat with wry smile
  '1F63C': ['smirking_cat'],
  // 😽 kissing cat
  '1F63D': ['kissing_cat'],
  // 🙀 weary cat
  '1F640': ['weary_cat'],
  // 😿 crying cat
  '1F63F': ['crying_cat'],
  // 😾 pouting cat
  '1F63E': ['pouting_cat'],
  // 🙈 see-no-evil monkey
  '1F648': ['see_no_evil'],
  // 🙉 hear-no-evil monkey
  '1F649': ['hear_no_evil'],
  // 🙊 speak-no-evil monkey
  '1F64A': ['speak_no_evil'],
  // 💋 kiss mark
  '1F48B': ['kiss_lips'],
  // 💌 love letter
  '1F48C': ['love_letter'],
  // 💘 heart with arrow
  '1F498': ['cupid'],
  // 💝 heart with ribbon
  '1F49D': ['heart_ribbon'],
  // 💖 sparkling heart
  '1F496': ['sparkling_heart'],
  // 💗 growing heart
  '1F497': ['heartpulse'],
  // 💓 beating heart
  '1F493': ['heartbeat'],
  // 💞 revolving hearts
  '1F49E': ['revolving_hearts'],
  // 💕 two hearts
  '1F495': ['two_hearts'],
  // 💟 heart decoration
  '1F49F': ['heart_decoration'],
  // ❣️ heart exclamation
  '2763': ['heart_exclamation'],
  // 💔 broken heart
  '1F494': ['broken_heart'],
  // ❤️ red heart
  '2764': ['heart'],
  // 💛 yellow heart
  '1F49B': ['yellow_heart'],
  // 💚 green heart
  '1F49A': ['green_heart'],
  // 💙 blue heart
  '1F499': ['blue_heart'],
  // 💜 purple heart
  '1F49C': ['purple_heart'],
  // 💯 hundred points
  '1F4AF': ['100'],
  // 💢 anger symbol
  '1F4A2': ['anger'],
  // 💥 collision
  '1F4A5': ['boom', 'collision'],
  // 💫 dizzy
  '1F4AB': ['dizzy_star'],
  // 💦 sweat droplets
  '1F4A6': ['sweat_drops'],
  // 💨 dashing away
  '1F4A8': ['dash'],
  // 🕳️ hole
  '1F573': ['hole'],
  // 💣️ bomb
  '1F4A3': ['bomb'],
  // 💬 speech balloon
  '1F4AC': ['speech'],
  // 🗯️ right anger bubble
  '1F5EF': ['right_anger_speech'],
  // 💭 thought balloon
  '1F4AD': ['thought'],
  // 💤 zzz
  '1F4A4': ['zzz'],
  // 👋 waving hand
  '1F44B': ['wave'],
  // 🖐️ hand with fingers splayed
  '1F590': ['splayed_hand'],
  // ✋ raised hand
  '270B': ['raised_hand'],
  // 🖖 vulcan salute
  '1F596': ['vulcan'],
  // 👌 OK hand
  '1F44C': ['ok_hand'],
  // ✌️ victory hand
  '270C': ['victory'],
  // 🤘 sign of the horns
  '1F918': ['metal'],
  // 👈️ backhand index pointing left
  '1F448': ['point_left'],
  // 👉️ backhand index pointing right
  '1F449': ['point_right'],
  // 👆️ backhand index pointing up
  '1F446': ['backhand_point_up'],
  // 🖕 middle finger
  '1F595': ['middle_finger'],
  // 👇️ backhand index pointing down
  '1F447': ['point_down'],
  // ☝️ index pointing up
  '261D': ['point_up'],
  // 👍️ thumbs up
  '1F44D': ['thumbsup', '+1', 'yes'],
  // 👎️ thumbs down
  '1F44E': ['thumbsdown', '-1', 'no'],
  // ✊ raised fist
  '270A': ['fist'],
  // 👊 oncoming fist
  '1F44A': ['punch'],
  // 👏 clapping hands
  '1F44F': ['clap'],
  // 🙌 raising hands
  '1F64C': ['raised_hands'],
  // 👐 open hands
  '1F450': ['open_hands'],
  // 🙏 folded hands
  '1F64F': ['pray'],
  // ✍️ writing hand
  '270D': ['writing_hand'],
  // 💅 nail polish
  '1F485': ['nail_care'],
  // 💪 flexed biceps
  '1F4AA': ['muscle', 'right_bicep'],
  // 👂️ ear
  '1F442': ['ear'],
  // 👃 nose
  '1F443': ['nose'],
  // 👀 eyes
  '1F440': ['eyes'],
  // 👁️ eye
  '1F441': ['eye'],
  // 👅 tongue
  '1F445': ['tongue'],
  // 👄 mouth
  '1F444': ['lips'],
  // 👶 baby
  '1F476': ['baby'],
  // 👦 boy
  '1F466': ['boy'],
  // 👧 girl
  '1F467': ['girl'],
  // 👱 person: blond hair
  '1F471': ['blond_person'],
  // 👨 man
  '1F468': ['man'],
  // 👩 woman
  '1F469': ['woman'],
  // 👴 old man
  '1F474': ['older_man'],
  // 👵 old woman
  '1F475': ['older_woman'],
  // 🙍 person frowning
  '1F64D': ['person_frowning'],
  // 🙎 person pouting
  '1F64E': ['person_pouting'],
  // 🙅 person gesturing NO
  '1F645': ['person_gesturing_no'],
  // 🙆 person gesturing OK
  '1F646': ['person_gesturing_ok'],
  // 💁 person tipping hand
  '1F481': ['person_tipping_hand'],
  // 🙋 person raising hand
  '1F64B': ['person_raising_hand'],
  // 🙇 person bowing
  '1F647': ['person_bowing'],
  // 👮 police officer
  '1F46E': ['police_officer'],
  // 🕵️ detective
  '1F575': ['detective'],
  // 💂 guard
  '1F482': ['guard'],
  // 👷 construction worker
  '1F477': ['construction_worker'],
  // 👸 princess
  '1F478': ['princess'],
  // 👳 person wearing turban
  '1F473': ['person_turban'],
  // 👲 man with Chinese cap
  '1F472': ['man_chinese_cap'],
  // 👰 bride with veil
  '1F470': ['bride_veil'],
  // 👼 baby angel
  '1F47C': ['baby_angel'],
  // 🎅 Santa Claus
  '1F385': ['santa'],
  // 💆 person getting massage
  '1F486': ['person_getting_massage'],
  // 💇 person getting haircut
  '1F487': ['person_getting_haircut'],
  // 🚶 person walking
  '1F6B6': ['person_walking'],
  // 🏃 person running
  '1F3C3': ['person_running'],
  // 💃 woman dancing
  '1F483': ['dancer', 'woman_dancing'],
  // 🕴️ man in suit levitating
  '1F574': ['levitate'],
  // 👯 people with bunny ears
  '1F46F': ['people_bunny_ears_partying'],
  // 🏇 horse racing
  '1F3C7': ['horse_racing'],
  // ⛷️ skier
  '26F7': ['skier'],
  // 🏂️ snowboarder
  '1F3C2': ['snowboarder'],
  // 🏌️ person golfing
  '1F3CC': ['person_golfing'],
  // 🏄️ person surfing
  '1F3C4': ['person_surfing'],
  // 🚣 person rowing boat
  '1F6A3': ['person_rowing_boat'],
  // 🏊️ person swimming
  '1F3CA': ['person_swimming'],
  // ⛹️ person bouncing ball
  '26F9': ['person_bouncing_ball'],
  // 🏋️ person lifting weights
  '1F3CB': ['person_lifting_weights'],
  // 🚴 person biking
  '1F6B4': ['person_biking'],
  // 🚵 person mountain biking
  '1F6B5': ['person_mountain_biking'],
  // 🛀 person taking bath
  '1F6C0': ['bath'],
  // 🛌 person in bed
  '1F6CC': ['in_bed'],
  // 👭 women holding hands
  '1F46D': ['holding_hands_ww'],
  // 👫 woman and man holding hands
  '1F46B': ['holding_hands_mw', 'holding_hands_wm'],
  // 👬 men holding hands
  '1F46C': ['holding_hands_mm'],
  // 💏 kiss
  '1F48F': ['couple'],
  // 💑 couple with heart
  '1F491': ['couple_heart'],
  // 👪️ family
  '1F46A': ['family'],
  // 🗣️ speaking head
  '1F5E3': ['speaking_head'],
  // 👤 bust in silhouette
  '1F464': ['bust_silhouette'],
  // 👥 busts in silhouette
  '1F465': ['busts_silhouette'],
  // 👣 footprints
  '1F463': ['footprints'],
  // 🐵 monkey face
  '1F435': ['monkey_face'],
  // 🐒 monkey
  '1F412': ['monkey'],
  // 🐶 dog face
  '1F436': ['dog_face'],
  // 🐕️ dog
  '1F415': ['dog'],
  // 🐩 poodle
  '1F429': ['poodle'],
  // 🐺 wolf
  '1F43A': ['wolf_face'],
  // 🐱 cat face
  '1F431': ['cat_face'],
  // 🐈️ cat
  '1F408': ['cat'],
  // 🦁 lion
  '1F981': ['lion_face'],
  // 🐯 tiger face
  '1F42F': ['tiger_face'],
  // 🐅 tiger
  '1F405': ['tiger'],
  // 🐆 leopard
  '1F406': ['leopard'],
  // 🐴 horse face
  '1F434': ['horse_face'],
  // 🐎 horse
  '1F40E': ['horse'],
  // 🦄 unicorn
  '1F984': ['unicorn_face'],
  // 🐮 cow face
  '1F42E': ['cow_face'],
  // 🐂 ox
  '1F402': ['ox'],
  // 🐃 water buffalo
  '1F403': ['water_buffalo'],
  // 🐄 cow
  '1F404': ['cow'],
  // 🐷 pig face
  '1F437': ['pig_face'],
  // 🐖 pig
  '1F416': ['pig'],
  // 🐗 boar
  '1F417': ['boar'],
  // 🐽 pig nose
  '1F43D': ['pig_nose'],
  // 🐏 ram
  '1F40F': ['ram'],
  // 🐑 ewe
  '1F411': ['sheep'],
  // 🐐 goat
  '1F410': ['goat'],
  // 🐪 camel
  '1F42A': ['camel'],
  // 🐫 two-hump camel
  '1F42B': ['two_hump_camel'],
  // 🐘 elephant
  '1F418': ['elephant'],
  // 🐭 mouse face
  '1F42D': ['mouse_face'],
  // 🐁 mouse
  '1F401': ['mouse'],
  // 🐀 rat
  '1F400': ['rat'],
  // 🐹 hamster
  '1F439': ['hamster_face'],
  // 🐰 rabbit face
  '1F430': ['rabbit_face'],
  // 🐇 rabbit
  '1F407': ['rabbit'],
  // 🐿️ chipmunk
  '1F43F': ['chipmunk'],
  // 🐻 bear
  '1F43B': ['bear_face'],
  // 🐨 koala
  '1F428': ['koala_face'],
  // 🐼 panda
  '1F43C': ['panda_face'],
  // 🐾 paw prints
  '1F43E': ['feet'],
  // 🦃 turkey
  '1F983': ['turkey'],
  // 🐔 chicken
  '1F414': ['chicken'],
  // 🐓 rooster
  '1F413': ['rooster'],
  // 🐣 hatching chick
  '1F423': ['hatching_chick'],
  // 🐤 baby chick
  '1F424': ['baby_chick'],
  // 🐥 front-facing baby chick
  '1F425': ['hatched_chick'],
  // 🐦️ bird
  '1F426': ['bird'],
  // 🐧 penguin
  '1F427': ['penguin'],
  // 🕊️ dove
  '1F54A': ['dove'],
  // 🐸 frog
  '1F438': ['frog_face'],
  // 🐊 crocodile
  '1F40A': ['crocodile'],
  // 🐢 turtle
  '1F422': ['turtle'],
  // 🐍 snake
  '1F40D': ['snake'],
  // 🐲 dragon face
  '1F432': ['dragon_face'],
  // 🐉 dragon
  '1F409': ['dragon'],
  // 🐳 spouting whale
  '1F433': ['spouting_whale'],
  // 🐋 whale
  '1F40B': ['whale'],
  // 🐬 dolphin
  '1F42C': ['dolphin'],
  // 🐟️ fish
  '1F41F': ['fish'],
  // 🐠 tropical fish
  '1F420': ['tropical_fish'],
  // 🐡 blowfish
  '1F421': ['blowfish'],
  // 🐙 octopus
  '1F419': ['octopus'],
  // 🐚 spiral shell
  '1F41A': ['shell'],
  // 🐌 snail
  '1F40C': ['snail'],
  // 🐛 bug
  '1F41B': ['bug'],
  // 🐜 ant
  '1F41C': ['ant'],
  // 🐝 honeybee
  '1F41D': ['bee'],
  // 🐞 lady beetle
  '1F41E': ['beetle'],
  // 🕷️ spider
  '1F577': ['spider'],
  // 🕸️ spider web
  '1F578': ['spider_web'],
  // 🦂 scorpion
  '1F982': ['scorpion'],
  // 💐 bouquet
  '1F490': ['bouquet'],
  // 🌸 cherry blossom
  '1F338': ['cherry_blossom'],
  // 💮 white flower
  '1F4AE': ['white_flower'],
  // 🏵️ rosette
  '1F3F5': ['rosette'],
  // 🌹 rose
  '1F339': ['rose'],
  // 🌺 hibiscus
  '1F33A': ['hibiscus'],
  // 🌻 sunflower
  '1F33B': ['sunflower'],
  // 🌼 blossom
  '1F33C': ['blossom'],
  // 🌷 tulip
  '1F337': ['tulip'],
  // 🌱 seedling
  '1F331': ['seedling'],
  // 🌲 evergreen tree
  '1F332': ['evergreen_tree'],
  // 🌳 deciduous tree
  '1F333': ['deciduous_tree'],
  // 🌴 palm tree
  '1F334': ['palm_tree'],
  // 🌵 cactus
  '1F335': ['cactus'],
  // 🌾 sheaf of rice
  '1F33E': ['ear_of_rice'],
  // 🌿 herb
  '1F33F': ['herb'],
  // ☘️ shamrock
  '2618': ['shamrock'],
  // 🍀 four leaf clover
  '1F340': ['four_leaf_clover'],
  // 🍁 maple leaf
  '1F341': ['maple_leaf'],
  // 🍂 fallen leaf
  '1F342': ['fallen_leaf'],
  // 🍃 leaf fluttering in wind
  '1F343': ['leaves'],
  // 🍇 grapes
  '1F347': ['grapes'],
  // 🍈 melon
  '1F348': ['melon'],
  // 🍉 watermelon
  '1F349': ['watermelon'],
  // 🍊 tangerine
  '1F34A': ['tangerine'],
  // 🍋 lemon
  '1F34B': ['lemon'],
  // 🍌 banana
  '1F34C': ['banana'],
  // 🍍 pineapple
  '1F34D': ['pineapple'],
  // 🍎 red apple
  '1F34E': ['apple'],
  // 🍏 green apple
  '1F34F': ['green_apple'],
  // 🍐 pear
  '1F350': ['pear'],
  // 🍑 peach
  '1F351': ['peach'],
  // 🍒 cherries
  '1F352': ['cherries'],
  // 🍓 strawberry
  '1F353': ['strawberry'],
  // 🍅 tomato
  '1F345': ['tomato'],
  // 🍆 eggplant
  '1F346': ['eggplant'],
  // 🌽 ear of corn
  '1F33D': ['corn'],
  // 🌶️ hot pepper
  '1F336': ['hot_pepper'],
  // 🍄 mushroom
  '1F344': ['mushroom'],
  // 🌰 chestnut
  '1F330': ['chestnut'],
  // 🍞 bread
  '1F35E': ['bread'],
  // 🧀 cheese wedge
  '1F9C0': ['cheese'],
  // 🍖 meat on bone
  '1F356': ['meat_on_bone'],
  // 🍗 poultry leg
  '1F357': ['poultry_leg'],
  // 🍔 hamburger
  '1F354': ['hamburger'],
  // 🍟 french fries
  '1F35F': ['fries'],
  // 🍕 pizza
  '1F355': ['pizza'],
  // 🌭 hot dog
  '1F32D': ['hotdog'],
  // 🌮 taco
  '1F32E': ['taco'],
  // 🌯 burrito
  '1F32F': ['burrito'],
  // 🍳 cooking
  '1F373': ['cooking'],
  // 🍲 pot of food
  '1F372': ['stew'],
  // 🍿 popcorn
  '1F37F': ['popcorn'],
  // 🍱 bento box
  '1F371': ['bento'],
  // 🍘 rice cracker
  '1F358': ['rice_cracker'],
  // 🍙 rice ball
  '1F359': ['rice_ball'],
  // 🍚 cooked rice
  '1F35A': ['rice'],
  // 🍛 curry rice
  '1F35B': ['curry'],
  // 🍜 steaming bowl
  '1F35C': ['ramen'],
  // 🍝 spaghetti
  '1F35D': ['spaghetti'],
  // 🍠 roasted sweet potato
  '1F360': ['sweet_potato'],
  // 🍢 oden
  '1F362': ['oden'],
  // 🍣 sushi
  '1F363': ['sushi'],
  // 🍤 fried shrimp
  '1F364': ['fried_shrimp'],
  // 🍥 fish cake with swirl
  '1F365': ['fish_cake'],
  // 🍡 dango
  '1F361': ['dango'],
  // 🦀 crab
  '1F980': ['crab'],
  // 🍦 soft ice cream
  '1F366': ['icecream'],
  // 🍧 shaved ice
  '1F367': ['shaved_ice'],
  // 🍨 ice cream
  '1F368': ['ice_cream'],
  // 🍩 doughnut
  '1F369': ['doughnut'],
  // 🍪 cookie
  '1F36A': ['cookie'],
  // 🎂 birthday cake
  '1F382': ['birthday'],
  // 🍰 shortcake
  '1F370': ['cake'],
  // 🍫 chocolate bar
  '1F36B': ['chocolate_bar'],
  // 🍬 candy
  '1F36C': ['candy'],
  // 🍭 lollipop
  '1F36D': ['lollipop'],
  // 🍮 custard
  '1F36E': ['custard'],
  // 🍯 honey pot
  '1F36F': ['honey_pot'],
  // 🍼 baby bottle
  '1F37C': ['baby_bottle'],
  // ☕️ hot beverage
  '2615': ['coffee'],
  // 🍵 teacup without handle
  '1F375': ['tea'],
  // 🍶 sake
  '1F376': ['sake'],
  // 🍾 bottle with popping cork
  '1F37E': ['champagne'],
  // 🍷 wine glass
  '1F377': ['wine_glass'],
  // 🍸️ cocktail glass
  '1F378': ['cocktail'],
  // 🍹 tropical drink
  '1F379': ['tropical_drink'],
  // 🍺 beer mug
  '1F37A': ['beer'],
  // 🍻 clinking beer mugs
  '1F37B': ['beers'],
  // 🍽️ fork and knife with plate
  '1F37D': ['fork_knife_plate'],
  // 🍴 fork and knife
  '1F374': ['utensils'],
  // 🔪 kitchen knife
  '1F52A': ['knife'],
  // 🏺 amphora
  '1F3FA': ['amphora'],
  // 🌍️ globe showing Europe-Africa
  '1F30D': ['earth_africa'],
  // 🌎️ globe showing Americas
  '1F30E': ['earth_americas'],
  // 🌏️ globe showing Asia-Australia
  '1F30F': ['earth_asia'],
  // 🌐 globe with meridians
  '1F310': ['globe'],
  // 🗺️ world map
  '1F5FA': ['map'],
  // 🗾 map of Japan
  '1F5FE': ['japan'],
  // 🏔️ snow-capped mountain
  '1F3D4': ['snowy_mountain'],
  // ⛰️ mountain
  '26F0': ['mountain'],
  // 🌋 volcano
  '1F30B': ['volcano'],
  // 🗻 mount fuji
  '1F5FB': ['mount_fuji'],
  // 🏕️ camping
  '1F3D5': ['camping'],
  // 🏖️ beach with umbrella
  '1F3D6': ['beach'],
  // 🏜️ desert
  '1F3DC': ['desert'],
  // 🏝️ desert island
  '1F3DD': ['island'],
  // 🏞️ national park
  '1F3DE': ['park'],
  // 🏟️ stadium
  '1F3DF': ['stadium'],
  // 🏛️ classical building
  '1F3DB': ['classical_building'],
  // 🏗️ building construction
  '1F3D7': ['construction_site'],
  // 🏘️ houses
  '1F3D8': ['homes'],
  // 🏚️ derelict house
  '1F3DA': ['house_abandoned'],
  // 🏠️ house
  '1F3E0': ['house'],
  // 🏡 house with garden
  '1F3E1': ['house_garden'],
  // 🏢 office building
  '1F3E2': ['office'],
  // 🏣 Japanese post office
  '1F3E3': ['ja_post_office'],
  // 🏤 post office
  '1F3E4': ['post_office'],
  // 🏥 hospital
  '1F3E5': ['hospital'],
  // 🏦 bank
  '1F3E6': ['bank'],
  // 🏨 hotel
  '1F3E8': ['hotel'],
  // 🏩 love hotel
  '1F3E9': ['love_hotel'],
  // 🏪 convenience store
  '1F3EA': ['convenience_store'],
  // 🏫 school
  '1F3EB': ['school'],
  // 🏬 department store
  '1F3EC': ['department_store'],
  // 🏭️ factory
  '1F3ED': ['factory'],
  // 🏯 Japanese castle
  '1F3EF': ['japanese_castle'],
  // 🏰 castle
  '1F3F0': ['castle', 'european_castle'],
  // 💒 wedding
  '1F492': ['wedding'],
  // 🗼 Tokyo tower
  '1F5FC': ['tokyo_tower'],
  // 🗽 Statue of Liberty
  '1F5FD': ['statue_of_liberty'],
  // ⛪️ church
  '26EA': ['church'],
  // 🕌 mosque
  '1F54C': ['mosque'],
  // 🕍 synagogue
  '1F54D': ['synagogue'],
  // ⛩️ shinto shrine
  '26E9': ['shinto_shrine'],
  // 🕋 kaaba
  '1F54B': ['kaaba'],
  // ⛲️ fountain
  '26F2': ['fountain'],
  // ⛺️ tent
  '26FA': ['tent'],
  // 🌁 foggy
  '1F301': ['foggy'],
  // 🌃 night with stars
  '1F303': ['night_stars'],
  // 🏙️ cityscape
  '1F3D9': ['cityscape'],
  // 🌄 sunrise over mountains
  '1F304': ['sunrise_over_mountains'],
  // 🌅 sunrise
  '1F305': ['sunrise'],
  // 🌆 cityscape at dusk
  '1F306': ['dusk'],
  // 🌇 sunset
  '1F307': ['sunset'],
  // 🌉 bridge at night
  '1F309': ['bridge_at_night'],
  // ♨️ hot springs
  '2668': ['hotsprings'],
  // 🎠 carousel horse
  '1F3A0': ['carousel_horse'],
  // 🎡 ferris wheel
  '1F3A1': ['ferris_wheel'],
  // 🎢 roller coaster
  '1F3A2': ['roller_coaster'],
  // 💈 barber pole
  '1F488': ['barber'],
  // 🎪 circus tent
  '1F3AA': ['circus_tent'],
  // 🚂 locomotive
  '1F682': ['steam_locomotive'],
  // 🚃 railway car
  '1F683': ['railway_car'],
  // 🚄 high-speed train
  '1F684': ['bullettrain_side'],
  // 🚅 bullet train
  '1F685': ['bullettrain'],
  // 🚆 train
  '1F686': ['train'],
  // 🚇️ metro
  '1F687': ['metro'],
  // 🚈 light rail
  '1F688': ['light_rail'],
  // 🚉 station
  '1F689': ['station'],
  // 🚊 tram
  '1F68A': ['tram'],
  // 🚝 monorail
  '1F69D': ['monorail'],
  // 🚞 mountain railway
  '1F69E': ['mountain_railway'],
  // 🚋 tram car
  '1F68B': ['tram_car'],
  // 🚌 bus
  '1F68C': ['bus'],
  // 🚍️ oncoming bus
  '1F68D': ['oncoming_bus'],
  // 🚎 trolleybus
  '1F68E': ['trolleybus'],
  // 🚐 minibus
  '1F690': ['minibus'],
  // 🚑️ ambulance
  '1F691': ['ambulance'],
  // 🚒 fire engine
  '1F692': ['fire_engine'],
  // 🚓 police car
  '1F693': ['police_car'],
  // 🚔️ oncoming police car
  '1F694': ['oncoming_police_car'],
  // 🚕 taxi
  '1F695': ['taxi'],
  // 🚖 oncoming taxi
  '1F696': ['oncoming_taxi'],
  // 🚗 automobile
  '1F697': ['red_car'],
  // 🚘️ oncoming automobile
  '1F698': ['oncoming_automobile'],
  // 🚙 sport utility vehicle
  '1F699': ['blue_car'],
  // 🚚 delivery truck
  '1F69A': ['truck'],
  // 🚛 articulated lorry
  '1F69B': ['lorry'],
  // 🚜 tractor
  '1F69C': ['tractor'],
  // 🏎️ racing car
  '1F3CE': ['race_car'],
  // 🏍️ motorcycle
  '1F3CD': ['motorcycle'],
  // 🚲️ bicycle
  '1F6B2': ['bike'],
  // 🚏 bus stop
  '1F68F': ['bus_stop'],
  // 🛣️ motorway
  '1F6E3': ['motorway'],
  // 🛤️ railway track
  '1F6E4': ['railway_track'],
  // 🛢️ oil drum
  '1F6E2': ['oil_drum'],
  // ⛽️ fuel pump
  '26FD': ['fuel_pump'],
  // 🚨 police car light
  '1F6A8': ['rotating_light', 'police_light'],
  // 🚥 horizontal traffic light
  '1F6A5': ['traffic_light'],
  // 🚦 vertical traffic light
  '1F6A6': ['vertical_traffic_light'],
  // 🚧 construction
  '1F6A7': ['construction'],
  // ⚓️ anchor
  '2693': ['anchor'],
  // ⛵️ sailboat
  '26F5': ['sailboat'],
  // 🚤 speedboat
  '1F6A4': ['speedboat'],
  // 🛳️ passenger ship
  '1F6F3': ['cruise_ship'],
  // ⛴️ ferry
  '26F4': ['ferry'],
  // 🛥️ motor boat
  '1F6E5': ['motorboat'],
  // 🚢 ship
  '1F6A2': ['ship'],
  // ✈️ airplane
  '2708': ['airplane'],
  // 🛩️ small airplane
  '1F6E9': ['small_airplane'],
  // 🛫 airplane departure
  '1F6EB': ['airplane_departure'],
  // 🛬 airplane arrival
  '1F6EC': ['airplane_arriving'],
  // 💺 seat
  '1F4BA': ['seat'],
  // 🚁 helicopter
  '1F681': ['helicopter'],
  // 🚟 suspension railway
  '1F69F': ['suspension_railway'],
  // 🚠 mountain cableway
  '1F6A0': ['mountain_cableway'],
  // 🚡 aerial tramway
  '1F6A1': ['aerial_tramway'],
  // 🛰️ satellite
  '1F6F0': ['satellite'],
  // 🚀 rocket
  '1F680': ['rocket'],
  // 🛎️ bellhop bell
  '1F6CE': ['bellhop'],
  // ⌛️ hourglass done
  '231B': ['hourglass'],
  // ⏳️ hourglass not done
  '23F3': ['hourglass_flowing'],
  // ⌚️ watch
  '231A': ['watch'],
  // ⏰ alarm clock
  '23F0': ['alarm_clock'],
  // ⏱️ stopwatch
  '23F1': ['stopwatch'],
  // ⏲️ timer clock
  '23F2': ['timer'],
  // 🕰️ mantelpiece clock
  '1F570': ['clock'],
  // 🕛️ twelve o’clock
  '1F55B': ['clock12'],
  // 🕧️ twelve-thirty
  '1F567': ['clock1230'],
  // 🕐️ one o’clock
  '1F550': ['clock1'],
  // 🕜️ one-thirty
  '1F55C': ['clock130'],
  // 🕑️ two o’clock
  '1F551': ['clock2'],
  // 🕝️ two-thirty
  '1F55D': ['clock230'],
  // 🕒️ three o’clock
  '1F552': ['clock3'],
  // 🕞️ three-thirty
  '1F55E': ['clock330'],
  // 🕓️ four o’clock
  '1F553': ['clock4'],
  // 🕟️ four-thirty
  '1F55F': ['clock430'],
  // 🕔️ five o’clock
  '1F554': ['clock5'],
  // 🕠️ five-thirty
  '1F560': ['clock530'],
  // 🕕️ six o’clock
  '1F555': ['clock6'],
  // 🕡️ six-thirty
  '1F561': ['clock630'],
  // 🕖️ seven o’clock
  '1F556': ['clock7'],
  // 🕢️ seven-thirty
  '1F562': ['clock730'],
  // 🕗️ eight o’clock
  '1F557': ['clock8'],
  // 🕣️ eight-thirty
  '1F563': ['clock830'],
  // 🕘️ nine o’clock
  '1F558': ['clock9'],
  // 🕤️ nine-thirty
  '1F564': ['clock930'],
  // 🕙️ ten o’clock
  '1F559': ['clock10'],
  // 🕥️ ten-thirty
  '1F565': ['clock1030'],
  // 🕚️ eleven o’clock
  '1F55A': ['clock11'],
  // 🕦️ eleven-thirty
  '1F566': ['clock1130'],
  // 🌑 new moon
  '1F311': ['new_moon'],
  // 🌒 waxing crescent moon
  '1F312': ['waxing_crescent_moon'],
  // 🌓 first quarter moon
  '1F313': ['first_quarter_moon'],
  // 🌔 waxing gibbous moon
  '1F314': ['waxing_gibbous_moon'],
  // 🌕️ full moon
  '1F315': ['full_moon'],
  // 🌖 waning gibbous moon
  '1F316': ['waning_gibbous_moon'],
  // 🌗 last quarter moon
  '1F317': ['last_quarter_moon'],
  // 🌘 waning crescent moon
  '1F318': ['waning_crescent_moon'],
  // 🌙 crescent moon
  '1F319': ['crescent_moon'],
  // 🌚 new moon face
  '1F31A': ['new_moon_face'],
  // 🌛 first quarter moon face
  '1F31B': ['first_quarter_moon_face'],
  // 🌜️ last quarter moon face
  '1F31C': ['last_quarter_moon_face'],
  // 🌡️ thermometer
  '1F321': ['thermometer'],
  // ☀️ sun
  '2600': ['sun'],
  // 🌝 full moon face
  '1F31D': ['full_moon_face'],
  // 🌞 sun with face
  '1F31E': ['sun_face'],
  // ⭐️ star
  '2B50': ['star'],
  // 🌟 glowing star
  '1F31F': ['star2', 'glowing_star'],
  // 🌠 shooting star
  '1F320': ['star3', 'shooting_star'],
  // 🌌 milky way
  '1F30C': ['milky_way'],
  // ☁️ cloud
  '2601': ['cloud'],
  // ⛅️ sun behind cloud
  '26C5': ['partly_sunny'],
  // ⛈️ cloud with lightning and rain
  '26C8': ['storm'],
  // 🌤️ sun behind small cloud
  '1F324': ['overcast'],
  // 🌥️ sun behind large cloud
  '1F325': ['cloudy'],
  // 🌦️ sun behind rain cloud
  '1F326': ['sunshower'],
  // 🌧️ cloud with rain
  '1F327': ['rain'],
  // 🌨️ cloud with snow
  '1F328': ['snow'],
  // 🌩️ cloud with lightning
  '1F329': ['lightning'],
  // 🌪️ tornado
  '1F32A': ['tornado'],
  // 🌫️ fog
  '1F32B': ['fog'],
  // 🌬️ wind face
  '1F32C': ['wind_face'],
  // 🌀 cyclone
  '1F300': ['cyclone'],
  // 🌈 rainbow
  '1F308': ['rainbow'],
  // 🌂 closed umbrella
  '1F302': ['closed_umbrella'],
  // ☂️ umbrella
  '2602': ['umbrella'],
  // ☔️ umbrella with rain drops
  '2614': ['umbrella_rain'],
  // ⛱️ umbrella on ground
  '26F1': ['beach_umbrella'],
  // ⚡️ high voltage
  '26A1': ['zap', 'high_voltage'],
  // ❄️ snowflake
  '2744': ['snowflake'],
  // ☃️ snowman
  '2603': ['snowy_snowman'],
  // ⛄️ snowman without snow
  '26C4': ['snowman'],
  // ☄️ comet
  '2604': ['comet'],
  // 🔥 fire
  '1F525': ['fire'],
  // 💧 droplet
  '1F4A7': ['droplet'],
  // 🌊 water wave
  '1F30A': ['ocean'],
  // 🎃 jack-o-lantern
  '1F383': ['jack_o_lantern'],
  // 🎄 Christmas tree
  '1F384': ['christmas_tree', 'xmas_tree'],
  // 🎆 fireworks
  '1F386': ['fireworks'],
  // 🎇 sparkler
  '1F387': ['sparkler'],
  // ✨ sparkles
  '2728': ['sparkles'],
  // 🎈 balloon
  '1F388': ['balloon'],
  // 🎉 party popper
  '1F389': ['tada', 'party'],
  // 🎊 confetti ball
  '1F38A': ['confetti_ball'],
  // 🎋 tanabata tree
  '1F38B': ['tanabata_tree'],
  // 🎍 pine decoration
  '1F38D': ['bamboo', 'pine_decor'],
  // 🎎 Japanese dolls
  '1F38E': ['dolls'],
  // 🎏 carp streamer
  '1F38F': ['carp_streamer'],
  // 🎐 wind chime
  '1F390': ['wind_chime'],
  // 🎑 moon viewing ceremony
  '1F391': ['moon_ceremony', 'rice_scene'],
  // 🎀 ribbon
  '1F380': ['ribbon'],
  // 🎁 wrapped gift
  '1F381': ['gift'],
  // 🎗️ reminder ribbon
  '1F397': ['reminder_ribbon'],
  // 🎟️ admission tickets
  '1F39F': ['tickets', 'admission'],
  // 🎫 ticket
  '1F3AB': ['ticket'],
  // 🎖️ military medal
  '1F396': ['military_medal'],
  // 🏆️ trophy
  '1F3C6': ['trophy'],
  // 🏅 sports medal
  '1F3C5': ['medal'],
  // ⚽️ soccer ball
  '26BD': ['soccer'],
  // ⚾️ baseball
  '26BE': ['baseball'],
  // 🏀 basketball
  '1F3C0': ['basketball'],
  // 🏐 volleyball
  '1F3D0': ['volleyball'],
  // 🏈 american football
  '1F3C8': ['football'],
  // 🏉 rugby football
  '1F3C9': ['rugby'],
  // 🎾 tennis
  '1F3BE': ['tennis'],
  // 🎳 bowling
  '1F3B3': ['bowling'],
  // 🏏 cricket game
  '1F3CF': ['cricket_game'],
  // 🏑 field hockey
  '1F3D1': ['field_hockey'],
  // 🏒 ice hockey
  '1F3D2': ['hockey'],
  // 🏓 ping pong
  '1F3D3': ['ping_pong'],
  // 🏸 badminton
  '1F3F8': ['badminton'],
  // ⛳️ flag in hole
  '26F3': ['golf'],
  // ⛸️ ice skate
  '26F8': ['ice_skate'],
  // 🎣 fishing pole
  '1F3A3': ['fishing_pole'],
  // 🎽 running shirt
  '1F3BD': ['running_shirt'],
  // 🎿 skis
  '1F3BF': ['ski'],
  // 🎯 direct hit
  '1F3AF': ['dart'],
  // 🎱 pool 8 ball
  '1F3B1': ['8ball'],
  // 🔮 crystal ball
  '1F52E': ['crystal_ball'],
  // 🎮️ video game
  '1F3AE': ['video_game'],
  // 🕹️ joystick
  '1F579': ['joystick'],
  // 🎰 slot machine
  '1F3B0': ['slot_machine'],
  // 🎲 game die
  '1F3B2': ['game_die'],
  // ♠️ spade suit
  '2660': ['spades'],
  // ♥️ heart suit
  '2665': ['hearts'],
  // ♦️ diamond suit
  '2666': ['diamonds'],
  // ♣️ club suit
  '2663': ['clubs'],
  // 🃏 joker
  '1F0CF': ['black_joker'],
  // 🀄️ mahjong red dragon
  '1F004': ['mahjong'],
  // 🎴 flower playing cards
  '1F3B4': ['flower_cards'],
  // 🎭️ performing arts
  '1F3AD': ['performing_arts'],
  // 🖼️ framed picture
  '1F5BC': ['frame_photo'],
  // 🎨 artist palette
  '1F3A8': ['art', 'palette'],
  // 👓️ glasses
  '1F453': ['glasses'],
  // 🕶️ sunglasses
  '1F576': ['sunglasses'],
  // 👔 necktie
  '1F454': ['necktie', 'tie'],
  // 👕 t-shirt
  '1F455': ['shirt'],
  // 👖 jeans
  '1F456': ['jeans'],
  // 👗 dress
  '1F457': ['dress'],
  // 👘 kimono
  '1F458': ['kimono'],
  // 👙 bikini
  '1F459': ['bikini'],
  // 👚 woman’s clothes
  '1F45A': ['blouse', 'womans_clothes'],
  // 👛 purse
  '1F45B': ['purse'],
  // 👜 handbag
  '1F45C': ['handbag'],
  // 👝 clutch bag
  '1F45D': ['pouch', 'clutch_bag'],
  // 🛍️ shopping bags
  '1F6CD': ['shopping_bags'],
  // 🎒 backpack
  '1F392': ['backpack'],
  // 👞 man’s shoe
  '1F45E': ['dress_shoe', 'mans_shoe'],
  // 👟 running shoe
  '1F45F': ['sneaker', 'athletic_shoe'],
  // 👠 high-heeled shoe
  '1F460': ['high_heel'],
  // 👡 woman’s sandal
  '1F461': ['womans_sandal'],
  // 👢 woman’s boot
  '1F462': ['womans_boot'],
  // 👑 crown
  '1F451': ['crown'],
  // 👒 woman’s hat
  '1F452': ['womans_hat'],
  // 🎩 top hat
  '1F3A9': ['top_hat'],
  // 🎓️ graduation cap
  '1F393': ['graduation_cap'],
  // ⛑️ rescue worker’s helmet
  '26D1': ['helmet_cross'],
  // 📿 prayer beads
  '1F4FF': ['prayer_beads'],
  // 💄 lipstick
  '1F484': ['lipstick'],
  // 💍 ring
  '1F48D': ['ring'],
  // 💎 gem stone
  '1F48E': ['gem'],
  // 🔇 muted speaker
  '1F507': ['mute', 'no_sound'],
  // 🔈️ speaker low volume
  '1F508': ['speaker', 'low_sound'],
  // 🔉 speaker medium volume
  '1F509': ['sound'],
  // 🔊 speaker high volume
  '1F50A': ['loud_sound'],
  // 📢 loudspeaker
  '1F4E2': ['loudspeaker'],
  // 📣 megaphone
  '1F4E3': ['megaphone'],
  // 📯 postal horn
  '1F4EF': ['postal_horn'],
  // 🔔 bell
  '1F514': ['bell'],
  // 🔕 bell with slash
  '1F515': ['no_bell'],
  // 🎼 musical score
  '1F3BC': ['musical_score'],
  // 🎵 musical note
  '1F3B5': ['musical_note'],
  // 🎶 musical notes
  '1F3B6': ['musical_notes'],
  // 🎙️ studio microphone
  '1F399': ['studio_microphone'],
  // 🎚️ level slider
  '1F39A': ['level_slider'],
  // 🎛️ control knobs
  '1F39B': ['control_knobs'],
  // 🎤 microphone
  '1F3A4': ['microphone'],
  // 🎧️ headphone
  '1F3A7': ['headphones'],
  // 📻️ radio
  '1F4FB': ['radio'],
  // 🎷 saxophone
  '1F3B7': ['saxophone'],
  // 🎸 guitar
  '1F3B8': ['guitar'],
  // 🎹 musical keyboard
  '1F3B9': ['musical_keyboard'],
  // 🎺 trumpet
  '1F3BA': ['trumpet'],
  // 🎻 violin
  '1F3BB': ['violin'],
  // 📱 mobile phone
  '1F4F1': ['mobile', 'iphone', 'android'],
  // 📲 mobile phone with arrow
  '1F4F2': ['mobile_calling'],
  // ☎️ telephone
  '260E': ['telephone'],
  // 📞 telephone receiver
  '1F4DE': ['telephone_receiver'],
  // 📟️ pager
  '1F4DF': ['pager'],
  // 📠 fax machine
  '1F4E0': ['fax'],
  // 🔋 battery
  '1F50B': ['battery'],
  // 🔌 electric plug
  '1F50C': ['electric_plug'],
  // 💻️ laptop computer
  '1F4BB': ['laptop'],
  // 🖥️ desktop computer
  '1F5A5': ['desktop', 'computer'],
  // 🖨️ printer
  '1F5A8': ['printer'],
  // ⌨️ keyboard
  '2328': ['keyboard'],
  // 🖱️ computer mouse
  '1F5B1': ['computer_mouse'],
  // 🖲️ trackball
  '1F5B2': ['trackball'],
  // 💽 computer disk
  '1F4BD': ['minidisc'],
  // 💾 floppy disk
  '1F4BE': ['floppy_disk'],
  // 💿️ optical disk
  '1F4BF': ['cd', 'disk'],
  // 📀 dvd
  '1F4C0': ['dvd'],
  // 🎥 movie camera
  '1F3A5': ['movie_camera'],
  // 🎞️ film frames
  '1F39E': ['film_frames'],
  // 📽️ film projector
  '1F4FD': ['projector'],
  // 🎬️ clapper board
  '1F3AC': ['clapper'],
  // 📺️ television
  '1F4FA': ['tv'],
  // 📷️ camera
  '1F4F7': ['camera'],
  // 📸 camera with flash
  '1F4F8': ['camera_flash'],
  // 📹️ video camera
  '1F4F9': ['video_camera'],
  // 📼 videocassette
  '1F4FC': ['vhs'],
  // 🔍️ magnifying glass tilted left
  '1F50D': ['mag'],
  // 🔎 magnifying glass tilted right
  '1F50E': ['mag_right'],
  // 🕯️ candle
  '1F56F': ['candle'],
  // 💡 light bulb
  '1F4A1': ['bulb', 'light_bulb'],
  // 🔦 flashlight
  '1F526': ['flashlight'],
  // 🏮 red paper lantern
  '1F3EE': ['red_lantern'],
  // 📔 notebook with decorative cover
  '1F4D4': ['decorative_notebook'],
  // 📕 closed book
  '1F4D5': ['closed_book'],
  // 📖 open book
  '1F4D6': ['book'],
  // 📗 green book
  '1F4D7': ['green_book'],
  // 📘 blue book
  '1F4D8': ['blue_book'],
  // 📙 orange book
  '1F4D9': ['orange_book'],
  // 📚️ books
  '1F4DA': ['books'],
  // 📓 notebook
  '1F4D3': ['notebook'],
  // 📒 ledger
  '1F4D2': ['ledger'],
  // 📃 page with curl
  '1F4C3': ['page_curl'],
  // 📜 scroll
  '1F4DC': ['scroll'],
  // 📄 page facing up
  '1F4C4': ['page_facing_up'],
  // 📰 newspaper
  '1F4F0': ['newspaper'],
  // 🗞️ rolled-up newspaper
  '1F5DE': ['rolled_newspaper'],
  // 📑 bookmark tabs
  '1F4D1': ['bookmark_tabs'],
  // 🔖 bookmark
  '1F516': ['bookmark'],
  // 🏷️ label
  '1F3F7': ['label'],
  // 💰️ money bag
  '1F4B0': ['moneybag'],
  // 💴 yen banknote
  '1F4B4': ['yen'],
  // 💵 dollar banknote
  '1F4B5': ['dollar'],
  // 💶 euro banknote
  '1F4B6': ['euro'],
  // 💷 pound banknote
  '1F4B7': ['pound'],
  // 💸 money with wings
  '1F4B8': ['money_wings'],
  // 💳️ credit card
  '1F4B3': ['credit_card'],
  // 💹 chart increasing with yen
  '1F4B9': ['ja_chart'],
  // 💱 currency exchange
  '1F4B1': ['currency_exchange'],
  // 💲 heavy dollar sign
  '1F4B2': ['dollar_sign'],
  // ✉️ envelope
  '2709': ['envelope'],
  // 📧 e-mail
  '1F4E7': ['email'],
  // 📨 incoming envelope
  '1F4E8': ['incoming_envelope'],
  // 📩 envelope with arrow
  '1F4E9': ['envelope_arrow'],
  // 📤️ outbox tray
  '1F4E4': ['outbox_tray'],
  // 📥️ inbox tray
  '1F4E5': ['inbox_tray'],
  // 📦️ package
  '1F4E6': ['package'],
  // 📫️ closed mailbox with raised flag
  '1F4EB': ['mailbox'],
  // 📪️ closed mailbox with lowered flag
  '1F4EA': ['mailbox_closed'],
  // 📬️ open mailbox with raised flag
  '1F4EC': ['mailbox_mail'],
  // 📭️ open mailbox with lowered flag
  '1F4ED': ['mailbox_no_mail'],
  // 📮 postbox
  '1F4EE': ['postbox'],
  // 🗳️ ballot box with ballot
  '1F5F3': ['ballot_box'],
  // ✏️ pencil
  '270F': ['pencil'],
  // ✒️ black nib
  '2712': ['black_nib'],
  // 🖋️ fountain pen
  '1F58B': ['fountain_pen'],
  // 🖊️ pen
  '1F58A': ['pen'],
  // 🖌️ paintbrush
  '1F58C': ['paintbrush'],
  // 🖍️ crayon
  '1F58D': ['crayon'],
  // 📝 memo
  '1F4DD': ['memo'],
  // 💼 briefcase
  '1F4BC': ['briefcase'],
  // 📁 file folder
  '1F4C1': ['file_folder'],
  // 📂 open file folder
  '1F4C2': ['open_file_folder'],
  // 🗂️ card index dividers
  '1F5C2': ['dividers'],
  // 📅 calendar
  '1F4C5': ['date', 'calendar'],
  // 📆 tear-off calendar
  '1F4C6': ['torn_calendar'],
  // 🗒️ spiral notepad
  '1F5D2': ['notepad_spiral'],
  // 🗓️ spiral calendar
  '1F5D3': ['calendar_spiral'],
  // 📇 card index
  '1F4C7': ['card_index'],
  // 📈 chart increasing
  '1F4C8': ['chart_up'],
  // 📉 chart decreasing
  '1F4C9': ['chart_down'],
  // 📊 bar chart
  '1F4CA': ['bar_chart'],
  // 📋️ clipboard
  '1F4CB': ['clipboard'],
  // 📌 pushpin
  '1F4CC': ['pushpin'],
  // 📍 round pushpin
  '1F4CD': ['round_pushpin'],
  // 📎 paperclip
  '1F4CE': ['paperclip'],
  // 🖇️ linked paperclips
  '1F587': ['paperclips'],
  // 📏 straight ruler
  '1F4CF': ['straight_ruler'],
  // 🏿 dark skin tone
  '1F3FF': ['skin_tone_dark', 'tone5'],
  // 🏻 light skin tone
  '1F3FB': ['skin_tone_light', 'tone1'],
  // 🏼 medium-light skin tone
  '1F3FC': ['skin_tone_medium_light', 'tone2'],
  // 📐 triangular ruler
  '1F4D0': ['triangular_ruler'],
  // 🏾 medium-dark skin tone
  '1F3FE': ['skin_tone_medium_dark', 'tone4'],
  // ✂️ scissors
  '2702': ['scissors'],
  // 🗃️ card file box
  '1F5C3': ['card_box'],
  // 🗄️ file cabinet
  '1F5C4': ['file_cabinet'],
  // 🗑️ wastebasket
  '1F5D1': ['trashcan', 'wastebasket'],
  // 🔒️ locked
  '1F512': ['lock'],
  // 🔓️ unlocked
  '1F513': ['unlock'],
  // 🔏 locked with pen
  '1F50F': ['locked_pen'],
  // 🔐 locked with key
  '1F510': ['locked_key'],
  // 🔑 key
  '1F511': ['key'],
  // 🗝️ old key
  '1F5DD': ['old_key'],
  // 🔨 hammer
  '1F528': ['hammer'],
  // ⛏️ pick
  '26CF': ['pick'],
  // ⚒️ hammer and pick
  '2692': ['hammer_pick'],
  // 🛠️ hammer and wrench
  '1F6E0': ['tools', 'hammer_wrench'],
  // 🗡️ dagger
  '1F5E1': ['dagger'],
  // ⚔️ crossed swords
  '2694': ['crossed_swords'],
  // 🔫 pistol
  '1F52B': ['gun', 'pistol'],
  // 🏹 bow and arrow
  '1F3F9': ['bow'],
  // 🛡️ shield
  '1F6E1': ['shield'],
  // 🔧 wrench
  '1F527': ['wrench'],
  // 🔩 nut and bolt
  '1F529': ['nut_and_bolt'],
  // ⚙️ gear
  '2699': ['gear'],
  // 🗜️ clamp
  '1F5DC': ['clamp', 'compression'],
  // ⚖️ balance scale
  '2696': ['scales'],
  // 🔗 link
  '1F517': ['link'],
  // ⛓️ chains
  '26D3': ['chains'],
  // ⚗️ alembic
  '2697': ['alembic'],
  // 🔬 microscope
  '1F52C': ['microscope'],
  // 🔭 telescope
  '1F52D': ['telescope'],
  // 📡 satellite antenna
  '1F4E1': ['satellite_antenna'],
  // 💉 syringe
  '1F489': ['syringe'],
  // 💊 pill
  '1F48A': ['pill'],
  // 🚪 door
  '1F6AA': ['door'],
  // 🛏️ bed
  '1F6CF': ['bed'],
  // 🛋️ couch and lamp
  '1F6CB': ['couch'],
  // 🚽 toilet
  '1F6BD': ['toilet'],
  // 🚿 shower
  '1F6BF': ['shower'],
  // 🛁 bathtub
  '1F6C1': ['bathtub'],
  // 🚬 cigarette
  '1F6AC': ['cigarette', 'smoking'],
  // ⚰️ coffin
  '26B0': ['coffin'],
  // ⚱️ funeral urn
  '26B1': ['urn'],
  // 🗿 moai
  '1F5FF': ['moai'],
  // 🏧 ATM sign
  '1F3E7': ['atm'],
  // 🚮 litter in bin sign
  '1F6AE': ['litter_bin'],
  // 🚰 potable water
  '1F6B0': ['potable_water'],
  // ♿️ wheelchair symbol
  '267F': ['handicapped'],
  // 🚹️ men’s room
  '1F6B9': ['mens'],
  // 🚺️ women’s room
  '1F6BA': ['womens'],
  // 🚻 restroom
  '1F6BB': ['restroom', 'bathroom'],
  // 🚼️ baby symbol
  '1F6BC': ['baby_symbol'],
  // 🚾 water closet
  '1F6BE': ['wc'],
  // 🛂 passport control
  '1F6C2': ['passport_control'],
  // 🛃 customs
  '1F6C3': ['customs'],
  // 🛄 baggage claim
  '1F6C4': ['baggage_claim'],
  // 🛅 left luggage
  '1F6C5': ['left_luggage'],
  // ⚠️ warning
  '26A0': ['warning'],
  // 🚸 children crossing
  '1F6B8': ['children_crossing'],
  // ⛔️ no entry
  '26D4': ['no_entry'],
  // 🚫 prohibited
  '1F6AB': ['no_entry_sign'],
  // 🚳 no bicycles
  '1F6B3': ['no_bicycles'],
  // 🚭️ no smoking
  '1F6AD': ['no_smoking'],
  // 🚯 no littering
  '1F6AF': ['do_not_litter'],
  // 🚱 non-potable water
  '1F6B1': ['non_potable_water'],
  // 🚷 no pedestrians
  '1F6B7': ['no_pedestrians'],
  // 📵 no mobile phones
  '1F4F5': ['no_mobile_phones'],
  // 🔞 no one under eighteen
  '1F51E': ['underage'],
  // ☢️ radioactive
  '2622': ['radioactive'],
  // ☣️ biohazard
  '2623': ['biohazard'],
  // ⬆️ up arrow
  '2B06': ['arrow_up'],
  // ↗️ up-right arrow
  '2197': ['arrow_upper_right'],
  // ➡️ right arrow
  '27A1': ['arrow_right'],
  // ↘️ down-right arrow
  '2198': ['arrow_lower_right'],
  // ⬇️ down arrow
  '2B07': ['arrow_down'],
  // ↙️ down-left arrow
  '2199': ['arrow_lower_left'],
  // ⬅️ left arrow
  '2B05': ['arrow_left'],
  // ↖️ up-left arrow
  '2196': ['arrow_upper_left'],
  // ↕️ up-down arrow
  '2195': ['arrow_up_down'],
  // ↔️ left-right arrow
  '2194': ['arrow_left_right'],
  // ↩️ right arrow curving left
  '21A9': ['arrow_left_hook'],
  // ↪️ left arrow curving right
  '21AA': ['arrow_right_hook'],
  // ⤴️ right arrow curving up
  '2934': ['arrow_heading_up'],
  // ⤵️ right arrow curving down
  '2935': ['arrow_heading_down'],
  // 🔃 clockwise vertical arrows
  '1F503': ['clockwise'],
  // 🔄 counterclockwise arrows button
  '1F504': ['counter_clockwise'],
  // 🔙 BACK arrow
  '1F519': ['back'],
  // 🔚 END arrow
  '1F51A': ['end'],
  // 🔛 ON! arrow
  '1F51B': ['on'],
  // 🔜 SOON arrow
  '1F51C': ['soon'],
  // 🔝 TOP arrow
  '1F51D': ['top'],
  // 🛐 place of worship
  '1F6D0': ['place_of_worship'],
  // ⚛️ atom symbol
  '269B': ['atom'],
  // 🕉️ om
  '1F549': ['om_symbol'],
  // ✡️ star of David
  '2721': ['star_of_david'],
  // ☸️ wheel of dharma
  '2638': ['wheel_of_dharma'],
  // ☯️ yin yang
  '262F': ['yin_yang'],
  // ✝️ latin cross
  '271D': ['cross'],
  // ☦️ orthodox cross
  '2626': ['orthodox_cross'],
  // ☪️ star and crescent
  '262A': ['star_and_crescent'],
  // ☮️ peace symbol
  '262E': ['peace'],
  // 🕎 menorah
  '1F54E': ['menorah'],
  // 🔯 dotted six-pointed star
  '1F52F': ['six_pointed_star'],
  // ♈️ Aries
  '2648': ['aries'],
  // ♉️ Taurus
  '2649': ['taurus'],
  // ♊️ Gemini
  '264A': ['gemini'],
  // ♋️ Cancer
  '264B': ['cancer'],
  // ♌️ Leo
  '264C': ['leo'],
  // ♍️ Virgo
  '264D': ['virgo'],
  // ♎️ Libra
  '264E': ['libra'],
  // ♏️ Scorpio
  '264F': ['scorpius'],
  // ♐️ Sagittarius
  '2650': ['sagittarius'],
  // ♑️ Capricorn
  '2651': ['capricorn'],
  // ♒️ Aquarius
  '2652': ['aquarius'],
  // ♓️ Pisces
  '2653': ['pisces'],
  // ⛎ Ophiuchus
  '26CE': ['ophiuchus'],
  // 🔀 shuffle tracks button
  '1F500': ['shuffle'],
  // 🔁 repeat button
  '1F501': ['repeat'],
  // 🔂 repeat single button
  '1F502': ['repeat_single'],
  // ▶️ play button
  '25B6': ['play'],
  // ⏩️ fast-forward button
  '23E9': ['fast_forward'],
  // ⏭️ next track button
  '23ED': ['next_track'],
  // ⏯️ play or pause button
  '23EF': ['play_pause'],
  // ◀️ reverse button
  '25C0': ['reverse'],
  // ⏪️ fast reverse button
  '23EA': ['rewind'],
  // ⏮️ last track button
  '23EE': ['previous_track'],
  // 🔼 upwards button
  '1F53C': ['up_button'],
  // ⏫ fast up button
  '23EB': ['fast_up_button'],
  // 🔽 downwards button
  '1F53D': ['down_button'],
  // ⏬ fast down button
  '23EC': ['fast_down_button'],
  // ⏸️ pause button
  '23F8': ['pause'],
  // ⏹️ stop button
  '23F9': ['stop'],
  // ⏺️ record button
  '23FA': ['record'],
  // ⏏️ eject button
  '23CF': ['eject'],
  // 🎦 cinema
  '1F3A6': ['cinema'],
  // 🔅 dim button
  '1F505': ['dim', 'low_brightness'],
  // 🔆 bright button
  '1F506': ['bright', 'high_brightness'],
  // 📶 antenna bars
  '1F4F6': ['signal_strength', 'antenna_bars'],
  // 📳 vibration mode
  '1F4F3': ['vibration_mode'],
  // 📴 mobile phone off
  '1F4F4': ['mobile_phone_off'],
  // ♻️ recycling symbol
  '267B': ['recycle'],
  // ⚜️ fleur-de-lis
  '269C': ['fleur-de-lis'],
  // 🔱 trident emblem
  '1F531': ['trident'],
  // 📛 name badge
  '1F4DB': ['name_badge'],
  // 🔰 Japanese symbol for beginner
  '1F530': ['ja_beginner'],
  // ⭕️ hollow red circle
  '2B55': ['o'],
  // ✅ check mark button
  '2705': ['white_check_mark'],
  // ☑️ check box with check
  '2611': ['checked_ballot'],
  // ✔️ check mark
  '2714': ['check_mark'],
  // ✖️ multiplication sign
  '2716': ['multiplication'],
  // ❌ cross mark
  '274C': ['x', 'cross_mark'],
  // ❎ cross mark button
  '274E': ['cross_mark_button'],
  // ➕ plus sign
  '2795': ['plus'],
  // ➖ minus sign
  '2796': ['minus'],
  // ➗ division sign
  '2797': ['division'],
  // ➰ curly loop
  '27B0': ['curly_loop'],
  // ➿ double curly loop
  '27BF': ['double_curly_loop'],
  // 〽️ part alternation mark
  '303D': ['part_alternation_mark'],
  // ✳️ eight-spoked asterisk
  '2733': ['eight_spoked_asterisk'],
  // ✴️ eight-pointed star
  '2734': ['eight_pointed_star'],
  // ❇️ sparkle
  '2747': ['sparkle'],
  // ‼️ double exclamation mark
  '203C': ['bangbang', 'double_exclamation'],
  // ⁉️ exclamation question mark
  '2049': ['interrobang', 'exclamation_question'],
  // ❓️ question mark
  '2753': ['question'],
  // ❔ white question mark
  '2754': ['white_question'],
  // ❕ white exclamation mark
  '2755': ['white_exclamation'],
  // ❗️ exclamation mark
  '2757': ['exclamation'],
  // 〰️ wavy dash
  '3030': ['wavy_dash'],
  // ©️ copyright
  '00A9': ['copyright'],
  // ®️ registered
  '00AE': ['registered'],
  // ™️ trade mark
  '2122': ['tm'],
  // 🔟 keycap: 10
  '1F51F': ['ten'],
  // 🔠 input latin uppercase
  '1F520': ['upper_abcd'],
  // 🔡 input latin lowercase
  '1F521': ['abcd'],
  // 🔢 input numbers
  '1F522': ['1234'],
  // 🔣 input symbols
  '1F523': ['symbols'],
  // 🔤 input latin letters
  '1F524': ['abc'],
  // 🅰️ A button (blood type)
  '1F170': ['a_blood'],
  // 🆎 AB button (blood type)
  '1F18E': ['ab_blood'],
  // 🅱️ B button (blood type)
  '1F171': ['b_blood'],
  // 🆑 CL button
  '1F191': ['cl'],
  // 🆒 COOL button
  '1F192': ['cool'],
  // 🆓 FREE button
  '1F193': ['free'],
  // ℹ️ information
  '2139': ['info'],
  // 🆔 ID button
  '1F194': ['id'],
  // Ⓜ️ circled M
  '24C2': ['m'],
  // 🆕 NEW button
  '1F195': ['new'],
  // 🆖 NG button
  '1F196': ['ng'],
  // 🅾️ O button (blood type)
  '1F17E': ['o_blood'],
  // 🆗 OK button
  '1F197': ['ok'],
  // 🅿️ P button
  '1F17F': ['p'],
  // 🆘 SOS button
  '1F198': ['sos'],
  // 🆙 UP! button
  '1F199': ['up'],
  // 🆚 VS button
  '1F19A': ['vs'],
  // 🈁 Japanese “here” button
  '1F201': ['ja_here', 'koko'],
  // 🈂️ Japanese “service charge” button
  '1F202': ['ja_service_charge'],
  // 🈷️ Japanese “monthly amount” button
  '1F237': ['ja_monthly_amount'],
  // 🈶 Japanese “not free of charge” button
  '1F236': ['ja_not_free_of_carge'],
  // 🈯️ Japanese “reserved” button
  '1F22F': ['ja_reserved'],
  // 🉐 Japanese “bargain” button
  '1F250': ['ja_bargain'],
  // 🈹 Japanese “discount” button
  '1F239': ['ja_discount'],
  // 🈚️ Japanese “free of charge” button
  '1F21A': ['ja_free_of_charge'],
  // 🈲 Japanese “prohibited” button
  '1F232': ['ja_prohibited'],
  // 🉑 Japanese “acceptable” button
  '1F251': ['ja_acceptable'],
  // 🈸 Japanese “application” button
  '1F238': ['ja_application'],
  // 🈴 Japanese “passing grade” button
  '1F234': ['ja_passing_grade'],
  // 🈳 Japanese “vacancy” button
  '1F233': ['ja_vacancy'],
  // ㊗️ Japanese “congratulations” button
  '3297': ['ja_congratulations'],
  // ㊙️ Japanese “secret” button
  '3299': ['ja_secret'],
  // 🈺 Japanese “open for business” button
  '1F23A': ['ja_open_for_business'],
  // 🈵 Japanese “no vacancy” button
  '1F235': ['ja_no_vacancy'],
  // 🔴 red circle
  '1F534': ['red_circle'],
  // 🔵 blue circle
  '1F535': ['blue_circle'],
  // ⚫️ black circle
  '26AB': ['black_circle'],
  // ⚪️ white circle
  '26AA': ['white_circle'],
  // ⬛️ black large square
  '2B1B': ['large_black_square'],
  // ⬜️ white large square
  '2B1C': ['large_white_square'],
  // ◼️ black medium square
  '25FC': ['medium_black_square'],
  // ◻️ white medium square
  '25FB': ['medium_white_square'],
  // ◾️ black medium-small square
  '25FE': ['medium_small_black_square'],
  // ◽️ white medium-small square
  '25FD': ['medium_small_white_square'],
  // ▪️ black small square
  '25AA': ['small_black_square'],
  // ▫️ white small square
  '25AB': ['small_white_square'],
  // 🔶 large orange diamond
  '1F536': ['large_orange_diamond'],
  // 🔷 large blue diamond
  '1F537': ['large_blue_diamond'],
  // 🔸 small orange diamond
  '1F538': ['small_orange_diamond'],
  // 🔹 small blue diamond
  '1F539': ['small_blue_diamond'],
  // 🔺 red triangle pointed up
  '1F53A': ['up_red_triangle'],
  // 🔻 red triangle pointed down
  '1F53B': ['down_red_triangle'],
  // 💠 diamond with a dot
  '1F4A0': ['diamond_dot'],
  // 🔘 radio button
  '1F518': ['radio_button'],
  // 🔳 white square button
  '1F533': ['white_square_button'],
  // 🔲 black square button
  '1F532': ['black_square_button'],
  // 🏁 chequered flag
  '1F3C1': ['checkered_flag'],
  // 🚩 triangular flag
  '1F6A9': ['triangle_flag'],
  // 🎌 crossed flags
  '1F38C': ['crossed_flags'],
  // 🏴 black flag
  '1F3F4': ['black_flag'],
  // 🏳️ white flag
  '1F3F3': ['white_flag'],
  // 🇦🇨 flag: Ascension Island
  '1F1E6-1F1E8': ['flag_ac'],
  // 🇦🇩 flag: Andorra
  '1F1E6-1F1E9': ['flag_ad'],
  // 🇦🇪 flag: United Arab Emirates
  '1F1E6-1F1EA': ['flag_ae'],
  // 🇦🇫 flag: Afghanistan
  '1F1E6-1F1EB': ['flag_af'],
  // 🇦🇬 flag: Antigua & Barbuda
  '1F1E6-1F1EC': ['flag_ag'],
  // 🇦🇮 flag: Anguilla
  '1F1E6-1F1EE': ['flag_ai'],
  // 🇦🇱 flag: Albania
  '1F1E6-1F1F1': ['flag_al'],
  // 🇦🇲 flag: Armenia
  '1F1E6-1F1F2': ['flag_am'],
  // 🇦🇴 flag: Angola
  '1F1E6-1F1F4': ['flag_ao'],
  // 🇦🇶 flag: Antarctica
  '1F1E6-1F1F6': ['flag_aq'],
  // 🇦🇷 flag: Argentina
  '1F1E6-1F1F7': ['flag_ar'],
  // 🇦🇸 flag: American Samoa
  '1F1E6-1F1F8': ['flag_as'],
  // 🇦🇹 flag: Austria
  '1F1E6-1F1F9': ['flag_at'],
  // 🇦🇺 flag: Australia
  '1F1E6-1F1FA': ['flag_au'],
  // 🇦🇼 flag: Aruba
  '1F1E6-1F1FC': ['flag_aw'],
  // 🇦🇽 flag: Åland Islands
  '1F1E6-1F1FD': ['flag_ax'],
  // 🇦🇿 flag: Azerbaijan
  '1F1E6-1F1FF': ['flag_az'],
  // 🇧🇦 flag: Bosnia & Herzegovina
  '1F1E7-1F1E6': ['flag_ba'],
  // 🇧🇧 flag: Barbados
  '1F1E7-1F1E7': ['flag_bb'],
  // 🇧🇩 flag: Bangladesh
  '1F1E7-1F1E9': ['flag_bd'],
  // 🇧🇪 flag: Belgium
  '1F1E7-1F1EA': ['flag_be'],
  // 🇧🇫 flag: Burkina Faso
  '1F1E7-1F1EB': ['flag_bf'],
  // 🇧🇬 flag: Bulgaria
  '1F1E7-1F1EC': ['flag_bg'],
  // 🇧🇭 flag: Bahrain
  '1F1E7-1F1ED': ['flag_bh'],
  // 🇧🇮 flag: Burundi
  '1F1E7-1F1EE': ['flag_bi'],
  // 🇧🇯 flag: Benin
  '1F1E7-1F1EF': ['flag_bj'],
  // 🇧🇱 flag: St. Barthélemy
  '1F1E7-1F1F1': ['flag_bl'],
  // 🇧🇲 flag: Bermuda
  '1F1E7-1F1F2': ['flag_bm'],
  // 🇧🇳 flag: Brunei
  '1F1E7-1F1F3': ['flag_bn'],
  // 🇧🇴 flag: Bolivia
  '1F1E7-1F1F4': ['flag_bo'],
  // 🇧🇶 flag: Caribbean Netherlands
  '1F1E7-1F1F6': ['flag_bq'],
  // 🇧🇷 flag: Brazil
  '1F1E7-1F1F7': ['flag_br'],
  // 🇧🇸 flag: Bahamas
  '1F1E7-1F1F8': ['flag_bs'],
  // 🇧🇹 flag: Bhutan
  '1F1E7-1F1F9': ['flag_bt'],
  // 🇧🇻 flag: Bouvet Island
  '1F1E7-1F1FB': ['flag_bv'],
  // 🇧🇼 flag: Botswana
  '1F1E7-1F1FC': ['flag_bw'],
  // 🇧🇾 flag: Belarus
  '1F1E7-1F1FE': ['flag_by'],
  // 🇧🇿 flag: Belize
  '1F1E7-1F1FF': ['flag_bz'],
  // 🇨🇦 flag: Canada
  '1F1E8-1F1E6': ['flag_ca'],
  // 🇨🇨 flag: Cocos (Keeling) Islands
  '1F1E8-1F1E8': ['flag_cc'],
  // 🇨🇩 flag: Congo - Kinshasa
  '1F1E8-1F1E9': ['flag_cd'],
  // 🇨🇫 flag: Central African Republic
  '1F1E8-1F1EB': ['flag_cf'],
  // 🇨🇬 flag: Congo - Brazzaville
  '1F1E8-1F1EC': ['flag_cg'],
  // 🇨🇭 flag: Switzerland
  '1F1E8-1F1ED': ['flag_ch'],
  // 🇨🇮 flag: Côte d’Ivoire
  '1F1E8-1F1EE': ['flag_ci'],
  // 🇨🇰 flag: Cook Islands
  '1F1E8-1F1F0': ['flag_ck'],
  // 🇨🇱 flag: Chile
  '1F1E8-1F1F1': ['flag_cl'],
  // 🇨🇲 flag: Cameroon
  '1F1E8-1F1F2': ['flag_cm'],
  // 🇨🇳 flag: China
  '1F1E8-1F1F3': ['flag_cn'],
  // 🇨🇴 flag: Colombia
  '1F1E8-1F1F4': ['flag_co'],
  // 🇨🇵 flag: Clipperton Island
  '1F1E8-1F1F5': ['flag_cp'],
  // 🇨🇷 flag: Costa Rica
  '1F1E8-1F1F7': ['flag_cr'],
  // 🇨🇺 flag: Cuba
  '1F1E8-1F1FA': ['flag_cu'],
  // 🇨🇻 flag: Cape Verde
  '1F1E8-1F1FB': ['flag_cv'],
  // 🇨🇼 flag: Curaçao
  '1F1E8-1F1FC': ['flag_cw'],
  // 🇨🇽 flag: Christmas Island
  '1F1E8-1F1FD': ['flag_cx'],
  // 🇨🇾 flag: Cyprus
  '1F1E8-1F1FE': ['flag_cy'],
  // 🇨🇿 flag: Czechia
  '1F1E8-1F1FF': ['flag_cz'],
  // 🇩🇪 flag: Germany
  '1F1E9-1F1EA': ['flag_de'],
  // 🇩🇬 flag: Diego Garcia
  '1F1E9-1F1EC': ['flag_dg'],
  // 🇩🇯 flag: Djibouti
  '1F1E9-1F1EF': ['flag_dj'],
  // 🇩🇰 flag: Denmark
  '1F1E9-1F1F0': ['flag_dk'],
  // 🇩🇲 flag: Dominica
  '1F1E9-1F1F2': ['flag_dm'],
  // 🇩🇴 flag: Dominican Republic
  '1F1E9-1F1F4': ['flag_do'],
  // 🇩🇿 flag: Algeria
  '1F1E9-1F1FF': ['flag_dz'],
  // 🇪🇦 flag: Ceuta & Melilla
  '1F1EA-1F1E6': ['flag_ea'],
  // 🇪🇨 flag: Ecuador
  '1F1EA-1F1E8': ['flag_ec'],
  // 🇪🇪 flag: Estonia
  '1F1EA-1F1EA': ['flag_ee'],
  // 🇪🇬 flag: Egypt
  '1F1EA-1F1EC': ['flag_eg'],
  // 🇪🇭 flag: Western Sahara
  '1F1EA-1F1ED': ['flag_eh'],
  // 🇪🇷 flag: Eritrea
  '1F1EA-1F1F7': ['flag_er'],
  // 🇪🇸 flag: Spain
  '1F1EA-1F1F8': ['flag_es'],
  // 🇪🇹 flag: Ethiopia
  '1F1EA-1F1F9': ['flag_et'],
  // 🇪🇺 flag: European Union
  '1F1EA-1F1FA': ['flag_eu'],
  // 🇫🇮 flag: Finland
  '1F1EB-1F1EE': ['flag_fi'],
  // 🇫🇯 flag: Fiji
  '1F1EB-1F1EF': ['flag_fj'],
  // 🇫🇰 flag: Falkland Islands
  '1F1EB-1F1F0': ['flag_fk'],
  // 🇫🇲 flag: Micronesia
  '1F1EB-1F1F2': ['flag_fm'],
  // 🇫🇴 flag: Faroe Islands
  '1F1EB-1F1F4': ['flag_fo'],
  // 🇫🇷 flag: France
  '1F1EB-1F1F7': ['flag_fr'],
  // 🇬🇦 flag: Gabon
  '1F1EC-1F1E6': ['flag_ga'],
  // 🇬🇧 flag: United Kingdom
  '1F1EC-1F1E7': ['flag_gb'],
  // 🇬🇩 flag: Grenada
  '1F1EC-1F1E9': ['flag_gd'],
  // 🇬🇪 flag: Georgia
  '1F1EC-1F1EA': ['flag_ge'],
  // 🇬🇫 flag: French Guiana
  '1F1EC-1F1EB': ['flag_gf'],
  // 🇬🇬 flag: Guernsey
  '1F1EC-1F1EC': ['flag_gg'],
  // 🇬🇭 flag: Ghana
  '1F1EC-1F1ED': ['flag_gh'],
  // 🇬🇮 flag: Gibraltar
  '1F1EC-1F1EE': ['flag_gi'],
  // 🇬🇱 flag: Greenland
  '1F1EC-1F1F1': ['flag_gl'],
  // 🇬🇲 flag: Gambia
  '1F1EC-1F1F2': ['flag_gm'],
  // 🇬🇳 flag: Guinea
  '1F1EC-1F1F3': ['flag_gn'],
  // 🇬🇵 flag: Guadeloupe
  '1F1EC-1F1F5': ['flag_gp'],
  // 🇬🇶 flag: Equatorial Guinea
  '1F1EC-1F1F6': ['flag_gq'],
  // 🇬🇷 flag: Greece
  '1F1EC-1F1F7': ['flag_gr'],
  // 🇬🇸 flag: South Georgia & South Sandwich Islands
  '1F1EC-1F1F8': ['flag_gs'],
  // 🇬🇹 flag: Guatemala
  '1F1EC-1F1F9': ['flag_gt'],
  // 🇬🇺 flag: Guam
  '1F1EC-1F1FA': ['flag_gu'],
  // 🇬🇼 flag: Guinea-Bissau
  '1F1EC-1F1FC': ['flag_gw'],
  // 🇬🇾 flag: Guyana
  '1F1EC-1F1FE': ['flag_gy'],
  // 🇭🇰 flag: Hong Kong SAR China
  '1F1ED-1F1F0': ['flag_hk'],
  // 🇭🇲 flag: Heard & McDonald Islands
  '1F1ED-1F1F2': ['flag_hm'],
  // 🇭🇳 flag: Honduras
  '1F1ED-1F1F3': ['flag_hn'],
  // 🇭🇷 flag: Croatia
  '1F1ED-1F1F7': ['flag_hr'],
  // 🇭🇹 flag: Haiti
  '1F1ED-1F1F9': ['flag_ht'],
  // 🇭🇺 flag: Hungary
  '1F1ED-1F1FA': ['flag_hu'],
  // 🇮🇨 flag: Canary Islands
  '1F1EE-1F1E8': ['flag_ic'],
  // 🇮🇩 flag: Indonesia
  '1F1EE-1F1E9': ['flag_id'],
  // 🇮🇪 flag: Ireland
  '1F1EE-1F1EA': ['flag_ie'],
  // 🇮🇱 flag: Israel
  '1F1EE-1F1F1': ['flag_il'],
  // 🇮🇲 flag: Isle of Man
  '1F1EE-1F1F2': ['flag_im'],
  // 🇮🇳 flag: India
  '1F1EE-1F1F3': ['flag_in'],
  // 🇮🇴 flag: British Indian Ocean Territory
  '1F1EE-1F1F4': ['flag_io'],
  // 🇮🇶 flag: Iraq
  '1F1EE-1F1F6': ['flag_iq'],
  // 🇮🇷 flag: Iran
  '1F1EE-1F1F7': ['flag_ir'],
  // 🇮🇸 flag: Iceland
  '1F1EE-1F1F8': ['flag_is'],
  // 🇮🇹 flag: Italy
  '1F1EE-1F1F9': ['flag_it'],
  // 🇯🇪 flag: Jersey
  '1F1EF-1F1EA': ['flag_je'],
  // 🇯🇲 flag: Jamaica
  '1F1EF-1F1F2': ['flag_jm'],
  // 🇯🇴 flag: Jordan
  '1F1EF-1F1F4': ['flag_jo'],
  // 🇯🇵 flag: Japan
  '1F1EF-1F1F5': ['flag_jp'],
  // 🇰🇪 flag: Kenya
  '1F1F0-1F1EA': ['flag_ke'],
  // 🇰🇬 flag: Kyrgyzstan
  '1F1F0-1F1EC': ['flag_kg'],
  // 🇰🇭 flag: Cambodia
  '1F1F0-1F1ED': ['flag_kh'],
  // 🇰🇮 flag: Kiribati
  '1F1F0-1F1EE': ['flag_ki'],
  // 🇰🇲 flag: Comoros
  '1F1F0-1F1F2': ['flag_km'],
  // 🇰🇳 flag: St. Kitts & Nevis
  '1F1F0-1F1F3': ['flag_kn'],
  // 🇰🇵 flag: North Korea
  '1F1F0-1F1F5': ['flag_kp'],
  // 🇰🇷 flag: South Korea
  '1F1F0-1F1F7': ['flag_kr'],
  // 🇰🇼 flag: Kuwait
  '1F1F0-1F1FC': ['flag_kw'],
  // 🇰🇾 flag: Cayman Islands
  '1F1F0-1F1FE': ['flag_ky'],
  // 🇰🇿 flag: Kazakhstan
  '1F1F0-1F1FF': ['flag_kz'],
  // 🇱🇦 flag: Laos
  '1F1F1-1F1E6': ['flag_la'],
  // 🇱🇧 flag: Lebanon
  '1F1F1-1F1E7': ['flag_lb'],
  // 🇱🇨 flag: St. Lucia
  '1F1F1-1F1E8': ['flag_lc'],
  // 🇱🇮 flag: Liechtenstein
  '1F1F1-1F1EE': ['flag_li'],
  // 🇱🇰 flag: Sri Lanka
  '1F1F1-1F1F0': ['flag_lk'],
  // 🇱🇷 flag: Liberia
  '1F1F1-1F1F7': ['flag_lr'],
  // 🇱🇸 flag: Lesotho
  '1F1F1-1F1F8': ['flag_ls'],
  // 🇱🇹 flag: Lithuania
  '1F1F1-1F1F9': ['flag_lt'],
  // 🇱🇺 flag: Luxembourg
  '1F1F1-1F1FA': ['flag_lu'],
  // 🇱🇻 flag: Latvia
  '1F1F1-1F1FB': ['flag_lv'],
  // 🇱🇾 flag: Libya
  '1F1F1-1F1FE': ['flag_ly'],
  // 🇲🇦 flag: Morocco
  '1F1F2-1F1E6': ['flag_ma'],
  // 🇲🇨 flag: Monaco
  '1F1F2-1F1E8': ['flag_mc'],
  // 🇲🇩 flag: Moldova
  '1F1F2-1F1E9': ['flag_md'],
  // 🇲🇪 flag: Montenegro
  '1F1F2-1F1EA': ['flag_me'],
  // 🇲🇫 flag: St. Martin
  '1F1F2-1F1EB': ['flag_mf'],
  // 🇲🇬 flag: Madagascar
  '1F1F2-1F1EC': ['flag_mg'],
  // 🇲🇭 flag: Marshall Islands
  '1F1F2-1F1ED': ['flag_mh'],
  // 🇲🇰 flag: North Macedonia
  '1F1F2-1F1F0': ['flag_mk'],
  // 🇲🇱 flag: Mali
  '1F1F2-1F1F1': ['flag_ml'],
  // 🇲🇲 flag: Myanmar (Burma)
  '1F1F2-1F1F2': ['flag_mm'],
  // 🇲🇳 flag: Mongolia
  '1F1F2-1F1F3': ['flag_mn'],
  // 🇲🇴 flag: Macao SAR China
  '1F1F2-1F1F4': ['flag_mo'],
  // 🇲🇵 flag: Northern Mariana Islands
  '1F1F2-1F1F5': ['flag_mp'],
  // 🇲🇶 flag: Martinique
  '1F1F2-1F1F6': ['flag_mq'],
  // 🇲🇷 flag: Mauritania
  '1F1F2-1F1F7': ['flag_mr'],
  // 🇲🇸 flag: Montserrat
  '1F1F2-1F1F8': ['flag_ms'],
  // 🇲🇹 flag: Malta
  '1F1F2-1F1F9': ['flag_mt'],
  // 🇲🇺 flag: Mauritius
  '1F1F2-1F1FA': ['flag_mu'],
  // 🇲🇻 flag: Maldives
  '1F1F2-1F1FB': ['flag_mv'],
  // 🇲🇼 flag: Malawi
  '1F1F2-1F1FC': ['flag_mw'],
  // 🇲🇽 flag: Mexico
  '1F1F2-1F1FD': ['flag_mx'],
  // 🇲🇾 flag: Malaysia
  '1F1F2-1F1FE': ['flag_my'],
  // 🇲🇿 flag: Mozambique
  '1F1F2-1F1FF': ['flag_mz'],
  // 🇳🇦 flag: Namibia
  '1F1F3-1F1E6': ['flag_na'],
  // 🇳🇨 flag: New Caledonia
  '1F1F3-1F1E8': ['flag_nc'],
  // 🇳🇪 flag: Niger
  '1F1F3-1F1EA': ['flag_ne'],
  // 🇳🇫 flag: Norfolk Island
  '1F1F3-1F1EB': ['flag_nf'],
  // 🇳🇬 flag: Nigeria
  '1F1F3-1F1EC': ['flag_ng'],
  // 🇳🇮 flag: Nicaragua
  '1F1F3-1F1EE': ['flag_ni'],
  // 🇳🇱 flag: Netherlands
  '1F1F3-1F1F1': ['flag_nl'],
  // 🇳🇴 flag: Norway
  '1F1F3-1F1F4': ['flag_no'],
  // 🇳🇵 flag: Nepal
  '1F1F3-1F1F5': ['flag_np'],
  // 🇳🇷 flag: Nauru
  '1F1F3-1F1F7': ['flag_nr'],
  // 🇳🇺 flag: Niue
  '1F1F3-1F1FA': ['flag_nu'],
  // 🇳🇿 flag: New Zealand
  '1F1F3-1F1FF': ['flag_nz'],
  // 🇴🇲 flag: Oman
  '1F1F4-1F1F2': ['flag_om'],
  // 🇵🇦 flag: Panama
  '1F1F5-1F1E6': ['flag_pa'],
  // 🇵🇪 flag: Peru
  '1F1F5-1F1EA': ['flag_pe'],
  // 🇵🇫 flag: French Polynesia
  '1F1F5-1F1EB': ['flag_pf'],
  // 🇵🇬 flag: Papua New Guinea
  '1F1F5-1F1EC': ['flag_pg'],
  // 🇵🇭 flag: Philippines
  '1F1F5-1F1ED': ['flag_ph'],
  // 🇵🇰 flag: Pakistan
  '1F1F5-1F1F0': ['flag_pk'],
  // 🇵🇱 flag: Poland
  '1F1F5-1F1F1': ['flag_pl'],
  // 🇵🇲 flag: St. Pierre & Miquelon
  '1F1F5-1F1F2': ['flag_pm'],
  // 🇵🇳 flag: Pitcairn Islands
  '1F1F5-1F1F3': ['flag_pn'],
  // 🇵🇷 flag: Puerto Rico
  '1F1F5-1F1F7': ['flag_pr'],
  // 🇵🇸 flag: Palestinian Territories
  '1F1F5-1F1F8': ['flag_ps'],
  // 🇵🇹 flag: Portugal
  '1F1F5-1F1F9': ['flag_pt'],
  // 🇵🇼 flag: Palau
  '1F1F5-1F1FC': ['flag_pw'],
  // 🇵🇾 flag: Paraguay
  '1F1F5-1F1FE': ['flag_py'],
  // 🇶🇦 flag: Qatar
  '1F1F6-1F1E6': ['flag_qa'],
  // 🇷🇪 flag: Réunion
  '1F1F7-1F1EA': ['flag_re'],
  // 🇷🇴 flag: Romania
  '1F1F7-1F1F4': ['flag_ro'],
  // 🇷🇸 flag: Serbia
  '1F1F7-1F1F8': ['flag_rs'],
  // 🇷🇺 flag: Russia
  '1F1F7-1F1FA': ['flag_ru'],
  // 🇷🇼 flag: Rwanda
  '1F1F7-1F1FC': ['flag_rw'],
  // 🇸🇦 flag: Saudi Arabia
  '1F1F8-1F1E6': ['flag_sa'],
  // 🇸🇧 flag: Solomon Islands
  '1F1F8-1F1E7': ['flag_sb'],
  // 🇸🇨 flag: Seychelles
  '1F1F8-1F1E8': ['flag_sc'],
  // 🇸🇩 flag: Sudan
  '1F1F8-1F1E9': ['flag_sd'],
  // 🇸🇪 flag: Sweden
  '1F1F8-1F1EA': ['flag_se'],
  // 🇸🇬 flag: Singapore
  '1F1F8-1F1EC': ['flag_sg'],
  // 🇸🇭 flag: St. Helena
  '1F1F8-1F1ED': ['flag_sh'],
  // 🇸🇮 flag: Slovenia
  '1F1F8-1F1EE': ['flag_si'],
  // 🇸🇯 flag: Svalbard & Jan Mayen
  '1F1F8-1F1EF': ['flag_sj'],
  // 🇸🇰 flag: Slovakia
  '1F1F8-1F1F0': ['flag_sk'],
  // 🇸🇱 flag: Sierra Leone
  '1F1F8-1F1F1': ['flag_sl'],
  // 🇸🇲 flag: San Marino
  '1F1F8-1F1F2': ['flag_sm'],
  // 🇸🇳 flag: Senegal
  '1F1F8-1F1F3': ['flag_sn'],
  // 🇸🇴 flag: Somalia
  '1F1F8-1F1F4': ['flag_so'],
  // 🇸🇷 flag: Suriname
  '1F1F8-1F1F7': ['flag_sr'],
  // 🇸🇸 flag: South Sudan
  '1F1F8-1F1F8': ['flag_ss'],
  // 🇸🇹 flag: São Tomé & Príncipe
  '1F1F8-1F1F9': ['flag_st'],
  // 🇸🇻 flag: El Salvador
  '1F1F8-1F1FB': ['flag_sv'],
  // 🇸🇽 flag: Sint Maarten
  '1F1F8-1F1FD': ['flag_sx'],
  // 🇸🇾 flag: Syria
  '1F1F8-1F1FE': ['flag_sy'],
  // 🇸🇿 flag: Eswatini
  '1F1F8-1F1FF': ['flag_sz'],
  // 🇹🇦 flag: Tristan da Cunha
  '1F1F9-1F1E6': ['flag_ta'],
  // 🇹🇨 flag: Turks & Caicos Islands
  '1F1F9-1F1E8': ['flag_tc'],
  // 🇹🇩 flag: Chad
  '1F1F9-1F1E9': ['flag_td'],
  // 🇹🇫 flag: French Southern Territories
  '1F1F9-1F1EB': ['flag_tf'],
  // 🇹🇬 flag: Togo
  '1F1F9-1F1EC': ['flag_tg'],
  // 🇹🇭 flag: Thailand
  '1F1F9-1F1ED': ['flag_th'],
  // 🇹🇯 flag: Tajikistan
  '1F1F9-1F1EF': ['flag_tj'],
  // 🇹🇰 flag: Tokelau
  '1F1F9-1F1F0': ['flag_tk'],
  // 🇹🇱 flag: Timor-Leste
  '1F1F9-1F1F1': ['flag_tl'],
  // 🇹🇲 flag: Turkmenistan
  '1F1F9-1F1F2': ['flag_tm'],
  // 🇹🇳 flag: Tunisia
  '1F1F9-1F1F3': ['flag_tn'],
  // 🇹🇴 flag: Tonga
  '1F1F9-1F1F4': ['flag_to'],
  // 🇹🇷 flag: Turkey
  '1F1F9-1F1F7': ['flag_tr'],
  // 🇹🇹 flag: Trinidad & Tobago
  '1F1F9-1F1F9': ['flag_tt'],
  // 🇹🇻 flag: Tuvalu
  '1F1F9-1F1FB': ['flag_tv'],
  // 🇹🇼 flag: Taiwan
  '1F1F9-1F1FC': ['flag_tw'],
  // 🇹🇿 flag: Tanzania
  '1F1F9-1F1FF': ['flag_tz'],
  // 🇺🇦 flag: Ukraine
  '1F1FA-1F1E6': ['flag_ua'],
  // 🇺🇬 flag: Uganda
  '1F1FA-1F1EC': ['flag_ug'],
  // 🇺🇲 flag: U.S. Outlying Islands
  '1F1FA-1F1F2': ['flag_um'],
  // 🇺🇸 flag: United States
  '1F1FA-1F1F8': ['flag_us', 'usa'],
  // 🇺🇾 flag: Uruguay
  '1F1FA-1F1FE': ['flag_uy'],
  // 🇺🇿 flag: Uzbekistan
  '1F1FA-1F1FF': ['flag_uz'],
  // 🇻🇦 flag: Vatican City
  '1F1FB-1F1E6': ['flag_va'],
  // 🇻🇨 flag: St. Vincent & Grenadines
  '1F1FB-1F1E8': ['flag_vc'],
  // 🇻🇪 flag: Venezuela
  '1F1FB-1F1EA': ['flag_ve'],
  // 🇻🇬 flag: British Virgin Islands
  '1F1FB-1F1EC': ['flag_vg'],
  // 🇻🇮 flag: U.S. Virgin Islands
  '1F1FB-1F1EE': ['flag_vi'],
  // 🇻🇳 flag: Vietnam
  '1F1FB-1F1F3': ['flag_vn'],
  // 🇻🇺 flag: Vanuatu
  '1F1FB-1F1FA': ['flag_vu'],
  // 🇼🇫 flag: Wallis & Futuna
  '1F1FC-1F1EB': ['flag_wf'],
  // 🇼🇸 flag: Samoa
  '1F1FC-1F1F8': ['flag_ws'],
  // 🇽🇰 flag: Kosovo
  '1F1FD-1F1F0': ['flag_xk'],
  // 🇾🇪 flag: Yemen
  '1F1FE-1F1EA': ['flag_ye'],
  // 🇾🇹 flag: Mayotte
  '1F1FE-1F1F9': ['flag_yt'],
  // 🇿🇦 flag: South Africa
  '1F1FF-1F1E6': ['flag_za'],
  // 🇿🇲 flag: Zambia
  '1F1FF-1F1F2': ['flag_zm'],
  // 🇿🇼 flag: Zimbabwe
  '1F1FF-1F1FC': ['flag_zw'],

  // VERSION 2
  // 🗨️ left speech bubble
  '1F5E8': ['left_speech'],
  // 👩‍❤️‍💋‍👨 kiss: woman, man
  '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468': ['kiss_mw', 'kiss_wm'],
  // 👨‍❤️‍💋‍👨 kiss: man, man
  '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468': ['kiss_mm'],
  // 👩‍❤️‍💋‍👩 kiss: woman, woman
  '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469': ['kiss_ww'],
  // 👩‍❤️‍👨 couple with heart: woman, man
  '1F469-200D-2764-FE0F-200D-1F468': ['couple_mw', 'couple_wm'],
  // 👨‍❤️‍👨 couple with heart: man, man
  '1F468-200D-2764-FE0F-200D-1F468': ['couple_mm'],
  // 👩‍❤️‍👩 couple with heart: woman, woman
  '1F469-200D-2764-FE0F-200D-1F469': ['couple_ww'],
  // 👨‍👩‍👦 family: man, woman, boy
  '1F468-200D-1F469-200D-1F466': ['family_mwb'],
  // 👨‍👩‍👧 family: man, woman, girl
  '1F468-200D-1F469-200D-1F467': ['family_mwg'],
  // 👨‍👩‍👧‍👦 family: man, woman, girl, boy
  '1F468-200D-1F469-200D-1F467-200D-1F466': ['family_mwgb'],
  // 👨‍👩‍👦‍👦 family: man, woman, boy, boy
  '1F468-200D-1F469-200D-1F466-200D-1F466': ['family_mwbb'],
  // 👨‍👩‍👧‍👧 family: man, woman, girl, girl
  '1F468-200D-1F469-200D-1F467-200D-1F467': ['family_mwgg'],
  // 👨‍👨‍👦 family: man, man, boy
  '1F468-200D-1F468-200D-1F466': ['family_mmb'],
  // 👨‍👨‍👧 family: man, man, girl
  '1F468-200D-1F468-200D-1F467': ['family_mmg'],
  // 👨‍👨‍👧‍👦 family: man, man, girl, boy
  '1F468-200D-1F468-200D-1F467-200D-1F466': ['family_mmgb'],
  // 👨‍👨‍👦‍👦 family: man, man, boy, boy
  '1F468-200D-1F468-200D-1F466-200D-1F466': ['family_mmbb'],
  // 👨‍👨‍👧‍👧 family: man, man, girl, girl
  '1F468-200D-1F468-200D-1F467-200D-1F467': ['family_mmgg'],
  // 👩‍👩‍👦 family: woman, woman, boy
  '1F469-200D-1F469-200D-1F466': ['family_wwb'],
  // 👩‍👩‍👧 family: woman, woman, girl
  '1F469-200D-1F469-200D-1F467': ['family_wwg'],
  // 👩‍👩‍👧‍👦 family: woman, woman, girl, boy
  '1F469-200D-1F469-200D-1F467-200D-1F466': ['family_wwgb'],
  // 👩‍👩‍👦‍👦 family: woman, woman, boy, boy
  '1F469-200D-1F469-200D-1F466-200D-1F466': ['family_wwbb'],
  // 👩‍👩‍👧‍👧 family: woman, woman, girl, girl
  '1F469-200D-1F469-200D-1F467-200D-1F467': ['family_wwgg'],

  // VERSION 3
  // 🤣 rolling on the floor laughing
  '1F923': ['entertained', 'rofl'],
  // 🤥 lying face
  '1F925': ['lying'],
  // 🤤 drooling face
  '1F924': ['drooling'],
  // 🤢 nauseated face
  '1F922': ['nauseated'],
  // 🤧 sneezing face
  '1F927': ['sneezing'],
  // 🤠 cowboy hat face
  '1F920': ['cowboy'],
  // 🤡 clown face
  '1F921': ['clown'],
  // 🖤 black heart
  '1F5A4': ['black_heart'],
  // 🤚 raised back of hand
  '1F91A': ['raised_backhand'],
  // 🤞 crossed fingers
  '1F91E': ['fingers_crossed'],
  // 🤙 call me hand
  '1F919': ['call_me'],
  // 🤛 left-facing fist
  '1F91B': ['left_facing_fist'],
  // 🤜 right-facing fist
  '1F91C': ['right_facing_fist'],
  // 🤝 handshake
  '1F91D': ['handshake'],
  // 🤳 selfie
  '1F933': ['selfie'],
  // 🤦 person facepalming
  '1F926': ['person_facepalming'],
  // 🤷 person shrugging
  '1F937': ['person_shrugging'],
  // 🤴 prince
  '1F934': ['prince'],
  // 🤵 man in tuxedo
  '1F935': ['man_tuxedo'],
  // 🤰 pregnant woman
  '1F930': ['pregnant_woman'],
  // 🤶 Mrs. Claus
  '1F936': ['mrs_claus'],
  // 🕺 man dancing
  '1F57A': ['man_dancing'],
  // 🤺 person fencing
  '1F93A': ['person_fencing'],
  // 🤸 person cartwheeling
  '1F938': ['person_cartwheel'],
  // 🤼 people wrestling
  '1F93C': ['people_wrestling'],
  // 🤽 person playing water polo
  '1F93D': ['person_water_polo'],
  // 🤾 person playing handball
  '1F93E': ['person_handball'],
  // 🤹 person juggling
  '1F939': ['person_juggling'],
  // 🦍 gorilla
  '1F98D': ['gorilla'],
  // 🦊 fox
  '1F98A': ['fox_face'],
  // 🦌 deer
  '1F98C': ['deer'],
  // 🦏 rhinoceros
  '1F98F': ['rhino'],
  // 🦇 bat
  '1F987': ['bat'],
  // 🦅 eagle
  '1F985': ['eagle'],
  // 🦆 duck
  '1F986': ['duck'],
  // 🦉 owl
  '1F989': ['owl'],
  // 🦎 lizard
  '1F98E': ['lizard'],
  // 🦈 shark
  '1F988': ['shark'],
  // 🦋 butterfly
  '1F98B': ['butterfly'],
  // 🥀 wilted flower
  '1F940': ['wilted_rose'],
  // 🥝 kiwi fruit
  '1F95D': ['kiwi'],
  // 🥑 avocado
  '1F951': ['avocado'],
  // 🥔 potato
  '1F954': ['potato'],
  // 🥕 carrot
  '1F955': ['carrot'],
  // 🥒 cucumber
  '1F952': ['cucumber'],
  // 🥜 peanuts
  '1F95C': ['peanuts'],
  // 🥐 croissant
  '1F950': ['croissant'],
  // 🥖 baguette bread
  '1F956': ['french_bread'],
  // 🥞 pancakes
  '1F95E': ['pancakes'],
  // 🥓 bacon
  '1F953': ['bacon'],
  // 🥙 stuffed flatbread
  '1F959': ['stuffed_flatbread'],
  // 🥚 egg
  '1F95A': ['egg'],
  // 🥘 shallow pan of food
  '1F958': ['shallow_pan_of_food'],
  // 🥗 green salad
  '1F957': ['salad'],
  // 🦐 shrimp
  '1F990': ['shrimp'],
  // 🦑 squid
  '1F991': ['squid'],
  // 🥛 glass of milk
  '1F95B': ['milk'],
  // 🥂 clinking glasses
  '1F942': ['champagne_glass'],
  // 🥃 tumbler glass
  '1F943': ['tumbler_glass'],
  // 🥄 spoon
  '1F944': ['spoon'],
  // 🛵 motor scooter
  '1F6F5': ['motor_scooter'],
  // 🛴 kick scooter
  '1F6F4': ['scooter'],
  // 🛑 stop sign
  '1F6D1': ['stop_sign', 'octagonal_sign'],
  // 🛶 canoe
  '1F6F6': ['canoe'],
  // 🥇 1st place medal
  '1F947': ['first_place'],
  // 🥈 2nd place medal
  '1F948': ['second_place'],
  // 🥉 3rd place medal
  '1F949': ['third_place'],
  // 🥊 boxing glove
  '1F94A': ['boxing_glove'],
  // 🥋 martial arts uniform
  '1F94B': ['gi', 'martial_arts_uniform'],
  // 🥅 goal net
  '1F945': ['goal'],
  // 🥁 drum
  '1F941': ['drum'],
  // 🛒 shopping cart
  '1F6D2': ['shopping_cart'],
  // #️⃣ keycap: #
  '0023-FE0F-20E3': ['hash'],
  // *️⃣ keycap: *
  '002A-FE0F-20E3': ['asterisk'],
  // 0️⃣ keycap: 0
  '0030-FE0F-20E3': ['zero'],
  // 1️⃣ keycap: 1
  '0031-FE0F-20E3': ['one'],
  // 2️⃣ keycap: 2
  '0032-FE0F-20E3': ['two'],
  // 3️⃣ keycap: 3
  '0033-FE0F-20E3': ['three'],
  // 4️⃣ keycap: 4
  '0034-FE0F-20E3': ['four'],
  // 5️⃣ keycap: 5
  '0035-FE0F-20E3': ['five'],
  // 6️⃣ keycap: 6
  '0036-FE0F-20E3': ['six'],
  // 7️⃣ keycap: 7
  '0037-FE0F-20E3': ['seven'],
  // 8️⃣ keycap: 8
  '0038-FE0F-20E3': ['eight'],
  // 9️⃣ keycap: 9
  '0039-FE0F-20E3': ['nine'],

  // VERSION 4
  // 👁️‍🗨️ eye in speech bubble
  '1F441-FE0F-200D-1F5E8-FE0F': ['eye_bubble'],
  // 👱‍♂️ man: blond hair
  '1F471-200D-2642-FE0F': ['blond_man'],
  // 👱‍♀️ woman: blond hair
  '1F471-200D-2640-FE0F': ['blond_woman'],
  // 🙍‍♂️ man frowning
  '1F64D-200D-2642-FE0F': ['man_frowning'],
  // 🙍‍♀️ woman frowning
  '1F64D-200D-2640-FE0F': ['woman_frowning'],
  // 🙎‍♂️ man pouting
  '1F64E-200D-2642-FE0F': ['man_pouting'],
  // 🙎‍♀️ woman pouting
  '1F64E-200D-2640-FE0F': ['woman_pouting'],
  // 🙅‍♂️ man gesturing NO
  '1F645-200D-2642-FE0F': ['man_gesturing_no'],
  // 🙅‍♀️ woman gesturing NO
  '1F645-200D-2640-FE0F': ['woman_gesturing_no'],
  // 🙆‍♂️ man gesturing OK
  '1F646-200D-2642-FE0F': ['man_gesturing_ok'],
  // 🙆‍♀️ woman gesturing OK
  '1F646-200D-2640-FE0F': ['woman_gesturing_ok'],
  // 💁‍♂️ man tipping hand
  '1F481-200D-2642-FE0F': ['man_tipping_hand'],
  // 💁‍♀️ woman tipping hand
  '1F481-200D-2640-FE0F': ['woman_tipping_hand'],
  // 🙋‍♂️ man raising hand
  '1F64B-200D-2642-FE0F': ['man_raising_hand'],
  // 🙋‍♀️ woman raising hand
  '1F64B-200D-2640-FE0F': ['woman_raising_hand'],
  // 🙇‍♂️ man bowing
  '1F647-200D-2642-FE0F': ['man_bowing'],
  // 🙇‍♀️ woman bowing
  '1F647-200D-2640-FE0F': ['woman_bowing'],
  // 🤦‍♂️ man facepalming
  '1F926-200D-2642-FE0F': ['man_facepalming'],
  // 🤦‍♀️ woman facepalming
  '1F926-200D-2640-FE0F': ['woman_facepalming'],
  // 🤷‍♂️ man shrugging
  '1F937-200D-2642-FE0F': ['man_shrugging'],
  // 🤷‍♀️ woman shrugging
  '1F937-200D-2640-FE0F': ['woman_shrugging'],
  // 👨‍⚕️ man health worker
  '1F468-200D-2695-FE0F': ['man_health_worker'],
  // 👩‍⚕️ woman health worker
  '1F469-200D-2695-FE0F': ['woman_health_worker'],
  // 👨‍🎓 man student
  '1F468-200D-1F393': ['man_student'],
  // 👩‍🎓 woman student
  '1F469-200D-1F393': ['woman_student'],
  // 👨‍🏫 man teacher
  '1F468-200D-1F3EB': ['man_teacher'],
  // 👩‍🏫 woman teacher
  '1F469-200D-1F3EB': ['woman_teacher'],
  // 👨‍⚖️ man judge
  '1F468-200D-2696-FE0F': ['man_judge'],
  // 👩‍⚖️ woman judge
  '1F469-200D-2696-FE0F': ['woman_judge'],
  // 👨‍🌾 man farmer
  '1F468-200D-1F33E': ['man_farmer'],
  // 👩‍🌾 woman farmer
  '1F469-200D-1F33E': ['woman_farmer'],
  // 👨‍🍳 man cook
  '1F468-200D-1F373': ['man_cook'],
  // 👩‍🍳 woman cook
  '1F469-200D-1F373': ['woman_cook'],
  // 👨‍🔧 man mechanic
  '1F468-200D-1F527': ['man_mechanic'],
  // 👩‍🔧 woman mechanic
  '1F469-200D-1F527': ['woman_mechanic'],
  // 👨‍🏭 man factory worker
  '1F468-200D-1F3ED': ['man_factory_worker'],
  // 👩‍🏭 woman factory worker
  '1F469-200D-1F3ED': ['woman_factory_worker'],
  // 👨‍💼 man office worker
  '1F468-200D-1F4BC': ['man_office_worker'],
  // 👩‍💼 woman office worker
  '1F469-200D-1F4BC': ['woman_office_worker'],
  // 👨‍🔬 man scientist
  '1F468-200D-1F52C': ['man_scientist'],
  // 👩‍🔬 woman scientist
  '1F469-200D-1F52C': ['woman_scientist'],
  // 👨‍💻 man technologist
  '1F468-200D-1F4BB': ['man_technologist'],
  // 👩‍💻 woman technologist
  '1F469-200D-1F4BB': ['woman_technologist'],
  // 👨‍🎤 man singer
  '1F468-200D-1F3A4': ['man_singer'],
  // 👩‍🎤 woman singer
  '1F469-200D-1F3A4': ['woman_singer'],
  // 👨‍🎨 man artist
  '1F468-200D-1F3A8': ['man_artist'],
  // 👩‍🎨 woman artist
  '1F469-200D-1F3A8': ['woman_artist'],
  // 👨‍✈️ man pilot
  '1F468-200D-2708-FE0F': ['man_pilot'],
  // 👩‍✈️ woman pilot
  '1F469-200D-2708-FE0F': ['woman_pilot'],
  // 👨‍🚀 man astronaut
  '1F468-200D-1F680': ['man_astronaut'],
  // 👩‍🚀 woman astronaut
  '1F469-200D-1F680': ['woman_astronaut'],
  // 👨‍🚒 man firefighter
  '1F468-200D-1F692': ['man_firefighter'],
  // 👩‍🚒 woman firefighter
  '1F469-200D-1F692': ['woman_firefighter'],
  // 👮‍♂️ man police officer
  '1F46E-200D-2642-FE0F': ['man_police_officer'],
  // 👮‍♀️ woman police officer
  '1F46E-200D-2640-FE0F': ['woman_police_officer'],
  // 🕵️‍♂️ man detective
  '1F575-FE0F-200D-2642-FE0F': ['man_detective'],
  // 🕵️‍♀️ woman detective
  '1F575-FE0F-200D-2640-FE0F': ['woman_detective'],
  // 💂‍♂️ man guard
  '1F482-200D-2642-FE0F': ['man_guard'],
  // 💂‍♀️ woman guard
  '1F482-200D-2640-FE0F': ['woman_guard'],
  // 👷‍♂️ man construction worker
  '1F477-200D-2642-FE0F': ['man_construction_worker'],
  // 👷‍♀️ woman construction worker
  '1F477-200D-2640-FE0F': ['woman_construction_worker'],
  // 👳‍♂️ man wearing turban
  '1F473-200D-2642-FE0F': ['man_turban'],
  // 👳‍♀️ woman wearing turban
  '1F473-200D-2640-FE0F': ['woman_turban'],
  // 💆‍♂️ man getting massage
  '1F486-200D-2642-FE0F': ['man_getting_face_massage'],
  // 💆‍♀️ woman getting massage
  '1F486-200D-2640-FE0F': ['woman_getting_face_massage'],
  // 💇‍♂️ man getting haircut
  '1F487-200D-2642-FE0F': ['man_getting_haircut'],
  // 💇‍♀️ woman getting haircut
  '1F487-200D-2640-FE0F': ['woman_getting_haircut'],
  // 🚶‍♂️ man walking
  '1F6B6-200D-2642-FE0F': ['man_walking'],
  // 🚶‍♀️ woman walking
  '1F6B6-200D-2640-FE0F': ['woman_walking'],
  // 🏃‍♂️ man running
  '1F3C3-200D-2642-FE0F': ['man_running'],
  // 🏃‍♀️ woman running
  '1F3C3-200D-2640-FE0F': ['woman_running'],
  // 👯‍♂️ men with bunny ears
  '1F46F-200D-2642-FE0F': ['men_bunny_ears_partying'],
  // 👯‍♀️ women with bunny ears
  '1F46F-200D-2640-FE0F': ['women_bunny_ears_partying'],
  // 🏌️‍♂️ man golfing
  '1F3CC-FE0F-200D-2642-FE0F': ['man_golfing'],
  // 🏌️‍♀️ woman golfing
  '1F3CC-FE0F-200D-2640-FE0F': ['woman_golfing'],
  // 🏄‍♂️ man surfing
  '1F3C4-200D-2642-FE0F': ['man_surfing'],
  // 🏄‍♀️ woman surfing
  '1F3C4-200D-2640-FE0F': ['woman_surfing'],
  // 🚣‍♂️ man rowing boat
  '1F6A3-200D-2642-FE0F': ['man_rowing_boat'],
  // 🚣‍♀️ woman rowing boat
  '1F6A3-200D-2640-FE0F': ['woman_rowing_boat'],
  // 🏊‍♂️ man swimming
  '1F3CA-200D-2642-FE0F': ['man_swimming'],
  // 🏊‍♀️ woman swimming
  '1F3CA-200D-2640-FE0F': ['woman_swimming'],
  // ⛹️‍♂️ man bouncing ball
  '26F9-FE0F-200D-2642-FE0F': ['man_bouncing_ball'],
  // ⛹️‍♀️ woman bouncing ball
  '26F9-FE0F-200D-2640-FE0F': ['woman_bouncing_ball'],
  // 🏋️‍♂️ man lifting weights
  '1F3CB-FE0F-200D-2642-FE0F': ['man_lifting_weights'],
  // 🏋️‍♀️ woman lifting weights
  '1F3CB-FE0F-200D-2640-FE0F': ['woman_lifting_weights'],
  // 🚴‍♂️ man biking
  '1F6B4-200D-2642-FE0F': ['man_biking'],
  // 🚴‍♀️ woman biking
  '1F6B4-200D-2640-FE0F': ['woman_biking'],
  // 🚵‍♂️ man mountain biking
  '1F6B5-200D-2642-FE0F': ['man_mountain_biking'],
  // 🚵‍♀️ woman mountain biking
  '1F6B5-200D-2640-FE0F': ['woman_mountain_biking'],
  // 🤸‍♂️ man cartwheeling
  '1F938-200D-2642-FE0F': ['man_cartwheeling'],
  // 🤸‍♀️ woman cartwheeling
  '1F938-200D-2640-FE0F': ['woman_cartwheeling'],
  // 🤼‍♂️ men wrestling
  '1F93C-200D-2642-FE0F': ['men_wrestling'],
  // 🤼‍♀️ women wrestling
  '1F93C-200D-2640-FE0F': ['women_wrestling'],
  // 🤽‍♂️ man playing water polo
  '1F93D-200D-2642-FE0F': ['man_water_polo'],
  // 🤽‍♀️ woman playing water polo
  '1F93D-200D-2640-FE0F': ['woman_water_polo'],
  // 🤾‍♂️ man playing handball
  '1F93E-200D-2642-FE0F': ['man_handball'],
  // 🤾‍♀️ woman playing handball
  '1F93E-200D-2640-FE0F': ['woman_handball'],
  // 🤹‍♂️ man juggling
  '1F939-200D-2642-FE0F': ['man_juggling'],
  // 🤹‍♀️ woman juggling
  '1F939-200D-2640-FE0F': ['woman_juggling'],
  // 👨‍👦 family: man, boy
  '1F468-200D-1F466': ['family_mb'],
  // 👨‍👦‍👦 family: man, boy, boy
  '1F468-200D-1F466-200D-1F466': ['family_mbb'],
  // 👨‍👧 family: man, girl
  '1F468-200D-1F467': ['family_mg'],
  // 👨‍👧‍👦 family: man, girl, boy
  '1F468-200D-1F467-200D-1F466': ['family_mgb'],
  // 👨‍👧‍👧 family: man, girl, girl
  '1F468-200D-1F467-200D-1F467': ['family_mgg'],
  // 👩‍👦 family: woman, boy
  '1F469-200D-1F466': ['family_wb'],
  // 👩‍👦‍👦 family: woman, boy, boy
  '1F469-200D-1F466-200D-1F466': ['family_wbb'],
  // 👩‍👧 family: woman, girl
  '1F469-200D-1F467': ['family_wg'],
  // 👩‍👧‍👦 family: woman, girl, boy
  '1F469-200D-1F467-200D-1F466': ['family_wgb'],
  // 👩‍👧‍👧 family: woman, girl, girl
  '1F469-200D-1F467-200D-1F467': ['family_wgg'],
  // ♀️ female sign
  '2640': ['female', 'female_sign'],
  // ♂️ male sign
  '2642': ['male', 'male_sign'],
  // ⚕️ medical symbol
  '2695': ['medical'],
  // 🏳️‍🌈 rainbow flag
  '1F3F3-FE0F-200D-1F308': ['rainbow_flag'],
  // 🇺🇳 flag: United Nations
  '1F1FA-1F1F3': ['flag_un'],

  // VERSION 5
  // 🤩 star-struck
  '1F929': ['starstruck'],
  // 🤪 zany face
  '1F92A': ['crazy'],
  // 🤭 face with hand over mouth
  '1F92D': ['gasp'],
  // 🤫 shushing face
  '1F92B': ['shushing'],
  // 🤨 face with raised eyebrow
  '1F928': ['contempt'],
  // 🤮 face vomiting
  '1F92E': ['vomiting'],
  // 🤯 exploding head
  '1F92F': ['shocked', 'exploding_head'],
  // 🧐 face with monocle
  '1F9D0': ['monocle'],
  // 🤬 face with symbols on mouth
  '1F92C': ['censored'],
  // 🧡 orange heart
  '1F9E1': ['orange_heart'],
  // 🤟 love-you gesture
  '1F91F': ['love_you_gesture'],
  // 🤲 palms up together
  '1F932': ['palms_up'],
  // 🧠 brain
  '1F9E0': ['brain'],
  // 🧒 child
  '1F9D2': ['child'],
  // 🧑 person
  '1F9D1': ['adult'],
  // 🧔 man: beard
  '1F9D4': ['bearded_person'],
  // 🧓 older person
  '1F9D3': ['older_adult'],
  // 🧕 woman with headscarf
  '1F9D5': ['woman_headscarf'],
  // 🤱 breast-feeding
  '1F931': ['breast_feeding'],
  // 🧙 mage
  '1F9D9': ['mage'],
  // 🧙‍♂️ man mage
  '1F9D9-200D-2642-FE0F': ['man_mage'],
  // 🧙‍♀️ woman mage
  '1F9D9-200D-2640-FE0F': ['woman_mage'],
  // 🧚 fairy
  '1F9DA': ['fairy'],
  // 🧚‍♂️ man fairy
  '1F9DA-200D-2642-FE0F': ['man_fairy'],
  // 🧚‍♀️ woman fairy
  '1F9DA-200D-2640-FE0F': ['woman_fairy'],
  // 🧛 vampire
  '1F9DB': ['vampire'],
  // 🧛‍♂️ man vampire
  '1F9DB-200D-2642-FE0F': ['man_vampire'],
  // 🧛‍♀️ woman vampire
  '1F9DB-200D-2640-FE0F': ['woman_vampire'],
  // 🧜 merperson
  '1F9DC': ['merperson'],
  // 🧜‍♂️ merman
  '1F9DC-200D-2642-FE0F': ['merman'],
  // 🧜‍♀️ mermaid
  '1F9DC-200D-2640-FE0F': ['mermaid'],
  // 🧝 elf
  '1F9DD': ['elf'],
  // 🧝‍♂️ man elf
  '1F9DD-200D-2642-FE0F': ['man_elf'],
  // 🧝‍♀️ woman elf
  '1F9DD-200D-2640-FE0F': ['woman_elf'],
  // 🧞 genie
  '1F9DE': ['genie'],
  // 🧞‍♂️ man genie
  '1F9DE-200D-2642-FE0F': ['man_genie'],
  // 🧞‍♀️ woman genie
  '1F9DE-200D-2640-FE0F': ['woman_genie'],
  // 🧟 zombie
  '1F9DF': ['zombie'],
  // 🧟‍♂️ man zombie
  '1F9DF-200D-2642-FE0F': ['man_zombie'],
  // 🧟‍♀️ woman zombie
  '1F9DF-200D-2640-FE0F': ['woman_zombie'],
  // 🧖 person in steamy room
  '1F9D6': ['person_steamy_room'],
  // 🧖‍♂️ man in steamy room
  '1F9D6-200D-2642-FE0F': ['man_steamy_room'],
  // 🧖‍♀️ woman in steamy room
  '1F9D6-200D-2640-FE0F': ['woman_steamy_room'],
  // 🧗 person climbing
  '1F9D7': ['person_climbing'],
  // 🧗‍♂️ man climbing
  '1F9D7-200D-2642-FE0F': ['man_climbing'],
  // 🧗‍♀️ woman climbing
  '1F9D7-200D-2640-FE0F': ['woman_climbing'],
  // 🧘 person in lotus position
  '1F9D8': ['person_lotus_position'],
  // 🧘‍♂️ man in lotus position
  '1F9D8-200D-2642-FE0F': ['man_lotus_position'],
  // 🧘‍♀️ woman in lotus position
  '1F9D8-200D-2640-FE0F': ['woman_lotus_position'],
  // 🦓 zebra
  '1F993': ['zebra'],
  // 🦒 giraffe
  '1F992': ['giraffe'],
  // 🦔 hedgehog
  '1F994': ['hedgehog'],
  // 🦕 sauropod
  '1F995': ['sauropod'],
  // 🦖 T-Rex
  '1F996': ['trex'],
  // 🦗 cricket
  '1F997': ['cricket'],
  // 🥥 coconut
  '1F965': ['coconut'],
  // 🥦 broccoli
  '1F966': ['broccoli'],
  // 🥨 pretzel
  '1F968': ['pretzel'],
  // 🥩 cut of meat
  '1F969': ['cut_of_meat'],
  // 🥪 sandwich
  '1F96A': ['sandwich'],
  // 🥣 bowl with spoon
  '1F963': ['bowl_spoon'],
  // 🥫 canned food
  '1F96B': ['canned_food'],
  // 🥟 dumpling
  '1F95F': ['dumpling'],
  // 🥠 fortune cookie
  '1F960': ['fortune_cookie'],
  // 🥡 takeout box
  '1F961': ['takeout_box'],
  // 🥧 pie
  '1F967': ['pie'],
  // 🥤 cup with straw
  '1F964': ['cup_straw'],
  // 🥢 chopsticks
  '1F962': ['chopsticks'],
  // 🛸 flying saucer
  '1F6F8': ['flying_saucer'],
  // 🛷 sled
  '1F6F7': ['sled'],
  // 🥌 curling stone
  '1F94C': ['curling_stone'],
  // 🧣 scarf
  '1F9E3': ['scarf'],
  // 🧤 gloves
  '1F9E4': ['gloves'],
  // 🧥 coat
  '1F9E5': ['coat'],
  // 🧦 socks
  '1F9E6': ['socks'],
  // 🧢 billed cap
  '1F9E2': ['billed_cap'],
  // 🏴󠁧󠁢󠁥󠁮󠁧󠁿 flag: England
  '1F3F4-E0067-E0062-E0065-E006E-E0067-E007F': ['flag_gbeng', 'england'],
  // 🏴󠁧󠁢󠁳󠁣󠁴󠁿 flag: Scotland
  '1F3F4-E0067-E0062-E0073-E0063-E0074-E007F': ['flag_gbsct', 'scotland'],
  // 🏴󠁧󠁢󠁷󠁬󠁳󠁿 flag: Wales
  '1F3F4-E0067-E0062-E0077-E006C-E0073-E007F': ['flag_gbwls', 'wales'],

  // VERSION 11
  // 🥰 smiling face with hearts
  '1F970': ['love'],
  // 🥵 hot face
  '1F975': ['overheating'],
  // 🥶 cold face
  '1F976': ['freezing'],
  // 🥴 woozy face
  '1F974': ['woozy'],
  // 🥳 partying face
  '1F973': ['partying', 'celebrating'],
  // 🥺 pleading face
  '1F97A': ['pleading'],
  // 🦵 leg
  '1F9B5': ['leg'],
  // 🦶 foot
  '1F9B6': ['foot'],
  // 🦷 tooth
  '1F9B7': ['tooth'],
  // 🦴 bone
  '1F9B4': ['bone'],
  // 👨‍🦰 man: red hair
  '1F468-200D-1F9B0': ['red_haired_man'],
  // 👨‍🦱 man: curly hair
  '1F468-200D-1F9B1': ['curly_haired_man'],
  // 👨‍🦳 man: white hair
  '1F468-200D-1F9B3': ['white_haired_man'],
  // 👨‍🦲 man: bald
  '1F468-200D-1F9B2': ['bald_man'],
  // 👩‍🦰 woman: red hair
  '1F469-200D-1F9B0': ['red_haired_woman'],
  // 👩‍🦱 woman: curly hair
  '1F469-200D-1F9B1': ['curly_haired_woman'],
  // 👩‍🦳 woman: white hair
  '1F469-200D-1F9B3': ['white_haired_woman'],
  // 👩‍🦲 woman: bald
  '1F469-200D-1F9B2': ['bald_woman'],
  // 🦸 superhero
  '1F9B8': ['hero', 'superhero'],
  // 🦸‍♂️ man superhero
  '1F9B8-200D-2642-FE0F': ['man_hero'],
  // 🦸‍♀️ woman superhero
  '1F9B8-200D-2640-FE0F': ['woman_hero'],
  // 🦹 supervillain
  '1F9B9': ['villain', 'supervillain'],
  // 🦹‍♂️ man supervillain
  '1F9B9-200D-2642-FE0F': ['man_villain'],
  // 🦹‍♀️ woman supervillain
  '1F9B9-200D-2640-FE0F': ['woman_villain'],
  // 🦝 raccoon
  '1F99D': ['raccoon'],
  // 🦙 llama
  '1F999': ['llama'],
  // 🦛 hippopotamus
  '1F99B': ['hippo'],
  // 🦘 kangaroo
  '1F998': ['kangaroo'],
  // 🦡 badger
  '1F9A1': ['badger'],
  // 🦢 swan
  '1F9A2': ['swan'],
  // 🦚 peacock
  '1F99A': ['peacock'],
  // 🦜 parrot
  '1F99C': ['parrot'],
  // 🦟 mosquito
  '1F99F': ['mosquito'],
  // 🦠 microbe
  '1F9A0': ['microbe', 'germ'],
  // 🥭 mango
  '1F96D': ['mango'],
  // 🥬 leafy green
  '1F96C': ['leafy_green'],
  // 🥯 bagel
  '1F96F': ['bagel'],
  // 🧂 salt
  '1F9C2': ['salt'],
  // 🥮 moon cake
  '1F96E': ['moon_cake'],
  // 🦞 lobster
  '1F99E': ['lobster'],
  // 🧁 cupcake
  '1F9C1': ['cupcake'],
  // 🧭 compass
  '1F9ED': ['compass'],
  // 🧱 brick
  '1F9F1': ['brick'],
  // 🛹 skateboard
  '1F6F9': ['skateboard'],
  // 🧳 luggage
  '1F9F3': ['luggage'],
  // 🧨 firecracker
  '1F9E8': ['firecracker'],
  // 🧧 red envelope
  '1F9E7': ['red_envelope'],
  // 🥎 softball
  '1F94E': ['softball'],
  // 🥏 flying disc
  '1F94F': ['flying_disc'],
  // 🥍 lacrosse
  '1F94D': ['lacrosse'],
  // 🧿 nazar amulet
  '1F9FF': ['nazar_amulet'],
  // 🧩 puzzle piece
  '1F9E9': ['jigsaw', 'puzzle_piece'],
  // 🧸 teddy bear
  '1F9F8': ['teddy_bear'],
  // ♟️ chess pawn
  '265F': ['chess_pawn'],
  // 🧵 thread
  '1F9F5': ['spool'],
  // 🧶 yarn
  '1F9F6': ['yarn'],
  // 🥽 goggles
  '1F97D': ['goggles'],
  // 🥼 lab coat
  '1F97C': ['lab_coat'],
  // 🥾 hiking boot
  '1F97E': ['hiking_boot'],
  // 🥿 flat shoe
  '1F97F': ['flat_shoe'],
  // 🧮 abacus
  '1F9EE': ['abacus'],
  // 🧾 receipt
  '1F9FE': ['receipt'],
  // 🧰 toolbox
  '1F9F0': ['toolbox'],
  // 🧲 magnet
  '1F9F2': ['magnet'],
  // 🧪 test tube
  '1F9EA': ['test_tube'],
  // 🧫 petri dish
  '1F9EB': ['petri_dish'],
  // 🦰 red hair
  '1F9B0': ['red_hair'],
  // 🦲 bald
  '1F9B2': ['bald'],
  // 🦱 curly hair
  '1F9B1': ['curly_hair'],
  // 🧬 dna
  '1F9EC': ['dna', 'double_helix'],
  // 🦳 white hair
  '1F9B3': ['white_hair'],
  // 🧴 lotion bottle
  '1F9F4': ['lotion'],
  // 🧷 safety pin
  '1F9F7': ['safety_pin'],
  // 🧹 broom
  '1F9F9': ['broom'],
  // 🧺 basket
  '1F9FA': ['basket'],
  // 🧻 roll of paper
  '1F9FB': ['toilet_paper'],
  // 🧼 soap
  '1F9FC': ['soap'],
  // 🧽 sponge
  '1F9FD': ['sponge'],
  // 🧯 fire extinguisher
  '1F9EF': ['fire_extinguisher'],
  // ♾️ infinity
  '267E': ['infinity'],
  // 🏴‍☠️ pirate flag
  '1F3F4-200D-2620-FE0F': ['pirate_flag', 'jolly_roger'],

  // VERSION 12
  // ☺️ smiling face
  '263A-FE0F': '263A',
  // ☹️ frowning face
  '2639-FE0F': '2639',
  // 🥱 yawning face
  '1F971': ['yawn'],
  // ☠️ skull and crossbones
  '2620-FE0F': '2620',
  // ❣️ heart exclamation
  '2763-FE0F': '2763',
  // ❤️ red heart
  '2764-FE0F': '2764',
  // 🤎 brown heart
  '1F90E': ['brown_heart'],
  // 🤍 white heart
  '1F90D': ['white_heart'],
  // 🕳️ hole
  '1F573-FE0F': '1F573',
  // 🗨️ left speech bubble
  '1F5E8-FE0F': '1F5E8',
  // 🗯️ right anger bubble
  '1F5EF-FE0F': '1F5EF',
  // 🖐️ hand with fingers splayed
  '1F590-FE0F': '1F590',
  // 🤏 pinching hand
  '1F90F': ['pinch'],
  // ✌️ victory hand
  '270C-FE0F': '270C',
  // ☝️ index pointing up
  '261D-FE0F': '261D',
  // ✍️ writing hand
  '270D-FE0F': '270D',
  // 🦾 mechanical arm
  '1F9BE': ['mech_arm'],
  // 🦿 mechanical leg
  '1F9BF': ['mech_leg'],
  // 🦻 ear with hearing aid
  '1F9BB': ['hearing_aid'],
  // 👁️ eye
  '1F441-FE0F': '1F441',
  // 🧏 deaf person
  '1F9CF': ['person_deaf'],
  // 🧏‍♂️ deaf man
  '1F9CF-200D-2642-FE0F': ['man_deaf'],
  // 🧏‍♀️ deaf woman
  '1F9CF-200D-2640-FE0F': ['woman_deaf'],
  // 🕵️ detective
  '1F575-FE0F': '1F575',
  // 🧍 person standing
  '1F9CD': ['person_standing'],
  // 🧍‍♂️ man standing
  '1F9CD-200D-2642-FE0F': ['man_standing'],
  // 🧍‍♀️ woman standing
  '1F9CD-200D-2640-FE0F': ['woman_standing'],
  // 🧎 person kneeling
  '1F9CE': ['person_kneeling'],
  // 🧎‍♂️ man kneeling
  '1F9CE-200D-2642-FE0F': ['man_kneeling'],
  // 🧎‍♀️ woman kneeling
  '1F9CE-200D-2640-FE0F': ['woman_kneeling'],
  // 👨‍🦯 man with probing cane
  '1F468-200D-1F9AF': ['man_probing_cane'],
  // 👩‍🦯 woman with probing cane
  '1F469-200D-1F9AF': ['woman_probing_cane'],
  // 👨‍🦼 man in motorized wheelchair
  '1F468-200D-1F9BC': ['man_motor_wheelchair'],
  // 👩‍🦼 woman in motorized wheelchair
  '1F469-200D-1F9BC': ['woman_motor_wheelchair'],
  // 👨‍🦽 man in manual wheelchair
  '1F468-200D-1F9BD': ['man_wheelchair'],
  // 👩‍🦽 woman in manual wheelchair
  '1F469-200D-1F9BD': ['woman_wheelchair'],
  // 🕴️ man in suit levitating
  '1F574-FE0F': '1F574',
  // ⛷️ skier
  '26F7-FE0F': '26F7',
  // 🏌️ person golfing
  '1F3CC-FE0F': '1F3CC',
  // ⛹️ person bouncing ball
  '26F9-FE0F': '26F9',
  // 🏋️ person lifting weights
  '1F3CB-FE0F': '1F3CB',
  // 🧑‍🤝‍🧑 people holding hands
  '1F9D1-200D-1F91D-200D-1F9D1': ['holding_hands_people'],
  // 🗣️ speaking head
  '1F5E3-FE0F': '1F5E3',
  // 🦧 orangutan
  '1F9A7': ['orangutan'],
  // 🦮 guide dog
  '1F9AE': ['guide_dog'],
  // 🐕‍🦺 service dog
  '1F415-200D-1F9BA': ['service_dog'],
  // 🐿️ chipmunk
  '1F43F-FE0F': ['chipmunk'],
  // 🦥 sloth
  '1F9A5': ['sloth'],
  // 🦦 otter
  '1F9A6': ['otter'],
  // 🦨 skunk
  '1F9A8': ['skunk'],
  // 🕊️ dove
  '1F54A-FE0F': '1F54A',
  // 🦩 flamingo
  '1F9A9': ['flamingo'],
  // 🕷️ spider
  '1F577-FE0F': '1F577',
  // 🕸️ spider web
  '1F578-FE0F': '1F578',
  // 🏵️ rosette
  '1F3F5-FE0F': '1F3F5',
  // ☘️ shamrock
  '2618-FE0F': '2618',
  // 🌶️ hot pepper
  '1F336-FE0F': '1F336',
  // 🧄 garlic
  '1F9C4': ['garlic'],
  // 🧅 onion
  '1F9C5': ['onion'],
  // 🧇 waffle
  '1F9C7': ['waffle'],
  // 🧆 falafel
  '1F9C6': ['falafel'],
  // 🧈 butter
  '1F9C8': ['butter'],
  // 🦪 oyster
  '1F9AA': ['oyster'],
  // 🧃 beverage box
  '1F9C3': ['beverage_box', 'juice_box'],
  // 🧉 mate
  '1F9C9': ['mate', 'yerba_mate'],
  // 🧊 ice
  '1F9CA': ['ice'],
  // 🍽️ fork and knife with plate
  '1F37D-FE0F': '1F37D',
  // 🗺️ world map
  '1F5FA-FE0F': '1F5FA',
  // 🏔️ snow-capped mountain
  '1F3D4-FE0F': '1F3D4',
  // ⛰️ mountain
  '26F0-FE0F': '26F0',
  // 🏕️ camping
  '1F3D5-FE0F': '1F3D5',
  // 🏖️ beach with umbrella
  '1F3D6-FE0F': '1F3D6',
  // 🏜️ desert
  '1F3DC-FE0F': '1F3DC',
  // 🏝️ desert island
  '1F3DD-FE0F': '1F3DD',
  // 🏞️ national park
  '1F3DE-FE0F': '1F3DE',
  // 🏟️ stadium
  '1F3DF-FE0F': '1F3DF',
  // 🏛️ classical building
  '1F3DB-FE0F': '1F3DB',
  // 🏗️ building construction
  '1F3D7-FE0F': '1F3D7',
  // 🏘️ houses
  '1F3D8-FE0F': '1F3D8',
  // 🏚️ derelict house
  '1F3DA-FE0F': '1F3DA',
  // 🛕 hindu temple
  '1F6D5': ['hindu_temple'],
  // ⛩️ shinto shrine
  '26E9-FE0F': '26E9',
  // 🏙️ cityscape
  '1F3D9-FE0F': '1F3D9',
  // ♨️ hot springs
  '2668-FE0F': '2668',
  // 🏎️ racing car
  '1F3CE-FE0F': '1F3CE',
  // 🏍️ motorcycle
  '1F3CD-FE0F': '1F3CD',
  // 🦽 manual wheelchair
  '1F9BD': ['wheelchair'],
  // 🦼 motorized wheelchair
  '1F9BC': ['motor_wheelchair'],
  // 🛺 auto rickshaw
  '1F6FA': ['auto_rickshaw'],
  // 🛣️ motorway
  '1F6E3-FE0F': '1F6E3',
  // 🛤️ railway track
  '1F6E4-FE0F': '1F6E4',
  // 🛢️ oil drum
  '1F6E2-FE0F': '1F6E2',
  // 🛳️ passenger ship
  '1F6F3-FE0F': '1F6F3',
  // ⛴️ ferry
  '26F4-FE0F': '26F4',
  // 🛥️ motor boat
  '1F6E5-FE0F': '1F6E5',
  // ✈️ airplane
  '2708-FE0F': '2708',
  // 🛩️ small airplane
  '1F6E9-FE0F': '1F6E9',
  // 🪂 parachute
  '1FA82': ['parachute'],
  // 🛰️ satellite
  '1F6F0-FE0F': '1F6F0',
  // 🛎️ bellhop bell
  '1F6CE-FE0F': '1F6CE',
  // ⏱️ stopwatch
  '23F1-FE0F': '23F1',
  // ⏲️ timer clock
  '23F2-FE0F': '23F2',
  // 🕰️ mantelpiece clock
  '1F570-FE0F': '1F570',
  // 🌡️ thermometer
  '1F321-FE0F': '1F321',
  // ☀️ sun
  '2600-FE0F': '2600',
  // 🪐 ringed planet
  '1FA90': ['ringed_planet', 'saturn'],
  // ☁️ cloud
  '2601-FE0F': '2601',
  // ⛈️ cloud with lightning and rain
  '26C8-FE0F': '26C8',
  // 🌤️ sun behind small cloud
  '1F324-FE0F': '1F324',
  // 🌥️ sun behind large cloud
  '1F325-FE0F': '1F325',
  // 🌦️ sun behind rain cloud
  '1F326-FE0F': '1F326',
  // 🌧️ cloud with rain
  '1F327-FE0F': '1F327',
  // 🌨️ cloud with snow
  '1F328-FE0F': '1F328',
  // 🌩️ cloud with lightning
  '1F329-FE0F': '1F329',
  // 🌪️ tornado
  '1F32A-FE0F': '1F32A',
  // 🌫️ fog
  '1F32B-FE0F': '1F32B',
  // 🌬️ wind face
  '1F32C-FE0F': '1F32C',
  // ☂️ umbrella
  '2602-FE0F': '2602',
  // ⛱️ umbrella on ground
  '26F1-FE0F': '26F1',
  // ❄️ snowflake
  '2744-FE0F': '2744',
  // ☃️ snowman
  '2603-FE0F': '2603',
  // ☄️ comet
  '2604-FE0F': '2604',
  // 🎗️ reminder ribbon
  '1F397-FE0F': '1F397',
  // 🎟️ admission tickets
  '1F39F-FE0F': '1F39F',
  // 🎖️ military medal
  '1F396-FE0F': '1F396',
  // ⛸️ ice skate
  '26F8-FE0F': '26F8',
  // 🤿 diving mask
  '1F93F': ['diving_mask', 'scuba_mask'],
  // 🪀 yo-yo
  '1FA80': ['yoyo'],
  // 🪁 kite
  '1FA81': ['kite'],
  // 🕹️ joystick
  '1F579-FE0F': '1F579',
  // ♠️ spade suit
  '2660-FE0F': '2660',
  // ♥️ heart suit
  '2665-FE0F': '2665',
  // ♦️ diamond suit
  '2666-FE0F': '2666',
  // ♣️ club suit
  '2663-FE0F': '2663',
  // ♟️ chess pawn
  '265F-FE0F': '265F',
  // 🖼️ framed picture
  '1F5BC-FE0F': '1F5BC',
  // 🕶️ sunglasses
  '1F576-FE0F': '1F576',
  // 🦺 safety vest
  '1F9BA': ['safety_vest'],
  // 🥻 sari
  '1F97B': ['sari'],
  // 🩱 one-piece swimsuit
  '1FA71': ['one_piece_swimsuit'],
  // 🩲 briefs
  '1FA72': ['briefs'],
  // 🩳 shorts
  '1FA73': ['shorts'],
  // 🛍️ shopping bags
  '1F6CD-FE0F': '1F6CD',
  // 🩰 ballet shoes
  '1FA70': ['ballet_shoes'],
  // ⛑️ rescue worker’s helmet
  '26D1-FE0F': '26D1',
  // 🎙️ studio microphone
  '1F399-FE0F': '1F399',
  // 🎚️ level slider
  '1F39A-FE0F': '1F39A',
  // 🎛️ control knobs
  '1F39B-FE0F': '1F39B',
  // 🪕 banjo
  '1FA95': ['banjo'],
  // ☎️ telephone
  '260E-FE0F': '260E',
  // 🖥️ desktop computer
  '1F5A5-FE0F': '1F5A5',
  // 🖨️ printer
  '1F5A8-FE0F': '1F5A8',
  // ⌨️ keyboard
  '2328-FE0F': '2328',
  // 🖱️ computer mouse
  '1F5B1-FE0F': '1F5B1',
  // 🖲️ trackball
  '1F5B2-FE0F': '1F5B2',
  // 🎞️ film frames
  '1F39E-FE0F': '1F39E',
  // 📽️ film projector
  '1F4FD-FE0F': '1F4FD',
  // 🕯️ candle
  '1F56F-FE0F': '1F56F',
  // 🪔 diya lamp
  '1FA94': ['diya_lamp'],
  // 🗞️ rolled-up newspaper
  '1F5DE-FE0F': '1F5DE',
  // 🏷️ label
  '1F3F7-FE0F': '1F3F7',
  // ✉️ envelope
  '2709-FE0F': '2709',
  // 🗳️ ballot box with ballot
  '1F5F3-FE0F': '1F5F3',
  // ✏️ pencil
  '270F-FE0F': '270F',
  // ✒️ black nib
  '2712-FE0F': '2712',
  // 🖋️ fountain pen
  '1F58B-FE0F': '1F58B',
  // 🖊️ pen
  '1F58A-FE0F': '1F58A',
  // 🖌️ paintbrush
  '1F58C-FE0F': '1F58C',
  // 🖍️ crayon
  '1F58D-FE0F': '1F58D',
  // 🗂️ card index dividers
  '1F5C2-FE0F': '1F5C2',
  // 🗒️ spiral notepad
  '1F5D2-FE0F': '1F5D2',
  // 🗓️ spiral calendar
  '1F5D3-FE0F': '1F5D3',
  // 🖇️ linked paperclips
  '1F587-FE0F': '1F587',
  // ✂️ scissors
  '2702-FE0F': '2702',
  // 🗃️ card file box
  '1F5C3-FE0F': '1F5C3',
  // 🗄️ file cabinet
  '1F5C4-FE0F': '1F5C4',
  // 🗑️ wastebasket
  '1F5D1-FE0F': '1F5D1',
  // 🗝️ old key
  '1F5DD-FE0F': '1F5DD',
  // 🪓 axe
  '1FA93': ['axe'],
  // ⛏️ pick
  '26CF-FE0F': '26CF',
  // ⚒️ hammer and pick
  '2692-FE0F': '2692',
  // 🛠️ hammer and wrench
  '1F6E0-FE0F': '1F6E0',
  // 🗡️ dagger
  '1F5E1-FE0F': '1F5E1',
  // ⚔️ crossed swords
  '2694-FE0F': '2694',
  // 🛡️ shield
  '1F6E1-FE0F': '1F6E1',
  // ⚙️ gear
  '2699-FE0F': '2699',
  // 🗜️ clamp
  '1F5DC-FE0F': '1F5DC',
  // ⚖️ balance scale
  '2696-FE0F': '2696',
  // 🦯 probing cane
  '1F9AF': ['probing_cane'],
  // ⛓️ chains
  '26D3-FE0F': '26D3',
  // ⚗️ alembic
  '2697-FE0F': '2697',
  // 🩸 drop of blood
  '1FA78': ['blood_drop'],
  // 🩹 adhesive bandage
  '1FA79': ['bandaid', 'adhesive_bandage'],
  // 🩺 stethoscope
  '1FA7A': ['stethoscope'],
  // 🛏️ bed
  '1F6CF-FE0F': '1F6CF',
  // 🛋️ couch and lamp
  '1F6CB-FE0F': '1F6CB',
  // 🪑 chair
  '1FA91': ['chair'],
  // 🪒 razor
  '1FA92': ['razor'],
  // ⚰️ coffin
  '26B0-FE0F': '26B0',
  // ⚱️ funeral urn
  '26B1-FE0F': '26B1',
  // ⚠️ warning
  '26A0-FE0F': '26A0',
  // ☢️ radioactive
  '2622-FE0F': '2622',
  // ☣️ biohazard
  '2623-FE0F': '2623',
  // ⬆️ up arrow
  '2B06-FE0F': '2B06',
  // ↗️ up-right arrow
  '2197-FE0F': '2197',
  // ➡️ right arrow
  '27A1-FE0F': '27A1',
  // ↘️ down-right arrow
  '2198-FE0F': '2198',
  // ⬇️ down arrow
  '2B07-FE0F': '2B07',
  // ↙️ down-left arrow
  '2199-FE0F': '2199',
  // ⬅️ left arrow
  '2B05-FE0F': '2B05',
  // ↖️ up-left arrow
  '2196-FE0F': '2196',
  // ↕️ up-down arrow
  '2195-FE0F': '2195',
  // ↔️ left-right arrow
  '2194-FE0F': '2194',
  // ↩️ right arrow curving left
  '21A9-FE0F': '21A9',
  // ↪️ left arrow curving right
  '21AA-FE0F': '21AA',
  // ⤴️ right arrow curving up
  '2934-FE0F': '2934',
  // ⤵️ right arrow curving down
  '2935-FE0F': '2935',
  // ⚛️ atom symbol
  '269B-FE0F': '269B',
  // 🕉️ om
  '1F549-FE0F': '1F549',
  // ✡️ star of David
  '2721-FE0F': '2721',
  // ☸️ wheel of dharma
  '2638-FE0F': '2638',
  // ☯️ yin yang
  '262F-FE0F': '262F',
  // ✝️ latin cross
  '271D-FE0F': '271D',
  // ☦️ orthodox cross
  '2626-FE0F': '2626',
  // ☪️ star and crescent
  '262A-FE0F': '262A',
  // ☮️ peace symbol
  '262E-FE0F': '262E',
  // ▶️ play button
  '25B6-FE0F': '25B6',
  // ⏭️ next track button
  '23ED-FE0F': '23ED',
  // ⏯️ play or pause button
  '23EF-FE0F': '23EF',
  // ◀️ reverse button
  '25C0-FE0F': '25C0',
  // ⏮️ last track button
  '23EE-FE0F': '23EE',
  // ⏸️ pause button
  '23F8-FE0F': '23F8',
  // ⏹️ stop button
  '23F9-FE0F': '23F9',
  // ⏺️ record button
  '23FA-FE0F': '23FA',
  // ⏏️ eject button
  '23CF-FE0F': '23CF',
  // ♀️ female sign
  '2640-FE0F': '2640',
  // ♂️ male sign
  '2642-FE0F': '2642',
  // ⚕️ medical symbol
  '2695-FE0F': '2695',
  // ♾️ infinity
  '267E-FE0F': '267E',
  // ♻️ recycling symbol
  '267B-FE0F': '267B',
  // ⚜️ fleur-de-lis
  '269C-FE0F': '269C',
  // ☑️ check box with check
  '2611-FE0F': '2611',
  // ✔️ check mark
  '2714-FE0F': '2714',
  // ✖️ multiplication sign
  '2716-FE0F': '2716',
  // 〽️ part alternation mark
  '303D-FE0F': '303D',
  // ✳️ eight-spoked asterisk
  '2733-FE0F': '2733',
  // ✴️ eight-pointed star
  '2734-FE0F': '2734',
  // ❇️ sparkle
  '2747-FE0F': '2747',
  // ‼️ double exclamation mark
  '203C-FE0F': '203C',
  // ⁉️ exclamation question mark
  '2049-FE0F': '2049',
  // 〰️ wavy dash
  '3030-FE0F': '3030',
  // ©️ copyright
  '00A9-FE0F': '00A9',
  // ®️ registered
  '00AE-FE0F': '00AE',
  // ™️ trade mark
  '2122-FE0F': '2122',
  // 🅰️ A button (blood type)
  '1F170-FE0F': '1F170',
  // 🅱️ B button (blood type)
  '1F171-FE0F': '1F171',
  // ℹ️ information
  '2139-FE0F': '2139',
  // Ⓜ️ circled M
  '24C2-FE0F': '24C2',
  // 🅾️ O button (blood type)
  '1F17E-FE0F': '1F17E',
  // 🅿️ P button
  '1F17F-FE0F': '1F17F',
  // 🈂️ Japanese “service charge” button
  '1F202-FE0F': '1F202',
  // 🈷️ Japanese “monthly amount” button
  '1F237-FE0F': '1F237',
  // ㊗️ Japanese “congratulations” button
  '3297-FE0F': '3297',
  // ㊙️ Japanese “secret” button
  '3299-FE0F': '3299',
  // 🟠 orange circle
  '1F7E0': ['orange_circle'],
  // 🟡 yellow circle
  '1F7E1': ['yellow_circle'],
  // 🟢 green circle
  '1F7E2': ['green_circle'],
  // 🟣 purple circle
  '1F7E3': ['purple_circle'],
  // 🟤 brown circle
  '1F7E4': ['brown_circle'],
  // 🟥 red square
  '1F7E5': ['red_square'],
  // 🟧 orange square
  '1F7E7': ['orange_square'],
  // 🟨 yellow square
  '1F7E8': ['yellow_square'],
  // 🟩 green square
  '1F7E9': ['green_square'],
  // 🟦 blue square
  '1F7E6': ['blue_square'],
  // 🟪 purple square
  '1F7EA': ['purple_square'],
  // 🟫 brown square
  '1F7EB': ['brown_square'],
  // ◼️ black medium square
  '25FC-FE0F': '25FC',
  // ◻️ white medium square
  '25FB-FE0F': '25FB',
  // ▪️ black small square
  '25AA-FE0F': '25AA',
  // ▫️ white small square
  '25AB-FE0F': '25AB',
  // 🏳️ white flag
  '1F3F3-FE0F': '1F3F3',
};
