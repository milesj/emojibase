/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable */

/**
 * Official Emojibase shortcodes list.
 *
 * NAMING GUIDELINES
 *
 *  - Gender neutral emoji must be prefixed with "person_",
 *    while female emoji use "woman_", and male "man_".
 *    Plural forms use "people_", "women_", and "men_".
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

module.exports = {
  // 😀 grinning face
  '1F600': ['gleeful'],
  // 😁 grinning face with smiling eyes
  '1F601': ['blissful', 'grin'],
  // 😂 face with tears of joy
  '1F602': ['joyful', 'haha'],
  // 🤣 rolling on the floor laughing
  '1F923': ['entertained', 'rofl'],
  // 😃 smiling face with open mouth
  '1F603': ['glad', 'smile'],
  // 😄 smiling face with open mouth & smiling eyes
  '1F604': ['happy'],
  // 😅 smiling face with open mouth & cold sweat
  '1F605': ['embarassed'],
  // 😆 smiling face with open mouth & closed eyes
  '1F606': ['amused', 'laugh', 'lol'],
  // 😉 winking face
  '1F609': ['coy', 'wink'],
  // 😊 smiling face with smiling eyes
  '1F60A': ['anxious', 'blush'],
  // 😋 face savouring delicious food
  '1F60B': ['yum', 'savour'],
  // 😎 smiling face with sunglasses
  '1F60E': ['confident'],
  // 😍 smiling face with heart-eyes
  '1F60D': ['lovestruck'],
  // 😘 face blowing a kiss
  '1F618': ['flirty'],
  // 😗 kissing face
  '1F617': ['kiss'],
  // 😙 kissing face with smiling eyes
  '1F619': ['happy_kiss'],
  // 😚 kissing face with closed eyes
  '1F61A': ['loving_kiss'],
  // ☺️ smiling face
  '263A': ['relaxed'],
  // 🙂 slightly smiling face
  '1F642': ['pleased'],
  // 🤗 hugging face
  '1F917': ['hugging'],
  // 🤩 star-struck
  '1F929': ['starstruck'],
  // 🤔 thinking face
  '1F914': ['curious', 'thinking'],
  // 🤨 face with raised eyebrow
  '1F928': ['contempt'],
  // 😐️ neutral face
  '1F610': ['indifferent', 'neutral'],
  // 😑 expressionless face
  '1F611': ['apathetic', 'expressionless'],
  // 😶 face without mouth
  '1F636': ['vacant', 'no_mouth'],
  // 🙄 face with rolling eyes
  '1F644': ['disbelief'],
  // 😏 smirking face
  '1F60F': ['cocky', 'smirk'],
  // 😣 persevering face
  '1F623': ['persevered'],
  // 😥 disappointed but relieved face
  '1F625': ['hopeful'],
  // 😮 face with open mouth
  '1F62E': ['surprised'],
  // 🤐 zipper-mouth face
  '1F910': ['silenced', 'zipper_mouth'],
  // 😯 hushed face
  '1F62F': ['hushed'],
  // 😪 sleepy face
  '1F62A': ['sleepy'],
  // 😫 tired face
  '1F62B': ['tired'],
  // 😴 sleeping face
  '1F634': ['exhausted', 'sleeping'],
  // 😌 relieved face
  '1F60C': ['relieved'],
  // 😛 face with stuck-out tongue
  '1F61B': ['playful', 'tongue_out'],
  // 😜 face with stuck-out tongue & winking eye
  '1F61C': ['mischievous'],
  // 😝 face with stuck-out tongue & closed eyes
  '1F61D': ['facetious', 'lmao'],
  // 🤤 drooling face
  '1F924': ['drooling'],
  // 😒 unamused face
  '1F612': ['unamused'],
  // 😓 face with cold sweat
  '1F613': ['shamed'],
  // 😔 pensive face
  '1F614': ['pensive'],
  // 😕 confused face
  '1F615': ['confused'],
  // 🙃 upside-down face
  '1F643': ['ecstatic', 'upside_down'],
  // 🤑 money-mouth face
  '1F911': ['pretentious', 'money_mouth'],
  // 😲 astonished face
  '1F632': ['astonished'],
  // ☹️ frowning face
  '2639': ['sad', 'frowning'],
  // 🙁 slightly frowning face
  '1F641': ['cheerless'],
  // 😖 confounded face
  '1F616': ['confounded'],
  // 😞 disappointed face
  '1F61E': ['disappointed'],
  // 😟 worried face
  '1F61F': ['worried'],
  // 😤 face with steam from nose
  '1F624': ['annoyed', 'hrmph'],
  // 😢 crying face
  '1F622': ['upset', 'cry'],
  // 😭 loudly crying face
  '1F62D': ['distressed', 'sob'],
  // 😦 frowning face with open mouth
  '1F626': ['bored'],
  // 😧 anguished face
  '1F627': ['anguished', 'wtf'],
  // 😨 fearful face
  '1F628': ['fearful'],
  // 😩 weary face
  '1F629': ['weary'],
  // 🤯 exploding head
  '1F92F': ['shocked', 'exploding_head'],
  // 😬 grimacing face
  '1F62C': ['grimaced'],
  // 😰 face with open mouth & cold sweat
  '1F630': ['frustrated'],
  // 😱 face screaming in fear
  '1F631': ['frightened', 'scream'],
  // 😳 flushed face
  '1F633': ['flushed'],
  // 🤪 crazy face
  '1F92A': ['crazy'],
  // 😵 dizzy face
  '1F635': ['dizzy'],
  // 😡 pouting face
  '1F621': ['enraged', 'pout'],
  // 😠 angry face
  '1F620': ['angry'],
  // 🤬 face with symbols over mouth
  '1F92C': ['censored'],
  // 😷 face with medical mask
  '1F637': ['ill', 'mask'],
  // 🤒 face with thermometer
  '1F912': ['sick'],
  // 🤕 face with head-bandage
  '1F915': ['injured'],
  // 🤢 nauseated face
  '1F922': ['nauseated'],
  // 🤮 face vomiting
  '1F92E': ['vomiting'],
  // 🤧 sneezing face
  '1F927': ['sneezing'],
  // 😇 smiling face with halo
  '1F607': ['innocent', 'halo'],
  // 🤠 cowboy hat face
  '1F920': ['cowboy'],
  // 🤡 clown face
  '1F921': ['clown'],
  // 🤥 lying face
  '1F925': ['lying'],
  // 🤫 shushing face
  '1F92B': ['shushing'],
  // 🤭 face with hand over mouth
  '1F92D': ['gasp'],
  // 🧐 face with monocle
  '1F9D0': ['monocle'],
  // 🤓 nerd face
  '1F913': ['nerd'],
  // 😈 smiling face with horns
  '1F608': ['imp'],
  // 👿 angry face with horns
  '1F47F': ['angry_imp'],
  // 👹 ogre
  '1F479': ['ogre'],
  // 👺 goblin
  '1F47A': ['goblin'],
  // 💀 skull
  '1F480': ['skull'],
  // ☠️ skull and crossbones
  '2620': ['crossbones'],
  // 👻 ghost
  '1F47B': ['ghost'],
  // 👽️ alien
  '1F47D': ['alien'],
  // 👾 alien monster
  '1F47E': ['alien_monster', 'space_invader'],
  // 🤖 robot face
  '1F916': ['robot'],
  // 💩 pile of poo
  '1F4A9': ['poop', 'poo', 'shit'],
  // 😺 smiling cat face with open mouth
  '1F63A': ['smiling_cat'],
  // 😸 grinning cat face with smiling eyes
  '1F638': ['grinning_cat'],
  // 😹 cat face with tears of joy
  '1F639': ['joyful_cat'],
  // 😻 smiling cat face with heart-eyes
  '1F63B': ['lovestruck_cat'],
  // 😼 cat face with wry smile
  '1F63C': ['smirking_cat'],
  // 😽 kissing cat face with closed eyes
  '1F63D': ['kissing_cat'],
  // 🙀 weary cat face
  '1F640': ['weary_cat'],
  // 😿 crying cat face
  '1F63F': ['crying_cat'],
  // 😾 pouting cat face
  '1F63E': ['pouting_cat'],
  // 🙈 see-no-evil monkey
  '1F648': ['see_no_evil'],
  // 🙉 hear-no-evil monkey
  '1F649': ['hear_no_evil'],
  // 🙊 speak-no-evil monkey
  '1F64A': ['speak_no_evil'],
  // 👶 baby
  '1F476': ['baby'],
  // 🧒 child
  '1F9D2': ['child'],
  // 👦 boy
  '1F466': ['boy'],
  // 👧 girl
  '1F467': ['girl'],
  // 🧑 adult
  '1F9D1': ['adult'],
  // 👨 man
  '1F468': ['man'],
  // 👩 woman
  '1F469': ['woman'],
  // 🧓 older adult
  '1F9D3': ['older_adult'],
  // 👴 old man
  '1F474': ['older_man'],
  // 👵 old woman
  '1F475': ['older_woman'],
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
  // 👮 police officer
  '1F46E': ['police_officer'],
  // 👮‍♂️ man police officer
  '1F46E-200D-2642-FE0F': ['man_police_officer'],
  // 👮‍♀️ woman police officer
  '1F46E-200D-2640-FE0F': ['woman_police_officer'],
  // 🕵️ detective
  '1F575': ['detective'],
  // 🕵️‍♂️ man detective
  '1F575-FE0F-200D-2642-FE0F': ['man_detective'],
  // 🕵️‍♀️ woman detective
  '1F575-FE0F-200D-2640-FE0F': ['woman_detective'],
  // 💂 guard
  '1F482': ['guard'],
  // 💂‍♂️ man guard
  '1F482-200D-2642-FE0F': ['man_guard'],
  // 💂‍♀️ woman guard
  '1F482-200D-2640-FE0F': ['woman_guard'],
  // 👷 construction worker
  '1F477': ['construction_worker'],
  // 👷‍♂️ man construction worker
  '1F477-200D-2642-FE0F': ['man_construction_worker'],
  // 👷‍♀️ woman construction worker
  '1F477-200D-2640-FE0F': ['woman_construction_worker'],
  // 🤴 prince
  '1F934': ['prince'],
  // 👸 princess
  '1F478': ['princess'],
  // 👳 person wearing turban
  '1F473': ['person_turban'],
  // 👳‍♂️ man wearing turban
  '1F473-200D-2642-FE0F': ['man_turban'],
  // 👳‍♀️ woman wearing turban
  '1F473-200D-2640-FE0F': ['woman_turban'],
  // 👲 man with Chinese cap
  '1F472': ['man_chinese_cap'],
  // 🧕 woman with headscarf
  '1F9D5': ['woman_headscarf'],
  // 🧔 bearded person
  '1F9D4': ['bearded_person'],
  // 👱 blond-haired person
  '1F471': ['blond_person'],
  // 👱‍♂️ blond-haired man
  '1F471-200D-2642-FE0F': ['blond_man'],
  // 👱‍♀️ blond-haired woman
  '1F471-200D-2640-FE0F': ['blond_woman'],
  // 🤵 man in tuxedo
  '1F935': ['man_tuxedo'],
  // 👰 bride with veil
  '1F470': ['bride_veil'],
  // 🤰 pregnant woman
  '1F930': ['pregnant_woman'],
  // 🤱 breast-feeding
  '1F931': ['breast_feeding'],
  // 👼 baby angel
  '1F47C': ['angel'],
  // 🎅 Santa Claus
  '1F385': ['santa'],
  // 🤶 Mrs. Claus
  '1F936': ['mrs_claus'],
  // 🧙 mage
  '1F9D9': ['mage'],
  // 🧙‍♀️ woman mage
  '1F9D9-200D-2640-FE0F': ['woman_mage'],
  // 🧙‍♂️ man mage
  '1F9D9-200D-2642-FE0F': ['man_mage'],
  // 🧚 fairy
  '1F9DA': ['fairy'],
  // 🧚‍♀️ woman fairy
  '1F9DA-200D-2640-FE0F': ['woman_fairy'],
  // 🧚‍♂️ man fairy
  '1F9DA-200D-2642-FE0F': ['man_fairy'],
  // 🧛 vampire
  '1F9DB': ['vampire'],
  // 🧛‍♀️ woman vampire
  '1F9DB-200D-2640-FE0F': ['woman_vampire'],
  // 🧛‍♂️ man vampire
  '1F9DB-200D-2642-FE0F': ['man_vampire'],
  // 🧜 merperson
  '1F9DC': ['merperson'],
  // 🧜‍♀️ mermaid
  '1F9DC-200D-2640-FE0F': ['mermaid'],
  // 🧜‍♂️ merman
  '1F9DC-200D-2642-FE0F': ['merman'],
  // 🧝 elf
  '1F9DD': ['elf'],
  // 🧝‍♀️ woman elf
  '1F9DD-200D-2640-FE0F': ['woman_elf'],
  // 🧝‍♂️ man elf
  '1F9DD-200D-2642-FE0F': ['man_elf'],
  // 🧞 genie
  '1F9DE': ['genie'],
  // 🧞‍♀️ woman genie
  '1F9DE-200D-2640-FE0F': ['woman_genie'],
  // 🧞‍♂️ man genie
  '1F9DE-200D-2642-FE0F': ['man_genie'],
  // 🧟 zombie
  '1F9DF': ['zombie'],
  // 🧟‍♀️ woman zombie
  '1F9DF-200D-2640-FE0F': ['woman_zombie'],
  // 🧟‍♂️ man zombie
  '1F9DF-200D-2642-FE0F': ['man_zombie'],
  // 🙍 person frowning
  '1F64D': ['person_frowning'],
  // 🙍‍♂️ man frowning
  '1F64D-200D-2642-FE0F': ['man_frowning'],
  // 🙍‍♀️ woman frowning
  '1F64D-200D-2640-FE0F': ['woman_frowning'],
  // 🙎 person pouting
  '1F64E': ['person_pouting'],
  // 🙎‍♂️ man pouting
  '1F64E-200D-2642-FE0F': ['man_pouting'],
  // 🙎‍♀️ woman pouting
  '1F64E-200D-2640-FE0F': ['woman_pouting'],
  // 🙅 person gesturing NO
  '1F645': ['person_gesturing_no'],
  // 🙅‍♂️ man gesturing NO
  '1F645-200D-2642-FE0F': ['man_gesturing_no'],
  // 🙅‍♀️ woman gesturing NO
  '1F645-200D-2640-FE0F': ['woman_gesturing_no'],
  // 🙆 person gesturing OK
  '1F646': ['person_gesturing_ok'],
  // 🙆‍♂️ man gesturing OK
  '1F646-200D-2642-FE0F': ['man_gesturing_ok'],
  // 🙆‍♀️ woman gesturing OK
  '1F646-200D-2640-FE0F': ['woman_gesturing_ok'],
  // 💁 person tipping hand
  '1F481': ['person_tipping_hand'],
  // 💁‍♂️ man tipping hand
  '1F481-200D-2642-FE0F': ['man_tipping_hand'],
  // 💁‍♀️ woman tipping hand
  '1F481-200D-2640-FE0F': ['woman_tipping_hand'],
  // 🙋 person raising hand
  '1F64B': ['person_raising_hand'],
  // 🙋‍♂️ man raising hand
  '1F64B-200D-2642-FE0F': ['man_raising_hand'],
  // 🙋‍♀️ woman raising hand
  '1F64B-200D-2640-FE0F': ['woman_raising_hand'],
  // 🙇 person bowing
  '1F647': ['person_bowing'],
  // 🙇‍♂️ man bowing
  '1F647-200D-2642-FE0F': ['man_bowing'],
  // 🙇‍♀️ woman bowing
  '1F647-200D-2640-FE0F': ['woman_bowing'],
  // 🤦 person facepalming
  '1F926': ['person_facepalming'],
  // 🤦‍♂️ man facepalming
  '1F926-200D-2642-FE0F': ['man_facepalming'],
  // 🤦‍♀️ woman facepalming
  '1F926-200D-2640-FE0F': ['woman_facepalming'],
  // 🤷 person shrugging
  '1F937': ['person_shrugging'],
  // 🤷‍♂️ man shrugging
  '1F937-200D-2642-FE0F': ['man_shrugging'],
  // 🤷‍♀️ woman shrugging
  '1F937-200D-2640-FE0F': ['woman_shrugging'],
  // 💆 person getting massage
  '1F486': ['person_getting_massage'],
  // 💆‍♂️ man getting massage
  '1F486-200D-2642-FE0F': ['man_getting_face_massage'],
  // 💆‍♀️ woman getting massage
  '1F486-200D-2640-FE0F': ['woman_getting_face_massage'],
  // 💇 person getting haircut
  '1F487': ['person_getting_haircut'],
  // 💇‍♂️ man getting haircut
  '1F487-200D-2642-FE0F': ['man_getting_haircut'],
  // 💇‍♀️ woman getting haircut
  '1F487-200D-2640-FE0F': ['woman_getting_haircut'],
  // 🚶 person walking
  '1F6B6': ['person_walking'],
  // 🚶‍♂️ man walking
  '1F6B6-200D-2642-FE0F': ['man_walking'],
  // 🚶‍♀️ woman walking
  '1F6B6-200D-2640-FE0F': ['woman_walking'],
  // 🏃 person running
  '1F3C3': ['person_running'],
  // 🏃‍♂️ man running
  '1F3C3-200D-2642-FE0F': ['man_running'],
  // 🏃‍♀️ woman running
  '1F3C3-200D-2640-FE0F': ['woman_running'],
  // 💃 woman dancing
  '1F483': ['dancer'],
  // 🕺 man dancing
  '1F57A': ['man_dancing'],
  // 👯 people with bunny ears partying
  '1F46F': ['people_bunny_ears_partying'],
  // 👯‍♂️ men with bunny ears partying
  '1F46F-200D-2642-FE0F': ['men_bunny_ears_partying'],
  // 👯‍♀️ women with bunny ears partying
  '1F46F-200D-2640-FE0F': ['women_bunny_ears_partying'],
  // 🧖 person in steamy room
  '1F9D6': ['person_steamy_room'],
  // 🧖‍♀️ woman in steamy room
  '1F9D6-200D-2640-FE0F': ['woman_steamy_room'],
  // 🧖‍♂️ man in steamy room
  '1F9D6-200D-2642-FE0F': ['man_steamy_room'],
  // 🧗 person climbing
  '1F9D7': ['person_climbing'],
  // 🧗‍♀️ woman climbing
  '1F9D7-200D-2640-FE0F': ['woman_climbing'],
  // 🧗‍♂️ man climbing
  '1F9D7-200D-2642-FE0F': ['man_climbing'],
  // 🧘 person in lotus position
  '1F9D8': ['person_lotus_position'],
  // 🧘‍♀️ woman in lotus position
  '1F9D8-200D-2640-FE0F': ['woman_lotus_position'],
  // 🧘‍♂️ man in lotus position
  '1F9D8-200D-2642-FE0F': ['man_lotus_position'],
  // 🛀 person taking bath
  '1F6C0': ['bath'],
  // 🛌 person in bed
  '1F6CC': ['in_bed'],
  // 🕴️ man in business suit levitating
  '1F574': ['levitate'],
  // 🗣️ speaking head
  '1F5E3': ['speaking_head'],
  // 👤 bust in silhouette
  '1F464': ['bust_silhouette'],
  // 👥 busts in silhouette
  '1F465': ['busts_silhouette'],
  // 🤺 person fencing
  '1F93A': ['person_fencing'],
  // 🏇 horse racing
  '1F3C7': ['horse_racing'],
  // ⛷️ skier
  '26F7': ['skier'],
  // 🏂️ snowboarder
  '1F3C2': ['snowboarder'],
  // 🏌️ person golfing
  '1F3CC': ['person_golfing'],
  // 🏌️‍♂️ man golfing
  '1F3CC-FE0F-200D-2642-FE0F': ['man_golfing'],
  // 🏌️‍♀️ woman golfing
  '1F3CC-FE0F-200D-2640-FE0F': ['woman_golfing'],
  // 🏄️ person surfing
  '1F3C4': ['person_surfing'],
  // 🏄‍♂️ man surfing
  '1F3C4-200D-2642-FE0F': ['man_surfing'],
  // 🏄‍♀️ woman surfing
  '1F3C4-200D-2640-FE0F': ['woman_surfing'],
  // 🚣 person rowing boat
  '1F6A3': ['person_rowing_boat'],
  // 🚣‍♂️ man rowing boat
  '1F6A3-200D-2642-FE0F': ['man_rowing_boat'],
  // 🚣‍♀️ woman rowing boat
  '1F6A3-200D-2640-FE0F': ['woman_rowing_boat'],
  // 🏊️ person swimming
  '1F3CA': ['person_swimming'],
  // 🏊‍♂️ man swimming
  '1F3CA-200D-2642-FE0F': ['man_swimming'],
  // 🏊‍♀️ woman swimming
  '1F3CA-200D-2640-FE0F': ['woman_swimming'],
  // ⛹️ person bouncing ball
  '26F9': ['person_bouncing_ball'],
  // ⛹️‍♂️ man bouncing ball
  '26F9-FE0F-200D-2642-FE0F': ['man_bouncing_ball'],
  // ⛹️‍♀️ woman bouncing ball
  '26F9-FE0F-200D-2640-FE0F': ['woman_bouncing_ball'],
  // 🏋️ person lifting weights
  '1F3CB': ['person_lifting_weights'],
  // 🏋️‍♂️ man lifting weights
  '1F3CB-FE0F-200D-2642-FE0F': ['man_lifting_weights'],
  // 🏋️‍♀️ woman lifting weights
  '1F3CB-FE0F-200D-2640-FE0F': ['woman_lifting_weights'],
  // 🚴 person biking
  '1F6B4': ['person_biking'],
  // 🚴‍♂️ man biking
  '1F6B4-200D-2642-FE0F': ['man_biking'],
  // 🚴‍♀️ woman biking
  '1F6B4-200D-2640-FE0F': ['woman_biking'],
  // 🚵 person mountain biking
  '1F6B5': ['person_mountain_biking'],
  // 🚵‍♂️ man mountain biking
  '1F6B5-200D-2642-FE0F': ['man_mountain_biking'],
  // 🚵‍♀️ woman mountain biking
  '1F6B5-200D-2640-FE0F': ['woman_mountain_biking'],
  // 🏎️ racing car
  '1F3CE': ['race_car'],
  // 🏍️ motorcycle
  '1F3CD': ['motorcycle'],
  // 🤸 person cartwheeling
  '1F938': ['person_cartwheel'],
  // 🤸‍♂️ man cartwheeling
  '1F938-200D-2642-FE0F': ['man_cartwheeling'],
  // 🤸‍♀️ woman cartwheeling
  '1F938-200D-2640-FE0F': ['woman_cartwheeling'],
  // 🤼 people wrestling
  '1F93C': ['people_wrestling'],
  // 🤼‍♂️ men wrestling
  '1F93C-200D-2642-FE0F': ['men_wrestling'],
  // 🤼‍♀️ women wrestling
  '1F93C-200D-2640-FE0F': ['women_wrestling'],
  // 🤽 person playing water polo
  '1F93D': ['person_water_polo'],
  // 🤽‍♂️ man playing water polo
  '1F93D-200D-2642-FE0F': ['man_water_polo'],
  // 🤽‍♀️ woman playing water polo
  '1F93D-200D-2640-FE0F': ['woman_water_polo'],
  // 🤾 person playing handball
  '1F93E': ['person_handball'],
  // 🤾‍♂️ man playing handball
  '1F93E-200D-2642-FE0F': ['man_handball'],
  // 🤾‍♀️ woman playing handball
  '1F93E-200D-2640-FE0F': ['woman_handball'],
  // 🤹 person juggling
  '1F939': ['person_juggling'],
  // 🤹‍♂️ man juggling
  '1F939-200D-2642-FE0F': ['man_juggling'],
  // 🤹‍♀️ woman juggling
  '1F939-200D-2640-FE0F': ['woman_juggling'],
  // 👫 man and woman holding hands
  '1F46B': ['holding_hands_mw', 'holding_hands_wm'],
  // 👬 two men holding hands
  '1F46C': ['holding_hands_mm'],
  // 👭 two women holding hands
  '1F46D': ['holding_hands_ww'],
  // 💏 kiss
  '1F48F': ['couple'],
  // 👩‍❤️‍💋‍👨 woman, red heart, kiss mark, man
  '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468': ['kiss_mw', 'kiss_wm'],
  // 👨‍❤️‍💋‍👨 man, red heart, kiss mark
  '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468': ['kiss_mm'],
  // 👩‍❤️‍💋‍👩 woman, red heart, kiss mark
  '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469': ['kiss_ww'],
  // 💑 couple with heart
  '1F491': ['couple_heart'],
  // 👩‍❤️‍👨 woman, red heart, man
  '1F469-200D-2764-FE0F-200D-1F468': ['couple_mw', 'couple_wm'],
  // 👨‍❤️‍👨 man, red heart
  '1F468-200D-2764-FE0F-200D-1F468': ['couple_mm'],
  // 👩‍❤️‍👩 woman, red heart
  '1F469-200D-2764-FE0F-200D-1F469': ['couple_ww'],
  // 👪️ family
  '1F46A': ['family'],
  // 👨‍👩‍👦 man, woman, boy
  '1F468-200D-1F469-200D-1F466': ['family_mwb'],
  // 👨‍👩‍👧 man, woman, girl
  '1F468-200D-1F469-200D-1F467': ['family_mwg'],
  // 👨‍👩‍👧‍👦 man, woman, girl, boy
  '1F468-200D-1F469-200D-1F467-200D-1F466': ['family_mwgb'],
  // 👨‍👩‍👦‍👦 man, woman, boy, boy
  '1F468-200D-1F469-200D-1F466-200D-1F466': ['family_mwbb'],
  // 👨‍👩‍👧‍👧 man, woman, girl, girl
  '1F468-200D-1F469-200D-1F467-200D-1F467': ['family_mwgg'],
  // 👨‍👨‍👦 man, man, boy
  '1F468-200D-1F468-200D-1F466': ['family_mmb'],
  // 👨‍👨‍👧 man, man, girl
  '1F468-200D-1F468-200D-1F467': ['family_mmg'],
  // 👨‍👨‍👧‍👦 man, man, girl, boy
  '1F468-200D-1F468-200D-1F467-200D-1F466': ['family_mmgb'],
  // 👨‍👨‍👦‍👦 man, man, boy, boy
  '1F468-200D-1F468-200D-1F466-200D-1F466': ['family_mmbb'],
  // 👨‍👨‍👧‍👧 man, man, girl, girl
  '1F468-200D-1F468-200D-1F467-200D-1F467': ['family_mmgg'],
  // 👩‍👩‍👦 woman, woman, boy
  '1F469-200D-1F469-200D-1F466': ['family_wwb'],
  // 👩‍👩‍👧 woman, woman, girl
  '1F469-200D-1F469-200D-1F467': ['family_wwg'],
  // 👩‍👩‍👧‍👦 woman, woman, girl, boy
  '1F469-200D-1F469-200D-1F467-200D-1F466': ['family_wwgb'],
  // 👩‍👩‍👦‍👦 woman, woman, boy, boy
  '1F469-200D-1F469-200D-1F466-200D-1F466': ['family_wwbb'],
  // 👩‍👩‍👧‍👧 woman, woman, girl, girl
  '1F469-200D-1F469-200D-1F467-200D-1F467': ['family_wwgg'],
  // 👨‍👦 man, boy
  '1F468-200D-1F466': ['family_mb'],
  // 👨‍👦‍👦 man, boy, boy
  '1F468-200D-1F466-200D-1F466': ['family_mbb'],
  // 👨‍👧 man, girl
  '1F468-200D-1F467': ['family_mg'],
  // 👨‍👧‍👦 man, girl, boy
  '1F468-200D-1F467-200D-1F466': ['family_mgb'],
  // 👨‍👧‍👧 man, girl, girl
  '1F468-200D-1F467-200D-1F467': ['family_mgg'],
  // 👩‍👦 woman, boy
  '1F469-200D-1F466': ['family_wb'],
  // 👩‍👦‍👦 woman, boy, boy
  '1F469-200D-1F466-200D-1F466': ['family_wbb'],
  // 👩‍👧 woman, girl
  '1F469-200D-1F467': ['family_wg'],
  // 👩‍👧‍👦 woman, girl, boy
  '1F469-200D-1F467-200D-1F466': ['family_wgb'],
  // 👩‍👧‍👧 woman, girl, girl
  '1F469-200D-1F467-200D-1F467': ['family_wgg'],
  // 🤳 selfie
  '1F933': ['selfie'],
  // 💪 flexed biceps
  '1F4AA': ['muscle'],
  // 👈️ backhand index pointing left
  '1F448': ['point_left'],
  // 👉️ backhand index pointing right
  '1F449': ['point_right'],
  // ☝️ index pointing up
  '261D': ['point_up'],
  // 👆️ backhand index pointing up
  '1F446': ['backhand_point_up'],
  // 🖕 middle finger
  '1F595': ['middle_finger'],
  // 👇️ backhand index pointing down
  '1F447': ['point_down'],
  // ✌️ victory hand
  '270C': ['victory'],
  // 🤞 crossed fingers
  '1F91E': ['fingers_crossed'],
  // 🖖 vulcan salute
  '1F596': ['vulcan'],
  // 🤘 sign of the horns
  '1F918': ['metal'],
  // 🤙 call me hand
  '1F919': ['call_me'],
  // 🖐️ raised hand with fingers splayed
  '1F590': ['splayed_hand'],
  // ✋ raised hand
  '270B': ['raised_hand'],
  // 👌 OK hand
  '1F44C': ['ok_hand'],
  // 👍️ thumbs up
  '1F44D': ['thumbsup', '+1', 'yes'],
  // 👎️ thumbs down
  '1F44E': ['thumbsdown', '-1', 'no'],
  // ✊ raised fist
  '270A': ['fist'],
  // 👊 oncoming fist
  '1F44A': ['punch'],
  // 🤛 left-facing fist
  '1F91B': ['left_facing_fist'],
  // 🤜 right-facing fist
  '1F91C': ['right_facing_fist'],
  // 🤚 raised back of hand
  '1F91A': ['raised_backhand'],
  // 👋 waving hand
  '1F44B': ['wave'],
  // 🤟 love-you gesture
  '1F91F': ['love_you_gesture'],
  // ✍️ writing hand
  '270D': ['writing_hand'],
  // 👏 clapping hands
  '1F44F': ['clap'],
  // 👐 open hands
  '1F450': ['open_hands'],
  // 🙌 raising hands
  '1F64C': ['raised_hands'],
  // 🤲 palms up together
  '1F932': ['palms_up'],
  // 🙏 folded hands
  '1F64F': ['pray'],
  // 🤝 handshake
  '1F91D': ['handshake'],
  // 💅 nail polish
  '1F485': ['nail_care'],
  // 👂️ ear
  '1F442': ['ear'],
  // 👃 nose
  '1F443': ['nose'],
  // 👣 footprints
  '1F463': ['footprints'],
  // 👀 eyes
  '1F440': ['eyes'],
  // 👁️ eye
  '1F441': ['eye'],
  // 👁️‍🗨️ eye in speech bubble
  '1F441-FE0F-200D-1F5E8-FE0F': ['eye_bubble'],
  // 🧠 brain
  '1F9E0': ['brain'],
  // 👅 tongue
  '1F445': ['tongue'],
  // 👄 mouth
  '1F444': ['lips'],
  // 💋 kiss mark
  '1F48B': ['kiss_lips'],
  // 💘 heart with arrow
  '1F498': ['cupid'],
  // ❤️ red heart
  '2764': ['heart'],
  // 💓 beating heart
  '1F493': ['heartbeat'],
  // 💔 broken heart
  '1F494': ['broken_heart'],
  // 💕 two hearts
  '1F495': ['two_hearts'],
  // 💖 sparkling heart
  '1F496': ['sparkling_heart'],
  // 💗 growing heart
  '1F497': ['heartpulse'],
  // 💙 blue heart
  '1F499': ['blue_heart'],
  // 💚 green heart
  '1F49A': ['green_heart'],
  // 💛 yellow heart
  '1F49B': ['yellow_heart'],
  // 🧡 orange heart
  '1F9E1': ['orange_heart'],
  // 💜 purple heart
  '1F49C': ['purple_heart'],
  // 🖤 black heart
  '1F5A4': ['black_heart'],
  // 💝 heart with ribbon
  '1F49D': ['heart_ribbon'],
  // 💞 revolving hearts
  '1F49E': ['revolving_hearts'],
  // 💟 heart decoration
  '1F49F': ['heart_decoration'],
  // ❣️ heavy heart exclamation
  '2763': ['heart_exclamation'],
  // 💌 love letter
  '1F48C': ['love_letter'],
  // 💤 zzz
  '1F4A4': ['zzz'],
  // 💢 anger symbol
  '1F4A2': ['anger'],
  // 💣️ bomb
  '1F4A3': ['bomb'],
  // 💥 collision
  '1F4A5': ['boom', 'collision'],
  // 💦 sweat droplets
  '1F4A6': ['sweat_drops'],
  // 💨 dashing away
  '1F4A8': ['dash'],
  // 💫 dizzy
  '1F4AB': ['dizzy_star'],
  // 💬 speech balloon
  '1F4AC': ['speech'],
  // 🗨️ left speech bubble
  '1F5E8': ['left_speech'],
  // 🗯️ right anger bubble
  '1F5EF': ['right_anger_speech'],
  // 💭 thought balloon
  '1F4AD': ['thought'],
  // 🕳️ hole
  '1F573': ['hole'],
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
  // 🧣 scarf
  '1F9E3': ['scarf'],
  // 🧤 gloves
  '1F9E4': ['gloves'],
  // 🧥 coat
  '1F9E5': ['coat'],
  // 🧦 socks
  '1F9E6': ['socks'],
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
  // 🎒 school backpack
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
  // 🧢 billed cap
  '1F9E2': ['billed_cap'],
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
  // 🐵 monkey face
  '1F435': ['monkey_face'],
  // 🐒 monkey
  '1F412': ['monkey'],
  // 🦍 gorilla
  '1F98D': ['gorilla'],
  // 🐶 dog face
  '1F436': ['dog_face'],
  // 🐕️ dog
  '1F415': ['dog'],
  // 🐩 poodle
  '1F429': ['poodle'],
  // 🐺 wolf face
  '1F43A': ['wolf_face'],
  // 🦊 fox face
  '1F98A': ['fox_face'],
  // 🐱 cat face
  '1F431': ['cat_face'],
  // 🐈️ cat
  '1F408': ['cat'],
  // 🦁 lion face
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
  // 🦄 unicorn face
  '1F984': ['unicorn_face'],
  // 🦓 zebra
  '1F993': ['zebra'],
  // 🦌 deer
  '1F98C': ['deer'],
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
  // 🦒 giraffe
  '1F992': ['giraffe'],
  // 🐘 elephant
  '1F418': ['elephant'],
  // 🦏 rhinoceros
  '1F98F': ['rhino'],
  // 🐭 mouse face
  '1F42D': ['mouse_face'],
  // 🐁 mouse
  '1F401': ['mouse'],
  // 🐀 rat
  '1F400': ['rat'],
  // 🐹 hamster face
  '1F439': ['hamster_face'],
  // 🐰 rabbit face
  '1F430': ['rabbit_face'],
  // 🐇 rabbit
  '1F407': ['rabbit'],
  // 🐿️ chipmunk
  '1F43F': ['chipmunk'],
  // 🦔 hedgehog
  '1F994': ['hedgehog'],
  // 🦇 bat
  '1F987': ['bat'],
  // 🐻 bear face
  '1F43B': ['bear_face'],
  // 🐨 koala
  '1F428': ['koala_face'],
  // 🐼 panda face
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
  // 🦅 eagle
  '1F985': ['eagle'],
  // 🦆 duck
  '1F986': ['duck'],
  // 🦉 owl
  '1F989': ['owl'],
  // 🐸 frog face
  '1F438': ['frog_face'],
  // 🐊 crocodile
  '1F40A': ['crocodile'],
  // 🐢 turtle
  '1F422': ['turtle'],
  // 🦎 lizard
  '1F98E': ['lizard'],
  // 🐍 snake
  '1F40D': ['snake'],
  // 🐲 dragon face
  '1F432': ['dragon_face'],
  // 🐉 dragon
  '1F409': ['dragon'],
  // 🦕 sauropod
  '1F995': ['sauropod'],
  // 🦖 T-Rex
  '1F996': ['trex'],
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
  // 🦈 shark
  '1F988': ['shark'],
  // 🐙 octopus
  '1F419': ['octopus'],
  // 🐚 spiral shell
  '1F41A': ['shell'],
  // 🦀 crab
  '1F980': ['crab'],
  // 🦐 shrimp
  '1F990': ['shrimp'],
  // 🦑 squid
  '1F991': ['squid'],
  // 🐌 snail
  '1F40C': ['snail'],
  // 🦋 butterfly
  '1F98B': ['butterfly'],
  // 🐛 bug
  '1F41B': ['bug'],
  // 🐜 ant
  '1F41C': ['ant'],
  // 🐝 honeybee
  '1F41D': ['bee'],
  // 🐞 lady beetle
  '1F41E': ['beetle'],
  // 🦗 cricket
  '1F997': ['cricket'],
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
  // 🥀 wilted flower
  '1F940': ['wilted_rose'],
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
  // 🥝 kiwi fruit
  '1F95D': ['kiwi'],
  // 🍅 tomato
  '1F345': ['tomato'],
  // 🥥 coconut
  '1F965': ['coconut'],
  // 🥑 avocado
  '1F951': ['avocado'],
  // 🍆 eggplant
  '1F346': ['eggplant'],
  // 🥔 potato
  '1F954': ['potato'],
  // 🥕 carrot
  '1F955': ['carrot'],
  // 🌽 ear of corn
  '1F33D': ['corn'],
  // 🌶️ hot pepper
  '1F336': ['hot_pepper'],
  // 🥒 cucumber
  '1F952': ['cucumber'],
  // 🥦 broccoli
  '1F966': ['broccoli'],
  // 🍄 mushroom
  '1F344': ['mushroom'],
  // 🥜 peanuts
  '1F95C': ['peanuts'],
  // 🌰 chestnut
  '1F330': ['chestnut'],
  // 🍞 bread
  '1F35E': ['bread'],
  // 🥐 croissant
  '1F950': ['croissant'],
  // 🥖 baguette bread
  '1F956': ['french_bread'],
  // 🥨 pretzel
  '1F968': ['pretzel'],
  // 🥞 pancakes
  '1F95E': ['pancakes'],
  // 🧀 cheese wedge
  '1F9C0': ['cheese'],
  // 🍖 meat on bone
  '1F356': ['meat_on_bone'],
  // 🍗 poultry leg
  '1F357': ['poultry_leg'],
  // 🥩 cut of meat
  '1F969': ['cut_of_meat'],
  // 🥓 bacon
  '1F953': ['bacon'],
  // 🍔 hamburger
  '1F354': ['hamburger'],
  // 🍟 french fries
  '1F35F': ['fries'],
  // 🍕 pizza
  '1F355': ['pizza'],
  // 🌭 hot dog
  '1F32D': ['hotdog'],
  // 🥪 sandwich
  '1F96A': ['sandwich'],
  // 🌮 taco
  '1F32E': ['taco'],
  // 🌯 burrito
  '1F32F': ['burrito'],
  // 🥙 stuffed flatbread
  '1F959': ['stuffed_flatbread'],
  // 🥚 egg
  '1F95A': ['egg'],
  // 🍳 cooking
  '1F373': ['cooking'],
  // 🥘 shallow pan of food
  '1F958': ['shallow_pan_of_food'],
  // 🍲 pot of food
  '1F372': ['stew'],
  // 🥣 bowl with spoon
  '1F963': ['bowl_spoon'],
  // 🥗 green salad
  '1F957': ['salad'],
  // 🍿 popcorn
  '1F37F': ['popcorn'],
  // 🥫 canned food
  '1F96B': ['canned_food'],
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
  // 🥟 dumpling
  '1F95F': ['dumpling'],
  // 🥠 fortune cookie
  '1F960': ['fortune_cookie'],
  // 🥡 takeout box
  '1F961': ['takeout_box'],
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
  // 🥧 pie
  '1F967': ['pie'],
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
  // 🥛 glass of milk
  '1F95B': ['milk'],
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
  // 🥂 clinking glasses
  '1F942': ['champagne_glass'],
  // 🥃 tumbler glass
  '1F943': ['tumbler_glass'],
  // 🥤 cup with straw
  '1F964': ['cup_straw'],
  // 🥢 chopsticks
  '1F962': ['chopsticks'],
  // 🍽️ fork and knife with plate
  '1F37D': ['fork_knife_plate'],
  // 🍴 fork and knife
  '1F374': ['utensils'],
  // 🥄 spoon
  '1F944': ['spoon'],
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
  // 🏙️ cityscape
  '1F3D9': ['cityscape'],
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
  // 🌌 milky way
  '1F30C': ['milky_way'],
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
  // 🎭️ performing arts
  '1F3AD': ['performing_arts'],
  // 🖼️ framed picture
  '1F5BC': ['frame_photo'],
  // 🎨 artist palette
  '1F3A8': ['art', 'palette'],
  // 🎰 slot machine
  '1F3B0': ['slot_machine'],
  // 🚂 locomotive
  '1F682': ['steam_locomotive'],
  // 🚃 railway car
  '1F683': ['railway_car'],
  // 🚄 high-speed train
  '1F684': ['bullettrain_side'],
  // 🚅 high-speed train with bullet nose
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
  // 🚲️ bicycle
  '1F6B2': ['bike'],
  // 🛴 kick scooter
  '1F6F4': ['scooter'],
  // 🛵 motor scooter
  '1F6F5': ['motor_scooter'],
  // 🚏 bus stop
  '1F68F': ['bus_stop'],
  // 🛣️ motorway
  '1F6E3': ['motorway'],
  // 🛤️ railway track
  '1F6E4': ['railway_track'],
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
  // 🛑 stop sign
  '1F6D1': ['stop_sign', 'octagonal_sign'],
  // ⚓️ anchor
  '2693': ['anchor'],
  // ⛵️ sailboat
  '26F5': ['sailboat'],
  // 🛶 canoe
  '1F6F6': ['canoe'],
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
  // 🛸 flying saucer
  '1F6F8': ['flying_saucer'],
  // 🛎️ bellhop bell
  '1F6CE': ['bellhop'],
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
  // ⌛️ hourglass
  '231B': ['hourglass'],
  // ⏳️ hourglass with flowing sand
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
  // 🌛 first quarter moon with face
  '1F31B': ['first_quarter_moon_face'],
  // 🌜️ last quarter moon with face
  '1F31C': ['last_quarter_moon_face'],
  // 🌡️ thermometer
  '1F321': ['thermometer'],
  // ☀️ sun
  '2600': ['sun'],
  // 🌝 full moon with face
  '1F31D': ['full_moon_face'],
  // 🌞 sun with face
  '1F31E': ['sun_face'],
  // ⭐️ white medium star
  '2B50': ['star'],
  // 🌟 glowing star
  '1F31F': ['star2', 'glowing_star'],
  // 🌠 shooting star
  '1F320': ['star3', 'shooting_star'],
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
  // 🥇 1st place medal
  '1F947': ['first_place'],
  // 🥈 2nd place medal
  '1F948': ['second_place'],
  // 🥉 3rd place medal
  '1F949': ['third_place'],
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
  // 🎱 pool 8 ball
  '1F3B1': ['8ball'],
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
  // 🥊 boxing glove
  '1F94A': ['boxing_glove'],
  // 🥋 martial arts uniform
  '1F94B': ['gi', 'martial_arts_uniform'],
  // 🥅 goal net
  '1F945': ['goal'],
  // 🎯 direct hit
  '1F3AF': ['dart'],
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
  // 🛷 sled
  '1F6F7': ['sled'],
  // 🥌 curling stone
  '1F94C': ['curling_stone'],
  // 🎮️ video game
  '1F3AE': ['video_game'],
  // 🕹️ joystick
  '1F579': ['joystick'],
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
  // 🥁 drum
  '1F941': ['drum'],
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
  // 🔍️ left-pointing magnifying glass
  '1F50D': ['mag'],
  // 🔎 right-pointing magnifying glass
  '1F50E': ['mag_right'],
  // 🔬 microscope
  '1F52C': ['microscope'],
  // 🔭 telescope
  '1F52D': ['telescope'],
  // 📡 satellite antenna
  '1F4E1': ['satellite_antenna'],
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
  // 📐 triangular ruler
  '1F4D0': ['triangular_ruler'],
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
  // ⚗️ alembic
  '2697': ['alembic'],
  // ⚖️ balance scale
  '2696': ['scales'],
  // 🔗 link
  '1F517': ['link'],
  // ⛓️ chains
  '26D3': ['chains'],
  // 💉 syringe
  '1F489': ['syringe'],
  // 💊 pill
  '1F48A': ['pill'],
  // 🚬 cigarette
  '1F6AC': ['cigarette', 'smoking'],
  // ⚰️ coffin
  '26B0': ['coffin'],
  // ⚱️ funeral urn
  '26B1': ['urn'],
  // 🗿 moai
  '1F5FF': ['moai'],
  // 🛢️ oil drum
  '1F6E2': ['oil_drum'],
  // 🔮 crystal ball
  '1F52E': ['crystal_ball'],
  // 🛒 shopping cart
  '1F6D2': ['shopping_cart'],
  // 🏧 ATM sign
  '1F3E7': ['atm'],
  // 🚮 litter in bin sign
  '1F6AE': ['litter_bin'],
  // 🚰 potable water
  '1F6B0': ['potable_water'],
  // ♿️ wheelchair symbol
  '267F': ['wheelchair'],
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
  // 🔄 anticlockwise arrows button
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
  // ♏️ Scorpius
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
  // 🔼 up button
  '1F53C': ['up_button'],
  // ⏫ fast up button
  '23EB': ['fast_up_button'],
  // 🔽 down button
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
  // ♀️ female sign
  '2640': ['female', 'female_sign'],
  // ♂️ male sign
  '2642': ['male', 'male_sign'],
  // ⚕️ medical symbol
  '2695': ['medical'],
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
  // ⭕️ heavy large circle
  '2B55': ['o'],
  // ✅ white heavy check mark
  '2705': ['white_check_mark'],
  // ☑️ ballot box with check
  '2611': ['checked_ballot'],
  // ✔️ heavy check mark
  '2714': ['check_mark'],
  // ✖️ heavy multiplication x
  '2716': ['multiplication'],
  // ❌ cross mark
  '274C': ['x', 'cross_mark'],
  // ❎ cross mark button
  '274E': ['cross_mark_button'],
  // ➕ heavy plus sign
  '2795': ['plus'],
  // ➖ heavy minus sign
  '2796': ['minus'],
  // ➗ heavy division sign
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
  // 💯 hundred points
  '1F4AF': ['100'],
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
  // ▪️ black small square
  '25AA': ['small_black_square'],
  // ▫️ white small square
  '25AB': ['small_white_square'],
  // ◻️ white medium square
  '25FB': ['medium_white_square'],
  // ◼️ black medium square
  '25FC': ['medium_black_square'],
  // ◽️ white medium-small square
  '25FD': ['medium_small_white_square'],
  // ◾️ black medium-small square
  '25FE': ['medium_small_black_square'],
  // ⬛️ black large square
  '2B1B': ['large_black_square'],
  // ⬜️ white large square
  '2B1C': ['large_white_square'],
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
  // 🔲 black square button
  '1F532': ['black_square_button'],
  // 🔳 white square button
  '1F533': ['white_square_button'],
  // ⚪️ white circle
  '26AA': ['white_circle'],
  // ⚫️ black circle
  '26AB': ['black_circle'],
  // 🔴 red circle
  '1F534': ['red_circle'],
  // 🔵 blue circle
  '1F535': ['blue_circle'],
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
  // 🏳️‍🌈 rainbow flag
  '1F3F3-FE0F-200D-1F308': ['rainbow_flag'],
  // 🇦🇨 Ascension Island
  '1F1E6-1F1E8': ['flag_ac'],
  // 🇦🇩 Andorra
  '1F1E6-1F1E9': ['flag_ad'],
  // 🇦🇪 United Arab Emirates
  '1F1E6-1F1EA': ['flag_ae'],
  // 🇦🇫 Afghanistan
  '1F1E6-1F1EB': ['flag_af'],
  // 🇦🇬 Antigua & Barbuda
  '1F1E6-1F1EC': ['flag_ag'],
  // 🇦🇮 Anguilla
  '1F1E6-1F1EE': ['flag_ai'],
  // 🇦🇱 Albania
  '1F1E6-1F1F1': ['flag_al'],
  // 🇦🇲 Armenia
  '1F1E6-1F1F2': ['flag_am'],
  // 🇦🇴 Angola
  '1F1E6-1F1F4': ['flag_ao'],
  // 🇦🇶 Antarctica
  '1F1E6-1F1F6': ['flag_aq'],
  // 🇦🇷 Argentina
  '1F1E6-1F1F7': ['flag_ar'],
  // 🇦🇸 American Samoa
  '1F1E6-1F1F8': ['flag_as'],
  // 🇦🇹 Austria
  '1F1E6-1F1F9': ['flag_at'],
  // 🇦🇺 Australia
  '1F1E6-1F1FA': ['flag_au'],
  // 🇦🇼 Aruba
  '1F1E6-1F1FC': ['flag_aw'],
  // 🇦🇽 Åland Islands
  '1F1E6-1F1FD': ['flag_ax'],
  // 🇦🇿 Azerbaijan
  '1F1E6-1F1FF': ['flag_az'],
  // 🇧🇦 Bosnia
  '1F1E7-1F1E6': ['flag_ba'],
  // 🇧🇧 Barbados
  '1F1E7-1F1E7': ['flag_bb'],
  // 🇧🇩 Bangladesh
  '1F1E7-1F1E9': ['flag_bd'],
  // 🇧🇪 Belgium
  '1F1E7-1F1EA': ['flag_be'],
  // 🇧🇫 Burkina Faso
  '1F1E7-1F1EB': ['flag_bf'],
  // 🇧🇬 Bulgaria
  '1F1E7-1F1EC': ['flag_bg'],
  // 🇧🇭 Bahrain
  '1F1E7-1F1ED': ['flag_bh'],
  // 🇧🇮 Burundi
  '1F1E7-1F1EE': ['flag_bi'],
  // 🇧🇯 Benin
  '1F1E7-1F1EF': ['flag_bj'],
  // 🇧🇱 St. Barthélemy
  '1F1E7-1F1F1': ['flag_bl'],
  // 🇧🇲 Bermuda
  '1F1E7-1F1F2': ['flag_bm'],
  // 🇧🇳 Brunei
  '1F1E7-1F1F3': ['flag_bn'],
  // 🇧🇴 Bolivia
  '1F1E7-1F1F4': ['flag_bo'],
  // 🇧🇶 Caribbean Netherlands
  '1F1E7-1F1F6': ['flag_bq'],
  // 🇧🇷 Brazil
  '1F1E7-1F1F7': ['flag_br'],
  // 🇧🇸 Bahamas
  '1F1E7-1F1F8': ['flag_bs'],
  // 🇧🇹 Bhutan
  '1F1E7-1F1F9': ['flag_bt'],
  // 🇧🇻 Bouvet Island
  '1F1E7-1F1FB': ['flag_bv'],
  // 🇧🇼 Botswana
  '1F1E7-1F1FC': ['flag_bw'],
  // 🇧🇾 Belarus
  '1F1E7-1F1FE': ['flag_by'],
  // 🇧🇿 Belize
  '1F1E7-1F1FF': ['flag_bz'],
  // 🇨🇦 Canada
  '1F1E8-1F1E6': ['flag_ca'],
  // 🇨🇨 Cocos (Keeling) Islands
  '1F1E8-1F1E8': ['flag_cc'],
  // 🇨🇩 Congo (DRC)
  '1F1E8-1F1E9': ['flag_cd'],
  // 🇨🇫 Central African Republic
  '1F1E8-1F1EB': ['flag_cf'],
  // 🇨🇬 Congo (Republic)
  '1F1E8-1F1EC': ['flag_cg'],
  // 🇨🇭 Switzerland
  '1F1E8-1F1ED': ['flag_ch'],
  // 🇨🇮 Ivory Coast
  '1F1E8-1F1EE': ['flag_ci'],
  // 🇨🇰 Cook Islands
  '1F1E8-1F1F0': ['flag_ck'],
  // 🇨🇱 Chile
  '1F1E8-1F1F1': ['flag_cl'],
  // 🇨🇲 Cameroon
  '1F1E8-1F1F2': ['flag_cm'],
  // 🇨🇳 China
  '1F1E8-1F1F3': ['flag_cn'],
  // 🇨🇴 Colombia
  '1F1E8-1F1F4': ['flag_co'],
  // 🇨🇵 Clipperton Island
  '1F1E8-1F1F5': ['flag_cp'],
  // 🇨🇷 Costa Rica
  '1F1E8-1F1F7': ['flag_cr'],
  // 🇨🇺 Cuba
  '1F1E8-1F1FA': ['flag_cu'],
  // 🇨🇻 Cape Verde
  '1F1E8-1F1FB': ['flag_cv'],
  // 🇨🇼 Curaçao
  '1F1E8-1F1FC': ['flag_cw'],
  // 🇨🇽 Christmas Island
  '1F1E8-1F1FD': ['flag_cx'],
  // 🇨🇾 Cyprus
  '1F1E8-1F1FE': ['flag_cy'],
  // 🇨🇿 Czech Republic
  '1F1E8-1F1FF': ['flag_cz'],
  // 🇩🇪 Germany
  '1F1E9-1F1EA': ['flag_de'],
  // 🇩🇬 Diego Garcia
  '1F1E9-1F1EC': ['flag_dg'],
  // 🇩🇯 Djibouti
  '1F1E9-1F1EF': ['flag_dj'],
  // 🇩🇰 Denmark
  '1F1E9-1F1F0': ['flag_dk'],
  // 🇩🇲 Dominica
  '1F1E9-1F1F2': ['flag_dm'],
  // 🇩🇴 Dominican Republic
  '1F1E9-1F1F4': ['flag_do'],
  // 🇩🇿 Algeria
  '1F1E9-1F1FF': ['flag_dz'],
  // 🇪🇦 Ceuta & Melilla
  '1F1EA-1F1E6': ['flag_ea'],
  // 🇪🇨 Ecuador
  '1F1EA-1F1E8': ['flag_ec'],
  // 🇪🇪 Estonia
  '1F1EA-1F1EA': ['flag_ee'],
  // 🇪🇬 Egypt
  '1F1EA-1F1EC': ['flag_eg'],
  // 🇪🇭 Western Sahara
  '1F1EA-1F1ED': ['flag_eh'],
  // 🇪🇷 Eritrea
  '1F1EA-1F1F7': ['flag_er'],
  // 🇪🇸 Spain
  '1F1EA-1F1F8': ['flag_es'],
  // 🇪🇹 Ethiopia
  '1F1EA-1F1F9': ['flag_et'],
  // 🇪🇺 European Union
  '1F1EA-1F1FA': ['flag_eu'],
  // 🇫🇮 Finland
  '1F1EB-1F1EE': ['flag_fi'],
  // 🇫🇯 Fiji
  '1F1EB-1F1EF': ['flag_fj'],
  // 🇫🇰 Falkland Islands (Islas Malvinas)
  '1F1EB-1F1F0': ['flag_fk'],
  // 🇫🇲 Micronesia
  '1F1EB-1F1F2': ['flag_fm'],
  // 🇫🇴 Faroe Islands
  '1F1EB-1F1F4': ['flag_fo'],
  // 🇫🇷 France
  '1F1EB-1F1F7': ['flag_fr'],
  // 🇬🇦 Gabon
  '1F1EC-1F1E6': ['flag_ga'],
  // 🇬🇧 UK
  '1F1EC-1F1E7': ['flag_gb'],
  // 🇬🇩 Grenada
  '1F1EC-1F1E9': ['flag_gd'],
  // 🇬🇪 Georgia
  '1F1EC-1F1EA': ['flag_ge'],
  // 🇬🇫 French Guiana
  '1F1EC-1F1EB': ['flag_gf'],
  // 🇬🇬 Guernsey
  '1F1EC-1F1EC': ['flag_gg'],
  // 🇬🇭 Ghana
  '1F1EC-1F1ED': ['flag_gh'],
  // 🇬🇮 Gibraltar
  '1F1EC-1F1EE': ['flag_gi'],
  // 🇬🇱 Greenland
  '1F1EC-1F1F1': ['flag_gl'],
  // 🇬🇲 Gambia
  '1F1EC-1F1F2': ['flag_gm'],
  // 🇬🇳 Guinea
  '1F1EC-1F1F3': ['flag_gn'],
  // 🇬🇵 Guadeloupe
  '1F1EC-1F1F5': ['flag_gp'],
  // 🇬🇶 Equatorial Guinea
  '1F1EC-1F1F6': ['flag_gq'],
  // 🇬🇷 Greece
  '1F1EC-1F1F7': ['flag_gr'],
  // 🇬🇸 South Georgia & South Sandwich Islands
  '1F1EC-1F1F8': ['flag_gs'],
  // 🇬🇹 Guatemala
  '1F1EC-1F1F9': ['flag_gt'],
  // 🇬🇺 Guam
  '1F1EC-1F1FA': ['flag_gu'],
  // 🇬🇼 Guinea-Bissau
  '1F1EC-1F1FC': ['flag_gw'],
  // 🇬🇾 Guyana
  '1F1EC-1F1FE': ['flag_gy'],
  // 🇭🇰 Hong Kong
  '1F1ED-1F1F0': ['flag_hk'],
  // 🇭🇲 Heard & McDonald Islands
  '1F1ED-1F1F2': ['flag_hm'],
  // 🇭🇳 Honduras
  '1F1ED-1F1F3': ['flag_hn'],
  // 🇭🇷 Croatia
  '1F1ED-1F1F7': ['flag_hr'],
  // 🇭🇹 Haiti
  '1F1ED-1F1F9': ['flag_ht'],
  // 🇭🇺 Hungary
  '1F1ED-1F1FA': ['flag_hu'],
  // 🇮🇨 Canary Islands
  '1F1EE-1F1E8': ['flag_ic'],
  // 🇮🇩 Indonesia
  '1F1EE-1F1E9': ['flag_id'],
  // 🇮🇪 Ireland
  '1F1EE-1F1EA': ['flag_ie'],
  // 🇮🇱 Israel
  '1F1EE-1F1F1': ['flag_il'],
  // 🇮🇲 Isle of Man
  '1F1EE-1F1F2': ['flag_im'],
  // 🇮🇳 India
  '1F1EE-1F1F3': ['flag_in'],
  // 🇮🇴 British Indian Ocean Territory
  '1F1EE-1F1F4': ['flag_io'],
  // 🇮🇶 Iraq
  '1F1EE-1F1F6': ['flag_iq'],
  // 🇮🇷 Iran
  '1F1EE-1F1F7': ['flag_ir'],
  // 🇮🇸 Iceland
  '1F1EE-1F1F8': ['flag_is'],
  // 🇮🇹 Italy
  '1F1EE-1F1F9': ['flag_it'],
  // 🇯🇪 Jersey
  '1F1EF-1F1EA': ['flag_je'],
  // 🇯🇲 Jamaica
  '1F1EF-1F1F2': ['flag_jm'],
  // 🇯🇴 Jordan
  '1F1EF-1F1F4': ['flag_jo'],
  // 🇯🇵 Japan
  '1F1EF-1F1F5': ['flag_jp'],
  // 🇰🇪 Kenya
  '1F1F0-1F1EA': ['flag_ke'],
  // 🇰🇬 Kyrgyzstan
  '1F1F0-1F1EC': ['flag_kg'],
  // 🇰🇭 Cambodia
  '1F1F0-1F1ED': ['flag_kh'],
  // 🇰🇮 Kiribati
  '1F1F0-1F1EE': ['flag_ki'],
  // 🇰🇲 Comoros
  '1F1F0-1F1F2': ['flag_km'],
  // 🇰🇳 St. Kitts & Nevis
  '1F1F0-1F1F3': ['flag_kn'],
  // 🇰🇵 North Korea
  '1F1F0-1F1F5': ['flag_kp'],
  // 🇰🇷 South Korea
  '1F1F0-1F1F7': ['flag_kr'],
  // 🇰🇼 Kuwait
  '1F1F0-1F1FC': ['flag_kw'],
  // 🇰🇾 Cayman Islands
  '1F1F0-1F1FE': ['flag_ky'],
  // 🇰🇿 Kazakhstan
  '1F1F0-1F1FF': ['flag_kz'],
  // 🇱🇦 Laos
  '1F1F1-1F1E6': ['flag_la'],
  // 🇱🇧 Lebanon
  '1F1F1-1F1E7': ['flag_lb'],
  // 🇱🇨 St. Lucia
  '1F1F1-1F1E8': ['flag_lc'],
  // 🇱🇮 Liechtenstein
  '1F1F1-1F1EE': ['flag_li'],
  // 🇱🇰 Sri Lanka
  '1F1F1-1F1F0': ['flag_lk'],
  // 🇱🇷 Liberia
  '1F1F1-1F1F7': ['flag_lr'],
  // 🇱🇸 Lesotho
  '1F1F1-1F1F8': ['flag_ls'],
  // 🇱🇹 Lithuania
  '1F1F1-1F1F9': ['flag_lt'],
  // 🇱🇺 Luxembourg
  '1F1F1-1F1FA': ['flag_lu'],
  // 🇱🇻 Latvia
  '1F1F1-1F1FB': ['flag_lv'],
  // 🇱🇾 Libya
  '1F1F1-1F1FE': ['flag_ly'],
  // 🇲🇦 Morocco
  '1F1F2-1F1E6': ['flag_ma'],
  // 🇲🇨 Monaco
  '1F1F2-1F1E8': ['flag_mc'],
  // 🇲🇩 Moldova
  '1F1F2-1F1E9': ['flag_md'],
  // 🇲🇪 Montenegro
  '1F1F2-1F1EA': ['flag_me'],
  // 🇲🇫 St. Martin
  '1F1F2-1F1EB': ['flag_mf'],
  // 🇲🇬 Madagascar
  '1F1F2-1F1EC': ['flag_mg'],
  // 🇲🇭 Marshall Islands
  '1F1F2-1F1ED': ['flag_mh'],
  // 🇲🇰 Macedonia (FYROM)
  '1F1F2-1F1F0': ['flag_mk'],
  // 🇲🇱 Mali
  '1F1F2-1F1F1': ['flag_ml'],
  // 🇲🇲 Myanmar
  '1F1F2-1F1F2': ['flag_mm'],
  // 🇲🇳 Mongolia
  '1F1F2-1F1F3': ['flag_mn'],
  // 🇲🇴 Macau
  '1F1F2-1F1F4': ['flag_mo'],
  // 🇲🇵 Northern Mariana Islands
  '1F1F2-1F1F5': ['flag_mp'],
  // 🇲🇶 Martinique
  '1F1F2-1F1F6': ['flag_mq'],
  // 🇲🇷 Mauritania
  '1F1F2-1F1F7': ['flag_mr'],
  // 🇲🇸 Montserrat
  '1F1F2-1F1F8': ['flag_ms'],
  // 🇲🇹 Malta
  '1F1F2-1F1F9': ['flag_mt'],
  // 🇲🇺 Mauritius
  '1F1F2-1F1FA': ['flag_mu'],
  // 🇲🇻 Maldives
  '1F1F2-1F1FB': ['flag_mv'],
  // 🇲🇼 Malawi
  '1F1F2-1F1FC': ['flag_mw'],
  // 🇲🇽 Mexico
  '1F1F2-1F1FD': ['flag_mx'],
  // 🇲🇾 Malaysia
  '1F1F2-1F1FE': ['flag_my'],
  // 🇲🇿 Mozambique
  '1F1F2-1F1FF': ['flag_mz'],
  // 🇳🇦 Namibia
  '1F1F3-1F1E6': ['flag_na'],
  // 🇳🇨 New Caledonia
  '1F1F3-1F1E8': ['flag_nc'],
  // 🇳🇪 Niger
  '1F1F3-1F1EA': ['flag_ne'],
  // 🇳🇫 Norfolk Island
  '1F1F3-1F1EB': ['flag_nf'],
  // 🇳🇬 Nigeria
  '1F1F3-1F1EC': ['flag_ng'],
  // 🇳🇮 Nicaragua
  '1F1F3-1F1EE': ['flag_ni'],
  // 🇳🇱 Netherlands
  '1F1F3-1F1F1': ['flag_nl'],
  // 🇳🇴 Norway
  '1F1F3-1F1F4': ['flag_no'],
  // 🇳🇵 Nepal
  '1F1F3-1F1F5': ['flag_np'],
  // 🇳🇷 Nauru
  '1F1F3-1F1F7': ['flag_nr'],
  // 🇳🇺 Niue
  '1F1F3-1F1FA': ['flag_nu'],
  // 🇳🇿 New Zealand
  '1F1F3-1F1FF': ['flag_nz'],
  // 🇴🇲 Oman
  '1F1F4-1F1F2': ['flag_om'],
  // 🇵🇦 Panama
  '1F1F5-1F1E6': ['flag_pa'],
  // 🇵🇪 Peru
  '1F1F5-1F1EA': ['flag_pe'],
  // 🇵🇫 French Polynesia
  '1F1F5-1F1EB': ['flag_pf'],
  // 🇵🇬 Papua New Guinea
  '1F1F5-1F1EC': ['flag_pg'],
  // 🇵🇭 Philippines
  '1F1F5-1F1ED': ['flag_ph'],
  // 🇵🇰 Pakistan
  '1F1F5-1F1F0': ['flag_pk'],
  // 🇵🇱 Poland
  '1F1F5-1F1F1': ['flag_pl'],
  // 🇵🇲 St. Pierre & Miquelon
  '1F1F5-1F1F2': ['flag_pm'],
  // 🇵🇳 Pitcairn Islands
  '1F1F5-1F1F3': ['flag_pn'],
  // 🇵🇷 Puerto Rico
  '1F1F5-1F1F7': ['flag_pr'],
  // 🇵🇸 Palestine
  '1F1F5-1F1F8': ['flag_ps'],
  // 🇵🇹 Portugal
  '1F1F5-1F1F9': ['flag_pt'],
  // 🇵🇼 Palau
  '1F1F5-1F1FC': ['flag_pw'],
  // 🇵🇾 Paraguay
  '1F1F5-1F1FE': ['flag_py'],
  // 🇶🇦 Qatar
  '1F1F6-1F1E6': ['flag_qa'],
  // 🇷🇪 Réunion
  '1F1F7-1F1EA': ['flag_re'],
  // 🇷🇴 Romania
  '1F1F7-1F1F4': ['flag_ro'],
  // 🇷🇸 Serbia
  '1F1F7-1F1F8': ['flag_rs'],
  // 🇷🇺 Russia
  '1F1F7-1F1FA': ['flag_ru'],
  // 🇷🇼 Rwanda
  '1F1F7-1F1FC': ['flag_rw'],
  // 🇸🇦 Saudi Arabia
  '1F1F8-1F1E6': ['flag_sa'],
  // 🇸🇧 Solomon Islands
  '1F1F8-1F1E7': ['flag_sb'],
  // 🇸🇨 Seychelles
  '1F1F8-1F1E8': ['flag_sc'],
  // 🇸🇩 Sudan
  '1F1F8-1F1E9': ['flag_sd'],
  // 🇸🇪 Sweden
  '1F1F8-1F1EA': ['flag_se'],
  // 🇸🇬 Singapore
  '1F1F8-1F1EC': ['flag_sg'],
  // 🇸🇭 St. Helena
  '1F1F8-1F1ED': ['flag_sh'],
  // 🇸🇮 Slovenia
  '1F1F8-1F1EE': ['flag_si'],
  // 🇸🇯 Svalbard & Jan Mayen
  '1F1F8-1F1EF': ['flag_sj'],
  // 🇸🇰 Slovakia
  '1F1F8-1F1F0': ['flag_sk'],
  // 🇸🇱 Sierra Leone
  '1F1F8-1F1F1': ['flag_sl'],
  // 🇸🇲 San Marino
  '1F1F8-1F1F2': ['flag_sm'],
  // 🇸🇳 Senegal
  '1F1F8-1F1F3': ['flag_sn'],
  // 🇸🇴 Somalia
  '1F1F8-1F1F4': ['flag_so'],
  // 🇸🇷 Suriname
  '1F1F8-1F1F7': ['flag_sr'],
  // 🇸🇸 South Sudan
  '1F1F8-1F1F8': ['flag_ss'],
  // 🇸🇹 São Tomé & Príncipe
  '1F1F8-1F1F9': ['flag_st'],
  // 🇸🇻 El Salvador
  '1F1F8-1F1FB': ['flag_sv'],
  // 🇸🇽 Sint Maarten
  '1F1F8-1F1FD': ['flag_sx'],
  // 🇸🇾 Syria
  '1F1F8-1F1FE': ['flag_sy'],
  // 🇸🇿 Swaziland
  '1F1F8-1F1FF': ['flag_sz'],
  // 🇹🇦 Tristan da Cunha
  '1F1F9-1F1E6': ['flag_ta'],
  // 🇹🇨 Turks & Caicos Islands
  '1F1F9-1F1E8': ['flag_tc'],
  // 🇹🇩 Chad
  '1F1F9-1F1E9': ['flag_td'],
  // 🇹🇫 French Southern Territories
  '1F1F9-1F1EB': ['flag_tf'],
  // 🇹🇬 Togo
  '1F1F9-1F1EC': ['flag_tg'],
  // 🇹🇭 Thailand
  '1F1F9-1F1ED': ['flag_th'],
  // 🇹🇯 Tajikistan
  '1F1F9-1F1EF': ['flag_tj'],
  // 🇹🇰 Tokelau
  '1F1F9-1F1F0': ['flag_tk'],
  // 🇹🇱 East Timor
  '1F1F9-1F1F1': ['flag_tl'],
  // 🇹🇲 Turkmenistan
  '1F1F9-1F1F2': ['flag_tm'],
  // 🇹🇳 Tunisia
  '1F1F9-1F1F3': ['flag_tn'],
  // 🇹🇴 Tonga
  '1F1F9-1F1F4': ['flag_to'],
  // 🇹🇷 Turkey
  '1F1F9-1F1F7': ['flag_tr'],
  // 🇹🇹 Trinidad & Tobago
  '1F1F9-1F1F9': ['flag_tt'],
  // 🇹🇻 Tuvalu
  '1F1F9-1F1FB': ['flag_tv'],
  // 🇹🇼 Taiwan
  '1F1F9-1F1FC': ['flag_tw'],
  // 🇹🇿 Tanzania
  '1F1F9-1F1FF': ['flag_tz'],
  // 🇺🇦 Ukraine
  '1F1FA-1F1E6': ['flag_ua'],
  // 🇺🇬 Uganda
  '1F1FA-1F1EC': ['flag_ug'],
  // 🇺🇲 U.S. Outlying Islands
  '1F1FA-1F1F2': ['flag_um'],
  // 🇺🇳 UN
  '1F1FA-1F1F3': ['flag_un'],
  // 🇺🇸 US
  '1F1FA-1F1F8': ['flag_us', 'usa'],
  // 🇺🇾 Uruguay
  '1F1FA-1F1FE': ['flag_uy'],
  // 🇺🇿 Uzbekistan
  '1F1FA-1F1FF': ['flag_uz'],
  // 🇻🇦 Vatican City
  '1F1FB-1F1E6': ['flag_va'],
  // 🇻🇨 St. Vincent & Grenadines
  '1F1FB-1F1E8': ['flag_vc'],
  // 🇻🇪 Venezuela
  '1F1FB-1F1EA': ['flag_ve'],
  // 🇻🇬 British Virgin Islands
  '1F1FB-1F1EC': ['flag_vg'],
  // 🇻🇮 U.S. Virgin Islands
  '1F1FB-1F1EE': ['flag_vi'],
  // 🇻🇳 Vietnam
  '1F1FB-1F1F3': ['flag_vn'],
  // 🇻🇺 Vanuatu
  '1F1FB-1F1FA': ['flag_vu'],
  // 🇼🇫 Wallis & Futuna
  '1F1FC-1F1EB': ['flag_wf'],
  // 🇼🇸 Samoa
  '1F1FC-1F1F8': ['flag_ws'],
  // 🇽🇰 Kosovo
  '1F1FD-1F1F0': ['flag_xk'],
  // 🇾🇪 Yemen
  '1F1FE-1F1EA': ['flag_ye'],
  // 🇾🇹 Mayotte
  '1F1FE-1F1F9': ['flag_yt'],
  // 🇿🇦 South Africa
  '1F1FF-1F1E6': ['flag_za'],
  // 🇿🇲 Zambia
  '1F1FF-1F1F2': ['flag_zm'],
  // 🇿🇼 Zimbabwe
  '1F1FF-1F1FC': ['flag_zw'],
  // 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
  '1F3F4-E0067-E0062-E0065-E006E-E0067-E007F': ['flag_gbeng', 'england'],
  // 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland
  '1F3F4-E0067-E0062-E0073-E0063-E0074-E007F': ['flag_gbsct', 'scotland'],
  // 🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales
  '1F3F4-E0067-E0062-E0077-E006C-E0073-E007F': ['flag_gbwls', 'wales'],
  // asterisk
  '002A': ['base_asterisk'],
  // number sign
  '0023': ['base_hash'],
  // digit 0
  '0030': ['base_zero'],
  // digit 1
  '0031': ['base_one'],
  // digit 2
  '0032': ['base_two'],
  // digit 3
  '0033': ['base_three'],
  // digit 4
  '0034': ['base_four'],
  // digit 5
  '0035': ['base_five'],
  // digit 6
  '0036': ['base_six'],
  // digit 7
  '0037': ['base_seven'],
  // digit 8
  '0038': ['base_eight'],
  // digit 9
  '0039': ['base_nine'],
  // 🔟 digit 10
  '1F51F': ['ten'],
  // *️⃣ combining enclosing keycap asterisk
  '002A-FE0F-20E3': ['asterisk'],
  // #️⃣ combining enclosing keycap number sign
  '0023-FE0F-20E3': ['hash'],
  // 0️⃣ combining enclosing keycap 0
  '0030-FE0F-20E3': ['zero'],
  // 1️⃣ combining enclosing keycap 1
  '0031-FE0F-20E3': ['one'],
  // 2️⃣ combining enclosing keycap 2
  '0032-FE0F-20E3': ['two'],
  // 3️⃣ combining enclosing keycap 3
  '0033-FE0F-20E3': ['three'],
  // 4️⃣ combining enclosing keycap 4
  '0034-FE0F-20E3': ['four'],
  // 5️⃣ combining enclosing keycap 5
  '0035-FE0F-20E3': ['five'],
  // 6️⃣ combining enclosing keycap 6
  '0036-FE0F-20E3': ['six'],
  // 7️⃣ combining enclosing keycap 7
  '0037-FE0F-20E3': ['seven'],
  // 8️⃣ combining enclosing keycap 8
  '0038-FE0F-20E3': ['eight'],
  // 9️⃣ combining enclosing keycap 9
  '0039-FE0F-20E3': ['nine'],
};
