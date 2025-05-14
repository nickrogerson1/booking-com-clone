import { SearchParams } from "@/app/search/page";
import { Result } from "@/typings";

export async function fetchResults(searchParams: SearchParams){
    const username = process.env.OXYLABS_USERNAME
    const password = process.env.OXYLABS_PASSWORD

    const url = new URL(searchParams.url)
    Object.keys(searchParams).forEach(key => {
        if(key === "url" || key === "location") return

        const value = searchParams[key as keyof SearchParams]

        if(typeof value === "string"){
            url.searchParams.append(key, value)
        }
    })

    console.log("Scraping url>>>", url.href)


// NOTE: These Xpaths are subject to change and will probably not work for very long!!
    const body = {
        source: "universal",
        geo_location: "90210",
        url: url.href,
        parse: true,
        render: "html",
        parsing_instructions: {
            listings: {
                _fns: [
                    {
                        _fn: "xpath",
                        _args: ["//div[@data-testid='property-card-container']"]
                    }
                ],
                _items: {
                    title: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [".//div[@data-testid='title']/text()"]
                            }
                        ]
                    },
                    description: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [".//h4[contains(@class, 'fff1944c52 f254df5361')]/text()"]
                            }
                        ]
                    },
                    booking_metadata: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [
                                    ".//div[@data-testid='price-for-x-nights']/text()"
                                    
                                ]
                            }
                        ]
                    },
                    link: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [".//a[contains(@class, 'bd77474a8e')]/@href"]
                            }
                        ]
                    },
                    price: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [
                                    ".//span[contains(@class, 'b87c397a13 f2f358d1de ab607752a2')]/text()"
                                ]
                            }
                        ]
                    },
                    url: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [".//img/@src"]
                            }
                        ]
                    },
                    rating_word: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [".//div[@class='f63b14ab7a f546354b44 becbee2f63']/text()"]
                            }
                        ]
                    },
                    rating: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [".//div[@class='f63b14ab7a dff2e52086']/text()"]
                            }
                        ]
                    },
                    rating_count: {
                        _fns: [
                            {
                                _fn: "xpath_one",
                                _args: [".//div[@class='fff1944c52 fb14de7f14 eaa8455879']/text()"]
                            }
                        ]
                    }
                }
            },
            total_listings: {
                _fns: [
                    {
                        _fn: "xpath_one",
                        _args: [".//h1/text()"]
                    }
                ]
            }
        }
    }

    const res = await fetch("https://realtime.oxylabs.io/v1/queries",{
        method: "POST",
        body: JSON.stringify(body),
        next: {
            revalidate: 60 * 60 // cache result for 1 hour
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64")
        }
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if(data.results.length === 0) return
            const result: Result = data.results[0]

            return result
        })
        .catch(e => console.log(`Fetching Error: ${e}`))


    return res

}