import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom';

import ArticleCard from './ArticleCard';

const ARTICLE_DATA = {
  id: '687548',
  type: 'post',
  title: 'Ninja Van sees 3x rise in revenue in FYE 2019, but a tough fight lies ahead',
  status: 'publish',
  slug: 'ninja-van-sees-3x-rise-revenue-fye-2019-tough-fight-lies',
  link: 'https://www.techinasia.com/ninja-van-sees-3x-rise-revenue-fye-2019-tough-fight-lies',
  content: '<p>Singapore-based logistics startup Ninja Van’s revenue grew by over 3x in the financial year ending June 2019 from a year earlier, while its operating loss more than doubled during the same period, according to its latest regulatory filings made available on VentureCap Insights.</p>\n<p><iframe style="width: 100%; height: 600px;" title="Interactive or visual content" src="https://flo.uri.sh/visualisation/6237921/embed" frameborder="0" scrolling="no" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></p>\n<p>These numbers, however, reflect pre-Covid-19 market conditions. Since then, ecommerce has seen a post-pandemic bump, which could drive up Ninja Van’s earnings.</p>\n<p>That said, competition in last-mile logistics has intensified, and this could put pressure on the company’s bottom line. Ninja Van’s rivals are upping the stakes, with J&amp;T Express raising a <a href="https://www.techinasia.com/sources-jt-express-banks-2b-potential-listing">monster US$2 billion</a> round and Indonesia’s SiCepat Ekspres <a href="https://www.techinasia.com/indonesia-logistics-startup-sicepat-closes-170-series">hauling in US$170 million</a>. Ecommerce marketplaces themselves are <a href="https://www.techinasia.com/dawn-inhouse-ecommerce-delivery-threaten-thirdparty-logistics-firms">bolstering</a> their in-house delivery capabilities, forcing third-party players to find more ways to add value.</p>\n<p style="text-align: center;"><strong>See also: <a href="https://www.techinasia.com/visual-story/key-ecommerce-logistics-players-enablers-southeast-asia">The key ecommerce logistics players and enablers in Southeast Asia</a></strong></p>\n<p>Ninja Van has been diversifying its products, but those efforts were nascent in 2019.</p>\n<p>The company told <em>Tech in Asia</em> that it does not comment on its financials, but its co-founder and CEO, Lai Chang Wen, <a href="https://www.techinasia.com/ninja-van-powering-crossborder-ecommerce-deliveries">previously said</a> that Ninja Van has “never failed to more than double its revenue” every year. The startup also <a href="https://researchdl.chinarenaissance.com/CR_TD_TRACK_PROD_HK/external/download?q=2c08f65410c492aa1fc3d76f5318ac43cbd6387868aDLQAG6ktKR9FvrmkJPSj58SfEOm2v16nBs6W372Yh6k7VVQMi7KiJZ8Ms2LwngrgzWuYFYBRJR7N-xlqqMcOenajWVW7lVCoGmi5PAwfCKKHbhtyrAtnpagtyicrbEST2PazO2LGyhE4HVIaq12hkqG5mHnHcJdANkxQS5OwyibfjGSU4jIJ2WKo8gXZ34v-aSEx93-b9fATRZ47VMmw%2C%2C" target="_blank" rel="nofollow noopener">said</a> that it’s the second-largest regional logistics player in 2020, according to a China Renaissance report.</p>\n<div id="attachment_646418" class="wp-caption aligncenter">\n<img aria-describedby="caption-attachment-646418" loading="lazy" class="wp-image-646418 size-full" src="https://cdn.techinasia.com/wp-content/uploads/2020/05/ninja-van_7-scaled.jpg" alt="" width="4500" height="3002"><p id="caption-attachment-646418" class="wp-caption-text">A Ninja Van delivery executive / Photo credit: Ninja Van</p>\n</div>\n<p>Ninja Van has seen its revenue grow exponentially since 2016, when it began raising significant money.</p>\n<p>A major reason for the revenue jump in FYE 2018 and FYE 2019 is the collection of delivery service fees and handling fees for its logistics services. Some of the company’s top clients include Southeast Asian ecommerce players Shopee, Lazada, and Tokopedia. Ninja Van also has a strategic partnership with regional super app Grab.</p>\n<p>Both of these revenue sources grew by over 3x in FYE 2019. While Ninja Van’s delivery service fees rose to US$153.5 million during the year from US$48.3 million in FYE 2018, “handling fees and others” surged to US$10.5 million in FYE 2019 from US$3.3 million a year earlier.</p>\n<p><iframe style="width: 100%; height: 600px;" title="Interactive or visual content" src="https://flo.uri.sh/visualisation/6238028/embed" frameborder="0" scrolling="no" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></p>\n<p>The startup also recorded US$139,000 as a new source of revenue from the trading of goods in FYE 2019. This could refer to revenue from <a href="https://www.techinasia.com/ninja-van-powering-crossborder-ecommerce-deliveries">cross-border shipping services</a>, which Ninja Van introduced that year, along with overseas procurement and escrow services.</p>\n<p>However, a larger percentage of its revenue was eaten up by sales discounts, which soared 8x to US$12.5 million in FYE 2019.</p>\n<h2>Not yet profitable</h2>\n<p>In a previous <a href="https://www.techinasia.com/ninja-van-ceo-talks-profitability-deals-grab-pitfalls-gig-economy"><em>Tech in Asia</em> report</a>, Lai expressed optimism about his company’s future. “We are confident that profitability isn’t an ‘if,’ but a ‘when.’”</p>\n<p>In May 2020, the CEO told <a href="https://www.techinasia.com/ninja-van-powering-crossborder-ecommerce-deliveries"><em>Tech in Asia</em></a> that Ninja Van was profitable in three of its markets. However, he stopped short of identifying these markets and disclosing when he expects the company to turn profitable.</p>\n<p>The company also didn’t specify the profitable markets in its regulatory filings, but it gave a geographical breakdown of its revenue in FYE 2019.</p>\n<p><iframe style="width: 100%; height: 600px;" title="Interactive or visual content" src="https://flo.uri.sh/visualisation/6238171/embed" frameborder="0" scrolling="no" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></p>\n<p>The biggest market for Ninja Van was the Philippines, which brought in more than 2x revenue than its second-largest market, Indonesia. That’s despite the fact that Indonesia’s total ecommerce volume was <a href="https://www.thinkwithgoogle.com/_qs/documents/8447/e-Conomy_SEA_2019_deck_uIb8e2S.pdf" target="_blank" rel="nofollow noopener">7x bigger</a> than the Philippines in 2019. Singapore was the third-largest market, generating US$23.5 million in revenue during the same year.</p>\n<p>However, Indonesia is Ninja Van’s No. 1 market in 2020 in terms of volume share at 50%, according to <a href="https://researchdl.chinarenaissance.com/CR_TD_TRACK_PROD_HK/external/download?q=2c08f65410c492aa1fc3d76f5318ac43cbd6387868aDLQAG6ktKR9FvrmkJPSj58SfEOm2v16nBs6W372Yh6k7VVQMi7KiJZ8Ms2LwngrgzWuYFYBRJR7N-xlqqMcOenajWVW7lVCoGmi5PAwfCKKHbhtyrAtnpagtyicrbEST2PazO2LGyhE4HVIaq12hkqG5mHnHcJdANkxQS5OwyibfjGSU4jIJ2WKo8gXZ34v-aSEx93-b9fATRZ47VMmw%2C%2C" target="_blank" rel="nofollow noopener">a report from China Renaissance</a>.</p>\n<h2>Improving gross profit margin</h2>\n<p>Though Ninja Van had seen its cost of services more than double in FYE 2019 to US$103.7 million from a year earlier, its 3x revenue growth boosted its gross profit margin, which went up almost twofold to 31.6% in FYE 2019 from just 16.8% a year earlier.</p>\n<p><iframe style="width: 100%; height: 600px;" title="Interactive or visual content" src="https://flo.uri.sh/visualisation/6238256/embed" frameborder="0" scrolling="no" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></p>\n<p>In FYE 2018, Ninja Van’s gross profit margin climbed to 16.8% from just 5.1% in the previous year. Its gross profit skyrocketed by nearly 6x to US$47.9 million in FYE 2019 from just US$8.4 million a year earlier.</p>\n<h2>Rising admin expenses</h2>\n<p>Ninja Van has been posting a loss before taxes in recent years, and this continued in FYE 2019 due to its operating costs and surging administrative expenses.</p>\n<p><iframe style="width: 100%; height: 600px;" title="Interactive or visual content" src="https://flo.uri.sh/visualisation/6238323/embed" frameborder="0" scrolling="no" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></p>\n<div style="width: 100%!; margin-top: 4px!important; text-align: right!important;"></div>\n<p>Admin expenses during the year rose by nearly 3x to US$132.3 million from the previous year. In FYE 2018, admin expenses were at US$45.7 million, indicating an almost fivefold increase.</p>\n<p>While the company doesn’t give a breakdown of its admin expenses, it is generally understood to include <a href="https://www.investopedia.com/terms/a/administrative-expenses.asp" target="_blank" rel="nofollow noopener">employee salaries</a>. Indeed, employee benefits was Ninja Van’s largest expense at US$108 million.</p>\n<p>Unlike other logistics players like Lalamove and GoGoVan that aggressively pursued asset-light models by hiring freelance workers to keep costs low, Ninja Van mainly relies on full-time employees.</p>\n<p>Last year, Ninja Van said it had 30,000 delivery personnel, and many of them work full time. “We employ someone gainfully for the entire day, [someone for whom] Ninja Van [contributes] a majority of earnings,” said Lai in a 2020 interview, explaining the company’s approach to staffing.</p>\n<div id="attachment_646744" class="wp-caption alignnone">\n<img aria-describedby="caption-attachment-646744" loading="lazy" class="size-full wp-image-646744" src="https://cdn.techinasia.com/wp-content/uploads/2020/05/ninja-van_8.jpg" alt="Ninja Van team" width="1100" height="743"><p id="caption-attachment-646744" class="wp-caption-text">Photo credit: Ninja Van</p>\n</div>\n<p>Other <a href="https://www.techinasia.com/ninja-van-ceo-talks-profitability-deals-grab-pitfalls-gig-economy">fixed costs</a> include <a href="https://www.saloodo.com/logistics-dictionary/line-haul/" target="_blank" rel="nofollow noopener">line hauls</a> and logistics hubs, which can be a part of admin expenses. Expanding its operations network would have led Ninja Van to set up more of these stations to handle the pipeline of goods to be delivered. In turn, this would have resulted in a sizable jump in admin expenses.</p>\n<p>Ninja Van has grown from delivering 5,000 parcels daily in 2015 to processing a million packages a day on average across six Southeast Asian markets by the end of 2019. Overall, its net loss in FYE 2019 doubled to US$85.4 million from US37.2 million a year earlier.</p>\n<p>The company raised <a href="https://www.techinasia.com/ninja-van-raises-274m-funding">US$279 million</a> in its series D funding round in May 2020.</p>\n<p><em>Full financial statement below:</em></p>\n<p><iframe loading="lazy" id="doc_75791" class="scribd_iframe_embed" title="Ninja Van\'s FYE 2019 earnings" src="https://www.scribd.com/embeds/509223591/content?start_page=1&amp;view_mode=scroll&amp;access_key=key-TMo5O0jnfgVJxbXzamyl" width="100%" height="600" frameborder="0" scrolling="no" data-auto-height="false" data-aspect-ratio="0.707221350078493"></iframe></p>\n<div style="width: 100%!; margin-top: 4px!important; text-align: right!important;"><a class="flourish-credit" style="text-decoration: none!important;" href="https://public.flourish.studio/visualisation/6238323/?utm_source=embed&amp;utm_campaign=visualisation/6238323" target="_blank" rel="nofollow noopener"><img style="width: 105px!important; height: 16px!important; border: none!important; margin: 0!important;" src="https://public.flourish.studio/resources/made_with_flourish.svg" alt="Made with Flourish"></a></div>',
  description: 'Its operating loss, meanwhile, more than doubled during the same period.',
  author: {
    id: '449210',
    avatarUrl: 'https://cdn.techinasia.com/wp-content/authors/449210.jpg?v=1601867913',
    slug: 'collintechinasia-com',
    displayName: 'Collin Furtado'
  },
  timeToReadInMinutes: 4,
  featuredImage: {
    original: 'https://cdn.techinasia.com/wp-content/uploads/2020/05/ninja-van_7-scaled.jpg',
    thumbnail: 'https://cdn.techinasia.com/wp-content/uploads/2020/05/ninja-van_7-100x100.jpg',
    medium: 'https://cdn.techinasia.com/wp-content/uploads/2020/05/ninja-van_7-350x233.jpg',
    large: 'https://cdn.techinasia.com/wp-content/uploads/2020/05/ninja-van_7-750x500.jpg'
  },
  categories: [{
    id: '39658',
    name: 'News',
    slug: 'news'
  }, {
    id: '53123',
    name: 'Premium Content',
    slug: 'subscriber-exclusive'
  }, {
    id: '42342',
    name: 'Transportation',
    slug: 'transportation'
  }],
  updatedAt: '2021-05-25T09:54:09'
};

describe('FeaturedSliderPostListing - ArticleCard component', function () {
  afterEach(cleanup);

  it('Should return full of article info on component snapshot', function () {
    const component = renderer.create(<ArticleCard data={ ARTICLE_DATA } isRenderHighResolutionImage={ true } />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return article info with LOW resolution cover', function () {
    const lowResolutionImageStyle = `url("${ ARTICLE_DATA.featuredImage.medium }");`;
    const { container } = render(
      <ArticleCard
        data={ ARTICLE_DATA } />
    );
    const coverImageElement = container.querySelector('.lazy-image');
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).toHaveStyle({ backgroundImage: lowResolutionImageStyle });
  });

  it('Should return article info with HIGH resolution cover', function () {
    const highResolutionImageStyle = `url("${ ARTICLE_DATA.featuredImage.large }");`;
    const { container } = render(
      <ArticleCard
        data={ ARTICLE_DATA }
        isRenderHighResolutionImage={ true } />
    );
    const coverImageElement = container.querySelector('.lazy-image');
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).toHaveStyle({ backgroundImage: highResolutionImageStyle });
  });

  it('Should return article info without cover', function () {
    const data = {
      ...ARTICLE_DATA,
      featuredImage: {
        ...ARTICLE_DATA.featuredImage,
        medium: ''
      }
    };
    const { container } = render(
      <ArticleCard data={ data } />
    );
    const coverImageElement = container.querySelector('.lazy-image');
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).not.toHaveAttribute('style');
  });

  it('Should return article info without title', function () {
    const data = {
      ...ARTICLE_DATA,
      title: ''
    };
    const { container } = render(
      <ArticleCard data={ data } />
    );
    const titleElement = container.querySelector('.content-wrapper > a > h2');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('--');
  });
});
