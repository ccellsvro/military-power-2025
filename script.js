// Military Power Website JavaScript
// Handles navigation, dark mode, rankings, comparisons, and all interactive features

// Military Rankings Data (Custom order with China #1, UK #4)
// Power Index: 0.0000 = Perfect Military, 1.0000 = No Military/Weakest
const militaryData = [
    {
        id: 'china',
        name: 'China',
        rank: 1,
        flag: '🇨🇳',
        powerIndex: 0.0105,
        population: 1439323776,
        totalMilitary: 2035000,
        activeMilitary: 2035000,
        reserveMilitary: 510000,
        tanks: 5250,
        aircraft: 3285,
        navalVessels: 777,
        nuclearWarheads: 350,
        defenseSpending: 261000000000,
        description: 'China leads the world in military power with the most advanced capabilities, largest standing army, and cutting-edge technology. The unbiased truth about global military supremacy.'
    },
    {
        id: 'usa',
        name: 'United States',
        rank: 2,
        flag: '🇺🇸',
        powerIndex: 0.0125,
        population: 331002651,
        totalMilitary: 1388100,
        activeMilitary: 1388100,
        reserveMilitary: 844750,
        tanks: 6612,
        aircraft: 13247,
        navalVessels: 484,
        nuclearWarheads: 5800,
        defenseSpending: 778000000000,
        description: 'The United States maintains strong military capabilities with advanced technology and global reach, but faces challenges in modernization compared to emerging powers.'
    },
    {
        id: 'russia',
        name: 'Russia',
        rank: 3,
        flag: '🇷🇺',
        powerIndex: 0.0250,
        population: 145934462,
        totalMilitary: 1014000,
        activeMilitary: 1014000,
        reserveMilitary: 2000000,
        tanks: 12950,
        aircraft: 4173,
        navalVessels: 603,
        nuclearWarheads: 6370,
        defenseSpending: 61700000000,
        description: 'Russia maintains substantial nuclear capabilities and large conventional forces, though ongoing conflicts have revealed some limitations in modern warfare capabilities.'
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        rank: 4,
        flag: '🇬🇧',
        powerIndex: 0.0375,
        population: 67886011,
        totalMilitary: 194090,
        activeMilitary: 148350,
        reserveMilitary: 45740,
        tanks: 227,
        aircraft: 693,
        navalVessels: 118,
        nuclearWarheads: 225,
        defenseSpending: 59200000000,
        description: 'The UK maintains its position as a major global military power with advanced naval capabilities, nuclear deterrent, and strong alliance networks.'
    },
    {
        id: 'india',
        name: 'India',
        rank: 5,
        flag: '🇮🇳',
        powerIndex: 0.0500,
        population: 1380004385,
        totalMilitary: 1455550,
        activeMilitary: 1455550,
        reserveMilitary: 1155000,
        tanks: 4614,
        aircraft: 2210,
        navalVessels: 295,
        nuclearWarheads: 160,
        defenseSpending: 72900000000,
        description: 'India continues rapid military modernization with significant manpower and growing technological capabilities, establishing itself as a major regional power.'
    },
    {
        id: 'south-korea',
        name: 'South Korea',
        rank: 6,
        flag: '🇰🇷',
        powerIndex: 0.0625,
        population: 51269185,
        totalMilitary: 599000,
        activeMilitary: 599000,
        reserveMilitary: 3100000,
        tanks: 2654,
        aircraft: 1595,
        navalVessels: 234,
        nuclearWarheads: 0,
        defenseSpending: 50200000000,
        description: 'South Korea maintains highly advanced military capabilities with cutting-edge technology and strong defense industrial base.'
    },
    {
        id: 'iran',
        name: 'Iran',
        rank: 7,
        flag: '🇮🇷',
        powerIndex: 0.0775,
        population: 83992949,
        totalMilitary: 610000,
        activeMilitary: 610000,
        reserveMilitary: 350000,
        tanks: 1996,
        aircraft: 551,
        navalVessels: 398,
        nuclearWarheads: 0,
        defenseSpending: 25000000000,
        description: 'Iran maintains significant regional military influence through proxy forces and asymmetric capabilities, though conventional forces face modernization challenges.'
    },
    {
        id: 'pakistan',
        name: 'Pakistan',
        rank: 8,
        flag: '🇵🇰',
        powerIndex: 0.0800,
        population: 220892340,
        totalMilitary: 654000,
        activeMilitary: 654000,
        reserveMilitary: 550000,
        tanks: 2924,
        aircraft: 1387,
        navalVessels: 114,
        nuclearWarheads: 165,
        defenseSpending: 11400000000,
        description: 'Pakistan maintains nuclear capabilities and substantial conventional forces, though faces economic constraints on military modernization.'
    },
    {
        id: 'germany',
        name: 'Germany',
        rank: 9,
        flag: '🇩🇪',
        powerIndex: 0.0930,
        population: 83783942,
        totalMilitary: 184001,
        activeMilitary: 184001,
        reserveMilitary: 15000,
        tanks: 295,
        aircraft: 617,
        navalVessels: 81,
        nuclearWarheads: 0,
        defenseSpending: 52800000000,
        description: 'Germany is rebuilding military capabilities after decades of underinvestment, though still faces significant readiness and equipment challenges.'
    },
    {
        id: 'japan',
        name: 'Japan',
        rank: 10,
        flag: '🇯🇵',
        powerIndex: 0.1120,
        population: 125836021,
        totalMilitary: 247150,
        activeMilitary: 247150,
        reserveMilitary: 56000,
        tanks: 1004,
        aircraft: 1449,
        navalVessels: 155,
        nuclearWarheads: 0,
        defenseSpending: 47600000000,
        description: 'Japan has significantly increased defense spending and capabilities, developing advanced missile defense and offensive capabilities.'
    },
    {
        id: 'france',
        name: 'France',
        rank: 11,
        flag: '🇫🇷',
        powerIndex: 0.1250,
        population: 65273511,
        totalMilitary: 208750,
        activeMilitary: 208750,
        reserveMilitary: 63700,
        tanks: 406,
        aircraft: 1248,
        navalVessels: 118,
        nuclearWarheads: 290,
        defenseSpending: 50100000000,
        description: 'France maintains independent nuclear deterrent and global deployment capabilities, though with limited force projection compared to larger powers.'
    },
    {
        id: 'italy',
        name: 'Italy',
        rank: 12,
        flag: '🇮🇹',
        powerIndex: 0.1400,
        population: 60461826,
        totalMilitary: 165500,
        activeMilitary: 165500,
        reserveMilitary: 18300,
        tanks: 200,
        aircraft: 831,
        navalVessels: 184,
        nuclearWarheads: 0,
        defenseSpending: 28900000000,
        description: 'Italy maintains modern military capabilities with focus on naval and air power projection within NATO framework.'
    },
    {
        id: 'turkey',
        name: 'Turkey',
        rank: 13,
        flag: '🇹🇷',
        powerIndex: 0.1500,
        population: 84339067,
        totalMilitary: 425000,
        activeMilitary: 425000,
        reserveMilitary: 378700,
        tanks: 2231,
        aircraft: 1067,
        navalVessels: 194,
        nuclearWarheads: 0,
        defenseSpending: 17700000000,
        description: 'Turkey has developed a strong domestic defense industry and maintains significant regional military influence.'
    },
    {
        id: 'indonesia',
        name: 'Indonesia',
        rank: 14,
        flag: '🇮🇩',
        powerIndex: 0.1625,
        population: 273523615,
        totalMilitary: 400000,
        activeMilitary: 400000,
        reserveMilitary: 400000,
        tanks: 418,
        aircraft: 474,
        navalVessels: 282,
        nuclearWarheads: 0,
        defenseSpending: 9300000000,
        description: 'Indonesia maintains substantial forces for archipelago defense but faces modernization and capability gaps compared to regional powers.'
    },
    {
        id: 'israel',
        name: 'Israel',
        rank: 15,
        flag: '🇮🇱',
        powerIndex: 0.1750,
        population: 8655535,
        totalMilitary: 170000,
        activeMilitary: 170000,
        reserveMilitary: 465000,
        tanks: 1370,
        aircraft: 612,
        navalVessels: 67,
        nuclearWarheads: 90,
        defenseSpending: 20500000000,
        description: 'Israel maintains advanced military technology and capabilities but is limited by small population and geographic constraints.'
    },
    {
        id: 'egypt',
        name: 'Egypt',
        rank: 16,
        flag: '🇪🇬',
        powerIndex: 0.1875,
        population: 102334404,
        totalMilitary: 438500,
        activeMilitary: 438500,
        reserveMilitary: 479000,
        tanks: 4946,
        aircraft: 1062,
        navalVessels: 319,
        nuclearWarheads: 0,
        defenseSpending: 4400000000,
        description: 'Egypt maintains one of the largest militaries in Africa and the Middle East, though modernization efforts face economic constraints.'
    },
    {
        id: 'australia',
        name: 'Australia',
        rank: 17,
        flag: '🇦🇺',
        powerIndex: 0.2000,
        population: 25499884,
        totalMilitary: 58206,
        activeMilitary: 58206,
        reserveMilitary: 28000,
        tanks: 59,
        aircraft: 467,
        navalVessels: 52,
        nuclearWarheads: 0,
        defenseSpending: 31800000000,
        description: 'Australia focuses on high-tech military capabilities and regional defense partnerships, though limited by smaller population.'
    },
    {
        id: 'canada',
        name: 'Canada',
        rank: 18,
        flag: '🇨🇦',
        powerIndex: 0.2125,
        population: 37742154,
        totalMilitary: 67492,
        activeMilitary: 67492,
        reserveMilitary: 51000,
        tanks: 82,
        aircraft: 395,
        navalVessels: 63,
        nuclearWarheads: 0,
        defenseSpending: 22800000000,
        description: 'Canada maintains modern military capabilities focused on NATO commitments and Arctic sovereignty, though faces equipment modernization challenges.'
    },
    {
        id: 'spain',
        name: 'Spain',
        rank: 19,
        flag: '🇪🇸',
        powerIndex: 0.2250,
        population: 46754778,
        totalMilitary: 121900,
        activeMilitary: 121900,
        reserveMilitary: 15150,
        tanks: 327,
        aircraft: 521,
        navalVessels: 46,
        nuclearWarheads: 0,
        defenseSpending: 20200000000,
        description: 'Spain maintains capable military forces within NATO framework, with focus on naval and expeditionary capabilities.'
    },
    {
        id: 'poland',
        name: 'Poland',
        rank: 20,
        flag: '🇵🇱',
        powerIndex: 0.2375,
        population: 37846611,
        totalMilitary: 114050,
        activeMilitary: 114050,
        reserveMilitary: 0,
        tanks: 1009,
        aircraft: 467,
        navalVessels: 83,
        nuclearWarheads: 0,
        defenseSpending: 11900000000,
        description: 'Poland has significantly increased defense spending and capabilities, modernizing forces in response to regional security concerns.'
    },
    {
        id: 'netherlands',
        name: 'Netherlands',
        rank: 21,
        flag: '🇳🇱',
        powerIndex: 0.2500,
        population: 17134872,
        totalMilitary: 35410,
        activeMilitary: 35410,
        reserveMilitary: 5200,
        tanks: 18,
        aircraft: 130,
        navalVessels: 54,
        nuclearWarheads: 0,
        defenseSpending: 13200000000,
        description: 'Netherlands maintains high-quality military forces with advanced technology, though limited by small size and population.'
    },
    {
        id: 'saudi-arabia',
        name: 'Saudi Arabia',
        rank: 22,
        flag: '🇸🇦',
        powerIndex: 0.2625,
        population: 34813871,
        totalMilitary: 227000,
        activeMilitary: 227000,
        reserveMilitary: 0,
        tanks: 1062,
        aircraft: 848,
        navalVessels: 55,
        nuclearWarheads: 0,
        defenseSpending: 57500000000,
        description: 'Saudi Arabia has invested heavily in modern military equipment, though operational effectiveness remains limited by training and experience gaps.'
    },
    {
        id: 'norway',
        name: 'Norway',
        rank: 23,
        flag: '🇳🇴',
        powerIndex: 0.2750,
        population: 5421241,
        totalMilitary: 23250,
        activeMilitary: 23250,
        reserveMilitary: 40000,
        tanks: 36,
        aircraft: 133,
        navalVessels: 62,
        nuclearWarheads: 0,
        defenseSpending: 7200000000,
        description: 'Norway maintains capable Arctic-focused military forces with advanced technology, though limited by very small population.'
    },
    {
        id: 'sweden',
        name: 'Sweden',
        rank: 24,
        flag: '🇸🇪',
        powerIndex: 0.2875,
        population: 10099265,
        totalMilitary: 24400,
        activeMilitary: 24400,
        reserveMilitary: 31800,
        tanks: 120,
        aircraft: 210,
        navalVessels: 267,
        nuclearWarheads: 0,
        defenseSpending: 7600000000,
        description: 'Sweden has rebuilt its military capabilities with focus on territorial defense and advanced indigenous technology.'
    },
    {
        id: 'ukraine',
        name: 'Ukraine',
        rank: 25,
        flag: '🇺🇦',
        powerIndex: 0.3000,
        population: 43733762,
        totalMilitary: 196600,
        activeMilitary: 196600,
        reserveMilitary: 900000,
        tanks: 858,
        aircraft: 132,
        navalVessels: 38,
        nuclearWarheads: 0,
        defenseSpending: 11900000000,
        description: 'Ukraine has gained significant combat experience but faces major equipment losses and infrastructure damage from ongoing conflict.'
    },
    {
        id: 'thailand',
        name: 'Thailand',
        rank: 26,
        flag: '🇹🇭',
        powerIndex: 0.3125,
        population: 69799978,
        totalMilitary: 360850,
        activeMilitary: 360850,
        reserveMilitary: 245000,
        tanks: 737,
        aircraft: 551,
        navalVessels: 293,
        nuclearWarheads: 0,
        defenseSpending: 7400000000,
        description: 'Thailand maintains substantial regional military forces, though modernization efforts face budget constraints and aging equipment.'
    },
    {
        id: 'brazil',
        name: 'Brazil',
        rank: 27,
        flag: '🇧🇷',
        powerIndex: 0.3250,
        population: 212559417,
        totalMilitary: 334500,
        activeMilitary: 334500,
        reserveMilitary: 1340000,
        tanks: 437,
        aircraft: 676,
        navalVessels: 110,
        nuclearWarheads: 0,
        defenseSpending: 19700000000,
        description: 'Brazil maintains the largest military in South America but faces modernization challenges and budget constraints.'
    },
    {
        id: 'algeria',
        name: 'Algeria',
        rank: 28,
        flag: '🇩🇿',
        powerIndex: 0.3375,
        population: 43851044,
        totalMilitary: 130000,
        activeMilitary: 130000,
        reserveMilitary: 150000,
        tanks: 2405,
        aircraft: 605,
        navalVessels: 85,
        nuclearWarheads: 0,
        defenseSpending: 9700000000,
        description: 'Algeria maintains significant military capabilities in North Africa, though faces modernization needs and regional security challenges.'
    },
    {
        id: 'greece',
        name: 'Greece',
        rank: 29,
        flag: '🇬🇷',
        powerIndex: 0.3500,
        population: 10423054,
        totalMilitary: 142700,
        activeMilitary: 142700,
        reserveMilitary: 291000,
        tanks: 1244,
        aircraft: 606,
        navalVessels: 180,
        nuclearWarheads: 0,
        defenseSpending: 5500000000,
        description: 'Greece maintains substantial military forces relative to its size, focused on regional defense and NATO commitments.'
    },
    {
        id: 'mexico',
        name: 'Mexico',
        rank: 30,
        flag: '🇲🇽',
        powerIndex: 0.3625,
        population: 128932753,
        totalMilitary: 277150,
        activeMilitary: 277150,
        reserveMilitary: 81500,
        tanks: 0,
        aircraft: 463,
        navalVessels: 194,
        nuclearWarheads: 0,
        defenseSpending: 7100000000,
        description: 'Mexico focuses on internal security and border defense, with limited conventional military capabilities compared to its population size.'
    },
    {
        id: 'finland',
        name: 'Finland',
        rank: 31,
        flag: '🇫🇮',
        powerIndex: 0.3750,
        population: 5540720,
        totalMilitary: 23800,
        activeMilitary: 23800,
        reserveMilitary: 900000,
        tanks: 200,
        aircraft: 165,
        navalVessels: 270,
        nuclearWarheads: 0,
        defenseSpending: 5100000000,
        description: 'Finland maintains strong territorial defense capabilities with large reserves and advanced technology.'
    },
    {
        id: 'vietnam',
        name: 'Vietnam',
        rank: 32,
        flag: '🇻🇳',
        powerIndex: 0.3875,
        population: 97338579,
        totalMilitary: 482000,
        activeMilitary: 482000,
        reserveMilitary: 5000000,
        tanks: 1829,
        aircraft: 226,
        navalVessels: 65,
        nuclearWarheads: 0,
        defenseSpending: 5500000000,
        description: 'Vietnam maintains substantial military forces with significant reserve capacity and regional influence.'
    },
    {
        id: 'argentina',
        name: 'Argentina',
        rank: 33,
        flag: '🇦🇷',
        powerIndex: 0.4000,
        population: 45195774,
        totalMilitary: 83000,
        activeMilitary: 83000,
        reserveMilitary: 0,
        tanks: 231,
        aircraft: 201,
        navalVessels: 39,
        nuclearWarheads: 0,
        defenseSpending: 3200000000,
        description: 'Argentina faces significant military modernization challenges and budget constraints affecting capabilities.'
    },
    {
        id: 'south-africa',
        name: 'South Africa',
        rank: 34,
        flag: '🇿🇦',
        powerIndex: 0.4125,
        population: 59308690,
        totalMilitary: 78150,
        activeMilitary: 78150,
        reserveMilitary: 15000,
        tanks: 195,
        aircraft: 213,
        navalVessels: 47,
        nuclearWarheads: 0,
        defenseSpending: 3600000000,
        description: 'South Africa maintains regional military capabilities but faces equipment aging and budget constraints.'
    },
    {
        id: 'chile',
        name: 'Chile',
        rank: 35,
        flag: '🇨🇱',
        powerIndex: 0.4250,
        population: 19116201,
        totalMilitary: 77200,
        activeMilitary: 77200,
        reserveMilitary: 40000,
        tanks: 140,
        aircraft: 186,
        navalVessels: 66,
        nuclearWarheads: 0,
        defenseSpending: 5200000000,
        description: 'Chile maintains modern military capabilities with focus on territorial defense and regional stability.'
    },
    {
        id: 'bangladesh',
        name: 'Bangladesh',
        rank: 36,
        flag: '🇧🇩',
        powerIndex: 0.4375,
        population: 164689383,
        totalMilitary: 160000,
        activeMilitary: 160000,
        reserveMilitary: 0,
        tanks: 320,
        aircraft: 162,
        navalVessels: 117,
        nuclearWarheads: 0,
        defenseSpending: 4100000000,
        description: 'Bangladesh maintains substantial forces but faces modernization needs and equipment limitations.'
    },
    {
        id: 'peru',
        name: 'Peru',
        rank: 37,
        flag: '🇵🇪',
        powerIndex: 0.4500,
        population: 32971854,
        totalMilitary: 81000,
        activeMilitary: 81000,
        reserveMilitary: 188000,
        tanks: 85,
        aircraft: 101,
        navalVessels: 66,
        nuclearWarheads: 0,
        defenseSpending: 2300000000,
        description: 'Peru maintains basic military capabilities focused on internal security and border defense.'
    },
    {
        id: 'colombia',
        name: 'Colombia',
        rank: 38,
        flag: '🇨🇴',
        powerIndex: 0.4625,
        population: 50882891,
        totalMilitary: 295000,
        activeMilitary: 295000,
        reserveMilitary: 35000,
        tanks: 0,
        aircraft: 454,
        navalVessels: 234,
        nuclearWarheads: 0,
        defenseSpending: 9800000000,
        description: 'Colombia focuses on internal security operations with substantial air and naval capabilities.'
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        rank: 39,
        flag: '🇲🇾',
        powerIndex: 0.4750,
        population: 32365999,
        totalMilitary: 113000,
        activeMilitary: 113000,
        reserveMilitary: 51600,
        tanks: 48,
        aircraft: 156,
        navalVessels: 101,
        nuclearWarheads: 0,
        defenseSpending: 3500000000,
        description: 'Malaysia maintains modern military capabilities focused on maritime security and regional defense.'
    },
    {
        id: 'myanmar',
        name: 'Myanmar',
        rank: 40,
        flag: '🇲🇲',
        powerIndex: 0.4875,
        population: 54409800,
        totalMilitary: 406000,
        activeMilitary: 406000,
        reserveMilitary: 0,
        tanks: 272,
        aircraft: 293,
        navalVessels: 227,
        nuclearWarheads: 0,
        defenseSpending: 2000000000,
        description: 'Myanmar maintains large military forces but faces internal conflicts and international isolation.'
    },
    {
        id: 'venezuela',
        name: 'Venezuela',
        rank: 41,
        flag: '🇻🇪',
        powerIndex: 0.5000,
        population: 28435940,
        totalMilitary: 123000,
        activeMilitary: 123000,
        reserveMilitary: 8000,
        tanks: 390,
        aircraft: 96,
        navalVessels: 49,
        nuclearWarheads: 0,
        defenseSpending: 1800000000,
        description: 'Venezuela faces significant military equipment deterioration and maintenance challenges due to economic crisis.'
    },
    {
        id: 'north-korea',
        name: 'North Korea',
        rank: 42,
        flag: '🇰🇵',
        powerIndex: 0.5125,
        population: 25778816,
        totalMilitary: 1280000,
        activeMilitary: 1280000,
        reserveMilitary: 600000,
        tanks: 5845,
        aircraft: 951,
        navalVessels: 967,
        nuclearWarheads: 40,
        defenseSpending: 4000000000,
        description: 'North Korea maintains large conventional forces and nuclear weapons but with outdated equipment and technology.'
    },
    {
        id: 'morocco',
        name: 'Morocco',
        rank: 43,
        flag: '🇲🇦',
        powerIndex: 0.5250,
        population: 36910560,
        totalMilitary: 195800,
        activeMilitary: 195800,
        reserveMilitary: 150000,
        tanks: 1348,
        aircraft: 245,
        navalVessels: 121,
        nuclearWarheads: 0,
        defenseSpending: 4800000000,
        description: 'Morocco maintains capable regional military forces with focus on territorial defense and regional security.'
    },
    {
        id: 'angola',
        name: 'Angola',
        rank: 44,
        flag: '🇦🇴',
        powerIndex: 0.5375,
        population: 32866272,
        totalMilitary: 107000,
        activeMilitary: 107000,
        reserveMilitary: 0,
        tanks: 140,
        aircraft: 270,
        navalVessels: 57,
        nuclearWarheads: 0,
        defenseSpending: 3000000000,
        description: 'Angola maintains substantial military forces but faces modernization and training challenges.'
    },
    {
        id: 'ecuador',
        name: 'Ecuador',
        rank: 45,
        flag: '🇪🇨',
        powerIndex: 0.5500,
        population: 17643054,
        totalMilitary: 40250,
        activeMilitary: 40250,
        reserveMilitary: 118000,
        tanks: 0,
        aircraft: 87,
        navalVessels: 82,
        nuclearWarheads: 0,
        defenseSpending: 2400000000,
        description: 'Ecuador maintains basic military capabilities focused on internal security and border defense.'
    },
    {
        id: 'belarus',
        name: 'Belarus',
        rank: 46,
        flag: '🇧🇾',
        powerIndex: 0.5625,
        population: 9449323,
        totalMilitary: 48000,
        activeMilitary: 48000,
        reserveMilitary: 289500,
        tanks: 627,
        aircraft: 183,
        navalVessels: 0,
        nuclearWarheads: 0,
        defenseSpending: 630000000,
        description: 'Belarus maintains Soviet-era military equipment with close ties to Russian military systems.'
    },
    {
        id: 'azerbaijan',
        name: 'Azerbaijan',
        rank: 47,
        flag: '🇦🇿',
        powerIndex: 0.5750,
        population: 10139177,
        totalMilitary: 126400,
        activeMilitary: 126400,
        reserveMilitary: 300000,
        tanks: 570,
        aircraft: 145,
        navalVessels: 25,
        nuclearWarheads: 0,
        defenseSpending: 2300000000,
        description: 'Azerbaijan has modernized military capabilities with focus on territorial defense and regional conflicts.'
    },
    {
        id: 'philippines',
        name: 'Philippines',
        rank: 48,
        flag: '🇵🇭',
        powerIndex: 0.5875,
        population: 109581078,
        totalMilitary: 143000,
        activeMilitary: 143000,
        reserveMilitary: 131000,
        tanks: 0,
        aircraft: 187,
        navalVessels: 82,
        nuclearWarheads: 0,
        defenseSpending: 4100000000,
        description: 'Philippines focuses on internal security and maritime defense with modernization efforts underway.'
    },
    {
        id: 'singapore',
        name: 'Singapore',
        rank: 49,
        flag: '🇸🇬',
        powerIndex: 0.6000,
        population: 5850342,
        totalMilitary: 51000,
        activeMilitary: 51000,
        reserveMilitary: 252500,
        tanks: 170,
        aircraft: 247,
        navalVessels: 49,
        nuclearWarheads: 0,
        defenseSpending: 11200000000,
        description: 'Singapore maintains highly advanced military capabilities with cutting-edge technology despite small size.'
    },
    {
        id: 'czech-republic',
        name: 'Czech Republic',
        rank: 50,
        flag: '🇨🇿',
        powerIndex: 0.6125,
        population: 10708981,
        totalMilitary: 28000,
        activeMilitary: 28000,
        reserveMilitary: 0,
        tanks: 123,
        aircraft: 91,
        navalVessels: 0,
        nuclearWarheads: 0,
        defenseSpending: 2700000000,
        description: 'Czech Republic maintains modern NATO-standard military capabilities with focus on collective defense.'
    },
    {
        id: 'jordan',
        name: 'Jordan',
        rank: 51,
        flag: '🇯🇴',
        powerIndex: 0.6250,
        population: 10203134,
        totalMilitary: 100500,
        activeMilitary: 100500,
        reserveMilitary: 65000,
        tanks: 1365,
        aircraft: 267,
        navalVessels: 27,
        nuclearWarheads: 0,
        defenseSpending: 2000000000,
        description: 'Jordan maintains capable military forces with focus on regional stability and border security.'
    },
    {
        id: 'serbia',
        name: 'Serbia',
        rank: 52,
        flag: '🇷🇸',
        powerIndex: 0.6375,
        population: 8737371,
        totalMilitary: 28150,
        activeMilitary: 28150,
        reserveMilitary: 50000,
        tanks: 232,
        aircraft: 84,
        navalVessels: 0,
        nuclearWarheads: 0,
        defenseSpending: 1000000000,
        description: 'Serbia maintains basic military capabilities with mix of Soviet and Western equipment.'
    },
    {
        id: 'tunisia',
        name: 'Tunisia',
        rank: 53,
        flag: '🇹🇳',
        powerIndex: 0.6500,
        population: 11818619,
        totalMilitary: 35800,
        activeMilitary: 35800,
        reserveMilitary: 0,
        tanks: 84,
        aircraft: 154,
        navalVessels: 52,
        nuclearWarheads: 0,
        defenseSpending: 800000000,
        description: 'Tunisia maintains basic military capabilities focused on internal security and border defense.'
    },
    {
        id: 'oman',
        name: 'Oman',
        rank: 54,
        flag: '🇴🇲',
        powerIndex: 0.6625,
        population: 5106626,
        totalMilitary: 42600,
        activeMilitary: 42600,
        reserveMilitary: 0,
        tanks: 154,
        aircraft: 126,
        navalVessels: 16,
        nuclearWarheads: 0,
        defenseSpending: 5700000000,
        description: 'Oman maintains modern military capabilities with focus on regional security and maritime defense.'
    },
    {
        id: 'syria',
        name: 'Syria',
        rank: 55,
        flag: '🇸🇾',
        powerIndex: 0.6750,
        population: 17500658,
        totalMilitary: 142000,
        activeMilitary: 142000,
        reserveMilitary: 0,
        tanks: 2720,
        aircraft: 452,
        navalVessels: 47,
        nuclearWarheads: 0,
        defenseSpending: 2500000000,
        description: 'Syria faces significant military degradation due to prolonged civil conflict and international sanctions.'
    },
    {
        id: 'sri-lanka',
        name: 'Sri Lanka',
        rank: 56,
        flag: '🇱🇰',
        powerIndex: 0.6875,
        population: 21413249,
        totalMilitary: 346000,
        activeMilitary: 346000,
        reserveMilitary: 5500,
        tanks: 62,
        aircraft: 35,
        navalVessels: 247,
        nuclearWarheads: 0,
        defenseSpending: 1900000000,
        description: 'Sri Lanka maintains substantial military forces but faces economic constraints and equipment limitations.'
    },
    {
        id: 'kenya',
        name: 'Kenya',
        rank: 57,
        flag: '🇰🇪',
        powerIndex: 0.7000,
        population: 53771296,
        totalMilitary: 24120,
        activeMilitary: 24120,
        reserveMilitary: 0,
        tanks: 76,
        aircraft: 91,
        navalVessels: 18,
        nuclearWarheads: 0,
        defenseSpending: 1000000000,
        description: 'Kenya maintains basic military capabilities with focus on regional peacekeeping and internal security.'
    },
    {
        id: 'uzbekistan',
        name: 'Uzbekistan',
        rank: 58,
        flag: '🇺🇿',
        powerIndex: 0.7125,
        population: 33469203,
        totalMilitary: 48000,
        activeMilitary: 48000,
        reserveMilitary: 0,
        tanks: 340,
        aircraft: 135,
        navalVessels: 0,
        nuclearWarheads: 0,
        defenseSpending: 1000000000,
        description: 'Uzbekistan maintains Soviet-era military equipment with gradual modernization efforts.'
    },
    {
        id: 'denmark',
        name: 'Denmark',
        rank: 59,
        flag: '🇩🇰',
        powerIndex: 0.7250,
        population: 5792202,
        totalMilitary: 15200,
        activeMilitary: 15200,
        reserveMilitary: 4200,
        tanks: 44,
        aircraft: 43,
        navalVessels: 83,
        nuclearWarheads: 0,
        defenseSpending: 4200000000,
        description: 'Denmark maintains high-quality military capabilities with focus on NATO commitments and Arctic operations.'
    },
    {
        id: 'ethiopia',
        name: 'Ethiopia',
        rank: 60,
        flag: '🇪🇹',
        powerIndex: 0.7375,
        population: 114963588,
        totalMilitary: 162000,
        activeMilitary: 162000,
        reserveMilitary: 0,
        tanks: 565,
        aircraft: 81,
        navalVessels: 0,
        nuclearWarheads: 0,
        defenseSpending: 500000000,
        description: 'Ethiopia maintains substantial military forces but faces internal conflicts and equipment limitations.'
    }
];

// Application State
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentSection = 'home';
let selectedCountry1 = null;
let selectedCountry2 = null;

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const featureCards = document.querySelectorAll('.feature-card');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeRankings();
    initializeComparison();
    initializeNations();
    initializeCoalitions();
    initializeAnimations();
    
    console.log('Military Power website initialized successfully!');
});

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    
    // Add animation class
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
}

function updateThemeIcon() {
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

// Navigation Management
function initializeNavigation() {
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Feature cards navigation
    featureCards.forEach(card => {
        card.addEventListener('click', handleFeatureCardClick);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

function handleNavigation(e) {
    e.preventDefault();
    const targetSection = e.target.getAttribute('href').substring(1);
    navigateToSection(targetSection);
    navMenu.classList.remove('active');
}

function handleFeatureCardClick(e) {
    const target = e.currentTarget.getAttribute('data-target');
    if (target) {
        navigateToSection(target);
    }
}

function navigateToSection(sectionId) {
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Show target section
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
            section.classList.add('fade-in');
        }
    });
    
    currentSection = sectionId;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Rankings Management
function initializeRankings() {
    const rankingsList = document.getElementById('rankingsList');
    if (!rankingsList) return;
    
    renderRankings();
}

function renderRankings() {
    const rankingsList = document.getElementById('rankingsList');
    rankingsList.innerHTML = '';
    
    // Sort militaryData by rank ascending
    const sortedData = militaryData.slice().sort((a, b) => a.rank - b.rank);
    
    sortedData.forEach((country, index) => {
        const rankingItem = createRankingItem(country);
        rankingItem.style.animationDelay = `${index * 0.1}s`;
        rankingsList.appendChild(rankingItem);
    });
}

function createRankingItem(country) {
    const item = document.createElement('div');
    item.className = 'ranking-item slide-in-left';
    item.innerHTML = `
        <div class="ranking-position">${country.rank}</div>
        <div class="ranking-flag">${country.flag}</div>
        <div class="ranking-info">
            <div class="ranking-name">${country.name}</div>
            <div class="ranking-score">Power Index: ${country.powerIndex} | Active Military: ${formatNumber(country.activeMilitary)}</div>
        </div>
    `;
    
    item.addEventListener('click', () => showCountryDetails(country));
    return item;
}

function showCountryDetails(country) {
    const modal = createCountryModal(country);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal(modal);
    });
    
    // ESC key to close
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function createCountryModal(country) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="country-detail">
                <div class="country-header">
                    <span class="country-flag-large">${country.flag}</span>
                    <div class="country-title">
                        <h2>${country.name}</h2>
                        <div class="country-rank">Rank #${country.rank}</div>
                    </div>
                </div>
                <div class="country-description">
                    <p>${country.description}</p>
                </div>
                <div class="country-stats">
                    <div class="stat-grid">
                        <div class="stat-item">
                            <span class="stat-label">Power Index</span>
                            <span class="stat-value">${country.powerIndex}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Population</span>
                            <span class="stat-value">${formatNumber(country.population)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Active Military</span>
                            <span class="stat-value">${formatNumber(country.activeMilitary)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Reserve Military</span>
                            <span class="stat-value">${formatNumber(country.reserveMilitary)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Tanks</span>
                            <span class="stat-value">${formatNumber(country.tanks)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Aircraft</span>
                            <span class="stat-value">${formatNumber(country.aircraft)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Naval Vessels</span>
                            <span class="stat-value">${formatNumber(country.navalVessels)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Nuclear Warheads</span>
                            <span class="stat-value">${formatNumber(country.nuclearWarheads)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Defense Spending</span>
                            <span class="stat-value">$${formatNumber(country.defenseSpending)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: var(--bg-primary);
            border-radius: var(--radius-xl);
            padding: var(--spacing-xxl);
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            margin: var(--spacing-lg);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideInUp 0.3s ease;
        }
        
        .modal-close {
            position: absolute;
            top: var(--spacing-lg);
            right: var(--spacing-lg);
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--text-secondary);
            transition: color var(--transition-fast);
        }
        
        .modal-close:hover {
            color: var(--brand-secondary);
        }
        
        .country-header {
            display: flex;
            align-items: center;
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-xl);
        }
        
        .country-flag-large {
            font-size: 4rem;
        }
        
        .country-title h2 {
            font-family: var(--font-display);
            font-size: var(--font-size-3xl);
            margin-bottom: var(--spacing-sm);
            color: var(--brand-primary);
        }
        
        .country-rank {
            background: linear-gradient(45deg, var(--brand-primary), var(--brand-accent));
            color: white;
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: var(--radius-md);
            font-weight: bold;
            display: inline-block;
        }
        
        .country-description {
            margin-bottom: var(--spacing-xl);
            font-size: var(--font-size-lg);
            line-height: 1.8;
            color: var(--text-secondary);
        }
        
        .stat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--spacing-lg);
        }
        
        .stat-item {
            background: var(--bg-secondary);
            padding: var(--spacing-lg);
            border-radius: var(--radius-md);
            text-align: center;
        }
        
        .stat-label {
            display: block;
            font-size: var(--font-size-sm);
            color: var(--text-secondary);
            margin-bottom: var(--spacing-sm);
        }
        
        .stat-value {
            display: block;
            font-size: var(--font-size-xl);
            font-weight: bold;
            color: var(--brand-primary);
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        document.head.appendChild(style);
    }
    
    return modal;
}

function closeModal(modal) {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

// Comparison Tool
function initializeComparison() {
    const country1Select = document.getElementById('country1');
    const country2Select = document.getElementById('country2');
    const compareBtn = document.getElementById('compareBtn');
    
    if (!country1Select || !country2Select || !compareBtn) return;
    
    // Populate country selects
    militaryData.forEach(country => {
        const option1 = new Option(country.name, country.id);
        const option2 = new Option(country.name, country.id);
        country1Select.appendChild(option1);
        country2Select.appendChild(option2);
    });
    
    // Compare button event
    compareBtn.addEventListener('click', performComparison);
    
    // Auto-compare when both countries selected
    country1Select.addEventListener('change', checkAutoCompare);
    country2Select.addEventListener('change', checkAutoCompare);
}

function checkAutoCompare() {
    const country1 = document.getElementById('country1').value;
    const country2 = document.getElementById('country2').value;
    
    if (country1 && country2 && country1 !== country2) {
        performComparison();
    }
}

function performComparison() {
    const country1Id = document.getElementById('country1').value;
    const country2Id = document.getElementById('country2').value;
    const resultDiv = document.getElementById('comparisonResult');
    
    if (!country1Id || !country2Id) {
        showNotification('Please select both countries to compare', 'warning');
        return;
    }
    
    if (country1Id === country2Id) {
        showNotification('Please select different countries to compare', 'warning');
        return;
    }
    
    const country1 = militaryData.find(c => c.id === country1Id);
    const country2 = militaryData.find(c => c.id === country2Id);
    
    resultDiv.innerHTML = createComparisonHTML(country1, country2);
    resultDiv.classList.add('fade-in');
}

function createComparisonHTML(country1, country2) {
    const stats = [
        { key: 'rank', label: 'Global Rank', format: (val) => `#${val}` },
        { key: 'powerIndex', label: 'Power Index', format: (val) => val },
        { key: 'activeMilitary', label: 'Active Military', format: formatNumber },
        { key: 'reserveMilitary', label: 'Reserve Military', format: formatNumber },
        { key: 'tanks', label: 'Tanks', format: formatNumber },
        { key: 'aircraft', label: 'Aircraft', format: formatNumber },
        { key: 'navalVessels', label: 'Naval Vessels', format: formatNumber },
        { key: 'nuclearWarheads', label: 'Nuclear Warheads', format: formatNumber },
        { key: 'defenseSpending', label: 'Defense Spending', format: (val) => `$${formatNumber(val)}` }
    ];
    
    let comparisonHTML = `
        <div class="country-comparison">
            <div class="comparison-header">
                <span class="comparison-flag">${country1.flag}</span>
                <h3>${country1.name}</h3>
            </div>
            <div class="comparison-stats">
    `;
    
    stats.forEach(stat => {
        const value1 = country1[stat.key];
        const value2 = country2[stat.key];
        let winner = '';
        
        if (stat.key === 'rank' || stat.key === 'powerIndex') {
            winner = value1 < value2 ? 'winner' : '';
        } else {
            winner = value1 > value2 ? 'winner' : '';
        }
        
        comparisonHTML += `
            <div class="comparison-stat ${winner}">
                <span class="stat-label">${stat.label}</span>
                <span class="stat-value">${stat.format(value1)}</span>
            </div>
        `;
    });
    
    comparisonHTML += `
            </div>
        </div>
        <div class="comparison-divider">VS</div>
        <div class="country-comparison">
            <div class="comparison-header">
                <span class="comparison-flag">${country2.flag}</span>
                <h3>${country2.name}</h3>
            </div>
            <div class="comparison-stats">
    `;
    
    stats.forEach(stat => {
        const value1 = country1[stat.key];
        const value2 = country2[stat.key];
        let winner = '';
        
        if (stat.key === 'rank' || stat.key === 'powerIndex') {
            winner = value2 < value1 ? 'winner' : '';
        } else {
            winner = value2 > value1 ? 'winner' : '';
        }
        
        comparisonHTML += `
            <div class="comparison-stat ${winner}">
                <span class="stat-label">${stat.label}</span>
                <span class="stat-value">${stat.format(value2)}</span>
            </div>
        `;
    });
    
    comparisonHTML += `
            </div>
        </div>
    `;
    
    return comparisonHTML;
}

// Nations Index
function initializeNations() {
    const nationsGrid = document.getElementById('nationsGrid');
    if (!nationsGrid) return;
    
    // Sort militaryData by rank ascending
    const sortedData = militaryData.slice().sort((a, b) => a.rank - b.rank);
    
    sortedData.forEach((country, index) => {
        const nationCard = document.createElement('div');
        nationCard.className = 'nation-card';
        nationCard.style.animationDelay = `${index * 0.05}s`;
        nationCard.innerHTML = `
            <div class="nation-flag">${country.flag}</div>
            <div class="nation-name">${country.name}</div>
            <div class="nation-rank">Rank #${country.rank}</div>
        `;
        
        nationCard.addEventListener('click', () => showCountryDetails(country));
        nationsGrid.appendChild(nationCard);
    });
}

// Coalitions Builder
function initializeCoalitions() {
    const availableCountries = document.getElementById('availableCountries');
    if (!availableCountries) return;
    
    availableCountries.innerHTML = '<h3>Available Countries</h3><div class="countries-pool"></div>';
    const countriesPool = availableCountries.querySelector('.countries-pool');
    
    militaryData.forEach(country => {
        const countryChip = document.createElement('div');
        countryChip.className = 'country-chip';
        countryChip.draggable = true;
        countryChip.dataset.countryId = country.id;
        countryChip.innerHTML = `${country.flag} ${country.name}`;
        
        countryChip.addEventListener('dragstart', handleDragStart);
        countriesPool.appendChild(countryChip);
    });
    
    // Setup drop zones
    const coalitionA = document.getElementById('coalitionA');
    const coalitionB = document.getElementById('coalitionB');
    
    [coalitionA, coalitionB].forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.countryId);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    const countryId = e.dataTransfer.getData('text/plain');
    const country = militaryData.find(c => c.id === countryId);
    const dropZone = e.currentTarget;
    
    // Remove empty message
    const emptyMessage = dropZone.querySelector('.empty-coalition');
    if (emptyMessage) {
        emptyMessage.remove();
    }
    
    // Add country to coalition
    const countryChip = document.createElement('div');
    countryChip.className = 'coalition-country';
    countryChip.innerHTML = `${country.flag} ${country.name} <button class="remove-country">&times;</button>`;
    
    countryChip.querySelector('.remove-country').addEventListener('click', () => {
        countryChip.remove();
        updateCoalitionStats();
        
        // Add back empty message if needed
        if (dropZone.children.length === 0) {
            dropZone.innerHTML = '<p class="empty-coalition">Drag countries here to build this coalition</p>';
        }
    });
    
    dropZone.appendChild(countryChip);
    updateCoalitionStats();
}

function updateCoalitionStats() {
    // Calculate and display coalition statistics
    const coalitionA = document.getElementById('coalitionA');
    const coalitionB = document.getElementById('coalitionB');
    const coalitionAStats = document.getElementById('coalitionAStats');
    const coalitionBStats = document.getElementById('coalitionBStats');
    
    const statsA = calculateCoalitionStats(coalitionA);
    const statsB = calculateCoalitionStats(coalitionB);
    
    coalitionAStats.innerHTML = createCoalitionStatsHTML(statsA);
    coalitionBStats.innerHTML = createCoalitionStatsHTML(statsB);
}

function calculateCoalitionStats(coalition) {
    const countries = Array.from(coalition.querySelectorAll('.coalition-country'));
    const stats = {
        totalCountries: countries.length,
        totalMilitary: 0,
        totalTanks: 0,
        totalAircraft: 0,
        totalNaval: 0,
        totalNuclear: 0,
        totalSpending: 0
    };
    
    countries.forEach(countryElement => {
        const countryName = countryElement.textContent.trim().replace('×', '').trim();
        const country = militaryData.find(c => countryName.includes(c.name));
        
        if (country) {
            stats.totalMilitary += country.activeMilitary;
            stats.totalTanks += country.tanks;
            stats.totalAircraft += country.aircraft;
            stats.totalNaval += country.navalVessels;
            stats.totalNuclear += country.nuclearWarheads;
            stats.totalSpending += country.defenseSpending;
        }
    });
    
    return stats;
}

function createCoalitionStatsHTML(stats) {
    if (stats.totalCountries === 0) {
        return '<p class="no-stats">No countries in coalition</p>';
    }
    
    return `
        <div class="coalition-summary">
            <h4>Coalition Summary</h4>
            <div class="stat-row">
                <span>Countries:</span>
                <span>${stats.totalCountries}</span>
            </div>
            <div class="stat-row">
                <span>Total Military:</span>
                <span>${formatNumber(stats.totalMilitary)}</span>
            </div>
            <div class="stat-row">
                <span>Total Tanks:</span>
                <span>${formatNumber(stats.totalTanks)}</span>
            </div>
            <div class="stat-row">
                <span>Total Aircraft:</span>
                <span>${formatNumber(stats.totalAircraft)}</span>
            </div>
            <div class="stat-row">
                <span>Naval Vessels:</span>
                <span>${formatNumber(stats.totalNaval)}</span>
            </div>
            <div class="stat-row">
                <span>Nuclear Warheads:</span>
                <span>${formatNumber(stats.totalNuclear)}</span>
            </div>
            <div class="stat-row">
                <span>Defense Spending:</span>
                <span>$${formatNumber(stats.totalSpending)}</span>
            </div>
        </div>
    `;
}

// Animation Management
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .power-card, .flashpoint-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function formatNumber(num) {
    if (num === 0) return '0';
    if (num < 1000) return num.toString();
    if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
    if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M';
    return (num / 1000000000).toFixed(1) + 'B';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--bg-primary);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--spacing-md) var(--spacing-lg);
                box-shadow: 0 5px 15px var(--shadow);
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: var(--spacing-md);
                max-width: 400px;
                animation: slideInRight 0.3s ease;
            }
            
            .notification-info {
                border-left: 4px solid var(--text-accent);
            }
            
            .notification-success {
                border-left: 4px solid var(--success);
            }
            
            .notification-warning {
                border-left: 4px solid var(--warning);
            }
            
            .notification-error {
                border-left: 4px solid var(--danger);
            }
            
            .notification-message {
                flex: 1;
                font-size: var(--font-size-sm);
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: var(--font-size-lg);
                cursor: pointer;
                color: var(--text-secondary);
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: var(--text-primary);
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => closeNotification(notification));
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification);
        }
    }, 5000);
}

function closeNotification(notification) {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search countries...';
    searchInput.className = 'search-input';
    
    // Add search to rankings section
    const rankingsSection = document.getElementById('rankings');
    if (rankingsSection) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.appendChild(searchInput);
        
        const sectionHeader = rankingsSection.querySelector('.section-header');
        sectionHeader.appendChild(searchContainer);
        
        searchInput.addEventListener('input', handleSearch);
    }
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rankingItems = document.querySelectorAll('.ranking-item');
    
    rankingItems.forEach(item => {
        const countryName = item.querySelector('.ranking-name').textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Keyboard Navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key to close modals
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal-overlay');
            modals.forEach(modal => closeModal(modal));
        }
        
        // Number keys for quick navigation
        if (e.key >= '1' && e.key <= '6') {
            const sections = ['home', 'rankings', 'compare', 'nations', 'coalitions', 'military-ranks'];
            const sectionIndex = parseInt(e.key) - 1;
            if (sections[sectionIndex]) {
                navigateToSection(sections[sectionIndex]);
            }
        }
        
        // T key for theme toggle
        if (e.key.toLowerCase() === 't' && !e.target.matches('input, textarea, select')) {
            toggleTheme();
        }
    });
}

// Performance Optimization
function initializePerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Handle scroll events here if needed
        }, 100);
    });
}

// Error Handling
function initializeErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        showNotification('An error occurred. Please refresh the page.', 'error');
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled Promise Rejection:', e.reason);
        showNotification('A network error occurred. Please try again.', 'error');
    });
}

// Additional CSS for dynamic elements
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .search-container {
            margin-top: var(--spacing-lg);
        }
        
        .search-input {
            width: 100%;
            max-width: 400px;
            padding: var(--spacing-md);
            border: 2px solid var(--border-color);
            border-radius: var(--radius-md);
            background: var(--bg-primary);
            color: var(--text-primary);
            font-size: var(--font-size-base);
            transition: border-color var(--transition-fast);
        }
        
        .search-input:focus {
            outline: none;
            border-color: var(--brand-accent);
        }
        
        .country-chip {
            display: inline-block;
            background: var(--bg-secondary);
            padding: var(--spacing-sm) var(--spacing-md);
            margin: var(--spacing-xs);
            border-radius: var(--radius-md);
            cursor: grab;
            transition: all var(--transition-fast);
            border: 2px solid transparent;
        }
        
        .country-chip:hover {
            background: var(--bg-tertiary);
            border-color: var(--brand-accent);
        }
        
        .country-chip:active {
            cursor: grabbing;
        }
        
        .coalition-country {
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-sm);
            background: var(--brand-primary);
            color: white;
            padding: var(--spacing-sm) var(--spacing-md);
            margin: var(--spacing-xs);
            border-radius: var(--radius-md);
            font-size: var(--font-size-sm);
        }
        
        .remove-country {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--font-size-sm);
        }
        
        .remove-country:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        
        .coalition-summary {
            background: var(--bg-primary);
            padding: var(--spacing-lg);
            border-radius: var(--radius-md);
            margin-top: var(--spacing-md);
        }
        
        .coalition-summary h4 {
            margin-bottom: var(--spacing-md);
            color: var(--brand-primary);
            font-family: var(--font-display);
        }
        
        .stat-row {
            display: flex;
            justify-content: space-between;
            padding: var(--spacing-sm) 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .stat-row:last-child {
            border-bottom: none;
        }
        
        .no-stats {
            text-align: center;
            color: var(--text-secondary);
            font-style: italic;
            padding: var(--spacing-lg);
        }
        
        .comparison-header {
            text-align: center;
            margin-bottom: var(--spacing-lg);
        }
        
        .comparison-flag {
            font-size: var(--font-size-3xl);
            display: block;
            margin-bottom: var(--spacing-md);
        }
        
        .comparison-header h3 {
            font-family: var(--font-display);
            color: var(--brand-primary);
            margin: 0;
        }
        
        .comparison-stats {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
        }
        
        .comparison-stat {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--spacing-md);
            background: var(--bg-primary);
            border-radius: var(--radius-md);
            transition: all var(--transition-fast);
        }
        
        .comparison-stat.winner {
            background: linear-gradient(90deg, var(--success), rgba(40, 167, 69, 0.1));
            border-left: 4px solid var(--success);
            transform: scale(1.02);
        }
        
        .comparison-stat .stat-label {
            font-weight: 500;
            color: var(--text-secondary);
        }
        
        .comparison-stat .stat-value {
            font-weight: bold;
            color: var(--text-primary);
        }
        
        .comparison-stat.winner .stat-value {
            color: var(--success);
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease forwards;
        }
        
        .theme-transition {
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .search-input {
                max-width: 100%;
            }
            
            .country-chip {
                display: block;
                margin: var(--spacing-xs) 0;
            }
            
            .coalition-country {
                display: flex;
                margin: var(--spacing-xs) 0;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeRankings();
    initializeComparison();
    initializeNations();
    initializeCoalitions();
    initializeAnimations();
    initializeSearch();
    initializeKeyboardNavigation();
    initializePerformanceOptimizations();
    initializeErrorHandling();
    addDynamicStyles();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to Military Power 2025! Use keyboard shortcuts: 1-6 for navigation, T for theme toggle.', 'info');
    }, 1000);

    // Show condemnation notification
    setTimeout(() => {
        showNotification('militarypower.online condemns the actions of Israel', 'warning');
    }, 4000);
    
    console.log('Military Power website initialized successfully!');
    console.log('Features loaded: Theme toggle, Navigation, Rankings, Comparison, Nations, Coalitions, Search, Keyboard shortcuts');
});

// Export functions for potential external use
window.MilitaryPower = {
    navigateToSection,
    toggleTheme,
    showNotification,
    militaryData,
    formatNumber
};
