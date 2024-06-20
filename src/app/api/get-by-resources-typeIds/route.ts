// app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {

  const data = {
    "dt": [
        {
            "rid": 0,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/0/default_icon-f63c84ba.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 2,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/2/GemSaviour_168x168-ab06cffe.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 3,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/3/FortuneGods_168x168-3aff733d.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 6,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/6/Medusa2_168x168-2a9f180b.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 7,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/7/Medusa1_168x168-d4608fed.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 18,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/18/HoodWolf_168x168-843c442f.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 24,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/24/WinWinWon_168x168-913cf3ef.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 25,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/25/PlushieFrenzy_168x168-ab029c99.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 26,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/26/TreeofFortune_168x168-631774c6.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 28,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/28/Hotpot_168x168-d59cd564.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 29,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/29/DragonLegend_168x168-91db6a15.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 31,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/31/BaccaratDeluxe_168x168-d60abb20.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 33,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/33/HipHopPanda_168x168-15547bc6.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 34,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/34/LegendofHouYi_168x168-13f58e2b.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 35,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/35/Mr.Hallow_168x168-d9bf8dcf.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 36,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/36/ProsperityLion_168x168_-92038410.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 37,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/37/SantasGiftRush_168x168-c54bc748.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 38,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/38/GemSaviourSword_168x168-e0c2f395.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 39,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/39/PiggyGold_168x168-7c105c37.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 40,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/40/JungleDelight_168x168-5c2bb748.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 41,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/41/SymbolsofEgypt_168x168-29fa097f.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 42,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/42/GaneshaGold_168x168-cdedd446.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 44,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/44/EmperorsFavour_168x168-fea2651e.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 48,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/48/DoubleFortune_168x168-8e865d56.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 50,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/50/JourneytotheWealth_168x168-5eb1be65.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 53,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/53/TheGreatIcescape_168x168_-507c8898.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 54,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/54/CaptainsBounty_168x168-f50bc63d.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 59,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/59/NinjavsSamurai_168x168-e2a52085.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 60,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/60/LeprechaunRiches_168x168-0b05dc84.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 61,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/61/FlirtingScholar_168x168-03cb5d2d.png",
            "l": "en-US",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 0,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/0/default_icon-f63c84ba.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 1,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/1/HoneyTrap_of_DiaoChan_168x168-b93b8e16.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 2,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/2/GemSaviour_168x168-ab06cffe.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 3,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/3/FortuneGods_168x168-3aff733d.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 6,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/6/Medusa2_168x168-2a9f180b.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 7,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/7/Medusa1_168x168-d4608fed.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:09"
        },
        {
            "rid": 18,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/18/HoodWolf_168x168-843c442f.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 24,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/24/WinWinWon_168x168-913cf3ef.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 25,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/25/PlushieFrenzy_168x168-ab029c99.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 26,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/26/TreeofFortune_168x168-631774c6.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 28,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/28/Hotpot_168x168-d59cd564.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 29,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/29/DragonLegend_168x168-91db6a15.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 31,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/31/BaccaratDeluxe_168x168-d60abb20.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 33,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/33/HipHopPanda_168x168-15547bc6.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 34,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/34/LegendofHouYi_168x168-13f58e2b.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 35,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/35/Mr.Hallow_168x168-d9bf8dcf.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 36,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/36/ProsperityLion_168x168_-92038410.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 37,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/37/SantasGiftRush_168x168-c54bc748.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 38,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/38/GemSaviourSword_168x168-e0c2f395.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 39,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/39/PiggyGold_168x168-7c105c37.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 40,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/40/JungleDelight_168x168-5c2bb748.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 41,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/41/SymbolsofEgypt_168x168-29fa097f.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 42,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/42/GaneshaGold_168x168-cdedd446.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 44,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/44/EmperorsFavour_168x168-fea2651e.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 48,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/48/DoubleFortune_168x168-8e865d56.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 50,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/50/JourneytotheWealth_168x168-5eb1be65.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 53,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/53/TheGreatIcescape_168x168_-507c8898.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 54,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/54/CaptainsBounty_168x168-f50bc63d.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 59,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/59/NinjavsSamurai_168x168-e2a52085.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 61,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/61/FlirtingScholar_168x168-03cb5d2d.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 60,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/60/LeprechaunRiches_168x168-0b05dc84.png",
            "l": "zh-CN",
            "ut": "2019-09-27T10:57:10"
        },
        {
            "rid": 62,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/62/GemSaviourConquest_168x168-3bff30bd.png",
            "l": "zh-CN",
            "ut": "2019-09-30T04:54:27"
        },
        {
            "rid": 62,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/62/GemSaviourConquest_168x168-3bff30bd.png",
            "l": "en-US",
            "ut": "2019-09-30T04:54:27"
        },
        {
            "rid": 64,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/64/MuayThai_168x168-8638e0c1.png",
            "l": "zh-CN",
            "ut": "2019-10-01T12:08:20"
        },
        {
            "rid": 64,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/64/MuayThai_168x168-8638e0c1.png",
            "l": "en-US",
            "ut": "2019-10-01T12:08:21"
        },
        {
            "rid": 63,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/63/DragonTigerLuck_168x168-5894f51d.png",
            "l": "zh-CN",
            "ut": "2019-10-03T08:07:13"
        },
        {
            "rid": 63,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/63/DragonTigerLuck_168x168-5894f51d.png",
            "l": "en-US",
            "ut": "2019-10-03T08:07:13"
        },
        {
            "rid": 65,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/65/MahjongWays_168x168-cc7e08cc.png",
            "l": "zh-CN",
            "ut": "2019-10-18T09:33:17"
        },
        {
            "rid": 20,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/20/ReelLove_168x168-5038627d.png",
            "l": "zh-CN",
            "ut": "2019-11-22T04:42:03"
        },
        {
            "rid": 20,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/20/ReelLove_168x168-5038627d.png",
            "l": "en-US",
            "ut": "2019-11-22T04:42:03"
        },
        {
            "rid": 57,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/57/DragonHatch_168x168-456337e5.png",
            "l": "zh-CN",
            "ut": "2019-12-16T08:30:33"
        },
        {
            "rid": 57,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/57/DragonHatch_168x168-456337e5.png",
            "l": "en-US",
            "ut": "2019-12-16T08:30:33"
        },
        {
            "rid": 68,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/68/FortuneMouse_168x168-47dbb338.png",
            "l": "zh-CN",
            "ut": "2019-12-27T09:28:28"
        },
        {
            "rid": 68,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/68/FortuneMouse_168x168-47dbb338.png",
            "l": "en-US",
            "ut": "2019-12-27T09:28:29"
        },
        {
            "rid": 70,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/70/Candy Burst 168x168.png",
            "l": "zh-CN",
            "ut": "2020-02-13T09:58:37"
        },
        {
            "rid": 70,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/70/Candy Burst 168x168.png",
            "l": "en-US",
            "ut": "2020-02-13T09:58:37"
        },
        {
            "rid": 71,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/71/caishen-wins_168_168-86186b0c.png",
            "l": "zh-CN",
            "ut": "2020-02-19T02:50:48"
        },
        {
            "rid": 71,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/71/caishen-wins_168_168-86186b0c.png",
            "l": "en-US",
            "ut": "2020-02-19T02:50:48"
        },
        {
            "rid": 67,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/67/ShaolinSoccer_168x168-35282522.png",
            "l": "zh-CN",
            "ut": "2020-02-19T03:15:29"
        },
        {
            "rid": 67,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/67/ShaolinSoccer_168x168-35282522.png",
            "l": "en-US",
            "ut": "2020-02-19T03:15:29"
        },
        {
            "rid": 74,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/74/MahjongWaysTwo_168x168-1e5dbeee.png",
            "l": "zh-CN",
            "ut": "2020-03-06T08:37:45"
        },
        {
            "rid": 74,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/74/MahjongWaysTwo_168x168-1e5dbeee.png",
            "l": "en-US",
            "ut": "2020-03-06T08:37:45"
        },
        {
            "rid": 69,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/69/BikiniParadise_168x168-663109e3.png",
            "l": "zh-CN",
            "ut": "2020-03-19T09:46:20"
        },
        {
            "rid": 73,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/73/EgyptsBook_168_168-6ff312b3.png",
            "l": "zh-CN",
            "ut": "2020-04-07T10:20:11"
        },
        {
            "rid": 73,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/73/EgyptsBook_168_168-6ff312b3.png",
            "l": "en-US",
            "ut": "2020-04-07T10:20:11"
        },
        {
            "rid": 75,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/75/GaneshaFortune_168_168-8c160aaa.png",
            "l": "zh-CN",
            "ut": "2020-04-14T06:57:08"
        },
        {
            "rid": 75,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/75/GaneshaFortune_168_168-8c160aaa.png",
            "l": "en-US",
            "ut": "2020-04-14T06:57:08"
        },
        {
            "rid": 82,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/82/SGS-e7840b27.png",
            "l": "zh-CN",
            "ut": "2020-05-28T02:37:39"
        },
        {
            "rid": 82,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/82/SGS-e7840b27.png",
            "l": "en-US",
            "ut": "2020-05-28T02:37:39"
        },
        {
            "rid": 79,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/79/SGS-ea3acc20.png",
            "l": "zh-CN",
            "ut": "2020-06-03T07:50:47"
        },
        {
            "rid": 79,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/79/SGS-ea3acc20.png",
            "l": "en-US",
            "ut": "2020-06-03T07:50:47"
        },
        {
            "rid": 83,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/83/SGS-215874f9.png",
            "l": "zh-CN",
            "ut": "2020-06-16T01:50:12"
        },
        {
            "rid": 83,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/83/SGS-215874f9.png",
            "l": "en-US",
            "ut": "2020-06-16T01:50:12"
        },
        {
            "rid": 85,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/85/SGS-b0340781.png",
            "l": "zh-CN",
            "ut": "2020-07-06T09:33:28"
        },
        {
            "rid": 80,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/80/SGS-eab4819f.png",
            "l": "zh-CN",
            "ut": "2020-07-08T08:39:10"
        },
        {
            "rid": 80,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/80/SGS-eab4819f.png",
            "l": "en-US",
            "ut": "2020-07-08T08:39:10"
        },
        {
            "rid": 84,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/84/SGS-88a1b15b.png",
            "l": "zh-CN",
            "ut": "2020-07-17T02:34:13"
        },
        {
            "rid": 84,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/84/SGS-88a1b15b.png",
            "l": "en-US",
            "ut": "2020-07-17T02:34:13"
        },
        {
            "rid": 92,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/92/SGS-6814e138.png",
            "l": "zh-CN",
            "ut": "2020-07-24T03:40:00"
        },
        {
            "rid": 69,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/69/BikiniParadise_168x168-663109e3.png",
            "l": "en-US",
            "ut": "2020-07-24T07:57:50"
        },
        {
            "rid": 85,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/85/SGS-b0340781.png",
            "l": "en-US",
            "ut": "2020-07-27T11:08:59"
        },
        {
            "rid": 65,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/65/MahjongWays_168x168-cc7e08cc.png",
            "l": "en-US",
            "ut": "2020-07-27T13:51:59"
        },
        {
            "rid": 86,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/86/SGS-98a0a8a5.png",
            "l": "zh-CN",
            "ut": "2020-07-28T12:03:48"
        },
        {
            "rid": 86,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/86/SGS-98a0a8a5.png",
            "l": "en-US",
            "ut": "2020-07-28T12:03:48"
        },
        {
            "rid": 87,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/87/SGS-a63b7158.png",
            "l": "zh-CN",
            "ut": "2020-07-29T09:47:50"
        },
        {
            "rid": 87,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/87/SGS-a63b7158.png",
            "l": "en-US",
            "ut": "2020-07-29T09:47:50"
        },
        {
            "rid": 58,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/58/SGS-777a1211.png",
            "l": "zh-CN",
            "ut": "2020-08-07T08:05:18"
        },
        {
            "rid": 58,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/58/SGS-777a1211.png",
            "l": "en-US",
            "ut": "2020-08-07T08:05:18"
        },
        {
            "rid": 90,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/90/SGS-aa9b055c.png",
            "l": "zh-CN",
            "ut": "2020-08-21T07:12:00"
        },
        {
            "rid": 90,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/90/SGS-aa9b055c.png",
            "l": "en-US",
            "ut": "2020-08-21T07:12:00"
        },
        {
            "rid": 92,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/92/SGS-6814e138.png",
            "l": "en-US",
            "ut": "2020-09-01T03:51:33"
        },
        {
            "rid": 93,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/93/SGS-b30b213e.png",
            "l": "zh-CN",
            "ut": "2020-09-17T03:34:59"
        },
        {
            "rid": 93,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/93/SGS-b30b213e.png",
            "l": "en-US",
            "ut": "2020-09-17T03:34:59"
        },
        {
            "rid": 88,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/88/SGS-0d34a88c.png",
            "l": "zh-CN",
            "ut": "2020-09-28T09:10:25"
        },
        {
            "rid": 88,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/88/SGS-0d34a88c.png",
            "l": "en-US",
            "ut": "2020-09-28T09:10:25"
        },
        {
            "rid": 97,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/97/SGS-bb7bb55f.png",
            "l": "zh-CN",
            "ut": "2020-09-29T07:32:56"
        },
        {
            "rid": 97,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/97/SGS-bb7bb55f.png",
            "l": "en-US",
            "ut": "2020-09-29T07:32:56"
        },
        {
            "rid": 94,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/94/SGS-0f58b776.png",
            "l": "zh-CN",
            "ut": "2020-09-29T07:33:48"
        },
        {
            "rid": 94,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/94/SGS-0f58b776.png",
            "l": "en-US",
            "ut": "2020-09-29T07:33:48"
        },
        {
            "rid": 101,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/101/SGS-cc58800d.png",
            "l": "zh-CN",
            "ut": "2020-10-08T08:03:23"
        },
        {
            "rid": 101,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/101/SGS-cc58800d.png",
            "l": "en-US",
            "ut": "2020-10-08T08:03:23"
        },
        {
            "rid": 98,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/98/SGS-1055ea51.png",
            "l": "zh-CN",
            "ut": "2020-10-09T07:08:00"
        },
        {
            "rid": 98,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/98/SGS-1055ea51.png",
            "l": "en-US",
            "ut": "2020-10-09T07:08:00"
        },
        {
            "rid": 102,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/102/SGS-91d7bdd3.png",
            "l": "zh-CN",
            "ut": "2020-10-12T09:13:27"
        },
        {
            "rid": 102,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/102/SGS-91d7bdd3.png",
            "l": "en-US",
            "ut": "2020-10-12T09:13:27"
        },
        {
            "rid": 103,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/103/SGS-e98163a9.png",
            "l": "zh-CN",
            "ut": "2020-10-14T03:09:00"
        },
        {
            "rid": 100,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/100/SGS-21100faf.png",
            "l": "zh-CN",
            "ut": "2020-10-14T03:32:54"
        },
        {
            "rid": 100,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/100/SGS-21100faf.png",
            "l": "en-US",
            "ut": "2020-10-14T03:32:54"
        },
        {
            "rid": 89,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/89/SGS-9bd8e453.png",
            "l": "zh-CN",
            "ut": "2020-10-16T08:24:50"
        },
        {
            "rid": 89,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/89/SGS-9bd8e453.png",
            "l": "en-US",
            "ut": "2020-10-16T08:24:50"
        },
        {
            "rid": 95,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/95/SGS-8722e77b.png",
            "l": "zh-CN",
            "ut": "2020-10-20T10:39:00"
        },
        {
            "rid": 95,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/95/SGS-8722e77b.png",
            "l": "en-US",
            "ut": "2020-10-20T10:39:00"
        },
        {
            "rid": 91,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/91/SGS-e39408d8.png",
            "l": "zh-CN",
            "ut": "2020-10-28T08:24:12"
        },
        {
            "rid": 91,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/91/SGS-e39408d8.png",
            "l": "en-US",
            "ut": "2020-10-28T08:24:12"
        },
        {
            "rid": 105,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/105/SGS-27954eca.png",
            "l": "zh-CN",
            "ut": "2020-10-28T10:32:33"
        },
        {
            "rid": 105,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/105/SGS-27954eca.png",
            "l": "en-US",
            "ut": "2020-10-28T10:32:33"
        },
        {
            "rid": 104,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/104/SGS-6d855692.png",
            "l": "zh-CN",
            "ut": "2020-10-28T10:32:33"
        },
        {
            "rid": 104,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/104/SGS-6d855692.png",
            "l": "en-US",
            "ut": "2020-10-28T10:32:33"
        },
        {
            "rid": 106,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/106/SGS-ab10c5f2.png",
            "l": "zh-CN",
            "ut": "2020-11-09T07:35:04"
        },
        {
            "rid": 106,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/106/SGS-ab10c5f2.png",
            "l": "en-US",
            "ut": "2020-11-09T07:35:04"
        },
        {
            "rid": 107,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/107/SGS-1834c440.png",
            "l": "zh-CN",
            "ut": "2020-11-09T07:35:04"
        },
        {
            "rid": 107,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/107/SGS-1834c440.png",
            "l": "en-US",
            "ut": "2020-11-09T07:35:04"
        },
        {
            "rid": 108,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/108/SGS-466aef35.png",
            "l": "zh-CN",
            "ut": "2020-12-01T03:24:24"
        },
        {
            "rid": 108,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/108/SGS-466aef35.png",
            "l": "en-US",
            "ut": "2020-12-01T03:24:24"
        },
        {
            "rid": 103,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/103/SGS-e98163a9.png",
            "l": "en-US",
            "ut": "2021-01-11T04:04:58"
        },
        {
            "rid": 112,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/112/SGS-0538c773.png",
            "l": "zh-CN",
            "ut": "2021-01-21T02:38:33"
        },
        {
            "rid": 112,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/112/SGS-0538c773.png",
            "l": "en-US",
            "ut": "2021-01-21T02:38:33"
        },
        {
            "rid": 113,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/113/SGS-1754f37d.png",
            "l": "zh-CN",
            "ut": "2021-02-02T07:31:26"
        },
        {
            "rid": 113,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/113/SGS-1754f37d.png",
            "l": "en-US",
            "ut": "2021-02-02T07:31:26"
        },
        {
            "rid": 114,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/114/SGS-01607869.png",
            "l": "zh-CN",
            "ut": "2021-02-22T02:50:58"
        },
        {
            "rid": 114,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/114/SGS-01607869.png",
            "l": "en-US",
            "ut": "2021-02-22T02:50:58"
        },
        {
            "rid": 115,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/115/SGS-e31625c2.png",
            "l": "zh-CN",
            "ut": "2021-03-18T11:28:30"
        },
        {
            "rid": 115,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/115/SGS-e31625c2.png",
            "l": "en-US",
            "ut": "2021-03-18T11:28:30"
        },
        {
            "rid": 117,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/117/SGS-561c405f.png",
            "l": "zh-CN",
            "ut": "2021-04-19T02:01:43"
        },
        {
            "rid": 117,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/117/SGS-561c405f.png",
            "l": "en-US",
            "ut": "2021-04-19T02:01:43"
        },
        {
            "rid": 118,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/118/SGS-5cafd100.png",
            "l": "zh-CN",
            "ut": "2021-04-19T02:01:43"
        },
        {
            "rid": 118,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/118/SGS-5cafd100.png",
            "l": "en-US",
            "ut": "2021-04-19T02:01:43"
        },
        {
            "rid": 119,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/119/SGS-e7513a2b.png",
            "l": "zh-CN",
            "ut": "2021-05-24T03:43:13"
        },
        {
            "rid": 119,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/119/SGS-e7513a2b.png",
            "l": "en-US",
            "ut": "2021-05-24T03:43:13"
        },
        {
            "rid": 120,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/120/SGS-87e1ffad.png",
            "l": "zh-CN",
            "ut": "2021-06-21T04:33:50"
        },
        {
            "rid": 120,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/120/SGS-87e1ffad.png",
            "l": "en-US",
            "ut": "2021-06-21T04:33:50"
        },
        {
            "rid": 121,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/121/SGS-4cfbe2a6.png",
            "l": "zh-CN",
            "ut": "2021-06-21T04:33:51"
        },
        {
            "rid": 121,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/121/SGS-4cfbe2a6.png",
            "l": "en-US",
            "ut": "2021-06-21T04:33:51"
        },
        {
            "rid": 122,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/122/SGS-86e447da.png",
            "l": "zh-CN",
            "ut": "2021-06-21T04:33:51"
        },
        {
            "rid": 122,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/122/SGS-86e447da.png",
            "l": "en-US",
            "ut": "2021-06-21T04:33:51"
        },
        {
            "rid": 110,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/110/SGS-7acae095.png",
            "l": "zh-CN",
            "ut": "2021-06-24T07:49:50"
        },
        {
            "rid": 110,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/110/SGS-7acae095.png",
            "l": "en-US",
            "ut": "2021-06-24T07:49:50"
        },
        {
            "rid": 125,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/125/SGS-0d3e34ba.png",
            "l": "zh-CN",
            "ut": "2021-07-22T03:25:26"
        },
        {
            "rid": 125,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/125/SGS-0d3e34ba.png",
            "l": "en-US",
            "ut": "2021-07-22T03:25:26"
        },
        {
            "rid": 1,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/1/HoneyTrap_of_DiaoChan_168x168-b93b8e16.png",
            "l": "en-US",
            "ut": "2021-08-02T13:02:17"
        },
        {
            "rid": 126,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/126/SGS-5ebaee9a.png",
            "l": "zh-CN",
            "ut": "2021-08-24T10:16:12"
        },
        {
            "rid": 126,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/126/SGS-5ebaee9a.png",
            "l": "en-US",
            "ut": "2021-08-24T10:16:12"
        },
        {
            "rid": 130,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-piggy/SGS-c0b6b25e.png",
            "l": "zh-CN",
            "ut": "2021-12-30T08:08:56"
        },
        {
            "rid": 130,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-piggy/SGS-c0b6b25e.png",
            "l": "en-US",
            "ut": "2021-12-30T08:08:56"
        },
        {
            "rid": 128,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/legend-perseus/SGS-c2ebc3d7.png",
            "l": "zh-CN",
            "ut": "2022-01-03T02:40:52"
        },
        {
            "rid": 128,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/legend-perseus/SGS-c2ebc3d7.png",
            "l": "en-US",
            "ut": "2022-01-03T02:40:52"
        },
        {
            "rid": 124,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/124/SGS-070082d5.png",
            "l": "zh-CN",
            "ut": "2022-01-14T03:12:52"
        },
        {
            "rid": 124,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/124/SGS-070082d5.png",
            "l": "en-US",
            "ut": "2022-01-14T03:12:52"
        },
        {
            "rid": 123,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/123/SGS-170fb26d.png",
            "l": "zh-CN",
            "ut": "2022-03-02T04:42:37"
        },
        {
            "rid": 123,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/123/SGS-170fb26d.png",
            "l": "en-US",
            "ut": "2022-03-02T04:42:37"
        },
        {
            "rid": 129,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/win-win-fpc/SGS-a2c5e701.png",
            "l": "zh-CN",
            "ut": "2022-04-08T09:00:08"
        },
        {
            "rid": 129,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/win-win-fpc/SGS-a2c5e701.png",
            "l": "en-US",
            "ut": "2022-04-08T09:00:08"
        },
        {
            "rid": 127,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/speed-winner/SGS-e140cbef.png",
            "l": "zh-CN",
            "ut": "2022-05-30T03:11:11"
        },
        {
            "rid": 127,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/speed-winner/SGS-e140cbef.png",
            "l": "en-US",
            "ut": "2022-05-30T03:11:11"
        },
        {
            "rid": 132,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-coaster/SGS-3939262e.png",
            "l": "zh-CN",
            "ut": "2022-06-10T10:25:31"
        },
        {
            "rid": 132,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-coaster/SGS-3939262e.png",
            "l": "en-US",
            "ut": "2022-06-10T10:25:31"
        },
        {
            "rid": 135,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-bounty-sd/SGS-1625475e.png",
            "l": "zh-CN",
            "ut": "2022-06-21T08:53:46"
        },
        {
            "rid": 135,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-bounty-sd/SGS-1625475e.png",
            "l": "en-US",
            "ut": "2022-06-21T08:53:46"
        },
        {
            "rid": 1340277,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/asgardian-rs/SGS-37513a96.png",
            "l": "zh-CN",
            "ut": "2022-06-22T10:22:41"
        },
        {
            "rid": 1340277,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/asgardian-rs/SGS-37513a96.png",
            "l": "en-US",
            "ut": "2022-06-22T10:22:41"
        },
        {
            "rid": 1312883,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/prosper-ftree/SGS-1d26f078.png",
            "l": "zh-CN",
            "ut": "2022-07-07T08:42:12"
        },
        {
            "rid": 1312883,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/prosper-ftree/SGS-1d26f078.png",
            "l": "en-US",
            "ut": "2022-07-07T08:42:12"
        },
        {
            "rid": 1338274,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/totem-wonders/SGS-74887bbd.png",
            "l": "zh-CN",
            "ut": "2022-07-13T03:29:58"
        },
        {
            "rid": 1338274,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/totem-wonders/SGS-74887bbd.png",
            "l": "en-US",
            "ut": "2022-07-13T03:29:58"
        },
        {
            "rid": 1418544,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/bakery-bonanza/SGS-5e2d74ba.png",
            "l": "zh-CN",
            "ut": "2022-08-17T10:07:49"
        },
        {
            "rid": 1418544,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/bakery-bonanza/SGS-5e2d74ba.png",
            "l": "en-US",
            "ut": "2022-08-17T10:07:49"
        },
        {
            "rid": 1372643,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/diner-delights/SGS-42fb6173.png",
            "l": "zh-CN",
            "ut": "2022-08-18T02:32:05"
        },
        {
            "rid": 1372643,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/diner-delights/SGS-42fb6173.png",
            "l": "en-US",
            "ut": "2022-08-18T02:32:05"
        },
        {
            "rid": 1368367,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/alchemy-gold/SGS-4f200843.png",
            "l": "zh-CN",
            "ut": "2022-10-04T02:49:18"
        },
        {
            "rid": 1368367,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/alchemy-gold/SGS-4f200843.png",
            "l": "en-US",
            "ut": "2022-10-04T02:49:18"
        },
        {
            "rid": 1402846,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/midas-fortune/SGS-b0cbf979.png",
            "l": "zh-CN",
            "ut": "2022-12-16T04:18:32"
        },
        {
            "rid": 1402846,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/midas-fortune/SGS-b0cbf979.png",
            "l": "en-US",
            "ut": "2022-12-16T04:18:32"
        },
        {
            "rid": 1543462,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-rabbit/SGS-cb51bf17.png",
            "l": "zh-CN",
            "ut": "2023-01-06T08:51:52"
        },
        {
            "rid": 1543462,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-rabbit/SGS-cb51bf17.png",
            "l": "en-US",
            "ut": "2023-01-06T08:51:52"
        },
        {
            "rid": 1420892,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/rave-party-fvr/SGS-7fae58b2.png",
            "l": "zh-CN",
            "ut": "2023-02-10T06:31:55"
        },
        {
            "rid": 1420892,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/rave-party-fvr/SGS-7fae58b2.png",
            "l": "en-US",
            "ut": "2023-02-10T06:31:55"
        },
        {
            "rid": 1381200,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/hawaiian-tiki/SGS-3173d9dd.png",
            "l": "zh-CN",
            "ut": "2023-02-21T09:08:36"
        },
        {
            "rid": 1381200,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/hawaiian-tiki/SGS-3173d9dd.png",
            "l": "en-US",
            "ut": "2023-02-21T09:08:36"
        },
        {
            "rid": 1448762,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/songkran-spl/SGS-80716155.png",
            "l": "zh-CN",
            "ut": "2023-03-30T02:10:20"
        },
        {
            "rid": 1448762,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/songkran-spl/SGS-80716155.png",
            "l": "en-US",
            "ut": "2023-03-30T02:10:20"
        },
        {
            "rid": 1432733,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/myst-spirits/SGS-16c3227e.png",
            "l": "zh-CN",
            "ut": "2023-04-17T10:24:16"
        },
        {
            "rid": 1432733,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/myst-spirits/SGS-16c3227e.png",
            "l": "en-US",
            "ut": "2023-04-17T10:24:16"
        },
        {
            "rid": 1513328,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/spr-golf-drive/SGS-506e64f1.png",
            "l": "zh-CN",
            "ut": "2023-05-15T08:27:29"
        },
        {
            "rid": 1513328,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/spr-golf-drive/SGS-506e64f1.png",
            "l": "en-US",
            "ut": "2023-05-15T08:27:29"
        },
        {
            "rid": 1601012,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-clover/SGS-dc7a6b49.png",
            "l": "zh-CN",
            "ut": "2023-06-06T08:46:35"
        },
        {
            "rid": 1601012,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-clover/SGS-dc7a6b49.png",
            "l": "en-US",
            "ut": "2023-06-06T08:46:35"
        },
        {
            "rid": 1397455,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fruity-candy/SGS-52bc4515.png",
            "l": "zh-CN",
            "ut": "2023-07-04T10:31:01"
        },
        {
            "rid": 1397455,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fruity-candy/SGS-52bc4515.png",
            "l": "en-US",
            "ut": "2023-07-04T10:31:01"
        },
        {
            "rid": 1473388,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cruise-royale/SGS-5d34cf10.png",
            "l": "zh-CN",
            "ut": "2023-08-04T06:31:58"
        },
        {
            "rid": 1473388,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cruise-royale/SGS-5d34cf10.png",
            "l": "en-US",
            "ut": "2023-08-04T06:31:58"
        },
        {
            "rid": 1594259,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/safari-wilds/SGS-2649f83a.png",
            "l": "zh-CN",
            "ut": "2023-08-24T02:59:31"
        },
        {
            "rid": 1594259,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/safari-wilds/SGS-2649f83a.png",
            "l": "en-US",
            "ut": "2023-08-24T02:59:31"
        },
        {
            "rid": 1572362,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gladi-glory/SGS-561ca938.png",
            "l": "zh-CN",
            "ut": "2023-09-13T11:52:45"
        },
        {
            "rid": 1572362,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gladi-glory/SGS-561ca938.png",
            "l": "en-US",
            "ut": "2023-09-13T11:52:45"
        },
        {
            "rid": 1529867,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ninja-raccoon/SGS-81d12e83.png",
            "l": "zh-CN",
            "ut": "2023-10-11T03:40:52"
        },
        {
            "rid": 1529867,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ninja-raccoon/SGS-81d12e83.png",
            "l": "en-US",
            "ut": "2023-10-11T03:40:52"
        },
        {
            "rid": 1489936,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ult-striker/SGS-44177ef3.png",
            "l": "zh-CN",
            "ut": "2023-10-11T03:40:52"
        },
        {
            "rid": 1489936,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ult-striker/SGS-44177ef3.png",
            "l": "en-US",
            "ut": "2023-10-11T03:40:52"
        },
        {
            "rid": 1568554,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-heist-co/SGS-c6cd2748.png",
            "l": "zh-CN",
            "ut": "2023-10-25T04:36:49"
        },
        {
            "rid": 1568554,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-heist-co/SGS-c6cd2748.png",
            "l": "en-US",
            "ut": "2023-10-25T04:36:49"
        },
        {
            "rid": 1555350,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/forge-wealth/SGS-b6c28d1e.png",
            "l": "zh-CN",
            "ut": "2023-11-08T06:15:09"
        },
        {
            "rid": 1555350,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/forge-wealth/SGS-b6c28d1e.png",
            "l": "en-US",
            "ut": "2023-11-08T06:15:09"
        },
        {
            "rid": 1580541,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mafia-mayhem/SGS-1cdf4e86.png",
            "l": "zh-CN",
            "ut": "2023-11-30T08:42:38"
        },
        {
            "rid": 1580541,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mafia-mayhem/SGS-1cdf4e86.png",
            "l": "en-US",
            "ut": "2023-11-30T08:42:38"
        },
        {
            "rid": 1655268,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/tsar-treasures/SGS-cbae2d00.png",
            "l": "zh-CN",
            "ut": "2023-12-08T05:13:17"
        },
        {
            "rid": 1655268,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/tsar-treasures/SGS-cbae2d00.png",
            "l": "en-US",
            "ut": "2023-12-08T05:13:17"
        },
        {
            "rid": 1615454,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/werewolf-hunt/SGS-3ffae844.png",
            "l": "zh-CN",
            "ut": "2023-12-19T02:55:01"
        },
        {
            "rid": 1615454,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/werewolf-hunt/SGS-3ffae844.png",
            "l": "en-US",
            "ut": "2023-12-19T02:55:01"
        },
        {
            "rid": 1451122,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/dragon-hatch2/SGS-8787a1fa.png",
            "l": "zh-CN",
            "ut": "2024-01-03T03:34:13"
        },
        {
            "rid": 1451122,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/dragon-hatch2/SGS-8787a1fa.png",
            "l": "en-US",
            "ut": "2024-01-03T03:34:13"
        },
        {
            "rid": 1695365,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-dragon/SGS-85d8c240.png",
            "l": "zh-CN",
            "ut": "2024-01-17T09:25:49"
        },
        {
            "rid": 1695365,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-dragon/SGS-85d8c240.png",
            "l": "en-US",
            "ut": "2024-01-17T09:25:49"
        },
        {
            "rid": 1671262,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gemstones-gold/SGS-5443abf7.png",
            "l": "zh-CN",
            "ut": "2024-02-22T09:45:28"
        },
        {
            "rid": 1671262,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gemstones-gold/SGS-5443abf7.png",
            "l": "en-US",
            "ut": "2024-02-22T09:45:28"
        },
        {
            "rid": 1682240,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cash-mania/SGS-ab3ac88a.png",
            "l": "zh-CN",
            "ut": "2024-03-04T08:17:29"
        },
        {
            "rid": 1682240,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cash-mania/SGS-ab3ac88a.png",
            "l": "en-US",
            "ut": "2024-03-04T08:17:29"
        },
        {
            "rid": 1508783,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-ape-3258/SGS-b6ed6baa.png",
            "l": "zh-CN",
            "ut": "2024-03-21T04:05:18"
        },
        {
            "rid": 1508783,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-ape-3258/SGS-b6ed6baa.png",
            "l": "en-US",
            "ut": "2024-03-21T04:05:18"
        },
        {
            "rid": 1492288,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/pinata-wins/SGS-eace3609.png",
            "l": "zh-CN",
            "ut": "2024-04-02T09:29:58"
        },
        {
            "rid": 1492288,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/pinata-wins/SGS-eace3609.png",
            "l": "en-US",
            "ut": "2024-04-02T09:29:58"
        },
        {
            "rid": 1717688,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mystic-potions/SGS-f04c4b5e.webp",
            "l": "zh-CN",
            "ut": "2024-04-19T09:10:08"
        },
        {
            "rid": 1717688,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mystic-potions/SGS-f04c4b5e.webp",
            "l": "en-US",
            "ut": "2024-04-19T09:10:08"
        },
        {
            "rid": 1623475,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/anubis-wrath/SGS-da674b7e.png",
            "l": "zh-CN",
            "ut": "2024-05-08T07:42:02"
        },
        {
            "rid": 1623475,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/anubis-wrath/SGS-da674b7e.png",
            "l": "en-US",
            "ut": "2024-05-08T07:42:02"
        },
        {
            "rid": 1635221,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/zombie-outbrk/SGS-f3471c49.webp",
            "l": "zh-CN",
            "ut": "2024-05-30T14:56:06"
        },
        {
            "rid": 1635221,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/zombie-outbrk/SGS-f3471c49.webp",
            "l": "en-US",
            "ut": "2024-05-30T14:56:06"
        },
        {
            "rid": 1738001,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/chicky-run/SGS-1ed0d491.png",
            "l": "zh-CN",
            "ut": "2024-06-14T06:12:09"
        },
        {
            "rid": 1738001,
            "rtid": 14,
            "url": "https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/chicky-run/SGS-1ed0d491.png",
            "l": "en-US",
            "ut": "2024-06-14T06:12:09"
        }
    ],
    "err": null
};

  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}