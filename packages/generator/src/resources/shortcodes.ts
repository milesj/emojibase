/* eslint-disable sort-keys */

/**
 * Official Emojibase shortcodes list and naming guidelines
 *
 *  - All emoji should have a shortcode that matches or is
 *    relatively close to its annotation.
 *
 *  - All emoji should have at minimum 1 shortcode, and at
 *    max 3 shortcodes. An exception to this rule applies to
 *    extremely common emoji, like "thumbs up".
 *
 *  - For compatibility and consistency with third-party
 *    shortcodes, attempt to adopt common shortcodes from
 *    the community, but not all of them.
 *
 * SMILEYS
 *
 *  - Emoji that are SUFFIXED with "face" should have a shortcode
 *    with the face suffix, and another shorthand equivalent.
 *    Example: "worried_face", "worried"
 *
 * PEOPLE
 *
 *  - Emoji in the form of "person <action>" should also include
 *    shortcodes without the person prefix, in which they denote
 *    verbs/nouns. Example: "person_swimming", "swimming", "swimmer"
 *
 *  - Emoji in the form of "person: <thing>" must omit the person
 *    prefix from the shortcodes.
 *    Example: "red_haired", "man_red_haired", "woman_red_haired"
 *
 *  - Emoji that are SUFFIXED with "person" should be used as is.
 *    If there are man/woman variants, then it _must_ be suffixed.
 *    Example: "deaf_person", "deaf_man", "deaf_woman".
 *
 * ANIMALS
 *
 *  - Emoji that are SUFFIXED with "face" should have a shortcode
 *    with and without the face suffix (if the latter isn't taken).
 *    Example: "bear_face", "bear"
 *    Example (cat taken): "cat_face"
 *
 * WEATHER
 *
 *  - Use a more descriptive term over the annotation if
 *    applicable. For example, "storm" over the annotation
 *    "cloud with lightning and rain".
 *
 * FLAGS
 *
 *  - All countries should have both "flag_<locale>" and "<name>" shortcodes.
 *    Do NOT provide a 2 letter shortcode as it will conflict with many
 *    non-flag shortcodes that also use 2 letters.
 *
 *  - Country shortcodes should prefix with "flag_<name>", while
 *    non-country use a suffix "<name>_flag".
 */

export const shortcodes = {
  // 🇦 regional indicator A
  '1F1E6': ['regional_indicator_a'],
  // 🇧 regional indicator B
  '1F1E7': ['regional_indicator_b'],
  // 🇨 regional indicator C
  '1F1E8': ['regional_indicator_c'],
  // 🇩 regional indicator D
  '1F1E9': ['regional_indicator_d'],
  // 🇪 regional indicator E
  '1F1EA': ['regional_indicator_e'],
  // 🇫 regional indicator F
  '1F1EB': ['regional_indicator_f'],
  // 🇬 regional indicator G
  '1F1EC': ['regional_indicator_g'],
  // 🇭 regional indicator H
  '1F1ED': ['regional_indicator_h'],
  // 🇮 regional indicator I
  '1F1EE': ['regional_indicator_i'],
  // 🇯 regional indicator J
  '1F1EF': ['regional_indicator_j'],
  // 🇰 regional indicator K
  '1F1F0': ['regional_indicator_k'],
  // 🇱 regional indicator L
  '1F1F1': ['regional_indicator_l'],
  // 🇲 regional indicator M
  '1F1F2': ['regional_indicator_m'],
  // 🇳 regional indicator N
  '1F1F3': ['regional_indicator_n'],
  // 🇴 regional indicator O
  '1F1F4': ['regional_indicator_o'],
  // 🇵 regional indicator P
  '1F1F5': ['regional_indicator_p'],
  // 🇶 regional indicator Q
  '1F1F6': ['regional_indicator_q'],
  // 🇷 regional indicator R
  '1F1F7': ['regional_indicator_r'],
  // 🇸 regional indicator S
  '1F1F8': ['regional_indicator_s'],
  // 🇹 regional indicator T
  '1F1F9': ['regional_indicator_t'],
  // 🇺 regional indicator U
  '1F1FA': ['regional_indicator_u'],
  // 🇻 regional indicator V
  '1F1FB': ['regional_indicator_v'],
  // 🇼 regional indicator W
  '1F1FC': ['regional_indicator_w'],
  // 🇽 regional indicator X
  '1F1FD': ['regional_indicator_x'],
  // 🇾 regional indicator Y
  '1F1FE': ['regional_indicator_y'],
  // 🇿 regional indicator Z
  '1F1FF': ['regional_indicator_z'],

  // VERSION 0.6
  // 😃 grinning face with big eyes
  '1F603': ['grinning_face_with_big_eyes', 'smiley'],
  // 😄 grinning face with smiling eyes
  '1F604': ['grinning_face_with_closed_eyes', 'smile'],
  // 😁 beaming face with smiling eyes
  '1F601': ['beaming_face', 'grin'],
  // 😆 grinning squinting face
  '1F606': ['laughing', 'lol', 'satisfied', 'squinting_face'],
  // 😅 grinning face with sweat
  '1F605': ['grinning_face_with_sweat', 'sweat_smile'],
  // 😂 face with tears of joy
  '1F602': ['joy', 'lmao', 'tears_of_joy'],
  // 😉 winking face
  '1F609': ['wink', 'winking_face'],
  // 😊 smiling face with smiling eyes
  '1F60A': ['blush', 'smiling_face_with_closed_eyes'],
  // 😍 smiling face with heart-eyes
  '1F60D': ['heart_eyes', 'smiling_face_with_heart_eyes'],
  // 😘 face blowing a kiss
  '1F618': ['blowing_a_kiss', 'kissing_heart'],
  // ☺︎ smiling face
  '263A': ['relaxed', 'smiling_face'],
  // 😚 kissing face with closed eyes
  '1F61A': ['kissing_closed_eyes', 'kissing_face_with_closed_eyes'],
  // 😋 face savoring food
  '1F60B': ['savoring_food', 'yum'],
  // 😜 winking face with tongue
  '1F61C': ['stuck_out_tongue_winking_eye'],
  // 😝 squinting face with tongue
  '1F61D': ['stuck_out_tongue_closed_eyes'],
  // 😏 smirking face
  '1F60F': ['smirk', 'smirking', 'smirking_face'],
  // 😒 unamused face
  '1F612': ['unamused', 'unamused_face'],
  // 😌 relieved face
  '1F60C': ['relieved', 'relieved_face'],
  // 😔 pensive face
  '1F614': ['pensive', 'pensive_face'],
  // 😪 sleepy face
  '1F62A': ['sleepy', 'sleepy_face'],
  // 😷 face with medical mask
  '1F637': ['mask', 'medical_mask'],
  // 😵 face with crossed-out eyes
  '1F635': ['dizzy_face', 'knocked_out'],
  // 😲 astonished face
  '1F632': ['astonished', 'astonished_face'],
  // 😳 flushed face
  '1F633': ['flushed', 'flushed_face'],
  // 😨 fearful face
  '1F628': ['fearful', 'fearful_face'],
  // 😰 anxious face with sweat
  '1F630': ['anxious', 'anxious_face', 'cold_sweat'],
  // 😥 sad but relieved face
  '1F625': ['disappointed_relieved', 'sad_relieved_face'],
  // 😢 crying face
  '1F622': ['cry', 'crying_face'],
  // 😭 loudly crying face
  '1F62D': ['loudly_crying_face', 'sob'],
  // 😱 face screaming in fear
  '1F631': ['scream', 'screaming_in_fear'],
  // 😖 confounded face
  '1F616': ['confounded', 'confounded_face'],
  // 😣 persevering face
  '1F623': ['persevere', 'persevering_face'],
  // 😞 disappointed face
  '1F61E': ['disappointed', 'disappointed_face'],
  // 😓 downcast face with sweat
  '1F613': ['downcast_face', 'sweat'],
  // 😩 weary face
  '1F629': ['weary', 'weary_face'],
  // 😫 tired face
  '1F62B': ['tired', 'tired_face'],
  // 😤 face with steam from nose
  '1F624': ['nose_steam', 'triumph'],
  // 😡 enraged face
  '1F621': ['pout', 'pouting_face', 'rage'],
  // 😠 angry face
  '1F620': ['angry', 'angry_face'],
  // 👿 angry face with horns
  '1F47F': ['angry_imp', 'imp'],
  // 💀 skull
  '1F480': ['skull'],
  // 💩 pile of poo
  '1F4A9': ['poop', 'shit'],
  // 👹 ogre
  '1F479': ['japanese_ogre', 'ogre'],
  // 👺 goblin
  '1F47A': ['goblin', 'japanese_goblin'],
  // 👻 ghost
  '1F47B': ['ghost'],
  // 👽️ alien
  '1F47D': ['alien'],
  // 👾 alien monster
  '1F47E': ['alien_monster', 'space_invader'],
  // 😺 grinning cat
  '1F63A': ['grinning_cat', 'smiley_cat'],
  // 😸 grinning cat with smiling eyes
  '1F638': ['grinning_cat_with_closed_eyes', 'smile_cat'],
  // 😹 cat with tears of joy
  '1F639': ['joy_cat', 'tears_of_joy_cat'],
  // 😻 smiling cat with heart-eyes
  '1F63B': ['heart_eyes_cat', 'smiling_cat_with_heart_eyes'],
  // 😼 cat with wry smile
  '1F63C': ['smirk_cat', 'wry_smile_cat'],
  // 😽 kissing cat
  '1F63D': ['kissing_cat'],
  // 🙀 weary cat
  '1F640': ['scream_cat', 'weary_cat'],
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
  // 💌 love letter
  '1F48C': ['love_letter'],
  // 💘 heart with arrow
  '1F498': ['cupid', 'heart_with_arrow'],
  // 💝 heart with ribbon
  '1F49D': ['gift_heart', 'heart_with_ribbon'],
  // 💖 sparkling heart
  '1F496': ['sparkling_heart'],
  // 💗 growing heart
  '1F497': ['growing_heart', 'heartpulse'],
  // 💓 beating heart
  '1F493': ['beating_heart', 'heartbeat'],
  // 💞 revolving hearts
  '1F49E': ['revolving_hearts'],
  // 💕 two hearts
  '1F495': ['two_hearts'],
  // 💟 heart decoration
  '1F49F': ['heart_decoration'],
  // 💔 broken heart
  '1F494': ['broken_heart'],
  // ❤︎ red heart
  '2764': ['heart', 'red_heart'],
  // 💛 yellow heart
  '1F49B': ['yellow_heart'],
  // 💚 green heart
  '1F49A': ['green_heart'],
  // 💙 blue heart
  '1F499': ['blue_heart'],
  // 💜 purple heart
  '1F49C': ['purple_heart'],
  // 💋 kiss mark
  '1F48B': ['kiss'],
  // 💯 hundred points
  '1F4AF': ['100'],
  // 💢 anger symbol
  '1F4A2': ['anger'],
  // 💥 collision
  '1F4A5': ['boom', 'collision'],
  // 💫 dizzy
  '1F4AB': ['dizzy'],
  // 💦 sweat droplets
  '1F4A6': ['sweat_drops'],
  // 💨 dashing away
  '1F4A8': ['dash', 'dashing_away'],
  // 💬 speech balloon
  '1F4AC': ['speech_balloon'],
  // 💤 ZZZ
  '1F4A4': ['zzz'],
  // 👋 waving hand
  '1F44B': ['wave', 'waving_hand'],
  // ✋️ raised hand
  '270B': ['high_five', 'raised_hand'],
  // 👌 OK hand
  '1F44C': ['ok_hand'],
  // ✌︎ victory hand
  '270C': ['v', 'victory'],
  // 👈️ backhand index pointing left
  '1F448': ['point_left'],
  // 👉️ backhand index pointing right
  '1F449': ['point_right'],
  // 👆️ backhand index pointing up
  '1F446': ['point_up'],
  // 👇️ backhand index pointing down
  '1F447': ['point_down'],
  // ☝︎ index pointing up
  '261D': ['point_up_2'],
  // 👍️ thumbs up
  '1F44D': ['+1', 'thumbsup', 'yes'],
  // 👎️ thumbs down
  '1F44E': ['-1', 'no', 'thumbsdown'],
  // ✊️ raised fist
  '270A': ['fist'],
  // 👊 oncoming fist
  '1F44A': ['punch'],
  // 👏 clapping hands
  '1F44F': ['clap', 'clapping_hands'],
  // 🙌 raising hands
  '1F64C': ['raised_hands'],
  // 👐 open hands
  '1F450': ['open_hands'],
  // 🙏 folded hands
  '1F64F': ['folded_hands', 'pray'],
  // 💅 nail polish
  '1F485': ['nail_care', 'nail_polish'],
  // 💪 flexed biceps
  '1F4AA': ['muscle', 'right_bicep'],
  // 👂️ ear
  '1F442': ['ear'],
  // 👃 nose
  '1F443': ['nose'],
  // 👀 eyes
  '1F440': ['eyes'],
  // 👅 tongue
  '1F445': ['tongue'],
  // 👄 mouth
  '1F444': ['lips', 'mouth'],
  // 👶 baby
  '1F476': ['baby'],
  // 👦 boy
  '1F466': ['boy'],
  // 👧 girl
  '1F467': ['girl'],
  // 👱 person: blond hair
  '1F471': ['blond_haired'],
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
  '1F64E': ['person_pouting', 'pouting'],
  // 🙅 person gesturing NO
  '1F645': ['no_good', 'person_gesturing_no'],
  // 🙆 person gesturing OK
  '1F646': ['all_good', 'person_gesturing_ok'],
  // 💁 person tipping hand
  '1F481': ['person_tipping_hand'],
  // 🙋 person raising hand
  '1F64B': ['person_raising_hand'],
  // 🙇 person bowing
  '1F647': ['bow', 'person_bowing'],
  // 👮 police officer
  '1F46E': ['cop', 'police_officer'],
  // 💂 guard
  '1F482': ['guard'],
  // 👷 construction worker
  '1F477': ['construction_worker'],
  // 👸 princess
  '1F478': ['princess'],
  // 👳 person wearing turban
  '1F473': ['person_wearing_turban'],
  // 👲 person with skullcap
  '1F472': ['person_with_skullcap'],
  // 👰 person with veil
  '1F470': ['person_with_veil'],
  // 👼 baby angel
  '1F47C': ['angel'],
  // 🎅 Santa Claus
  '1F385': ['santa'],
  // 💆 person getting massage
  '1F486': ['massage', 'person_getting_massage'],
  // 💇 person getting haircut
  '1F487': ['haircut', 'person_getting_haircut'],
  // 🚶 person walking
  '1F6B6': ['person_walking', 'walking'],
  // 🏃 person running
  '1F3C3': ['person_running', 'running'],
  // 💃 woman dancing
  '1F483': ['dancer', 'woman_dancing'],
  // 👯 people with bunny ears
  '1F46F': ['dancers', 'people_with_bunny_ears_partying'],
  // 🏂️ snowboarder
  '1F3C2': ['person_snowboarding', 'snowboarder', 'snowboarding'],
  // 🏄️ person surfing
  '1F3C4': ['person_surfing', 'surfer', 'surfing'],
  // 🏊️ person swimming
  '1F3CA': ['person_swimming', 'swimmer', 'swimming'],
  // 🛀 person taking bath
  '1F6C0': ['bath', 'person_taking_bath'],
  // 👫 woman and man holding hands
  '1F46B': ['couple'],
  // 💏 kiss
  '1F48F': ['couple_kiss', 'couplekiss'],
  // 💑 couple with heart
  '1F491': ['couple_with_heart'],
  // 👤 bust in silhouette
  '1F464': ['bust_in_silhouette'],
  // 👪️ family
  '1F46A': ['family'],
  // 👣 footprints
  '1F463': ['footprints'],
  // 🐵 monkey face
  '1F435': ['monkey_face'],
  // 🐒 monkey
  '1F412': ['monkey'],
  // 🐶 dog face
  '1F436': ['dog_face'],
  // 🐩 poodle
  '1F429': ['poodle'],
  // 🐺 wolf
  '1F43A': ['wolf', 'wolf_face'],
  // 🐱 cat face
  '1F431': ['cat_face'],
  // 🐯 tiger face
  '1F42F': ['tiger_face'],
  // 🐴 horse face
  '1F434': ['horse_face'],
  // 🐎 horse
  '1F40E': ['horse', 'racehorse'],
  // 🐮 cow face
  '1F42E': ['cow_face'],
  // 🐷 pig face
  '1F437': ['pig_face'],
  // 🐗 boar
  '1F417': ['boar'],
  // 🐽 pig nose
  '1F43D': ['pig_nose'],
  // 🐑 ewe
  '1F411': ['ewe', 'sheep'],
  // 🐫 two-hump camel
  '1F42B': ['camel'],
  // 🐘 elephant
  '1F418': ['elephant'],
  // 🐭 mouse face
  '1F42D': ['mouse_face'],
  // 🐹 hamster
  '1F439': ['hamster', 'hamster_face'],
  // 🐰 rabbit face
  '1F430': ['rabbit_face'],
  // 🐻 bear
  '1F43B': ['bear', 'bear_face'],
  // 🐨 koala
  '1F428': ['koala', 'koala_face'],
  // 🐼 panda
  '1F43C': ['panda', 'panda_face'],
  // 🐾 paw prints
  '1F43E': ['paw_prints'],
  // 🐔 chicken
  '1F414': ['chicken', 'chicken_face'],
  // 🐣 hatching chick
  '1F423': ['hatching_chick'],
  // 🐤 baby chick
  '1F424': ['baby_chick'],
  // 🐥 front-facing baby chick
  '1F425': ['hatched_chick'],
  // 🐦️ bird
  '1F426': ['bird', 'bird_face'],
  // 🐧 penguin
  '1F427': ['penguin', 'penguin_face'],
  // 🐸 frog
  '1F438': ['frog', 'frog_face'],
  // 🐢 turtle
  '1F422': ['turtle'],
  // 🐍 snake
  '1F40D': ['snake'],
  // 🐲 dragon face
  '1F432': ['dragon_face'],
  // 🐳 spouting whale
  '1F433': ['spouting_whale'],
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
  '1F41E': ['lady_beetle'],
  // 💐 bouquet
  '1F490': ['bouquet'],
  // 🌸 cherry blossom
  '1F338': ['cherry_blossom'],
  // 💮 white flower
  '1F4AE': ['white_flower'],
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
  // 🌴 palm tree
  '1F334': ['palm_tree'],
  // 🌵 cactus
  '1F335': ['cactus'],
  // 🌾 sheaf of rice
  '1F33E': ['ear_of_rice', 'sheaf_of_rice'],
  // 🌿 herb
  '1F33F': ['herb'],
  // 🍀 four leaf clover
  '1F340': ['four_leaf_clover'],
  // 🍁 maple leaf
  '1F341': ['maple_leaf'],
  // 🍂 fallen leaf
  '1F342': ['fallen_leaf'],
  // 🍃 leaf fluttering in wind
  '1F343': ['leaves'],
  // 🍄 mushroom
  '1F344': ['mushroom'],
  // 🍇 grapes
  '1F347': ['grapes'],
  // 🍈 melon
  '1F348': ['melon'],
  // 🍉 watermelon
  '1F349': ['watermelon'],
  // 🍊 tangerine
  '1F34A': ['orange', 'tangerine'],
  // 🍌 banana
  '1F34C': ['banana'],
  // 🍍 pineapple
  '1F34D': ['pineapple'],
  // 🍎 red apple
  '1F34E': ['apple', 'red_apple'],
  // 🍏 green apple
  '1F34F': ['green_apple'],
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
  '1F33D': ['corn', 'ear_of_corn'],
  // 🌰 chestnut
  '1F330': ['chestnut'],
  // 🍞 bread
  '1F35E': ['bread'],
  // 🍖 meat on bone
  '1F356': ['meat_on_bone'],
  // 🍗 poultry leg
  '1F357': ['poultry_leg'],
  // 🍔 hamburger
  '1F354': ['hamburger'],
  // 🍟 french fries
  '1F35F': ['french_fries', 'fries'],
  // 🍕 pizza
  '1F355': ['pizza'],
  // 🍳 cooking
  '1F373': ['cooking', 'fried_egg'],
  // 🍲 pot of food
  '1F372': ['pot_of_food', 'stew'],
  // 🍱 bento box
  '1F371': ['bento', 'bento_box'],
  // 🍘 rice cracker
  '1F358': ['rice_cracker'],
  // 🍙 rice ball
  '1F359': ['rice_ball'],
  // 🍚 cooked rice
  '1F35A': ['cooked_rice', 'rice'],
  // 🍛 curry rice
  '1F35B': ['curry', 'curry_rice'],
  // 🍜 steaming bowl
  '1F35C': ['ramen', 'steaming_bowl'],
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
  // 🍦 soft ice cream
  '1F366': ['icecream', 'soft_serve'],
  // 🍧 shaved ice
  '1F367': ['shaved_ice'],
  // 🍨 ice cream
  '1F368': ['ice_cream'],
  // 🍩 doughnut
  '1F369': ['doughnut'],
  // 🍪 cookie
  '1F36A': ['cookie'],
  // 🎂 birthday cake
  '1F382': ['birthday', 'birthday_cake'],
  // 🍰 shortcake
  '1F370': ['cake', 'shortcake'],
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
  // ☕️ hot beverage
  '2615': ['coffee'],
  // 🍵 teacup without handle
  '1F375': ['tea'],
  // 🍶 sake
  '1F376': ['sake'],
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
  // 🍴 fork and knife
  '1F374': ['fork_and_knife'],
  // 🔪 kitchen knife
  '1F52A': ['knife'],
  // 🌏️ globe showing Asia-Australia
  '1F30F': ['earth_asia'],
  // 🗾 map of Japan
  '1F5FE': ['japan_map'],
  // 🌋 volcano
  '1F30B': ['volcano'],
  // 🗻 mount fuji
  '1F5FB': ['mount_fuji'],
  // 🏠️ house
  '1F3E0': ['house'],
  // 🏡 house with garden
  '1F3E1': ['house_with_garden'],
  // 🏢 office building
  '1F3E2': ['office'],
  // 🏣 Japanese post office
  '1F3E3': ['post_office'],
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
  // ⛲️ fountain
  '26F2': ['fountain'],
  // ⛺️ tent
  '26FA': ['tent'],
  // 🌁 foggy
  '1F301': ['foggy'],
  // 🌃 night with stars
  '1F303': ['night_with_stars'],
  // 🌄 sunrise over mountains
  '1F304': ['sunrise_over_mountains'],
  // 🌅 sunrise
  '1F305': ['sunrise'],
  // 🌆 cityscape at dusk
  '1F306': ['city_dusk'],
  // 🌇 sunset
  '1F307': ['city_sunrise', 'city_sunset'],
  // 🌉 bridge at night
  '1F309': ['bridge_at_night'],
  // ♨︎ hot springs
  '2668': ['hotsprings'],
  // 🎠 carousel horse
  '1F3A0': ['carousel_horse'],
  // 🎡 ferris wheel
  '1F3A1': ['ferris_wheel'],
  // 🎢 roller coaster
  '1F3A2': ['roller_coaster'],
  // 💈 barber pole
  '1F488': ['barber', 'barber_pole'],
  // 🎪 circus tent
  '1F3AA': ['circus_tent'],
  // 🚃 railway car
  '1F683': ['railway_car'],
  // 🚄 high-speed train
  '1F684': ['bullettrain_side'],
  // 🚅 bullet train
  '1F685': ['bullettrain_front'],
  // 🚇️ metro
  '1F687': ['metro'],
  // 🚉 station
  '1F689': ['station'],
  // 🚌 bus
  '1F68C': ['bus'],
  // 🚑️ ambulance
  '1F691': ['ambulance'],
  // 🚒 fire engine
  '1F692': ['fire_engine'],
  // 🚓 police car
  '1F693': ['police_car'],
  // 🚕 taxi
  '1F695': ['taxi'],
  // 🚗 automobile
  '1F697': ['car', 'red_car'],
  // 🚙 sport utility vehicle
  '1F699': ['blue_car', 'suv'],
  // 🚚 delivery truck
  '1F69A': ['delivery_truck', 'truck'],
  // 🚲️ bicycle
  '1F6B2': ['bicycle', 'bike'],
  // 🚏 bus stop
  '1F68F': ['busstop'],
  // ⛽️ fuel pump
  '26FD': ['fuelpump'],
  // 🚨 police car light
  '1F6A8': ['rotating_light'],
  // 🚥 horizontal traffic light
  '1F6A5': ['traffic_light'],
  // 🚧 construction
  '1F6A7': ['construction'],
  // ⚓️ anchor
  '2693': ['anchor'],
  // ⛵️ sailboat
  '26F5': ['sailboat'],
  // 🚤 speedboat
  '1F6A4': ['speedboat'],
  // 🚢 ship
  '1F6A2': ['ship'],
  // ✈︎ airplane
  '2708': ['airplane'],
  // 💺 seat
  '1F4BA': ['seat'],
  // 🚀 rocket
  '1F680': ['rocket'],
  // ⌛️ hourglass done
  '231B': ['hourglass'],
  // ⏳️ hourglass not done
  '23F3': ['hourglass_flowing_sand'],
  // ⌚️ watch
  '231A': ['watch'],
  // ⏰️ alarm clock
  '23F0': ['alarm_clock'],
  // 🕛️ twelve o’clock
  '1F55B': ['clock12'],
  // 🕐️ one o’clock
  '1F550': ['clock1'],
  // 🕑️ two o’clock
  '1F551': ['clock2'],
  // 🕒️ three o’clock
  '1F552': ['clock3'],
  // 🕓️ four o’clock
  '1F553': ['clock4'],
  // 🕔️ five o’clock
  '1F554': ['clock5'],
  // 🕕️ six o’clock
  '1F555': ['clock6'],
  // 🕖️ seven o’clock
  '1F556': ['clock7'],
  // 🕗️ eight o’clock
  '1F557': ['clock8'],
  // 🕘️ nine o’clock
  '1F558': ['clock9'],
  // 🕙️ ten o’clock
  '1F559': ['clock10'],
  // 🕚️ eleven o’clock
  '1F55A': ['clock11'],
  // 🌑 new moon
  '1F311': ['new_moon'],
  // 🌓 first quarter moon
  '1F313': ['first_quarter_moon'],
  // 🌔 waxing gibbous moon
  '1F314': ['waxing_gibbous_moon'],
  // 🌕️ full moon
  '1F315': ['full_moon'],
  // 🌙 crescent moon
  '1F319': ['crescent_moon'],
  // 🌛 first quarter moon face
  '1F31B': ['first_quarter_moon_with_face'],
  // ☀︎ sun
  '2600': ['sun'],
  // ⭐️ star
  '2B50': ['star'],
  // 🌟 glowing star
  '1F31F': ['glowing_star', 'star2'],
  // 🌠 shooting star
  '1F320': ['shooting_star', 'stars'],
  // 🌌 milky way
  '1F30C': ['milky_way'],
  // ☁︎ cloud
  '2601': ['cloud'],
  // ⛅️ sun behind cloud
  '26C5': ['partly_sunny', 'sun_behind_cloud'],
  // 🌀 cyclone
  '1F300': ['cyclone'],
  // 🌈 rainbow
  '1F308': ['rainbow'],
  // 🌂 closed umbrella
  '1F302': ['closed_umbrella'],
  // ☔️ umbrella with rain drops
  '2614': ['umbrella_with_rain'],
  // ⚡️ high voltage
  '26A1': ['high_voltage', 'zap'],
  // ❄︎ snowflake
  '2744': ['snowflake'],
  // ⛄️ snowman without snow
  '26C4': ['snowman'],
  // 🔥 fire
  '1F525': ['fire'],
  // 💧 droplet
  '1F4A7': ['droplet'],
  // 🌊 water wave
  '1F30A': ['ocean', 'water_wave'],
  // 🎃 jack-o-lantern
  '1F383': ['jack_o_lantern'],
  // 🎄 Christmas tree
  '1F384': ['christmas_tree'],
  // 🎆 fireworks
  '1F386': ['fireworks'],
  // 🎇 sparkler
  '1F387': ['sparkler'],
  // ✨️ sparkles
  '2728': ['sparkles'],
  // 🎈 balloon
  '1F388': ['balloon'],
  // 🎉 party popper
  '1F389': ['party', 'party_popper', 'tada'],
  // 🎊 confetti ball
  '1F38A': ['confetti_ball'],
  // 🎋 tanabata tree
  '1F38B': ['tanabata_tree'],
  // 🎍 pine decoration
  '1F38D': ['bamboo'],
  // 🎎 Japanese dolls
  '1F38E': ['dolls'],
  // 🎏 carp streamer
  '1F38F': ['carp_streamer', 'flags'],
  // 🎐 wind chime
  '1F390': ['wind_chime'],
  // 🎑 moon viewing ceremony
  '1F391': ['moon_ceremony', 'rice_scene'],
  // 🎀 ribbon
  '1F380': ['ribbon'],
  // 🎁 wrapped gift
  '1F381': ['gift'],
  // 🎫 ticket
  '1F3AB': ['ticket'],
  // 🏆️ trophy
  '1F3C6': ['trophy'],
  // ⚽️ soccer ball
  '26BD': ['soccer'],
  // ⚾️ baseball
  '26BE': ['baseball'],
  // 🏀 basketball
  '1F3C0': ['basketball'],
  // 🏈 american football
  '1F3C8': ['football'],
  // 🎾 tennis
  '1F3BE': ['tennis'],
  // 🎳 bowling
  '1F3B3': ['bowling'],
  // ⛳️ flag in hole
  '26F3': ['golf'],
  // 🎣 fishing pole
  '1F3A3': ['fishing_pole', 'fishing_pole_and_fish'],
  // 🎽 running shirt
  '1F3BD': ['running_shirt', 'running_shirt_with_sash'],
  // 🎿 skis
  '1F3BF': ['ski'],
  // 🎯 bullseye
  '1F3AF': ['bullseye', 'dart', 'direct_hit'],
  // 🔫 water pistol
  '1F52B': ['gun', 'pistol'],
  // 🎱 pool 8 ball
  '1F3B1': ['8ball', 'billiards'],
  // 🔮 crystal ball
  '1F52E': ['crystal_ball'],
  // 🎮️ video game
  '1F3AE': ['controller', 'video_game'],
  // 🎰 slot machine
  '1F3B0': ['slot_machine'],
  // 🎲 game die
  '1F3B2': ['game_die'],
  // ♠︎ spade suit
  '2660': ['spades'],
  // ♥︎ heart suit
  '2665': ['hearts'],
  // ♦︎ diamond suit
  '2666': ['diamonds'],
  // ♣︎ club suit
  '2663': ['clubs'],
  // 🃏 joker
  '1F0CF': ['black_joker'],
  // 🀄️ mahjong red dragon
  '1F004': ['mahjong'],
  // 🎴 flower playing cards
  '1F3B4': ['flower_playing_cards'],
  // 🎭️ performing arts
  '1F3AD': ['performing_arts'],
  // 🎨 artist palette
  '1F3A8': ['art', 'palette'],
  // 👓️ glasses
  '1F453': ['eyeglasses', 'glasses'],
  // 👔 necktie
  '1F454': ['necktie'],
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
  '1F45A': ['womans_clothes'],
  // 👛 purse
  '1F45B': ['purse'],
  // 👜 handbag
  '1F45C': ['handbag'],
  // 👝 clutch bag
  '1F45D': ['clutch_bag', 'pouch'],
  // 🎒 backpack
  '1F392': ['backpack', 'school_satchel'],
  // 👞 man’s shoe
  '1F45E': ['mans_shoe'],
  // 👟 running shoe
  '1F45F': ['athletic_shoe', 'sneaker'],
  // 👠 high-heeled shoe
  '1F460': ['high_heel'],
  // 👡 woman’s sandal
  '1F461': ['sandal'],
  // 👢 woman’s boot
  '1F462': ['boot'],
  // 👑 crown
  '1F451': ['crown'],
  // 👒 woman’s hat
  '1F452': ['womans_hat'],
  // 🎩 top hat
  '1F3A9': ['top_hat', 'tophat'],
  // 🎓️ graduation cap
  '1F393': ['graduation_cap', 'mortar_board'],
  // 💄 lipstick
  '1F484': ['lipstick'],
  // 💍 ring
  '1F48D': ['ring'],
  // 💎 gem stone
  '1F48E': ['gem'],
  // 🔊 speaker high volume
  '1F50A': ['high_volume', 'loud_sound'],
  // 📢 loudspeaker
  '1F4E2': ['loudspeaker'],
  // 📣 megaphone
  '1F4E3': ['mega', 'megaphone'],
  // 🔔 bell
  '1F514': ['bell'],
  // 🎼 musical score
  '1F3BC': ['musical_score'],
  // 🎵 musical note
  '1F3B5': ['musical_note'],
  // 🎶 musical notes
  '1F3B6': ['musical_notes', 'notes'],
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
  '1F4F1': ['android', 'iphone', 'mobile_phone'],
  // 📲 mobile phone with arrow
  '1F4F2': ['calling', 'mobile_phone_arrow'],
  // ☎︎ telephone
  '260E': ['telephone'],
  // 📞 telephone receiver
  '1F4DE': ['telephone_receiver'],
  // 📟️ pager
  '1F4DF': ['pager'],
  // 📠 fax machine
  '1F4E0': ['fax', 'fax_machine'],
  // 🔋 battery
  '1F50B': ['battery'],
  // 🔌 electric plug
  '1F50C': ['electric_plug'],
  // 💻️ laptop
  '1F4BB': ['laptop'],
  // 💽 computer disk
  '1F4BD': ['computer_disk', 'minidisc'],
  // 💾 floppy disk
  '1F4BE': ['floppy_disk'],
  // 💿️ optical disk
  '1F4BF': ['cd', 'optical_disk'],
  // 📀 dvd
  '1F4C0': ['dvd'],
  // 🎥 movie camera
  '1F3A5': ['movie_camera'],
  // 🎬️ clapper board
  '1F3AC': ['clapper'],
  // 📺️ television
  '1F4FA': ['tv'],
  // 📷️ camera
  '1F4F7': ['camera'],
  // 📹️ video camera
  '1F4F9': ['video_camera'],
  // 📼 videocassette
  '1F4FC': ['vhs', 'videocassette'],
  // 🔍️ magnifying glass tilted left
  '1F50D': ['mag'],
  // 🔎 magnifying glass tilted right
  '1F50E': ['mag_right'],
  // 💡 light bulb
  '1F4A1': ['bulb', 'light_bulb'],
  // 🔦 flashlight
  '1F526': ['flashlight'],
  // 🏮 red paper lantern
  '1F3EE': ['izakaya_lantern', 'red_paper_lantern'],
  // 📔 notebook with decorative cover
  '1F4D4': ['notebook_with_decorative_cover'],
  // 📕 closed book
  '1F4D5': ['closed_book'],
  // 📖 open book
  '1F4D6': ['book', 'open_book'],
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
  '1F4C3': ['page_with_curl'],
  // 📜 scroll
  '1F4DC': ['scroll'],
  // 📄 page facing up
  '1F4C4': ['page_facing_up'],
  // 📰 newspaper
  '1F4F0': ['newspaper'],
  // 📑 bookmark tabs
  '1F4D1': ['bookmark_tabs'],
  // 🔖 bookmark
  '1F516': ['bookmark'],
  // 💰️ money bag
  '1F4B0': ['moneybag'],
  // 💴 yen banknote
  '1F4B4': ['yen'],
  // 💵 dollar banknote
  '1F4B5': ['dollar'],
  // 💸 money with wings
  '1F4B8': ['money_with_wings'],
  // 💳️ credit card
  '1F4B3': ['credit_card'],
  // 💹 chart increasing with yen
  '1F4B9': ['chart'],
  // ✉︎ envelope
  '2709': ['envelope'],
  // 📧 e-mail
  '1F4E7': ['e-mail', 'email'],
  // 📨 incoming envelope
  '1F4E8': ['incoming_envelope'],
  // 📩 envelope with arrow
  '1F4E9': ['envelope_with_arrow'],
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
  // 📮 postbox
  '1F4EE': ['postbox'],
  // ✏︎ pencil
  '270F': ['pencil'],
  // ✒︎ black nib
  '2712': ['black_nib'],
  // 📝 memo
  '1F4DD': ['memo'],
  // 💼 briefcase
  '1F4BC': ['briefcase'],
  // 📁 file folder
  '1F4C1': ['file_folder'],
  // 📂 open file folder
  '1F4C2': ['open_file_folder'],
  // 📅 calendar
  '1F4C5': ['date'],
  // 📆 tear-off calendar
  '1F4C6': ['calendar'],
  // 📇 card index
  '1F4C7': ['card_index'],
  // 📈 chart increasing
  '1F4C8': ['chart_increasing', 'chart_with_upwards_trend'],
  // 📉 chart decreasing
  '1F4C9': ['chart_decreasing', 'chart_with_downwards_trend'],
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
  // 📏 straight ruler
  '1F4CF': ['straight_ruler'],
  // 📐 triangular ruler
  '1F4D0': ['triangular_ruler'],
  // ✂︎ scissors
  '2702': ['scissors'],
  // 🔒️ locked
  '1F512': ['lock', 'locked'],
  // 🔓️ unlocked
  '1F513': ['unlock', 'unlocked'],
  // 🔏 locked with pen
  '1F50F': ['lock_with_ink_pen', 'locked_with_pen'],
  // 🔐 locked with key
  '1F510': ['closed_lock_with_key', 'locked_with_key'],
  // 🔑 key
  '1F511': ['key'],
  // 🔨 hammer
  '1F528': ['hammer'],
  // 💣️ bomb
  '1F4A3': ['bomb'],
  // 🔧 wrench
  '1F527': ['wrench'],
  // 🔩 nut and bolt
  '1F529': ['nut_and_bolt'],
  // 🔗 link
  '1F517': ['link'],
  // 📡 satellite antenna
  '1F4E1': ['satellite_antenna'],
  // 💉 syringe
  '1F489': ['syringe'],
  // 💊 pill
  '1F48A': ['pill'],
  // 🚪 door
  '1F6AA': ['door'],
  // 🚽 toilet
  '1F6BD': ['toilet'],
  // 🚬 cigarette
  '1F6AC': ['cigarette', 'smoking'],
  // 🗿 moai
  '1F5FF': ['moai', 'moyai'],
  // 🏧 ATM sign
  '1F3E7': ['atm'],
  // ♿️ wheelchair symbol
  '267F': ['handicapped', 'wheelchair'],
  // 🚹️ men’s room
  '1F6B9': ['mens'],
  // 🚺️ women’s room
  '1F6BA': ['womens'],
  // 🚻 restroom
  '1F6BB': ['bathroom', 'restroom'],
  // 🚼️ baby symbol
  '1F6BC': ['baby_symbol'],
  // 🚾 water closet
  '1F6BE': ['water_closet', 'wc'],
  // ⚠︎ warning
  '26A0': ['warning'],
  // ⛔️ no entry
  '26D4': ['no_entry'],
  // 🚫 prohibited
  '1F6AB': ['no_entry_sign'],
  // 🚭️ no smoking
  '1F6AD': ['no_smoking'],
  // 🔞 no one under eighteen
  '1F51E': ['no_one_under_18', 'underage'],
  // ⬆︎ up arrow
  '2B06': ['arrow_up'],
  // ↗︎ up-right arrow
  '2197': ['arrow_upper_right'],
  // ➡︎ right arrow
  '27A1': ['arrow_right'],
  // ↘︎ down-right arrow
  '2198': ['arrow_lower_right'],
  // ⬇︎ down arrow
  '2B07': ['arrow_down'],
  // ↙︎ down-left arrow
  '2199': ['arrow_lower_left'],
  // ⬅︎ left arrow
  '2B05': ['arrow_left'],
  // ↖︎ up-left arrow
  '2196': ['arrow_upper_left'],
  // ↕︎ up-down arrow
  '2195': ['arrow_up_down'],
  // ↔︎ left-right arrow
  '2194': ['left_right_arrow'],
  // ↩︎ right arrow curving left
  '21A9': ['arrow_left_hook', 'leftwards_arrow_with_hook'],
  // ↪︎ left arrow curving right
  '21AA': ['arrow_right_hook', 'rightwards_arrow_with_hook'],
  // ⤴︎ right arrow curving up
  '2934': ['arrow_heading_up'],
  // ⤵︎ right arrow curving down
  '2935': ['arrow_heading_down'],
  // 🔃 clockwise vertical arrows
  '1F503': ['arrows_clockwise', 'clockwise'],
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
  // ⛎️ Ophiuchus
  '26CE': ['ophiuchus'],
  // ▶︎ play button
  '25B6': ['arrow_forward', 'play'],
  // ⏩️ fast-forward button
  '23E9': ['fast_forward'],
  // ◀︎ reverse button
  '25C0': ['arrow_backward', 'reverse'],
  // ⏪️ fast reverse button
  '23EA': ['fast_reverse', 'rewind'],
  // 🔼 upwards button
  '1F53C': ['arrow_up_small', 'up'],
  // ⏫️ fast up button
  '23EB': ['arrow_double_up', 'fast_up'],
  // 🔽 downwards button
  '1F53D': ['arrow_down_small', 'down'],
  // ⏬️ fast down button
  '23EC': ['arrow_double_down', 'fast_down'],
  // 🎦 cinema
  '1F3A6': ['cinema'],
  // 📶 antenna bars
  '1F4F6': ['antenna_bars', 'signal_strength'],
  // 📳 vibration mode
  '1F4F3': ['vibration_mode'],
  // 📴 mobile phone off
  '1F4F4': ['mobile_phone_off'],
  // ✖︎ multiply
  '2716': ['multiplication', 'multiply'],
  // ➕️ plus
  '2795': ['plus'],
  // ➖️ minus
  '2796': ['minus'],
  // ➗️ divide
  '2797': ['divide', 'division'],
  // ‼︎ double exclamation mark
  '203C': ['bangbang', 'double_exclamation'],
  // ⁉︎ exclamation question mark
  '2049': ['exclamation_question', 'interrobang'],
  // ❓️ red question mark
  '2753': ['question'],
  // ❔️ white question mark
  '2754': ['white_question'],
  // ❕️ white exclamation mark
  '2755': ['white_exclamation'],
  // ❗️ red exclamation mark
  '2757': ['exclamation'],
  // 〰︎ wavy dash
  '3030': ['wavy_dash'],
  // 💱 currency exchange
  '1F4B1': ['currency_exchange'],
  // 💲 heavy dollar sign
  '1F4B2': ['heavy_dollar_sign'],
  // ♻︎ recycling symbol
  '267B': ['recycle', 'recycling_symbol'],
  // 🔱 trident emblem
  '1F531': ['trident'],
  // 📛 name badge
  '1F4DB': ['name_badge'],
  // 🔰 Japanese symbol for beginner
  '1F530': ['beginner'],
  // ⭕️ hollow red circle
  '2B55': ['hollow_red_circle', 'red_o'],
  // ✅️ check mark button
  '2705': ['check_mark_button', 'white_check_mark'],
  // ☑︎ check box with check
  '2611': ['ballot_box_with_check'],
  // ✔︎ check mark
  '2714': ['check_mark', 'heavy_check_mark'],
  // ❌️ cross mark
  '274C': ['cross_mark', 'x'],
  // ❎️ cross mark button
  '274E': ['cross_mark_button', 'negative_squared_cross_mark'],
  // ➰️ curly loop
  '27B0': ['curly_loop'],
  // 〽︎ part alternation mark
  '303D': ['part_alternation_mark'],
  // ✳︎ eight-spoked asterisk
  '2733': ['eight_spoked_asterisk'],
  // ✴︎ eight-pointed star
  '2734': ['eight_pointed_black_star'],
  // ❇︎ sparkle
  '2747': ['sparkle'],
  // ©︎ copyright
  '00A9': ['copyright'],
  // ®︎ registered
  '00AE': ['registered'],
  // ™︎ trade mark
  '2122': ['tm', 'trade_mark'],
  // #️⃣ keycap: #
  '0023-FE0F-20E3': ['hash', 'number_sign'],
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
  // 🔟 keycap: 10
  '1F51F': ['ten'],
  // 🔠 input latin uppercase
  '1F520': ['capital_abcd'],
  // 🔡 input latin lowercase
  '1F521': ['abcd'],
  // 🔢 input numbers
  '1F522': ['1234'],
  // 🔣 input symbols
  '1F523': ['symbols'],
  // 🔤 input latin letters
  '1F524': ['abc'],
  // 🅰︎ A button (blood type)
  '1F170': ['a', 'a_blood'],
  // 🆎 AB button (blood type)
  '1F18E': ['ab', 'ab_blood'],
  // 🅱︎ B button (blood type)
  '1F171': ['b', 'b_blood'],
  // 🆑 CL button
  '1F191': ['cl'],
  // 🆒 COOL button
  '1F192': ['cool'],
  // 🆓 FREE button
  '1F193': ['free'],
  // ℹ︎ information
  '2139': ['info', 'information_source'],
  // 🆔 ID button
  '1F194': ['id'],
  // Ⓜ︎ circled M
  '24C2': ['m'],
  // 🆕 NEW button
  '1F195': ['new'],
  // 🆖 NG button
  '1F196': ['ng'],
  // 🅾︎ O button (blood type)
  '1F17E': ['o', 'o_blood'],
  // 🆗 OK button
  '1F197': ['ok'],
  // 🅿︎ P button
  '1F17F': ['parking'],
  // 🆘 SOS button
  '1F198': ['sos'],
  // 🆙 UP! button
  '1F199': ['up2'],
  // 🆚 VS button
  '1F19A': ['vs'],
  // 🈁 Japanese “here” button
  '1F201': ['ja_here', 'koko'],
  // 🈂︎ Japanese “service charge” button
  '1F202': ['ja_service_charge'],
  // 🈷︎ Japanese “monthly amount” button
  '1F237': ['ja_monthly_amount'],
  // 🈶 Japanese “not free of charge” button
  '1F236': ['ja_not_free_of_carge'],
  // 🈯️ Japanese “reserved” button
  '1F22F': ['ja_reserved'],
  // 🉐 Japanese “bargain” button
  '1F250': ['ideograph_advantage', 'ja_bargain'],
  // 🈹 Japanese “discount” button
  '1F239': ['ja_discount'],
  // 🈚️ Japanese “free of charge” button
  '1F21A': ['ja_free_of_charge'],
  // 🈲 Japanese “prohibited” button
  '1F232': ['ja_prohibited'],
  // 🉑 Japanese “acceptable” button
  '1F251': ['accept', 'ja_acceptable'],
  // 🈸 Japanese “application” button
  '1F238': ['ja_application'],
  // 🈴 Japanese “passing grade” button
  '1F234': ['ja_passing_grade'],
  // 🈳 Japanese “vacancy” button
  '1F233': ['ja_vacancy'],
  // ㊗︎ Japanese “congratulations” button
  '3297': ['congratulations', 'ja_congratulations'],
  // ㊙︎ Japanese “secret” button
  '3299': ['ja_secret', 'secret'],
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
  '2B1B': ['black_large_square'],
  // ⬜️ white large square
  '2B1C': ['white_large_square'],
  // ◼︎ black medium square
  '25FC': ['black_medium_square'],
  // ◻︎ white medium square
  '25FB': ['white_medium_square'],
  // ◾️ black medium-small square
  '25FE': ['black_medium_small_square'],
  // ◽️ white medium-small square
  '25FD': ['white_medium_small_square'],
  // ▪︎ black small square
  '25AA': ['black_small_square'],
  // ▫︎ white small square
  '25AB': ['white_small_square'],
  // 🔶 large orange diamond
  '1F536': ['large_orange_diamond'],
  // 🔷 large blue diamond
  '1F537': ['large_blue_diamond'],
  // 🔸 small orange diamond
  '1F538': ['small_orange_diamond'],
  // 🔹 small blue diamond
  '1F539': ['small_blue_diamond'],
  // 🔺 red triangle pointed up
  '1F53A': ['small_red_triangle'],
  // 🔻 red triangle pointed down
  '1F53B': ['small_red_triangle_down'],
  // 💠 diamond with a dot
  '1F4A0': ['diamond_shape_with_a_dot_inside', 'diamond_with_a_dot'],
  // 🔘 radio button
  '1F518': ['radio_button'],
  // 🔳 white square button
  '1F533': ['white_square_button'],
  // 🔲 black square button
  '1F532': ['black_square_button'],
  // 🏁 chequered flag
  '1F3C1': ['checkered_flag'],
  // 🚩 triangular flag
  '1F6A9': ['triangular_flag', 'triangular_flag_on_post'],
  // 🎌 crossed flags
  '1F38C': ['crossed_flags'],
  // 🇨🇳 flag: China
  '1F1E8-1F1F3': ['china', 'flag_cn'],
  // 🇩🇪 flag: Germany
  '1F1E9-1F1EA': ['flag_de', 'germany'],
  // 🇪🇸 flag: Spain
  '1F1EA-1F1F8': ['flag_es', 'spain'],
  // 🇫🇷 flag: France
  '1F1EB-1F1F7': ['flag_fr', 'france'],
  // 🇬🇧 flag: United Kingdom
  '1F1EC-1F1E7': ['flag_gb', 'uk', 'united_kingdom'],
  // 🇮🇹 flag: Italy
  '1F1EE-1F1F9': ['flag_it', 'italy'],
  // 🇯🇵 flag: Japan
  '1F1EF-1F1F5': ['flag_jp', 'japan'],
  // 🇰🇷 flag: South Korea
  '1F1F0-1F1F7': ['flag_kr', 'south_korea'],
  // 🇷🇺 flag: Russia
  '1F1F7-1F1FA': ['flag_ru', 'russia'],
  // 🇺🇸 flag: United States
  '1F1FA-1F1F8': ['flag_us', 'united_states', 'usa'],

  // VERSION 0.7
  // 😐️ neutral face
  '1F610': ['neutral', 'neutral_face'],
  // ☹︎ frowning face
  '2639': ['white_frowning_face'],
  // 🕳︎ hole
  '1F573': ['hole'],
  // 🗯︎ right anger bubble
  '1F5EF': ['right_anger_bubble'],
  // 🖐︎ hand with fingers splayed
  '1F590': ['raised_hand_with_fingers_splayed'],
  // ✍︎ writing hand
  '270D': ['writing_hand'],
  // 👁︎ eye
  '1F441': ['eye'],
  // 🕵︎ detective
  '1F575': ['detective'],
  // 🕴︎ person in suit levitating
  '1F574': ['levitate', 'levitating', 'person_in_suit_levitating'],
  // ⛷︎ skier
  '26F7': ['person_skiing', 'skier', 'skiing'],
  // 🏌︎ person golfing
  '1F3CC': ['golfer', 'golfing', 'person_golfing'],
  // ⛹︎ person bouncing ball
  '26F9': ['person_bouncing_ball'],
  // 🏋︎ person lifting weights
  '1F3CB': ['person_lifting_weights', 'weight_lifter', 'weight_lifting'],
  // 🗣︎ speaking head
  '1F5E3': ['speaking_head'],
  // 🐕️ dog
  '1F415': ['dog'],
  // 🐈️ cat
  '1F408': ['cat'],
  // 🐿︎ chipmunk
  '1F43F': ['chipmunk'],
  // 🕊︎ dove
  '1F54A': ['dove'],
  // 🕷︎ spider
  '1F577': ['spider'],
  // 🕸︎ spider web
  '1F578': ['spider_web'],
  // 🏵︎ rosette
  '1F3F5': ['rosette'],
  // 🌶︎ hot pepper
  '1F336': ['hot_pepper'],
  // 🍽︎ fork and knife with plate
  '1F37D': ['fork_knife_plate'],
  // 🌍️ globe showing Europe-Africa
  '1F30D': ['earth_africa', 'earth_europe'],
  // 🌎️ globe showing Americas
  '1F30E': ['earth_americas'],
  // 🗺︎ world map
  '1F5FA': ['world_map'],
  // 🏔︎ snow-capped mountain
  '1F3D4': ['mountain_snow'],
  // ⛰︎ mountain
  '26F0': ['mountain'],
  // 🏕︎ camping
  '1F3D5': ['camping'],
  // 🏖︎ beach with umbrella
  '1F3D6': ['beach', 'beach_with_umbrella'],
  // 🏜︎ desert
  '1F3DC': ['desert'],
  // 🏝︎ desert island
  '1F3DD': ['desert_island', 'island'],
  // 🏞︎ national park
  '1F3DE': ['national_park'],
  // 🏟︎ stadium
  '1F3DF': ['stadium'],
  // 🏛︎ classical building
  '1F3DB': ['classical_building'],
  // 🏗︎ building construction
  '1F3D7': ['building_construction', 'construction_site'],
  // 🏘︎ houses
  '1F3D8': ['homes', 'houses'],
  // 🏚︎ derelict house
  '1F3DA': ['derelict_house', 'house_abandoned'],
  // ⛩︎ shinto shrine
  '26E9': ['shinto_shrine'],
  // 🏙︎ cityscape
  '1F3D9': ['cityscape'],
  // 🚍️ oncoming bus
  '1F68D': ['oncoming_bus'],
  // 🚔️ oncoming police car
  '1F694': ['oncoming_police_car'],
  // 🚘️ oncoming automobile
  '1F698': ['oncoming_automobile'],
  // 🏎︎ racing car
  '1F3CE': ['racing_car'],
  // 🏍︎ motorcycle
  '1F3CD': ['motorcycle'],
  // 🛣︎ motorway
  '1F6E3': ['motorway'],
  // 🛤︎ railway track
  '1F6E4': ['railway_track'],
  // 🛢︎ oil drum
  '1F6E2': ['oil_drum'],
  // 🛳︎ passenger ship
  '1F6F3': ['cruise_ship', 'passenger_ship'],
  // ⛴︎ ferry
  '26F4': ['ferry'],
  // 🛥︎ motor boat
  '1F6E5': ['motorboat'],
  // 🛩︎ small airplane
  '1F6E9': ['small_airplane'],
  // 🛰︎ satellite
  '1F6F0': ['satellite'],
  // 🛎︎ bellhop bell
  '1F6CE': ['bellhop'],
  // 🕰︎ mantelpiece clock
  '1F570': ['clock'],
  // 🕧️ twelve-thirty
  '1F567': ['clock1230'],
  // 🕜️ one-thirty
  '1F55C': ['clock130'],
  // 🕝️ two-thirty
  '1F55D': ['clock230'],
  // 🕞️ three-thirty
  '1F55E': ['clock330'],
  // 🕟️ four-thirty
  '1F55F': ['clock430'],
  // 🕠️ five-thirty
  '1F560': ['clock530'],
  // 🕡️ six-thirty
  '1F561': ['clock630'],
  // 🕢️ seven-thirty
  '1F562': ['clock730'],
  // 🕣️ eight-thirty
  '1F563': ['clock830'],
  // 🕤️ nine-thirty
  '1F564': ['clock930'],
  // 🕥️ ten-thirty
  '1F565': ['clock1030'],
  // 🕦️ eleven-thirty
  '1F566': ['clock1130'],
  // 🌜️ last quarter moon face
  '1F31C': ['last_quarter_moon_with_face'],
  // 🌡︎ thermometer
  '1F321': ['thermometer'],
  // ⛈︎ cloud with lightning and rain
  '26C8': ['stormy', 'thunder_cloud_and_rain'],
  // 🌤︎ sun behind small cloud
  '1F324': ['sun_behind_small_cloud', 'sunny'],
  // 🌥︎ sun behind large cloud
  '1F325': ['cloudy', 'sun_behind_large_cloud'],
  // 🌦︎ sun behind rain cloud
  '1F326': ['sun_and_rain', 'sun_behind_rain_cloud'],
  // 🌧︎ cloud with rain
  '1F327': ['cloud_with_rain', 'rainy'],
  // 🌨︎ cloud with snow
  '1F328': ['cloud_with_snow', 'snowy'],
  // 🌩︎ cloud with lightning
  '1F329': ['cloud_with_lightning', 'lightning'],
  // 🌪︎ tornado
  '1F32A': ['tornado'],
  // 🌫︎ fog
  '1F32B': ['fog'],
  // 🌬︎ wind face
  '1F32C': ['wind_blowing_face'],
  // ☂︎ umbrella
  '2602': ['umbrella'],
  // ⛱︎ umbrella on ground
  '26F1': ['beach_umbrella', 'umbrella_on_ground'],
  // ☃︎ snowman
  '2603': ['snowman2'],
  // 🎗︎ reminder ribbon
  '1F397': ['reminder_ribbon'],
  // 🎟︎ admission tickets
  '1F39F': ['admission_tickets', 'tickets'],
  // 🎖︎ military medal
  '1F396': ['military_medal'],
  // ⛸︎ ice skate
  '26F8': ['ice_skate'],
  // 🕹︎ joystick
  '1F579': ['joystick'],
  // 🖼︎ framed picture
  '1F5BC': ['frame_with_picture', 'framed_picture'],
  // 🕶︎ sunglasses
  '1F576': ['sunglasses'],
  // 🛍︎ shopping bags
  '1F6CD': ['shopping_bags'],
  // ⛑︎ rescue worker’s helmet
  '26D1': ['helmet_with_cross', 'rescue_worker_helmet'],
  // 🔈️ speaker low volume
  '1F508': ['low_volume', 'quiet_sound', 'speaker'],
  // 🎙︎ studio microphone
  '1F399': ['studio_microphone'],
  // 🎚︎ level slider
  '1F39A': ['level_slider'],
  // 🎛︎ control knobs
  '1F39B': ['control_knobs'],
  // 🖥︎ desktop computer
  '1F5A5': ['computer', 'desktop_computer'],
  // 🖨︎ printer
  '1F5A8': ['printer'],
  // 🖱︎ computer mouse
  '1F5B1': ['computer_mouse'],
  // 🖲︎ trackball
  '1F5B2': ['trackball'],
  // 🎞︎ film frames
  '1F39E': ['film_frames'],
  // 📽︎ film projector
  '1F4FD': ['film_projector'],
  // 🕯︎ candle
  '1F56F': ['candle'],
  // 🗞︎ rolled-up newspaper
  '1F5DE': ['rolled_up_newspaper'],
  // 🏷︎ label
  '1F3F7': ['label'],
  // 📬️ open mailbox with raised flag
  '1F4EC': ['mailbox_with_mail'],
  // 📭️ open mailbox with lowered flag
  '1F4ED': ['mailbox_with_no_mail'],
  // 🗳︎ ballot box with ballot
  '1F5F3': ['ballot_box'],
  // 🖋︎ fountain pen
  '1F58B': ['fountain_pen'],
  // 🖊︎ pen
  '1F58A': ['pen'],
  // 🖌︎ paintbrush
  '1F58C': ['paintbrush'],
  // 🖍︎ crayon
  '1F58D': ['crayon'],
  // 🗂︎ card index dividers
  '1F5C2': ['card_index_dividers'],
  // 🗒︎ spiral notepad
  '1F5D2': ['notepad_spiral'],
  // 🗓︎ spiral calendar
  '1F5D3': ['calendar_spiral'],
  // 🖇︎ linked paperclips
  '1F587': ['paperclips'],
  // 🗃︎ card file box
  '1F5C3': ['card_file_box'],
  // 🗄︎ file cabinet
  '1F5C4': ['file_cabinet'],
  // 🗑︎ wastebasket
  '1F5D1': ['trashcan', 'wastebasket'],
  // 🗝︎ old key
  '1F5DD': ['old_key'],
  // ⛏︎ pick
  '26CF': ['pick'],
  // 🛠︎ hammer and wrench
  '1F6E0': ['hammer_and_wrench'],
  // 🗡︎ dagger
  '1F5E1': ['dagger'],
  // 🛡︎ shield
  '1F6E1': ['shield'],
  // 🗜︎ clamp
  '1F5DC': ['clamp', 'compression'],
  // ⛓︎ chains
  '26D3': ['chains'],
  // 🛏︎ bed
  '1F6CF': ['bed'],
  // 🛋︎ couch and lamp
  '1F6CB': ['couch_and_lamp'],
  // 🕉︎ om
  '1F549': ['om'],
  // ✡︎ star of David
  '2721': ['star_of_david'],
  // ☸︎ wheel of dharma
  '2638': ['wheel_of_dharma'],
  // ☯︎ yin yang
  '262F': ['yin_yang'],
  // ✝︎ latin cross
  '271D': ['latin_cross'],
  // ☪︎ star and crescent
  '262A': ['star_and_crescent'],
  // ⏭︎ next track button
  '23ED': ['next_track'],
  // ⏮︎ last track button
  '23EE': ['previous_track'],
  // ⏸︎ pause button
  '23F8': ['pause'],
  // ⏹︎ stop button
  '23F9': ['stop'],
  // ⏺︎ record button
  '23FA': ['record'],
  // 🏳︎ white flag
  '1F3F3': ['white_flag'],

  // VERSION 1
  // 😀 grinning face
  '1F600': ['grinning', 'grinning_face'],
  // 🙂 slightly smiling face
  '1F642': ['slightly_smiling_face'],
  // 🙃 upside-down face
  '1F643': ['upside_down_face'],
  // 😇 smiling face with halo
  '1F607': ['halo', 'innocent'],
  // 😗 kissing face
  '1F617': ['kissing', 'kissing_face'],
  // 😙 kissing face with smiling eyes
  '1F619': ['kissing_face_with_smiling_eyes', 'kissing_smiling_eyes'],
  // 😛 face with tongue
  '1F61B': ['face_with_tongue', 'stuck_out_tongue'],
  // 🤑 money-mouth face
  '1F911': ['money_mouth_face'],
  // 🤗 smiling face with open hands
  '1F917': ['hug', 'hugging', 'hugging_face'],
  // 🤔 thinking face
  '1F914': ['thinking', 'thinking_face', 'wtf'],
  // 🤐 zipper-mouth face
  '1F910': ['zipper_mouth', 'zipper_mouth_face'],
  // 😑 expressionless face
  '1F611': ['expressionless', 'expressionless_face'],
  // 😶 face without mouth
  '1F636': ['no_mouth'],
  // 🙄 face with rolling eyes
  '1F644': ['rolling_eyes'],
  // 😬 grimacing face
  '1F62C': ['grimacing', 'grimacing_face'],
  // 😴 sleeping face
  '1F634': ['sleeping', 'sleeping_face'],
  // 🤒 face with thermometer
  '1F912': ['face_with_thermometer'],
  // 🤕 face with head-bandage
  '1F915': ['face_with_head_bandage'],
  // 😎 smiling face with sunglasses
  '1F60E': ['smiling_face_with_sunglasses', 'sunglasses_cool', 'too_cool'],
  // 🤓 nerd face
  '1F913': ['nerd', 'nerd_face'],
  // 😕 confused face
  '1F615': ['confused', 'confused_face'],
  // 😟 worried face
  '1F61F': ['worried', 'worried_face'],
  // 🙁 slightly frowning face
  '1F641': ['slightly_frowning_face'],
  // 😮 face with open mouth
  '1F62E': ['face_with_open_mouth', 'open_mouth'],
  // 😯 hushed face
  '1F62F': ['hushed', 'hushed_face'],
  // 😦 frowning face with open mouth
  '1F626': ['frowning', 'frowning_face'],
  // 😧 anguished face
  '1F627': ['anguished', 'anguished_face'],
  // 😈 smiling face with horns
  '1F608': ['smiling_imp'],
  // ☠︎ skull and crossbones
  '2620': ['skull_and_crossbones'],
  // 🤖 robot
  '1F916': ['robot', 'robot_face'],
  // ❣︎ heart exclamation
  '2763': ['heart_exclamation'],
  // 💭 thought balloon
  '1F4AD': ['thought_balloon'],
  // 🖖 vulcan salute
  '1F596': ['vulcan'],
  // 🤘 sign of the horns
  '1F918': ['metal', 'sign_of_the_horns'],
  // 🖕 middle finger
  '1F595': ['middle_finger'],
  // 🏇 horse racing
  '1F3C7': ['horse_racing'],
  // 🚣 person rowing boat
  '1F6A3': ['person_rowing_boat', 'rowboat'],
  // 🚴 person biking
  '1F6B4': ['bicyclist', 'biking', 'person_biking'],
  // 🚵 person mountain biking
  '1F6B5': ['mountain_bicyclist', 'mountain_biking', 'person_mountain_biking'],
  // 🛌 person in bed
  '1F6CC': ['person_in_bed', 'sleeping_accommodation'],
  // 👭 women holding hands
  '1F46D': ['two_women_holding_hands'],
  // 👬 men holding hands
  '1F46C': ['two_men_holding_hands'],
  // 👥 busts in silhouette
  '1F465': ['busts_in_silhouette'],
  // 🏻 light skin tone
  '1F3FB': ['tone1', 'tone_light'],
  // 🏼 medium-light skin tone
  '1F3FC': ['tone2', 'tone_medium_light'],
  // 🏽 medium skin tone
  '1F3FD': ['tone3', 'tone_medium'],
  // 🏾 medium-dark skin tone
  '1F3FE': ['tone4', 'tone_medium_dark'],
  // 🏿 dark skin tone
  '1F3FF': ['tone5', 'tone_dark'],
  // 🦁 lion
  '1F981': ['lion', 'lion_face'],
  // 🐅 tiger
  '1F405': ['tiger'],
  // 🐆 leopard
  '1F406': ['leopard'],
  // 🦄 unicorn
  '1F984': ['unicorn', 'unicorn_face'],
  // 🐂 ox
  '1F402': ['ox'],
  // 🐃 water buffalo
  '1F403': ['water_buffalo'],
  // 🐄 cow
  '1F404': ['cow'],
  // 🐖 pig
  '1F416': ['pig'],
  // 🐏 ram
  '1F40F': ['ram'],
  // 🐐 goat
  '1F410': ['goat'],
  // 🐪 camel
  '1F42A': ['dromedary_camel'],
  // 🐁 mouse
  '1F401': ['mouse'],
  // 🐀 rat
  '1F400': ['rat'],
  // 🐇 rabbit
  '1F407': ['rabbit'],
  // 🦃 turkey
  '1F983': ['turkey'],
  // 🐓 rooster
  '1F413': ['rooster'],
  // 🐊 crocodile
  '1F40A': ['crocodile'],
  // 🐉 dragon
  '1F409': ['dragon'],
  // 🐋 whale
  '1F40B': ['whale'],
  // 🦂 scorpion
  '1F982': ['scorpion'],
  // 🌲 evergreen tree
  '1F332': ['evergreen_tree'],
  // 🌳 deciduous tree
  '1F333': ['deciduous_tree'],
  // ☘︎ shamrock
  '2618': ['shamrock'],
  // 🍋 lemon
  '1F34B': ['lemon'],
  // 🍐 pear
  '1F350': ['pear'],
  // 🧀 cheese wedge
  '1F9C0': ['cheese'],
  // 🌭 hot dog
  '1F32D': ['hotdog'],
  // 🌮 taco
  '1F32E': ['taco'],
  // 🌯 burrito
  '1F32F': ['burrito'],
  // 🍿 popcorn
  '1F37F': ['popcorn'],
  // 🦀 crab
  '1F980': ['crab'],
  // 🍼 baby bottle
  '1F37C': ['baby_bottle'],
  // 🍾 bottle with popping cork
  '1F37E': ['champagne'],
  // 🏺 amphora
  '1F3FA': ['amphora'],
  // 🌐 globe with meridians
  '1F310': ['globe_with_meridians'],
  // 🏤 post office
  '1F3E4': ['european_post_office'],
  // 🕌 mosque
  '1F54C': ['mosque'],
  // 🕍 synagogue
  '1F54D': ['synagogue'],
  // 🕋 kaaba
  '1F54B': ['kaaba'],
  // 🚂 locomotive
  '1F682': ['steam_locomotive'],
  // 🚆 train
  '1F686': ['train'],
  // 🚈 light rail
  '1F688': ['light_rail'],
  // 🚊 tram
  '1F68A': ['tram'],
  // 🚝 monorail
  '1F69D': ['monorail'],
  // 🚞 mountain railway
  '1F69E': ['mountain_railway'],
  // 🚋 tram car
  '1F68B': ['tram_car'],
  // 🚎 trolleybus
  '1F68E': ['trolleybus'],
  // 🚐 minibus
  '1F690': ['minibus'],
  // 🚖 oncoming taxi
  '1F696': ['oncoming_taxi'],
  // 🚛 articulated lorry
  '1F69B': ['articulated_lorry'],
  // 🚜 tractor
  '1F69C': ['tractor'],
  // 🚦 vertical traffic light
  '1F6A6': ['vertical_traffic_light'],
  // 🛫 airplane departure
  '1F6EB': ['airplane_departure'],
  // 🛬 airplane arrival
  '1F6EC': ['airplane_arriving'],
  // 🚁 helicopter
  '1F681': ['helicopter'],
  // 🚟 suspension railway
  '1F69F': ['suspension_railway'],
  // 🚠 mountain cableway
  '1F6A0': ['mountain_cableway'],
  // 🚡 aerial tramway
  '1F6A1': ['aerial_tramway'],
  // ⏱︎ stopwatch
  '23F1': ['stopwatch'],
  // ⏲︎ timer clock
  '23F2': ['timer_clock'],
  // 🌒 waxing crescent moon
  '1F312': ['waxing_crescent_moon'],
  // 🌖 waning gibbous moon
  '1F316': ['waning_gibbous_moon'],
  // 🌗 last quarter moon
  '1F317': ['last_quarter_moon'],
  // 🌘 waning crescent moon
  '1F318': ['waning_crescent_moon'],
  // 🌚 new moon face
  '1F31A': ['new_moon_with_face'],
  // 🌝 full moon face
  '1F31D': ['full_moon_with_face'],
  // 🌞 sun with face
  '1F31E': ['sun_with_face'],
  // ☄︎ comet
  '2604': ['comet'],
  // 🏅 sports medal
  '1F3C5': ['sports_medal'],
  // 🏐 volleyball
  '1F3D0': ['volleyball'],
  // 🏉 rugby football
  '1F3C9': ['rugby_football'],
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
  // 📿 prayer beads
  '1F4FF': ['prayer_beads'],
  // 🔇 muted speaker
  '1F507': ['mute', 'no_sound'],
  // 🔉 speaker medium volume
  '1F509': ['medium_volumne', 'sound'],
  // 📯 postal horn
  '1F4EF': ['postal_horn'],
  // 🔕 bell with slash
  '1F515': ['no_bell'],
  // ⌨︎ keyboard
  '2328': ['keyboard'],
  // 📸 camera with flash
  '1F4F8': ['camera_with_flash'],
  // 💶 euro banknote
  '1F4B6': ['euro'],
  // 💷 pound banknote
  '1F4B7': ['pound'],
  // ⚒︎ hammer and pick
  '2692': ['hammer_and_pick'],
  // ⚔︎ crossed swords
  '2694': ['crossed_swords'],
  // 🏹 bow and arrow
  '1F3F9': ['bow_and_arrow'],
  // ⚙︎ gear
  '2699': ['gear'],
  // ⚖︎ balance scale
  '2696': ['scales'],
  // ⚗︎ alembic
  '2697': ['alembic'],
  // 🔬 microscope
  '1F52C': ['microscope'],
  // 🔭 telescope
  '1F52D': ['telescope'],
  // 🚿 shower
  '1F6BF': ['shower'],
  // 🛁 bathtub
  '1F6C1': ['bathtub'],
  // ⚰︎ coffin
  '26B0': ['coffin'],
  // ⚱︎ funeral urn
  '26B1': ['funeral_urn'],
  // 🚮 litter in bin sign
  '1F6AE': ['litter_bin', 'put_litter_in_its_place'],
  // 🚰 potable water
  '1F6B0': ['potable_water'],
  // 🛂 passport control
  '1F6C2': ['passport_control'],
  // 🛃 customs
  '1F6C3': ['customs'],
  // 🛄 baggage claim
  '1F6C4': ['baggage_claim'],
  // 🛅 left luggage
  '1F6C5': ['left_luggage'],
  // 🚸 children crossing
  '1F6B8': ['children_crossing'],
  // 🚳 no bicycles
  '1F6B3': ['no_bicycles'],
  // 🚯 no littering
  '1F6AF': ['do_not_litter', 'no_littering'],
  // 🚱 non-potable water
  '1F6B1': ['non-potable_water'],
  // 🚷 no pedestrians
  '1F6B7': ['no_pedestrians'],
  // 📵 no mobile phones
  '1F4F5': ['no_mobile_phones'],
  // ☢︎ radioactive
  '2622': ['radioactive'],
  // ☣︎ biohazard
  '2623': ['biohazard'],
  // 🔄 counterclockwise arrows button
  '1F504': ['arrows_counterclockwise', 'counterclockwise'],
  // 🛐 place of worship
  '1F6D0': ['place_of_worship'],
  // ⚛︎ atom symbol
  '269B': ['atom', 'atom_symbol'],
  // ☦︎ orthodox cross
  '2626': ['orthodox_cross'],
  // ☮︎ peace symbol
  '262E': ['peace', 'peace_symbol'],
  // 🕎 menorah
  '1F54E': ['menorah'],
  // 🔀 shuffle tracks button
  '1F500': ['shuffle', 'twisted_rightwards_arrows'],
  // 🔁 repeat button
  '1F501': ['repeat'],
  // 🔂 repeat single button
  '1F502': ['repeat_one'],
  // ⏯︎ play or pause button
  '23EF': ['play_pause'],
  // ⏏︎ eject button
  '23CF': ['eject'],
  // 🔅 dim button
  '1F505': ['dim_button', 'low_brightness'],
  // 🔆 bright button
  '1F506': ['bright_button', 'high_brightness'],
  // ⚜︎ fleur-de-lis
  '269C': ['fleur-de-lis'],
  // ➿️ double curly loop
  '27BF': ['double_curly_loop', 'loop'],
  // 🏴 black flag
  '1F3F4': ['black_flag'],

  // VERSION 2
  // 👁️‍🗨️ eye in speech bubble
  '1F441-FE0F-200D-1F5E8-FE0F': ['eye_in_speech_bubble'],
  // 🗨︎ left speech bubble
  '1F5E8': ['left_speech_bubble'],
  // 👩‍❤️‍💋‍👨 kiss: woman, man
  '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468': ['kiss_mw', 'kiss_wm'],
  // 👨‍❤️‍💋‍👨 kiss: man, man
  '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468': ['kiss_mm'],
  // 👩‍❤️‍💋‍👩 kiss: woman, woman
  '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469': ['kiss_ww'],
  // 👩‍❤️‍👨 couple with heart: woman, man
  '1F469-200D-2764-FE0F-200D-1F468': ['couple_with_heart_mw', 'couple_with_heart_wm'],
  // 👨‍❤️‍👨 couple with heart: man, man
  '1F468-200D-2764-FE0F-200D-1F468': ['couple_with_heart_mm'],
  // 👩‍❤️‍👩 couple with heart: woman, woman
  '1F469-200D-2764-FE0F-200D-1F469': ['couple_with_heart_ww'],
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
  // *️⃣ keycap: *
  '002A-FE0F-20E3': ['asterisk'],
  // 🇦🇨 flag: Ascension Island
  '1F1E6-1F1E8': ['ascension_island', 'flag_ac'],
  // 🇦🇩 flag: Andorra
  '1F1E6-1F1E9': ['andorra', 'flag_ad'],
  // 🇦🇪 flag: United Arab Emirates
  '1F1E6-1F1EA': ['flag_ae', 'united_arab_emirates'],
  // 🇦🇫 flag: Afghanistan
  '1F1E6-1F1EB': ['afghanistan', 'flag_af'],
  // 🇦🇬 flag: Antigua & Barbuda
  '1F1E6-1F1EC': ['antigua_barbuda', 'flag_ag'],
  // 🇦🇮 flag: Anguilla
  '1F1E6-1F1EE': ['anguilla', 'flag_ai'],
  // 🇦🇱 flag: Albania
  '1F1E6-1F1F1': ['albania', 'flag_al'],
  // 🇦🇲 flag: Armenia
  '1F1E6-1F1F2': ['armenia', 'flag_am'],
  // 🇦🇴 flag: Angola
  '1F1E6-1F1F4': ['angola', 'flag_ao'],
  // 🇦🇶 flag: Antarctica
  '1F1E6-1F1F6': ['antarctica', 'flag_aq'],
  // 🇦🇷 flag: Argentina
  '1F1E6-1F1F7': ['argentina', 'flag_ar'],
  // 🇦🇸 flag: American Samoa
  '1F1E6-1F1F8': ['american_samoa', 'flag_as'],
  // 🇦🇹 flag: Austria
  '1F1E6-1F1F9': ['austria', 'flag_at'],
  // 🇦🇺 flag: Australia
  '1F1E6-1F1FA': ['australia', 'flag_au'],
  // 🇦🇼 flag: Aruba
  '1F1E6-1F1FC': ['aruba', 'flag_aw'],
  // 🇦🇽 flag: Åland Islands
  '1F1E6-1F1FD': ['aland_islands', 'flag_ax'],
  // 🇦🇿 flag: Azerbaijan
  '1F1E6-1F1FF': ['azerbaijan', 'flag_az'],
  // 🇧🇦 flag: Bosnia & Herzegovina
  '1F1E7-1F1E6': ['bosnia_herzegovina', 'flag_ba'],
  // 🇧🇧 flag: Barbados
  '1F1E7-1F1E7': ['barbados', 'flag_bb'],
  // 🇧🇩 flag: Bangladesh
  '1F1E7-1F1E9': ['bangladesh', 'flag_bd'],
  // 🇧🇪 flag: Belgium
  '1F1E7-1F1EA': ['belgium', 'flag_be'],
  // 🇧🇫 flag: Burkina Faso
  '1F1E7-1F1EB': ['burkina_faso', 'flag_bf'],
  // 🇧🇬 flag: Bulgaria
  '1F1E7-1F1EC': ['bulgaria', 'flag_bg'],
  // 🇧🇭 flag: Bahrain
  '1F1E7-1F1ED': ['bahrain', 'flag_bh'],
  // 🇧🇮 flag: Burundi
  '1F1E7-1F1EE': ['burundi', 'flag_bi'],
  // 🇧🇯 flag: Benin
  '1F1E7-1F1EF': ['benin', 'flag_bj'],
  // 🇧🇱 flag: St. Barthélemy
  '1F1E7-1F1F1': ['flag_bl', 'st_barthelemy'],
  // 🇧🇲 flag: Bermuda
  '1F1E7-1F1F2': ['bermuda', 'flag_bm'],
  // 🇧🇳 flag: Brunei
  '1F1E7-1F1F3': ['brunei', 'flag_bn'],
  // 🇧🇴 flag: Bolivia
  '1F1E7-1F1F4': ['bolivia', 'flag_bo'],
  // 🇧🇶 flag: Caribbean Netherlands
  '1F1E7-1F1F6': ['caribbean_netherlands', 'flag_bq'],
  // 🇧🇷 flag: Brazil
  '1F1E7-1F1F7': ['brazil', 'flag_br'],
  // 🇧🇸 flag: Bahamas
  '1F1E7-1F1F8': ['bahamas', 'flag_bs'],
  // 🇧🇹 flag: Bhutan
  '1F1E7-1F1F9': ['bhutan', 'flag_bt'],
  // 🇧🇻 flag: Bouvet Island
  '1F1E7-1F1FB': ['bouvet_island', 'flag_bv'],
  // 🇧🇼 flag: Botswana
  '1F1E7-1F1FC': ['botswana', 'flag_bw'],
  // 🇧🇾 flag: Belarus
  '1F1E7-1F1FE': ['belarus', 'flag_by'],
  // 🇧🇿 flag: Belize
  '1F1E7-1F1FF': ['belize', 'flag_bz'],
  // 🇨🇦 flag: Canada
  '1F1E8-1F1E6': ['canada', 'flag_ca'],
  // 🇨🇨 flag: Cocos (Keeling) Islands
  '1F1E8-1F1E8': ['cocos_islands', 'flag_cc'],
  // 🇨🇩 flag: Congo - Kinshasa
  '1F1E8-1F1E9': ['congo_kinshasa', 'flag_cd'],
  // 🇨🇫 flag: Central African Republic
  '1F1E8-1F1EB': ['central_african_republic', 'flag_cf'],
  // 🇨🇬 flag: Congo - Brazzaville
  '1F1E8-1F1EC': ['congo_brazzaville', 'flag_cg'],
  // 🇨🇭 flag: Switzerland
  '1F1E8-1F1ED': ['flag_ch', 'switzerland'],
  // 🇨🇮 flag: Côte d’Ivoire
  '1F1E8-1F1EE': ['cote_divoire', 'flag_ci'],
  // 🇨🇰 flag: Cook Islands
  '1F1E8-1F1F0': ['cook_islands', 'flag_ck'],
  // 🇨🇱 flag: Chile
  '1F1E8-1F1F1': ['chile', 'flag_cl'],
  // 🇨🇲 flag: Cameroon
  '1F1E8-1F1F2': ['cameroon', 'flag_cm'],
  // 🇨🇴 flag: Colombia
  '1F1E8-1F1F4': ['colombia', 'flag_co'],
  // 🇨🇵 flag: Clipperton Island
  '1F1E8-1F1F5': ['clipperton_island', 'flag_cp'],
  // 🇨🇷 flag: Costa Rica
  '1F1E8-1F1F7': ['costa_rica', 'flag_cr'],
  // 🇨🇺 flag: Cuba
  '1F1E8-1F1FA': ['cuba', 'flag_cu'],
  // 🇨🇻 flag: Cape Verde
  '1F1E8-1F1FB': ['cape_verde', 'flag_cv'],
  // 🇨🇼 flag: Curaçao
  '1F1E8-1F1FC': ['curacao', 'flag_cw'],
  // 🇨🇽 flag: Christmas Island
  '1F1E8-1F1FD': ['christmas_island', 'flag_cx'],
  // 🇨🇾 flag: Cyprus
  '1F1E8-1F1FE': ['cyprus', 'flag_cy'],
  // 🇨🇿 flag: Czechia
  '1F1E8-1F1FF': ['czech_republic', 'czechia', 'flag_cz'],
  // 🇩🇬 flag: Diego Garcia
  '1F1E9-1F1EC': ['diego_garcia', 'flag_dg'],
  // 🇩🇯 flag: Djibouti
  '1F1E9-1F1EF': ['djibouti', 'flag_dj'],
  // 🇩🇰 flag: Denmark
  '1F1E9-1F1F0': ['denmark', 'flag_dk'],
  // 🇩🇲 flag: Dominica
  '1F1E9-1F1F2': ['dominica', 'flag_dm'],
  // 🇩🇴 flag: Dominican Republic
  '1F1E9-1F1F4': ['dominican_republic', 'flag_do'],
  // 🇩🇿 flag: Algeria
  '1F1E9-1F1FF': ['algeria', 'flag_dz'],
  // 🇪🇦 flag: Ceuta & Melilla
  '1F1EA-1F1E6': ['ceuta_melilla', 'flag_ea'],
  // 🇪🇨 flag: Ecuador
  '1F1EA-1F1E8': ['ecuador', 'flag_ec'],
  // 🇪🇪 flag: Estonia
  '1F1EA-1F1EA': ['estonia', 'flag_ee'],
  // 🇪🇬 flag: Egypt
  '1F1EA-1F1EC': ['egypt', 'flag_eg'],
  // 🇪🇭 flag: Western Sahara
  '1F1EA-1F1ED': ['flag_eh', 'western_sahara'],
  // 🇪🇷 flag: Eritrea
  '1F1EA-1F1F7': ['eritrea', 'flag_er'],
  // 🇪🇹 flag: Ethiopia
  '1F1EA-1F1F9': ['ethiopia', 'flag_et'],
  // 🇪🇺 flag: European Union
  '1F1EA-1F1FA': ['european_union', 'flag_eu'],
  // 🇫🇮 flag: Finland
  '1F1EB-1F1EE': ['finland', 'flag_fi'],
  // 🇫🇯 flag: Fiji
  '1F1EB-1F1EF': ['fiji', 'flag_fj'],
  // 🇫🇰 flag: Falkland Islands
  '1F1EB-1F1F0': ['falkland_islands', 'flag_fk'],
  // 🇫🇲 flag: Micronesia
  '1F1EB-1F1F2': ['flag_fm', 'micronesia'],
  // 🇫🇴 flag: Faroe Islands
  '1F1EB-1F1F4': ['faroe_islands', 'flag_fo'],
  // 🇬🇦 flag: Gabon
  '1F1EC-1F1E6': ['flag_ga', 'gabon'],
  // 🇬🇩 flag: Grenada
  '1F1EC-1F1E9': ['flag_gd', 'grenada'],
  // 🇬🇪 flag: Georgia
  '1F1EC-1F1EA': ['flag_ge', 'georgia'],
  // 🇬🇫 flag: French Guiana
  '1F1EC-1F1EB': ['flag_gf', 'french_guiana'],
  // 🇬🇬 flag: Guernsey
  '1F1EC-1F1EC': ['flag_gg', 'guernsey'],
  // 🇬🇭 flag: Ghana
  '1F1EC-1F1ED': ['flag_gh', 'ghana'],
  // 🇬🇮 flag: Gibraltar
  '1F1EC-1F1EE': ['flag_gi', 'gibraltar'],
  // 🇬🇱 flag: Greenland
  '1F1EC-1F1F1': ['flag_gl', 'greenland'],
  // 🇬🇲 flag: Gambia
  '1F1EC-1F1F2': ['flag_gm', 'gambia'],
  // 🇬🇳 flag: Guinea
  '1F1EC-1F1F3': ['flag_gn', 'guinea'],
  // 🇬🇵 flag: Guadeloupe
  '1F1EC-1F1F5': ['flag_gp', 'guadeloupe'],
  // 🇬🇶 flag: Equatorial Guinea
  '1F1EC-1F1F6': ['equatorial_guinea', 'flag_gq'],
  // 🇬🇷 flag: Greece
  '1F1EC-1F1F7': ['flag_gr', 'greece'],
  // 🇬🇸 flag: South Georgia & South Sandwich Islands
  '1F1EC-1F1F8': ['flag_gs', 'south_georgia_south_sandwich_islands'],
  // 🇬🇹 flag: Guatemala
  '1F1EC-1F1F9': ['flag_gt', 'guatemala'],
  // 🇬🇺 flag: Guam
  '1F1EC-1F1FA': ['flag_gu', 'guam'],
  // 🇬🇼 flag: Guinea-Bissau
  '1F1EC-1F1FC': ['flag_gw', 'guinea_bissau'],
  // 🇬🇾 flag: Guyana
  '1F1EC-1F1FE': ['flag_gy', 'guyana'],
  // 🇭🇰 flag: Hong Kong SAR China
  '1F1ED-1F1F0': ['flag_hk', 'hong_kong'],
  // 🇭🇲 flag: Heard & McDonald Islands
  '1F1ED-1F1F2': ['flag_hm', 'heard_mcdonald_islands'],
  // 🇭🇳 flag: Honduras
  '1F1ED-1F1F3': ['flag_hn', 'honduras'],
  // 🇭🇷 flag: Croatia
  '1F1ED-1F1F7': ['croatia', 'flag_hr'],
  // 🇭🇹 flag: Haiti
  '1F1ED-1F1F9': ['flag_ht', 'haiti'],
  // 🇭🇺 flag: Hungary
  '1F1ED-1F1FA': ['flag_hu', 'hungary'],
  // 🇮🇨 flag: Canary Islands
  '1F1EE-1F1E8': ['canary_islands', 'flag_ic'],
  // 🇮🇩 flag: Indonesia
  '1F1EE-1F1E9': ['flag_id', 'indonesia'],
  // 🇮🇪 flag: Ireland
  '1F1EE-1F1EA': ['flag_ie', 'ireland'],
  // 🇮🇱 flag: Israel
  '1F1EE-1F1F1': ['flag_il', 'israel'],
  // 🇮🇲 flag: Isle of Man
  '1F1EE-1F1F2': ['flag_im', 'isle_of_man'],
  // 🇮🇳 flag: India
  '1F1EE-1F1F3': ['flag_in', 'india'],
  // 🇮🇴 flag: British Indian Ocean Territory
  '1F1EE-1F1F4': ['british_indian_ocean_territory', 'flag_io'],
  // 🇮🇶 flag: Iraq
  '1F1EE-1F1F6': ['flag_iq', 'iraq'],
  // 🇮🇷 flag: Iran
  '1F1EE-1F1F7': ['flag_ir', 'iran'],
  // 🇮🇸 flag: Iceland
  '1F1EE-1F1F8': ['flag_is', 'iceland'],
  // 🇯🇪 flag: Jersey
  '1F1EF-1F1EA': ['flag_je', 'jersey'],
  // 🇯🇲 flag: Jamaica
  '1F1EF-1F1F2': ['flag_jm', 'jamaica'],
  // 🇯🇴 flag: Jordan
  '1F1EF-1F1F4': ['flag_jo', 'jordan'],
  // 🇰🇪 flag: Kenya
  '1F1F0-1F1EA': ['flag_ke', 'kenya'],
  // 🇰🇬 flag: Kyrgyzstan
  '1F1F0-1F1EC': ['flag_kg', 'kyrgyzstan'],
  // 🇰🇭 flag: Cambodia
  '1F1F0-1F1ED': ['cambodia', 'flag_kh'],
  // 🇰🇮 flag: Kiribati
  '1F1F0-1F1EE': ['flag_ki', 'kiribati'],
  // 🇰🇲 flag: Comoros
  '1F1F0-1F1F2': ['comoros', 'flag_km'],
  // 🇰🇳 flag: St. Kitts & Nevis
  '1F1F0-1F1F3': ['flag_kn', 'st_kitts_nevis'],
  // 🇰🇵 flag: North Korea
  '1F1F0-1F1F5': ['flag_kp', 'north_korea'],
  // 🇰🇼 flag: Kuwait
  '1F1F0-1F1FC': ['flag_kw', 'kuwait'],
  // 🇰🇾 flag: Cayman Islands
  '1F1F0-1F1FE': ['cayman_islands', 'flag_ky'],
  // 🇰🇿 flag: Kazakhstan
  '1F1F0-1F1FF': ['flag_kz', 'kazakhstan'],
  // 🇱🇦 flag: Laos
  '1F1F1-1F1E6': ['flag_la', 'laos'],
  // 🇱🇧 flag: Lebanon
  '1F1F1-1F1E7': ['flag_lb', 'lebanon'],
  // 🇱🇨 flag: St. Lucia
  '1F1F1-1F1E8': ['flag_lc', 'st_lucia'],
  // 🇱🇮 flag: Liechtenstein
  '1F1F1-1F1EE': ['flag_li', 'liechtenstein'],
  // 🇱🇰 flag: Sri Lanka
  '1F1F1-1F1F0': ['flag_lk', 'sri_lanka'],
  // 🇱🇷 flag: Liberia
  '1F1F1-1F1F7': ['flag_lr', 'liberia'],
  // 🇱🇸 flag: Lesotho
  '1F1F1-1F1F8': ['flag_ls', 'lesotho'],
  // 🇱🇹 flag: Lithuania
  '1F1F1-1F1F9': ['flag_lt', 'lithuania'],
  // 🇱🇺 flag: Luxembourg
  '1F1F1-1F1FA': ['flag_lu', 'luxembourg'],
  // 🇱🇻 flag: Latvia
  '1F1F1-1F1FB': ['flag_lv', 'latvia'],
  // 🇱🇾 flag: Libya
  '1F1F1-1F1FE': ['flag_ly', 'libya'],
  // 🇲🇦 flag: Morocco
  '1F1F2-1F1E6': ['flag_ma', 'morocco'],
  // 🇲🇨 flag: Monaco
  '1F1F2-1F1E8': ['flag_mc', 'monaco'],
  // 🇲🇩 flag: Moldova
  '1F1F2-1F1E9': ['flag_md', 'moldova'],
  // 🇲🇪 flag: Montenegro
  '1F1F2-1F1EA': ['flag_me', 'montenegro'],
  // 🇲🇫 flag: St. Martin
  '1F1F2-1F1EB': ['flag_mf', 'st_martin'],
  // 🇲🇬 flag: Madagascar
  '1F1F2-1F1EC': ['flag_mg', 'madagascar'],
  // 🇲🇭 flag: Marshall Islands
  '1F1F2-1F1ED': ['flag_mh', 'marshall_islands'],
  // 🇲🇰 flag: North Macedonia
  '1F1F2-1F1F0': ['flag_mk', 'macedonia'],
  // 🇲🇱 flag: Mali
  '1F1F2-1F1F1': ['flag_ml', 'mali'],
  // 🇲🇲 flag: Myanmar (Burma)
  '1F1F2-1F1F2': ['burma', 'flag_mm', 'myanmar'],
  // 🇲🇳 flag: Mongolia
  '1F1F2-1F1F3': ['flag_mn', 'mongolia'],
  // 🇲🇴 flag: Macao SAR China
  '1F1F2-1F1F4': ['flag_mo', 'macao', 'macau'],
  // 🇲🇵 flag: Northern Mariana Islands
  '1F1F2-1F1F5': ['flag_mp', 'northern_mariana_islands'],
  // 🇲🇶 flag: Martinique
  '1F1F2-1F1F6': ['flag_mq', 'martinique'],
  // 🇲🇷 flag: Mauritania
  '1F1F2-1F1F7': ['flag_mr', 'mauritania'],
  // 🇲🇸 flag: Montserrat
  '1F1F2-1F1F8': ['flag_ms', 'montserrat'],
  // 🇲🇹 flag: Malta
  '1F1F2-1F1F9': ['flag_mt', 'malta'],
  // 🇲🇺 flag: Mauritius
  '1F1F2-1F1FA': ['flag_mu', 'mauritius'],
  // 🇲🇻 flag: Maldives
  '1F1F2-1F1FB': ['flag_mv', 'maldives'],
  // 🇲🇼 flag: Malawi
  '1F1F2-1F1FC': ['flag_mw', 'malawi'],
  // 🇲🇽 flag: Mexico
  '1F1F2-1F1FD': ['flag_mx', 'mexico'],
  // 🇲🇾 flag: Malaysia
  '1F1F2-1F1FE': ['flag_my', 'malaysia'],
  // 🇲🇿 flag: Mozambique
  '1F1F2-1F1FF': ['flag_mz', 'mozambique'],
  // 🇳🇦 flag: Namibia
  '1F1F3-1F1E6': ['flag_na', 'namibia'],
  // 🇳🇨 flag: New Caledonia
  '1F1F3-1F1E8': ['flag_nc', 'new_caledonia'],
  // 🇳🇪 flag: Niger
  '1F1F3-1F1EA': ['flag_ne', 'niger'],
  // 🇳🇫 flag: Norfolk Island
  '1F1F3-1F1EB': ['flag_nf', 'norfolk_island'],
  // 🇳🇬 flag: Nigeria
  '1F1F3-1F1EC': ['flag_ng', 'nigeria'],
  // 🇳🇮 flag: Nicaragua
  '1F1F3-1F1EE': ['flag_ni', 'nicaragua'],
  // 🇳🇱 flag: Netherlands
  '1F1F3-1F1F1': ['flag_nl', 'netherlands'],
  // 🇳🇴 flag: Norway
  '1F1F3-1F1F4': ['flag_no', 'norway'],
  // 🇳🇵 flag: Nepal
  '1F1F3-1F1F5': ['flag_np', 'nepal'],
  // 🇳🇷 flag: Nauru
  '1F1F3-1F1F7': ['flag_nr', 'nauru'],
  // 🇳🇺 flag: Niue
  '1F1F3-1F1FA': ['flag_nu', 'niue'],
  // 🇳🇿 flag: New Zealand
  '1F1F3-1F1FF': ['flag_nz', 'new_zealand'],
  // 🇴🇲 flag: Oman
  '1F1F4-1F1F2': ['flag_om', 'oman'],
  // 🇵🇦 flag: Panama
  '1F1F5-1F1E6': ['flag_pa', 'panama'],
  // 🇵🇪 flag: Peru
  '1F1F5-1F1EA': ['flag_pe', 'peru'],
  // 🇵🇫 flag: French Polynesia
  '1F1F5-1F1EB': ['flag_pf', 'french_polynesia'],
  // 🇵🇬 flag: Papua New Guinea
  '1F1F5-1F1EC': ['flag_pg', 'papua_new_guinea'],
  // 🇵🇭 flag: Philippines
  '1F1F5-1F1ED': ['flag_ph', 'philippines'],
  // 🇵🇰 flag: Pakistan
  '1F1F5-1F1F0': ['flag_pk', 'pakistan'],
  // 🇵🇱 flag: Poland
  '1F1F5-1F1F1': ['flag_pl', 'poland'],
  // 🇵🇲 flag: St. Pierre & Miquelon
  '1F1F5-1F1F2': ['flag_pm', 'st_pierre_miquelon'],
  // 🇵🇳 flag: Pitcairn Islands
  '1F1F5-1F1F3': ['flag_pn', 'pitcairn_islands'],
  // 🇵🇷 flag: Puerto Rico
  '1F1F5-1F1F7': ['flag_pr', 'puerto_rico'],
  // 🇵🇸 flag: Palestinian Territories
  '1F1F5-1F1F8': ['flag_ps', 'palestinian_territories'],
  // 🇵🇹 flag: Portugal
  '1F1F5-1F1F9': ['flag_pt', 'portugal'],
  // 🇵🇼 flag: Palau
  '1F1F5-1F1FC': ['flag_pw', 'palau'],
  // 🇵🇾 flag: Paraguay
  '1F1F5-1F1FE': ['flag_py', 'paraguay'],
  // 🇶🇦 flag: Qatar
  '1F1F6-1F1E6': ['flag_qa', 'qatar'],
  // 🇷🇪 flag: Réunion
  '1F1F7-1F1EA': ['flag_re', 'reunion'],
  // 🇷🇴 flag: Romania
  '1F1F7-1F1F4': ['flag_ro', 'romania'],
  // 🇷🇸 flag: Serbia
  '1F1F7-1F1F8': ['flag_rs', 'serbia'],
  // 🇷🇼 flag: Rwanda
  '1F1F7-1F1FC': ['flag_rw', 'rwanda'],
  // 🇸🇦 flag: Saudi Arabia
  '1F1F8-1F1E6': ['flag_sa', 'saudi_arabia'],
  // 🇸🇧 flag: Solomon Islands
  '1F1F8-1F1E7': ['flag_sb', 'solomon_islands'],
  // 🇸🇨 flag: Seychelles
  '1F1F8-1F1E8': ['flag_sc', 'seychelles'],
  // 🇸🇩 flag: Sudan
  '1F1F8-1F1E9': ['flag_sd', 'sudan'],
  // 🇸🇪 flag: Sweden
  '1F1F8-1F1EA': ['flag_se', 'sweden'],
  // 🇸🇬 flag: Singapore
  '1F1F8-1F1EC': ['flag_sg', 'singapore'],
  // 🇸🇭 flag: St. Helena
  '1F1F8-1F1ED': ['flag_sh', 'st_helena'],
  // 🇸🇮 flag: Slovenia
  '1F1F8-1F1EE': ['flag_si', 'slovenia'],
  // 🇸🇯 flag: Svalbard & Jan Mayen
  '1F1F8-1F1EF': ['flag_sj', 'svalbard_jan_mayen'],
  // 🇸🇰 flag: Slovakia
  '1F1F8-1F1F0': ['flag_sk', 'slovakia'],
  // 🇸🇱 flag: Sierra Leone
  '1F1F8-1F1F1': ['flag_sl', 'sierra_leone'],
  // 🇸🇲 flag: San Marino
  '1F1F8-1F1F2': ['flag_sm', 'san_marino'],
  // 🇸🇳 flag: Senegal
  '1F1F8-1F1F3': ['flag_sn', 'senegal'],
  // 🇸🇴 flag: Somalia
  '1F1F8-1F1F4': ['flag_so', 'somalia'],
  // 🇸🇷 flag: Suriname
  '1F1F8-1F1F7': ['flag_sr', 'suriname'],
  // 🇸🇸 flag: South Sudan
  '1F1F8-1F1F8': ['flag_ss', 'south_sudan'],
  // 🇸🇹 flag: São Tomé & Príncipe
  '1F1F8-1F1F9': ['flag_st', 'sao_tome_principe'],
  // 🇸🇻 flag: El Salvador
  '1F1F8-1F1FB': ['el_salvador', 'flag_sv'],
  // 🇸🇽 flag: Sint Maarten
  '1F1F8-1F1FD': ['flag_sx', 'sint_maarten'],
  // 🇸🇾 flag: Syria
  '1F1F8-1F1FE': ['flag_sy', 'syria'],
  // 🇸🇿 flag: Eswatini
  '1F1F8-1F1FF': ['eswatini', 'flag_sz', 'swaziland'],
  // 🇹🇦 flag: Tristan da Cunha
  '1F1F9-1F1E6': ['flag_ta', 'tristan_da_cunha'],
  // 🇹🇨 flag: Turks & Caicos Islands
  '1F1F9-1F1E8': ['flag_tc', 'turks_caicos_islands'],
  // 🇹🇩 flag: Chad
  '1F1F9-1F1E9': ['chad', 'flag_td'],
  // 🇹🇫 flag: French Southern Territories
  '1F1F9-1F1EB': ['flag_tf', 'french_southern_territories'],
  // 🇹🇬 flag: Togo
  '1F1F9-1F1EC': ['flag_tg', 'togo'],
  // 🇹🇭 flag: Thailand
  '1F1F9-1F1ED': ['flag_th', 'thailand'],
  // 🇹🇯 flag: Tajikistan
  '1F1F9-1F1EF': ['flag_tj', 'tajikistan'],
  // 🇹🇰 flag: Tokelau
  '1F1F9-1F1F0': ['flag_tk', 'tokelau'],
  // 🇹🇱 flag: Timor-Leste
  '1F1F9-1F1F1': ['flag_tl', 'timor_leste'],
  // 🇹🇲 flag: Turkmenistan
  '1F1F9-1F1F2': ['flag_tm', 'turkmenistan'],
  // 🇹🇳 flag: Tunisia
  '1F1F9-1F1F3': ['flag_tn', 'tunisia'],
  // 🇹🇴 flag: Tonga
  '1F1F9-1F1F4': ['flag_to', 'tonga'],
  // 🇹🇷 flag: Türkiye
  '1F1F9-1F1F7': ['flag_tr', 'turkey_tr'],
  // 🇹🇹 flag: Trinidad & Tobago
  '1F1F9-1F1F9': ['flag_tt', 'trinidad_tobago'],
  // 🇹🇻 flag: Tuvalu
  '1F1F9-1F1FB': ['flag_tv', 'tuvalu'],
  // 🇹🇼 flag: Taiwan
  '1F1F9-1F1FC': ['flag_tw', 'taiwan'],
  // 🇹🇿 flag: Tanzania
  '1F1F9-1F1FF': ['flag_tz', 'tanzania'],
  // 🇺🇦 flag: Ukraine
  '1F1FA-1F1E6': ['flag_ua', 'ukraine'],
  // 🇺🇬 flag: Uganda
  '1F1FA-1F1EC': ['flag_ug', 'uganda'],
  // 🇺🇲 flag: U.S. Outlying Islands
  '1F1FA-1F1F2': ['flag_um', 'us_outlying_islands'],
  // 🇺🇾 flag: Uruguay
  '1F1FA-1F1FE': ['flag_uy', 'uruguay'],
  // 🇺🇿 flag: Uzbekistan
  '1F1FA-1F1FF': ['flag_uz', 'uzbekistan'],
  // 🇻🇦 flag: Vatican City
  '1F1FB-1F1E6': ['flag_va', 'vatican_city'],
  // 🇻🇨 flag: St. Vincent & Grenadines
  '1F1FB-1F1E8': ['flag_vc', 'st_vincent_grenadines'],
  // 🇻🇪 flag: Venezuela
  '1F1FB-1F1EA': ['flag_ve', 'venezuela'],
  // 🇻🇬 flag: British Virgin Islands
  '1F1FB-1F1EC': ['british_virgin_islands', 'flag_vg'],
  // 🇻🇮 flag: U.S. Virgin Islands
  '1F1FB-1F1EE': ['flag_vi', 'us_virgin_islands'],
  // 🇻🇳 flag: Vietnam
  '1F1FB-1F1F3': ['flag_vn', 'vietnam'],
  // 🇻🇺 flag: Vanuatu
  '1F1FB-1F1FA': ['flag_vu', 'vanuatu'],
  // 🇼🇫 flag: Wallis & Futuna
  '1F1FC-1F1EB': ['flag_wf', 'wallis_futuna'],
  // 🇼🇸 flag: Samoa
  '1F1FC-1F1F8': ['flag_ws', 'samoa'],
  // 🇽🇰 flag: Kosovo
  '1F1FD-1F1F0': ['flag_xk', 'kosovo'],
  // 🇾🇪 flag: Yemen
  '1F1FE-1F1EA': ['flag_ye', 'yemen'],
  // 🇾🇹 flag: Mayotte
  '1F1FE-1F1F9': ['flag_yt', 'mayotte'],
  // 🇿🇦 flag: South Africa
  '1F1FF-1F1E6': ['flag_za', 'south_africa'],
  // 🇿🇲 flag: Zambia
  '1F1FF-1F1F2': ['flag_zm', 'zambia'],
  // 🇿🇼 flag: Zimbabwe
  '1F1FF-1F1FC': ['flag_zw', 'zimbabwe'],

  // VERSION 3
  // 🤣 rolling on the floor laughing
  '1F923': ['rofl'],
  // 🤥 lying face
  '1F925': ['lying', 'lying_face'],
  // 🤤 drooling face
  '1F924': ['drooling', 'drooling_face'],
  // 🤢 nauseated face
  '1F922': ['nauseated', 'nauseated_face'],
  // 🤧 sneezing face
  '1F927': ['sneezing', 'sneezing_face'],
  // 🤠 cowboy hat face
  '1F920': ['cowboy', 'cowboy_face'],
  // 🤡 clown face
  '1F921': ['clown', 'clown_face'],
  // 🖤 black heart
  '1F5A4': ['black_heart'],
  // 🤚 raised back of hand
  '1F91A': ['raised_back_of_hand'],
  // 🤞 crossed fingers
  '1F91E': ['fingers_crossed'],
  // 🤙 call me hand
  '1F919': ['call_me_hand'],
  // 🤛 left-facing fist
  '1F91B': ['left_facing_fist'],
  // 🤜 right-facing fist
  '1F91C': ['right_facing_fist'],
  // 🤝 handshake
  '1F91D': ['handshake'],
  // 🤳 selfie
  '1F933': ['selfie'],
  // 🤦 person facepalming
  '1F926': ['facepalm', 'person_facepalming'],
  // 🤷 person shrugging
  '1F937': ['person_shrugging', 'shrug'],
  // 🤴 prince
  '1F934': ['prince'],
  // 🤵 person in tuxedo
  '1F935': ['person_in_tuxedo'],
  // 🤰 pregnant woman
  '1F930': ['pregnant_woman'],
  // 🤶 Mrs. Claus
  '1F936': ['mrs_claus'],
  // 🕺 man dancing
  '1F57A': ['man_dancing'],
  // 🤺 person fencing
  '1F93A': ['fencer', 'fencing', 'person_fencing'],
  // 🤸 person cartwheeling
  '1F938': ['cartwheeling', 'person_cartwheel'],
  // 🤼 people wrestling
  '1F93C': ['people_wrestling', 'wrestlers', 'wrestling'],
  // 🤽 person playing water polo
  '1F93D': ['person_playing_water_polo', 'water_polo'],
  // 🤾 person playing handball
  '1F93E': ['handball', 'person_playing_handball'],
  // 🤹 person juggling
  '1F939': ['juggler', 'juggling', 'person_juggling'],
  // 🦍 gorilla
  '1F98D': ['gorilla'],
  // 🦊 fox
  '1F98A': ['fox', 'fox_face'],
  // 🦌 deer
  '1F98C': ['deer'],
  // 🦏 rhinoceros
  '1F98F': ['rhino', 'rhinoceros'],
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
  '1F940': ['wilted_flower'],
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
  '1F956': ['baguette_bread'],
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
  '1F957': ['green_salad', 'salad'],
  // 🦐 shrimp
  '1F990': ['shrimp'],
  // 🦑 squid
  '1F991': ['squid'],
  // 🥛 glass of milk
  '1F95B': ['glass_of_milk', 'milk'],
  // 🥂 clinking glasses
  '1F942': ['clinking_glasses'],
  // 🥃 tumbler glass
  '1F943': ['tumbler_glass', 'whisky'],
  // 🥄 spoon
  '1F944': ['spoon'],
  // 🛵 motor scooter
  '1F6F5': ['motor_scooter'],
  // 🛴 kick scooter
  '1F6F4': ['scooter'],
  // 🛑 stop sign
  '1F6D1': ['octagonal_sign', 'stop_sign'],
  // 🛶 canoe
  '1F6F6': ['canoe'],
  // 🥇 1st place medal
  '1F947': ['1st', 'first_place_medal'],
  // 🥈 2nd place medal
  '1F948': ['2nd', 'second_place_medal'],
  // 🥉 3rd place medal
  '1F949': ['3rd', 'third_place_medal'],
  // 🥊 boxing glove
  '1F94A': ['boxing_glove'],
  // 🥋 martial arts uniform
  '1F94B': ['martial_arts_uniform'],
  // 🥅 goal net
  '1F945': ['goal_net'],
  // 🥁 drum
  '1F941': ['drum'],
  // 🛒 shopping cart
  '1F6D2': ['shopping_cart'],

  // VERSION 4
  // 👱‍♀️ woman: blond hair
  '1F471-200D-2640-FE0F': ['woman_blond_haired'],
  // 👱‍♂️ man: blond hair
  '1F471-200D-2642-FE0F': ['man_blond_haired'],
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
  '1F473-200D-2642-FE0F': ['man_wearing_turban'],
  // 👳‍♀️ woman wearing turban
  '1F473-200D-2640-FE0F': ['woman_wearing_turban'],
  // 💆‍♂️ man getting massage
  '1F486-200D-2642-FE0F': ['man_getting_massage'],
  // 💆‍♀️ woman getting massage
  '1F486-200D-2640-FE0F': ['woman_getting_massage'],
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
  '1F46F-200D-2642-FE0F': ['men_with_bunny_ears_partying'],
  // 👯‍♀️ women with bunny ears
  '1F46F-200D-2640-FE0F': ['women_with_bunny_ears_partying'],
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
  '1F93D-200D-2642-FE0F': ['man_playing_water_polo'],
  // 🤽‍♀️ woman playing water polo
  '1F93D-200D-2640-FE0F': ['woman_playing_water_polo'],
  // 🤾‍♂️ man playing handball
  '1F93E-200D-2642-FE0F': ['man_playing_handball'],
  // 🤾‍♀️ woman playing handball
  '1F93E-200D-2640-FE0F': ['woman_playing_handball'],
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
  // ♀︎ female sign
  '2640': ['female', 'female_sign'],
  // ♂︎ male sign
  '2642': ['male', 'male_sign'],
  // ⚕︎ medical symbol
  '2695': ['medical', 'medical_symbol'],
  // 🏳️‍🌈 rainbow flag
  '1F3F3-FE0F-200D-1F308': ['rainbow_flag'],
  // 🇺🇳 flag: United Nations
  '1F1FA-1F1F3': ['flag_un', 'un', 'united_nations'],

  // VERSION 5
  // 🤩 star-struck
  '1F929': ['star_struck'],
  // 🤪 zany face
  '1F92A': ['zany', 'zany_face'],
  // 🤭 face with hand over mouth
  '1F92D': ['face_with_hand_over_mouth', 'hand_over_mouth'],
  // 🤫 shushing face
  '1F92B': ['shush', 'shushing_face'],
  // 🤨 face with raised eyebrow
  '1F928': ['face_with_raised_eyebrow', 'raised_eyebrow'],
  // 🤮 face vomiting
  '1F92E': ['face_vomiting', 'vomiting'],
  // 🤯 exploding head
  '1F92F': ['exploding_head'],
  // 🧐 face with monocle
  '1F9D0': ['face_with_monocle'],
  // 🤬 face with symbols on mouth
  '1F92C': ['censored', 'face_with_symbols_on_mouth'],
  // 🧡 orange heart
  '1F9E1': ['orange_heart'],
  // 🤟 love-you gesture
  '1F91F': ['love_you_gesture'],
  // 🤲 palms up together
  '1F932': ['palms_up_together'],
  // 🧠 brain
  '1F9E0': ['brain'],
  // 🧒 child
  '1F9D2': ['child'],
  // 🧑 person
  '1F9D1': ['adult'],
  // 🧔 person: beard
  '1F9D4': ['person_bearded'],
  // 🧓 older person
  '1F9D3': ['older_adult'],
  // 🧕 woman with headscarf
  '1F9D5': ['woman_with_headscarf'],
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
  '1F9D6': ['person_in_steamy_room'],
  // 🧖‍♂️ man in steamy room
  '1F9D6-200D-2642-FE0F': ['man_in_steamy_room'],
  // 🧖‍♀️ woman in steamy room
  '1F9D6-200D-2640-FE0F': ['woman_in_steamy_room'],
  // 🧗 person climbing
  '1F9D7': ['climbing', 'person_climbing'],
  // 🧗‍♂️ man climbing
  '1F9D7-200D-2642-FE0F': ['man_climbing'],
  // 🧗‍♀️ woman climbing
  '1F9D7-200D-2640-FE0F': ['woman_climbing'],
  // 🧘 person in lotus position
  '1F9D8': ['person_in_lotus_position'],
  // 🧘‍♂️ man in lotus position
  '1F9D8-200D-2642-FE0F': ['man_in_lotus_position'],
  // 🧘‍♀️ woman in lotus position
  '1F9D8-200D-2640-FE0F': ['woman_in_lotus_position'],
  // 🦓 zebra
  '1F993': ['zebra'],
  // 🦒 giraffe
  '1F992': ['giraffe'],
  // 🦔 hedgehog
  '1F994': ['hedgehog'],
  // 🦕 sauropod
  '1F995': ['sauropod'],
  // 🦖 T-Rex
  '1F996': ['t-rex', 'trex'],
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
  '1F963': ['bowl_with_spoon'],
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
  '1F964': ['cup_with_straw'],
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
  '1F3F4-E0067-E0062-E0065-E006E-E0067-E007F': ['england', 'flag_gbeng'],
  // 🏴󠁧󠁢󠁳󠁣󠁴󠁿 flag: Scotland
  '1F3F4-E0067-E0062-E0073-E0063-E0074-E007F': ['flag_gbsct', 'scotland'],
  // 🏴󠁧󠁢󠁷󠁬󠁳󠁿 flag: Wales
  '1F3F4-E0067-E0062-E0077-E006C-E0073-E007F': ['flag_gbwls', 'wales'],

  // VERSION 11
  // 🥰 smiling face with hearts
  '1F970': ['smiling_face_with_3_hearts'],
  // 🥵 hot face
  '1F975': ['hot', 'hot_face'],
  // 🥶 cold face
  '1F976': ['cold', 'cold_face'],
  // 🥴 woozy face
  '1F974': ['woozy', 'woozy_face'],
  // 🥳 partying face
  '1F973': ['hooray', 'partying', 'partying_face'],
  // 🥺 pleading face
  '1F97A': ['pleading', 'pleading_face'],
  // 🦵 leg
  '1F9B5': ['leg'],
  // 🦶 foot
  '1F9B6': ['foot'],
  // 🦷 tooth
  '1F9B7': ['tooth'],
  // 🦴 bone
  '1F9B4': ['bone'],
  // 👨‍🦰 man: red hair
  '1F468-200D-1F9B0': ['man_red_haired'],
  // 👨‍🦱 man: curly hair
  '1F468-200D-1F9B1': ['man_curly_haired'],
  // 👨‍🦳 man: white hair
  '1F468-200D-1F9B3': ['man_white_haired'],
  // 👨‍🦲 man: bald
  '1F468-200D-1F9B2': ['man_bald'],
  // 👩‍🦰 woman: red hair
  '1F469-200D-1F9B0': ['woman_red_haired'],
  // 👩‍🦱 woman: curly hair
  '1F469-200D-1F9B1': ['woman_curly_haired'],
  // 👩‍🦳 woman: white hair
  '1F469-200D-1F9B3': ['woman_white_haired'],
  // 👩‍🦲 woman: bald
  '1F469-200D-1F9B2': ['woman_bald'],
  // 🦸 superhero
  '1F9B8': ['superhero'],
  // 🦸‍♂️ man superhero
  '1F9B8-200D-2642-FE0F': ['man_superhero'],
  // 🦸‍♀️ woman superhero
  '1F9B8-200D-2640-FE0F': ['woman_superhero'],
  // 🦹 supervillain
  '1F9B9': ['supervillain'],
  // 🦹‍♂️ man supervillain
  '1F9B9-200D-2642-FE0F': ['man_supervillain'],
  // 🦹‍♀️ woman supervillain
  '1F9B9-200D-2640-FE0F': ['woman_supervillain'],
  // 🦰 red hair
  '1F9B0': ['red_hair'],
  // 🦱 curly hair
  '1F9B1': ['curly_hair'],
  // 🦳 white hair
  '1F9B3': ['white_hair'],
  // 🦲 bald
  '1F9B2': ['no_hair'],
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
  '1F9A0': ['microbe'],
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
  '1F9F1': ['bricks'],
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
  // 🧩 puzzle piece
  '1F9E9': ['jigsaw', 'puzzle_piece'],
  // 🧸 teddy bear
  '1F9F8': ['teddy_bear'],
  // ♟︎ chess pawn
  '265F': ['chess_pawn'],
  // 🧵 thread
  '1F9F5': ['thread'],
  // 🧶 yarn
  '1F9F6': ['yarn'],
  // 🥽 goggles
  '1F97D': ['goggles'],
  // 🥼 lab coat
  '1F97C': ['lab_coat'],
  // 🥾 hiking boot
  '1F97E': ['hiking_boot'],
  // 🥿 flat shoe
  '1F97F': ['flat_shoe', 'womans_flat_shoe'],
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
  // 🧬 dna
  '1F9EC': ['dna', 'double_helix'],
  // 🧴 lotion bottle
  '1F9F4': ['lotion_bottle'],
  // 🧷 safety pin
  '1F9F7': ['safety_pin'],
  // 🧹 broom
  '1F9F9': ['broom'],
  // 🧺 basket
  '1F9FA': ['basket'],
  // 🧻 roll of paper
  '1F9FB': ['roll_of_paper', 'toilet_paper'],
  // 🧼 soap
  '1F9FC': ['soap'],
  // 🧽 sponge
  '1F9FD': ['sponge'],
  // 🧯 fire extinguisher
  '1F9EF': ['fire_extinguisher'],
  // 🧿 nazar amulet
  '1F9FF': ['nazar_amulet'],
  // ♾︎ infinity
  '267E': ['infinity'],
  // 🏴‍☠️ pirate flag
  '1F3F4-200D-2620-FE0F': ['jolly_roger', 'pirate_flag'],

  // VERSION 12
  // 🥱 yawning face
  '1F971': ['yawn', 'yawning', 'yawning_face'],
  // 🤎 brown heart
  '1F90E': ['brown_heart'],
  // 🤍 white heart
  '1F90D': ['white_heart'],
  // 🤏 pinching hand
  '1F90F': ['pinching_hand'],
  // 🦾 mechanical arm
  '1F9BE': ['mechanical_arm'],
  // 🦿 mechanical leg
  '1F9BF': ['mechanical_leg'],
  // 🦻 ear with hearing aid
  '1F9BB': ['ear_with_hearing_aid', 'hearing_aid'],
  // 🧏 deaf person
  '1F9CF': ['deaf_person'],
  // 🧏‍♂️ deaf man
  '1F9CF-200D-2642-FE0F': ['deaf_man'],
  // 🧏‍♀️ deaf woman
  '1F9CF-200D-2640-FE0F': ['deaf_woman'],
  // 🧍 person standing
  '1F9CD': ['person_standing', 'standing'],
  // 🧍‍♂️ man standing
  '1F9CD-200D-2642-FE0F': ['man_standing'],
  // 🧍‍♀️ woman standing
  '1F9CD-200D-2640-FE0F': ['woman_standing'],
  // 🧎 person kneeling
  '1F9CE': ['kneeling', 'person_kneeling'],
  // 🧎‍♂️ man kneeling
  '1F9CE-200D-2642-FE0F': ['man_kneeling'],
  // 🧎‍♀️ woman kneeling
  '1F9CE-200D-2640-FE0F': ['woman_kneeling'],
  // 👨‍🦯 man with white cane
  '1F468-200D-1F9AF': ['man_with_probing_cane', 'man_with_white_cane'],
  // 👩‍🦯 woman with white cane
  '1F469-200D-1F9AF': ['woman_with_probing_cane', 'woman_with_white_cane'],
  // 👨‍🦼 man in motorized wheelchair
  '1F468-200D-1F9BC': ['man_in_motorized_wheelchair'],
  // 👩‍🦼 woman in motorized wheelchair
  '1F469-200D-1F9BC': ['woman_in_motorized_wheelchair'],
  // 👨‍🦽 man in manual wheelchair
  '1F468-200D-1F9BD': ['man_in_manual_wheelchair'],
  // 👩‍🦽 woman in manual wheelchair
  '1F469-200D-1F9BD': ['woman_in_manual_wheelchair'],
  // 🧑‍🤝‍🧑 people holding hands
  '1F9D1-200D-1F91D-200D-1F9D1': ['people_holding_hands'],
  // 🦧 orangutan
  '1F9A7': ['orangutan'],
  // 🦮 guide dog
  '1F9AE': ['guide_dog'],
  // 🐕‍🦺 service dog
  '1F415-200D-1F9BA': ['service_dog'],
  // 🦥 sloth
  '1F9A5': ['sloth'],
  // 🦦 otter
  '1F9A6': ['otter'],
  // 🦨 skunk
  '1F9A8': ['skunk'],
  // 🦩 flamingo
  '1F9A9': ['flamingo'],
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
  '1F9C9': ['mate'],
  // 🧊 ice
  '1F9CA': ['ice', 'ice_cube'],
  // 🛕 hindu temple
  '1F6D5': ['hindu_temple'],
  // 🦽 manual wheelchair
  '1F9BD': ['manual_wheelchair'],
  // 🦼 motorized wheelchair
  '1F9BC': ['motorized_wheelchair'],
  // 🛺 auto rickshaw
  '1F6FA': ['auto_rickshaw'],
  // 🪂 parachute
  '1FA82': ['parachute'],
  // 🪐 ringed planet
  '1FA90': ['ringed_planet', 'saturn'],
  // 🤿 diving mask
  '1F93F': ['diving_mask'],
  // 🪀 yo-yo
  '1FA80': ['yo_yo'],
  // 🪁 kite
  '1FA81': ['kite'],
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
  // 🩰 ballet shoes
  '1FA70': ['ballet_shoes'],
  // 🪕 banjo
  '1FA95': ['banjo'],
  // 🪔 diya lamp
  '1FA94': ['diya_lamp'],
  // 🪓 axe
  '1FA93': ['axe'],
  // 🦯 white cane
  '1F9AF': ['probing_cane', 'white_cane'],
  // 🩸 drop of blood
  '1FA78': ['drop_of_blood'],
  // 🩹 adhesive bandage
  '1FA79': ['adhesive_bandage', 'bandaid'],
  // 🩺 stethoscope
  '1FA7A': ['stethoscope'],
  // 🪑 chair
  '1FA91': ['chair'],
  // 🪒 razor
  '1FA92': ['razor'],
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

  // VERSION 12.1
  // 🧑‍🦰 person: red hair
  '1F9D1-200D-1F9B0': ['red_haired'],
  // 🧑‍🦱 person: curly hair
  '1F9D1-200D-1F9B1': ['curly_haired'],
  // 🧑‍🦳 person: white hair
  '1F9D1-200D-1F9B3': ['white_haired'],
  // 🧑‍🦲 person: bald
  '1F9D1-200D-1F9B2': ['bald'],
  // 🧑‍⚕️ health worker
  '1F9D1-200D-2695-FE0F': ['health_worker'],
  // 🧑‍🎓 student
  '1F9D1-200D-1F393': ['student'],
  // 🧑‍🏫 teacher
  '1F9D1-200D-1F3EB': ['teacher'],
  // 🧑‍⚖️ judge
  '1F9D1-200D-2696-FE0F': ['judge'],
  // 🧑‍🌾 farmer
  '1F9D1-200D-1F33E': ['farmer'],
  // 🧑‍🍳 cook
  '1F9D1-200D-1F373': ['cook'],
  // 🧑‍🔧 mechanic
  '1F9D1-200D-1F527': ['mechanic'],
  // 🧑‍🏭 factory worker
  '1F9D1-200D-1F3ED': ['factory_worker'],
  // 🧑‍💼 office worker
  '1F9D1-200D-1F4BC': ['office_worker'],
  // 🧑‍🔬 scientist
  '1F9D1-200D-1F52C': ['scientist'],
  // 🧑‍💻 technologist
  '1F9D1-200D-1F4BB': ['technologist'],
  // 🧑‍🎤 singer
  '1F9D1-200D-1F3A4': ['singer'],
  // 🧑‍🎨 artist
  '1F9D1-200D-1F3A8': ['artist'],
  // 🧑‍✈️ pilot
  '1F9D1-200D-2708-FE0F': ['pilot'],
  // 🧑‍🚀 astronaut
  '1F9D1-200D-1F680': ['astronaut'],
  // 🧑‍🚒 firefighter
  '1F9D1-200D-1F692': ['firefighter'],
  // 🧑‍🦯 person with white cane
  '1F9D1-200D-1F9AF': ['person_with_probing_cane', 'person_with_white_cane'],
  // 🧑‍🦼 person in motorized wheelchair
  '1F9D1-200D-1F9BC': ['person_in_motorized_wheelchair'],
  // 🧑‍🦽 person in manual wheelchair
  '1F9D1-200D-1F9BD': ['person_in_manual_wheelchair'],

  // VERSION 13
  // 🥲 smiling face with tear
  '1F972': ['smiling_face_with_tear'],
  // 🥸 disguised face
  '1F978': ['disguised', 'disguised_face'],
  // 🤌 pinched fingers
  '1F90C': ['pinch', 'pinched_fingers'],
  // 🫀 anatomical heart
  '1FAC0': ['anatomical_heart'],
  // 🫁 lungs
  '1FAC1': ['lungs'],
  // 🥷 ninja
  '1F977': ['ninja'],
  // 🤵‍♂️ man in tuxedo
  '1F935-200D-2642-FE0F': ['man_in_tuxedo'],
  // 🤵‍♀️ woman in tuxedo
  '1F935-200D-2640-FE0F': ['woman_in_tuxedo'],
  // 👰‍♂️ man with veil
  '1F470-200D-2642-FE0F': ['man_with_veil'],
  // 👰‍♀️ woman with veil
  '1F470-200D-2640-FE0F': ['woman_with_veil'],
  // 👩‍🍼 woman feeding baby
  '1F469-200D-1F37C': ['woman_feeding_baby'],
  // 👨‍🍼 man feeding baby
  '1F468-200D-1F37C': ['man_feeding_baby'],
  // 🧑‍🍼 person feeding baby
  '1F9D1-200D-1F37C': ['person_feeding_baby'],
  // 🧑‍🎄 mx claus
  '1F9D1-200D-1F384': ['mx_claus'],
  // 🫂 people hugging
  '1FAC2': ['people_hugging'],
  // 🐈‍⬛ black cat
  '1F408-200D-2B1B': ['black_cat'],
  // 🦬 bison
  '1F9AC': ['bison'],
  // 🦣 mammoth
  '1F9A3': ['mammoth'],
  // 🦫 beaver
  '1F9AB': ['beaver'],
  // 🐻‍❄️ polar bear
  '1F43B-200D-2744-FE0F': ['polar_bear', 'polar_bear_face'],
  // 🦤 dodo
  '1F9A4': ['dodo'],
  // 🪶 feather
  '1FAB6': ['feather'],
  // 🦭 seal
  '1F9AD': ['seal'],
  // 🪲 beetle
  '1FAB2': ['beetle'],
  // 🪳 cockroach
  '1FAB3': ['cockroach'],
  // 🪰 fly
  '1FAB0': ['fly'],
  // 🪱 worm
  '1FAB1': ['worm'],
  // 🪴 potted plant
  '1FAB4': ['potted_plant'],
  // 🫐 blueberries
  '1FAD0': ['blueberries'],
  // 🫒 olive
  '1FAD2': ['olive'],
  // 🫑 bell pepper
  '1FAD1': ['bell_pepper'],
  // 🫓 flatbread
  '1FAD3': ['flatbread'],
  // 🫔 tamale
  '1FAD4': ['tamale'],
  // 🫕 fondue
  '1FAD5': ['fondue'],
  // 🫖 teapot
  '1FAD6': ['teapot'],
  // 🧋 bubble tea
  '1F9CB': ['boba_drink', 'bubble_tea'],
  // 🪨 rock
  '1FAA8': ['rock'],
  // 🪵 wood
  '1FAB5': ['wood'],
  // 🛖 hut
  '1F6D6': ['hut'],
  // 🛻 pickup truck
  '1F6FB': ['pickup_truck'],
  // 🛼 roller skate
  '1F6FC': ['roller_skate'],
  // 🪄 magic wand
  '1FA84': ['magic_wand'],
  // 🪅 piñata
  '1FA85': ['pinata'],
  // 🪆 nesting dolls
  '1FA86': ['nesting_dolls'],
  // 🪡 sewing needle
  '1FAA1': ['sewing_needle'],
  // 🪢 knot
  '1FAA2': ['knot'],
  // 🩴 thong sandal
  '1FA74': ['thong_sandal'],
  // 🪖 military helmet
  '1FA96': ['military_helmet'],
  // 🪗 accordion
  '1FA97': ['accordion'],
  // 🪘 long drum
  '1FA98': ['long_drum'],
  // 🪙 coin
  '1FA99': ['coin'],
  // 🪃 boomerang
  '1FA83': ['boomerang'],
  // 🪚 carpentry saw
  '1FA9A': ['carpentry_saw'],
  // 🪛 screwdriver
  '1FA9B': ['screwdriver'],
  // 🪝 hook
  '1FA9D': ['hook'],
  // 🪜 ladder
  '1FA9C': ['ladder'],
  // 🛗 elevator
  '1F6D7': ['elevator'],
  // 🪞 mirror
  '1FA9E': ['mirror'],
  // 🪟 window
  '1FA9F': ['window'],
  // 🪠 plunger
  '1FAA0': ['plunger'],
  // 🪤 mouse trap
  '1FAA4': ['mouse_trap'],
  // 🪣 bucket
  '1FAA3': ['bucket'],
  // 🪥 toothbrush
  '1FAA5': ['toothbrush'],
  // 🪦 headstone
  '1FAA6': ['headstone'],
  // 🪧 placard
  '1FAA7': ['placard'],
  // ⚧︎ transgender symbol
  '26A7': ['transgender_symbol'],
  // 🏳️‍⚧️ transgender flag
  '1F3F3-FE0F-200D-26A7-FE0F': ['transgender_flag'],

  // VERSION 13.1
  // 😶‍🌫️ face in clouds
  '1F636-200D-1F32B-FE0F': ['in_clouds'],
  // 😮‍💨 face exhaling
  '1F62E-200D-1F4A8': ['exhale', 'exhaling'],
  // 😵‍💫 face with spiral eyes
  '1F635-200D-1F4AB': ['dizzy_eyes'],
  // ❤️‍🔥 heart on fire
  '2764-FE0F-200D-1F525': ['heart_on_fire'],
  // ❤️‍🩹 mending heart
  '2764-FE0F-200D-1FA79': ['mending_heart'],
  // 🧔‍♂️ man: beard
  '1F9D4-200D-2642-FE0F': ['man_bearded'],
  // 🧔‍♀️ woman: beard
  '1F9D4-200D-2640-FE0F': ['woman_bearded'],

  // VERSION 14
  // 🫠 melting face
  '1FAE0': ['melt', 'melting_face'],
  // 🫢 face with open eyes and hand over mouth
  '1FAE2': ['face_with_open_eyes_hand_over_mouth', 'gasp'],
  // 🫣 face with peeking eye
  '1FAE3': ['face_with_peeking_eye', 'peek'],
  // 🫡 saluting face
  '1FAE1': ['salute', 'saluting_face'],
  // 🫥 dotted line face
  '1FAE5': ['dotted_line_face'],
  // 🫤 face with diagonal mouth
  '1FAE4': ['face_with_diagonal_mouth'],
  // 🥹 face holding back tears
  '1F979': ['face_holding_back_tears', 'watery_eyes'],
  // 🫱 rightwards hand
  '1FAF1': ['rightwards_hand'],
  // 🫲 leftwards hand
  '1FAF2': ['leftwards_hand'],
  // 🫳 palm down hand
  '1FAF3': ['palm_down'],
  // 🫴 palm up hand
  '1FAF4': ['palm_up'],
  // 🫰 hand with index finger and thumb crossed
  '1FAF0': ['hand_with_index_finger_and_thumb_crossed'],
  // 🫵 index pointing at the viewer
  '1FAF5': ['point_forward'],
  // 🫶 heart hands
  '1FAF6': ['heart_hands'],
  // 🫦 biting lip
  '1FAE6': ['biting_lip'],
  // 🫅 person with crown
  '1FAC5': ['person_with_crown', 'royalty'],
  // 🫃 pregnant man
  '1FAC3': ['pregnant_man'],
  // 🫄 pregnant person
  '1FAC4': ['pregnant_person'],
  // 🧌 troll
  '1F9CC': ['troll'],
  // 🪸 coral
  '1FAB8': ['coral'],
  // 🪷 lotus
  '1FAB7': ['lotus'],
  // 🪹 empty nest
  '1FAB9': ['empty_nest', 'nest'],
  // 🪺 nest with eggs
  '1FABA': ['nest_with_eggs'],
  // 🫘 beans
  '1FAD8': ['beans'],
  // 🫗 pouring liquid
  '1FAD7': ['pour', 'pouring_liquid'],
  // 🫙 jar
  '1FAD9': ['jar'],
  // 🛝 playground slide
  '1F6DD': ['playground_slide', 'slide'],
  // 🛞 wheel
  '1F6DE': ['wheel'],
  // 🛟 ring buoy
  '1F6DF': ['lifebuoy', 'ring_buoy'],
  // 🪩 mirror ball
  '1FAA9': ['disco', 'disco_ball', 'mirror_ball'],
  // 🪫 low battery
  '1FAAB': ['low_battery'],
  // 🩼 crutch
  '1FA7C': ['crutch'],
  // 🩻 x-ray
  '1FA7B': ['x-ray', 'xray'],
  // 🫧 bubbles
  '1FAE7': ['bubbles'],
  // 🪬 hamsa
  '1FAAC': ['hamsa'],
  // 🪪 identification card
  '1FAAA': ['id_card'],
  // 🟰 heavy equals sign
  '1F7F0': ['heavy_equals_sign'],

  // VERSION 15
  // 🫨 shaking face
  '1FAE8': ['shaking', 'shaking_face'],
  // 🩷 pink heart
  '1FA77': ['pink_heart'],
  // 🩵 light blue heart
  '1FA75': ['light_blue_heart'],
  // 🩶 grey heart
  '1FA76': ['gray_heart', 'grey_heart'],
  // 🫷 leftwards pushing hand
  '1FAF7': ['leftwards_pushing_hand'],
  // 🫸 rightwards pushing hand
  '1FAF8': ['rightwards_pushing_hand'],
  // 🫎 moose
  '1FACE': ['moose'],
  // 🫏 donkey
  '1FACF': ['donkey'],
  // 🪽 wing
  '1FABD': ['wing'],
  // 🐦‍⬛ black bird
  '1F426-200D-2B1B': ['black_bird'],
  // 🪿 goose
  '1FABF': ['goose'],
  // 🪼 jellyfish
  '1FABC': ['jellyfish'],
  // 🪻 hyacinth
  '1FABB': ['hyacinth'],
  // 🫚 ginger root
  '1FADA': ['ginger'],
  // 🫛 pea pod
  '1FADB': ['pea'],
  // 🪭 folding hand fan
  '1FAAD': ['folding_fan'],
  // 🪮 hair pick
  '1FAAE': ['hair_pick'],
  // 🪇 maracas
  '1FA87': ['maracas'],
  // 🪈 flute
  '1FA88': ['flute'],
  // 🪯 khanda
  '1FAAF': ['khanda'],
  // 🛜 wireless
  '1F6DC': ['wireless'],

  // VERSION 15.1
  // 🙂‍↔️ head shaking horizontally
  '1F642-200D-2194-FE0F': ['head_shaking_horizontally'],
  // 🙂‍↕️ head shaking vertically
  '1F642-200D-2195-FE0F': ['head_shaking_vertically'],
  // 🚶‍➡️ person walking facing right
  '1F6B6-200D-27A1-FE0F': ['person_walking_right'],
  // 🚶‍♀️‍➡️ woman walking facing right
  '1F6B6-200D-2640-FE0F-200D-27A1-FE0F': ['woman_walking_right'],
  // 🚶‍♂️‍➡️ man walking facing right
  '1F6B6-200D-2642-FE0F-200D-27A1-FE0F': ['man_walking_right'],
  // 🧎‍➡️ person kneeling facing right
  '1F9CE-200D-27A1-FE0F': ['person_kneeling_right'],
  // 🧎‍♀️‍➡️ woman kneeling facing right
  '1F9CE-200D-2640-FE0F-200D-27A1-FE0F': ['woman_kneeling_right'],
  // 🧎‍♂️‍➡️ man kneeling facing right
  '1F9CE-200D-2642-FE0F-200D-27A1-FE0F': ['man_kneeling_right'],
  // 🧑‍🦯‍➡️ person with white cane facing right
  '1F9D1-200D-1F9AF-200D-27A1-FE0F': ['person_with_white_cane_right'],
  // 👨‍🦯‍➡️ man with white cane facing right
  '1F468-200D-1F9AF-200D-27A1-FE0F': ['man_with_white_cane_right'],
  // 👩‍🦯‍➡️ woman with white cane facing right
  '1F469-200D-1F9AF-200D-27A1-FE0F': ['woman_with_white_cane_right'],
  // 🧑‍🦼‍➡️ person in motorized wheelchair facing right
  '1F9D1-200D-1F9BC-200D-27A1-FE0F': ['person_in_motorized_wheelchair_right'],
  // 👨‍🦼‍➡️ man in motorized wheelchair facing right
  '1F468-200D-1F9BC-200D-27A1-FE0F': ['man_in_motorized_wheelchair_right'],
  // 👩‍🦼‍➡️ woman in motorized wheelchair facing right
  '1F469-200D-1F9BC-200D-27A1-FE0F': ['woman_in_motorized_wheelchair_right'],
  // 🧑‍🦽‍➡️ person in manual wheelchair facing right
  '1F9D1-200D-1F9BD-200D-27A1-FE0F': ['person_in_manual_wheelchair_right'],
  // 👨‍🦽‍➡️ man in manual wheelchair facing right
  '1F468-200D-1F9BD-200D-27A1-FE0F': ['man_in_manual_wheelchair_right'],
  // 👩‍🦽‍➡️ woman in manual wheelchair facing right
  '1F469-200D-1F9BD-200D-27A1-FE0F': ['woman_in_manual_wheelchair_right'],
  // 🏃‍➡️ person running facing right
  '1F3C3-200D-27A1-FE0F': ['person_running_right'],
  // 🏃‍♀️‍➡️ woman running facing right
  '1F3C3-200D-2640-FE0F-200D-27A1-FE0F': ['woman_running_right'],
  // 🏃‍♂️‍➡️ man running facing right
  '1F3C3-200D-2642-FE0F-200D-27A1-FE0F': ['man_running_right'],
  // 🧑‍🧑‍🧒 family: adult, adult, child
  '1F9D1-200D-1F9D1-200D-1F9D2': ['family_aac'],
  // 🧑‍🧑‍🧒‍🧒 family: adult, adult, child, child
  '1F9D1-200D-1F9D1-200D-1F9D2-200D-1F9D2': ['family_aacc'],
  // 🧑‍🧒 family: adult, child
  '1F9D1-200D-1F9D2': ['family_ac'],
  // 🧑‍🧒‍🧒 family: adult, child, child
  '1F9D1-200D-1F9D2-200D-1F9D2': ['family_acc'],
  // 🐦‍🔥 phoenix
  '1F426-200D-1F525': ['phoenix'],
  // 🍋‍🟩 lime
  '1F34B-200D-1F7E9': ['lime'],
  // 🍄‍🟫 brown mushroom
  '1F344-200D-1F7EB': ['brown_mushroom'],
  // ⛓️‍💥 broken chain
  '26D3-FE0F-200D-1F4A5': ['broken_chain'],
};
