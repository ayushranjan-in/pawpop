# The real daily life of dogs and dog owners in New York City, in numbers

Research date: 2026-10-20. Status: COMPLETE for this pass. The session's web-search budget ran out partway through, so a few topics rest on direct page fetches and city open data only; every unfilled topic is listed in section 10 ("Gaps").

Method in one line: I pulled the primary city data myself where it exists (2023 NYC Housing and Vacancy Survey files, NYC Open Data dog licenses, dog bites, dog runs and 311 complaints, Animal Care Centers of NYC shelter tables, health department advisories) and used news, company pages and price aggregators only where no primary source exists.

How to read this report:
- Every fact carries a source URL and the source's publication date (or "undated" when the page shows none).
- Confidence levels: high (primary source or several agreeing reputable sources), moderate (one reputable source, or older data), low (single secondary source, marketing page, or estimate).
- "Unverified" marks a claim I could not confirm. I left out anything I could not source.

## 1. Population

### 1.1 How many households have a dog or a cat (best current number)

The best current number comes from the city's own housing census, the 2023 New York City Housing and Vacancy Survey (NYCHVS). The city's housing agency (HPD) runs it with the U.S. Census Bureau about every three years, and the 2023 round asked every sampled household whether it keeps animals and which kinds. I downloaded the public data files and computed the weighted totals myself (8,776 sampled households, weighted to 3.43 million). My dog figure matches what City & State reported from the same survey (about 530,000 households, 15%), which confirms the coding.

| Group (2023) | Households | Any pet | Dog | Cat |
|---|---|---|---|---|
| All NYC | 3,432,000 | 26.2% (898,000) | 15.4% (528,000) | 10.7% (367,000) |
| Bronx | 530,000 | 29.3% | 17.5% (92,700) | 11.6% |
| Brooklyn | 1,042,000 | 26.0% | 14.2% (147,800) | 11.5% |
| Manhattan | 823,000 | 24.2% | 14.3% (117,700) | 10.4% |
| Queens | 864,000 | 24.5% | 15.0% (129,900) | 9.3% |
| Staten Island | 174,000 | 35.0% | 23.2% (40,300) | 11.4% |
| Renter households | 2,324,000 | 25.4% | 13.9% (323,000) | 11.2% (261,000) |
| Owner households | 1,109,000 | 27.9% | 18.5% (205,500) | 9.6% |
| Co-op households (coding inferred) | 451,000 | 23.8% | 12.2% | 11.7% |
| Condo households (coding inferred) | 318,000 | 24.6% | 17.4% | 8.0% |
| Households with someone aged 62+ | 1,191,000 | 20.6% | 11.6% (138,500) | 8.3% (99,200) |
| Households below the poverty line | 383,000 | 23.3% | 12.4% | 9.7% |

- Sources: NYC HPD, 2023 NYCHVS public use files `occupied_puf_23.csv` and `allunits_puf_23.csv` (https://www.nyc.gov/assets/hpd/data/occupied_puf_23.csv, survey fielded January to mid-June 2023, file posting date not shown; my tabulation on 2026-10-20 using the household weight FW). Cross-check: City & State New York, "How NYC governs for the dogs," Holly Pretsky, 2025-08-04 (https://www.cityandstateny.com/politics/2025/08/how-nyc-governs-dogs/407159/). The NYC Mayor's Office of Animal Welfare's 2025 housing guide also cites the same survey: "More than one in four New York City households include at least one pet" (https://www.nyc.gov/assets/animalwelfare/downloads/pdf/Pet-Inclusive-Housing-in-NYC-A-Guide-on-Best-Practices.pdf, 2025, page 5).
- Confidence: high for the citywide dog figure (two independent paths agree). High for boroughs and renters versus owners (borough household totals and the 68% renter share match known NYC figures). Moderate for co-op and condo rows and the poverty row, because I inferred those codes from the data rather than from the codebook (co-op code: 69% owner-occupied; condo code: 60% renter-occupied, which fits how NYC condos are often rented out).
- Age of data: fielded in 2023, so about 3 years old.
- What it means: about 1 in 7 households has a dog and about 1 in 9 has a cat. Cat households are 70% as common as dog households, so cat owners are a large group the team has barely interviewed. Staten Island, the most suburban borough, has the highest dog rate (23%). Manhattan ranks fourth of five by share of households with a dog; it leads only in license records (section 1.3).
- The survey counts households, not animals. A household with three dogs counts once, so the true number of dogs is above 528,000. I found no current measured count of individual dogs.
- The survey also found about 77,000 households (2.2%) that reported a service animal. I did not check the codebook wording, so this may or may not include emotional support animals (confidence: low on what it covers).

### 1.2 Older estimates that still circulate

| Estimate | Who made it | Date | Status |
|---|---|---|---|
| 600,000 dogs and 500,000 cats (1.1 million pets) | NYC Economic Development Corporation (EDC), as reported by NYC Pooch blog | 2012-08-28 (https://blog.nycpooch.com/2012/08/28/how-many-dogs-live-in-new-york-city/) | 14 years old; secondary source; often repeated by pet websites. Confidence: low. |
| About 425,000 dogs, licensed and unlicensed | NYC EDC report, as reported by QNS | 2017-08-10 (https://qns.com/2017/08/city-study-finds-long-island-city-largest-proportion-dogs-per-capita/) | 9 years old. The same report found ZIP 11109 (Long Island City waterfront) had the most dogs per person, one dog per 26 people. Confidence: moderate. |

### 1.3 Licensing: how many dogs are licensed, and the licensing rate

- NYC law requires every dog to be licensed by the Department of Health and Mental Hygiene (DOHMH, the city health department). City & State reported that about 85,000 dogs have been licensed each year for the past decade, with a spike during the pandemic (2025-08-04, link above).
- I queried the city's own license data (NYC Open Data, "NYC Dog Licensing Dataset," ID nu7n-tubp, https://data.cityofnewyork.us/Health/NYC-Dog-Licensing-Dataset/nu7n-tubp; 819,323 rows across extracts from 2016 to 2026; queried 2026-10-20). The newest extract (labeled 2026) holds 96,459 license records that were active at some point in 2025 (issued through 2025-12-31, expiring 2025-01-01 or later). A renewal can create a second record for the same dog, so 96,459 is an upper bound on licensed dogs.
- Rough licensing rate (my calculation): 96,459 license records against 528,000 dog-owning households gives at most about 18 licenses per 100 dog households. Because many households have more than one dog, the share of dogs that are licensed is lower, probably well under 1 in 5. This matches the long-repeated estimate that only about 1 in 5 dogs is licensed (QNS 2017 article above: about 80% unlicensed). Confidence: moderate (the two data sets are two years apart).
- Licensing is very uneven by borough, so license data overstate Manhattan and understate the Bronx:

| Borough | Share of 2025 license records | Share of dog-owning households (2023) | License records per 100 dog households |
|---|---|---|---|
| Manhattan | 34.6% (33,345) | 22.3% | 28 |
| Brooklyn | 27.9% (26,899) | 28.0% | 18 |
| Queens | 19.9% (19,169) | 24.6% | 15 |
| Bronx | 10.2% (9,840) | 17.5% | 11 |
| Staten Island | 7.1% (6,856) | 7.6% | 17 |

- Borough assignment for licenses uses the first three ZIP digits (100-102 Manhattan, 103 Staten Island, 104 Bronx, 112 Brooklyn, 110/111/113/114/116 Queens); 350 records had other ZIPs. Confidence: high for the counts, moderate for the ratio.
- Densest license ZIP codes in 2025: 10025 (Upper West Side, 2,175 records), 11201 (Brooklyn Heights and Downtown Brooklyn, 2,007), 10023 (Upper West Side, 1,957), 11215 (Park Slope, 1,877), 10024 (Upper West Side, 1,643), 10128 (Upper East Side, 1,597), 10009 (East Village, 1,527). The Upper West Side alone holds three of the top five.

### 1.4 Most common breeds and sizes

Top named entries in the 2025 license records (my query of the same dataset; "crossbreed" is the city's label for a mix of that breed):

| Rank | Breed label | Records |
|---|---|---|
| - | Unknown | 8,141 (8.4%) |
| 1 | Yorkshire Terrier | 4,025 |
| 2 | Shih Tzu | 4,003 |
| 3 | Chihuahua | 3,253 |
| 4 | Labrador Retriever | 2,736 |
| 5 | Labrador Retriever Crossbreed | 2,590 |
| 6 | Poodle Crossbreed | 2,396 |
| 7 | Shih Tzu Crossbreed | 2,273 |
| 8 | Maltese | 2,051 |
| 9 | American Pit Bull Mix / Pit Bull Mix | 2,001 |
| 10 | Goldendoodle | 1,973 |
| 11 | Chihuahua Crossbreed | 1,818 |
| 12 | French Bulldog | 1,815 |

- Size: the dataset has no weight field, so I classified the 358 breed labels by keyword. Toy and small breeds (Yorkie, Shih Tzu, Chihuahua, Maltese, Pomeranian, toy and miniature poodles, Havanese, Maltipoo, Dachshund, French Bulldog and similar) account for about 43,200 records, which is 45% of all records and 49% of records with a known breed. Clearly medium or large breeds (Labrador, Golden Retriever, German Shepherd, pit bull types, Husky, doodles and similar) account for about 24,200 (27% of known-breed records). The rest are mixes I could not size. Confidence: moderate. What it means: roughly half of NYC's licensed dogs are small enough to ride the subway in a bag, and roughly a quarter or more are not.
- Sex: 53.4% male (51,523) and 46.6% female (44,936).
- Trends: Kieran Healy, a Duke sociologist who maintains the `nycdogs` data package, found that Goldendoodles, Maltipoos, Australian Shepherds and Korean Jindos are rising while Shiba Inus and Beagles are falling, and that 8 to 10% of records each year list the breed as "Unknown." He also mapped neighborhood breed clusters: French Bulldogs in Chelsea, SoHo and TriBeCa, Havanese on the Upper East Side, pit bulls in the Bronx, German Shepherds on Staten Island ("Dogs of New York," 2026-10-14, https://www.r-bloggers.com/2026/10/dogs-of-new-york-2/). Confidence: moderate (one analyst, but the underlying data are official).
- A different ranking exists: the American Kennel Club (AKC) ranks NYC breeds by purebred registrations, not licenses, so its 2025 New York City list leads with the French Bulldog, then Poodle, Golden Retriever, Dachshund and Cavalier King Charles Spaniel ("2025's Most Popular Dog Breeds by City," https://www.akc.org/expert-advice/news/most-popular-dog-breeds-by-city-2025/, 2025; seen through a search summary, not opened, so confidence: moderate). Do not mix the two lists.

## 2. Rules and infrastructure that shape dog life

### 2.1 Subway and buses: the "dog in a bag" rule

- The rule: MTA (Metropolitan Transportation Authority) rules let an animal ride only if it is "enclosed in a container and carried in a manner which would not annoy other passengers." Source: Gothamist, Stephen Nessen and Clayton Guse, 2024-03-08 (https://gothamist.com/news/are-there-more-dogs-on-nyc-subways-or-is-it-just-us). Confidence: high. Service animals are exempt if leashed and under control; emotional support animals must still ride in a carrier (MTA guidance as summarized by a search, not opened; confidence moderate).
- Enforcement is thin. Gothamist reported 55 NYPD animal violations in the first two months of 2019, only 10 tickets in all of 2023, and 23 MTA complaints in the first two months of 2024. An MTA board member, Norman Brown, agreed he was "noticing more dogs and fewer in bags" (same article). Confidence: moderate (my fetch tool summarized the numbers; the direction is clear, the exact counts should be rechecked before quoting on a slide).
- What big-dog owners do: they use oversized totes, duffels, backpacks and cut-up IKEA bags with the legs poking out. One owner carried a 52-pound dog in a backpack (Gothamist, above). City & State described the same workarounds in 2019 (https://www.cityandstateny.com/policy/2019/07/how-are-subway-riders-getting-around-the-no-dogs-rule/177092/, July 2019). Many owners simply go without a bag. Confidence: high that the workaround culture exists; the ticket fine reported in 2019 ($25) is unverified for today.
- What it means: about 1 in 4 licensed dogs is clearly too big for a normal carrier (section 1.4). For those owners, getting to a vet, a groomer, a daycare or a park outside walking range depends on rideshare, a car, or breaking the rule.

### 2.2 Taxis and rideshare

- Taxi and Limousine Commission (TLC) rules, which cover yellow and green cabs and app cars such as Uber and Lyft: a driver may refuse a passenger whose animal is "not properly secured in a suitable container." Service animals are exempt and drivers may not refuse them. NYC311 says the same thing. Sources: TLC driver rules, Chapter 80 (https://www.nyc.gov/assets/tlc/downloads/pdf/rule_book_current_chapter_80.pdf, current rule book, undated) and NYC311 "Car Services" (https://portal.311.nyc.gov/article/?kanumber=KA-03372, undated). Confidence: moderate to high (official text, seen through a search summary).
- In practice: a leashed dog without a carrier can be legally refused by a cab or a regular UberX driver.
- Uber Pet: Uber's own help page says U.S. drivers earn an extra $4 Uber Pet fee, and riders typically pay about $3 to $5 more; one pet per ride, no breed or size limit, and a possible hair-cleaning fee of up to $40 (Uber help page, https://help.uber.com/driving-and-delivering/article/uber-pet?nodeId=0c8c3925-97df-4822-839b-fd78470e1a42, undated). Whether Uber Pet is offered in NYC today: sources disagree, so this is unverified; a 2026 driver blog lists NYC, an older one says it was not available. Confidence: low for NYC availability.

### 2.3 Parks, dog runs and off-leash "courtesy hours"

- Courtesy hours: NYC Parks allows dogs off leash in designated areas from park opening until 9:00 a.m. and from 9:00 p.m. until closing. The Health Code (section 161.05) only lets Parks allow this between 9:00 p.m. and 9:00 a.m., and owners must show proof of a current license and rabies shot if asked. Central Park and Prospect Park use 6:00 to 9:00 a.m. and 9:00 p.m. to 1:00 a.m. Sources: NYC Parks, "Dog-friendly Areas" (https://www.nycgovparks.org/facilities/dogareas, undated); Central Park Conservancy, "A Dog's Guide to Central Park" (https://www.centralparknyc.org/activities/guides/dogs, undated), which also says Central Park has no fenced dog run but 23 dog-friendly areas. Confidence: high for the hours. Parks formally added off-leash hours to its rules on 2007-04-10, according to the advocacy site nycoffleash.com (http://www.nycoffleash.com/html/FAQ.htm, older undated page, via search summary; confidence moderate).
- Dog runs (fenced areas where dogs may be off leash all day): the city's own "Dog Runs" dataset lists 95 active dog runs (NYC Open Data hxx3-bwgv, updated 2026-10-15; my query 2026-10-20). City & State counted 91 in August 2025 and reported that volunteers and community groups maintain them, that Parks will not build a run unless a committed community group already exists, and that renovating the Washington Square Park dog run cost about $650,000 (2025-08-04, link in section 1). The first official dog run opened in Tompkins Square Park in 1990.

| Borough | Dog runs (2026) | Dog-owning households (2023) | Dog households per run |
|---|---|---|---|
| Manhattan | 41 | 117,700 | about 2,900 |
| Bronx | 15 | 92,700 | about 6,200 |
| Brooklyn | 20 | 147,800 | about 7,400 |
| Staten Island | 5 | 40,300 | about 8,100 |
| Queens | 14 | 129,900 | about 9,300 |
| All NYC | 95 | 528,500 | about 5,600 |

- What it means: Manhattan has 43% of the city's dog runs but 22% of its dog households. A Queens dog household shares its run with about three times as many other households as a Manhattan one. Confidence: high for counts, moderate for the ratio (data sets are three years apart).

### 2.4 Leash law and fines

- Citywide Health Code rule (section 161.05): dogs in public places must be on a leash or restraint no longer than 6 feet. The health department penalty schedule lists $200 for a dog in a public place without a leash ($400 if the owner defaults). Sanitation, Health and Parks staff can write the ticket. Sources: Health Code section 161.05 (https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-47068) and Health Code penalty schedule, Appendix 7-A (https://codelibrary.amlegal.com/codes/newyorkcity/latest/NYCrules/0-0-0-136887), both current codes. Confidence: moderate (seen through a search summary).
- Parks rule (56 RCNY section 1-04(i)): $100 for an unleashed or uncontrolled animal in a park, $250 for a repeat within a year; community service is an option (NYC Parks rules, https://www.nycgovparks.org/rules/section-1-04/; OATH penalty schedules). Confidence: moderate.
- The 6-foot limit also appears in the city's own 2025 housing guide (page 9, link in section 1).

### 2.5 Housing: the "pet law," co-ops, NYCHA, fees

- The three-month rule ("pet law"): in a private building with three or more units, a tenant who has kept a pet "openly and notoriously" for three or more months before the landlord starts a court case to enforce a no-pet clause may keep the pet. Source: NYC Administrative Code section 27-2009.1, as summarized by the NYC Mayor's Office of Animal Welfare, "Pet-Inclusive Housing in New York City: A Guide on Best Practices," 2025, page 23 (https://www.nyc.gov/assets/animalwelfare/downloads/pdf/Pet-Inclusive-Housing-in-NYC-A-Guide-on-Best-Practices.pdf). The same page says size limits, breed limits, pet fees and no-pet clauses do not apply to service animals or emotional support animals, under the U.S. Fair Housing Act and the NYC Human Rights Law. Confidence: high.
- The city's own guide asks landlords to drop "breed, size, and weight restrictions" and to replace non-refundable pet fees with refundable deposits (pages 7 and 9). That is direct evidence that these restrictions are common enough for the city to campaign against them. It also notes that New York State bars insurers from denying or canceling homeowners' insurance based solely on a dog's breed (page 13).
- Public housing: NYCHA (the New York City Housing Authority, the city's public-housing landlord) allows one dog or one cat per apartment; the dog's adult weight may not exceed 25 pounds; pit bulls, Rottweilers and Doberman pinschers, including mixes, are banned; every dog or cat must be registered within 30 days. Assistance animals are exempt. The weight limit was cut from 40 to 25 pounds in 2009. Source: NYCHA, "Pet Policy" (https://www.nyc.gov/site/nycha/residents/pet-policy.page, policy last revised January 2021). Confidence: high. What it means: in NYCHA, a Labrador or a pit-bull mix, two of the city's most common dog types (section 1.4), is not allowed unless it is an assistance animal.
- Co-ops: in my tabulation of the 2023 housing survey, co-op households have the lowest dog rate of any housing type, 12.2%, against 17.4% in condos (section 1.1; coding inferred, moderate confidence). I found no data source that counts co-op board pet bans directly.
- Fees and deposits: New York's 2019 Housing Stability and Tenant Protection Act caps a security deposit at one month's rent, so a separate pet deposit that pushes the total above one month is illegal; the state housing agency (HCR) says owners of rent-stabilized and rent-controlled apartments may not charge fees for having a pet, because that would be an unlawful rent increase. Monthly "pet rent" in market-rate apartments is not capped by law, and non-refundable one-time pet fees are legally contested. Sources: New York State HCR, "Leases" (https://hcr.ny.gov/leases, undated); Cornell Law School Tenants Advocacy Practicum, "Security Deposits & Other Fees" (https://sites.lawschool.cornell.edu/tenants-advocacy/security-deposits-other-fees/, undated); LeaseRunner, "New York Pet Rent Laws" (https://www.leaserunner.com/laws/new-york-pet-rent-laws, 2025). Typical pet rent of $25 to $75 a month is a market claim from secondary sites, so confidence: low on that range.

### 2.6 Restaurants, stores and offices

- Outdoor dining: a 2015 New York State law (Public Health Law section 1352-e, signed 2015-10-26) lets a restaurant choose to allow companion dogs in its outdoor dining area. NYC's rule (24 RCNY Chapter 32) took effect 2016-04-23: the dog must stay on the floor, within arm's reach, leashed or crated; it must not eat at the table; it must reach the patio without walking through the restaurant; and enclosed sidewalk cafes do not count as outdoor. Sources: NY Senate bill S4327 (https://www.nysenate.gov/legislation/bills/2015/S4327); NYC311 "Dogs in Restaurants" (https://portal.311.nyc.gov/article/?kanumber=KA-02689, undated); NYC health department notice of adoption (https://www.nyc.gov/assets/doh/downloads/pdf/notice/2016/noa-chapter32-dining-with-dogs.pdf, 2016). In June 2025 the health department proposed updating Chapter 32 to match the city's new permanent sidewalk and roadway cafe program (https://www.nyc.gov/assets/doh/downloads/pdf/notice/2025/noi-ch32-dogs-dining-areas-06-18-25.pdf); I could not confirm whether it was adopted. Confidence: high.
- Indoors: Health Code section 81.25 bars live animals from food service establishments except service animals and police dogs; state rules bar animals from grocery store operating areas. Stores that do not sell food may choose to allow dogs; no city law forbids it. Confidence: high for the food rules, moderate for the non-food store point (law-firm blog, https://catalanowins.com/blog/new-york-laws-about-dogs-in-stores-and-restaurants/, undated).
- Offices: I found no NYC law on dogs in offices; it is employer and building policy. A pending City Council bill by Shaun Abreu would add paid leave for pet care (City & State, 2025-08-04). Confidence: moderate.
- Pet stores: since 2024-12-15, New York State bans pet shops from selling dogs, cats and rabbits, and the NYC health department enforces it (https://nyc.gov/site/doh/about/press/pr2024/pet-stores-selling-cats-and-dogs-prohibited-beginning-december-15.page, 2024). Confidence: high.

## 3. Hazards

### 3.1 Dog bites (city health department data)

NYC Health Code section 11.03 requires every animal bite to be reported within 24 hours. The health department publishes each reported dog bite as one record; breed, age and sex are as reported and not verified ("DOHMH Dog Bite Data," NYC Open Data rsgh-akpg, https://data.cityofnewyork.us/Health/DOHMH-Dog-Bite-Data/rsgh-akpg, updated 2026-08-21; my queries 2026-10-20).

| Year | Reported dog bites |
|---|---|
| 2015 | 3,557 |
| 2019 | 3,534 |
| 2020 | 2,551 |
| 2021 | 2,921 |
| 2022 | 3,464 |
| 2023 | 3,865 |
| 2024 | 4,041 |
| 2025 | 5,049 |

- 2025 is the highest year in the data set (2015 to 2025, 39,082 records): up 25% from 2024 and up 98% from 2020. Bites peak in spring and summer (July is the top month for 2022 to 2024 combined, with 1,173 bites, against 737 in January).
- 2025 by borough: Manhattan 1,192, Queens 1,192, Brooklyn 1,126, Bronx 942, Staten Island 395, other or unknown 202. Against the 2023 count of dog-owning households, that is roughly 8 to 10 reported bites per 1,000 dog households in every borough (my calculation).
- 2025 by reported breed: "Unknown" 2,036 (40%), "Pit Bull" 737 (15%), "Mixed" 223, "Bull dog" 133, Shih Tzu 106, German Shepherd 106. The breed field is unverified and 40% unknown, so it cannot support breed conclusions.
- The data do not record whether the dog was on a leash, so I found no city statistic on off-leash attacks specifically. Confidence: high for counts; the cause of the 2025 jump (more dogs, more bites, or more reporting) is unknown.

### 3.2 Off-leash, barking and waste complaints (311 data)

My queries of NYC 311 service requests (NYC Open Data erm2-nwe9, queried 2026-10-20):

| Complaint (311 label) | 2020 | 2023 | 2024 | 2025 |
|---|---|---|---|---|
| "Dog Off Leash" (in a park) | 1,218 | 2,994 | 3,102 | 3,006 |
| "Unleashed Dog in Public" | 834 | 1,589 | 1,621 | 1,699 |
| "Noise, Barking Dog" | 4,595 | 7,745 | 8,327 | 8,327 |
| "Dog Waste" (dirty condition) | n/a | 2,306 | 2,572 | 2,660 |

- Off-leash complaints in parks rose 147% from 2020 to 2025. Barking complaints rose 81%. (The 2024 and 2025 barking totals are both 8,327; I checked the monthly counts and they differ, so the match is a coincidence.) Confidence: high for counts. Complaints measure friction between neighbors, not incidents.
- What it means: dog life in NYC is a shared-space problem. Dogs, owners and non-owners collide on sidewalks, in parks and through apartment walls.

### 3.3 Leptospirosis and rats

Leptospirosis is a bacterial disease spread mainly through rat urine; it can cause kidney and liver failure in dogs and people.

- 2024 (newest official dog data): 33 dogs met the city's case definition (21 confirmed, 12 probable), one more than 2023. Brooklyn 10, Queens 10, Manhattan 4, Staten Island 3, Bronx 2, unknown 4. Cases occurred all year and peaked in August. 9 dogs (27%) died or were euthanized. None of the 23 dogs with a known vaccine history was currently vaccinated. Of 19 owners interviewed, 16 (84%) had seen rodents where the dog spent time, 11 (58%) reported standing water such as puddles, and the likely exposure site was usually the home neighborhood within half a mile of home (17), not a dog run (0). The American Animal Hospital Association now lists the leptospirosis vaccine as "core" (recommended for most dogs). The department warns that dog cases may be underdiagnosed "particularly when dog owners are unable to pursue veterinary care or diagnostic testing." Human cases: 33 reported in 2024, up from 24 in 2023. Source: NYC Health Department, "2025 Veterinary Advisory #10: Summary of 2024 Canine Leptospirosis Surveillance in New York City," 2025-12-03 (https://www.nyc.gov/assets/doh/downloads/pdf/zoo/25vet-10-canine-leptospirosis.pdf). I read the full advisory. Confidence: high.
- 2023 context: the 2023 dog count (32) was inflated by a commercial lab that started reporting that summer; without it the count would have been 15. NYC averaged 24 dog cases a year in 2017 to 2021. Source: NYC Health Department "2025 Veterinary Advisory #2," 2025-03-12 (https://www.nyc.gov/assets/doh/downloads/pdf/zoo/25vet-2.pdf), seen through a search summary. Confidence: moderate.
- Rats: 311 "Rodent" complaints were 27,583 (2020), 38,809 (2021), 41,121 (2022), 41,748 (2023), 39,726 (2024) and 31,312 (2025) (my query of 311 data). Complaints fell 25% from the 2023 peak but remain above 2020.

### 3.4 Stray voltage ("contact voltage")

Contact voltage happens when worn underground cable insulation lets electricity reach sidewalk metal such as service-box covers, grates and lamp posts. It is worst after snow, when salty meltwater seeps into the system, and dogs are exposed because their paws are bare and wet.

- Jodie Lane, a 30-year-old Columbia Teachers College doctoral student, was killed in January 2004 by an electrified Con Edison service box on East 11th Street while walking her dogs. Source: Village Preservation, "Remembering Jodie Lane," 2018-01-16 (https://villagepreservation.org/2018/01/16/remembering-jodie-lane/). A city law passed later in 2004 requires utilities to inspect and test street equipment every year. Confidence: high for the death; moderate for the law details (search summary).
- In its first inspection round (December 2004 to November 2005), Con Edison tested 728,789 structures and found 1,214 sources of stray voltage (Scienceline, August 2006, https://scienceline.org/2006/08/physics-grant-manholes/, via search summary). Confidence: moderate.
- Dog deaths continued: an 11-year-old pit bull mix was killed on Clinton Street on the Lower East Side in February 2014 (amNY, https://www.amny.com/news/dog-is-killed-by-stray-voltage-on-lower-east-side/), and a dog was killed by an electrified metal plate in Greenpoint, Brooklyn, in early 2022 (NBC New York, https://www.nbcnewyork.com/news/local/dog-dies-suddenly-after-electrocuted-by-metal-grate-on-brooklyn-sidewalk/3527121/). Confidence: moderate (headlines and summaries, not full articles).
- Unverified: a search summary said Con Edison received 79 public shock reports in 2024 and that a dog was shocked on East 76th Street in May 2026. I could not open a source for either.

### 3.5 Heat, cold, salt and pavement

- Heat: the National Weather Service's 1991 to 2020 normal for Central Park is 17.4 days a year at or above 90°F. Central Park logged 21 such days in 2024 and 14 in 2025, and hit 99°F on 2025-06-24, its hottest day since 2012. Source: National Weather Service, Central Park 90-degree days (https://www.weather.gov/media/okx/Climate/CentralPark/90DegreeDays.pdf, updated through 2025). The New York City Panel on Climate Change (NPCC4, 2024) projects a middle range of 38 to 62 days at or above 90°F a year by the 2050s (Braneon et al., Annals of the New York Academy of Sciences, 2024, https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.15116). Confidence: moderate (both seen through a search summary).
- The leptospirosis advisory adds that heavy rain and warmer weather are expected to help the bacteria survive in NYC, which may raise cases (2025-12-03 advisory, page 2).
- Salt and hot pavement: I found no NYC-specific measurements of pavement temperature or salt injuries to paws. Treat the pavement-burn numbers on pet websites as unverified. The documented NYC link is indirect: salt and meltwater raise stray-voltage risk (section 3.4).

## 4. Costs in NYC

Most current price data come from booking platforms and individual businesses, not neutral surveys. I mark each source. Prices are 2025 to 2026.

| Service | Typical NYC price | Source and date | Confidence |
|---|---|---|---|
| 30-minute dog walk, app sitter | $22 (Rover NYC average $21.98); $24 (Wag! NYC median, plus a $2.99 booking fee) | Rover, https://www.rover.com/blog/new-york-city-ny-dog-walking-price/ (undated cost guide); Wag!, https://wagwalking.com/dog-walking/ny-new-york (August 2026) | moderate |
| 30-minute dog walk, walking company | $30 to $36 ($35.50 at Swifto; $35.95 solo or $30.25 small-group at Mixypaws) | https://swifto.com/pricing; https://www.mixypaws.com/services-and-rates (both current price pages) | moderate |
| Walks five days a week | about $440 a month at the Rover average | Rover (above) | moderate |
| Daycare, one full day | $49 median at a sitter's home in Manhattan (Rover, plus 11% fee); $57 to $65 at Manhattan daycare businesses (Buddy's Dog Den $57; Manhattan Pawffice $63; Tails of Manhattan $60 to $65 by weight) | https://www.rover.com/manhattan--ny--doggy-day-care/; https://www.buddysdogden.com/upper-east-side-manhattan; https://manhattanpawffice.com/pricing/ (the last two opened, current; Rover and Tails of Manhattan via search summary) | high for Buddy's and Manhattan Pawffice, moderate for the rest |
| Daycare, unlimited weekdays | $799 per 4 weeks (Manhattan Pawffice); $805 a month (Buddy's Dog Den) | same pages, opened | high |
| Boarding, per night | $62 Rover NYC average (most bookings $37 to $102); $92 to $99 at Manhattan daycare businesses | https://www.rover.com/new-york--ny--dog-boarding/ (October 2026); business pages above | moderate |
| Full groom | about $60 to $90 small dog, $80 to $130 medium, $100 to $180 large; mobile groomers more | Pawsh estimates, https://www.pawsh.app/groomers/new-york-ny (October 2026) | low |
| Private training | about $150 to $250 an hour (Andrea Arden $250 per session; Brooklyn Dog Training Center $150 per lesson, older page) | https://andreaarden.com/dog-training/prices/; https://www.doggieacademy.com/private-lessons/in-studio-lessons/ | moderate |
| Routine vet exam (no shots or tests) | median $110 across 74 price reports from 55 NYC clinics; $115 at Upper Eastside Animal Hospital (vaccines free); $25 at Queens Low Cost Vet | Vetted NYC, https://www.vetted-nyc.com/t/prices (2026, crowd-sourced); ACC low-cost resource list, January 2025 (opened, see section 5) | moderate |
| Vaccines without an exam fee | rabies $20, other vaccines $34 each (Vetco and VIP clinics) | ACC low-cost resource list, January 2025 | moderate (prices can change) |
| Emergency exam fee | about $150 to $335 before tests or treatment | Vetted NYC (crowd-sourced, via search summary) | low |
| Whole emergency visit | New York median bill about $1,184 (range $678 to $1,306 in reported bills) | VetReceipt, https://vetreceipt.com/vet-care-cost/new-york (2026, crowd-sourced, via search summary) | low |

Rough annual cost (my arithmetic from the unit prices above, not a published figure):
- An owner who works in an office and uses a walker every weekday pays about $5,700 a year at the Rover average (260 walks at $21.98) or about $9,200 at a walking company ($35.50).
- Add one week of boarding (about $430 at $62 a night), one routine exam plus three vaccines at low-cost prices (about $200), and six grooms for a small dog (about $360 to $540).
- Total: roughly $6,700 to $10,400 a year in services alone, before food, insurance, licensing, supplies, or any emergency. One emergency visit adds about $1,200. Confidence: low to moderate (it depends on the walker and the dog).
- The team's own interview data point (pet insurance rising from $30 to $97 a month) fits this picture, but I did not verify NYC insurance premiums.

## 5. Capacity and access

### 5.1 Emergency care

- The Schwarzman Animal Medical Center (AMC) on East 62nd Street calls itself "New York City's only Level 1 Veterinary Trauma Center," open 24/7 with no appointment needed, and says a renovation gave its emergency room "triple the cage space." Source: AMC, "Emergency and Critical Care" page (https://www.amcny.org/pet-owners/specialties/emergency-critical-care/, undated, opened). It does not publish wait times or fees. Confidence: high for what the page says.
- The ASPCA Animal Hospital (East 92nd Street) gives low-cost urgent care only to owners with household income of $50,000 or less and a qualifying condition. It books same-day appointments only, by phone from 7 a.m., and slots are "typically full by 8 AM." Source: Animal Care Centers of NYC (ACC), "Low-Cost Veterinary Resources," updated January 2025 (https://www.nycacc.org/wp-content/uploads/2025/01/ACC-LowCostVetResources-UpdatedJan2025.pdf, opened, all 5 pages). Confidence: high. What it means: affordable urgent care is rationed by who can call at 7 a.m.
- Gap: I found no published data on NYC emergency-vet wait times or emergency-clinic closures in this pass (my search budget ran out before I reached that topic). Do not claim specific wait times without a new source.

### 5.2 Low-cost and neighborhood access ("vet deserts")

- The ASPCA runs three Community Veterinary Clinics with free or low-cost exams, vaccines and medication, open only to owners with proof of public assistance (public housing, SSI, Medicaid, SNAP food stamps, WIC and similar) who live in specific ZIP codes: Long Island City, Queens (11101, 11102, 11106), East New York, Brooklyn (11207, 11208, 11212), and the South Bronx (10451, 10454, 10455, 10456, 10459). Source: ACC list, January 2025 (above). Confidence: high.
- The same list names other lower-cost options: Queens Low Cost Vet in Astoria ($25 exam), Astoria Animal Society, Value Veterinary Clinic in the Bronx, Upper Eastside Animal Hospital ($115 exam, free vaccines), Humane Society of New York clinic (appointments only; allow 24 to 48 hours for a callback), Flatbush Vet, Banfield clinics, the Vet Wheels mobile clinic (Bushwick and Jackson Heights), Vetco and VIP vaccine clinics, plus payment tools (CareCredit, Waggle crowdfunding, RedRover grants).
- Evidence of uneven access: the Bronx has the second-highest share of households with pets (29.3%) but the fewest license records per dog household (section 1.3), and the health department says dog leptospirosis may be underdiagnosed where owners cannot pay for care (section 3.3). I found no city-wide map of veterinarians per resident, so "vet desert" claims for specific outer-borough neighborhoods remain unverified.
- The Mayor's Alliance for NYC's Animals is a nonprofit founded in 2003 that acts as an information hub on resources for pet owners, rescue groups and shelters, including help to "overcome financial and other challenges that might prevent you from keeping your pets at home." Its homepage lists no program numbers (https://www.animalalliancenyc.org/, opened 2026-10-20, copyright 2026). Confidence: moderate.

### 5.3 Daycare entry rules: temperament tests and spay/neuter

- A "temperament test" (also called an evaluation or assessment day) is a supervised trial where staff watch how a new dog behaves with people and other dogs before accepting it into group play.
- Example: Buddy's Dog Den on the Upper East Side states "All dogs must pass a temperament test," requires dogs over 9 months to be spayed or neutered, and groups dogs "by size and temperament" (https://www.buddysdogden.com/upper-east-side-manhattan, current page, opened). Confidence: high for this business. I did not survey enough daycares to say how common tests are or how long waitlists are (gap).
- What it means: the professional daycare world already sorts dogs by size, sex hormones (intact versus neutered) and play style. This matches the team's interview finding that owners worry about which dogs their dog gets along with.

### 5.4 Help for owners who cannot walk or afford care

- PAWS NY's Housecall Program sends volunteers to walk dogs, clean litter, give medication and provide food and water for NYC residents with "impaired mobility due to advancing age, disability, or illness," with gross monthly income of no more than $2,500 and up to 4 pets (https://pawsny.org/what-we-do/, current page, opened). PAWS NY also runs a pet pantry, a veterinary care program and foster care. Confidence: high. I found no client count.
- ACC's "Keeping pets in homes" work: 3,898 "surrender preventions" in 2025 (ACC Year End 2025 Community Report, https://www.nycacc.org/wp-content/uploads/2026/01/ACC-CommunityReport-EOY2025.jpg, opened). ACC's surrender page lists help with vet costs, emergency vet funding, behavior advice, supplies, landlord disputes, and pet care during hospitalization, incarceration or domestic violence (https://www.nycacc.org/services/surrender/, opened).

## 6. Shelters

Animal Care Centers of NYC (ACC) is the city's open-admission shelter system: it must take in any animal, so its numbers are the best gauge of pressure. ACC publishes yearly Shelter Animals Count tables (a national standard format). I opened the 2022, 2023, 2024 and 2025 tables (links below).

### 6.1 Dogs at ACC, 2022 to 2025

| Dogs | 2022 | 2023 | 2024 | 2025 |
|---|---|---|---|---|
| Total intake (excluding end-of-life services) | 4,544 | 5,274 | 5,463 | 5,965 |
| Strays | 2,276 | 3,173 | 3,526 | 3,703 |
| Surrendered by owner | 2,266 | 2,080 | 1,906 | 2,217 |
| Adopted | 1,402 | 1,444 | 1,364 | 1,728 |
| Returned to owner | 682 | 1,039 | 1,016 | 1,111 |
| Transferred to rescue partners | 2,027 | 2,168 | 2,398 | 2,375 |
| Euthanized by the shelter | 349 | 577 | 590 | 692 |
| Placement rate | 92% | 89% | 89% | 88% |

- Sources: ACC Shelter Animals Count data for 2022 (https://www.nycacc.org/wp-content/uploads/2023/10/ACC_2022_EOY_SAC.pdf), 2023 (https://www.nycacc.org/wp-content/uploads/2024/02/ACC-2023-ANNUAL-SAC.pdf), 2024 (https://www.nycacc.org/wp-content/uploads/2025/02/SAC-2024-annual-public-template-ACC-1.pdf) and 2025 (https://www.nycacc.org/wp-content/uploads/2026/01/ACC-2025-EOY-SAC.pdf), all opened in full. The 2022 table counted 1,043 owner-requested euthanasia dogs inside intake; later years report those separately as "end-of-life services" (1,129 dogs in 2023, 1,032 in 2024, 981 in 2025), so I removed them from 2022 to compare like with like. Confidence: high.
- What changed: dog intake rose 31% from 2022 to 2025, driven by strays (up 63%). Shelter euthanasia of dogs roughly doubled (349 to 692) and the dog placement rate slipped from 92% to 88%. Only 30% of stray dogs were returned to an owner in 2025 (1,111 of 3,703).
- Owner surrenders stayed roughly flat at about 2,000 to 2,300 dogs a year (37% of dog intake in 2025).
- Cats are the bigger shelter population: in 2025 ACC took in 10,011 cats (61% of 16,437 animals), including 4,037 surrendered by owners.
- ACC's Year End 2025 Community Report adds 3,898 "surrender preventions," 1,835 foster placements, 6,845 public adoptions and 6,435 placements with rescue partners (link in section 5.4).

### 6.2 Capacity and intake limits

- ACC accepts surrenders by appointment only, after a questionnaire and a callback; walking in without an appointment "can result in long wait times, associated fees, and stress for your pet" (https://www.nycacc.org/services/surrender/, opened 2026-10-20). Confidence: high. ACC also offers "deferred/diverted intake," where the pet stays home while ACC or partners look for a placement.
- ACC's press page lists June 2023 news coverage titled "Animal Care Shelters Reaching Capacity" (Cheddar, 2023-06-21, https://cheddar.com/media/animal-care-shelters-reaching-capacity). I did not open the story. Confidence: low on details.
- Gap: I could not verify specific dates when ACC suspended or paused intake in 2023 to 2026. Do not claim a suspension without a source.

### 6.3 Why people surrender

- ACC does not publish surrender reasons on the pages I opened.
- The city's own 2025 housing guide states that the gap between pet ownership and housing access "contributes to instability for residents and unnecessary surrendering of pets to already over-populated city shelters" (Mayor's Office of Animal Welfare, 2025, page 5). This is the best NYC-government evidence that housing drives surrenders, but it gives no percentage. Confidence: high for the statement, unknown for the share.
- ACC's list of support (vet costs, supplies, behavior help, landlord disputes, hospitalization, incarceration, domestic violence) implies these are the common triggers, but that is my inference.
- Homeless shelters: under Local Law 97 of 2021, the city reports pets of people applying to homeless shelters. In fiscal year 2026 (July 2025 to June 2026), 64 of about 45,400 applicants reported a pet; most placed pets with family or friends and only 1 surrendered a pet to a shelter (NYC Open Data 5nux-zfmw, updated 2026-10-07; my query). Confidence: moderate (self-reported, likely undercounted).

## 7. Dog culture and events

### 7.1 Recurring events

| Event | What and when | Source and date | Confidence |
|---|---|---|---|
| Tompkins Square Halloween Dog Parade (East Village) | Fundraiser for the Tompkins Square dog run, the city's first (opened 1990). Claims to be the biggest dog Halloween event in the U.S., with more than 400 costumed dogs and 2,000 spectators. Forbes reported on 2026-09-22 that the parade "returns for 36th year." | Wikipedia, "Tompkins Square Park," dog run section (accessed 2026-10-20), citing the run's own site and Forbes, Melissa Kravitz, 2026-09-22 (https://www.forbes.com/sites/melissakravitz/2026/09/22/tompkins-square-dog-parade-returns-for-36th-year-in-the-east-village/; Forbes blocked my fetch) | moderate that it runs in 2026; low on attendance (self-reported, old) |
| Westminster Kennel Club Dog Show | Held since 1877. Left Madison Square Garden for 2021 to 2024 (Tarrytown, then the USTA tennis center in Queens), returned to the Garden in February 2025, and scheduled its 150th show for 2026. It moves to Netflix streaming from 2027 (announced 2026-05-13). | Wikipedia, "Westminster Kennel Club Dog Show" (accessed 2026-10-20) | moderate |
| AKC Museum of the Dog | Museum of dog art and history at 101 Park Avenue, Murray Hill, since 2017; run by the American Kennel Club. | Wikipedia, "Museum of the Dog" (accessed 2026-10-20) | moderate |
| NY Dog Film Festival | Touring program of dog-themed short films, about two hours long, produced by Tracie Hotchner; 10% of every ticket goes to a local dog rescue. The 10th annual festival premiered in New York City on 2025-10-26. | https://www.dogfilmfestival.com/ (opened 2026-10-20) | high |

- Breed meetups (for example dachshund or corgi groups in Central Park, Washington Square Park or Carl Schurz Park): I could not verify any specific recurring meetup, its schedule or its size in this pass. Carl Schurz Park and Washington Square Park each have two dog runs (Wikipedia park articles). Treat breed meetups as plausible but unverified until the team confirms one on Meetup, Instagram or Facebook.
- Dog-friendly bars and cafes: state law lets restaurants allow dogs in outdoor dining areas (section 2.6), so "dog-friendly" in NYC usually means a sidewalk or roadway table. I did not verify any list of indoor dog-friendly venues.

### 7.2 Dog runs as volunteer-run social hubs

- NYC's dog runs are maintained by volunteers and community groups, and NYC Parks will not build a run unless "there is already an established group committed to taking care of it" (City & State, 2025-08-04). The Tompkins Square run pays for its upkeep with the Halloween parade. A renovation of the Washington Square Park run cost about $650,000.
- What it means: every dog run already has an organized volunteer group, which is an existing community structure the project can work with rather than build from scratch.

### 7.3 Evidence that dogs connect people

- The strongest study I found is not NYC-specific: "The Pet Factor" surveyed 2,692 residents of San Diego, Portland, Nashville and Perth (Australia). Pet owners were more likely than non-owners to know people in their neighborhood (odds ratio 1.61), and about half of pet owners in each city got to know people through their pet (47.7% to 53.4%). Dog owners had about five times the odds of other pet owners of getting to know people through their pet (odds ratio 5.01). 42.3% of pet owners received at least one kind of social support (practical, emotional or informational help) from people they met through their pet. Source: Wood et al., PLOS ONE, 2015-04-29 (https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0122085, opened). Confidence: high for the study; moderate for applying it to NYC (it covers no NYC sample).
- The city's 2025 housing guide recommends that buildings host "Yappy Hours," adoption fairs and pet photo days to build community, and cites Pet-Inclusive Housing Initiative research that 71% of residents believe pets bring communities together (pages 6 and 12). Confidence: moderate (advocacy research).
- Gap: I found no survey that measures how often New Yorkers specifically meet friends, neighbors or partners through dogs.

## 8. Special groups

| Group | What the data show | Source |
|---|---|---|
| Older owners | 138,500 households with someone aged 62 or older have a dog (11.6% of such households) and 99,200 have a cat. PAWS NY's Housecall Program walks dogs and cares for cats for residents with "impaired mobility due to advancing age, disability, or illness" and gross monthly income of $2,500 or less. | 2023 NYCHVS, my tabulation (section 1.1); https://pawsny.org/what-we-do/ (opened) |
| Renters | 323,000 renter households have a dog and 261,000 have a cat. Protections: the three-month rule, the one-month deposit cap, no pet fees in rent-stabilized units. The city itself campaigns against breed, size and weight limits. | Sections 1.1 and 2.5 |
| Public-housing residents | NYCHA allows one dog or cat, dogs up to 25 pounds adult weight, and bans pit bulls, Rottweilers and Dobermans (including mixes); assistance animals are exempt. | NYCHA pet policy (section 2.5) |
| Low-income owners | 12.4% of households below the poverty line have a dog (against 16.9% of households at twice the poverty line or more). ASPCA's free clinics serve only public-assistance recipients in 11 ZIP codes; the ASPCA hospital's same-day slots fill by about 8 a.m. A City Council bill by Bob Holden would pilot a pet food pantry. | Sections 1.1 and 5; City & State 2025-08-04 |
| Owners with disabilities | 77,000 households (2.2%) reported a service animal in 2023 (codebook wording not checked). Service animals ride the subway without a carrier and taxis must take them; emotional support animals must still ride in a carrier on the MTA. Housing pet limits and fees do not apply to service or emotional support animals. | Sections 1.1, 2.1, 2.2 and 2.5 |
| People entering homeless shelters | 64 of about 45,400 shelter applicants in fiscal 2026 reported a pet; most placed it with family or friends. | Section 6.3 |
| Students | I found no NYC data on student pet ownership. Gap: check Columbia's own housing pet policy before using students as a target group. | none |

- City government capacity: the Mayor's Office of Animal Welfare was created in 2019 with a budget under $100,000 and one staff member (City & State, 2025-08-04). Confidence: moderate (a 2025 report; it may have changed).
- Pending City Council ideas (as of August 2025): paid leave for pet care (Shaun Abreu), a pet food pantry pilot (Bob Holden), penalties for aggressive dogs (Jenifer Rajkumar) (City & State, 2025-08-04). I did not check whether any passed.

## 9. Rainy-day and indoor options

- Public options: none found. The city's 95 dog runs are outdoor fenced areas (NYC Open Data "Dog Runs," section 2.3), and a February 2026 guide that lists about 109 NYC dog parks and runs mentions no indoor or covered public space (Jet Set Pets, "All Dog Parks In NYC (2026 Guide)," https://jetsetpets.com/all-dog-parks-nyc/, 2026-02-17, opened). The same guide mentions one private dog park, at the Soho Grand hotel, without prices. Confidence: moderate that no public indoor dog park exists.
- Private options: indoor daycare is the de facto rainy-day play space, at about $57 to $65 for a full day in Manhattan, and it requires passing a temperament test and, at some daycares, spay or neuter after 9 months (sections 4 and 5.3).
- Gap: I could not verify any commercial indoor dog park, indoor play space or bookable indoor yard in NYC, or its price, in this pass. Indoor dog parks with bars exist in other U.S. cities, but I did not verify any by name, so I leave them out. A quick check before the midterm is worth it, because a verified absence would itself be a finding.
- Why it matters: walks are daily and outdoors. Bad weather and summer heat (14 to 21 days at or above 90°F in recent years, rising) take away the main exercise and social outlet, and the only indoor substitute costs about $60 a day and has entry rules.

## 10. Gaps and checks before the midterm

These topics from the brief are not verified. Do not put numbers on slides for them without a new source.

| Topic | Status |
|---|---|
| Emergency vet wait times and clinic closures in NYC | No source found; only AMC's own capacity claims (section 5.1) |
| "Vet deserts" by outer-borough neighborhood | No vet-density data; only indirect evidence (section 5.2) |
| Daycare waitlists and how common temperament tests are | One daycare verified (section 5.3) |
| Specific ACC intake suspensions, 2023 to 2026 | Only a June 2023 "reaching capacity" headline (section 6.2) |
| Surrender reasons with percentages | None published by ACC on the pages I opened (section 6.3) |
| Breed meetups, dog-friendly bars and cafes, indoor dog parks | Not verified (sections 7.1 and 9) |
| NYC survey on meeting people through dogs | None found; the best study is from four other cities (section 7.3) |
| Uber Pet availability in NYC; current subway fine | Sources conflict or are old (sections 2.1 and 2.2) |
| NYC dog license fee | The city license page I tried returned "not found"; not verified |
| Tompkins parade 2026 date and venue | Only a Forbes headline via Wikipedia (section 7.1) |
| Student pet ownership and Columbia housing rules | Not researched |

## 11. Source list

Primary data I queried or opened myself (all accessed 2026-10-20):
- NYC HPD, 2023 NYC Housing and Vacancy Survey public use files: https://www.nyc.gov/assets/hpd/data/occupied_puf_23.csv and https://www.nyc.gov/assets/hpd/data/allunits_puf_23.csv (survey fielded January to June 2023).
- NYC Open Data, NYC Dog Licensing Dataset (nu7n-tubp, updated 2026-07-15): https://data.cityofnewyork.us/Health/NYC-Dog-Licensing-Dataset/nu7n-tubp
- NYC Open Data, DOHMH Dog Bite Data (rsgh-akpg, updated 2026-08-21): https://data.cityofnewyork.us/Health/DOHMH-Dog-Bite-Data/rsgh-akpg
- NYC Open Data, Dog Runs (hxx3-bwgv, updated 2026-10-15): https://data.cityofnewyork.us/resource/hxx3-bwgv.json
- NYC Open Data, 311 Service Requests (erm2-nwe9): https://data.cityofnewyork.us/resource/erm2-nwe9.json
- NYC Open Data, Local Law 97 of 2021 Pets in Shelter Report (5nux-zfmw, updated 2026-10-07): https://data.cityofnewyork.us/resource/5nux-zfmw.json
- NYC Health Department, 2025 Veterinary Advisory #10 (2025-12-03): https://www.nyc.gov/assets/doh/downloads/pdf/zoo/25vet-10-canine-leptospirosis.pdf
- NYC Mayor's Office of Animal Welfare, "Pet-Inclusive Housing in New York City: A Guide on Best Practices" (2025, all 27 pages read): https://www.nyc.gov/assets/animalwelfare/downloads/pdf/Pet-Inclusive-Housing-in-NYC-A-Guide-on-Best-Practices.pdf
- Animal Care Centers of NYC, Shelter Animals Count tables 2022 to 2025 (links in section 6.1), Year End 2025 Community Report (https://www.nycacc.org/wp-content/uploads/2026/01/ACC-CommunityReport-EOY2025.jpg), surrender page (https://www.nycacc.org/services/surrender/), low-cost veterinary list January 2025 (https://www.nycacc.org/wp-content/uploads/2025/01/ACC-LowCostVetResources-UpdatedJan2025.pdf).
- Wood et al., "The Pet Factor," PLOS ONE, 2015-04-29: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0122085
- Organization pages opened: AMC emergency care (https://www.amcny.org/pet-owners/specialties/emergency-critical-care/), PAWS NY (https://pawsny.org/what-we-do/), Mayor's Alliance for NYC's Animals (https://www.animalalliancenyc.org/), NY Dog Film Festival (https://www.dogfilmfestival.com/), Buddy's Dog Den (https://www.buddysdogden.com/upper-east-side-manhattan), Manhattan Pawffice (https://manhattanpawffice.com/pricing/).

Journalism and analysis opened:
- City & State New York, "How NYC governs for the dogs," Holly Pretsky, 2025-08-04: https://www.cityandstateny.com/politics/2025/08/how-nyc-governs-dogs/407159/
- Gothamist, "Ruff riders: Are there more dogs on NYC subways (or is it just us)?," Stephen Nessen and Clayton Guse, 2024-03-08: https://gothamist.com/news/are-there-more-dogs-on-nyc-subways-or-is-it-just-us
- QNS, EDC dog report coverage, 2017-08-10: https://qns.com/2017/08/city-study-finds-long-island-city-largest-proportion-dogs-per-capita/
- Kieran Healy, "Dogs of New York," 2026-10-14: https://www.r-bloggers.com/2026/10/dogs-of-new-york-2/
- Jet Set Pets, "All Dog Parks In NYC (2026 Guide)," 2026-02-17: https://jetsetpets.com/all-dog-parks-nyc/
- Wikipedia articles "Tompkins Square Park," "Westminster Kennel Club Dog Show," "Museum of the Dog" (accessed 2026-10-20).

Seen only through search summaries (lower confidence; open before quoting): NYC Parks dog-friendly areas, Central Park Conservancy dog guide, Health Code section 161.05 and penalty schedule, Parks rule 1-04(i), NYCHA pet policy page, TLC Chapter 80 and NYC311 car services, Uber Pet help page, NY Senate bill S4327, NYC311 dogs in restaurants, health department Chapter 32 notices, NYS HCR leases page, Cornell tenant guide, LeaseRunner, NWS Central Park 90-degree days, NPCC4, Village Preservation, Scienceline, amNY, NBC New York, Rover, Wag!, Swifto, Mixypaws, Pawsh, Andrea Arden, Brooklyn Dog Training Center, Vetted NYC, VetReceipt, AKC breeds by city, Cheddar, health department Veterinary Advisory #2 of 2025, New York State pet-shop sales ban notice. URLs appear next to each fact above.

## Top 10 findings that should shape the project

1. About 1 in 7 NYC households has a dog (528,000, 15.4%) and about 1 in 9 has a cat (367,000, 10.7%). Cat households equal 70% of dog households, so cat owners are a large, under-interviewed group. (2023 housing survey, my tabulation; confidence high.)
2. Manhattan is not the dog capital by household. Staten Island (23.2% of households) and the Bronx (17.5%) have the highest dog rates; Manhattan (14.3%) leads only in license data, because its owners license dogs at more than twice the Bronx rate (28 versus 11 license records per 100 dog households). Any plan built on official license records will over-weight Manhattan and miss most dogs. (Confidence: high for rates, moderate for the ratio.)
3. Only a small minority of dogs is licensed (at most about 18 license records per 100 dog households). The city does not know where most dogs are, and only 30% of stray dogs taken in by the city shelter in 2025 got back to an owner. (Confidence: moderate and high.)
4. About half of licensed dogs are toy or small breeds (45% of all records), and at least a quarter of known-breed records are medium or large. Size decides a dog's NYC life: small dogs ride the subway in a bag and qualify for public housing (25-pound cap); big dogs face bag workarounds, cab refusals and building limits. (Confidence: moderate.)
5. Shared-space friction is rising fast. Reported dog bites hit a record 5,049 in 2025 (up 25% in a year, 98% since 2020); 311 complaints about off-leash dogs in parks rose 147% and barking complaints 81% from 2020 to 2025. The team's "which dogs get along" worry is a city-scale problem, not a private quirk. (Confidence: high for counts.)
6. Off-leash space is scarce, rule-bound and uneven: 95 fenced runs, 41 of them in Manhattan (about 2,900 dog households per run) against 14 in Queens (about 9,300); unfenced off-leash play is legal only before 9 a.m. and after 9 p.m. Every run is maintained by a volunteer group, because Parks will not build one without a group. (Confidence: high.)
7. Professional care already sorts dogs the way the team's interviewees do. Daycares require temperament tests, group by size and temperament, and require spay or neuter after about 9 months. The city's housing guide promotes a "Pet Personality Profile" and a "pet resume." The building blocks of a trusted dog profile exist and are accepted. (Confidence: high for the examples, unknown for how widespread.)
8. Care is costly and sold in fragments: about $22 to $36 per walk, $57 to $65 per daycare day, $62 to $99 per boarding night, about $110 per routine exam, about $1,200 per emergency visit. An office worker with a weekday walker spends roughly $6,700 to $10,400 a year on services alone (my arithmetic). (Confidence: moderate to low.)
9. Affordable care is rationed. Free ASPCA clinics serve only public-assistance recipients in 11 ZIP codes, and the ASPCA hospital's same-day urgent slots are "typically full by 8 AM." The health department warns that dog leptospirosis is likely underdiagnosed where owners cannot pay. (Confidence: high.)
10. Shelter pressure on dogs is growing. City shelter dog intake rose 31% from 2022 to 2025 (strays up 63%), shelter euthanasia of dogs doubled (349 to 692), and surrender is by appointment only. Housing barriers are named by the city itself as a driver of surrenders, and co-op households have the lowest dog rate of any housing type (12.2%). (Confidence: high for shelter data, moderate for co-ops.)

## Pains specific to dense city life (versus dog ownership anywhere)

- No yard, so every bathroom break is a public outing. Each walk crosses shared sidewalks with rats (16 of 19 owners of 2024 leptospirosis dogs had seen rodents, mostly within half a mile of home), standing water, salt and, after snow, the rare but deadly risk of electrified sidewalk metal. An owner with a yard can skip many of these trips.
- Paying someone to walk the dog becomes a fixed monthly bill (about $440 a month for weekday walks at app prices) for owners who work long office days, because there is no yard to fall back on.
- Getting anywhere depends on the dog's size. The subway requires a bag, and cabs and regular app cars may refuse an uncrated dog. Owners without a car depend on pet rideshare. Small-dog owners can reach a vet or daycare across town by subway; big-dog owners mostly cannot without a rideshare or breaking the rule.
- Shared walls and landlords. Barking drew 8,327 complaints in 2025. Buildings and boards can cap breed, size and weight; NYCHA caps dogs at 25 pounds and bans three breed types; co-op households own dogs least. The three-month rule protects only pets kept openly in buildings with three or more units.
- Close encounters with strangers' dogs are constant. Narrow sidewalks, elevators, lobbies and crowded runs force dog-to-dog meetings that a suburban owner can avoid. Off-leash complaints and reported bites are rising (section 3), so compatibility (size, sex, neuter status, leash reactivity) matters more here.
- Off-leash play is scarce and timed: fenced runs are few and uneven by borough, and unfenced off-leash time ends at 9 a.m.
- Weather has no public indoor fallback. Rain, snow and a growing number of 90°F days remove the main exercise outlet, and the only indoor substitute is daycare at about $60 a day with entry tests.
- City-scale anonymity. With most dogs unlicensed and only 30% of stray dogs reunited, neighbors often do not know whose dog is whose, which is the opposite of the "trust people who know" pattern the team heard in interviews.

## Opportunities this suggests

Each opportunity is tied to the evidence above. The professor asked for one primary service proven first and for value before a network is large; the first two items fit that test best.

1. Curated "compatible play hours" at existing dog runs (event-first launch). Partner with the volunteer groups that already run each of the 95 dog runs to host small, sorted sessions: small dogs only, calm dogs, intact-versus-neutered-aware groups, or a reactive-dog slot. A session can deliver value with ten dogs, so it does not need a large network. Evidence: every run already has an organized group (section 7.2); owners worry about which dogs get along (team interviews); off-leash complaints and bites are rising (sections 3.1 and 3.2); daycares already group by size and temperament (section 5.3); dog owners have about five times the odds of other pet owners of meeting people through their pet (section 7.3).
2. A simple, trusted dog profile ("dog passport") earned in person. Size, sex, neuter status, leash behavior, play style and vaccines, confirmed by a run volunteer or event host rather than by star ratings. The same profile can serve as a renter's "pet resume" and as a daycare pre-screen. Evidence: daycare temperament tests (section 5.3); the city's own push for Pet Personality Profiles and pet resumes (section 2.5; housing guide pages 10, 11 and 17); interviewees trust people who know over ratings.
3. Neighbor care circles. Once owners meet at events, let small groups of vetted neighbors swap walks and short-notice sitting, which cuts the $440-a-month walker bill and covers errands, travel and late workdays. Evidence: cost data (section 4); PAWS NY exists because older and disabled owners need walking help (section 5.4); 42% of pet owners in the Pet Factor study got social support from people met through their pet (section 7.3).
4. Rainy-day and heat-day indoor pop-ups. Rent idle indoor space (a gym or church hall at off-hours) for short, profile-screened play sessions when weather cancels the run. Evidence: no public indoor dog space found (section 9); 14 to 21 days at or above 90°F now and 38 to 62 projected by the 2050s (section 3.5); daycare costs about $60 a day (section 4).
5. Big-dog mobility (more whimsical). A pooled "dog shuttle" to vets, daycares and big parks on fixed routes. Evidence: the subway bag rule and cab refusals (sections 2.1 and 2.2); a quarter or more of licensed dogs are medium or large (section 1.4).
6. Hyper-local hazard alerts from walkers. A shared map of rat hot spots and standing water, sidewalk metal that shocked a dog, and heat warnings, posted by the people who walk the block every day. Evidence: leptospirosis exposures cluster within half a mile of home (section 3.3); contact-voltage deaths (section 3.4); 311 rodent complaints of 31,000 to 42,000 a year (section 3.3).
7. Neighborhood lost-dog network. Event members' dogs are known faces, so a lost dog can be recognized locally. Evidence: only 30% of stray dogs reached an owner in 2025 and most dogs are unlicensed (sections 1.3 and 6.1).
8. Do not ignore cats. Cat households are 70% as common as dog households and cats are 61% of city shelter intake, but cats do not use runs or walkers. A cat track would need a different first service (home visits, sitting, vet transport). Evidence: sections 1.1 and 6.1.

Where to start, on this evidence: the outer boroughs and dense, run-poor areas (Queens has one run per about 9,300 dog households) need curated play most, but Manhattan's Upper West Side has the densest licensed-dog ZIP codes (10025, 10023, 10024) and a Columbia team can reach it on foot. A Morningside Heights or Upper West Side dog-run pilot is the cheapest place to prove opportunity 1 before testing it in Queens.
