import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import { image } from "framer-motion/client";
import qs from "qs";

const globalQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layouts.header": {
          populate: {
            logoWhite: { fields: ["url", "name"] },
            logoBlue: { fields: ["url", "name"] },

            serviceDropdown: {
              populate: {
                links: {
                  populate: {
                    icon: { fields: ["url", "name"] },
                  },
                },
              },
            },
            comapnyDropdown: {
              populate: {
                links: {
                  populate: {
                    icon: { fields: ["url", "name"] },
                  },
                },
              },
            },
          },
        },
        "layouts.footer": {
          populate: {
            socials: {
              populate: {
                icon: { fields: ["url", "name"] },
              },
            },
            logo: {
              fields: ["url", "name"],
            },
          },
        },
      },
    },
  },
});

export async function getGlobalData() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

const homepageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "homepage.herosection": {
          populate: {
            image: { fields: ["url", "name"] },
            titleImage: { fields: ["url", "name"] },
            letsTalk: true,
            viewServices: true,
          },
        },
        "homepage.brands": {
          populate: {
            logos: { fields: ["url", "name"] },
          },
        },
        "homepage.about-us": {
          populate: {
            image: {
              fields: ["url", "name"],
            },
            cta: true,
            counts: true,
          },
        },
        "homepage.video": {
          populate: {
            video: { fields: ["url", "name"] },
          },
        },
        "homepage.our-services": {
          populate: {
            cards: {
              populate: {
                images: { fields: ["url", "name"] },
                view: true,
                read: true,
              },
            },
          },
        },
        "homepage.why-softexedge": {
          populate: {
            image: {
              fields: ["url", "name"],
            },
            lists: true,
          },
        },
        "homepage.conversation": {
          populate: {
            card: {
              populate: {
                image: {
                  fields: ["url", "name"],
                },
              },
            },
          },
        },
      },
    },
  },
});

export async function getHomepageData() {
  const path = "/api/homepage";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = homepageQuery;
  return await fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: `${slug}`,
      },
    },

    populate: {
      blocks: {
        on: {
          "shared.hero-section": {
            populate: {
              images: {
                fields: ["url", "name"],
              },
            },
          },
          "aboutpage.testimonial": {
            populate: {
              cards: true,
            },
          },
          "contactpage.questions": {
            populate: {
              list: {
                populate: {
                  cta: true,
                },
              },
            },
          },
          "shared.get-started": {
            populate: {
              letsTalk: true,
              viewWork: true,
            },
          },
          "aboutpage.about": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
              cta: true,
            },
          },
          "aboutpage.impact": {
            populate: {
              counts: true,
              cards: {
                populate: {
                  icon: {
                    fields: ["url", "name"],
                  },
                  background: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
        },
      },
    },
  });

export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, {
    method: "GET",
    next: { revalidate: 3600 },
  });
}
