// Using dummy results due to costs of scraping with oxylabs

// Individual hotel listing
export interface Listing {
  url: string;
  link: string;
  price: string;
  title: string;
  rating: string;
  description: string;
  rating_word: string;
  rating_count: string;
  booking_metadata: string;
}

// The type for the exported dummy results object
export interface DummyResults {
  content: {
    listings: Listing[];
    total_listings: string;
    parse_status_code: number;
  }
}

// Adds short delay to emulate scrape
export function delayFetchingDummyData(): Promise<DummyResults> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dummyResults);
    }, 1500);
  });
}

export const dummyResults = { "content" : {
    "listings": [
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/63947339.webp?k=935d276a62cf0f6eefda60f201df594221930fcedafd27c920a8e5661c68192e&o=",
            "link": "https://www.booking.com/hotel/fr/le-relais-du-marais.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=23063002_88551120_0_2_0&highlighted_blocks=23063002_88551120_0_2_0&matching_block_id=23063002_88551120_0_2_0&sr_pri_blocks=23063002_88551120_0_2_0__172830&from=searchresults",
            "price": "¥285,244",
            "title": "Le Relais du Marais",
            "rating": "7.9",
            "description": "Single Room",
            "rating_word": "Good ",
            "rating_count": "2,840 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/254161519.webp?k=0dbd058069f9466821a8dfcf18ee2b0292e74179add231b1a2dc6bee65a66539&o=",
            "link": "https://www.booking.com/hotel/fr/citizenm-paris-gare-de-lyon.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=233773501_100763200_2_2_0_636845&highlighted_blocks=233773501_100763200_2_2_0_636845&matching_block_id=233773501_100763200_2_2_0_636845&sr_pri_blocks=233773501_100763200_2_2_0_636845_86275&nad_id=dd6258fb-d438-4f71-9f96-1d114e7856c3_1&nad_cpc=2.01&nad_track=eyJhdWN0aW9uRXBvY2giOjE3NDcyMTQ4MDE1NzgsInJhbmsiOjEsImtvZGRpVHJhY2tpbmdJbmZvIjoiVFp1U2g3cERGa0xaWXBBTnIvbzRGTmR6U0wrV0w3K1g1Sjh2c0kwRk56bTA5UUYvcklOZmJ3ZGo2VmZyVis1QW44K0ppY2t1bVJJQ0doRHZYMWxxWmxZUHpSMUIxaWtmeng3NGV4dzM3dEZoOWVlWjN5cjJ6aXZSQlk0U3JaOUtkUUlEcWdsbzlNcCtlUzlvR2ZObGtQYjNqN3FMUlVLK0dYRTFoMFpMeTR3akxWajJTMDNnZktZU21MdzQrZktoWWppYU1DQXdrRHJnUHpmNGZXZzQ2b1E3bHlMb085dVRpbHVSOEgzRFc3b0hLNlliUjYvRkxpZldJaXBjbElrVU1XNG9mUzJnZ3dOTTEzL3VVQ2kvSnlyaFg5Um96NFdST2Y0MmtJc1BFRk9QT3ExUkJkcnJ0aGxRNFVwVXF0WS9DVjdNTVBoeGZOTktpdHZPMGRrZmRYRGpPaUV6TTFsOWJ1RmV0ZnJubFkwdm9sYmZoUU5VWW96QjJRcnhHZFlmWXlxZXFLVXNmemRreXhHWXJYNHRFbkUrWjB3bHoxcG96RVFmdE9wZTdUT3ZMOVg4a0FMc0VlRTlJVnRGSUVaVzNQUVNJbllVWllGYzR3SEZqRkFVWjVjOUdkQWZ6dTRodTFkTXRWclhoZENpb2lCVG80b09Bbyt4VG1QZWhyVmQ1QWlQaWQwRXZ4MjdMTUkvYWNKaW1NLzNzZ1V3VzVDZHZZcDZPckVHS00vQ052NEdlK0d5MnRPK3Z4WkI2M0hwN3NxOG4xLzNVQ3FBVHZiY2tVOVNJelp3cHkrTmJkUDZQR0MvazJ5czUrWTJnVXVxMFNhU2IxWHRxajhvemovVzdIZFNxZHV3UkxYUWZzbDNZMDZlaEV2ckJYejMwWWZqMTZzbzlWemQ0dVpVOE41R2UyTldtUW5YeU0xdHZuNzU5MlpzbllwMzF1Tk52dFJFNjVyelhLUlluRXRENFEyZkdMcjJOS0pxUU1NSjZDQTBTR3FyWHpPU3lWZ3hrWXJCUTlleGQ1b0ZoZm5BZDBGbXZSVmd1eXIrMTFTeXdCeks3UjdJVVcyNlN2VkZSeHVFRVhPUkkwZ0x3NFZRWjcvSjhmWFlmUHpDZy8wSHF3TlhCZitpem92dWNGRzl1RU03VmdpYUxFckV0dlhCZE03V2xVYmdob0llSW1PV3owVGpONVFDV1B0WTRGOHBCaWh5c08zOTdEUSsvd0hZZk10eXN5NHZNbFkxUXh6a1p0N3ZBUW5URE1wN29aT2NUandBUnlRWkVRNTBabFRWdllNZU40VFA4UmZ3dGYzRVYrVjdIMmxGWnFTSkJ0Sm1rdXdTSUVxWEZacDEzNTJhck1BQm9PZGNmeHlxZC8yOFM4Q1VyR1U1dG02dlNrVDN1NERTSzJyZ21SMlZpQzlkcGprekdIYXhCQ2prakZ5WC8waFhwOUZLRVhNajAvUmF0TE9JT3p2NHhPQ25zUDNxV2lUZVVyeDhQNlcyNGVFc3lJK2pnS2xYQ2RQL2xISVN1cEhEaXc4dlpFN3JNOGNXQ0NqRzZseU4vR1VOUUFicStsSWFveFlRNk82NlZjMWlhK0N2MktydFJsQWdBaDROWHpsVkkvNzhlajdtdzhwYStFTnBGM2E4ZFZMTHA1T2FQdWJMd1paM09EOHpIaWNNQTVyYUNOWGVoWmU4aTNlNzNCa0ZYZVlweTk2cXBqeDllZTBjUjl1QnBrZmhHT1J3c2d1bW93aEFoK0dZbDBkVnlHZE5RdkNvazQ2RnZhOG5hVEFtSk9PK25HdFFJeEc2QkJydW9YdnNhbXNYL3hVK0hNajQ2U3EyQmpxRzNOVlluVVhpZWkydzk4UmVzQmlEZnpsd1pxcnFBcHVPR2dhaGQwYUtrR2JteElGMmNaMDhVZFBBWmxuM1JHTGY1SEVTTkx4SGJuSExNQklTTkdxRjc5bnV4VUtEQ25EUzlSVkEwRGtQMWpSYSt3aHBCVWZYczVzWUpnalcrd3dzZFhXQlI3VnFpc29QUWw3VU5LdDRXb0RObXhEa2dwa2U5TytUOEtiYmNjV2lHNkN0ZTNsQ3p1Rk5XancwS1VZcWxUTzQ4NnB6TmtXcjhTMHE1NjAyZHV2Ym1yTkRlWFlERUp5Slc4NlFnaEE1UXBkRGFrVndtWXFrZU14SVpVS1djcHVvQ1Z6bXZWblM0SUFEdkhYNnR6cEN6ZmYxYStTUmFqOEprZWl2aEY1MXJxZDIvYVkrdXR5c0o4MVNDcVg2clQzWkZlcEpLeGRVazRXcHczdFR4aGcrSzBOdFlHYm81TkhvdUk4TDVXa2VNcHd5ZmJERXA3eDAvNU5za3NpS0NOQ3JucmVUTjB4L3pDZWNRVWhOeHRsTzhySjFEOC9sejdIVERVK3NPbkcvUms2ZkhzUXBOZ0ZsVWh1OWk3NW4xTytROW5McVFoRXAyVGZKWGdqUlNkM205K0orNWpIa1hPUWVaMEJxM0ZJWmNhdzVMRDVPR1hXN2phSTh2S0p5RmFxMStnN3QxZFpZYldEYTZDc0hkL0l5YkhXSnNpeG1LUENXRnNhWXJlS3paUHhFcEg5MktaaG1uRy9KdzNUWkhzUVRsR3FIdmJHdjJjZGgwTDMzd0VWNndab1c5RTYxMFdTZXZiMTJoSGswbnkwazFRVjAxRDVyTHBBM1ZXTHZ1dGQ2UmdaQkhjUzVEWGJXZnVSM1VYMExCRlZiUFVMRklXM2JIT2oyUU50dUYyNkJqVUhXNkx4bWRObFVSWlBvbTZ3TWV3MS9mSTVqOU1Mc0JMakZIZzduT3lwcnFzb1ZCMjRYZmZPVFI0THdRWXN3SVRyMER6TzhlYVlYS1pxNUtzVWpVY1BKK1ZUTTBPM0lUUUJOeUtMZHp4QXBsbTRUZ1NsNkw2ZWREZ1F5TTBWL2FpN2tyY21lR0NkR01iK3lFRzliRGFvV0RtRUFjd2RDeW9WK1hkSTRqZ2ZiaTQ4NmlXeUp6Y0hGOEZMM2d5RGtwRmYxREVqdEpGR25lbTJ2Lys5SkJ3ZitWRTgvSVFKd3I5S2hXb3ZKd2RQcm0zbW5DNFRFdExuMWc4bzA1YmlBQU5KL1RMWmJKTUFjR0ZrRFZuM3p5TVlMN2FmZHhvM1JiSFZJd0VraExGUFYzMGUzTUlhR3JlL3ZjQnJkRWQ4UVIvTHNBQnB6ZG5WaFlvQ2VHek9pc0VnbXFRMGhOak1oQnNnN0JLZGdpRWtROHlHajRzQUhEbFpJMkVFUGtYTTZWc0JrWjcyeUhDN1l0NGRsbHBpTFdUbXRiRmNOWWwwT3pzaWNUalZPOXVmVWUwVzIwU2s0Y1gwcHI3aTU2UFhrV1doSlE3bSt6RDFRUFhMVnkvNEpvQUJMVVVaTGZMak5Ic3RPdEJhRHFMS2lWUlV0SithbVp2NVIycUwvNzFKU1BtTDVFN3dkUEhVaVJCMmxPTnM5REdRUzduWWJPN1FJdVZxRjZvc2lmbE5WWGkrN2gyTXVnSkJzL0Nrbm1ub2dKd2haNGh4RmM5NEttNmk4bEtIUXA4dz0ifQ%3D%3D&from_sustainable_property_sr=1&from=searchresults",
            "price": "¥142,391",
            "title": "citizenM Paris Gare de Lyon",
            "rating": "8.3",
            "description": "King Room",
            "rating_word": "Very good ",
            "rating_count": "10,119 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/643918908.webp?k=3dd3a2cb35d4fc6e321136fa23dc5ab796d4c9ee8286d7d3a3473ef1b6565a07&o=",
            "link": "https://www.booking.com/hotel/fr/de-l-europe-paris2.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=47040824_408508072_1_2_0&highlighted_blocks=47040824_408508072_1_2_0&matching_block_id=47040824_408508072_1_2_0&sr_pri_blocks=47040824_408508072_1_2_0__54000&from=searchresults",
            "price": "¥89,123",
            "title": "Hotel de l'Europe",
            "rating": "7.1",
            "description": "Standard Single Room",
            "rating_word": "Good ",
            "rating_count": "2,845 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/603284230.webp?k=c4fc0bdfa504e16a93dea3e618402162fb70eb5fcbe273a01f7eee1d52f730a1&o=",
            "link": "https://www.booking.com/hotel/fr/collectionneur.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=4&hapos=4&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=5488925_88919001_2_2_0_746479&highlighted_blocks=5488925_88919001_2_2_0_746479&matching_block_id=5488925_88919001_2_2_0_746479&sr_pri_blocks=5488925_88919001_2_2_0_746479_321400&nad_id=dd6258fb-d438-4f71-9f96-1d114e7856c3_0&nad_cpc=2.68&nad_track=eyJhdWN0aW9uRXBvY2giOjE3NDcyMTQ4MDE1ODIsInJhbmsiOjIsImtvZGRpVHJhY2tpbmdJbmZvIjoiVFp1U2g3cERGa0xaWXBBTnIvbzRGTmR6U0wrV0w3K1g1Sjh2c0kwRk56bTA5UUYvcklOZmJ3ZGo2VmZyVis1QW44K0ppY2t1bVJJQ0doRHZYMWxxWmxZUHpSMUIxaWtmeng3NGV4dzM3dEZoOWVlWjN5cjJ6aXZSQlk0U3JaOUtkUUlEcWdsbzlNcCtlUzlvR2ZObGtQYjNqN3FMUlVLK0dYRTFoMFpMeTR3akxWajJTMDNnZktZU21MdzQrZktoWWppYU1DQXdrRHJnUHpmNGZXZzQ2b1E3bHlMb085dVRpbHVSOEgzRFc3b0hLNlliUjYvRkxpalZMU0pmazRrVU1XNG9mUzJnZ3dOTTEzL3VVQ2kvSnlyaFg5Um96NFdST2Y0NW5vOElFVmVQT3ExUkJkcnJ0aGxRNFVwVXF0azhCbGJQTi9oK2N0ZE5pOS9PMGRrZmRYRGpPaUV6TTFsOWJ1RmV0ZnJubFkwdm9sYmZoUU5VWW96QjJRcnhHZFlmWXlxZXFLVXNmemRreXhHWXJYNHRFbkUrWjB3bHoxcG95VVFldStwZTdUT3ZMOVg4a0FMc0VlRTlJVnRGSUVaVzNQUVNJbllVWllGYzR3SEZqRkFVWjVjOUdkQWZ6dTRodTFkTXRWclhoZENpb2lCVG80b09Bbyt4VG1QZWhyVmQ1QWlQaWQwRXZ4MjdMTUkvYWNKaW1NLzNzZ1V3VzVDZHZZcDZPckVHS00vQ052NEdlK0d5MnRPK3Z4WkI2M0hwN3NxOG4xLzNVQ3FBVHZiY2tVOVNJek53cGlDTmJkUDZQR0MvazJ5czUrWTJnVXVxMFNhU2IxWHRxajhvemp6VzdIZFNxZHV3UkxYUWZzbDNZazZZakUvc0JIangwNGZuMGFRcy9GM2Q0dVpVOE41R2UyTldtUW5YeU0xdHZuNzU5MlpzbllwMzF1Tk52dFJFNjVyelhLUlluRXRENFEyZkdMcjJOS0pxUU1NSjZDQTBTR3FyWHpPU3lWZ3hrWXJCUTlleGQ1b0ZoZm5BZDBGbXZSVmd1eXIrMTFTeXdCeks3UjdJVVcyNlN2VkZSeHVFRVhPUkkwZ0x3NFZRWjcvSjhmWFlmUHpDZy8wSHF3TlhCZitpem92dWNGRzl1RU03VmdpYUxFckV0dlhCZE03V2xVYmdob0llSW1PV3owVGpONVFDV1B0WTRGOHBCaWh5dCtmOTdEUSsvd0hZZk10eXN5NHZNbFkxUXh6a1p0N3ZBUW5URE1wN29aT2NUandBUnlRWkVRNTBabFRWdllNZU40VFA4UmZ3dGYzRVYrVjdIMmxGWnFTSkJ0Sm1rdXdTSUVxWEZacDEzNTJhck1BQm9PZGNmeHlxZC8yOFM4Q1VyR1U1dG02dlNrVDN1NERTSzJyZ21SMlZpQzlkcGprekdIYXhCQ2prakZ5WC8waFhwOUZLRVhNajAvUmF0TE9JT3p2NHhPQ25zUDNxV2lUZVVyeDhQNlcyNGVFc3lJK2pnS2xYQ2RQL2xISVN1cEhEaXc4dlpFN3JNOGNXQ0NqRzZseU4vR1VOUUFicStsSWFveFlRNk82NVZjMWlhK0N2MktydFJsQWdBaDROWHpsVkkvNzhlajdtdzhwYTgwSTdRaVMvSncvTDk4R1RiZWJMeDVkN09HVnVFWFVNQXA2RldOSGRpTUs2M0hUcDNCa0ZYZVlweTk2cXBqeDllZTBjUjl1QnBrYmxGZVY0c2d1bW93aEFoK0dZbDBkVnlHZE5RdkNvazQ2RnZhOG5hVEFtSk9PK25HdFFJeEc2QkJydW9YdnNhbXNYL3hVK0hNajQ2U3EyQmpxRzNOVlluVVBwZmlPdzk4UmVzQmlEZnpsd1pxcnFBcHVPR2dhaGQwYUtrR2JteElGMmNaMDhVZFBBWmxuM1JHTGY1SEVTTkx4SGJuSExNQklTTkdxRjc5bnV4VUtEQ25EUzlSVkEwRGtQMWpSYSt3aHBCVWZYczVzWUpnalcrd3dzZFhXQlI3VnFpc29QUWw3VU5LdDRXb0RObXhEa2dwa2U5TytjOTZIZmNjV2lHNkN0ZTNsQ3p1Rk5XancwS1VZcWxUTzQ4NnB6TmtXcjhTMHE1NjAyZHV2Ym1yTkRlWFlERUp5Slc4NlFnaEE1UXBkRGFrVndtWXFrZU14SVpVS1djcHVvQ1Z6bXZWblM0SUFEdkhYNnR6cEN6ZmYxYStTUmFqOEprZWl2aEY1MXJxZDIvYVkrdXR5c0o4MVNDcVg2clQzWkZlcEpLeGRVazRXcHczdFR4aGcrSzBOdFlHYm81TkhvdUk4TDVXa2VNcHd5ZmJERXA3eDAvNU5za3NpS0NOQ3JucmVUTjB4L3pDZWNRVWhOeHRsTzhySjFEOC9sejdIVERVK3NPbkcvUms2ZkhzUXBOZ0ZsVWh1OWk3NW4xTytROW5McVFoRXAyVGZKWGdqUlNkM205K0orNWpIa1hPUWVaMEJxM0ZJWmNhdzVMRDVPR1hXN2phSTh2S0p5RmFxMStnN3QxZFpZYldEYTZDc0hkL0l5YkhXSnNpeG1LUENXRnNhWXJlS3paUHhFcEg5MktaaG1uRy9KdzNUWkhzUVRsR3FIdmJHdjJjZGgwTDMzd0VWNndab1c5RTYxMFdTZXZiMTJoSGswbnkwazFRVjAxRDVyTHBBM1ZXTHZ1dGQ2UmdaQkhjUzVEWGJXZnVSM1VYMExCRlZiUFVMRklXM2JIT2oyUU50dUYyNkJqVUhXNkx4bWRObFVSWlBvbTZ3TWV3MS9mSTVqOU1Mc0JMakZIZzduT3lwcnFzb1ZCMjRYZmZPVFI0THdRWXN3SVRyMER6TzhlYVlYS1pxNUtzVWpVY1BKK1ZUTTBPM0lUUUJOeUtMZHp4QXBsbTRUZ1NsNkw2ZWREZ1F5TTBWL2FpN2tyY21lR0NkR01iK3lFRzliRGFvV0RtRUFjd2RDeW9WK1hkSTRqZ2ZiaTQ4NmlXeUp6Y0hGOEZMM2d5RGtwRmYxREVqdEpGR25lbTJ2Lys5SkJ3ZitWRTgvSVFKd3I5S2hXb3ZKd2RQcm0zbW5DNFRFdExuMWc4bzA1YmlBQU5KL1RMWmJKTUFjR0ZrRFZuM3p5TVlMN2FmZHhvM1JiSFZJd0VraExGUFYzMGUzTUlhR3JlL3ZjQnJkRWQ4UVIvTHNBQnB6ZG5WaFlvQ2VHek9pc0VnbXFRMGhOak1oQnNnN0JLZGdpRWtROHlHajRzQUhEbFpJMkVFUGtYTTZWc0JrWjcyeUhDN1l0NGRsbHBpTFdUbXRiRmNOWWwwT3pzaWNUalZPOXVmVWUwVzIwU2s0Y1gwcHI3aTU2UExqVW1kSFVxQytsSDU3TDFuVTN2Z05zeHdPRWtZVFA2UEpGSU5KL0JHUzl2Vy9TMVZsSmVDeGErOVd3cTYrNlFsRGFqejVTdTBOUFU4NGVnYXNGTkVYRFhvVThURlZLTDRWcXdUVCtwNGZmV1ZUVXk2dHZYd2VpWnBrdTM4bmdpVVVSRHpOelZJeEkwZzF5cVRsdTlhSSJ9&from=searchresults",
            "price": "¥530,449",
            "title": "L'Hôtel du Collectionneur Paris",
            "rating": "8.9",
            "description": "Deluxe King Room",
            "rating_word": "Fabulous ",
            "rating_count": "4,745 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/504667828.webp?k=53edb54ee4f967ffffa1755015346c4a357a49e3ec44cc0206295fca3d7fd733&o=",
            "link": "https://www.booking.com/hotel/fr/ibisparisnationdavout.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=5&hapos=5&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=5316016_102726620_2_2_0&highlighted_blocks=5316016_102726620_2_2_0&matching_block_id=5316016_102726620_2_2_0&sr_pri_blocks=5316016_102726620_2_2_0__58281&from=searchresults",
            "price": "¥96,189",
            "title": "ibis Paris Nation Davout",
            "rating": "7.2",
            "description": "Standard Twin Room",
            "rating_word": "Good ",
            "rating_count": "1,072 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/444160188.webp?k=6e06df2e5d5ec04c57c6f169be3d609870327c33325ce2b6997ea5b0e383a016&o=",
            "link": "https://www.booking.com/hotel/fr/ibis-paris-la-villette-cita-c-des-sciences.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=6&hapos=6&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=54541302_94489651_2_34_0&highlighted_blocks=54541302_94489651_2_34_0&matching_block_id=54541302_94489651_2_34_0&sr_pri_blocks=54541302_94489651_2_34_0__53610&from_sustainable_property_sr=1&from=searchresults",
            "price": "¥88,480",
            "title": "ibis Paris La Villette Cité des Sciences 19ème",
            "rating": "7.3",
            "description": "Standard Twin Room",
            "rating_word": "Good ",
            "rating_count": "3,309 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/252166536.webp?k=da2a82276683b8004787bad18312004d87a61f84ecc5ac8b000eb55c6a11b904&o=",
            "link": "https://www.booking.com/hotel/fr/paris-massena-olympiades.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=7&hapos=7&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=5066921_388861524_1_1_0&highlighted_blocks=5066921_388861524_1_1_0&matching_block_id=5066921_388861524_1_1_0&sr_pri_blocks=5066921_388861524_1_1_0__66687&from=searchresults",
            "price": "¥110,062",
            "title": "Ibis Styles Paris Massena Olympiades",
            "rating": "7.9",
            "description": "Standard Twin Room",
            "rating_word": "Good ",
            "rating_count": "2,133 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/592934735.webp?k=1b79d573fac4ee027a4558ef57d11a2370fd7dbc81be9d78e616cb69f40b276c&o=",
            "link": "https://www.booking.com/hotel/fr/grand-hotel-de-paris.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=8&hapos=8&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=106503_88551087_0_2_0&highlighted_blocks=106503_88551087_0_2_0&matching_block_id=106503_88551087_0_2_0&sr_pri_blocks=106503_88551087_0_2_0__68500&from=searchresults",
            "price": "¥113,055",
            "title": "Grand Hôtel De Paris",
            "rating": "7.0",
            "description": "Single Room",
            "rating_word": "Good ",
            "rating_count": "4,523 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/402929664.webp?k=a4681495382f2274114b5349de35a8260945d8b4e0d454df9eed3f4bc7c7a164&o=",
            "link": "https://www.booking.com/hotel/fr/central-bastille-paris1.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=9&hapos=9&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=916060803_363083129_2_0_0&highlighted_blocks=916060803_363083129_2_0_0&matching_block_id=916060803_363083129_2_0_0&sr_pri_blocks=916060803_363083129_2_0_0__53280&from=searchresults",
            "price": "¥87,935",
            "title": "Hôtel Central Bastille",
            "rating": "6.2",
            "description": "Twin Room",
            "rating_word": "Review score ",
            "rating_count": "873 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/281266727.webp?k=0da34c97fb36756e2425e72967befe1b8c7434d1fb8c7da62210c1962c3839f5&o=",
            "link": "https://www.booking.com/hotel/fr/hotelf1-paris-porte-de-montmartre.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=10&hapos=10&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=138838308_93780764_2_2_0&highlighted_blocks=138838308_93780764_2_2_0&matching_block_id=138838308_93780764_2_2_0&sr_pri_blocks=138838308_93780764_2_2_0__34472&from=searchresults",
            "price": "¥56,894",
            "title": "HotelF1 Paris Saint Ouen Marché Aux Puces",
            "rating": "6.6",
            "description": "Cabrio Room with Private Bathroom",
            "rating_word": "Review score ",
            "rating_count": "18,444 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/602290316.webp?k=793d26e12f28625d6965247ddb2da2ed9a5f0e73e8272d18a7f05becef46247c&o=",
            "link": "https://www.booking.com/hotel/fr/campanile-paris-xv-tour-eiffel.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=11&hapos=11&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=21957205_102710521_1_2_0&highlighted_blocks=21957205_102710521_1_2_0&matching_block_id=21957205_102710521_1_2_0&sr_pri_blocks=21957205_102710521_1_2_0__75100&from=searchresults",
            "price": "¥123,947",
            "title": "Campanile Paris 15 - Tour Eiffel",
            "rating": "7.9",
            "description": "Standard Room - 1 Single Bed",
            "rating_word": "Good ",
            "rating_count": "758 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/14431062.webp?k=42bf73c52a9863097f8fd03b92a00ac244ad958ed3a324cd46d3fce0fb1a290b&o=",
            "link": "https://www.booking.com/hotel/fr/lehameaudepassy.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=12&hapos=12&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=5190702_0_1_0_0&highlighted_blocks=5190702_0_1_0_0&matching_block_id=5190702_0_1_0_0&sr_pri_blocks=5190702_0_1_0_0__88231&from=searchresults",
            "price": "¥145,619",
            "title": "Le Hameau de Passy",
            "rating": "7.7",
            "description": "Double Room",
            "rating_word": "Good ",
            "rating_count": "2,800 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/210784566.webp?k=5c112cf3e81898741f9245956192aa1d7309877e30dcdc46ea9687657cb863ee&o=",
            "link": "https://www.booking.com/hotel/fr/hotel-lena.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=13&hapos=13&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=24842504_121436868_0_2_0&highlighted_blocks=24842504_121436868_0_2_0&matching_block_id=24842504_121436868_0_2_0&sr_pri_blocks=24842504_121436868_0_2_0__76900&from=searchresults",
            "price": "¥126,918",
            "title": "Hôtel Léna",
            "rating": "7.7",
            "description": "Single Room",
            "rating_word": "Good ",
            "rating_count": "2,303 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/553856474.webp?k=797c4be0c51d4836b0a03514cbb68e6fa9d00b81b62a9f40ce149976895612e3&o=",
            "link": "https://www.booking.com/hotel/fr/outstanding-apartment-near-opera.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=14&hapos=14&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=1201353301_392398191_6_0_0&highlighted_blocks=1201353301_392398191_6_0_0&matching_block_id=1201353301_392398191_6_0_0&sr_pri_blocks=1201353301_392398191_6_0_0__531000&from=searchresults",
            "price": "¥876,379",
            "title": "Spacious apartment in Opera with 3BDR for 6PAX",
            "rating": "8.3",
            "description": "Three-Bedroom Apartment",
            "rating_word": "Very good ",
            "rating_count": "7 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/504399491.webp?k=96dde47580781673612cee66638d685829e4ceb2a27007cd76491bca95585866&o=",
            "link": "https://www.booking.com/hotel/fr/ibis-paris-berthier-17a-me.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=15&hapos=15&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=54799203_94490364_2_34_0&highlighted_blocks=54799203_94490364_2_34_0&matching_block_id=54799203_94490364_2_34_0&sr_pri_blocks=54799203_94490364_2_34_0__52653&from=searchresults",
            "price": "¥86,900",
            "title": "ibis Paris 17 Clichy-Batignolles",
            "rating": "6.6",
            "description": "Room with 2 Single Beds",
            "rating_word": "Review score ",
            "rating_count": "6,823 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/672533669.webp?k=2cdbba5fa5d3718bb5283ee826c5575b43f88da8c2611c9418b3e2a003da16c7&o=",
            "link": "https://www.booking.com/hotel/fr/ibis-styles-paris-meteor-avenue-d-italie.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=16&hapos=16&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=451246101_136677992_1_33_0&highlighted_blocks=451246101_136677992_1_33_0&matching_block_id=451246101_136677992_1_33_0&sr_pri_blocks=451246101_136677992_1_33_0__72105&from_sustainable_property_sr=1&from=searchresults",
            "price": "¥119,004",
            "title": "ibis Styles Paris Meteor Avenue d'Italie",
            "rating": "8.4",
            "description": "Standard One Double Bed",
            "rating_word": "Very good ",
            "rating_count": "7,812 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/116109302.webp?k=eb471fb76056c8d90b181357f476d5b1c064aa3507f26844e384fe08559c0a68&o=",
            "link": "https://www.booking.com/hotel/fr/hoteldeneuville.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=17&hapos=17&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=21324212_94349074_2_2_0&highlighted_blocks=21324212_94349074_2_2_0&matching_block_id=21324212_94349074_2_2_0&sr_pri_blocks=21324212_94349074_2_2_0__100300&from_sustainable_property_sr=1&from=searchresults",
            "price": "¥165,538",
            "title": "Hotel de Neuville Arc de Triomphe",
            "rating": "8.2",
            "description": "Classic Double Room",
            "rating_word": "Very good ",
            "rating_count": "817 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/497069035.webp?k=3dfc9e3d804240e27b91b922021f380e21cdfab5aca7d54c2e88a285de4eb45e&o=",
            "link": "https://www.booking.com/hotel/fr/terminus-montparnasse.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=18&hapos=18&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=134291710_237660987_0_2_0&highlighted_blocks=134291710_237660987_0_2_0&matching_block_id=134291710_237660987_0_2_0&sr_pri_blocks=134291710_237660987_0_2_0__103000&from=searchresults",
            "price": "¥169,994",
            "title": "Hotel Terminus Montparnasse",
            "rating": "7.3",
            "description": "Classic Room without elevator",
            "rating_word": "Good ",
            "rating_count": "3,572 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/504664795.webp?k=4edaafadf1b38e67a416d1d05d997635cf8366ade1d18229f01506d5af2741fc&o=",
            "link": "https://www.booking.com/hotel/fr/etap-paris-porte-de-montmartre.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=19&hapos=19&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=18302408_94330518_2_2_0&highlighted_blocks=18302408_94330518_2_2_0&matching_block_id=18302408_94330518_2_2_0&sr_pri_blocks=18302408_94330518_2_2_0__38077&from=searchresults",
            "price": "¥62,843",
            "title": "ibis budget Paris Porte De Montmartre",
            "rating": "6.3",
            "description": "Twin Room",
            "rating_word": "Review score ",
            "rating_count": "16,511 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/318866490.webp?k=00302f51d879acba198d268fcdf2e694d56da4adb455d4c12eaa90d8a86842e0&o=",
            "link": "https://www.booking.com/hotel/fr/charma.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=20&hapos=20&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=17539818_89029497_0_2_0&highlighted_blocks=17539818_89029497_0_2_0&matching_block_id=17539818_89029497_0_2_0&sr_pri_blocks=17539818_89029497_0_2_0__66402&from_sustainable_property_sr=1&from=searchresults",
            "price": "¥109,592",
            "title": "Hôtel Piapia",
            "rating": "8.9",
            "description": "Single Room",
            "rating_word": "Fabulous ",
            "rating_count": "2,950 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/515200256.webp?k=aa33a13a83f3da550850307afd9f51753ac69fb5edb6a07e5d596d32081f44a3&o=",
            "link": "https://www.booking.com/hotel/fr/aston-paris.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=21&hapos=21&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=23950712_88922489_0_2_0&highlighted_blocks=23950712_88922489_0_2_0&matching_block_id=23950712_88922489_0_2_0&sr_pri_blocks=23950712_88922489_0_2_0__99500&from=searchresults",
            "price": "¥164,218",
            "title": "Hôtel Aston Paris",
            "rating": "7.7",
            "description": "Cosy Double Room",
            "rating_word": "Good ",
            "rating_count": "2,469 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/561020854.webp?k=9ddc2949d450d8d717748be2f1cf748d26f147b92909ef1fe9f63defb05e1100&o=",
            "link": "https://www.booking.com/hotel/fr/marena.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=22&hapos=22&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=124634402_338179028_0_2_0&highlighted_blocks=124634402_338179028_0_2_0&matching_block_id=124634402_338179028_0_2_0&sr_pri_blocks=124634402_338179028_0_2_0__89900&from=searchresults",
            "price": "¥148,374",
            "title": "Hotel Marena",
            "rating": "8.5",
            "description": "Chambre Twin Classique",
            "rating_word": "Very good ",
            "rating_count": "1,867 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/667729357.webp?k=dbf53ee7735d517bd1afaa760e86fc0adf0a69bcedff3f1b3ae0391e26d9ff8f&o=",
            "link": "https://www.booking.com/hotel/fr/ibis-styles-paris-gare-de-l-est-chateau-landon.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=23&hapos=23&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=5408714_97563725_1_1_0&highlighted_blocks=5408714_97563725_1_1_0&matching_block_id=5408714_97563725_1_1_0&sr_pri_blocks=5408714_97563725_1_1_0__76159&from_sustainable_property_sr=1&from=searchresults",
            "price": "¥125,695",
            "title": "ibis Styles Paris Gare de l'Est Château Landon",
            "rating": "7.0",
            "description": "Standard Single Room",
            "rating_word": "Good ",
            "rating_count": "975 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/463402281.webp?k=2807db362f4b9c7293383427ba60256f95ce8db48fd3f29b270e4484584b7b57&o=",
            "link": "https://www.booking.com/hotel/fr/gotty-opera.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=24&hapos=24&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=5782016_94106934_0_2_0&highlighted_blocks=5782016_94106934_0_2_0&matching_block_id=5782016_94106934_0_2_0&sr_pri_blocks=5782016_94106934_0_2_0__114500&from=searchresults",
            "price": "¥188,974",
            "title": "Hôtel Diva Opera",
            "rating": "7.9",
            "description": "Superior Twin Room",
            "rating_word": "Good ",
            "rating_count": "1,735 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/509498854.webp?k=9e4d6029c115979434cfdad3e2835928aa896497967c2f88c5b7d98a66a5a1f6&o=",
            "link": "https://www.booking.com/hotel/fr/ub-paris.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=25&hapos=25&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=310247503_359759036_0_2_0&highlighted_blocks=310247503_359759036_0_2_0&matching_block_id=310247503_359759036_0_2_0&sr_pri_blocks=310247503_359759036_0_2_0__96000&from=searchresults",
            "price": "¥158,441",
            "title": "Urban Bivouac Hotel",
            "rating": "8.8",
            "description": "Superior Double Room",
            "rating_word": "Fabulous ",
            "rating_count": "2,183 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/41364905.webp?k=cea7fc1025057710883880702f597751b06d65a9062f59352c958214a31a1860&o=",
            "link": "https://www.booking.com/hotel/fr/hoteldaguerre.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=26&hapos=26&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=5102210_374783036_2_2_0&highlighted_blocks=5102210_374783036_2_2_0&matching_block_id=5102210_374783036_2_2_0&sr_pri_blocks=5102210_374783036_2_2_0__86300&from=searchresults",
            "price": "¥142,432",
            "title": "Montparnasse Daguerre",
            "rating": "8.2",
            "description": "Deluxe Double Room",
            "rating_word": "Very good ",
            "rating_count": "2,398 reviews",
            "booking_metadata": "5 nights, 1 adult"
        },
        {
            "url": "https://cf.bstatic.com/xdata/images/hotel/square240/534406435.webp?k=6d07b9201e3f2c7953ea0d5f9cbcdfca54efb98bfd2fb2a4c46de71b3c4bd0ec&o=",
            "link": "https://www.booking.com/hotel/fr/campanile-prime-paris19-lavillette.en-gb.html?aid=304142&label=gen173nr-1FCAQoggJCDHNlYXJjaF9wYXJpc0gzWARodYgBAZgBCbgBB8gBDNgBAegBAfgBA4gCAagCA7gC0MORwQbAAgHSAiQ5YzY1ZGE0YS0zZWJhLTRmYmMtOTZlYi0yM2M4ZDIzNjQ0NWLYAgXgAgE&ucfs=1&arphpl=1&checkin=2025-05-25&checkout=2025-05-30&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=27&hapos=27&sr_order=popularity&srpvid=7f184268e7710656&srepoch=1747214807&all_sr_blocks=21951221_387962496_2_2_0&highlighted_blocks=21951221_387962496_2_2_0&matching_block_id=21951221_387962496_2_2_0&sr_pri_blocks=21951221_387962496_2_2_0__61880&from=searchresults",
            "price": "¥102,129",
            "title": "Campanile Prime Paris 19 - La Villette",
            "rating": "8.4",
            "description": "Standard Room - 1 Queen Bed",
            "rating_word": "Very good ",
            "rating_count": "7,011 reviews",
            "booking_metadata": "5 nights, 1 adult"
        }
    ],
    "total_listings": "Paris: 2,262 properties found",
    "parse_status_code": 12000
}}